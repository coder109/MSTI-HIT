const { regClass } = Laya;
import { dialogBase } from "./dialog.generated";

@regClass()
export class dialog extends dialogBase {
    
    onAwake(): void {
        var param=Laya.LocalStorage.getItem('diglogparam');
        // if((param as string).length > 11){
        //     this.maintext.text = '&nbsp;&nbsp;&nbsp;&nbsp;' + param.substring(0, 9) + '<br>' + param.substring(9, param.length);
        // }
        // else{
        //     this.maintext.align = 'center';
        //     this.maintext.text = param
        // }
        this.maintext.text=param.substring(0, 11)
    }

    onEnable(): void {
        Laya.stage.on(Laya.Event.CLICK, this, this.close_self);
    }

    close_self(): void{
        Laya.stage.off(Laya.Event.CLICK, this, this.close_self);
        this.close();
    }
}