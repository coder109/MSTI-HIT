{
  "_$ver": 1,
  "_$id": "tg26ltsw",
  "_$runtime": "res://cc83eba9-ea03-4ef9-9972-b92e9778eabf",
  "_$type": "Scene",
  "left": 0,
  "right": 0,
  "top": 0,
  "bottom": 0,
  "name": "Scene2D",
  "_$child": [
    {
      "_$id": "302km0o6",
      "_$type": "Image",
      "name": "Image(2)",
      "width": 1920,
      "height": 1080,
      "centerY": 0,
      "skin": "res://37da97e9-2873-4d2a-9220-5478e048949a",
      "color": "#ffffff"
    },
    {
      "_$id": "o1qa6cvk",
      "_$type": "Image",
      "name": "Image",
      "width": 1920,
      "height": 1080,
      "centerX": 0,
      "skin": "res://37da97e9-2873-4d2a-9220-5478e048949a",
      "color": "#ffffff"
    },
    {
      "_$id": "wcilxpyp",
      "_$type": "Image",
      "name": "Image(1)",
      "width": 1920,
      "height": 1080,
      "skin": "res://37da97e9-2873-4d2a-9220-5478e048949a",
      "color": "#ffffff"
    },
    {
      "_$id": "qabfbbq6",
      "_$type": "HBox",
      "name": "HBox",
      "width": 1920,
      "height": 1080,
      "_mouseState": 2,
      "space": 155,
      "align": "middle",
      "_$child": [
        {
          "_$id": "2t0f2p4y",
          "_$type": "VBox",
          "name": "VBox",
          "x": 90,
          "y": 59,
          "width": 846,
          "height": 962,
          "_mouseState": 2,
          "left": 90,
          "space": 15,
          "align": "left",
          "_$child": [
            {
              "_$id": "qigl3fbw",
              "_$type": "Label",
              "name": "Label",
              "width": 204,
              "height": 35,
              "text": "预约详情描述",
              "font": "SourceHanSansSC-Regular",
              "fontSize": 34,
              "color": "rgba(153, 153, 153, 1)",
              "fitContent": "yes",
              "align": "center",
              "valign": "middle",
              "padding": "0,0,0,0"
            },
            {
              "_$id": "5pjsbvr4",
              "_$var": true,
              "_$type": "TextArea",
              "name": "Tdata",
              "y": 50,
              "width": 823,
              "height": 899,
              "_mouseState": 2,
              "text": "",
              "font": "SourceHanSansSC-Regular",
              "fontSize": 38,
              "color": "rgba(112, 124, 116, 1)",
              "valign": "top",
              "alignItems": "top",
              "bgColor": "rgba(233, 212, 165, 1)",
              "overflow": "scroll",
              "padding": "0,0,0,0",
              "skin": "res://87262606-4dfe-490e-8644-7fd6496c2be7",
              "type": "text",
              "maxChars": 0,
              "prompt": "",
              "promptColor": "#A9A9A9",
              "scrollType": 2,
              "vScrollBarSkin": "res://fc3bb457-8d97-4456-b6b6-304c6b064689"
            }
          ]
        },
        {
          "_$id": "titgi9uu",
          "_$type": "VBox",
          "name": "VBox",
          "x": 1001,
          "y": 124,
          "width": 846,
          "height": 879,
          "_mouseState": 2,
          "centerY": 23,
          "space": 90,
          "align": "center",
          "_$child": [
            {
              "_$id": "epj1sl7v",
              "_$type": "HBox",
              "name": "HBox",
              "x": 28,
              "width": 790,
              "height": 80,
              "_mouseState": 2,
              "space": 26,
              "align": "middle",
              "_$child": [
                {
                  "_$id": "i099jo2s",
                  "_$type": "Label",
                  "name": "Label",
                  "y": 23,
                  "width": 136,
                  "height": 35,
                  "centerY": 0,
                  "text": "预约时间",
                  "font": "SourceHanSansSC-Regular",
                  "fontSize": 34,
                  "color": "rgba(153, 153, 153, 1)",
                  "fitContent": "yes",
                  "align": "center",
                  "valign": "middle",
                  "padding": "0,0,0,0"
                },
                {
                  "_$id": "p6wfgkkh",
                  "_$var": true,
                  "_$type": "TextInput",
                  "name": "time",
                  "x": 162,
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
                  "prompt": "",
                  "promptColor": "#A9A9A9"
                }
              ]
            },
            {
              "_$id": "9guwh0uy",
              "_$type": "HBox",
              "name": "HBox(1)",
              "x": 28,
              "y": 170,
              "width": 790,
              "height": 80,
              "_mouseState": 2,
              "space": 26,
              "align": "middle",
              "_$child": [
                {
                  "_$id": "76iyr1k9",
                  "_$type": "Label",
                  "name": "Label",
                  "y": 23,
                  "width": 136,
                  "height": 35,
                  "centerY": 0,
                  "text": "预约地点",
                  "font": "SourceHanSansSC-Regular",
                  "fontSize": 34,
                  "color": "rgba(153, 153, 153, 1)",
                  "fitContent": "yes",
                  "align": "center",
                  "valign": "middle",
                  "padding": "0,0,0,0"
                },
                {
                  "_$id": "qmwxguc7",
                  "_$var": true,
                  "_$type": "TextInput",
                  "name": "location",
                  "x": 162,
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
                  "prompt": "",
                  "promptColor": "#A9A9A9"
                }
              ]
            },
            {
              "_$id": "07bzs50j",
              "_$type": "HBox",
              "name": "HBox(2)",
              "x": 28,
              "y": 340,
              "width": 790,
              "height": 80,
              "_mouseState": 2,
              "space": 26,
              "align": "middle",
              "_$child": [
                {
                  "_$id": "4xbrvutk",
                  "_$type": "Label",
                  "name": "Label",
                  "y": 23,
                  "width": 136,
                  "height": 35,
                  "centerY": 0,
                  "text": "预约邮箱",
                  "font": "SourceHanSansSC-Regular",
                  "fontSize": 34,
                  "color": "rgba(153, 153, 153, 1)",
                  "fitContent": "yes",
                  "align": "center",
                  "valign": "middle",
                  "padding": "0,0,0,0"
                },
                {
                  "_$id": "0x861679",
                  "_$var": true,
                  "_$type": "TextInput",
                  "name": "email",
                  "x": 162,
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
                  "prompt": "",
                  "promptColor": "#A9A9A9"
                }
              ]
            },
            {
              "_$id": "tjzn39sz",
              "_$type": "HBox",
              "name": "HBox(3)",
              "x": 28,
              "y": 510,
              "width": 790,
              "height": 80,
              "_mouseState": 2,
              "space": 60,
              "align": "middle",
              "_$child": [
                {
                  "_$id": "213d6zcy",
                  "_$type": "Label",
                  "name": "Label",
                  "y": 23,
                  "width": 102,
                  "height": 35,
                  "centerY": 0,
                  "text": "验证码",
                  "font": "SourceHanSansSC-Regular",
                  "fontSize": 34,
                  "color": "rgba(153, 153, 153, 1)",
                  "fitContent": "yes",
                  "align": "center",
                  "valign": "middle",
                  "padding": "0,0,0,0"
                },
                {
                  "_$id": "mo4n8ile",
                  "_$var": true,
                  "_$type": "TextInput",
                  "name": "code",
                  "x": 162,
                  "width": 211,
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
                  "prompt": "",
                  "promptColor": "#A9A9A9"
                },
                {
                  "_$id": "je2gv2me",
                  "_$var": true,
                  "_$type": "Button",
                  "name": "Bsendcode",
                  "x": 433,
                  "y": 8.5,
                  "width": 139,
                  "height": 63,
                  "_mouseState": 2,
                  "skin": "res://92a393b3-d00c-4486-ae48-e233dc5b8c37",
                  "label": "发送",
                  "labelFont": "SourceHanSansSC-Regular",
                  "labelSize": 26,
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
                  "_$id": "t6x5e64w",
                  "_$var": true,
                  "_$type": "Button",
                  "name": "Bevaluate",
                  "x": 632,
                  "y": 8.5,
                  "width": 139,
                  "height": 63,
                  "_mouseState": 2,
                  "skin": "res://4242dae5-6013-4371-9c99-861b789d4a9d",
                  "label": "验证",
                  "labelFont": "SourceHanSansSC-Regular",
                  "labelSize": 26,
                  "labelColors": "#ffffff,#ffffff,#ffffff",
                  "labelAlign": "center",
                  "labelVAlign": "middle",
                  "_$comp": [
                    {
                      "_$type": "84368dcb-267f-4636-a3d3-a30262f92f3e",
                      "scriptPath": "../src/Button_pointer.ts"
                    }
                  ]
                }
              ]
            },
            {
              "_$id": "i9gj6tqi",
              "_$type": "HBox",
              "name": "HBox(4)",
              "x": 28,
              "y": 752,
              "width": 790,
              "height": 118,
              "_mouseState": 2,
              "bottom": 9,
              "space": 31,
              "align": "middle",
              "_$child": [
                {
                  "_$id": "tc7hvqcm",
                  "_$type": "Label",
                  "name": "Label",
                  "y": 27,
                  "width": 450,
                  "height": 64,
                  "alpha": 0.638,
                  "text": "请使用校园邮箱进行验证\n教师反馈信息会发送到预约邮箱中",
                  "font": "SourceHanSansSC-Regular",
                  "fontSize": 30,
                  "color": "rgba(153, 153, 153, 1)",
                  "fitContent": "yes",
                  "valign": "middle",
                  "padding": "0,0,0,0"
                },
                {
                  "_$id": "u1bqxi36",
                  "_$var": true,
                  "_$type": "Button",
                  "name": "Bcommite",
                  "x": 481,
                  "y": 27.5,
                  "width": 139,
                  "height": 63,
                  "_mouseState": 2,
                  "skin": "res://60fe1a11-1ffa-4f21-b1d4-b23a969e2701",
                  "label": "预约",
                  "labelFont": "SourceHanSansSC-Regular",
                  "labelSize": 26,
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
                  "_$id": "vxz3x8nu",
                  "_$var": true,
                  "_$type": "Button",
                  "name": "Bgoback",
                  "x": 651,
                  "y": 27.5,
                  "width": 139,
                  "height": 63,
                  "_mouseState": 2,
                  "skin": "res://4242dae5-6013-4371-9c99-861b789d4a9d",
                  "label": "返回",
                  "labelFont": "SourceHanSansSC-Regular",
                  "labelSize": 25,
                  "labelColors": "#ffffff,#ffffff,#ffffff",
                  "labelAlign": "center",
                  "labelVAlign": "middle",
                  "_$comp": [
                    {
                      "_$type": "84368dcb-267f-4636-a3d3-a30262f92f3e",
                      "scriptPath": "../src/Button_pointer.ts"
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}