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

  // src/Button_pointer.ts
  var { regClass: regClass3, property: property3 } = Laya;
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
    regClass3("hDaNyyZ_Rjaj06MCYvkvPg")
  ], Button_pointer);

  // src/Vbox.ts
  var { regClass: regClass4, property: property4 } = Laya;
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
      } else if (Laya.LocalStorage.getJSON("save_change").if_text_change == "true11") {
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
    property4(String)
  ], Vbox.prototype, "belong", 2);
  Vbox = __decorateClass([
    regClass4("rwXm57ENRXOmxGM849-czA")
  ], Vbox);

  // src/change_text.generated.ts
  var _change_textBase = class _change_textBase extends Laya.Scene {
  };
  __name(_change_textBase, "change_textBase");
  var change_textBase = _change_textBase;

  // src/change_text.ts
  var { regClass: regClass5 } = Laya;
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
      const date = now.getDate();
      const hour = now.getHours();
      const minu = now.getMinutes();
      return year + "-" + (month < 10 ? "0" + month : month) + "-" + (date < 10 ? "0" + date : date) + " " + (hour < 10 ? "0" + hour : hour) + ":" + (minu < 10 ? "0" + minu : minu);
    }
    click_html() {
      Laya.Scene.open("resources/HTMLdialog.lh", false);
    }
  };
  __name(change_text, "change_text");
  change_text = __decorateClass([
    regClass5("jNNvlCs8QsGyq7eomgppwA")
  ], change_text);

  // src/dialog.generated.ts
  var _dialogBase = class _dialogBase extends Laya.Dialog {
  };
  __name(_dialogBase, "dialogBase");
  var dialogBase = _dialogBase;

  // src/dialog.ts
  var { regClass: regClass6 } = Laya;
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
    regClass6("92Z-JkEcTIOS4aqAqSCDTw")
  ], dialog);

  // src/hello.generated.ts
  var _helloBase = class _helloBase extends Laya.Scene {
  };
  __name(_helloBase, "helloBase");
  var helloBase = _helloBase;

  // src/hello.ts
  var { regClass: regClass7 } = Laya;
  var hello = class extends helloBase {
    onAwake() {
      this.get_hot_teacher_list();
      this.Bsearch.on(Laya.Event.CLICK, this, this.click_search);
      this.Iteacher1.on(Laya.Event.CLICK, this, this.goto_teacher, [0]);
      this.Iteacher2.on(Laya.Event.CLICK, this, this.goto_teacher, [1]);
      this.Iteacher3.on(Laya.Event.CLICK, this, this.goto_teacher, [2]);
      this.Iteacher4.on(Laya.Event.CLICK, this, this.goto_teacher, [3]);
      this.Blogin.on(Laya.Event.CLICK, this, this.click_login);
      this.check_login();
    }
    get_hot_teacher_list() {
      this.hot_teacher_list = ["0", "1", "2", "3"];
    }
    click_search() {
      if (this.search_input.text == "") {
        Laya.LocalStorage.setItem("diglogparam", "请输入搜索信息");
        Laya.Scene.open("resources/dialog.lh", false);
      } else {
        var text = this.search_input.text;
        this.search_input.text = this.search_input.text + "  正在搜索...";
        var data = {
          "text": text,
          "filter": ""
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
    regClass7("JKKsvS3HQfuryjnjjnKw5w")
  ], hello);

  // src/htmldialog.ts
  var { regClass: regClass8 } = Laya;
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
    regClass8("8362mwjbS7COpMGX5NGVVw")
  ], dialog2);

  // src/login.generated.ts
  var _loginBase = class _loginBase extends Laya.Scene {
  };
  __name(_loginBase, "loginBase");
  var loginBase = _loginBase;

  // src/login.ts
  var { regClass: regClass9 } = Laya;
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
        Laya.LocalStorage.setItem("diglogparam", "欢迎登录 " + this.Tusername.text);
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
    regClass9("m02wO_bPR92sV729ul0viA")
  ], login);

  // src/search_list.generated.ts
  var _search_listBase = class _search_listBase extends Laya.Scene {
  };
  __name(_search_listBase, "search_listBase");
  var search_listBase = _search_listBase;

  // src/search_list.ts
  var { regClass: regClass10 } = Laya;
  var search_list = class extends search_listBase {
    onOpened(data) {
      var teacher_id = data["teacher_id"];
      var teacher_name = data["teacher_name"];
      var belong_to = data["belong_to"];
      var pic_url = data["pic_url"];
      var data2push = [];
      for (var i = 0; i < teacher_id.length; i++) {
        data2push.push({ teacher_msg: teacher_name[i] + " " + belong_to[i], teacher_pic: "http://101.42.182.89:8000" + pic_url[i].substring(1, pic_url[i].length).replace("\\", "/"), teacher_id: teacher_id[i] });
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
        var data = {
          "text": text,
          "filter": ""
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
      Laya.LocalStorage.setItem("diglogparam", "网络错误，请稍后再试");
      Laya.Scene.open("resources/dialog.lh", false);
    }
  };
  __name(search_list, "search_list");
  search_list = __decorateClass([
    regClass10("zd5B7lc4TZOD057jcPgFIw")
  ], search_list);

  // src/teacher_base.generated.ts
  var _teacher_baseBase = class _teacher_baseBase extends Laya.Scene {
  };
  __name(_teacher_baseBase, "teacher_baseBase");
  var teacher_baseBase = _teacher_baseBase;

  // src/teacher_base.ts
  var { regClass: regClass11 } = Laya;
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
      this.Iphoto.skin = "http://101.42.182.89:8000" + this.Iteacher.substring(1, this.Iteacher.length).replace("\\", "/");
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
  };
  __name(teacher_base, "teacher_base");
  teacher_base = __decorateClass([
    regClass11("dvxjFq89TFK78rZ1DJHZ2Q")
  ], teacher_base);

  // src/teacher_list_box.ts
  var { regClass: regClass12, property: property5 } = Laya;
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
    regClass12("L6P8iXKvTA2oNSN72tMwJA")
  ], teacher_list_box);

  // src/update_self.ts
  var { regClass: regClass13, property: property6 } = Laya;
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
          if (this.belong_text.substring(0, this.belong_text.length - 5) == belong.substring(0, belong.length - 2)) {
            this.owner.text = time;
            Laya.LocalStorage.setJSON("save_change", { "if_text_change": ifchange.if_text_change + "1", "change_belong": belong, "change_text": text, "change_time": time });
          }
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
    property6(String)
  ], update_self.prototype, "belong_text", 2);
  update_self = __decorateClass([
    regClass13("mHEgcCQkQkSpXzjYHnlAGg")
  ], update_self);
})();
