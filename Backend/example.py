from MainDatabase import MainDatabase
from RelativeFile import RelativeFile
from ReservationList import ReservationList

if __name__ == "__main__":
    database = MainDatabase("database.db")
    database.create_teacher(10, "王宏志", 'M', 99, "计算机科学与技术")
    database.update_teacher(10, age=20)
    info_whz = database.query_teacher(10)
    whz_files = database.get_result_file_path(info_whz)

    for whz_file in whz_files:
        rf = RelativeFile(whz_file)
        rf.update_academic_result("数据库系统")
        rl = ReservationList("2020-12-12 12:12:12", "test", "test", "test")
        rf.update_reservation_list(rl)