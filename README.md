A demo management system of teachers' information which is implemented in Python and TypeScript.

一个简易的教师信息管理系统，用Python和TypeScript实现。

# 🚀How to run?

1. **Run Picture Server:**

   This server manages some processes about uploading avatars of teachers.

   图片服务器负责处理图片上传。

   ```shell
   cd Backend
   python picserver.py
   ```

2. **Run Backend Server**:

   This server manages some processes about searching, modifying information, etc.

   后端服务器负责处理检索和信息修改的一些过程。

   ```shell
   cd Backend
   python teacher_server.py
   ```

3. **Run Frontend Server**:

   ```shell
   cd Frontend
   python -m http.server 8848
   ```

   

