const { regClass, property } = Laya;

@regClass()
export class update_self extends Laya.Script {
    //declare owner : Laya.Sprite3D;
    declare owner : Laya.Label;

    @property(String)
    public belong_text: string = "";

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
        var ifchange = Laya.LocalStorage.getJSON('save_change');
        if (ifchange==null || ifchange.if_text_change=='false'){
            return
        }
        else {
            var belong = ifchange.change_belong
            var text = ifchange.change_text
            var time = ifchange.change_time
            if(this.belong_text==belong){
                this.owner.text = text
                Laya.LocalStorage.setJSON('save_change',{'if_text_change': ifchange.if_text_change+'1','change_belong':belong,'change_text':text,'change_time':time});
            }
            else if(this.belong_text.substring(this.belong_text.length-5,this.belong_text.length)=='-time'){
                // if(this.belong_text.substring(0,this.belong_text.length-5)==belong.substring(0,belong.length-2)){
                //     this.owner.text = time;
                //     Laya.LocalStorage.setJSON('save_change',{'if_text_change': ifchange.if_text_change+'1','change_belong':belong,'change_text':text,'change_time':time});
                // }
                this.owner.text = time;
                Laya.LocalStorage.setJSON('save_change',{'if_text_change': ifchange.if_text_change+'1','change_belong':belong,'change_text':text,'change_time':time});
            }
        }
    }

    //每帧更新时执行，在update之后执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    //onLateUpdate(): void {}

    //鼠标点击后执行。与交互相关的还有onMouseDown等十多个函数，具体请参阅文档。
    //onMouseClick(): void {}
}