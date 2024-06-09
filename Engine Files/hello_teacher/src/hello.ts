const { regClass } = Laya;
import { helloBase } from "./hello.generated";

@regClass()
export class hello extends helloBase {
    declare owner : Laya.Scene;
    declare hot_teacher_list: Array<string>; 

    onAwake(): void {
        this.get_hot_teacher_list();
        this.Bsearch.on(Laya.Event.CLICK,this,this.click_search);
        this.Iteacher1.on(Laya.Event.CLICK,this,this.goto_teacher, [0]);
        this.Iteacher2.on(Laya.Event.CLICK,this,this.goto_teacher, [1]);
        this.Iteacher3.on(Laya.Event.CLICK,this,this.goto_teacher, [2]);
        this.Iteacher4.on(Laya.Event.CLICK,this,this.goto_teacher, [3]);
        
        this.Blogin.on(Laya.Event.CLICK,this,this.click_login);
        // this.Iteacher1.skin='http://127.0.0.1:8000/20200706204152_gouvc.jpg'; just for example
        this.check_login();

    }

    get_hot_teacher_list(): void{
        // this.send_post_and_get_return('api/hot_teacher', {}, this.get_hot_teacher_list_callback);
        this.hot_teacher_list=['0', '1', '2', '3']
    }

    click_search(): void{
        if(this.search_input.text==''){
            Laya.LocalStorage.setItem('diglogparam','请输入搜索信息')
            Laya.Scene.open('resources/dialog.lh', false)
        }
        else{   
                // url: api/search
                // data: {'text':要搜索的文本(str), 'filter':暂空(str)}
                // 后端返回
                // data: {'teacher_id':一个搜索结果的所有教师工号(str)的数组(list), 
                //     'belong_to':一个搜索结果的所有教师所在学院(str)的数组(list), 
                //     'pic_url':一个搜索结果的所有教师头像的url(str)数组(list)
                // }

            var text = this.search_input.text;
            this.search_input.text = this.search_input.text + '  正在搜索...'
            var data = {
                'text': text,
                'filter': ''
            }
            this.send_post_and_get_return('api/search', data, this.search_callback);
        }
    }

    search_callback(data:any): void{
        var teacher_id = data['teacher_id'];
        if (teacher_id.length == 0){
            this.search_input.text = this.search_input.text.substring(0, this.search_input.text.length-9)
            Laya.LocalStorage.setItem('diglogparam','未找到相关教师')
            Laya.Scene.open('resources/dialog.lh', false)
        }
        else{
            Laya.Scene.open('search_list.ls', false, data)
            Laya.Scene.destroy('hello.ls')
        }
    }

    goto_teacher(teacher_no:number): void{
        // url: api/teacher
        // data: {'teacher_id':要获取的教师的工号(str)}
        // 后端返回
        // data: {'teacher_base':一个数组[教师名字(str), 教师性别(str), 教师所属学院(str), 教师图片url链接(str), 教师工号(str)](list), 
        // 'base_msg':一个数组[A.个人信息简介(str), B.个人荣誉及任职(str), C.教育工作经历(str), 上一次更新时间(str)](list),
        // 'date_msg':一个数组[A.第一周日程安排(str), B.第二周日程安排(str), 上一次更新时间(str)](list),
        // 'sci_msg':一个数组[A.研究方向1(str), B.研究方向2(str), C.研究方向3(str), 上一次更新时间(str)](list),
        // 'enroll_msg':一个数组[A.招生要求(str), B.招生计划(str), C.招生情况(str), 上一次更新时间(str)](list)
        // }
        var data = {
            'teacher_id': this.hot_teacher_list[teacher_no]
        }
        this.send_post_and_get_return('api/teacher', data, this.goto_teacher_callback);
    }

    goto_teacher_callback(data:any): void{
        this.search_input.text = this.search_input.text.substring(0, this.search_input.text.length-9)
        data['from'] = 'hello.ls';
        Laya.Scene.open('teacher_base.ls', false, data)
        Laya.Scene.destroy('hello.ls')
    }

    click_login(): void{
        if(this.Blogin.label=='登录'){
            Laya.Scene.open("login.ls", false) 
            Laya.Scene.destroy('hello.ls')
        }
        else{
            Laya.LocalStorage.setItem('login','false');
            Laya.LocalStorage.setItem('username','');
            this.Blogin.label = '登录';
        }
    }

    send_post_and_get_return(url:string, data:any, callback:any): void{
        var xhr = new Laya.HttpRequest();
        xhr.http.timeout = 2500;//设置超时时间；
        xhr.once(Laya.Event.COMPLETE, this, callback);
        xhr.once(Laya.Event.ERROR, this, this.httpRequestError);
        // xhr.send('http://101.42.182.89:9876/'+ url, data, 'post', 'json');
        xhr.send('http://101.42.182.89:9876/'+ url, data, 'post', 'json');
    }

    httpRequestError(e:any): void{
        if(this.search_input.text.endsWith('  正在搜索...')){
            this.search_input.text = this.search_input.text.substring(0, this.search_input.text.length-9)
        }
        console.log(e);
        if(e == '[404]NOT FOUND:http://101.42.182.89:9876/api/search'){
            this.search_input.text = this.search_input.text.substring(0, this.search_input.text.length-9)
            Laya.LocalStorage.setItem('diglogparam','未找到相关教师')
            Laya.Scene.open('resources/dialog.lh', false)
        }
        else{
            Laya.LocalStorage.setItem('diglogparam','网络错误，请稍后再试')
            Laya.Scene.open('resources/dialog.lh', false)
        }
    }

    check_login(){
        var islogin =  Laya.LocalStorage.getItem('login');
        if (islogin != null){
            if (islogin == 'true'){
                this.Blogin.label = '退出';
            }
            else{
                this.Blogin.label = '登录';
            }
        }
    }

}