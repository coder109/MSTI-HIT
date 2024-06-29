const { regClass } = Laya;
import { search_listBase } from "./search_list.generated";

@regClass()
export class search_list extends search_listBase {
    onOpened(data:any): void {
        var teacher_id = data['teacher_id'] as Array<string>;
        var teacher_name = data['teacher_name'] as Array<string>;
        var belong_to = data['belong_to'] as Array<string>;
        var pic_url = data['pic_url'] as Array<string>;

        var data2push = [];
        for (var i = 0; i < teacher_id.length; i++) {
            data2push.push({teacher_msg: teacher_name[i] + ' ' + belong_to[i], teacher_pic: "http://101.42.182.89:8848"+pic_url[i].substring(1,pic_url[i].length).replace("\\","/"), teacher_id: teacher_id[i]});
        }
        this.List.array = data2push;
    }
    onAwake(): void {
        // var data2push = [];
        // for (var i = 0; i < 10; i++) {
        //     data2push.push({teacher_msg: '冯骁骋' + ' ' + '计算学部', teacher_pic: 'resources/bg.png'});
        // }
        // this.List.array = data2push;
        this.Bsearch.on(Laya.Event.CLICK,this,this.click_search);
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
            Laya.Scene.open('search_list.ls', true, data)
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
}