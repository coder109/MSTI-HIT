import os
import json
import hashlib

def create_dir(dir_path: str):
    """
    创建文件夹。如果存在，就不创建。
    Args:
        dir_path: 文件夹路径
    """
    if not os.path.exists(dir_path):
        os.makedirs(dir_path)
        print("[Info]文件夹创建成功")
    else:
        print("[Info]文件夹已存在")

def create_file(file_path: str):
    """
    创建文件。如果存在，就不创建。
    Args:
        file_path: 文件路径
    """
    if not os.path.exists(file_path):
        open(file_path, 'w').close()
        print("[Info]文件创建成功")
    else:
        print("[Info]文件已存在")

def is_str_valid(name: str) -> bool:
    """
    判断字符串是否合法。
    Args:
        name: 待检测的字符串
    Returns:
        True: 合法
        False: 不合法
    """
    if len(name) == 0:
        return False
    return True

def is_gender_valid(gender) -> bool:
    """
    判断性别是否合法。
    Args:
        gender: 性别
    Returns:
        True: 合法
        False: 不合法
    """
    if gender not in ['F', 'M']:
        return False
    return True

def is_age_valid(age: str) -> bool:
    """
    判断年龄是否合法。
    Args:
        age: 年龄
    Returns:
        True: 合法
        False: 不合法
    """
    if str(age).isdigit():
        return int(age) < 100 and int(age) > 0
    return False

def is_password_valid(password: str) -> bool:
    """
    判断密码是否合法。
    Args:
        password: 密码
    Returns:
        True: 合法
        False: 不合法
    """
    password = str(password)
    if len(password) <= 8 or len(password) > 64:
        return False
    return True

def calc_md5(input_str: str) -> str:
    """
    计算md5值。
    Args:
        input_str: 待计算的字符串
    Returns:
        md5值
    """
    input_str = str(input_str)
    m = hashlib.md5()
    m.update(input_str.encode("utf-8"))
    return m.hexdigest()

def generate_relative_file_path(base_path, t_id):
    """
    生成相对路径。
    Args:
        base_path: 基础路径
        t_id: 教师工号
    Returns:
        [头像地址，相关文件地址]
    """
    return [os.path.join(base_path, str(t_id) + ".png"), os.path.join(base_path, str(t_id) + ".json")]

def format_json_dump(data, file_path=None):
    """
    格式化json数据。如果提供文件路径，则会将格式化后的数据写入文件。
    Args:
        data: json数据
        file_path: json文件路径
    Returns:
        格式化后的json数据
    """
    content = json.dumps(data, ensure_ascii=False, indent=4)
    if file_path is not None:
        with open(file_path, 'w', encoding='utf-8') as f:
            json.dump(data, f, ensure_ascii=False, indent=4)
    return content