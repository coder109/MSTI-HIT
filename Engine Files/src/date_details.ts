const { regClass } = Laya;
import { date_detailsBase } from "./date_details.generated";

@regClass()
export class date_details extends date_detailsBase {

    declare status: string;
    declare teacher_id: string;
    declare date_no: string;
    declare temp_status: number;
    onOpened(param: any): void {
        //         var no2status:{[key:string]:string} = {"0":'未处理', "1":'已同意', "2":'已拒绝', "3":'更改预约信息', "4":'已完成'};
        this.status = param['date_status']
        this.teacher_id = param['teacher_id']
        this.date_no = param['date_no']
        // data: {'time':预约时间(str), 
        // 'location':预约地点(str), 
        // 'description':预约内容描述(str),
	    // 'email':预约者邮箱(str)}
        this.time.text = param['time']
        this.location.text = param['location']
        this.description.text = param['description']
        this.email.text = param['email']
        var status = Number(this.status);
        switch(status)
        {
            case 0:
                break;
            case 1:
                this.Bagree.disabled = true;
                this.Brefuse.disabled = true;
                this.Bchange.disabled = true;
                this.Brefuse.gray = true;
                this.Bchange.gray = true;
                this.Bfinish.disabled = false;
                this.Bfinish.gray = false;
                break;
            case 2:
                this.Bagree.disabled = true;
                this.Brefuse.disabled = true;
                this.Bchange.disabled = true;
                this.Bagree.gray = true;
                this.Bchange.gray = true;
                this.Bfinish.disabled = false;
                this.Bfinish.gray = false;
                break;
            case 3:
                this.Bagree.disabled = true;
                this.Brefuse.disabled = true;
                this.Bchange.disabled = true;
                this.Bagree.gray = true;
                this.Brefuse.gray = true;
                this.Bfinish.disabled = false;
                this.Bfinish.gray = false;
            default:
                break;
        }
    }

    onAwake(): void {
        this.Bagree.on(Laya.Event.CLICK, this, this.click_button,[1])
        this.Brefuse.on(Laya.Event.CLICK, this, this.click_button,[2])
        this.Bchange.on(Laya.Event.CLICK, this, this.click_button,[3])
        this.Bfinish.on(Laya.Event.CLICK, this, this.click_button,[4])
    }

    click_button(status:number): void{
        var data = {
            'teacher_id': this.teacher_id,
            'date_no': this.date_no,
            'status': String(status),
            'reply':this.Treply.text
        }
        this.temp_status = status
        this.send_post_and_get_return('api/update_datestatus', data, this.click_button_callback);
    }

    click_button_callback(data:any): void{
        var update_successful = data['update_successful']
        if(update_successful == 'true'){
            Laya.LocalStorage.setItem('diglogparam','操作成功')
            Laya.Scene.open('resources/dialog.lh', false)
            this.update_status(this.temp_status)
        }
        else{
            Laya.LocalStorage.setItem('diglogparam','操作失败，请稍后再试')
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
        Laya.LocalStorage.setItem('diglogparam','网络错误，请稍后再试')
        Laya.Scene.open('resources/dialog.lh', false)
    }

    update_status(status:number): void{
        this.status = String(status)
        switch(status)
        {
            case 1:
                this.Bagree.disabled = true;
                this.Brefuse.disabled = true;
                this.Bchange.disabled = true;
                this.Brefuse.gray = true;
                this.Bchange.gray = true;
                this.Bfinish.disabled = false;
                this.Bfinish.gray = false;
                break;
            case 2:
                this.Bagree.disabled = true;
                this.Brefuse.disabled = true;
                this.Bchange.disabled = true;
                this.Bagree.gray = true;
                this.Bchange.gray = true;
                this.Bfinish.disabled = false;
                this.Bfinish.gray = false;
                break;
            case 3:
                this.Bagree.disabled = true;
                this.Brefuse.disabled = true;
                this.Bchange.disabled = true;
                this.Bagree.gray = true;
                this.Brefuse.gray = true;
                this.Bfinish.disabled = false;
                this.Bfinish.gray = false;
            case 4:
                this.Bagree.disabled = true;
                this.Brefuse.disabled = true;
                this.Bchange.disabled = true;
                this.Bagree.gray = true;
                this.Brefuse.gray = true;
                this.Bchange.gray = true;
                this.Bfinish.disabled = true;
            default:
                break;
        }

        Laya.LocalStorage.setJSON('date_update',{teacher_id:this.teacher_id,date_no:this.date_no,status:this.status})
    }
}