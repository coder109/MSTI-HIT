const { regClass } = Laya;
import { change_textBase } from "./change_text.generated";

@regClass()
export class change_text extends change_textBase {
    declare belong: string;
    declare old_text: string;
    declare ischange: boolean;
    declare updatetime: string;
    declare temptime: string;
    declare secondexit: boolean;
    declare title_dict: {[key:string]:string}

    onAwake(): void {
        // data: {'teacher_base':一个数组[教师名字(str), 教师性别(str), 教师所属学院(str), 教师图片url链接(str), 教师工号(str)](list), 
        //     'base_msg':一个数组[A.个人信息简介(str), B.个人荣誉及任职(str), C.教育工作经历(str), 上一次更新时间(str)](list),
        //     'date_msg':一个数组[A.第一周日程安排(str), B.第二周日程安排(str), 上一次更新时间(str)](list),
        //     'sci_msg':一个数组[A.研究方向1(str), B.研究方向2(str), C.研究方向3(str), 上一次更新时间(str)](list),
        //     'enroll_msg':一个数组[A.招生要求(str), B.招生计划(str), C.招生情况(str), 上一次更新时间(str)](list)
        // }
        this.title_dict={'base_msg-A':'个人信息简介', 'base_msg-B':'个人荣誉及任职', 'base_msg-C':'教育工作经历', 'date_msg-A':'第一周日程安排', 'date_msg-B':'第二周日程安排', 'sci_msg-A':'研究方向1', 'sci_msg-B':'研究方向2', 'sci_msg-C':'研究方向3', 'enroll_msg-A':'招生要求', 'enroll_msg-B':'招生计划', 'enroll_msg-C':'招生情况'}
        this.Bcommit.on(Laya.Event.CLICK, this, this.click_commit)
        this.Bclose.on(Laya.Event.CLICK, this, this.click_close)
        this.Bhtml.on(Laya.Event.CLICK, this, this.click_html)
        this.ischange=false
        Laya.LocalStorage.setJSON('save_change', {'if_text_change': 'false'})
        this.secondexit=false
    }

    onOpened(param: any): void {
        this.belong=param.belong;
        this.old_text=param.old_text;
        this.Tdata.text=this.old_text;
        this.Ltitle.text=this.title_dict[this.belong];
    }

    click_commit(){
        var text = this.Tdata.text
        if(text==""){
            Laya.LocalStorage.setItem('diglogparam', '请输入内容')
            Laya.Scene.open('resources/dialog.lh', false)
        }
        else if(text==this.old_text){
            Laya.LocalStorage.setItem('diglogparam', '内容未改变')
            Laya.Scene.open('resources/dialog.lh', false)
        }
        else{
            // url: api/update
            // data: {'teacher_id':要更新信息的教师的工号(str), 
            // 'data_update':要更新的信息(str), 
            // 'data_belong':更新数据所属的类别和栏目(str)}

            // data: {'update_successful':是否更新成功，成功返回true(str)，失败返回失败原因描述(str)}
            this.temptime = this.updatetime
            this.updatetime = this.get_time_now()
            var data={
                'teacher_id':Laya.LocalStorage.getItem('username'),
                'data_belong':this.belong,
                'data_update':text,
                'data_time':this.updatetime
            }

            this.send_post_and_get_return('api/update', data, this.update_callback)

        }
    }

    click_close(){
        if(this.old_text!=this.Tdata.text && !this.secondexit){
            Laya.LocalStorage.setItem('diglogparam', '尚未保存，再次点击退出')
            Laya.Scene.open('resources/dialog.lh', false)
            this.secondexit=true
        }
        else{
            if(this.ischange){
                var save_data={
                    'if_text_change': 'true',
                    'change_belong': this.belong,
                    'change_text': this.old_text,
                    'change_time': this.updatetime
                }
                Laya.LocalStorage.setJSON('save_change', save_data)
                // Laya.LocalStorage.setItem('if_text_change', 'true')
                // Laya.LocalStorage.setItem('change_belong', this.belong)
                // Laya.LocalStorage.setItem('change_text', this.old_text)
                // Laya.LocalStorage.setItem('change_time', this.updatetime)
            }
            Laya.Scene.close('change_text.ls')
        }
    }

    update_callback(data:any){
        if(data.update_successful=='更新成功'){
            this.old_text = this.Tdata.text
            this.ischange = true
            this.secondexit = false
            Laya.LocalStorage.setItem('diglogparam', '更新成功')
            Laya.Scene.open('resources/dialog.lh', false)
        }
        else{
            this.updatetime = this.temptime
            Laya.LocalStorage.setItem('diglogparam', '更新失败！' + data.update_successful)
            Laya.Scene.open('resources/dialog.lh', false)
        }
    }

    send_post_and_get_return(url:string, data:any, callback:any): void{
        var xhr = new Laya.HttpRequest();
        xhr.http.timeout = 2500;//设置超时时间；
        xhr.once(Laya.Event.COMPLETE, this, callback);
        xhr.once(Laya.Event.ERROR, this, this.httpRequestError);
        xhr.send('http://101.42.182.89:9876/'+ url, data, 'post', 'json');
    }

    httpRequestError(e:any): void{
        console.log(e);
        this.updatetime = this.temptime
        Laya.LocalStorage.setItem('diglogparam','网络错误，请稍后再试')
        Laya.Scene.open('resources/dialog.lh', false)
    }

    get_time_now(): string{
        const now = new Date();
        const year = now.getFullYear(); //得到年份
        const month = now.getMonth() + 1;//得到月份
        const date = now.getDate();//得到日期
        const hour = now.getHours();//得到小时
        const minu = now.getMinutes();//得到分钟
        return year + '-' + (month < 10 ? '0' + month : month) + '-' + (date < 10 ? '0' + date : date) + ' ' + (hour < 10 ? '0' + hour : hour) + ':' + (minu < 10 ? '0' + minu : minu)
    }

    click_html(){
        Laya.Scene.open('resources/HTMLdialog.lh', false)
    }
    
}