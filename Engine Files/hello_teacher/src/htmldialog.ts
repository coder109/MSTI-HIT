const { regClass } = Laya;

@regClass()
export class dialog extends Laya.Script {
    declare owner: Laya.Dialog
    onAwake(): void {
    }

    onEnable(): void {
        Laya.stage.on(Laya.Event.CLICK, this, this.close_self);
    }

    close_self(): void{
        Laya.stage.off(Laya.Event.CLICK, this, this.close_self);
        this.owner.close();
    }
}