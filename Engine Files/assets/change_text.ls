{
  "_$ver": 1,
  "_$id": "u4fjoa0w",
  "_$runtime": "res://8cd36f94-2b3c-42c1-b2ab-b7a89a0a69c0",
  "_$type": "Scene",
  "left": 0,
  "right": 0,
  "top": 0,
  "bottom": 0,
  "name": "Scene2D",
  "autoDestroyAtClosed": true,
  "_$child": [
    {
      "_$id": "b29dajsc",
      "_$type": "Image",
      "name": "Image",
      "width": 1920,
      "height": 1080,
      "centerX": 0,
      "skin": "res://37da97e9-2873-4d2a-9220-5478e048949a",
      "color": "#ffffff"
    },
    {
      "_$id": "dapffsjs",
      "_$type": "Image",
      "name": "Image(1)",
      "width": 1920,
      "height": 1080,
      "skin": "res://37da97e9-2873-4d2a-9220-5478e048949a",
      "color": "#ffffff"
    },
    {
      "_$id": "fzbp3lpg",
      "_$var": true,
      "_$type": "Label",
      "name": "Ltitle",
      "x": 39,
      "y": 28,
      "width": 89,
      "height": 36,
      "left": 39,
      "top": 28,
      "text": "Label",
      "font": "SourceHanSansSC-Regular",
      "fontSize": 35,
      "color": "rgba(112, 124, 116, 1)",
      "fitContent": "yes",
      "valign": "top",
      "padding": "0,0,0,0"
    },
    {
      "_$id": "uay32thl",
      "_$type": "VBox",
      "name": "VBox",
      "width": 1920,
      "height": 1080,
      "_mouseState": 2,
      "centerX": 0,
      "space": 0,
      "align": "center",
      "_$child": [
        {
          "_$id": "y26g9itf",
          "_$var": true,
          "_$type": "TextArea",
          "name": "Tdata",
          "x": 51,
          "y": 73,
          "width": 1818,
          "height": 818,
          "_mouseState": 2,
          "bottom": 189,
          "centerX": 0,
          "centerY": -58,
          "text": "",
          "font": "SourceHanSansSC-Regular",
          "fontSize": 38,
          "color": "rgba(112, 124, 116, 1)",
          "html": true,
          "valign": "top",
          "alignItems": "top",
          "bgColor": "rgba(169, 169, 177, 1)",
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
      "_$id": "3zctazuj",
      "_$type": "HBox",
      "name": "HBox",
      "x": 566,
      "y": 906,
      "width": 789,
      "height": 102,
      "_mouseState": 2,
      "centerX": 0,
      "space": 110,
      "align": "middle",
      "_$child": [
        {
          "_$id": "56r2xfc1",
          "_$var": true,
          "_$type": "Button",
          "name": "Bclose",
          "y": 13,
          "width": 186,
          "height": 76,
          "_mouseState": 2,
          "skin": "res://4242dae5-6013-4371-9c99-861b789d4a9d",
          "label": "返回",
          "labelFont": "SourceHanSansSC-Regular",
          "labelSize": 38,
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
          "_$id": "1nu1eua5",
          "_$var": true,
          "_$type": "Button",
          "name": "Bcommit",
          "x": 296,
          "y": 13,
          "width": 186,
          "height": 76,
          "_mouseState": 2,
          "skin": "res://92a393b3-d00c-4486-ae48-e233dc5b8c37",
          "label": "更新",
          "labelFont": "SourceHanSansSC-Regular",
          "labelSize": 38,
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
          "_$id": "0gkw6my4",
          "_$var": true,
          "_$type": "Button",
          "name": "Bhtml",
          "x": 592,
          "y": 13,
          "width": 186,
          "height": 76,
          "_mouseState": 2,
          "skin": "res://4242dae5-6013-4371-9c99-861b789d4a9d",
          "label": "HTML支持",
          "labelFont": "SourceHanSansSC-Regular",
          "labelSize": 34,
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