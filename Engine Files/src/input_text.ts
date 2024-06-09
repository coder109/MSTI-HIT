const { regClass, property } = Laya;

@regClass()
export class input_text extends Laya.Script {
    //declare owner : Laya.Sprite3D;
    declare owner : Laya.TextInput;
    declare original_text : string;
    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    //onAwake(): void {}

    //组件被启用后执行，例如节点被添加到舞台后
    onEnable(): void {
        this.owner.on(Laya.Event.BLUR, this, this.exit);
        this.original_text=this.owner.text;
    }

    exit(): void{
        if(this.owner.text == ''){
            this.owner.text = this.original_text;
        }
    }

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
        if(this.owner.text == this.original_text){
            this.owner.text = '';
        }
    }
}