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
      "x": -2,
      "y": -1,
      "width": 1920,
      "height": 1080,
      "centerX": -2,
      "centerY": -1,
      "skin": "res://37da97e9-2873-4d2a-9220-5478e048949a",
      "color": "#ffffff"
    },
    {
      "_$id": "5jaapk5j",
      "_$type": "HBox",
      "name": "HBox",
      "x": 264,
      "y": 133.49999999999994,
      "width": 1372,
      "height": 76,
      "_mouseState": 2,
      "centerX": -10,
      "space": 24,
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
          "x": 840,
          "y": 10,
          "width": 116,
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
          "x": 980,
          "y": 10,
          "width": 116,
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
        },
        {
          "_$id": "mnkkl072",
          "_$var": true,
          "_$type": "ComboBox",
          "name": "selectBox1",
          "x": 1120,
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
    },
    {
      "_$id": "ze79ia65",
      "_$type": "HBox",
      "name": "HBox",
      "x": 183.0000000000001,
      "y": 243.00000000000006,
      "width": 394,
      "height": 50,
      "_mouseState": 2,
      "space": 3,
      "align": "bottom",
      "_$child": [
        {
          "_$id": "ajbawjer",
          "_$type": "Label",
          "name": "Label",
          "y": 22,
          "width": 120,
          "height": 28,
          "text": "教师推荐",
          "font": "SourceHanSansSC-Regular",
          "fontSize": 25,
          "color": "rgba(153, 153, 153, 1)",
          "html": true,
          "valign": "top",
          "padding": "0,0,0,0"
        },
        {
          "_$id": "f26vuatm",
          "_$var": true,
          "_$type": "ComboBox",
          "name": "selectBox2",
          "x": 123,
          "y": 12,
          "width": 189,
          "height": 34,
          "_mouseState": 2,
          "bottom": 4,
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
    },
    {
      "_$id": "4wwbfyyg",
      "_$var": true,
      "_$type": "HBox",
      "name": "HBox1",
      "x": 260,
      "y": 294,
      "width": 1400,
      "height": 341,
      "_mouseState": 1,
      "centerX": 0,
      "space": 138,
      "align": "middle",
      "_$child": [
        {
          "_$id": "jy1yp264",
          "_$type": "Box",
          "name": "Box",
          "y": 15.5,
          "width": 235,
          "height": 310,
          "bgColor": "rgba(255, 255, 255, 1)",
          "_$child": [
            {
              "_$id": "f1skne97",
              "_$var": true,
              "_$type": "Image",
              "name": "Iteacher1",
              "x": 39,
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
                  "_$var": true,
                  "_$type": "Label",
                  "name": "Lteacher1",
                  "x": -32,
                  "y": 175,
                  "width": 221,
                  "height": 21,
                  "top": 175,
                  "centerX": 0,
                  "text": "教师",
                  "font": "MicrosoftYaHei",
                  "fontSize": 20,
                  "color": "rgba(0, 0, 0, 1)",
                  "fitContent": "height",
                  "align": "center",
                  "valign": "middle",
                  "wordWrap": true,
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
          "x": 373,
          "y": 15.5,
          "width": 235,
          "height": 310,
          "bgColor": "rgba(255, 255, 255, 1)",
          "_$child": [
            {
              "_$id": "hgobwyuw",
              "_$var": true,
              "_$type": "Image",
              "name": "Iteacher2",
              "x": 39,
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
                  "_$var": true,
                  "_$type": "Label",
                  "name": "Lteacher2",
                  "x": -32,
                  "y": 175,
                  "width": 221,
                  "height": 21,
                  "top": 175,
                  "centerX": 0,
                  "text": "教师",
                  "font": "MicrosoftYaHei",
                  "fontSize": 20,
                  "color": "rgba(0, 0, 0, 1)",
                  "fitContent": "height",
                  "align": "center",
                  "valign": "middle",
                  "wordWrap": true,
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
          "x": 746,
          "y": 15.5,
          "width": 235,
          "height": 310,
          "bgColor": "rgba(255, 255, 255, 1)",
          "_$child": [
            {
              "_$id": "tx91sif7",
              "_$var": true,
              "_$type": "Image",
              "name": "Iteacher3",
              "x": 39,
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
                  "_$var": true,
                  "_$type": "Label",
                  "name": "Lteacher3",
                  "x": -32,
                  "y": 175,
                  "width": 221,
                  "height": 21,
                  "top": 175,
                  "centerX": 0,
                  "text": "教师",
                  "font": "MicrosoftYaHei",
                  "fontSize": 20,
                  "color": "rgba(0, 0, 0, 1)",
                  "fitContent": "height",
                  "align": "center",
                  "valign": "middle",
                  "wordWrap": true,
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
          "x": 1119,
          "y": 15.5,
          "width": 235,
          "height": 310,
          "bgColor": "rgba(255, 255, 255, 1)",
          "_$child": [
            {
              "_$id": "dkvstqtf",
              "_$var": true,
              "_$type": "Image",
              "name": "Iteacher4",
              "x": 39,
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
                  "_$var": true,
                  "_$type": "Label",
                  "name": "Lteacher4",
                  "x": -32,
                  "y": 175,
                  "width": 221,
                  "height": 21,
                  "top": 175,
                  "centerX": 0,
                  "text": "教师",
                  "font": "MicrosoftYaHei",
                  "fontSize": 20,
                  "color": "rgba(0, 0, 0, 1)",
                  "fitContent": "height",
                  "align": "center",
                  "valign": "middle",
                  "wordWrap": true,
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
      "_$var": true,
      "_$type": "HBox",
      "name": "HBox2",
      "x": 260,
      "y": 676,
      "width": 1400,
      "height": 314,
      "_mouseState": 1,
      "centerX": 0,
      "space": 138,
      "align": "middle",
      "_$child": [
        {
          "_$id": "cob8emzs",
          "_$type": "Box",
          "name": "Box",
          "y": 2,
          "width": 235,
          "height": 310,
          "bgColor": "rgba(255, 255, 255, 1)",
          "_$child": [
            {
              "_$id": "rxpyympo",
              "_$var": true,
              "_$type": "Image",
              "name": "Iteacher5",
              "x": 39,
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
                  "_$var": true,
                  "_$type": "Label",
                  "name": "Lteacher5",
                  "x": -32,
                  "y": 175,
                  "width": 221,
                  "height": 21,
                  "top": 175,
                  "centerX": 0,
                  "text": "教师",
                  "font": "MicrosoftYaHei",
                  "fontSize": 20,
                  "color": "rgba(0, 0, 0, 1)",
                  "fitContent": "height",
                  "align": "center",
                  "valign": "middle",
                  "wordWrap": true,
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
          "x": 373,
          "y": 2,
          "width": 235,
          "height": 310,
          "bgColor": "rgba(255, 255, 255, 1)",
          "_$child": [
            {
              "_$id": "mahozq9b",
              "_$var": true,
              "_$type": "Image",
              "name": "Iteacher6",
              "x": 39,
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
                  "_$var": true,
                  "_$type": "Label",
                  "name": "Lteacher6",
                  "x": -32,
                  "y": 175,
                  "width": 221,
                  "height": 21,
                  "top": 175,
                  "centerX": 0,
                  "text": "教师",
                  "font": "MicrosoftYaHei",
                  "fontSize": 20,
                  "color": "rgba(0, 0, 0, 1)",
                  "fitContent": "height",
                  "align": "center",
                  "valign": "middle",
                  "wordWrap": true,
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
          "x": 746,
          "y": 2,
          "width": 235,
          "height": 310,
          "bgColor": "rgba(255, 255, 255, 1)",
          "_$child": [
            {
              "_$id": "ourlvrt0",
              "_$var": true,
              "_$type": "Image",
              "name": "Iteacher7",
              "x": 39,
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
                  "_$var": true,
                  "_$type": "Label",
                  "name": "Lteacher7",
                  "x": -32,
                  "y": 175,
                  "width": 221,
                  "height": 21,
                  "top": 175,
                  "centerX": 0,
                  "text": "教师",
                  "font": "MicrosoftYaHei",
                  "fontSize": 20,
                  "color": "rgba(0, 0, 0, 1)",
                  "fitContent": "height",
                  "align": "center",
                  "valign": "middle",
                  "wordWrap": true,
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
          "x": 1119,
          "y": 2,
          "width": 235,
          "height": 310,
          "bgColor": "rgba(255, 255, 255, 1)",
          "_$child": [
            {
              "_$id": "smu9pcun",
              "_$var": true,
              "_$type": "Image",
              "name": "Iteacher8",
              "x": 39,
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
                  "_$var": true,
                  "_$type": "Label",
                  "name": "Lteacher8",
                  "x": -32,
                  "y": 175,
                  "width": 221,
                  "height": 21,
                  "top": 175,
                  "centerX": 0,
                  "text": "教师",
                  "font": "MicrosoftYaHei",
                  "fontSize": 20,
                  "color": "rgba(0, 0, 0, 1)",
                  "fitContent": "height",
                  "align": "center",
                  "valign": "middle",
                  "wordWrap": true,
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