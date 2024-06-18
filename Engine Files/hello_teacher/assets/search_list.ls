{
  "_$ver": 1,
  "_$id": "g76ejwsi",
  "_$runtime": "res://cdde41ee-5738-4d93-83d3-9ee370f80523",
  "_$type": "Scene",
  "left": 0,
  "right": 0,
  "top": 0,
  "bottom": 0,
  "name": "Scene2D",
  "autoDestroyAtClosed": true,
  "_$comp": [
    {
      "_$type": "e3f16ca9-d352-4b39-94dc-803c66a51cbd",
      "scriptPath": "../src/search_list.ts",
      "text": ""
    }
  ],
  "_$child": [
    {
      "_$id": "dzcavhxl",
      "_$type": "Image",
      "name": "Image",
      "width": 1920,
      "height": 1080,
      "centerX": 0,
      "skin": "res://37da97e9-2873-4d2a-9220-5478e048949a",
      "color": "#ffffff"
    },
    {
      "_$id": "e7at3geg",
      "_$type": "Image",
      "name": "Image(1)",
      "width": 1920,
      "height": 1080,
      "skin": "res://37da97e9-2873-4d2a-9220-5478e048949a",
      "color": "#ffffff"
    },
    {
      "_$id": "uj7tps1t",
      "_$var": true,
      "_$type": "List",
      "name": "List",
      "x": 256,
      "y": 174,
      "width": 1368,
      "height": 782,
      "_mouseState": 2,
      "centerX": -20,
      "itemTemplate": {
        "_$ref": "kbdpjnki",
        "_$tmpl": "itemRender"
      },
      "repeatX": 1,
      "repeatY": 5,
      "spaceY": 43,
      "scrollType": 2,
      "vScrollBarSkin": "res://fc3bb457-8d97-4456-b6b6-304c6b064689",
      "selectEnable": true,
      "_$child": [
        {
          "_$id": "kbdpjnki",
          "_$type": "HBox",
          "name": "HBox",
          "y": 1,
          "width": 1202,
          "height": 134,
          "_mouseState": 2,
          "space": 35,
          "align": "bottom",
          "_$comp": [
            {
              "_$type": "2fa3fc89-72af-4c0d-a835-237bdad33024",
              "scriptPath": "../src/teacher_list_box.ts"
            }
          ],
          "_$child": [
            {
              "_$id": "tllwy5jb",
              "_$type": "Image",
              "name": "teacher_pic",
              "y": 5,
              "width": 122,
              "height": 129,
              "skin": "res://efcc754e-fe7d-4dee-918b-60c77cf1b0d3",
              "color": "#ffffff"
            },
            {
              "_$id": "qrxxm61d",
              "_$type": "Label",
              "name": "teacher_msg",
              "x": 157,
              "y": 103,
              "width": 65,
              "height": 31,
              "text": "老师1",
              "font": "SourceHanSansSC-Regular",
              "fontSize": 25,
              "color": "rgba(0, 0, 0, 1)",
              "fitContent": "yes",
              "valign": "top",
              "padding": "0,0,5,0"
            },
            {
              "_$id": "zfl571o1",
              "_$type": "Label",
              "name": "teacher_id",
              "x": 257,
              "y": 106,
              "width": 120,
              "height": 28,
              "visible": false,
              "text": "",
              "fontSize": 20,
              "color": "#FFFFFF",
              "valign": "top",
              "padding": "0,0,0,0"
            }
          ]
        },
        {
          "_$id": "wz00mq7k",
          "_$type": "Button",
          "name": "Button",
          "x": 1410,
          "y": 804,
          "width": 120,
          "height": 56,
          "_mouseState": 2,
          "right": -162,
          "bottom": -78,
          "skin": "res://4242dae5-6013-4371-9c99-861b789d4a9d",
          "label": "返回",
          "labelFont": "SourceHanSansSC-Regular",
          "labelSize": 25,
          "labelColors": "#ffffff,#ffffff,#ffffff",
          "labelAlign": "center",
          "labelVAlign": "middle",
          "_$comp": [
            {
              "_$type": "249528d4-9786-4a2b-b76d-685d11a5b47e",
              "scriptPath": "../src/Bclose.ts",
              "now": "search_list.ls",
              "from": "hello.ls"
            }
          ]
        }
      ]
    },
    {
      "_$id": "alpj6q6e",
      "_$type": "HBox",
      "name": "HBox",
      "x": 295,
      "y": 65.49999999999994,
      "width": 1285,
      "height": 76,
      "_mouseState": 2,
      "centerX": -23,
      "space": 36,
      "align": "middle",
      "_$child": [
        {
          "_$id": "751tlrio",
          "_$var": true,
          "_$type": "TextInput",
          "name": "search_input",
          "y": 2,
          "width": 816,
          "height": 72,
          "_mouseState": 2,
          "text": "",
          "font": "SourceHanSansSC-Regular",
          "fontSize": 28,
          "color": "rgba(4, 4, 4, 1)",
          "valign": "middle",
          "overflow": "scroll",
          "padding": "2,6,2,6",
          "skin": "res://87262606-4dfe-490e-8644-7fd6496c2be7",
          "type": "text",
          "maxChars": 20,
          "prompt": "请输入搜索信息",
          "promptColor": "#A9A9A9"
        },
        {
          "_$id": "ssz965qj",
          "_$var": true,
          "_$type": "Button",
          "name": "Bsearch",
          "x": 852,
          "y": 10,
          "width": 158,
          "height": 56,
          "_mouseState": 2,
          "skin": "res://60fe1a11-1ffa-4f21-b1d4-b23a969e2701",
          "label": "搜索",
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
        },
        {
          "_$id": "k27l3drj",
          "_$var": true,
          "_$type": "ComboBox",
          "name": "selectBox1",
          "x": 1046,
          "y": 16.5,
          "width": 224,
          "height": 43,
          "_mouseState": 2,
          "skin": "res://4d91c816-a493-4d44-b515-21a863ac9b42",
          "labels": "无筛选,航天学院,电子与信息工程学院,机电工程学院,材料科学与工程学院,能源科学与工程学院,电气工程及自动化学院,仪器科学与工程学院,数学学院,物理学院,经济与管理学院,外国语学院,社会科学学院,马克思主义学院,土木工程学院,环境学院,建筑与设计学院,交通科学与工程学院,计算学部,计算机科学与技术学院,人工智能学院,国家示范性软件学院,网络空间安全学院,化工与化学学院,医学与健康学院,生命科学与技术学院,未来技术学院,创新创业学院,体育部,空间环境与物质科学研究院（国家大科学工程）,哈尔滨工业大学（威海）,哈尔滨工业大学（深圳）,深圳国际设计学院",
          "labelFont": "SourceHanSansSC-Regular",
          "labelSize": 18,
          "labelColors": "#000000,#000000,#000000",
          "itemSize": 18,
          "itemColors": "#5e95b6,#ffffff,#000000,#8fa4b1,#ffffff",
          "visibleNum": 18,
          "scrollType": 2,
          "scrollBarSkin": "",
          "selectedIndex": 0,
          "selectedLabel": "无筛选",
          "defaultLabel": "",
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