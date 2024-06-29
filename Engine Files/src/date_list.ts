const { regClass } = Laya;
import { date_listBase } from "./date_list.generated";

@regClass()
export class date_list extends date_listBase {
    onOpened(data:any): void {
        var no2status:{[key:string]:string} = {"0":'未处理', "1":'已同意', "2":'已拒绝', "3":'更改预约信息', "4":'已完成'};
        var date_no_list = data['date_no_list'] as Array<string>;
        var email_list = data['email_list'] as Array<string>;
        var time_list = data['time_list'] as Array<string>;
        var location_list = data['location_list'] as Array<string>;
        var status_list = data['status_list'] as Array<string>;
        var teacher_id = data['teacher_id'] as string;

        var data2push = [];
        for (var i = 0; i < date_no_list.length; i++) {
            data2push.push({no: "预约" + date_no_list[i], msg: email_list[i]+" "+time_list[i]+" "+location_list[i]+" "+"["+ no2status[status_list[i]] +"]", date_no: date_no_list[i], teacher_id: teacher_id,date_status: status_list[i]});
        }
        this.List.array = data2push;
        this.tid.text = teacher_id;

    }
}