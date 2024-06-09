const { regClass, property } = Laya;

@regClass()
export class teacher_list_box extends Laya.Script {
    //declare owner : Laya.Sprite3D;
    declare owner : Laya.Sprite;

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
    //onStart(): void {}

    //手动调用节点销毁时执行
    //onDestroy(): void {}

    //每帧更新时执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    //onUpdate(): void {}

    //每帧更新时执行，在update之后执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    //onLateUpdate(): void {}

    //鼠标点击后执行。与交互相关的还有onMouseDown等十多个函数，具体请参阅文档。
    onMouseClick(): void {
        this.goto_teacher();
    }

    goto_teacher(): void{
        var data = {
            'teacher_id': (this.owner.getChildByName('teacher_id')as Laya.Label).text
        }
        this.send_post_and_get_return('api/teacher', data, this.goto_teacher_callback);
    }

    goto_teacher_callback(data:any): void{
        data['from'] = 'search_list.ls';
        Laya.Scene.open('teacher_base.ls', false, data)
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