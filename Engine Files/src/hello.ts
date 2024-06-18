const { regClass } = Laya;
import { helloBase } from "./hello.generated";

@regClass()
export class hello extends helloBase {
    declare owner : Laya.Scene;
    declare hot_teacher_list: Array<string>; 

    onAwake(): void {
        this.get_hot_teacher_list("all");
        this.Bsearch.on(Laya.Event.CLICK,this,this.click_search);
        this.Iteacher1.on(Laya.Event.CLICK,this,this.goto_teacher, [0]);
        this.Iteacher2.on(Laya.Event.CLICK,this,this.goto_teacher, [1]);
        this.Iteacher3.on(Laya.Event.CLICK,this,this.goto_teacher, [2]);
        this.Iteacher4.on(Laya.Event.CLICK,this,this.goto_teacher, [3]);
        this.Iteacher5.on(Laya.Event.CLICK,this,this.goto_teacher, [4]);
        this.Iteacher6.on(Laya.Event.CLICK,this,this.goto_teacher, [5]);
        this.Iteacher7.on(Laya.Event.CLICK,this,this.goto_teacher, [6]);
        this.Iteacher8.on(Laya.Event.CLICK,this,this.goto_teacher, [7]);
        this.selectBox2.on(Laya.Event.CHANGE,this,this.get_hot_teacher_list, [this.selectBox2.selectedLabel]);
        
        this.Blogin.on(Laya.Event.CLICK,this,this.click_login);
        // this.Iteacher1.skin='http://127.0.0.1:8000/20200706204152_gouvc.jpg'; just for example
        this.check_login();

        // var data:{[key:string]:Array<string>} = {};
        // (data as {[key:string]:Array<string>}) = {'teacher_id':["0","1","2","3","4","5","6","7"],
        //     'belong_to':["计算机科学与技术学院","计算机科学与技术学院","计算机科学与技术学院","计算机科学与技术学院","计算机科学与技术学院","计算机科学与技术学院","计算机科学与技术学院","计算机科学与技术学院"],
        //     'pic_url':["./base\\0.png","./base\\0.png","./base\\0.png","./base\\0.png","./base\\0.png","./base\\0.png","./base\\0.png","./base\\0.png"],
        //     'teacher_name':["张三","李四","王五","赵六","孙七","周八","吴九","郑十"]}
        // this.hot_teacher_list= data['teacher_id'];
        // var teacher_name = data['teacher_name'];
        // var pic_url = data['pic_url'];
        // var belong_to = data['belong_to'];
        // this.Iteacher1.skin = "http://101.42.182.89:8000"+pic_url[0].substring(1,pic_url[0].length).replace("\\","/")
        // this.Iteacher2.skin = "http://101.42.182.89:8000"+pic_url[1].substring(1,pic_url[1].length).replace("\\","/")
        // this.Iteacher3.skin = "http://101.42.182.89:8000"+pic_url[2].substring(1,pic_url[2].length).replace("\\","/")
        // this.Iteacher4.skin = "http://101.42.182.89:8000"+pic_url[3].substring(1,pic_url[3].length).replace("\\","/")
        // this.Iteacher5.skin = "http://101.42.182.89:8000"+pic_url[4].substring(1,pic_url[4].length).replace("\\","/")
        // this.Iteacher6.skin = "http://101.42.182.89:8000"+pic_url[5].substring(1,pic_url[5].length).replace("\\","/")
        // this.Iteacher7.skin = "http://101.42.182.89:8000"+pic_url[6].substring(1,pic_url[6].length).replace("\\","/")
        // this.Iteacher8.skin = "http://101.42.182.89:8000"+pic_url[7].substring(1,pic_url[7].length).replace("\\","/")
        // this.Lteacher1.text = teacher_name[0] + '\n' + belong_to[0];
        // this.Lteacher2.text = teacher_name[1] + '\n' + belong_to[1];
        // this.Lteacher3.text = teacher_name[2] + '\n' + belong_to[2];
        // this.Lteacher4.text = teacher_name[3] + '\n' + belong_to[3];
        // this.Lteacher5.text = teacher_name[4] + '\n' + belong_to[4];
        // this.Lteacher6.text = teacher_name[5] + '\n' + belong_to[5];
        // this.Lteacher7.text = teacher_name[6] + '\n' + belong_to[6];
        // this.Lteacher8.text = teacher_name[7] + '\n' + belong_to[7];
        // this.HBox1.mouseEnabled = true;
        // this.HBox2.mouseEnabled = true;

    }

    

    get_hot_teacher_list(belong:string): void{
        if (belong == '无筛选'){
            belong='all'
        }
        this.send_post_and_get_return('api/api/gethot', {'belong':belong}, this.get_hot_teacher_list_callback);
    }

    get_hot_teacher_list_callback(data:any){
        // 后端返回
        // data: {'teacher_id':一个搜索结果的所有教师工号(str)的数组(list), 
        //     'belong_to':一个搜索结果的所有教师所在学院(str)的数组(list), 
        //     'pic_url':一个搜索结果的所有教师头像的url(str)数组(list),
        // 'teacher_name':一个搜索结果的所有教师姓名(str)的数组(list)}
    
        this.hot_teacher_list= data['teacher_id'];
        var teacher_name = data['teacher_name'];
        var pic_url = data['pic_url'];
        var belong_to = data['belong_to'];
        this.Iteacher1.skin = "http://101.42.182.89:8000"+pic_url[0].substring(1,pic_url[0].length).replace("\\","/")
        this.Iteacher2.skin = "http://101.42.182.89:8000"+pic_url[1].substring(1,pic_url[1].length).replace("\\","/")
        this.Iteacher3.skin = "http://101.42.182.89:8000"+pic_url[2].substring(1,pic_url[2].length).replace("\\","/")
        this.Iteacher4.skin = "http://101.42.182.89:8000"+pic_url[3].substring(1,pic_url[3].length).replace("\\","/")
        this.Iteacher5.skin = "http://101.42.182.89:8000"+pic_url[4].substring(1,pic_url[4].length).replace("\\","/")
        this.Iteacher6.skin = "http://101.42.182.89:8000"+pic_url[5].substring(1,pic_url[5].length).replace("\\","/")
        this.Iteacher7.skin = "http://101.42.182.89:8000"+pic_url[6].substring(1,pic_url[6].length).replace("\\","/")
        this.Iteacher8.skin = "http://101.42.182.89:8000"+pic_url[7].substring(1,pic_url[7].length).replace("\\","/")
        this.Lteacher1.text = teacher_name[0] + '\n' + belong_to[0];
        this.Lteacher2.text = teacher_name[1] + '\n' + belong_to[1];
        this.Lteacher3.text = teacher_name[2] + '\n' + belong_to[2];
        this.Lteacher4.text = teacher_name[3] + '\n' + belong_to[3];
        this.Lteacher5.text = teacher_name[4] + '\n' + belong_to[4];
        this.Lteacher6.text = teacher_name[5] + '\n' + belong_to[5];
        this.Lteacher7.text = teacher_name[6] + '\n' + belong_to[6];
        this.Lteacher8.text = teacher_name[7] + '\n' + belong_to[7];
        this.HBox1.mouseEnabled = true;
        this.HBox2.mouseEnabled = true;
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
            var select_label = this.selectBox1.selectedLabel
            if (select_label == '无筛选'){
                select_label='all'
            }
            var data = {
                'text': text,
                'filter': select_label
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
        else if(e == '[404]NOT FOUND:http://101.42.182.89:9876/api/gethot'){
            Laya.LocalStorage.setItem('diglogparam','网络错误，获取热门教师失败')
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