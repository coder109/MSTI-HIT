{
  "_$ver": 1,
  "_$id": "g76ejwsi",
  "_$runtime": "res://bcae0c6b-d5bd-4f0c-8d19-b1e2b21bea44",
  "_$type": "Scene",
  "left": 0,
  "right": 0,
  "top": 0,
  "bottom": 0,
  "name": "Scene2D",
  "autoDestroyAtClosed": true,
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
      "x": 66,
      "y": 69,
      "width": 1682,
      "height": 892,
      "_mouseState": 2,
      "centerX": -53,
      "itemTemplate": {
        "_$ref": "kbdpjnki",
        "_$tmpl": "itemRender"
      },
      "repeatX": 1,
      "repeatY": 9,
      "spaceY": 18,
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
          "height": 85,
          "_mouseState": 2,
          "space": 26,
          "align": "middle",
          "_$comp": [
            {
              "_$type": "5cd59020-d81a-473b-ba5b-d77f70210a0c",
              "scriptPath": "../src/date_list_box.ts"
            }
          ],
          "_$child": [
            {
              "_$id": "qrxxm61d",
              "_$type": "Label",
              "name": "no",
              "y": 25.5,
              "width": 72,
              "height": 34,
              "text": "预约1",
              "font": "SourceHanSansSC-Regular",
              "fontSize": 28,
              "color": "rgba(0, 0, 0, 1)",
              "fitContent": "yes",
              "valign": "top",
              "padding": "0,0,5,0"
            },
            {
              "_$id": "zfl571o1",
              "_$type": "Label",
              "name": "msg",
              "x": 98,
              "y": 28.5,
              "width": 120,
              "height": 28,
              "text": "",
              "fontSize": 25,
              "color": "#FFFFFF",
              "valign": "top",
              "padding": "0,0,0,0"
            },
            {
              "_$id": "lqmga4l8",
              "_$type": "Label",
              "name": "date_no",
              "x": 244,
              "y": 28.5,
              "width": 120,
              "height": 28,
              "visible": false,
              "text": "",
              "fontSize": 25,
              "color": "#FFFFFF",
              "valign": "top",
              "padding": "0,0,0,0"
            },
            {
              "_$id": "noigciuf",
              "_$type": "Label",
              "name": "teacher_id",
              "x": 390,
              "y": 28.5,
              "width": 120,
              "height": 28,
              "visible": false,
              "text": "",
              "fontSize": 25,
              "color": "#FFFFFF",
              "valign": "top",
              "padding": "0,0,0,0"
            },
            {
              "_$id": "m9v0g2qe",
              "_$type": "Label",
              "name": "date_status",
              "x": 536,
              "y": 28.5,
              "width": 120,
              "height": 28,
              "visible": false,
              "text": "",
              "fontSize": 22,
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
          "x": 1700,
          "y": 915,
          "width": 120,
          "height": 56,
          "_mouseState": 2,
          "right": -138,
          "bottom": -79,
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
              "now": "date_list.ls",
              "from": ""
            }
          ]
        }
      ]
    }
  ]
}