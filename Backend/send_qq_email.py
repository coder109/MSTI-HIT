import smtplib
from email.mime.text import MIMEText
from email.header import Header

class get_sender():
    def __init__(self):
        # 发件人邮箱地址
        sendAddress = '1628625320@qq.com'
        # 发件人授权码
        password = 'rostoszmxsmeejed'

        self.__sendaddress = sendAddress
        self.__password = password

    def sendemail(self, sendto, sendmessage):
        # 连接服务器
        server = smtplib.SMTP_SSL('smtp.qq.com', 465)
        # 登录邮箱
        server.login(self.__sendaddress, self.__password)
        # 构造MIMEText对象，参数为：正文，MIME的subtype，编码方式
        message = MIMEText(sendmessage, 'plain', 'utf-8')
        message['From'] = Header(f"hello_teacher_system {self.__sendaddress}")  # 发件人的昵称 用英文不报错
        message['To'] = Header(f"stu {sendto}")  # 收件人的昵称  用英文不报错
        message['Subject'] = Header('教师预约回复', 'utf-8')  # 定义主题内容
        result = server.sendmail(self.__sendaddress, sendto, message.as_string())
        # 如果返回的结果是空字典，那么邮件发送成功
        return len(result) == 0

    # def sendemail(self, sendto, sendmessage):
    #     # 构造MIMEText对象，参数为：正文，MIME的subtype，编码方式
    #     message = MIMEText(sendmessage, 'plain', 'utf-8')
    #     message['From'] = Header(f"hello_teacher_system {self.__sendaddress}")  # 发件人的昵称 用英文不报错
    #     message['To'] = Header(f"stu {sendto}")  # 收件人的昵称  用英文不报错
    #     message['Subject'] = Header('教师预约回复', 'utf-8')  # 定义主题内容
    #     try:
    #         result = self.__server.sendmail(self.__sendaddress, sendto, message.as_string())
    #     except:
    #         self.relink()
    #         result = self.__server.sendmail(self.__sendaddress, sendto, message.as_string())
    #     # 如果返回的结果是空字典，那么邮件发送成功
    #     return len(result) == 0

    # def relink(self):
    #     self.__server.quit()
    #     self.__server = smtplib.SMTP_SSL('smtp.qq.com', 465)
    #     loginResult = self.__server.login(self.__sendaddress, self.__password)



