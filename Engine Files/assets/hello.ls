{
  "_$ver": 1,
  "_$id": "lx8mwule",
  "_$runtime": "res://24a2acbd-2dc7-41fb-abca-39e38e72b0e7",
  "_$type": "Scene",
  "left": 0,
  "right": 0,
  "top": 0,
  "bottom": 0,
  "name": "Scene2D",
  "autoDestroyAtClosed": true,
  "_$child": [
    {
      "_$id": "r877rwwy",
      "_$type": "Image",
      "name": "Image",
      "width": 1920,
      "height": 1080,
      "centerX": 0,
      "centerY": 0,
      "skin": "res://37da97e9-2873-4d2a-9220-5478e048949a",
      "color": "#ffffff"
    },
    {
      "_$id": "5jaapk5j",
      "_$type": "HBox",
      "name": "HBox",
      "x": 344,
      "y": 133.49999999999994,
      "width": 1232,
      "height": 76,
      "_mouseState": 2,
      "centerX": 0,
      "space": 46,
      "align": "middle",
      "_$child": [
        {
          "_$id": "qlk0407b",
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
          "_$id": "dyn6b1gc",
          "_$var": true,
          "_$type": "Button",
          "name": "Bsearch",
          "x": 862,
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
          "_$id": "lh5q9sbz",
          "_$var": true,
          "_$type": "Button",
          "name": "Blogin",
          "x": 1066,
          "y": 10,
          "width": 158,
          "height": 56,
          "_mouseState": 2,
          "skin": "res://92a393b3-d00c-4486-ae48-e233dc5b8c37",
          "label": "登录",
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
    },
    {
      "_$id": "ajbawjer",
      "_$type": "Label",
      "name": "Label",
      "x": 249,
      "y": 253,
      "width": 120,
      "height": 28,
      "centerX": -651,
      "text": "教师推荐",
      "font": "SourceHanSansSC-Regular",
      "fontSize": 25,
      "color": "rgba(153, 153, 153, 1)",
      "html": true,
      "valign": "top",
      "padding": "0,0,0,0"
    },
    {
      "_$id": "4wwbfyyg",
      "_$type": "HBox",
      "name": "HBox1",
      "x": 313,
      "y": 318,
      "width": 1294,
      "height": 299,
      "centerX": 0,
      "space": 138,
      "align": "middle",
      "_$child": [
        {
          "_$id": "jy1yp264",
          "_$type": "Box",
          "name": "Box",
          "y": -5.5,
          "width": 220,
          "height": 310,
          "bgColor": "rgba(255, 255, 255, 1)",
          "_$child": [
            {
              "_$id": "f1skne97",
              "_$var": true,
              "_$type": "Image",
              "name": "Iteacher1",
              "x": 32,
              "y": 52,
              "width": 157,
              "height": 160,
              "top": 52,
              "centerX": 0,
              "skin": "res://efcc754e-fe7d-4dee-918b-60c77cf1b0d3",
              "sizeGrid": "0,0,0,0,0",
              "color": "#ffffff",
              "_$comp": [
                {
                  "_$type": "84368dcb-267f-4636-a3d3-a30262f92f3e",
                  "scriptPath": "../src/Button_pointer.ts"
                }
              ],
              "_$child": [
                {
                  "_$id": "72038xvg",
                  "_$type": "Label",
                  "name": "Label",
                  "x": 50,
                  "y": 175,
                  "width": 57,
                  "height": 23,
                  "top": 175,
                  "centerX": 0,
                  "text": "老师1",
                  "font": "SourceHanSansSC-Regular",
                  "fontSize": 22,
                  "color": "rgba(0, 0, 0, 1)",
                  "fitContent": "yes",
                  "align": "center",
                  "valign": "middle",
                  "padding": "0,0,0,0"
                }
              ]
            }
          ]
        },
        {
          "_$id": "87agit6r",
          "_$type": "Box",
          "name": "Box",
          "x": 358,
          "y": -5.5,
          "width": 220,
          "height": 310,
          "bgColor": "rgba(255, 255, 255, 1)",
          "_$child": [
            {
              "_$id": "hgobwyuw",
              "_$var": true,
              "_$type": "Image",
              "name": "Iteacher2",
              "x": 32,
              "y": 52,
              "width": 157,
              "height": 160,
              "top": 52,
              "centerX": 0,
              "skin": "res://efcc754e-fe7d-4dee-918b-60c77cf1b0d3",
              "color": "#ffffff",
              "_$comp": [
                {
                  "_$type": "84368dcb-267f-4636-a3d3-a30262f92f3e",
                  "scriptPath": "../src/Button_pointer.ts"
                }
              ],
              "_$child": [
                {
                  "_$id": "oqrtm7jv",
                  "_$type": "Label",
                  "name": "Label",
                  "x": 50,
                  "y": 175,
                  "width": 57,
                  "height": 23,
                  "top": 175,
                  "centerX": 0,
                  "text": "老师2",
                  "font": "SourceHanSansSC-Regular",
                  "fontSize": 22,
                  "color": "rgba(0, 0, 0, 1)",
                  "fitContent": "yes",
                  "align": "center",
                  "valign": "middle",
                  "padding": "0,0,0,0"
                }
              ]
            }
          ]
        },
        {
          "_$id": "f9zvhvvm",
          "_$type": "Box",
          "name": "Box",
          "x": 716,
          "y": -5.5,
          "width": 220,
          "height": 310,
          "bgColor": "rgba(255, 255, 255, 1)",
          "_$child": [
            {
              "_$id": "tx91sif7",
              "_$var": true,
              "_$type": "Image",
              "name": "Iteacher3",
              "x": 32,
              "y": 52,
              "width": 157,
              "height": 160,
              "top": 52,
              "centerX": 0,
              "skin": "res://efcc754e-fe7d-4dee-918b-60c77cf1b0d3",
              "color": "#ffffff",
              "_$comp": [
                {
                  "_$type": "84368dcb-267f-4636-a3d3-a30262f92f3e",
                  "scriptPath": "../src/Button_pointer.ts"
                }
              ],
              "_$child": [
                {
                  "_$id": "iv43h8b2",
                  "_$type": "Label",
                  "name": "Label",
                  "x": 50,
                  "y": 175,
                  "width": 57,
                  "height": 23,
                  "top": 175,
                  "centerX": 0,
                  "text": "老师3",
                  "font": "SourceHanSansSC-Regular",
                  "fontSize": 22,
                  "color": "rgba(0, 0, 0, 1)",
                  "fitContent": "yes",
                  "align": "center",
                  "valign": "middle",
                  "padding": "0,0,0,0"
                }
              ]
            }
          ]
        },
        {
          "_$id": "19tb3y32",
          "_$type": "Box",
          "name": "Box",
          "x": 1074,
          "y": -5.5,
          "width": 220,
          "height": 310,
          "bgColor": "rgba(255, 255, 255, 1)",
          "_$child": [
            {
              "_$id": "dkvstqtf",
              "_$var": true,
              "_$type": "Image",
              "name": "Iteacher4",
              "x": 32,
              "y": 52,
              "width": 157,
              "height": 160,
              "top": 52,
              "centerX": 0,
              "skin": "res://efcc754e-fe7d-4dee-918b-60c77cf1b0d3",
              "color": "#ffffff",
              "_$comp": [
                {
                  "_$type": "84368dcb-267f-4636-a3d3-a30262f92f3e",
                  "scriptPath": "../src/Button_pointer.ts"
                }
              ],
              "_$child": [
                {
                  "_$id": "332xsehm",
                  "_$type": "Label",
                  "name": "Label",
                  "x": 50,
                  "y": 175,
                  "width": 57,
                  "height": 23,
                  "top": 175,
                  "centerX": 0,
                  "text": "老师4",
                  "font": "SourceHanSansSC-Regular",
                  "fontSize": 22,
                  "color": "rgba(0, 0, 0, 1)",
                  "fitContent": "yes",
                  "align": "center",
                  "valign": "middle",
                  "padding": "0,0,0,0"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "_$id": "urve8zi1",
      "_$type": "HBox",
      "name": "HBox2",
      "x": 313,
      "y": 676,
      "width": 1294,
      "height": 299,
      "centerX": 0,
      "space": 138,
      "align": "middle",
      "_$child": [
        {
          "_$id": "cob8emzs",
          "_$type": "Box",
          "name": "Box",
          "y": -5.5,
          "width": 220,
          "height": 310,
          "bgColor": "rgba(255, 255, 255, 1)",
          "_$child": [
            {
              "_$id": "rxpyympo",
              "_$var": true,
              "_$type": "Image",
              "name": "Iteacher5",
              "x": 32,
              "y": 52,
              "width": 157,
              "height": 160,
              "top": 52,
              "centerX": 0,
              "skin": "res://efcc754e-fe7d-4dee-918b-60c77cf1b0d3",
              "color": "#ffffff",
              "_$comp": [
                {
                  "_$type": "84368dcb-267f-4636-a3d3-a30262f92f3e",
                  "scriptPath": "../src/Button_pointer.ts"
                }
              ],
              "_$child": [
                {
                  "_$id": "tj5mbg46",
                  "_$type": "Label",
                  "name": "Label",
                  "x": 50,
                  "y": 175,
                  "width": 57,
                  "height": 23,
                  "top": 175,
                  "centerX": 0,
                  "text": "老师5",
                  "font": "SourceHanSansSC-Regular",
                  "fontSize": 22,
                  "color": "rgba(0, 0, 0, 1)",
                  "fitContent": "yes",
                  "align": "center",
                  "valign": "middle",
                  "padding": "0,0,0,0"
                }
              ]
            }
          ]
        },
        {
          "_$id": "h0g3mw71",
          "_$type": "Box",
          "name": "Box",
          "x": 358,
          "y": -5.5,
          "width": 220,
          "height": 310,
          "bgColor": "rgba(255, 255, 255, 1)",
          "_$child": [
            {
              "_$id": "mahozq9b",
              "_$var": true,
              "_$type": "Image",
              "name": "Iteacher6",
              "x": 32,
              "y": 52,
              "width": 157,
              "height": 160,
              "top": 52,
              "centerX": 0,
              "skin": "res://efcc754e-fe7d-4dee-918b-60c77cf1b0d3",
              "color": "#ffffff",
              "_$comp": [
                {
                  "_$type": "84368dcb-267f-4636-a3d3-a30262f92f3e",
                  "scriptPath": "../src/Button_pointer.ts"
                }
              ],
              "_$child": [
                {
                  "_$id": "oomkinbn",
                  "_$type": "Label",
                  "name": "Label",
                  "x": 50,
                  "y": 175,
                  "width": 57,
                  "height": 23,
                  "top": 175,
                  "centerX": 0,
                  "text": "老师6",
                  "font": "SourceHanSansSC-Regular",
                  "fontSize": 22,
                  "color": "rgba(0, 0, 0, 1)",
                  "fitContent": "yes",
                  "align": "center",
                  "valign": "middle",
                  "padding": "0,0,0,0"
                }
              ]
            }
          ]
        },
        {
          "_$id": "uxnothdd",
          "_$type": "Box",
          "name": "Box",
          "x": 716,
          "y": -5.5,
          "width": 220,
          "height": 310,
          "bgColor": "rgba(255, 255, 255, 1)",
          "_$child": [
            {
              "_$id": "ourlvrt0",
              "_$var": true,
              "_$type": "Image",
              "name": "Iteacher7",
              "x": 32,
              "y": 52,
              "width": 157,
              "height": 160,
              "top": 52,
              "centerX": 0,
              "skin": "res://efcc754e-fe7d-4dee-918b-60c77cf1b0d3",
              "color": "#ffffff",
              "_$comp": [
                {
                  "_$type": "84368dcb-267f-4636-a3d3-a30262f92f3e",
                  "scriptPath": "../src/Button_pointer.ts"
                }
              ],
              "_$child": [
                {
                  "_$id": "kk3n3ntt",
                  "_$type": "Label",
                  "name": "Label",
                  "x": 50,
                  "y": 175,
                  "width": 57,
                  "height": 23,
                  "top": 175,
                  "centerX": 0,
                  "text": "老师7",
                  "font": "SourceHanSansSC-Regular",
                  "fontSize": 22,
                  "color": "rgba(0, 0, 0, 1)",
                  "fitContent": "yes",
                  "align": "center",
                  "valign": "middle",
                  "padding": "0,0,0,0"
                }
              ]
            }
          ]
        },
        {
          "_$id": "nl47z8j9",
          "_$type": "Box",
          "name": "Box",
          "x": 1074,
          "y": -5.5,
          "width": 220,
          "height": 310,
          "bgColor": "rgba(255, 255, 255, 1)",
          "_$child": [
            {
              "_$id": "smu9pcun",
              "_$var": true,
              "_$type": "Image",
              "name": "Iteacher8",
              "x": 32,
              "y": 52,
              "width": 157,
              "height": 160,
              "top": 52,
              "centerX": 0,
              "skin": "res://efcc754e-fe7d-4dee-918b-60c77cf1b0d3",
              "color": "#ffffff",
              "_$comp": [
                {
                  "_$type": "84368dcb-267f-4636-a3d3-a30262f92f3e",
                  "scriptPath": "../src/Button_pointer.ts"
                }
              ],
              "_$child": [
                {
                  "_$id": "5z1wo1qq",
                  "_$type": "Label",
                  "name": "Label",
                  "x": 50,
                  "y": 175,
                  "width": 57,
                  "height": 23,
                  "top": 175,
                  "centerX": 0,
                  "text": "老师8",
                  "font": "SourceHanSansSC-Regular",
                  "fontSize": 22,
                  "color": "rgba(0, 0, 0, 1)",
                  "fitContent": "yes",
                  "align": "center",
                  "valign": "middle",
                  "padding": "0,0,0,0"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}