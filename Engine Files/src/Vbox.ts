const { regClass, property } = Laya;

@regClass()
export class Vbox extends Laya.Script {
    //declare owner : Laya.Sprite3D;
    //declare owner : Laya.Sprite;

    declare first: boolean;
    @property(String)
    public belong: string = "";
    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    onAwake(): void {
        this.first=true
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
    onUpdate(): void {
        if(this.first){
            var child_num = this.owner.numChildren;
            var height = child_num / 2 * (this.owner.getChildByName('HBox1') as Laya.HBox).height
            for(var i = 0; i < child_num; i++){
                var child = this.owner.getChildAt(i);
                if(child.name.startsWith('L')){
                    height = height + (child as Laya.Label).height;
                }
            }
            (this.owner as Laya.VBox).height = height
            this.first=false
            return
        }
        var ifchange = Laya.LocalStorage.getJSON('save_change');
        if (ifchange==null || ifchange.if_text_change=='false'){
            return
        }
        else if(Laya.LocalStorage.getJSON('save_change').if_text_change=='true11'){
            var belong = ifchange.change_belong
            var text = ifchange.change_text
            var time = ifchange.change_time
            var child_num = this.owner.numChildren;
            var height = child_num/2 * (this.owner.getChildByName('HBox1') as Laya.HBox).height
            if(this.belong == belong.substring(0,belong.length-2)){
                for(var i = 0; i < child_num; i++){
                    var child = this.owner.getChildAt(i);
                    if(child.name.startsWith('L')){
                        height = height + (child as Laya.Label).height;

                    }
                }
                (this.owner as Laya.VBox).height = height
                Laya.LocalStorage.setJSON('save_change',{'if_text_change': 'false'});
            }
        }
    }

    //每帧更新时执行，在update之后执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    //onLateUpdate(): void {}

    //鼠标点击后执行。与交互相关的还有onMouseDown等十多个函数，具体请参阅文档。
    //onMouseClick(): void {}
}