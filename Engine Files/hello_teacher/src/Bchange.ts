const { regClass, property } = Laya;

@regClass()
export class Bchange extends Laya.Script {
    //declare owner : Laya.Sprite3D;
    declare owner : Laya.Button;
    declare islogin: string;
    declare text: string;
    declare dict: {[key: string]: number}

    @property(String)
    public belong: string = "";

    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    //onAwake(): void {}

    //组件被启用后执行，例如节点被添加到舞台后
    //onEnable(): void {}

    //组件被禁用时执行，例如从节点从舞台移除后
    //onDisable(): void {}

    //第一次执行update之前执行，只会执行一次
    onStart(): void {
        this.dict = {}
        this.dict['A']=1
        this.dict['B']=3
        this.dict['C']=5
        this.check_login()
        this.owner.on(Laya.Event.MOUSE_OVER,this,this.mouse_over)
        this.owner.on(Laya.Event.MOUSE_OUT,this,this.mouse_out)
        this.text = (this.owner.parent.parent.getChildAt(this.dict[this.belong.substring(this.belong.length-1,this.belong.length)])as Laya.Label).text
    }

    //手动调用节点销毁时执行
    //onDestroy(): void {}

    //每帧更新时执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    onUpdate(): void {
        this.text = (this.owner.parent.parent.getChildAt(this.dict[this.belong.substring(this.belong.length-1,this.belong.length)])as Laya.Label).text
    }

    //每帧更新时执行，在update之后执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    //onLateUpdate(): void {}

    //鼠标点击后执行。与交互相关的还有onMouseDown等十多个函数，具体请参阅文档。
    onMouseClick(): void {
        Laya.Scene.open('change_text.ls', false, {'belong':this.belong,'old_text':this.text});
        // (this.owner.parent.parent.parent.parent.parent.parent.parent as Laya.Scene).visible=false
    }

    check_login(){
        this.islogin = Laya.LocalStorage.getItem('login');

        if(this.islogin==null){
            this.islogin='false';
        }
        if(this.islogin == 'false'){
            this.owner.visible=false
            this.owner.disabled=true
        }
        else{
            var user_id = Laya.LocalStorage.getItem('username')
            var now_id = Laya.LocalStorage.getItem('nowpageid')
            if(user_id==null){
                this.owner.visible=false
                this.owner.disabled=true
            }
            else{
                if(user_id != now_id){
                    this.owner.visible=false
                    this.owner.disabled=true
                }
            }
        }
    }

    mouse_over(){
        Laya.Mouse.cursor = 'pointer';
    }

    mouse_out(){
        Laya.Mouse.cursor = 'default';
    }
}