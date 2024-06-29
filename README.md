A demo management system of teachers' information which is implemented in Python and TypeScript.

# 😗Dependency Installation

Make sure you have python3 installed, preferably python 3.12.3+.

# 😯What have we implemented?

- [x] Basic User Interface
- [x] Search Bar
  - [x] Fuzzy Search
  - [x] Result Filtering
- [x] Upload Avatars
- [x] Update Information of teachers
- [x] Appointment with teachers
  - [x] Email System
- [x] Simple Recommendation System

# 🚀How to run?

1. **Run Picture Server:**

   This server manages some processes about uploading avatars of teachers.

   ```shell
   cd Backend
   python picserver.py
   ```
   
2. **Run Backend Server**:

   This server manages some processes about searching, modifying information, etc.

   ```shell
   cd Backend
   python teacher_server.py
   ```
   
3. **Run Frontend Server**:

   ```shell
   cd Frontend
   python -m http.server 8848
   ```

   

