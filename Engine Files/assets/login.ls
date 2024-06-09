{
  "_$ver": 1,
  "_$id": "zjsok1h7",
  "_$runtime": "res://9b4db03b-f6cf-47dd-ac57-bdbdba5d2f88",
  "_$type": "Scene",
  "left": 0,
  "right": 0,
  "top": 0,
  "bottom": 0,
  "name": "Scene2D",
  "autoDestroyAtClosed": true,
  "_$child": [
    {
      "_$id": "91bpqm1q",
      "_$type": "Image",
      "name": "Image",
      "width": 1920,
      "height": 1080,
      "centerX": 0,
      "skin": "res://37da97e9-2873-4d2a-9220-5478e048949a",
      "color": "#ffffff"
    },
    {
      "_$id": "6802aosr",
      "_$type": "Image",
      "name": "Image(1)",
      "width": 1920,
      "height": 1080,
      "skin": "res://37da97e9-2873-4d2a-9220-5478e048949a",
      "color": "#ffffff"
    },
    {
      "_$id": "c59hfxq8",
      "_$type": "HBox",
      "name": "HBox",
      "x": 478,
      "y": 410,
      "width": 964,
      "height": 261,
      "_mouseState": 2,
      "centerX": 0,
      "centerY": 0,
      "space": 0,
      "_$child": [
        {
          "_$id": "qkkolcjo",
          "_$type": "VBox",
          "name": "VBox",
          "y": 13,
          "width": 758,
          "height": 235,
          "_mouseState": 2,
          "centerY": 0,
          "space": 65,
          "align": "center",
          "_$child": [
            {
              "_$id": "bipswvzj",
              "_$type": "HBox",
              "name": "HBox",
              "x": 30.5,
              "width": 697,
              "height": 80,
              "_mouseState": 2,
              "space": 26,
              "align": "middle",
              "_$child": [
                {
                  "_$id": "88yg7xyg",
                  "_$type": "Label",
                  "name": "Label",
                  "y": 23,
                  "width": 68,
                  "height": 35,
                  "centerY": 0,
                  "text": "账号",
                  "font": "SourceHanSansSC-Regular",
                  "fontSize": 34,
                  "color": "rgba(153, 153, 153, 1)",
                  "fitContent": "yes",
                  "align": "center",
                  "valign": "middle",
                  "padding": "0,0,0,0"
                },
                {
                  "_$id": "oypah9qr",
                  "_$var": true,
                  "_$type": "TextInput",
                  "name": "Tusername",
                  "x": 94,
                  "width": 601,
                  "height": 80,
                  "_mouseState": 2,
                  "text": "",
                  "fontSize": 31,
                  "color": "#FFFFFF",
                  "valign": "middle",
                  "overflow": "scroll",
                  "padding": "2,6,2,6",
                  "skin": "res://87262606-4dfe-490e-8644-7fd6496c2be7",
                  "type": "text",
                  "maxChars": 0,
                  "prompt": "请输入账号",
                  "promptColor": "#A9A9A9"
                }
              ]
            },
            {
              "_$id": "3y3rrro0",
              "_$type": "HBox",
              "name": "HBox(1)",
              "x": 30.5,
              "y": 145,
              "width": 697,
              "height": 80,
              "_mouseState": 2,
              "space": 26,
              "align": "middle",
              "_$child": [
                {
                  "_$id": "52vp9w7j",
                  "_$type": "Label",
                  "name": "Label(1)",
                  "y": 22.5,
                  "width": 68,
                  "height": 35,
                  "text": "密码",
                  "font": "SourceHanSansSC-Regular",
                  "fontSize": 34,
                  "color": "rgba(153, 153, 153, 1)",
                  "fitContent": "yes",
                  "align": "center",
                  "valign": "middle",
                  "padding": "0,0,0,0"
                },
                {
                  "_$id": "7ae696bo",
                  "_$var": true,
                  "_$type": "TextInput",
                  "name": "Tpassword",
                  "x": 94,
                  "width": 601,
                  "height": 80,
                  "_mouseState": 2,
                  "text": "",
                  "fontSize": 31,
                  "color": "#FFFFFF",
                  "valign": "middle",
                  "overflow": "scroll",
                  "padding": "2,6,2,6",
                  "skin": "res://87262606-4dfe-490e-8644-7fd6496c2be7",
                  "type": "password",
                  "maxChars": 0,
                  "prompt": "请输入密码",
                  "promptColor": "#A9A9A9"
                }
              ]
            }
          ]
        },
        {
          "_$id": "sfr994yv",
          "_$type": "VBox",
          "name": "VBox",
          "x": 758,
          "y": 37,
          "width": 173,
          "height": 188,
          "_mouseState": 2,
          "centerY": 0,
          "space": 58,
          "align": "center",
          "_$child": [
            {
              "_$id": "jcoagfdf",
              "_$var": true,
              "_$type": "Button",
              "name": "Blogin",
              "x": 7,
              "width": 160,
              "height": 60,
              "_mouseState": 2,
              "centerX": 0,
              "skin": "res://92a393b3-d00c-4486-ae48-e233dc5b8c37",
              "label": "登录",
              "labelFont": "SourceHanSansSC-Regular",
              "labelSize": 30,
              "labelColors": "#ffffff,#ffffff,#ffffff",
              "labelAlign": "center",
              "labelVAlign": "middle",
              "_$comp": [
                {
                  "_$type": "84368dcb-267f-4636-a3d3-a30262f92f3e",
                  "scriptPath": "../src/Button_pointer.ts"
                }
              ]
            },
            {
              "_$id": "nuryyn8a",
              "_$type": "Button",
              "name": "Button",
              "x": 8,
              "y": 118,
              "width": 160,
              "height": 60,
              "_mouseState": 2,
              "centerX": 1,
              "skin": "res://4242dae5-6013-4371-9c99-861b789d4a9d",
              "label": "返回",
              "labelFont": "SourceHanSansSC-Regular",
              "labelSize": 30,
              "labelColors": "#ffffff,#ffffff,#ffffff",
              "labelAlign": "center",
              "labelVAlign": "middle",
              "_$comp": [
                {
                  "_$type": "249528d4-9786-4a2b-b76d-685d11a5b47e",
                  "scriptPath": "../src/Bclose.ts",
                  "now": "login.ls",
                  "from": "hello.ls"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}