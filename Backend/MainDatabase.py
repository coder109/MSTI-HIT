import sqlite3
from utils import *
import os
import hashlib

class MainDatabase:
    """
    处理数据库逻辑。
    Attributes:
        conn: 与sqlite3服务器的连接
        cursor: sqlite3服务器的光标，用于数据处理
    """
    def __init__(self,
                 db_path="main.db",
                 base_file_path="./base"):
        """
        Args:
            path: 数据库文件的路径，如果不存在，会创建一个。
            base_file_path: 基础文件路径，存放教师信息。
        """
        try:
            if not os.path.exists(db_path):
                self.conn = sqlite3.connect(db_path)
                self.cursor = self.conn.cursor()
                self.init_database()
                self.conn.commit()
                self.conn.close()
            self.conn = sqlite3.connect(db_path)
            self.cursor = self.conn.cursor()
            self.base_file_path = base_file_path
            create_dir(base_file_path)
            print("[Info]数据库打开成功")
        except Exception as e:
            print(e)

    def init_database(self):
        """
        初始化数据库，创建：
        1. 教师表(工号<主键>，姓名，性别(F/M)，年龄，学院，头像地址(.png)，相关文件地址(.json)，密码)
        """
        # 创建教师表
        self.cursor.execute('''CREATE TABLE TEACHER
                            (ID INT PRIMARY KEY NOT NULL,
                            NAME           TEXT    NOT NULL,
                            GENDER         CHAR(1) NOT NULL,
                            AGE            INT     NOT NULL,
                            DEPARTMENT     TEXT    NOT NULL,
                            AVATAR_PATH    TEXT    NOT NULL,
                            FILE_PATH      TEXT    NOT NULL,
                            PASSWORD       TEXT    NOT NULL,
                            UPDATE_TIME    TEXT    NOT NULL
                            );''')
        print("[Info]初始化：创建教师表成功")
        self.conn.commit()
    
    def is_parameter_valid(self, name, gender, age, department, password):
       """
       判断参数是否合法

       Args:
           name: 教师姓名
           gender: 教师性别
           age: 教师年龄
           department: 教师学院
           password: 教师密码

       Returns:
           True: 合法
           False: 不合法
       """
       return is_str_valid(name) and is_gender_valid(gender) and is_age_valid(age) and is_str_valid(department) and is_password_valid(password)
       

    def create_teacher(self,
                       t_id=None,
                       name=None,
                       gender=None,
                       age=None,
                       department=None,
                       password=None,
                       avatar_path=None,
                       file_path=None,
                       ):
        """
        创建教师信息，并插入进数据库。
        头像文件地址、相关文件地址由程序生成
        Args:
            t_id: 教师工号
            name: 教师姓名
            gender: 教师性别
            age: 教师年龄
            department: 教师学院
            avatar_path: 教师头像地址
            file_path: 教师相关文件地址
        Returns:
            教师信息是否创建成功
        """
        if name is None or gender is None or age is None or department is None:
            print("[Error]提供的参数不全")
            return False
        if not self.is_parameter_valid(name, gender, age, department, password):
            print("[Error]参数不合法")
            return False
        try:
            avatar_path, file_path = generate_relative_file_path(self.base_file_path, t_id)
            self.cursor.execute('''INSERT INTO TEACHER
                                VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?)''',
                                (t_id, name, gender, age, department, avatar_path, file_path, calc_md5(password), "NOT INIT"))
        except Exception as e:
            print(e)
            return False
        print("[Info]创建教师信息成功")
        self.conn.commit()
        return True

    def delete_teacher(self, t_id):
        """
        删除教师信息
        Args:
            t_id: 教师工号
        Returns:
            教师信息是否删除成功
        """
        try:
            self.cursor.execute('''DELETE FROM TEACHER WHERE ID = ?''', (t_id, ))
        except Exception as e:
            print(e)
            return False
        print("[Info]删除教师信息成功")
        self.conn.commit()
        return True
    
    def update_teacher(self, t_id, name=None, gender=None, age=None, department=None, password=None, update_time=None):
        """
        更新教师信息
        Args:
            t_id: 教师工号
            name: 教师姓名
            gender: 教师性别
            age: 教师年龄
            department: 教师学院
            password: 教师密码
        Returns:
            教师信息是否更新成功
        """
        try:
            if name is not None:
                self.cursor.execute('''UPDATE TEACHER
                                    SET NAME = ?
                                    WHERE ID = ?''', (name, t_id))
            if gender is not None:
                self.cursor.execute('''UPDATE TEACHER
                                    SET GENDER = ?
                                    WHERE ID = ?''', (gender, t_id))
            if age is not None:
                self.cursor.execute('''UPDATE TEACHER
                                    SET AGE = ?
                                    WHERE ID = ?''', (age, t_id))
            if department is not None:
                self.cursor.execute('''UPDATE TEACHER
                                    SET DEPARTMENT = ?
                                    WHERE ID = ?''', (department, t_id))
            if password is not None:
                self.cursor.execute('''UPDATE TEACHER
                                    SET PASSWORD = ?
                                    WHERE ID = ?''', (calc_md5(password), t_id))
            if update_time is not None:
                self.cursor.execute('''UPDATE TEACHER
                                    SET UPDATE_TIME = ?
                                    WHERE ID = ?''', (update_time, t_id)

                )
        except Exception as e:
            print(e)
            return False
        print("[Info]更新教师信息成功")
        self.conn.commit()
        return True

    def query_teacher(self, t_id=None, name=None, gender=None, age=None, department=None, update_time=None):
        """
        查询教师信息，返回列表格式为：
        [工号，姓名，性别，年龄，学院，头像地址，相关文件地址]
        Args:
            t_id: 教师工号
            name: 教师姓名
            gender: 教师性别
            age: 教师年龄
            department: 教师学院
        Returns:
            教师信息
        """
        if t_id is not None:
            self.cursor.execute('''SELECT * FROM TEACHER WHERE ID = ?''', (t_id, ))
        elif name is not None:
            self.cursor.execute('''SELECT * FROM TEACHER WHERE NAME LIKE ?''', ('%'+name+'%', ))
        elif gender is not None:
            self.cursor.execute('''SELECT * FROM TEACHER WHERE GENDER = ?''', (gender, ))
        elif age is not None:
            self.cursor.execute('''SELECT * FROM TEACHER WHERE AGE = ?''', (age, ))
        elif department is not None:
            self.cursor.execute('''SELECT * FROM TEACHER WHERE DEPARTMENT = ?''', (department, ))
        elif update_time is not None:
            self.cursor.execute('''SELECT * FROM TEACHER WHERE UPDATE_TIME= ?''', (update_time, ))
        else:
            self.cursor.execute('''SELECT * FROM TEACHER''')
        print("[Info]查询教师信息成功")
        return self.cursor.fetchall()
    
    def get_result_id(self, result_list):
        """
        获取查询结果的ID
        Args:
            result_list: 查询结果
        Returns:
            查询结果的ID
        """
        ret_list = []
        for result in result_list:
            ret_list.append(str(result[0]))
        return ret_list

    def get_result_name(self, result_list):
        """
        获取查询结果的姓名
        Args:
            result_list: 查询结果
        Returns:
            查询结果的姓名
        """
        ret_list = []
        for result in result_list:
            ret_list.append(str(result[1]))
        return ret_list
    
    def get_result_gender(self, result_list):
        """
        获取查询结果的性别
        Args:
            result_list: 查询结果
        Returns:
            查询结果的性别
        """
        ret_list = []
        for result in result_list:
            ret_list.append(str(result[2]))
        return ret_list
    
    def get_result_age(self, result_list):
        """
        获取查询结果的年龄
        Args:
            result_list: 查询结果
        Returns:
            查询结果的年龄
        """
        ret_list = []
        for result in result_list:
            ret_list.append(str(result[3]))
        return ret_list
    
    def get_result_department(self, result_list):
        """
        获取查询结果的学院
        Args:
            result_list: 查询结果
        Returns:
            查询结果的学院
        """
        ret_list = []
        for result in result_list:
            ret_list.append(str(result[4]))
        return ret_list
    
    def get_result_avatar_path(self, result_list):
        """
        获取查询结果的头像地址
        Args:
            result_list: 查询结果
        Returns:
            查询结果的头像地址
        """
        ret_list = []
        for result in result_list:
            ret_list.append(str(result[5]))
        return ret_list
    
    def get_result_file_path(self, result_list):
        """
        获取查询结果的相关文件地址
        Args:
            result_list: 查询结果
        Returns:
            查询结果的相关文件地址
        """
        ret_list = []
        for result in result_list:
            ret_list.append(str(result[6]))
        return ret_list
    
    def get_result_password(self, result_list):
        """
        获取查询结果的密码
        Args:
            result_list: 查询结果
        Returns:
            查询结果的密码
        """
        ret_list = []
        for result in result_list:
            ret_list.append(str(result[7]))
        return ret_list
    '''
    def get_result_update_time(self, result_list):
        """
        获取查询结果的更新日期
        Args:
            result_list: 查询结果
        Returns:
            查询结果的更新日期
        """
        ret_list = []
        for result in ret_list:
            ret_list.append(str(result[8]))
        return ret_list
    '''

    def get_result_update_time(self, result_list):
        """
        获取查询结果的更新日期
        Args:
            result_list: 查询结果
        Returns:
            查询结果的更新日期列表
        """
        ret_list = []
        for result in result_list:
            if len(result) > 8:  # 确保 result 有足够的元素
                ret_list.append(str(result[8]))
        return ret_list

    def count_result(self, result_list):
        """
        统计查询结果的数量
        Args:
            result_list: 查询结果
        Returns:
            查询结果的数量
        """
        return len(result_list)
        
    def login(self, provide_password, result_list):
        """
        登录
        Args:
            provide_password: 提供的密码
            result_list: 查询结果
        Returns:
            是否登录成功
        """
        provide_password = calc_md5(provide_password)
        print(provide_password)
        if provide_password == self.get_result_password(result_list)[0]:
            return True
        else:
            return False

    def __del__(self):
        self.conn.close()
        print("[Info]数据库已关闭")

# Unit Test
if __name__ == "__main__":
    database = MainDatabase("database.db")
    database.create_teacher(0, "张三", 'M', 20, "计算机科学与技术", "111111111")
    database.create_teacher(1, "李四", 'F', 21, "计算机科学与技术", "111111111")
    database.create_teacher(2, "王五", 'M', 22, "计算机科学与技术", "111111111")
    database.create_teacher(3, "王宏志", 'M', 30, "计算机科学与技术", "111111111")
    database.create_teacher(4, "杨大易", 'M', 96, "计算机科学与技术", "111111111")

    database.query_teacher(update_time="NOT INIT")
    print(database.query_teacher(name="大"))