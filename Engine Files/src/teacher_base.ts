const { regClass } = Laya;
import { teacher_baseBase } from "./teacher_base.generated";

@regClass()
export class teacher_base extends teacher_baseBase {
    declare owner : Laya.Scene;
    declare Tname : string;
    declare Tsex : string;
    declare Tbelong : string;
    declare Iteacher : string;
    declare Tid : string;
    declare Tintro : string;
    declare Thonor : string;
    declare Tedu : string;
    declare Tupdate : string;
    declare Tdate1 : string;
    declare Tdate2 : string;
    declare Tdateupdate : string;
    declare Tsci1 : string;
    declare Tsci2 : string;
    declare Tsci3 : string;
    declare Tsciupdate : string;
    declare Tenroll1 : string;
    declare Tenroll2 : string;
    declare Tenroll3 : string;
    declare Tenrollupdate : string;
    declare from : string;
    declare islogin: string;
    declare button_list: Array<Laya.Button>;

    onOpened(data:any): void {
        this.from = 'hello.ls'
        Laya.LocalStorage.setItem('nowpageid', '-1')
        try{
            this.from = data['from'];
            this.Tname = data['teacher_base'][0];
            this.Tsex = data['teacher_base'][1];
            this.Tbelong = data['teacher_base'][2];
            this.Iteacher = data['teacher_base'][3];
            this.Tid = data['teacher_base'][4];
            this.Tintro = data['base_msg'][0];
            this.Thonor = data['base_msg'][1];
            this.Tedu = data['base_msg'][2];
            this.Tupdate = data['base_msg'][3];
            this.Tdate1 = data['date_msg'][0];
            this.Tdate2 = data['date_msg'][1];
            this.Tdateupdate = data['date_msg'][2];
            this.Tsci1 = data['sci_msg'][0];
            this.Tsci2 = data['sci_msg'][1];
            this.Tsci3 = data['sci_msg'][2];
            this.Tsciupdate = data['sci_msg'][3];
            this.Tenroll1 = data['enroll_msg'][0];
            this.Tenroll2 = data['enroll_msg'][1];
            this.Tenroll3 = data['enroll_msg'][2];
            this.Tenrollupdate = data['enroll_msg'][3];
        }
        catch(e){
            console.log(e);
        }
        if(this.Tid!=undefined){
            Laya.LocalStorage.setItem('nowpageid', this.Tid)
        }
        if (this.Tname == '' || this.Tsex == '' || this.Tbelong == '' || this.Iteacher == '' || this.Tid == '' || this.Tintro == '' || this.Thonor == '' || this.Tedu == '' ||  this.Tdate1 == '' || this.Tdate2 == '' ||  this.Tsci1 == '' || this.Tsci2 == '' || this.Tsci3 == ''  || this.Tenroll1 == '' || this.Tenroll2 == '' || this.Tenroll3 == '' ){
            Laya.LocalStorage.setItem('diglogparam','当前教师信息存在缺失')
            Laya.Scene.open('resources/dialog.lh', false)
        }
        if (this.Tname == undefined || this.Tsex == undefined || this.Tbelong == undefined || this.Iteacher == undefined || this.Tid == undefined || this.Tintro == undefined || this.Thonor == undefined || this.Tedu == undefined  || this.Tdate1 == undefined || this.Tdate2 == undefined  || this.Tsci1 == undefined || this.Tsci2 == undefined || this.Tsci3 == undefined  || this.Tenroll1 == undefined || this.Tenroll2 == undefined || this.Tenroll3 == undefined){
            Laya.LocalStorage.setItem('diglogparam','当前教师信息存在缺失')
            Laya.Scene.open('resources/dialog.lh', false)
        }
        this.Iphoto.skin = 'http://101.42.182.89:8848'+this.Iteacher.substring(1,this.Iteacher.length).replace("\\","/");
        this.Lname.text = this.Tname;
        this.Lbelong.text = this.Tbelong;
        this.Lintro.text = this.Tintro;
        this.Lhonor.text = this.Thonor;
        this.Ledu.text = this.Tedu;
        this.LTupdate.text = this.Tupdate;
        this.Ldate1.text = this.Tdate1;
        this.Ldate2.text = this.Tdate2;
        this.Ldateupdate.text = this.Tdateupdate;
        this.Lsci1.text = this.Tsci1;
        this.Lsci2.text = this.Tsci2;
        this.Lsci3.text = this.Tsci3;
        this.Lsciupdate.text = this.Tsciupdate;
        this.Lenroll1.text = this.Tenroll1;
        this.Lenroll2.text = this.Tenroll2;
        this.Lenroll3.text = this.Tenroll3;
        this.Lenrollupdate.text = this.Tenrollupdate;
    }

    onAwake(): void {
        Laya.Mouse.cursor='default';
        this.Bselect1.on(Laya.Event.CLICK, this, this.onSelecte, [0]);
        this.Bselect2.on(Laya.Event.CLICK, this, this.onSelecte, [1]);
        this.Bselect3.on(Laya.Event.CLICK, this, this.onSelecte, [2]);
        this.Bselect4.on(Laya.Event.CLICK, this, this.onSelecte, [3]);
        this.button_list = [this.Bselect1, this.Bselect2, this.Bselect3, this.Bselect4];
        this.Bgoback.on(Laya.Event.CLICK, this, this.click_goback);
        this.Bdate.on(Laya.Event.CLICK, this, this.click_date);

    }

    onSelecte(index:number): void {
        for (var i=0; i<this.button_list.length; i++){
            if(i!=index){
                this.button_list[i].selected = false;
            }
        }
        this.ViewStack.selectedIndex = index;
    }

    click_goback(): void{

        if(this.from == 'hello.ls'){
            Laya.Scene.open(this.from, false)
        }
        Laya.Scene.destroy('teacher_base.ls')
    }

    click_date(): void{
        if(this.Bdate.label="预约"){
            Laya.Scene.open('date.ls', false, this.Tid)
        }
        else{
            var data = {'teacher_id': this.Tid}
            this.send_post_and_get_return('api/getdate_list', data, this.goto_date_callback);
        }

    }
    
    goto_date_callback(data:any): void{
        var date_no_list = data['date_no_list'];
        if (date_no_list.length == 0){
            Laya.LocalStorage.setItem('diglogparam','暂无预约记录')
            Laya.Scene.open('resources/dialog.lh', false)
        }
        else{
            data['teacher_id'] = this.Tid;
            Laya.Scene.open('date_list.ls', false, data)
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