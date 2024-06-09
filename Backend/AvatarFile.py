import os
import json
from utils import *
from PIL import Image
from io import BytesIO
import urllib3
import requests

class AvatarFile():
    """
    处理头像文件。
    Attributes:
        path: 头像文件存储的路径
    """
    def __init__(self, path, byte_stream):
        """
        Args:
            path: 头像文件存储的路径
            byte_stream: 头像图片二进制流
        """
        self.path = path
        byte_stream = BytesIO(byte_stream)
        img = Image.open(byte_stream)
        img.save(byte_stream, format="png")
        with open(self.path, 'wb') as f:
            f.write(byte_stream.getvalue())


if __name__ == "__main__":
    path = "./test.png"
    
    http = urllib3.PoolManager()
    response = http.request('GET','f.hiphotos.baidu.com/image/pic/item/8d5494eef01f3a29f863534d9725bc315d607c8e.jpg')
    result = response.data

    AvatarFile(path, result)
    