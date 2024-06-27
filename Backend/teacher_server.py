
import random

from datetime import datetime
from flask_cors import CORS
from flask import Flask, g, request, jsonify
from MainDatabase import MainDatabase
from RelativeFile import RelativeFile
from send_qq_email import get_sender
from ReservationList import ReservationList
import smtplib


# 应用工厂函数
def create_app():
    app = Flask(__name__)

    app.config['TEACHER_CLICK_COUNT'] = {}  # 初始化一个字典来存储点击量
    # 初始化一个字典来存储每个老师的预约编号
    app.config['TEACHER_RESERVATION_IDS'] = {}
    # 初始化邮件发送器
    app.config['SMTP_SENDER'] = get_sender()
    CORS(app)

    # 配置数据库连接
    @app.before_request
    def before_request():
        g.db = MainDatabase("database.db", "./base")

    @app.before_request
    def initialize_click_count():
        if 'TEACHER_CLICK_COUNT' not in app.config:
            app.config['TEACHER_CLICK_COUNT'] = {}

    @app.teardown_request
    def teardown_request(exception):
        db = getattr(g, 'db', None)
        if db is not None:
            db.conn.close()

    @app.route('/api/search', methods=['POST'])
    def search():
        data = request.json
        if not data or 'text' not in data:
            return jsonify({'message': '请输入要搜索的文本'}), 400

        text = data.get('text', '')
        filter_college = data.get('filter', 'all')  # 获取学院筛选条件
        if not text.strip():
            return jsonify({'message': '搜索文本不能为空'}), 400

        teachers = g.db.query_teacher(name=text)
        # 如果有学院筛选条件，则进一步筛选
        if filter_college != 'all':
            teachers = [teacher for teacher in teachers if teacher[4] == filter_college]
        if not teachers:
            return jsonify({'message': '没有找到匹配的教师'}), 404

        teacher_ids = g.db.get_result_id(teachers)
        belong_to = g.db.get_result_department(teachers)
        pic_urls = g.db.get_result_avatar_path(teachers)
        teacher_names = g.db.get_result_name(teachers)  # 获取教师姓名列表

        return jsonify({
            'teacher_id': teacher_ids,
            'belong_to': belong_to,
            'pic_url': pic_urls,
            'teacher_name': teacher_names  # 添加教师姓名数组
        })

    @app.route('/api/teacher', methods=['POST'])
    def get_teacher_info():
        data = request.json
        teacher_id = data.get('teacher_id', '')
        teachers = g.db.query_teacher(t_id=teacher_id)
        if not teachers:
            return jsonify({
                'teacher_base': [],
                'base_msg': [],
                'date_msg': [],
                'sci_msg': [],
                'enroll_msg': []
            }), 404

        if teacher_id:
            update_teacher_click_count(teacher_id)

        teacher_info = teachers[0]
        file_path = g.db.get_result_file_path(teachers)[0]  # 获取教师相关文件路径
        relative_file = RelativeFile(file_path)  # 创建 RelativeFile 对象

        # 获取信息
        base_info = relative_file.get_base_info() if relative_file else []
        recent_schedule = relative_file.get_recent_schedule() if relative_file else []
        academic_result = relative_file.get_academic_result() if relative_file else []
        admission_requirement = relative_file.get_admission_requirement() if relative_file else []
        # 获取最后一次更新时间
        last_update_time = g.db.get_result_update_time(teachers)[0] if g.db.get_result_update_time(teachers) else '未知'

        # 格式化基本信息
        teacher_base = [
            teacher_info[1],  # 教师名字
            teacher_info[2],  # 教师性别
            g.db.get_result_department(teachers)[0],  # 教师所属学院
            teacher_info[5],  # 教师图片url链接
            str(teacher_id)  # 教师工号
        ]

        # 格式化其他信息
        base_msg = [
            base_info[0] if base_info else '',  # 个人信息简介
            base_info[1] if len(base_info) > 1 else '',  # 个人荣誉及任职
            base_info[2] if len(base_info) > 2 else '',  # 教育工作经历
            # 上一次更新时间
            last_update_time
        ]

        date_msg = [
            recent_schedule[0] if recent_schedule else '',  # 第一周日程安排
            recent_schedule[1] if len(recent_schedule) > 1 else '',  # 第二周日程安排
            # 上一次更新时间
            last_update_time
        ]

        sci_msg = [
            academic_result[0] if academic_result else '',  # 研究方向1
            academic_result[1] if len(academic_result) > 1 else '',  # 研究方向2
            academic_result[2] if len(academic_result) > 2 else '',  # 研究方向3
            # 上一次更新时间
            last_update_time
        ]

        enroll_msg = [
            admission_requirement[0] if admission_requirement else '',  # 招生要求
            admission_requirement[1] if len(admission_requirement) > 1 else '',  # 招生计划
            admission_requirement[2] if len(admission_requirement) > 2 else '',  # 招生情况
            # 上一次更新时间
            last_update_time
        ]

        return jsonify({
            'teacher_base': teacher_base,
            'base_msg': base_msg,
            'date_msg': date_msg,
            'sci_msg': sci_msg,
            'enroll_msg': enroll_msg
        })

    @app.route('/api/login', methods=['POST'])
    def login():
        data = request.json
        teacher_id = data.get('teacher_id', '')
        password = data.get('password', '')
        result_list = g.db.query_teacher(t_id=teacher_id)

        if not result_list or not g.db.login(password, result_list):
            return jsonify({'issuccessful': False}), 401

        # 获取教师详细信息
        teacher_details, status_code = get_teacher_detail(teacher_id, g.db)
        if status_code == 404:
            return jsonify(teacher_details), status_code

        return jsonify({
            'issuccessful': True,
            **teacher_details  # 使用 ** 来解构字典并合并键值对
        })

    @app.route('/api/update', methods=['POST'])
    def update():
        data = request.json
        teacher_id = data.get('teacher_id', '')
        data_update = data.get('data_update', '')
        data_belong = data.get('data_belong', '')
        data_time = data.get('data_time', '')  # 添加data_time参数

        # 验证输入参数
        if not all([teacher_id, data_update, data_belong, data_time]):
            return jsonify({'update_successful': '缺少必要参数'}), 400

        # 解析 data_belong 获取类别和栏目
        try:
            category, section = data_belong.split('-')
        except ValueError:
            return jsonify({'update_successful': '数据格式不正确'}), 400

        # 查询教师信息
        result_list = g.db.query_teacher(t_id=teacher_id)
        if not result_list:
            return jsonify({'update_successful': '教师工号不存在'}), 404

        # 获取相关文件路径
        file_path = g.db.get_result_file_path(result_list)[0]
        if not file_path:
            return jsonify({'update_successful': '找不到教师的相关文件路径'}), 404

        # 创建 RelativeFile 实例
        relative_file = RelativeFile(file_path)

        # 根据类别和栏目决定调用哪个更新方法
        try:
            if category == 'base_msg':
                base_info = relative_file.get_base_info()
                # 确保 base_info 是列表，如果不是，初始化为列表
                if not isinstance(base_info, list):
                    base_info = ["", "", ""]  # 假设基本信息包含三个部分

                # 根据 section 更新基本信息，确保索引不会越界
                max_section = {'A': 0, 'B': 1, 'C': 2}
                if section in max_section:
                    index = max_section[section]
                    if len(base_info) <= index:
                        base_info.extend([''] * (index + 1 - len(base_info)))  # 使用空字符串填充列表
                    base_info[index] = data_update
                relative_file.update_base_info(base_info)
            elif category == 'date_msg':
                recent_schedule = relative_file.get_recent_schedule()
                # 确保 recent_schedule 是列表，如果不是，初始化为列表
                if not isinstance(recent_schedule, list):
                    recent_schedule = ["", ""]  # 假设日程安排包含两周的计划

                # 根据 section 更新日程安排，确保索引不会越界
                max_section = {'A': 0, 'B': 1}
                if section in max_section:
                    index = max_section[section]
                    if len(recent_schedule) <= index:
                        recent_schedule.extend([''] * (index + 1 - len(recent_schedule)))  # 使用空字符串填充列表
                    recent_schedule[index] = data_update
                relative_file.update_recent_schedule(recent_schedule)
            elif category == 'sci_msg':
                academic_result = relative_file.get_academic_result()
                # 确保 academic_result 是列表，如果不是，初始化为列表
                if not isinstance(academic_result, list):
                    academic_result = ["", "", ""]  # 初始化为包含三个空字符串的列表

                # 根据 section 更新研究方向，同时确保索引不会越界
                max_section = {'A': 0, 'B': 1, 'C': 2}
                if section in max_section:
                    index = max_section[section]
                    # 确保列表至少有当前索引长度
                    if len(academic_result) <= index:
                        # 使用空字符串填充列表到正确的长度
                        academic_result.extend([''] * (index + 1 - len(academic_result)))
                    academic_result[index] = data_update
                # 更新科研成果
                relative_file.update_academic_result(academic_result)
            elif category == 'enroll_msg':
                admission_requirement = relative_file.get_admission_requirement()
                # 确保 admission_requirement 是列表，如果不是，初始化为列表
                if not isinstance(admission_requirement, list):
                    admission_requirement = []

                # 根据 section 更新招生要求，同时确保索引不会越界
                max_section = {'A': 0, 'B': 1, 'C': 2}
                if section in max_section:
                    index = max_section[section]
                    # 确保列表至少有当前索引长度
                    if len(admission_requirement) <= index:
                        # 使用 None 或其他默认值填充列表到正确的长度
                        admission_requirement.extend([None] * (index + 1 - len(admission_requirement)))
                    admission_requirement[index] = data_update
                relative_file.update_admission_requirement(admission_requirement)
            else:
                return jsonify({'update_successful': '更新数据所属的类别和栏目不匹配'}), 400

            # 更新成功后，记录更新时间
            if g.db.update_teacher(teacher_id, update_time=data_time):
                # 假设更新操作成功，返回成功信息
                return jsonify({'update_successful': '更新成功'})
            else:
                raise Exception('更新教师信息失败')

        except Exception as e:
            # 记录错误日志
            app.logger.error(f"更新失败：{e}")
            # 返回失败原因
            return jsonify({'update_successful': '更新失败，请稍后重试'}), 500

    # 学生预约教师
    @app.route('/api/commitdate', methods=['POST'])
    def commit_date():
        data = request.json
        teacher_id = data.get('Tid')
        time = data.get('time')
        location = data.get('location')
        description = data.get('description')
        email = data.get('email')
        print(teacher_id)
        print(time)
        print(location)
        print(email)

        # 参数验证
        if not all([teacher_id, time, location, description, email]):
            return jsonify({'update_successful': '参数不全'}), 400

        try:
            teachers = g.db.query_teacher(t_id=teacher_id)
            if not teachers:
                return jsonify({'update_successful': '教师工号不存在'}), 404

            file_path = g.db.get_result_file_path(teachers)[0]  # 获取教师相关文件路径
            if not file_path:
                return jsonify({'update_successful': '找不到教师的相关文件路径'}), 404

            relative_file = RelativeFile(file_path)  # 创建 RelativeFile 对象
            # 获取老师当前的最大预约编号，并加1作为新编号
            reservation_id = get_next_reservation_id(teacher_id, app)
            # 创建预约对象
            reservation = ReservationList(
                r_time=time,
                r_place=location,
                r_content=description,
                r_email=email,
                r_id=reservation_id,  # 生成编号
                r_status=0
            )
            print("编号")
            print(reservation_id)
            relative_file.update_reservation_list(reservation)
            return jsonify({'update_successful': 'true'}), 200
            '''
            # 更新预约列表
            if relative_file.update_reservation_list(reservation):
                return jsonify({'update_successful': 'true'}), 200
            else:
                return jsonify({'update_successful': '预约信息更新失败'}), 500
            '''
        except Exception as e:
            # 日志记录异常信息，返回给用户通用错误信息
            app.logger.error(f"更新预约信息时发生错误：{e}")
            return jsonify({'update_successful': '服务端发生错误'}), 500

    # 邮箱验证路由
    @app.route('/api/emailcode', methods=['POST'])
    def send_email_code():
        data = request.json
        email = data.get('email')
        print(data)
        # 参数验证
        if not email:
            return jsonify({'send_successful': 'false', 'evaluatecode': '邮箱参数缺失'}), 400

        try:
            # 生成验证码
            code = ''.join(random.choices('0123456789', k=6))

            # 获取邮件发送器
            sender = app.config.get('SMTP_SENDER')
            print(code)
            '''
            if sender is None:
                # 处理 SMTP_SENDER 未初始化的情况
                app.logger.error('邮件发送器未初始化')
                return jsonify({'send_successful': 'false', 'evaluatecode': '邮件发送器未初始化'}), 500
            if sender.sendemail(email, code):
                # 邮件发送成功，存储或记录验证码以便验证
                return jsonify({'send_successful': 'true', 'evaluatecode': code}), 200
            else:
                # 记录日志，返回给用户通用错误信息
                app.logger.error(f"邮件发送失败：邮箱地址为 {email}")
                return jsonify({'send_successful': 'false', 'evaluatecode': '邮件发送失败'}), 500
                '''
            sender.sendemail(email, code)
            return jsonify({'send_successful': 'true', 'evaluatecode': code}), 200
        except smtplib.SMTPException as e:
            # 记录SMTP异常
            app.logger.error(f"SMTP 邮件发送异常：{e}")
            return jsonify({'send_successful': 'false', 'evaluatecode': 'SMTP服务异常'}), 500
        except Exception as e:
            # 日志记录异常信息，返回给用户通用错误信息
            app.logger.error(f"发送邮件时发生错误：{e}")
            return jsonify({'send_successful': 'false', 'evaluatecode': '服务端发生错误'}), 500

    # 教师获取预约列表
    @app.route('/api/getdate_list', methods=['POST'])
    def get_date_list():
        data = request.json
        teacher_id = data.get('teacher_id')

        # 验证教师工号是否提供
        if not teacher_id:
            return jsonify({
                'date_no_list': [],
                'email_list': [],
                'time_list': [],
                'location_list': [],
                'status_list': []
            }), 400

        # 查询教师信息
        result_list = g.db.query_teacher(t_id=teacher_id)
        if not result_list:
            return jsonify({
                'message': '教师工号不存在'
            }), 404

        reservation_lists = g.db.get_result_reservation_list(result_list)

        # 过滤掉状态为已完成的预约
        active_reservations = []
        for reservations in reservation_lists:
            for reservation in reservations:
                if reservation.get('status') != 4:
                    active_reservations.append(reservation)
       
        

        # 提取所需的预约信息列表
        date_no_list = [str(reservation.get('id')) for reservation in active_reservations]
        email_list = [reservation.get('email') for reservation in active_reservations]
        time_list = [reservation.get('time') for reservation in active_reservations]
        location_list = [reservation.get('place') for reservation in active_reservations]
        status_list = [str(reservation.get('status')) for reservation in active_reservations]

        return jsonify({
            'date_no_list': date_no_list,
            'email_list': email_list,
            'time_list': time_list,
            'location_list': location_list,
            'status_list': status_list
        }), 200

    # 教师获取预约信息
    @app.route('/api/getdate_data', methods=['POST'])
    def get_date_data():
        data = request.json
        teacher_id = data.get('teacher_id')
        date_no = data.get('date_no')
        date_no = int(date_no)
        if not all([teacher_id, date_no]):
            return jsonify({'error': '缺少必要的参数'}), 400

        try:
            # 查询教师信息
            result_list = g.db.query_teacher(t_id=teacher_id)
            if not result_list:
                return jsonify({'error': '教师工号不存在'}), 404

            # 获取教师的预约列表文件路径
            file_path = g.db.get_result_file_path(result_list)[0]
            if not file_path:
                return jsonify({'error': '找不到教师的相关文件路径'}), 404

            # 获取预约列表
            reservation_list = g.db.get_result_reservation_list(result_list)
            reservation_list = [reservation for sublist in reservation_list for reservation in sublist]
            if not reservation_list:
                return jsonify({'error': '没有找到预约列表'}), 404

            # 根据 date_no 获取预约信息
            reservation_info = next((reservation for reservation in reservation_list if reservation.get('id') == date_no),None)
            # 使用列表推导式来查找第一个匹配的预约信息
            # reservation_info = next((reservation for reservation in reservation_list if reservation['id'] == date_no),None)
            if not reservation_info:
                return jsonify({'error': '预约编号不存在'}), 404

            return jsonify({
                'time': reservation_info.get('time'),
                'location': reservation_info.get('place'),
                'description': reservation_info.get('content'),
                'email': reservation_info.get('email')
            })

        except Exception as e:
            # 日志记录异常信息，返回给用户通用错误信息
            app.logger.error(f"获取预约信息时发生错误：{e}")
            return jsonify({'error': '服务端发生错误'}), 500

    # 教师预约状态更新
    @app.route('/api/update_datestatus', methods=['POST'])
    def update_date_status():
        data = request.json
        teacher_id = data.get('teacher_id')
        date_no = data.get('date_no')
        status = data.get('status')
        reply = data.get('reply')
        status = int(status)
        date_no = int(date_no)

        if not all([teacher_id, date_no, status]):
            return jsonify({'update_successful': '缺少必要的参数'}), 400
        try:
            # 查询教师信息
            result_list = g.db.query_teacher(t_id=teacher_id)
            if not result_list:
                return jsonify({'update_successful': '教师工号不存在'}), 404

            # 获取教师的预约列表文件路径
            file_path = g.db.get_result_file_path(result_list)[0]
            if not file_path:
                return jsonify({'update_successful': '找不到教师的相关文件路径'}), 404

            # 创建 RelativeFile 对象
            relative_file = RelativeFile(file_path)

            # 获取预约列表
            reservation_list = g.db.get_result_reservation_list(result_list)
            reservation_list = [reservation for sublist in reservation_list for reservation in sublist]
            # 找到需要更新状态的预约
            reservation_to_update = next((reservation for reservation in reservation_list if reservation['id'] == date_no),
                                         None)
            print(reservation_to_update)
            print("找到")
            reservation_to_update_instance = ReservationList(
                r_time=reservation_to_update['time'],
                r_place=reservation_to_update['place'],
                r_content=reservation_to_update['content'],
                r_email=reservation_to_update['email'],
                r_id=reservation_to_update['id'],
                r_status=reservation_to_update['status']
            )

            # 更新状态和回复信息
            reservation_to_update_instance.r_status = status
            reservation_to_update_instance.r_reply = reply

            # 将更新后的 ReservationList 实例传递给 update_reservation_list 方法
            relative_file.update_reservation_list(reservation_to_update_instance)
            if status in [1, 2, 3]:  # 1, 2, 3分别代表接受、拒绝和更改预约信息的状态
                send_reply_email(reservation_to_update['email'], status, reply)
            # 更新数据库中的教师更新时间
            if g.db.update_teacher(teacher_id, update_time=datetime.now().strftime("%Y-%m-%d %H:%M:%S")):
                return jsonify({'update_successful': 'true'})
            else:
                return jsonify({'update_successful': '数据库更新失败'}), 500
        except Exception as e:
            # 日志记录异常信息，返回给用户通用错误信息
            app.logger.error(f"更新预约状态时发生错误：{e}")
            return jsonify({'update_successful': '服务端发生错误'}), 500

    # 教师推荐
    @app.route('/api/gethot', methods=['POST'])
    def get_hot_teachers():
        data = request.json
        belong = data.get('belong')
        if not belong:
            return jsonify({
                'teacher_id': [],
                'belong_to': [],
                'pic_url': [],
                'teacher_name': []
            }), 400
        try:
            if belong == '无筛选':
                teachers = g.db.query_teacher(None)
            else:
                # 查询指定学院的所有教师信息
                teachers = g.db.query_teacher(department=belong)

            if not teachers:
                return jsonify({
                    'message': '没有找到指定学院的教师'
                }), 404

            # 根据当前存储的点击量获取热门教师
            teachers_click_count = {
                str(teacher[0]): app.config['TEACHER_CLICK_COUNT'].get(str(teacher[0]), 0)
                for teacher in teachers
            }

            hot_teachers_id = sorted(teachers_click_count.items(), key=lambda item: item[1], reverse=True)[:8]
            # 构造返回数据
            teacher_ids = [teacher_id for teacher_id, _ in hot_teachers_id]
            hot_teachers = [g.db.query_teacher(t_id=teacher_id) for teacher_id in teacher_ids]
            teacher_ids = [g.db.get_result_id(teacher) for teacher in hot_teachers]
            teacher_ids = [item[0] for item in teacher_ids]
            belong_to = [g.db.get_result_department(teacher) for teacher in hot_teachers]
            belong_to = [item[0] for item in belong_to]
            pic_urls = [g.db.get_result_avatar_path(teacher) for teacher in hot_teachers]
            pic_urls = [item[0] for item in pic_urls]
            teacher_names = [g.db.get_result_name(teacher) for teacher in hot_teachers]
            teacher_names = [item[0] for item in teacher_names]

            return jsonify({
                'teacher_id': teacher_ids,
                'belong_to': belong_to,
                'pic_url': pic_urls,
                'teacher_name': teacher_names
            })

        except Exception as e:
            # 日志记录异常信息，返回给用户通用错误信息
            app.logger.error(f"获取推荐教师时发生错误：{e}")
            return jsonify({'message': '服务端发生错误'}), 500

    # 辅助函数
    # 查询教师信息
    def get_teacher_detail(teacher_id, db):
        teachers = g.db.query_teacher(t_id=teacher_id)
        if not teachers:
            # 如果没有找到教师信息，返回空列表
            return None, 404

        teacher_info = teachers[0]
        file_path = db.get_result_file_path(teachers)[0]  # 获取教师相关文件路径
        relative_file = RelativeFile(file_path)  # 创建 RelativeFile 对象

        # 从 RelativeFile 对象获取信息
        base_info = relative_file.get_base_info()
        recent_schedule = relative_file.get_recent_schedule()
        academic_result = relative_file.get_academic_result()
        admission_requirement = relative_file.get_admission_requirement()

        # 获取最后一次更新时间
        last_update_time = g.db.get_result_update_time(teachers)[0] if g.db.get_result_update_time(teachers) else '未知'

        # 格式化教师基本信息
        teacher_base = [
            teacher_info[1],  # 教师名字
            teacher_info[2],  # 教师性别
            db.get_result_department(teachers)[0],  # 教师所属学院
            teacher_info[5],  # 教师图片url链接
            str(teacher_id)  # 教师工号
        ]

        # 格式化其他信息
        base_msg = [
            base_info[0] if base_info else '',  # 个人信息简介
            base_info[1] if len(base_info) > 1 else '',  # 个人荣誉及任职
            base_info[2] if len(base_info) > 2 else '',  # 教育工作经历
            # 上一次更新时间
            last_update_time
        ]

        date_msg = [
            recent_schedule[0] if recent_schedule else '',  # 第一周日程安排
            recent_schedule[1] if len(recent_schedule) > 1 else '',  # 第二周日程安排
            # 上一次更新时间
            last_update_time
        ]

        sci_msg = [
            academic_result[0] if academic_result else '',  # 研究方向1
            academic_result[1] if len(academic_result) > 1 else '',  # 研究方向2
            academic_result[2] if len(academic_result) > 2 else '',  # 研究方向3
            # 上一次更新时间
            last_update_time
        ]

        enroll_msg = [
            admission_requirement[0] if admission_requirement else '',  # 招生要求
            admission_requirement[1] if len(admission_requirement) > 1 else '',  # 招生计划
            admission_requirement[2] if len(admission_requirement) > 2 else '',  # 招生情况
            # 上一次更新时间
            last_update_time
        ]

        # 准备响应数据
        response_data = {
            'teacher_base': teacher_base,
            'base_msg': base_msg,
            'date_msg': date_msg,
            'sci_msg': sci_msg,
            'enroll_msg': enroll_msg
        }

        return response_data, 200

    # 生成预约编号
    def get_next_reservation_id(teacher_id, app):
        """
        获取老师的下一个预约编号。
        """
        # 检查老师是否已经有预约编号，如果没有，从0开始
        if teacher_id not in app.config['TEACHER_RESERVATION_IDS']:
            app.config['TEACHER_RESERVATION_IDS'][teacher_id] = 0
        # 更新老师的预约编号
        app.config['TEACHER_RESERVATION_IDS'][teacher_id] += 1
        return app.config['TEACHER_RESERVATION_IDS'][teacher_id]

    # 回复邮件
    def send_reply_email(student_email, status, reply):

        # 从 Flask 应用的配置中获取邮件发送器
        sender = app.config.get('SMTP_SENDER')

        if not sender:
            raise ValueError("邮件发送器未正确初始化")

        # 构造邮件内容
        subject = "您的教师预约状态更新"
        message = f"尊敬的学生，您与教师的预约请求已经更新。\n状态：{'接受' if status == 1 else '拒绝' if status == 2 else '需要更改'}\n回复内容：{reply}\n更新时间：{datetime.now().strftime('%Y-%m-%d %H:%M:%S')}"

        # 发送邮件
        try:
            sender.sendemail(student_email, message)
            print("邮件发送成功")
        except Exception as e:
            print(f"邮件发送失败：{e}")
            raise

    # 更新点击量
    def update_teacher_click_count(teacher_id):
        if teacher_id in app.config['TEACHER_CLICK_COUNT']:
            app.config['TEACHER_CLICK_COUNT'][teacher_id] += 1
        else:
            app.config['TEACHER_CLICK_COUNT'][teacher_id] = 1

    return app


if __name__ == '__main__':
    app = create_app()
    #app.run(debug=True)
    app.run(host='0.0.0.0',port=9876)
