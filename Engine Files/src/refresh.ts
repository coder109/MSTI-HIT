const { regClass, property } = Laya;

@regClass()
export class refresh extends Laya.Script {
    //declare owner : Laya.Sprite3D;
    declare owner : Laya.Sprite;
    declare Tid : string;
    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    //onAwake(): void {}

    //组件被启用后执行，例如节点被添加到舞台后
    //onEnable(): void {}

    //组件被禁用时执行，例如从节点从舞台移除后
    //onDisable(): void {}

    //第一次执行update之前执行，只会执行一次
    //onStart(): void {}

    //手动调用节点销毁时执行
    //onDestroy(): void {}

    //每帧更新时执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    onUpdate(): void {
        this.Tid = (this.owner.getChildByName('tid')as Laya.Label).text;
    }

    //每帧更新时执行，在update之后执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    //onLateUpdate(): void {}

    //鼠标点击后执行。与交互相关的还有onMouseDown等十多个函数，具体请参阅文档。
    onMouseClick(): void {
        var data = {'teacher_id': this.Tid}
        this.send_post_and_get_return('api/getdate_list', data, this.goto_date_callback);
    }

    goto_date_callback(data:any): void{
        var date_no_list = data['date_no_list'];
        if (date_no_list.length == 0){
            Laya.LocalStorage.setItem('diglogparam','暂无预约记录')
            Laya.Scene.open('resources/dialog.lh', false)
        }
        else{
            var no2status:{[key:string]:string} = {"0":'未处理', "1":'已同意', "2":'已拒绝', "3":'更改预约信息', "4":'已完成'};
            var email_list = data['email_list'] as Array<string>;
            var time_list = data['time_list'] as Array<string>;
            var location_list = data['location_list'] as Array<string>;
            var status_list = data['status_list'] as Array<string>;
            var teacher_id = data['teacher_id'] as string;

            data['teacher_id'] = this.Tid;
            var data2push = [];
            for (var i = 0; i < date_no_list.length; i++) {
                data2push.push({no: "预约" + date_no_list[i], msg: email_list[i]+" "+time_list[i]+" "+location_list[i]+" "+"["+ no2status[status_list[i]] +"]", date_no: date_no_list[i], teacher_id: teacher_id,date_status: status_list[i]});
            }
            (this.owner.parent as Laya.List).array = data2push;
            
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
}