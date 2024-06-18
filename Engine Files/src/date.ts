const { regClass } = Laya;
import { dateBase } from "./date.generated";

@regClass()
export class date extends dateBase {
    declare Tid:string;
    declare evaluated_email:string;
    declare evaluated_code:string;
    declare now_eval_email:string;

    onOpened(data:any): void {
        this.Tid = data;
        this.evaluated_email = '';
        this.evaluated_code = '';
        this.now_eval_email = '';
    }
    onAwake(): void {
        this.Bcommite.on(Laya.Event.CLICK, this, this.click_commite);
        this.Bevaluate.on(Laya.Event.CLICK, this, this.click_evaluate);
        this.Bsendcode.on(Laya.Event.CLICK, this, this.click_sendcode);
        this.Bgoback.on(Laya.Event.CLICK, this, this.click_goback);

    }

    click_commite(): void {
        // 检查邮箱验证
        if(this.evaluated_email=='' || this.email.text!=this.evaluated_email){
            this.show_dialog('请先验证邮箱')
            return
        }
        else if(this.time.text=='' || this.location.text=='' || this.email.text=='' || this.Tdata.text==''){
            this.show_dialog('请填写完整信息')
            return
        }
        else{
            var data = {
                'Tid': this.Tid,
                'time': this.time.text,
                'location': this.location.text,
                'description': this.Tdata.text,
                'email': this.email.text,
            }
            this.send_post_and_get_return('api/commitdate', data, this.commite_callback)
        }
    }

    commite_callback(data:any): void {
        if(data['update_successful']=='true'){
            this.show_dialog('预约成功')
        }
        else{
            this.show_dialog('预约失败，请稍后再试')
        }
    }

    click_evaluate(): void {
        if(this.evaluated_code==''){
            this.show_dialog('请先发送验证码')
            return
        }
        else if(this.email.text!=this.now_eval_email){
            this.show_dialog('输入邮箱已更改')
            return
        }
        else if(this.code.text!=this.evaluated_code){
            this.show_dialog('验证码错误')
            return
        }
        else{
            this.evaluated_email = this.now_eval_email
            this.show_dialog('验证成功')
        }
    }

    click_sendcode(): void {
        if(this.email.text==''){
            this.show_dialog('请输入邮箱')
            return
        }
        else if(this.email.text.endsWith('@stu.hit.edu.cn')==false){
            this.show_dialog('请输入学校教育邮箱')
            return
        }
        else{
            this.now_eval_email = this.email.text
            var data = {
                'email': this.email.text,
            }
            this.send_post_and_get_return('api/emailcode', data, this.sendcode_callback)
        }
    }

    sendcode_callback(data:any): void {
        if(data['send_successful']=='true'){
            this.evaluated_code = data['evaluatecode']
            this.show_dialog('验证码已发送')
        }
        else{
            this.show_dialog('验证码发送失败，请稍后再试')
        }
    }

    click_goback(): void {
        Laya.Scene.destroy('date.ls')
    }

    show_dialog(msg:string): void {
        Laya.LocalStorage.setItem('diglogparam',msg)
        Laya.Scene.open('resources/dialog.lh', false)
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
        this.show_dialog('网络错误，请稍后再试')
    }
}