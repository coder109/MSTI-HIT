const { regClass, property } = Laya;

@regClass()
export class date_list_box extends Laya.Script {
    //declare owner : Laya.Sprite3D;
    declare owner : Laya.Sprite;
    declare teacher_id : string;
    declare date_no : string;
    declare date_status : string;

    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    onAwake(): void {
        this.owner.on(Laya.Event.MOUSE_OVER,this,this.mouse_over)
        this.owner.on(Laya.Event.MOUSE_OUT,this,this.mouse_out)
    }

    //组件被启用后执行，例如节点被添加到舞台后
    //onEnable(): void {}

    //组件被禁用时执行，例如从节点从舞台移除后
    //onDisable(): void {}

    //第一次执行update之前执行，只会执行一次
    onStart(): void {
        this.teacher_id = (this.owner.getChildByName('teacher_id')as Laya.Label).text;
        this.date_no = (this.owner.getChildByName('date_no')as Laya.Label).text;
        this.date_status = (this.owner.getChildByName('date_status')as Laya.Label).text;
    }

    //手动调用节点销毁时执行
    //onDestroy(): void {}

    //每帧更新时执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    // onUpdate(): void {
    //     var no2status:{[key:string]:string} = {"0":'未处理', "1":'已同意', "2":'已拒绝', "3":'更改预约信息', "4":'已完成'};
    //     var stroage_msg = Laya.LocalStorage.getJSON('date_update')
    //     if (stroage_msg != null){
    //         if(this.teacher_id==stroage_msg['teacher_id'] && this.date_no==stroage_msg['date_no']){
                // (this.owner.getChildByName('date_status')as Laya.Label).text = "[" + no2status[stroage_msg['status']] + "]"
                // this.date_status = stroage_msg['status']
                // Laya.LocalStorage.removeItem('date_update')
    //             this.date_status = stroage_msg['status']
    //             Laya.LocalStorage.removeItem('date_update')
    //         }
    //     }
    // }

    //每帧更新时执行，在update之后执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    //onLateUpdate(): void {}

    //鼠标点击后执行。与交互相关的还有onMouseDown等十多个函数，具体请参阅文档。
    onMouseClick(): void {
        this.goto_date();
    }

    goto_date(): void{
        var data = {
            'teacher_id': this.teacher_id,
            'date_no': this.date_no
        }
        this.send_post_and_get_return('api/getdate_data', data, this.goto_date_callback);
    }

    goto_date_callback(data:any): void{
        data['teacher_id'] = this.teacher_id
        data['date_no'] = this.date_no
        data['date_status'] = this.date_status
        Laya.Scene.close('date_list.ls')
        Laya.Scene.open('date_details.ls', false, data)
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

    mouse_over(){
        Laya.Mouse.cursor = 'pointer';
    }

    mouse_out(){
        Laya.Mouse.cursor = 'default';
    }
}