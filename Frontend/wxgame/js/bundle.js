"use strict";
(() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __name = (target, value) => __defProp(target, "name", { value, configurable: true });
  var __decorateClass = (decorators, target, key, kind) => {
    var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
    for (var i = decorators.length - 1, decorator; i >= 0; i--)
      if (decorator = decorators[i])
        result = (kind ? decorator(target, key, result) : decorator(result)) || result;
    if (kind && result)
      __defProp(target, key, result);
    return result;
  };

  // src/Bchange.ts
  var { regClass, property } = Laya;
  var Bchange = class extends Laya.Script {
    constructor() {
      super(...arguments);
      this.belong = "";
    }
    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    //onAwake(): void {}
    //组件被启用后执行，例如节点被添加到舞台后
    //onEnable(): void {}
    //组件被禁用时执行，例如从节点从舞台移除后
    //onDisable(): void {}
    //第一次执行update之前执行，只会执行一次
    onStart() {
      this.dict = {};
      this.dict["A"] = 1;
      this.dict["B"] = 3;
      this.dict["C"] = 5;
      this.check_login();
      this.owner.on(Laya.Event.MOUSE_OVER, this, this.mouse_over);
      this.owner.on(Laya.Event.MOUSE_OUT, this, this.mouse_out);
      this.text = this.owner.parent.parent.getChildAt(this.dict[this.belong.substring(this.belong.length - 1, this.belong.length)]).text;
    }
    //手动调用节点销毁时执行
    //onDestroy(): void {}
    //每帧更新时执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    onUpdate() {
      this.text = this.owner.parent.parent.getChildAt(this.dict[this.belong.substring(this.belong.length - 1, this.belong.length)]).text;
    }
    //每帧更新时执行，在update之后执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    //onLateUpdate(): void {}
    //鼠标点击后执行。与交互相关的还有onMouseDown等十多个函数，具体请参阅文档。
    onMouseClick() {
      Laya.Scene.open("change_text.ls", false, { "belong": this.belong, "old_text": this.text });
    }
    check_login() {
      this.islogin = Laya.LocalStorage.getItem("login");
      if (this.islogin == null) {
        this.islogin = "false";
      }
      if (this.islogin == "false") {
        this.owner.visible = false;
        this.owner.disabled = true;
      } else {
        var user_id = Laya.LocalStorage.getItem("username");
        var now_id = Laya.LocalStorage.getItem("nowpageid");
        if (user_id == null) {
          this.owner.visible = false;
          this.owner.disabled = true;
        } else {
          if (user_id != now_id) {
            this.owner.visible = false;
            this.owner.disabled = true;
          }
        }
      }
    }
    mouse_over() {
      Laya.Mouse.cursor = "pointer";
    }
    mouse_out() {
      Laya.Mouse.cursor = "default";
    }
  };
  __name(Bchange, "Bchange");
  __decorateClass([
    property(String)
  ], Bchange.prototype, "belong", 2);
  Bchange = __decorateClass([
    regClass("HVS0pFikSxa7zE7WPyw5_A")
  ], Bchange);

  // src/Bclose.ts
  var { regClass: regClass2, property: property2 } = Laya;
  var Bclose = class extends Laya.Script {
    constructor() {
      super(...arguments);
      this.now = "";
      this.from = "";
    }
    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    onAwake() {
      this.owner.on(Laya.Event.MOUSE_OVER, this, this.mouse_over);
      this.owner.on(Laya.Event.MOUSE_OUT, this, this.mouse_out);
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
    onMouseClick() {
      if (this.from != "") {
        Laya.Scene.open(this.from, false);
      }
      if (this.now != "") {
        Laya.Scene.close(this.now);
      }
    }
    mouse_over() {
      Laya.Mouse.cursor = "pointer";
    }
    mouse_out() {
      Laya.Mouse.cursor = "default";
    }
  };
  __name(Bclose, "Bclose");
  __decorateClass([
    property2(String)
  ], Bclose.prototype, "now", 2);
  __decorateClass([
    property2(String)
  ], Bclose.prototype, "from", 2);
  Bclose = __decorateClass([
    regClass2("JJUo1JeGSiu3bWhdEaW0fg")
  ], Bclose);

  // src/Bdate.ts
  var { regClass: regClass3, property: property3 } = Laya;
  var Bdate = class extends Laya.Script {
    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    //onAwake(): void {}
    //组件被启用后执行，例如节点被添加到舞台后
    // onEnable(): void {}
    //组件被禁用时执行，例如从节点从舞台移除后
    //onDisable(): void {}
    //第一次执行update之前执行，只会执行一次
    //onStart(): void {}
    //手动调用节点销毁时执行
    //onDestroy(): void {}
    //每帧更新时执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    onUpdate() {
      var islogin = Laya.LocalStorage.getItem("login");
      if (islogin == null) {
        islogin = "false";
      }
      if (islogin == "false") {
        this.owner.label = "预约";
      } else {
        var user_id = Laya.LocalStorage.getItem("username");
        var now_id = Laya.LocalStorage.getItem("nowpageid");
        if (user_id == null) {
          this.owner.label = "预约";
        } else {
          if (user_id == now_id) {
            this.owner.label = "预约管理";
            this.owner.skin = "resources/btn_r.png";
          }
        }
      }
    }
    //每帧更新时执行，在update之后执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    //onLateUpdate(): void {}
    //鼠标点击后执行。与交互相关的还有onMouseDown等十多个函数，具体请参阅文档。
    //onMouseClick(): void {}
  };
  __name(Bdate, "Bdate");
  Bdate = __decorateClass([
    regClass3("GfXUYjLyT0mPyDiRVbLv5w")
  ], Bdate);

  // src/Button_pointer.ts
  var { regClass: regClass4, property: property4 } = Laya;
  var Button_pointer = class extends Laya.Script {
    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    onAwake() {
      this.owner.on(Laya.Event.MOUSE_OVER, this, this.mouse_over);
      this.owner.on(Laya.Event.MOUSE_OUT, this, this.mouse_out);
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
    //onMouseClick(): void {}
    mouse_over() {
      Laya.Mouse.cursor = "pointer";
    }
    mouse_out() {
      Laya.Mouse.cursor = "default";
    }
  };
  __name(Button_pointer, "Button_pointer");
  Button_pointer = __decorateClass([
    regClass4("hDaNyyZ_Rjaj06MCYvkvPg")
  ], Button_pointer);

  // src/Vbox.ts
  var { regClass: regClass5, property: property5 } = Laya;
  var Vbox = class extends Laya.Script {
    constructor() {
      super(...arguments);
      this.belong = "";
    }
    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    onAwake() {
      this.first = true;
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
    onUpdate() {
      if (this.first) {
        var child_num = this.owner.numChildren;
        var height = child_num / 2 * this.owner.getChildByName("HBox1").height;
        for (var i = 0; i < child_num; i++) {
          var child = this.owner.getChildAt(i);
          if (child.name.startsWith("L")) {
            height = height + child.height;
          }
        }
        this.owner.height = height;
        this.first = false;
        return;
      }
      var ifchange = Laya.LocalStorage.getJSON("save_change");
      if (ifchange == null || ifchange.if_text_change == "false") {
        return;
      } else if (Laya.LocalStorage.getJSON("save_change").if_text_change == "true11111") {
        var belong = ifchange.change_belong;
        var text = ifchange.change_text;
        var time = ifchange.change_time;
        var child_num = this.owner.numChildren;
        var height = child_num / 2 * this.owner.getChildByName("HBox1").height;
        if (this.belong == belong.substring(0, belong.length - 2)) {
          for (var i = 0; i < child_num; i++) {
            var child = this.owner.getChildAt(i);
            if (child.name.startsWith("L")) {
              height = height + child.height;
            }
          }
          this.owner.height = height;
          Laya.LocalStorage.setJSON("save_change", { "if_text_change": "false" });
        }
      }
    }
    //每帧更新时执行，在update之后执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    //onLateUpdate(): void {}
    //鼠标点击后执行。与交互相关的还有onMouseDown等十多个函数，具体请参阅文档。
    //onMouseClick(): void {}
  };
  __name(Vbox, "Vbox");
  __decorateClass([
    property5(String)
  ], Vbox.prototype, "belong", 2);
  Vbox = __decorateClass([
    regClass5("rwXm57ENRXOmxGM849-czA")
  ], Vbox);

  // src/change_text.generated.ts
  var _change_textBase = class _change_textBase extends Laya.Scene {
  };
  __name(_change_textBase, "change_textBase");
  var change_textBase = _change_textBase;

  // src/change_text.ts
  var { regClass: regClass6 } = Laya;
  var change_text = class extends change_textBase {
    onAwake() {
      this.title_dict = { "base_msg-A": "个人信息简介", "base_msg-B": "个人荣誉及任职", "base_msg-C": "教育工作经历", "date_msg-A": "第一周日程安排", "date_msg-B": "第二周日程安排", "sci_msg-A": "研究方向1", "sci_msg-B": "研究方向2", "sci_msg-C": "研究方向3", "enroll_msg-A": "招生要求", "enroll_msg-B": "招生计划", "enroll_msg-C": "招生情况" };
      this.Bcommit.on(Laya.Event.CLICK, this, this.click_commit);
      this.Bclose.on(Laya.Event.CLICK, this, this.click_close);
      this.Bhtml.on(Laya.Event.CLICK, this, this.click_html);
      this.ischange = false;
      Laya.LocalStorage.setJSON("save_change", { "if_text_change": "false" });
      this.secondexit = false;
    }
    onOpened(param) {
      this.belong = param.belong;
      this.old_text = param.old_text;
      this.Tdata.text = this.old_text;
      this.Ltitle.text = this.title_dict[this.belong];
    }
    click_commit() {
      var text = this.Tdata.text;
      if (text == "") {
        Laya.LocalStorage.setItem("diglogparam", "请输入内容");
        Laya.Scene.open("resources/dialog.lh", false);
      } else if (text == this.old_text) {
        Laya.LocalStorage.setItem("diglogparam", "内容未改变");
        Laya.Scene.open("resources/dialog.lh", false);
      } else {
        this.temptime = this.updatetime;
        this.updatetime = this.get_time_now();
        var data = {
          "teacher_id": Laya.LocalStorage.getItem("username"),
          "data_belong": this.belong,
          "data_update": text,
          "data_time": this.updatetime
        };
        this.send_post_and_get_return("api/update", data, this.update_callback);
      }
    }
    click_close() {
      if (this.old_text != this.Tdata.text && !this.secondexit) {
        Laya.LocalStorage.setItem("diglogparam", "尚未保存，再次点击退出");
        Laya.Scene.open("resources/dialog.lh", false);
        this.secondexit = true;
      } else {
        if (this.ischange) {
          var save_data = {
            "if_text_change": "true",
            "change_belong": this.belong,
            "change_text": this.old_text,
            "change_time": this.updatetime
          };
          Laya.LocalStorage.setJSON("save_change", save_data);
        }
        Laya.Scene.close("change_text.ls");
      }
    }
    update_callback(data) {
      if (data.update_successful == "更新成功") {
        this.old_text = this.Tdata.text;
        this.ischange = true;
        this.secondexit = false;
        Laya.LocalStorage.setItem("diglogparam", "更新成功");
        Laya.Scene.open("resources/dialog.lh", false);
      } else {
        this.updatetime = this.temptime;
        Laya.LocalStorage.setItem("diglogparam", "更新失败！" + data.update_successful);
        Laya.Scene.open("resources/dialog.lh", false);
      }
    }
    send_post_and_get_return(url, data, callback) {
      var xhr = new Laya.HttpRequest();
      xhr.http.timeout = 2500;
      xhr.once(Laya.Event.COMPLETE, this, callback);
      xhr.once(Laya.Event.ERROR, this, this.httpRequestError);
      xhr.send("http://101.42.182.89:9876/" + url, data, "post", "json");
    }
    httpRequestError(e) {
      console.log(e);
      this.updatetime = this.temptime;
      Laya.LocalStorage.setItem("diglogparam", "网络错误，请稍后再试");
      Laya.Scene.open("resources/dialog.lh", false);
    }
    get_time_now() {
      const now = /* @__PURE__ */ new Date();
      const year = now.getFullYear();
      const month = now.getMonth() + 1;
      const date2 = now.getDate();
      const hour = now.getHours();
      const minu = now.getMinutes();
      return year + "-" + (month < 10 ? "0" + month : month) + "-" + (date2 < 10 ? "0" + date2 : date2) + " " + (hour < 10 ? "0" + hour : hour) + ":" + (minu < 10 ? "0" + minu : minu);
    }
    click_html() {
      Laya.Scene.open("resources/HTMLdialog.lh", false);
    }
  };
  __name(change_text, "change_text");
  change_text = __decorateClass([
    regClass6("jNNvlCs8QsGyq7eomgppwA")
  ], change_text);

  // src/date.generated.ts
  var _dateBase = class _dateBase extends Laya.Scene {
  };
  __name(_dateBase, "dateBase");
  var dateBase = _dateBase;

  // src/date.ts
  var { regClass: regClass7 } = Laya;
  var date = class extends dateBase {
    onOpened(data) {
      this.Tid = data;
      this.evaluated_email = "";
      this.evaluated_code = "";
      this.now_eval_email = "";
    }
    onAwake() {
      this.Bcommite.on(Laya.Event.CLICK, this, this.click_commite);
      this.Bevaluate.on(Laya.Event.CLICK, this, this.click_evaluate);
      this.Bsendcode.on(Laya.Event.CLICK, this, this.click_sendcode);
      this.Bgoback.on(Laya.Event.CLICK, this, this.click_goback);
    }
    click_commite() {
      if (this.evaluated_email == "" || this.email.text != this.evaluated_email) {
        this.show_dialog("请先验证邮箱");
        return;
      } else if (this.time.text == "" || this.location.text == "" || this.email.text == "" || this.Tdata.text == "") {
        this.show_dialog("请填写完整信息");
        return;
      } else {
        var data = {
          "Tid": this.Tid,
          "time": this.time.text,
          "location": this.location.text,
          "description": this.Tdata.text,
          "email": this.email.text
        };
        this.send_post_and_get_return("api/commitdate", data, this.commite_callback);
      }
    }
    commite_callback(data) {
      if (data["update_successful"] == "true") {
        this.show_dialog("预约成功");
      } else {
        this.show_dialog("预约失败，请稍后再试");
      }
    }
    click_evaluate() {
      if (this.evaluated_code == "") {
        this.show_dialog("请先发送验证码");
        return;
      } else if (this.email.text != this.now_eval_email) {
        this.show_dialog("输入邮箱已更改");
        return;
      } else if (this.code.text != this.evaluated_code) {
        this.show_dialog("验证码错误");
        return;
      } else {
        this.evaluated_email = this.now_eval_email;
        this.show_dialog("验证成功");
      }
    }
    click_sendcode() {
      if (this.email.text == "") {
        this.show_dialog("请输入邮箱");
        return;
      } else if (this.email.text.endsWith("@stu.hit.edu.cn") == false) {
        this.show_dialog("请输入学校教育邮箱");
        return;
      } else {
        this.now_eval_email = this.email.text;
        var data = {
          "email": this.email.text
        };
        this.send_post_and_get_return("api/emailcode", data, this.sendcode_callback);
      }
    }
    sendcode_callback(data) {
      if (data["send_successful"] == "true") {
        this.evaluated_code = data["evaluatecode"];
        this.show_dialog("验证码已发送");
      } else {
        this.show_dialog("验证码发送失败，请稍后再试");
      }
    }
    click_goback() {
      Laya.Scene.destroy("date.ls");
    }
    show_dialog(msg) {
      Laya.LocalStorage.setItem("diglogparam", msg);
      Laya.Scene.open("resources/dialog.lh", false);
    }
    send_post_and_get_return(url, data, callback) {
      var xhr = new Laya.HttpRequest();
      xhr.http.timeout = 2500;
      xhr.once(Laya.Event.COMPLETE, this, callback);
      xhr.once(Laya.Event.ERROR, this, this.httpRequestError);
      xhr.send("http://101.42.182.89:9876/" + url, data, "post", "json");
    }
    httpRequestError(e) {
      console.log(e);
      this.show_dialog("网络错误，请稍后再试");
    }
  };
  __name(date, "date");
  date = __decorateClass([
    regClass7("zIPrqeoDTvmZcrkul3jqvw")
  ], date);

  // src/date_details.generated.ts
  var _date_detailsBase = class _date_detailsBase extends Laya.Scene {
  };
  __name(_date_detailsBase, "date_detailsBase");
  var date_detailsBase = _date_detailsBase;

  // src/date_details.ts
  var { regClass: regClass8 } = Laya;
  var date_details = class extends date_detailsBase {
    onOpened(param) {
      this.status = param["date_status"];
      this.teacher_id = param["teacher_id"];
      this.date_no = param["date_no"];
      this.time.text = param["time"];
      this.location.text = param["location"];
      this.description.text = param["description"].replace("\n", "<br />");
      this.email.text = param["email"];
      var status = Number(this.status);
      switch (status) {
        case 0:
          break;
        case 1:
          this.Bagree.disabled = true;
          this.Brefuse.disabled = true;
          this.Bchange.disabled = true;
          this.Bfinish.disabled = false;
          break;
        case 2:
          this.Bagree.disabled = true;
          this.Brefuse.disabled = true;
          this.Bchange.disabled = true;
          this.Bfinish.disabled = false;
          break;
        case 3:
          this.Bagree.disabled = true;
          this.Brefuse.disabled = true;
          this.Bchange.disabled = true;
          this.Bfinish.disabled = false;
        default:
          break;
      }
    }
    batch_disable() {
      this.Bagree.disabled = true;
      this.Brefuse.disabled = true;
      this.Bchange.disabled = true;
      this.Bgoback.disabled = true;
    }
    batch_enable() {
      this.Bagree.disabled = false;
      this.Brefuse.disabled = false;
      this.Bchange.disabled = false;
      this.Bgoback.disabled = false;
    }
    onAwake() {
      this.Bagree.on(Laya.Event.CLICK, this, this.click_button, [1]);
      this.Brefuse.on(Laya.Event.CLICK, this, this.click_button, [2]);
      this.Bchange.on(Laya.Event.CLICK, this, this.click_button, [3]);
      this.Bfinish.on(Laya.Event.CLICK, this, this.click_button, [4]);
      this.Bgoback.on(Laya.Event.CLICK, this, this.goback);
    }
    goback() {
      var data = { "teacher_id": this.teacher_id };
      this.send_post_and_get_return("api/getdate_list", data, this.goto_date_callback);
    }
    goto_date_callback(data) {
      var date_no_list = data["date_no_list"];
      data["teacher_id"] = this.teacher_id;
      Laya.Scene.close("date_details.ls");
      Laya.Scene.open("date_list.ls", false, data);
    }
    click_button(status) {
      this.Iwait.visible = true;
      this.batch_disable();
      var data = {
        "teacher_id": this.teacher_id,
        "date_no": this.date_no,
        "status": String(status),
        "reply": this.Treply.text
      };
      this.temp_status = status;
      this.send_post_and_get_return("api/update_datestatus", data, this.click_button_callback);
    }
    click_button_callback(data) {
      var update_successful = data["update_successful"];
      this.Iwait.visible = false;
      this.batch_enable();
      if (update_successful == "true") {
        Laya.LocalStorage.setItem("diglogparam", "操作成功");
        Laya.Scene.open("resources/dialog.lh", false);
        this.update_status(this.temp_status);
      } else {
        Laya.LocalStorage.setItem("diglogparam", "操作失败，请稍后再试");
        Laya.Scene.open("resources/dialog.lh", false);
      }
    }
    send_post_and_get_return(url, data, callback) {
      var xhr = new Laya.HttpRequest();
      xhr.http.timeout = 2500;
      xhr.once(Laya.Event.COMPLETE, this, callback);
      xhr.once(Laya.Event.ERROR, this, this.httpRequestError);
      xhr.send("http://101.42.182.89:9876/" + url, data, "post", "json");
    }
    httpRequestError(e) {
      this.Iwait.visible = false;
      this.batch_enable();
      this.update_status(Number(this.status));
      console.log(e);
      Laya.LocalStorage.setItem("diglogparam", "网络错误，请稍后再试");
      Laya.Scene.open("resources/dialog.lh", false);
    }
    update_status(status) {
      this.status = String(status);
      switch (status) {
        case 1:
          this.Bagree.disabled = true;
          this.Brefuse.disabled = true;
          this.Bchange.disabled = true;
          this.Bfinish.disabled = false;
          break;
        case 2:
          this.Bagree.disabled = true;
          this.Brefuse.disabled = true;
          this.Bchange.disabled = true;
          this.Bfinish.disabled = false;
          break;
        case 3:
          this.Bagree.disabled = true;
          this.Brefuse.disabled = true;
          this.Bchange.disabled = true;
          this.Bfinish.disabled = false;
        case 4:
          this.Bagree.disabled = true;
          this.Brefuse.disabled = true;
          this.Bchange.disabled = true;
          this.Bfinish.disabled = true;
        default:
          break;
      }
      Laya.LocalStorage.setJSON("date_update", { teacher_id: this.teacher_id, date_no: this.date_no, status: this.status });
    }
  };
  __name(date_details, "date_details");
  date_details = __decorateClass([
    regClass8("6Ishn8uNRoW7I5DOfsnUFQ")
  ], date_details);

  // src/date_list.generated.ts
  var _date_listBase = class _date_listBase extends Laya.Scene {
  };
  __name(_date_listBase, "date_listBase");
  var date_listBase = _date_listBase;

  // src/date_list.ts
  var { regClass: regClass9 } = Laya;
  var date_list = class extends date_listBase {
    onOpened(data) {
      var no2status = { "0": "未处理", "1": "已同意", "2": "已拒绝", "3": "更改预约信息", "4": "已完成" };
      var date_no_list = data["date_no_list"];
      var email_list = data["email_list"];
      var time_list = data["time_list"];
      var location_list = data["location_list"];
      var status_list = data["status_list"];
      var teacher_id = data["teacher_id"];
      var data2push = [];
      for (var i = 0; i < date_no_list.length; i++) {
        data2push.push({ no: "预约" + date_no_list[i], msg: email_list[i] + " " + time_list[i] + " " + location_list[i] + " [" + no2status[status_list[i]] + "]", date_no: date_no_list[i], teacher_id, date_status: status_list[i] });
      }
      this.List.array = data2push;
      this.tid.text = teacher_id;
    }
  };
  __name(date_list, "date_list");
  date_list = __decorateClass([
    regClass9("vK4Ma9W9TwyNGbHishvqRA")
  ], date_list);

  // src/date_list_box.ts
  var { regClass: regClass10, property: property6 } = Laya;
  var date_list_box = class extends Laya.Script {
    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    onAwake() {
      this.owner.on(Laya.Event.MOUSE_OVER, this, this.mouse_over);
      this.owner.on(Laya.Event.MOUSE_OUT, this, this.mouse_out);
    }
    //组件被启用后执行，例如节点被添加到舞台后
    //onEnable(): void {}
    //组件被禁用时执行，例如从节点从舞台移除后
    //onDisable(): void {}
    //第一次执行update之前执行，只会执行一次
    onStart() {
      this.teacher_id = this.owner.getChildByName("teacher_id").text;
      this.date_no = this.owner.getChildByName("date_no").text;
      this.date_status = this.owner.getChildByName("date_status").text;
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
    onMouseClick() {
      this.goto_date();
    }
    goto_date() {
      var data = {
        "teacher_id": this.teacher_id,
        "date_no": this.date_no
      };
      this.send_post_and_get_return("api/getdate_data", data, this.goto_date_callback);
    }
    goto_date_callback(data) {
      data["teacher_id"] = this.teacher_id;
      data["date_no"] = this.date_no;
      data["date_status"] = this.date_status;
      Laya.Scene.close("date_list.ls");
      Laya.Scene.open("date_details.ls", false, data);
    }
    send_post_and_get_return(url, data, callback) {
      var xhr = new Laya.HttpRequest();
      xhr.http.timeout = 2500;
      xhr.once(Laya.Event.COMPLETE, this, callback);
      xhr.once(Laya.Event.ERROR, this, this.httpRequestError);
      xhr.send("http://101.42.182.89:9876/" + url, data, "post", "json");
    }
    httpRequestError(e) {
      console.log(e);
      Laya.LocalStorage.setItem("diglogparam", "网络错误，请稍后再试");
      Laya.Scene.open("resources/dialog.lh", false);
    }
    mouse_over() {
      Laya.Mouse.cursor = "pointer";
    }
    mouse_out() {
      Laya.Mouse.cursor = "default";
    }
  };
  __name(date_list_box, "date_list_box");
  date_list_box = __decorateClass([
    regClass10("XNWQINgaRzu6W9d_cCEKDA")
  ], date_list_box);

  // src/dialog.generated.ts
  var _dialogBase = class _dialogBase extends Laya.Dialog {
  };
  __name(_dialogBase, "dialogBase");
  var dialogBase = _dialogBase;

  // src/dialog.ts
  var { regClass: regClass11 } = Laya;
  var dialog = class extends dialogBase {
    onAwake() {
      var param = Laya.LocalStorage.getItem("diglogparam");
      this.maintext.text = param.substring(0, 11);
    }
    onEnable() {
      Laya.stage.on(Laya.Event.CLICK, this, this.close_self);
    }
    close_self() {
      Laya.stage.off(Laya.Event.CLICK, this, this.close_self);
      this.close();
    }
  };
  __name(dialog, "dialog");
  dialog = __decorateClass([
    regClass11("92Z-JkEcTIOS4aqAqSCDTw")
  ], dialog);

  // src/hello.generated.ts
  var _helloBase = class _helloBase extends Laya.Scene {
  };
  __name(_helloBase, "helloBase");
  var helloBase = _helloBase;

  // src/hello.ts
  var { regClass: regClass12 } = Laya;
  var hello = class extends helloBase {
    onAwake() {
      this.get_hot_teacher_list("all");
      this.Bsearch.on(Laya.Event.CLICK, this, this.click_search);
      this.Iteacher1.on(Laya.Event.CLICK, this, this.goto_teacher, [0]);
      this.Iteacher2.on(Laya.Event.CLICK, this, this.goto_teacher, [1]);
      this.Iteacher3.on(Laya.Event.CLICK, this, this.goto_teacher, [2]);
      this.Iteacher4.on(Laya.Event.CLICK, this, this.goto_teacher, [3]);
      this.Iteacher5.on(Laya.Event.CLICK, this, this.goto_teacher, [4]);
      this.Iteacher6.on(Laya.Event.CLICK, this, this.goto_teacher, [5]);
      this.Iteacher7.on(Laya.Event.CLICK, this, this.goto_teacher, [6]);
      this.Iteacher8.on(Laya.Event.CLICK, this, this.goto_teacher, [7]);
      this.selectBox2.on(Laya.Event.CHANGE, this, this.get_hot_teacher_list, ["select"]);
      this.Blogin.on(Laya.Event.CLICK, this, this.click_login);
      this.check_login();
    }
    get_hot_teacher_list(belong) {
      if (belong == "无筛选") {
        belong = "all";
      } else {
        belong = this.selectBox2.selectedLabel;
      }
      this.send_post_and_get_return("api/gethot", { "belong": belong }, this.get_hot_teacher_list_callback);
    }
    get_hot_teacher_list_callback(data) {
      this.hot_teacher_list = data["teacher_id"];
      var teacher_name = data["teacher_name"];
      var pic_url = data["pic_url"];
      var belong_to = data["belong_to"];
      this.change_skin(this.Iteacher1, pic_url, 0);
      this.change_skin(this.Iteacher2, pic_url, 1);
      this.change_skin(this.Iteacher3, pic_url, 2);
      this.change_skin(this.Iteacher4, pic_url, 3);
      this.change_skin(this.Iteacher5, pic_url, 4);
      this.change_skin(this.Iteacher6, pic_url, 5);
      this.change_skin(this.Iteacher7, pic_url, 6);
      this.change_skin(this.Iteacher8, pic_url, 7);
      this.change_text(this.Lteacher1, teacher_name, belong_to, 0);
      this.change_text(this.Lteacher2, teacher_name, belong_to, 1);
      this.change_text(this.Lteacher3, teacher_name, belong_to, 2);
      this.change_text(this.Lteacher4, teacher_name, belong_to, 3);
      this.change_text(this.Lteacher5, teacher_name, belong_to, 4);
      this.change_text(this.Lteacher6, teacher_name, belong_to, 5);
      this.change_text(this.Lteacher7, teacher_name, belong_to, 6);
      this.change_text(this.Lteacher8, teacher_name, belong_to, 7);
      this.HBox1.mouseEnabled = true;
      this.HBox2.mouseEnabled = true;
    }
    change_skin(img, arr, index) {
      try {
        var pic_url = arr[index];
        img.skin = "http://101.42.182.89:8848" + pic_url.substring(1, pic_url.length).replace("\\", "/");
      } catch (e) {
        img.skin = this.teacher_temp.skin;
      }
    }
    change_text(label, arr1, arr2, index) {
      try {
        var text = arr1[index] + "\n" + arr2[index];
        if (arr1[index] == void 0 || arr2[index] == void 0) {
          label.text = "教师";
        } else {
          label.text = text;
        }
      } catch (e) {
        label.text = "教师";
      }
    }
    click_search() {
      if (this.search_input.text == "") {
        Laya.LocalStorage.setItem("diglogparam", "请输入搜索信息");
        Laya.Scene.open("resources/dialog.lh", false);
      } else {
        var text = this.search_input.text;
        this.search_input.text = this.search_input.text + "  正在搜索...";
        var select_label = this.selectBox1.selectedLabel;
        if (select_label == "无筛选") {
          select_label = "all";
        }
        var data = {
          "text": text,
          "filter": select_label
        };
        this.send_post_and_get_return("api/search", data, this.search_callback);
      }
    }
    search_callback(data) {
      var teacher_id = data["teacher_id"];
      if (teacher_id.length == 0) {
        this.search_input.text = this.search_input.text.substring(0, this.search_input.text.length - 9);
        Laya.LocalStorage.setItem("diglogparam", "未找到相关教师");
        Laya.Scene.open("resources/dialog.lh", false);
      } else {
        Laya.Scene.open("search_list.ls", false, data);
        Laya.Scene.destroy("hello.ls");
      }
    }
    goto_teacher(teacher_no) {
      var data = {
        "teacher_id": this.hot_teacher_list[teacher_no]
      };
      this.send_post_and_get_return("api/teacher", data, this.goto_teacher_callback);
    }
    goto_teacher_callback(data) {
      this.search_input.text = this.search_input.text.substring(0, this.search_input.text.length - 9);
      data["from"] = "hello.ls";
      Laya.Scene.open("teacher_base.ls", false, data);
      Laya.Scene.destroy("hello.ls");
    }
    click_login() {
      if (this.Blogin.label == "登录") {
        Laya.Scene.open("login.ls", false);
        Laya.Scene.destroy("hello.ls");
      } else {
        Laya.LocalStorage.setItem("login", "false");
        Laya.LocalStorage.setItem("username", "");
        this.Blogin.label = "登录";
      }
    }
    send_post_and_get_return(url, data, callback) {
      var xhr = new Laya.HttpRequest();
      xhr.http.timeout = 2500;
      xhr.once(Laya.Event.COMPLETE, this, callback);
      xhr.once(Laya.Event.ERROR, this, this.httpRequestError);
      xhr.send("http://101.42.182.89:9876/" + url, data, "post", "json");
    }
    httpRequestError(e) {
      if (this.search_input.text.endsWith("  正在搜索...")) {
        this.search_input.text = this.search_input.text.substring(0, this.search_input.text.length - 9);
      }
      console.log(e);
      if (e == "[404]NOT FOUND:http://101.42.182.89:9876/api/search") {
        this.search_input.text = this.search_input.text.substring(0, this.search_input.text.length - 9);
        Laya.LocalStorage.setItem("diglogparam", "未找到相关教师");
        Laya.Scene.open("resources/dialog.lh", false);
      } else if (e == "[404]NOT FOUND:http://101.42.182.89:9876/api/gethot") {
        Laya.LocalStorage.setItem("diglogparam", "获取热门教师失败");
        Laya.Scene.open("resources/dialog.lh", false);
      } else {
        Laya.LocalStorage.setItem("diglogparam", "网络错误，请稍后再试");
        Laya.Scene.open("resources/dialog.lh", false);
      }
    }
    check_login() {
      var islogin = Laya.LocalStorage.getItem("login");
      if (islogin != null) {
        if (islogin == "true") {
          this.Blogin.label = "退出";
        } else {
          this.Blogin.label = "登录";
        }
      }
    }
  };
  __name(hello, "hello");
  hello = __decorateClass([
    regClass12("JKKsvS3HQfuryjnjjnKw5w")
  ], hello);

  // src/htmldialog.ts
  var { regClass: regClass13 } = Laya;
  var dialog2 = class extends Laya.Script {
    onAwake() {
    }
    onEnable() {
      Laya.stage.on(Laya.Event.CLICK, this, this.close_self);
    }
    close_self() {
      Laya.stage.off(Laya.Event.CLICK, this, this.close_self);
      this.owner.close();
    }
  };
  __name(dialog2, "dialog");
  dialog2 = __decorateClass([
    regClass13("8362mwjbS7COpMGX5NGVVw")
  ], dialog2);

  // src/login.generated.ts
  var _loginBase = class _loginBase extends Laya.Scene {
  };
  __name(_loginBase, "loginBase");
  var loginBase = _loginBase;

  // src/login.ts
  var { regClass: regClass14 } = Laya;
  var login = class extends loginBase {
    onAwake() {
      this.Blogin.on(Laya.Event.CLICK, this, this.click_login);
    }
    click_login() {
      if (this.Tusername.text == "" || this.Tpassword.text == "") {
        Laya.LocalStorage.setItem("diglogparam", "请输入账号和密码");
        Laya.Scene.open("resources/dialog.lh", false);
      } else {
        var username = this.Tusername.text;
        var password = this.Tpassword.text;
        var data = {
          "teacher_id": username,
          "password": password
        };
        this.send_post_and_get_return("api/login", data, this.login_callback);
      }
    }
    login_callback(data) {
      if (data["issuccessful"]) {
        Laya.LocalStorage.setItem("username", this.Tusername.text);
        Laya.LocalStorage.setItem("login", "true");
        Laya.LocalStorage.setItem("diglogparam", "欢迎登录");
        Laya.Scene.open("resources/dialog.lh", false);
        data["from"] = "hello.ls";
        Laya.Scene.open("teacher_base.ls", false, data);
        Laya.Scene.destroy("login.ls");
      } else {
        Laya.LocalStorage.setItem("diglogparam", "账号或密码错误");
        Laya.Scene.open("resources/dialog.lh", false);
      }
    }
    send_post_and_get_return(url, data, callback) {
      var xhr = new Laya.HttpRequest();
      xhr.http.timeout = 2500;
      xhr.once(Laya.Event.COMPLETE, this, callback);
      xhr.once(Laya.Event.ERROR, this, this.httpRequestError);
      xhr.send("http://101.42.182.89:9876/" + url, data, "post", "json");
    }
    httpRequestError(e) {
      if (e == "[401]UNAUTHORIZED:http://101.42.182.89:9876/api/login") {
        Laya.LocalStorage.setItem("diglogparam", "账号或密码错误");
      } else {
        Laya.LocalStorage.setItem("diglogparam", "网络错误，请稍后再试");
      }
      Laya.Scene.open("resources/dialog.lh", false);
    }
  };
  __name(login, "login");
  login = __decorateClass([
    regClass14("m02wO_bPR92sV729ul0viA")
  ], login);

  // src/refresh.ts
  var { regClass: regClass15, property: property7 } = Laya;
  var refresh = class extends Laya.Script {
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
    onUpdate() {
      this.Tid = this.owner.getChildByName("tid").text;
    }
    //每帧更新时执行，在update之后执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    //onLateUpdate(): void {}
    //鼠标点击后执行。与交互相关的还有onMouseDown等十多个函数，具体请参阅文档。
    onMouseClick() {
      var data = { "teacher_id": this.Tid };
      this.send_post_and_get_return("api/getdate_list", data, this.goto_date_callback);
    }
    goto_date_callback(data) {
      var date_no_list = data["date_no_list"];
      if (date_no_list.length == 0) {
        Laya.LocalStorage.setItem("diglogparam", "暂无预约记录");
        Laya.Scene.open("resources/dialog.lh", false);
      } else {
        var no2status = { "0": "未处理", "1": "已同意", "2": "已拒绝", "3": "更改预约信息", "4": "已完成" };
        var email_list = data["email_list"];
        var time_list = data["time_list"];
        var location_list = data["location_list"];
        var status_list = data["status_list"];
        var teacher_id = data["teacher_id"];
        data["teacher_id"] = this.Tid;
        var data2push = [];
        for (var i = 0; i < date_no_list.length; i++) {
          data2push.push({ no: "预约" + date_no_list[i], msg: email_list[i] + " " + time_list[i] + " " + location_list[i] + " [" + no2status[status_list[i]] + "]", date_no: date_no_list[i], teacher_id, date_status: status_list[i] });
        }
        this.owner.parent.array = data2push;
      }
    }
    send_post_and_get_return(url, data, callback) {
      var xhr = new Laya.HttpRequest();
      xhr.http.timeout = 2500;
      xhr.once(Laya.Event.COMPLETE, this, callback);
      xhr.once(Laya.Event.ERROR, this, this.httpRequestError);
      xhr.send("http://101.42.182.89:9876/" + url, data, "post", "json");
    }
    httpRequestError(e) {
      console.log(e);
      Laya.LocalStorage.setItem("diglogparam", "网络错误，请稍后再试");
      Laya.Scene.open("resources/dialog.lh", false);
    }
  };
  __name(refresh, "refresh");
  refresh = __decorateClass([
    regClass15("4bzYcDiLRPyzl2gFOjJKyw")
  ], refresh);

  // src/search_list.generated.ts
  var _search_listBase = class _search_listBase extends Laya.Scene {
  };
  __name(_search_listBase, "search_listBase");
  var search_listBase = _search_listBase;

  // src/search_list.ts
  var { regClass: regClass16 } = Laya;
  var search_list = class extends search_listBase {
    onOpened(data) {
      var teacher_id = data["teacher_id"];
      var teacher_name = data["teacher_name"];
      var belong_to = data["belong_to"];
      var pic_url = data["pic_url"];
      var data2push = [];
      for (var i = 0; i < teacher_id.length; i++) {
        data2push.push({ teacher_msg: teacher_name[i] + " " + belong_to[i], teacher_pic: "http://101.42.182.89:8848" + pic_url[i].substring(1, pic_url[i].length).replace("\\", "/"), teacher_id: teacher_id[i] });
      }
      this.List.array = data2push;
    }
    onAwake() {
      this.Bsearch.on(Laya.Event.CLICK, this, this.click_search);
    }
    click_search() {
      if (this.search_input.text == "") {
        Laya.LocalStorage.setItem("diglogparam", "请输入搜索信息");
        Laya.Scene.open("resources/dialog.lh", false);
      } else {
        var text = this.search_input.text;
        this.search_input.text = this.search_input.text + "  正在搜索...";
        var select_label = this.selectBox1.selectedLabel;
        if (select_label == "无筛选") {
          select_label = "all";
        }
        var data = {
          "text": text,
          "filter": select_label
        };
        this.send_post_and_get_return("api/search", data, this.search_callback);
      }
    }
    search_callback(data) {
      var teacher_id = data["teacher_id"];
      if (teacher_id.length == 0) {
        this.search_input.text = this.search_input.text.substring(0, this.search_input.text.length - 9);
        Laya.LocalStorage.setItem("diglogparam", "未找到相关教师");
        Laya.Scene.open("resources/dialog.lh", false);
      } else {
        Laya.Scene.open("search_list.ls", true, data);
      }
    }
    send_post_and_get_return(url, data, callback) {
      var xhr = new Laya.HttpRequest();
      xhr.http.timeout = 2500;
      xhr.once(Laya.Event.COMPLETE, this, callback);
      xhr.once(Laya.Event.ERROR, this, this.httpRequestError);
      xhr.send("http://101.42.182.89:9876/" + url, data, "post", "json");
    }
    httpRequestError(e) {
      if (this.search_input.text.endsWith("  正在搜索...")) {
        this.search_input.text = this.search_input.text.substring(0, this.search_input.text.length - 9);
      }
      console.log(e);
      if (e == "[404]NOT FOUND:http://101.42.182.89:9876/api/search") {
        this.search_input.text = this.search_input.text.substring(0, this.search_input.text.length - 9);
        Laya.LocalStorage.setItem("diglogparam", "未找到相关教师");
        Laya.Scene.open("resources/dialog.lh", false);
      } else {
        Laya.LocalStorage.setItem("diglogparam", "网络错误，请稍后再试");
        Laya.Scene.open("resources/dialog.lh", false);
      }
    }
  };
  __name(search_list, "search_list");
  search_list = __decorateClass([
    regClass16("zd5B7lc4TZOD057jcPgFIw")
  ], search_list);

  // src/teacher_base.generated.ts
  var _teacher_baseBase = class _teacher_baseBase extends Laya.Scene {
  };
  __name(_teacher_baseBase, "teacher_baseBase");
  var teacher_baseBase = _teacher_baseBase;

  // src/teacher_base.ts
  var { regClass: regClass17 } = Laya;
  var teacher_base = class extends teacher_baseBase {
    onOpened(data) {
      this.from = "hello.ls";
      Laya.LocalStorage.setItem("nowpageid", "-1");
      try {
        this.from = data["from"];
        this.Tname = data["teacher_base"][0];
        this.Tsex = data["teacher_base"][1];
        this.Tbelong = data["teacher_base"][2];
        this.Iteacher = data["teacher_base"][3];
        this.Tid = data["teacher_base"][4];
        this.Tintro = data["base_msg"][0];
        this.Thonor = data["base_msg"][1];
        this.Tedu = data["base_msg"][2];
        this.Tupdate = data["base_msg"][3];
        this.Tdate1 = data["date_msg"][0];
        this.Tdate2 = data["date_msg"][1];
        this.Tdateupdate = data["date_msg"][2];
        this.Tsci1 = data["sci_msg"][0];
        this.Tsci2 = data["sci_msg"][1];
        this.Tsci3 = data["sci_msg"][2];
        this.Tsciupdate = data["sci_msg"][3];
        this.Tenroll1 = data["enroll_msg"][0];
        this.Tenroll2 = data["enroll_msg"][1];
        this.Tenroll3 = data["enroll_msg"][2];
        this.Tenrollupdate = data["enroll_msg"][3];
      } catch (e) {
        console.log(e);
      }
      if (this.Tid != void 0) {
        Laya.LocalStorage.setItem("nowpageid", this.Tid);
      }
      if (this.Tname == "" || this.Tsex == "" || this.Tbelong == "" || this.Iteacher == "" || this.Tid == "" || this.Tintro == "" || this.Thonor == "" || this.Tedu == "" || this.Tdate1 == "" || this.Tdate2 == "" || this.Tsci1 == "" || this.Tsci2 == "" || this.Tsci3 == "" || this.Tenroll1 == "" || this.Tenroll2 == "" || this.Tenroll3 == "") {
        Laya.LocalStorage.setItem("diglogparam", "当前教师信息存在缺失");
        Laya.Scene.open("resources/dialog.lh", false);
      }
      if (this.Tname == void 0 || this.Tsex == void 0 || this.Tbelong == void 0 || this.Iteacher == void 0 || this.Tid == void 0 || this.Tintro == void 0 || this.Thonor == void 0 || this.Tedu == void 0 || this.Tdate1 == void 0 || this.Tdate2 == void 0 || this.Tsci1 == void 0 || this.Tsci2 == void 0 || this.Tsci3 == void 0 || this.Tenroll1 == void 0 || this.Tenroll2 == void 0 || this.Tenroll3 == void 0) {
        Laya.LocalStorage.setItem("diglogparam", "当前教师信息存在缺失");
        Laya.Scene.open("resources/dialog.lh", false);
      }
      this.Iphoto.skin = "http://101.42.182.89:8848" + this.Iteacher.substring(1, this.Iteacher.length).replace("\\", "/");
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
    onAwake() {
      Laya.Mouse.cursor = "default";
      this.Bselect1.on(Laya.Event.CLICK, this, this.onSelecte, [0]);
      this.Bselect2.on(Laya.Event.CLICK, this, this.onSelecte, [1]);
      this.Bselect3.on(Laya.Event.CLICK, this, this.onSelecte, [2]);
      this.Bselect4.on(Laya.Event.CLICK, this, this.onSelecte, [3]);
      this.button_list = [this.Bselect1, this.Bselect2, this.Bselect3, this.Bselect4];
      this.Bgoback.on(Laya.Event.CLICK, this, this.click_goback);
      this.Bdate.on(Laya.Event.CLICK, this, this.click_date);
    }
    onSelecte(index) {
      for (var i = 0; i < this.button_list.length; i++) {
        if (i != index) {
          this.button_list[i].selected = false;
        }
      }
      this.ViewStack.selectedIndex = index;
    }
    click_goback() {
      if (this.from == "hello.ls") {
        Laya.Scene.open(this.from, false);
      }
      Laya.Scene.destroy("teacher_base.ls");
    }
    click_date() {
      if (this.Bdate.label == "预约") {
        Laya.Scene.open("date.ls", false, this.Tid);
      } else {
        var data = { "teacher_id": this.Tid };
        this.send_post_and_get_return("api/getdate_list", data, this.goto_date_callback);
      }
    }
    goto_date_callback(data) {
      var date_no_list = data["date_no_list"];
      if (date_no_list.length == 0) {
        Laya.LocalStorage.setItem("diglogparam", "暂无预约记录");
        Laya.Scene.open("resources/dialog.lh", false);
      } else {
        data["teacher_id"] = this.Tid;
        Laya.Scene.open("date_list.ls", false, data);
      }
    }
    send_post_and_get_return(url, data, callback) {
      var xhr = new Laya.HttpRequest();
      xhr.http.timeout = 2500;
      xhr.once(Laya.Event.COMPLETE, this, callback);
      xhr.once(Laya.Event.ERROR, this, this.httpRequestError);
      xhr.send("http://101.42.182.89:9876/" + url, data, "post", "json");
    }
    httpRequestError(e) {
      console.log(e);
      Laya.LocalStorage.setItem("diglogparam", "网络错误，请稍后再试");
      Laya.Scene.open("resources/dialog.lh", false);
    }
  };
  __name(teacher_base, "teacher_base");
  teacher_base = __decorateClass([
    regClass17("dvxjFq89TFK78rZ1DJHZ2Q")
  ], teacher_base);

  // src/teacher_list_box.ts
  var { regClass: regClass18, property: property8 } = Laya;
  var teacher_list_box = class extends Laya.Script {
    //组件被激活后执行，此时所有节点和组件均已创建完毕，此方法只执行一次
    onAwake() {
      this.owner.on(Laya.Event.MOUSE_OVER, this, this.mouse_over);
      this.owner.on(Laya.Event.MOUSE_OUT, this, this.mouse_out);
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
    onMouseClick() {
      this.goto_teacher();
    }
    goto_teacher() {
      var data = {
        "teacher_id": this.owner.getChildByName("teacher_id").text
      };
      this.send_post_and_get_return("api/teacher", data, this.goto_teacher_callback);
    }
    goto_teacher_callback(data) {
      data["from"] = "search_list.ls";
      Laya.Scene.open("teacher_base.ls", false, data);
    }
    send_post_and_get_return(url, data, callback) {
      var xhr = new Laya.HttpRequest();
      xhr.http.timeout = 2500;
      xhr.once(Laya.Event.COMPLETE, this, callback);
      xhr.once(Laya.Event.ERROR, this, this.httpRequestError);
      xhr.send("http://101.42.182.89:9876/" + url, data, "post", "json");
    }
    httpRequestError(e) {
      console.log(e);
      Laya.LocalStorage.setItem("diglogparam", "网络错误，请稍后再试");
      Laya.Scene.open("resources/dialog.lh", false);
    }
    mouse_over() {
      Laya.Mouse.cursor = "pointer";
    }
    mouse_out() {
      Laya.Mouse.cursor = "default";
    }
  };
  __name(teacher_list_box, "teacher_list_box");
  teacher_list_box = __decorateClass([
    regClass18("L6P8iXKvTA2oNSN72tMwJA")
  ], teacher_list_box);

  // src/update_self.ts
  var { regClass: regClass19, property: property9 } = Laya;
  var update_self = class extends Laya.Script {
    constructor() {
      super(...arguments);
      this.belong_text = "";
    }
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
    onUpdate() {
      var ifchange = Laya.LocalStorage.getJSON("save_change");
      if (ifchange == null || ifchange.if_text_change == "false") {
        return;
      } else {
        var belong = ifchange.change_belong;
        var text = ifchange.change_text;
        var time = ifchange.change_time;
        if (this.belong_text == belong) {
          this.owner.text = text;
          Laya.LocalStorage.setJSON("save_change", { "if_text_change": ifchange.if_text_change + "1", "change_belong": belong, "change_text": text, "change_time": time });
        } else if (this.belong_text.substring(this.belong_text.length - 5, this.belong_text.length) == "-time") {
          this.owner.text = time;
          Laya.LocalStorage.setJSON("save_change", { "if_text_change": ifchange.if_text_change + "1", "change_belong": belong, "change_text": text, "change_time": time });
        }
      }
    }
    //每帧更新时执行，在update之后执行，尽量不要在这里写大循环逻辑或者使用getComponent方法
    //onLateUpdate(): void {}
    //鼠标点击后执行。与交互相关的还有onMouseDown等十多个函数，具体请参阅文档。
    //onMouseClick(): void {}
  };
  __name(update_self, "update_self");
  __decorateClass([
    property9(String)
  ], update_self.prototype, "belong_text", 2);
  update_self = __decorateClass([
    regClass19("mHEgcCQkQkSpXzjYHnlAGg")
  ], update_self);
})();
