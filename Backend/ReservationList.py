import os
import json

class ReservationList():
    """
    预约列表项
    """
    def __init__(self,
                 r_time=None,
                 r_place=None,
                 r_content=None,
                 r_email=None):
        """
        预约信息
        Args:
            r_time: 预约时间
            r_place: 预约地点
            r_content: 预约内容
            r_email: 预约邮箱
        """
        if r_time is None or r_place is None or r_content is None or r_email is None:
            print("[Error]提供给预约的参数不全")
            return
        self.r_time = r_time
        self.r_place = r_place
        self.r_content = r_content
        self.r_email = r_email
    
    def to_dict(self):
        """
        将预约列表项转化为字典。
        """
        return {
            "time": self.r_time,
            "place": self.r_place,
            "content": self.r_content,
            "email": self.r_email
        }