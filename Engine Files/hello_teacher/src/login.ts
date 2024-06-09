const { regClass } = Laya;
import { loginBase } from "./login.generated";

@regClass()
export class login extends loginBase {
    onAwake(): void {
        this.Blogin.on(Laya.Event.CLICK,this,this.click_login);
    }

    click_login(): void {
        // url: api/login
        // data: {'teacher_id':要登录的教师的工号(str), 'passward':登录密码(str)}

        // data: {'issuccessful': 登录是否成功的布尔变量(bool),
        // 'teacher_base':一个数组[教师名字(str), 教师性别(str), 教师所属学院(str), 教师图片url链接(str), 教师工号(str)](list), 
        // 'base_msg':一个数组[A.个人信息简介(str), B.个人荣誉及任职(str), C.教育工作经历(str), 上一次更新时间(str)](list),
        // 'date_msg':一个数组[A.第一周日程安排(str), B.第二周日程安排(str), 上一次更新时间(str)](list),
        // 'sci_msg':一个数组[A.研究方向1(str), B.研究方向2(str), C.研究方向3(str), 上一次更新时间(str)](list),
        // 'enroll_msg':一个数组[A.招生要求(str), B.招生计划(str), C.招生情况(str), 上一次更新时间(str)](list)
        //  }
        if (this.Tusername.text == '' || this.Tpassword.text == '') {
            Laya.LocalStorage.setItem('diglogparam', '请输入账号和密码');
            Laya.Scene.open('resources/dialog.lh', false);
        }
        else{
            var username = this.Tusername.text;
            var password = this.Tpassword.text;
            var data = {
                'teacher_id': username,
                'password': password
            }
            this.send_post_and_get_return('api/login', data, this.login_callback);
        }
    }

    login_callback(data:any): void {
        if(data['issuccessful']){
            Laya.LocalStorage.setItem('username', this.Tusername.text);
            Laya.LocalStorage.setItem('login', 'true');
            Laya.LocalStorage.setItem('diglogparam', '欢迎登录 '+ this.Tusername.text);
            Laya.Scene.open('resources/dialog.lh', false);
            data['from'] = 'hello.ls';
            Laya.Scene.open('teacher_base.ls', false, data);
            Laya.Scene.destroy('login.ls')
        }
        else{
            Laya.LocalStorage.setItem('diglogparam', '账号或密码错误');
            Laya.Scene.open('resources/dialog.lh', false);
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
        if(e=='[401]UNAUTHORIZED:http://101.42.182.89:9876/api/login'){
            Laya.LocalStorage.setItem('diglogparam', '账号或密码错误');
        }
        else{
            Laya.LocalStorage.setItem('diglogparam', '网络错误，请稍后再试');
        }
        Laya.Scene.open('resources/dialog.lh', false);
    }

}