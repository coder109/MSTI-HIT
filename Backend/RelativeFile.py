import os
import json
from utils import *
from ReservationList import ReservationList

class RelativeFile():
    """
    处理教师相关文件。教师的信息按照json格式存储，包含：
    1. 基本信息(base_info)
    2. 日程安排(recent_schedule)
    3. 科研成果(academic_result)
    4. 招生要求(admission_requirement)
    5. 预约列表(reservation_list)

    Attributes:
        path: 相关文件存储的路径
    """
    def __init__(self, path):
        """
        Args:
            path: 相关文件存储的路径
        """
        self.path = path
        if not os.path.exists(self.path):
            self.init_file()
        self.content_dict = json.load(open(self.path, "r", encoding="utf-8"))
        if not path.endswith(".json"):
            print("[Warning]路径不合法，相关文件应为.json格式")
            return

    def init_file(self):
        """
        初始化文件，并初始化文件内容键值对。
        """
        create_file(self.path)
        format_json_dump({"base_info": "",
                          "recent_schedule": "",
                          "academic_result": "",
                          "admission_requirement": "",
                          "reservation_list": []
                          },
                         self.path)
        return True
        
    def update_file(self, 
                    base_info=None,
                    recent_schedule=None,
                    academic_result=None,
                    admission_requirement=None,
                    reservation_list=None):
        """
        更新文件内容。
        Args:
            base_info: 基本信息
            recent_schedule: 日程安排
            academic_result: 科研成果
            admission_requirement: 招生要求
            reservation_list: 预约列表
        """
        if base_info is not None:
            self.update_base_info(base_info)
        if recent_schedule is not None:
            self.update_recent_schedule(recent_schedule)
        if academic_result is not None:
            self.update_academic_result(academic_result)
        if admission_requirement is not None:
            self.update_admission_requirement(admission_requirement)
        if reservation_list is not None:
            self.update_reservation_list(reservation_list)
        return True

    def update_base_info(self, base_info):
        """
        更新基本信息
        Args:
            base_info: 基本信息
        """
        self.content_dict["base_info"] = base_info
        format_json_dump(self.content_dict, self.path)
        print("[Info]更新基本信息成功")
        return True

    def update_recent_schedule(self, recent_schedule):
        """
        更新日程安排
        Args:
            recent_schedule: 日程安排
        """
        self.content_dict["recent_schedule"] = recent_schedule
        format_json_dump(self.content_dict, self.path)
        print("[Info]更新日程安排成功")
        return True

    def update_academic_result(self, academic_result):
        """
        更新科研成果
        Args:
            academic_result: 科研成果
        """
        self.content_dict["academic_result"] = academic_result
        format_json_dump(self.content_dict, self.path)
        print("[Info]更新科研成果成功")
        return True

    def update_admission_requirement(self, admission_requirement):
        """
        更新招生要求
        Args:
            admission_requirement: 招生要求
        """
        self.content_dict["admission_requirement"] = admission_requirement
        format_json_dump(self.content_dict, self.path)
        print("[Info]更新招生要求成功")
        return True

    def update_reservation_list(self, reservation_list: dict):
        """
        更新预约列表
        Args:
            reservation_list: 预约列表
        """
        tmp_rl = ReservationList(r_time=reservation_list["r_time"],
                                  r_place=reservation_list["r_place"],
                                  r_content=reservation_list["r_content"],
                                  r_email=reservation_list["r_email"],
                                  r_id=reservation_list["r_id"],
                                  r_status=reservation_list["r_status"])
        self.content_dict["reservation_list"].append(tmp_rl.to_dict())
        format_json_dump(self.content_dict, self.path)
        print("[Info]更新预约列表成功")
        return True

    def update_reservation_list(self, reservation_list: ReservationList):
        """
        更新预约列表
        Args:
            reservation_list: 预约列表
        """
        self.content_dict["reservation_list"].append(reservation_list.to_dict())
        format_json_dump(self.content_dict, self.path)
        print("[Info]更新预约列表成功")
        return True

    def get_base_info(self):
        """
        获取基本信息
        Returns:
            基本信息
        """
        return self.content_dict["base_info"]
    
    def get_recent_schedule(self):
        """
        获取日程安排
        Returns:
            日程安排
        """
        return self.content_dict["recent_schedule"]

    def get_academic_result(self):
        """
        获取科研成果
        Returns:    
            科研成果
        """
        return self.content_dict["academic_result"]

    def get_admission_requirement(self):
        """
        获取招生要求
        Returns:
            招生要求
        """
        return self.content_dict["admission_requirement"]


# Unit Test
if __name__ == "__main__":
    rf = RelativeFile("base/test.json")
    rf.update_academic_result("sdfadsa")
    rl = ReservationList("2020-12-12 12:12:12", "test", "test", "test")
    rf.update_reservation_list(rl)