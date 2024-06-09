from flask import Flask, g, request, jsonify
from MainDatabase import MainDatabase
from RelativeFile import RelativeFile
from flask_cors import CORS

# 应用工厂函数
def create_app():
    app = Flask(__name__)
    CORS(app)
    # 配置数据库连接
    @app.before_request
    def before_request():
        g.db = MainDatabase("database.db", "./base")

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
        if not text.strip():
            return jsonify({'message': '搜索文本不能为空'}), 400

        teachers = g.db.query_teacher(name=text)
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

    def get_teacher_detail(teacher_id, db):
        # 查询教师信息
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

    return app


if __name__ == '__main__':
    app = create_app()
    app.run(host='0.0.0.0', port=9876)
