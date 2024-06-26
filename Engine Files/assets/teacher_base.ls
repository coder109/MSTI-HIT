{
  "_$ver": 1,
  "_$id": "6uhbkvb0",
  "_$runtime": "res://76fc6316-af3d-4c52-bbf2-b6750c91d9d9",
  "_$type": "Scene",
  "left": 0,
  "right": 0,
  "top": 0,
  "bottom": 0,
  "name": "Scene2D",
  "autoDestroyAtClosed": true,
  "_$child": [
    {
      "_$id": "aiccpepn",
      "_$type": "Image",
      "name": "Image",
      "width": 1920,
      "height": 1080,
      "centerX": 0,
      "skin": "res://37da97e9-2873-4d2a-9220-5478e048949a",
      "color": "#ffffff"
    },
    {
      "_$id": "n1ptst3b",
      "_$type": "Image",
      "name": "Image(1)",
      "width": 1920,
      "height": 1080,
      "skin": "res://37da97e9-2873-4d2a-9220-5478e048949a",
      "color": "#ffffff"
    },
    {
      "_$id": "19dmpvtw",
      "_$type": "Box",
      "name": "Box",
      "x": 22,
      "y": 30,
      "width": 583,
      "height": 281,
      "left": 22,
      "top": 30,
      "_$child": [
        {
          "_$id": "5wsjwziq",
          "_$var": true,
          "_$type": "Image",
          "name": "Iphoto",
          "x": 7,
          "y": 4,
          "width": 189,
          "height": 208,
          "centerX": -190,
          "centerY": -33,
          "skin": "res://efcc754e-fe7d-4dee-918b-60c77cf1b0d3",
          "color": "#ffffff"
        },
        {
          "_$id": "5x9hqgfv",
          "_$var": true,
          "_$type": "Label",
          "name": "Lname",
          "x": 235,
          "y": 120,
          "width": 76,
          "height": 31,
          "centerX": -19,
          "centerY": -5,
          "text": "Label",
          "font": "SourceHanSansSC-Regular",
          "fontSize": 30,
          "color": "rgba(112, 124, 116, 1)",
          "fitContent": "yes",
          "valign": "top",
          "padding": "0,0,0,0",
          "_$child": [
            {
              "_$id": "cdvyxngw",
              "_$var": true,
              "_$type": "Label",
              "name": "Lbelong",
              "x": 152,
              "y": 40,
              "width": 76,
              "height": 31,
              "_mouseState": 2,
              "centerX": 152,
              "centerY": 40,
              "text": "Label",
              "font": "SourceHanSansSC-Regular",
              "fontSize": 30,
              "color": "rgba(112, 124, 116, 1)",
              "fitContent": "yes",
              "valign": "top",
              "padding": "0,0,0,0"
            }
          ]
        }
      ]
    },
    {
      "_$id": "wj3c5dnq",
      "_$var": true,
      "_$type": "Button",
      "name": "Bgoback",
      "x": 1752,
      "y": 1012,
      "width": 120,
      "height": 47,
      "_mouseState": 2,
      "centerX": 852,
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
    },
    {
      "_$id": "qwpuikdw",
      "_$type": "HBox",
      "name": "HBox",
      "x": 172,
      "y": 246,
      "width": 1549,
      "height": 91,
      "_mouseState": 2,
      "centerX": -14,
      "space": 0,
      "align": "middle",
      "_$child": [
        {
          "_$id": "zqlt8wt4",
          "_$var": true,
          "_$type": "Button",
          "name": "Bselect1",
          "y": 1.5,
          "width": 387,
          "height": 88,
          "_mouseState": 2,
          "toggle": true,
          "skin": "res://6fcdc48a-6b55-4a36-bf1f-f6f59908bcdb",
          "label": "基本信息",
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
          "_$id": "dg6uv01i",
          "_$var": true,
          "_$type": "Button",
          "name": "Bselect2",
          "x": 387,
          "y": 1.5,
          "width": 387,
          "height": 88,
          "_mouseState": 2,
          "toggle": true,
          "skin": "res://6fcdc48a-6b55-4a36-bf1f-f6f59908bcdb",
          "label": "日程安排",
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
          "_$id": "vqv9wqzp",
          "_$var": true,
          "_$type": "Button",
          "name": "Bselect3",
          "x": 774,
          "y": 1.5,
          "width": 387,
          "height": 88,
          "_mouseState": 2,
          "toggle": true,
          "skin": "res://6fcdc48a-6b55-4a36-bf1f-f6f59908bcdb",
          "label": "研究成果",
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
          "_$id": "0q33qx2x",
          "_$var": true,
          "_$type": "Button",
          "name": "Bselect4",
          "x": 1161,
          "y": 1.5,
          "width": 387,
          "height": 88,
          "_mouseState": 2,
          "toggle": true,
          "skin": "res://6fcdc48a-6b55-4a36-bf1f-f6f59908bcdb",
          "label": "招生信息",
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
        }
      ]
    },
    {
      "_$id": "d8wtghww",
      "_$var": true,
      "_$type": "ViewStack",
      "name": "ViewStack",
      "x": 174,
      "y": 317,
      "width": 1517,
      "height": 749,
      "_mouseState": 2,
      "centerX": -28,
      "selectedIndex": 0,
      "_$child": [
        {
          "_$id": "fz0aj047",
          "_$type": "Box",
          "name": "item0",
          "x": 2.842170943040401e-14,
          "y": 22.00000000000003,
          "width": 1510,
          "height": 718,
          "_mouseState": 2,
          "bgColor": "rgba(255, 255, 255, 1)",
          "_$child": [
            {
              "_$id": "iyr40cc2",
              "_$type": "Panel",
              "name": "Panel",
              "x": 1.9999999999999716,
              "y": -1.0000000000000284,
              "width": 1543,
              "height": 720,
              "_mouseState": 2,
              "scrollType": 2,
              "vScrollBarSkin": "res://fc3bb457-8d97-4456-b6b6-304c6b064689",
              "_$child": [
                {
                  "_$id": "8siw9vhg",
                  "_$type": "VBox",
                  "name": "VBox",
                  "x": -5.684341886080802e-14,
                  "width": 1510,
                  "height": 720,
                  "_mouseState": 2,
                  "space": 0,
                  "_$comp": [
                    {
                      "_$type": "af05e6e7-b10d-4573-a6c4-633ce3df9ccc",
                      "scriptPath": "../src/Vbox.ts",
                      "belong": "base_msg"
                    }
                  ],
                  "_$child": [
                    {
                      "_$id": "bczu80ff",
                      "_$type": "HBox",
                      "name": "HBox1",
                      "x": 5,
                      "width": 1461,
                      "height": 82,
                      "_mouseState": 2,
                      "space": 35,
                      "align": "middle",
                      "_$child": [
                        {
                          "_$id": "s7oqft2h",
                          "_$type": "Label",
                          "name": "Label",
                          "y": 23,
                          "width": 210,
                          "height": 36,
                          "centerY": 0,
                          "text": "个人信息简介",
                          "font": "SourceHanSansSC-Regular",
                          "fontSize": 35,
                          "color": "rgba(0, 0, 0, 1)",
                          "fitContent": "yes",
                          "underline": true,
                          "align": "center",
                          "valign": "middle",
                          "padding": "0,0,0,0"
                        },
                        {
                          "_$id": "yrymobw1",
                          "_$var": true,
                          "_$type": "Button",
                          "name": "Bchange",
                          "x": 245,
                          "y": 19.5,
                          "width": 118,
                          "height": 43,
                          "_mouseState": 2,
                          "skin": "res://60fe1a11-1ffa-4f21-b1d4-b23a969e2701",
                          "label": "修改",
                          "labelFont": "SourceHanSansSC-Regular",
                          "labelSize": 25,
                          "labelColors": "#ffffff,#ffffff,#ffffff",
                          "labelAlign": "center",
                          "labelVAlign": "middle",
                          "_$comp": [
                            {
                              "_$type": "1d54b4a4-58a4-4b16-bbcc-4ed63f2c39fc",
                              "scriptPath": "../src/Bchange.ts",
                              "belong": "base_msg-A"
                            }
                          ]
                        },
                        {
                          "_$id": "tmk5k1zn",
                          "_$var": true,
                          "_$type": "Label",
                          "name": "LTupdate",
                          "x": 1196,
                          "y": 8,
                          "width": 176,
                          "height": 23,
                          "right": 89,
                          "top": 8,
                          "text": "最后一次更新时间",
                          "font": "SourceHanSansSC-Regular",
                          "fontSize": 22,
                          "color": "rgba(112, 124, 116, 1)",
                          "fitContent": "yes",
                          "valign": "top",
                          "padding": "0,0,0,0",
                          "_$comp": [
                            {
                              "_$type": "98712070-2424-4244-a95f-38d81e79401a",
                              "scriptPath": "../src/update_self.ts",
                              "belong_text": "base_msg-time"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "_$id": "81ci4xvz",
                      "_$var": true,
                      "_$type": "Label",
                      "name": "Lintro",
                      "x": 3.000000000000142,
                      "y": 82,
                      "width": 1425,
                      "height": 29,
                      "text": "Label1",
                      "font": "SourceHanSansSC-Regular",
                      "fontSize": 28,
                      "color": "rgba(112, 124, 116, 1)",
                      "fitContent": "height",
                      "html": true,
                      "valign": "top",
                      "wordWrap": true,
                      "padding": "0,0,0,0",
                      "_$comp": [
                        {
                          "_$type": "98712070-2424-4244-a95f-38d81e79401a",
                          "scriptPath": "../src/update_self.ts",
                          "belong_text": "base_msg-A"
                        }
                      ]
                    },
                    {
                      "_$id": "f203aq32",
                      "_$type": "HBox",
                      "name": "HBox2",
                      "x": 5,
                      "y": 111,
                      "width": 1010,
                      "height": 82,
                      "_mouseState": 2,
                      "space": 35,
                      "align": "middle",
                      "_$child": [
                        {
                          "_$id": "nr9tdlqc",
                          "_$type": "Label",
                          "name": "Label",
                          "y": 23,
                          "width": 245,
                          "height": 36,
                          "centerY": 0,
                          "text": "个人荣誉及任职",
                          "font": "SourceHanSansSC-Regular",
                          "fontSize": 35,
                          "color": "rgba(0, 0, 0, 1)",
                          "fitContent": "yes",
                          "underline": true,
                          "align": "center",
                          "valign": "middle",
                          "padding": "0,0,0,0"
                        },
                        {
                          "_$id": "llpp0sd0",
                          "_$var": true,
                          "_$type": "Button",
                          "name": "Bchange",
                          "x": 280,
                          "y": 19.5,
                          "width": 118,
                          "height": 43,
                          "_mouseState": 2,
                          "skin": "res://60fe1a11-1ffa-4f21-b1d4-b23a969e2701",
                          "label": "修改",
                          "labelFont": "SourceHanSansSC-Regular",
                          "labelSize": 25,
                          "labelColors": "#ffffff,#ffffff,#ffffff",
                          "labelAlign": "center",
                          "labelVAlign": "middle",
                          "_$comp": [
                            {
                              "_$type": "1d54b4a4-58a4-4b16-bbcc-4ed63f2c39fc",
                              "scriptPath": "../src/Bchange.ts",
                              "belong": "base_msg-B"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "_$id": "cxfqpy72",
                      "_$var": true,
                      "_$type": "Label",
                      "name": "Lhonor",
                      "x": 3,
                      "y": 193,
                      "width": 1425,
                      "height": 29,
                      "text": "Label1",
                      "font": "SourceHanSansSC-Regular",
                      "fontSize": 28,
                      "color": "rgba(112, 124, 116, 1)",
                      "fitContent": "height",
                      "html": true,
                      "valign": "top",
                      "wordWrap": true,
                      "padding": "0,0,0,0",
                      "_$comp": [
                        {
                          "_$type": "98712070-2424-4244-a95f-38d81e79401a",
                          "scriptPath": "../src/update_self.ts",
                          "belong_text": "base_msg-B"
                        }
                      ]
                    },
                    {
                      "_$id": "z8d0mv21",
                      "_$type": "HBox",
                      "name": "HBox3",
                      "x": 5,
                      "y": 222,
                      "width": 1010,
                      "height": 82,
                      "_mouseState": 2,
                      "space": 35,
                      "align": "middle",
                      "_$child": [
                        {
                          "_$id": "ucdsl9wg",
                          "_$type": "Label",
                          "name": "Label",
                          "y": 23,
                          "width": 210,
                          "height": 36,
                          "centerY": 0,
                          "text": "教育工作经历",
                          "font": "SourceHanSansSC-Regular",
                          "fontSize": 35,
                          "color": "rgba(0, 0, 0, 1)",
                          "fitContent": "yes",
                          "underline": true,
                          "align": "center",
                          "valign": "middle",
                          "padding": "0,0,0,0"
                        },
                        {
                          "_$id": "7d806peh",
                          "_$var": true,
                          "_$type": "Button",
                          "name": "Bchange",
                          "x": 245,
                          "y": 19.5,
                          "width": 118,
                          "height": 43,
                          "_mouseState": 2,
                          "skin": "res://60fe1a11-1ffa-4f21-b1d4-b23a969e2701",
                          "label": "修改",
                          "labelFont": "SourceHanSansSC-Regular",
                          "labelSize": 25,
                          "labelColors": "#ffffff,#ffffff,#ffffff",
                          "labelAlign": "center",
                          "labelVAlign": "middle",
                          "_$comp": [
                            {
                              "_$type": "1d54b4a4-58a4-4b16-bbcc-4ed63f2c39fc",
                              "scriptPath": "../src/Bchange.ts",
                              "belong": "base_msg-C"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "_$id": "bf6mhano",
                      "_$var": true,
                      "_$type": "Label",
                      "name": "Ledu",
                      "x": 4.0000000000001705,
                      "y": 304,
                      "width": 1425,
                      "height": 29,
                      "text": "Label1",
                      "font": "SourceHanSansSC-Regular",
                      "fontSize": 28,
                      "color": "rgba(112, 124, 116, 1)",
                      "fitContent": "height",
                      "html": true,
                      "valign": "top",
                      "wordWrap": true,
                      "padding": "0,0,0,0",
                      "_$comp": [
                        {
                          "_$type": "98712070-2424-4244-a95f-38d81e79401a",
                          "scriptPath": "../src/update_self.ts",
                          "belong_text": "base_msg-C"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "_$id": "ckcngxin",
          "_$type": "Box",
          "name": "item1",
          "y": 22,
          "width": 1510,
          "height": 718,
          "visible": false,
          "_mouseState": 2,
          "bgColor": "rgba(255, 255, 255, 1)",
          "_$child": [
            {
              "_$id": "e09edfmz",
              "_$type": "Panel",
              "name": "Panel",
              "x": 2,
              "y": -1,
              "width": 1544,
              "height": 720,
              "_mouseState": 2,
              "scrollType": 2,
              "vScrollBarSkin": "res://fc3bb457-8d97-4456-b6b6-304c6b064689",
              "_$child": [
                {
                  "_$id": "u7z1qkhf",
                  "_$type": "VBox",
                  "name": "VBox",
                  "x": -5.684341886080802e-14,
                  "width": 1510,
                  "height": 720,
                  "_mouseState": 2,
                  "space": 0,
                  "_$comp": [
                    {
                      "_$type": "af05e6e7-b10d-4573-a6c4-633ce3df9ccc",
                      "scriptPath": "../src/Vbox.ts",
                      "belong": "date_msg"
                    }
                  ],
                  "_$child": [
                    {
                      "_$id": "gf8xca4h",
                      "_$type": "HBox",
                      "name": "HBox1",
                      "x": 4.999999999999972,
                      "width": 1461,
                      "height": 82,
                      "_mouseState": 2,
                      "space": 35,
                      "align": "middle",
                      "_$child": [
                        {
                          "_$id": "5z5go6w6",
                          "_$type": "Label",
                          "name": "Label",
                          "y": 23,
                          "width": 245,
                          "height": 36,
                          "centerY": 0,
                          "text": "第一周日程安排",
                          "font": "SourceHanSansSC-Regular",
                          "fontSize": 35,
                          "color": "rgba(0, 0, 0, 1)",
                          "fitContent": "yes",
                          "underline": true,
                          "align": "center",
                          "valign": "middle",
                          "padding": "0,0,0,0"
                        },
                        {
                          "_$id": "k2vwbxda",
                          "_$var": true,
                          "_$type": "Button",
                          "name": "Bchange",
                          "x": 280,
                          "y": 19.5,
                          "width": 118,
                          "height": 43,
                          "_mouseState": 2,
                          "skin": "res://60fe1a11-1ffa-4f21-b1d4-b23a969e2701",
                          "label": "修改",
                          "labelFont": "SourceHanSansSC-Regular",
                          "labelSize": 25,
                          "labelColors": "#ffffff,#ffffff,#ffffff",
                          "labelAlign": "center",
                          "labelVAlign": "middle",
                          "_$comp": [
                            {
                              "_$type": "1d54b4a4-58a4-4b16-bbcc-4ed63f2c39fc",
                              "scriptPath": "../src/Bchange.ts",
                              "belong": "date_msg-A"
                            }
                          ]
                        },
                        {
                          "_$id": "7lqxcsf7",
                          "_$var": true,
                          "_$type": "Label",
                          "name": "Ldateupdate",
                          "x": 1196,
                          "y": 8,
                          "width": 176,
                          "height": 23,
                          "right": 89,
                          "top": 8,
                          "text": "最后一次更新时间",
                          "font": "SourceHanSansSC-Regular",
                          "fontSize": 22,
                          "color": "rgba(112, 124, 116, 1)",
                          "fitContent": "yes",
                          "valign": "top",
                          "padding": "0,0,0,0",
                          "_$comp": [
                            {
                              "_$type": "98712070-2424-4244-a95f-38d81e79401a",
                              "scriptPath": "../src/update_self.ts",
                              "belong_text": "date_msg-time"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "_$id": "57mimi9l",
                      "_$var": true,
                      "_$type": "Label",
                      "name": "Ldate1",
                      "x": 3.000000000000142,
                      "y": 82,
                      "width": 1425,
                      "height": 29,
                      "text": "Label1",
                      "font": "SourceHanSansSC-Regular",
                      "fontSize": 28,
                      "color": "rgba(112, 124, 116, 1)",
                      "fitContent": "height",
                      "html": true,
                      "valign": "top",
                      "wordWrap": true,
                      "padding": "0,0,0,0",
                      "_$comp": [
                        {
                          "_$type": "98712070-2424-4244-a95f-38d81e79401a",
                          "scriptPath": "../src/update_self.ts",
                          "belong_text": "date_msg-A"
                        }
                      ]
                    },
                    {
                      "_$id": "nmnya1g6",
                      "_$type": "HBox",
                      "name": "HBox2",
                      "x": 5,
                      "y": 111,
                      "width": 1010,
                      "height": 82,
                      "_mouseState": 2,
                      "space": 35,
                      "align": "middle",
                      "_$child": [
                        {
                          "_$id": "3b032ibi",
                          "_$type": "Label",
                          "name": "Label",
                          "y": 23,
                          "width": 245,
                          "height": 36,
                          "centerY": 0,
                          "text": "第二周日程安排",
                          "font": "SourceHanSansSC-Regular",
                          "fontSize": 35,
                          "color": "rgba(0, 0, 0, 1)",
                          "fitContent": "yes",
                          "underline": true,
                          "align": "center",
                          "valign": "middle",
                          "padding": "0,0,0,0"
                        },
                        {
                          "_$id": "7ul2wbbg",
                          "_$var": true,
                          "_$type": "Button",
                          "name": "Bchange",
                          "x": 280,
                          "y": 19.5,
                          "width": 118,
                          "height": 43,
                          "_mouseState": 2,
                          "skin": "res://60fe1a11-1ffa-4f21-b1d4-b23a969e2701",
                          "label": "修改",
                          "labelFont": "SourceHanSansSC-Regular",
                          "labelSize": 25,
                          "labelColors": "#ffffff,#ffffff,#ffffff",
                          "labelAlign": "center",
                          "labelVAlign": "middle",
                          "_$comp": [
                            {
                              "_$type": "1d54b4a4-58a4-4b16-bbcc-4ed63f2c39fc",
                              "scriptPath": "../src/Bchange.ts",
                              "belong": "date_msg-B"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "_$id": "gfi09l80",
                      "_$var": true,
                      "_$type": "Label",
                      "name": "Ldate2",
                      "x": 3,
                      "y": 193,
                      "width": 1425,
                      "height": 29,
                      "text": "Label1",
                      "font": "SourceHanSansSC-Regular",
                      "fontSize": 28,
                      "color": "rgba(112, 124, 116, 1)",
                      "fitContent": "height",
                      "html": true,
                      "valign": "top",
                      "wordWrap": true,
                      "padding": "0,0,0,0",
                      "_$comp": [
                        {
                          "_$type": "98712070-2424-4244-a95f-38d81e79401a",
                          "scriptPath": "../src/update_self.ts",
                          "belong_text": "date_msg-B"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "_$id": "5lkw3nj4",
          "_$type": "Box",
          "name": "item2",
          "y": 22,
          "width": 1510,
          "height": 718,
          "visible": false,
          "_mouseState": 2,
          "bgColor": "rgba(255, 255, 255, 1)",
          "_$child": [
            {
              "_$id": "4fqgri2a",
              "_$type": "Panel",
              "name": "Panel",
              "x": 2,
              "y": -1,
              "width": 1544,
              "height": 720,
              "_mouseState": 2,
              "scrollType": 2,
              "vScrollBarSkin": "res://fc3bb457-8d97-4456-b6b6-304c6b064689",
              "_$child": [
                {
                  "_$id": "pi8qkurj",
                  "_$type": "VBox",
                  "name": "VBox",
                  "x": -5.684341886080802e-14,
                  "width": 1510,
                  "height": 720,
                  "_mouseState": 2,
                  "space": 0,
                  "_$comp": [
                    {
                      "_$type": "af05e6e7-b10d-4573-a6c4-633ce3df9ccc",
                      "scriptPath": "../src/Vbox.ts",
                      "belong": "sci_msg"
                    }
                  ],
                  "_$child": [
                    {
                      "_$id": "847bxlbi",
                      "_$type": "HBox",
                      "name": "HBox1",
                      "x": 5,
                      "width": 1461,
                      "height": 82,
                      "_mouseState": 2,
                      "space": 35,
                      "align": "middle",
                      "_$child": [
                        {
                          "_$id": "r4kkesoz",
                          "_$type": "Label",
                          "name": "Label",
                          "y": 23,
                          "width": 161,
                          "height": 36,
                          "centerY": 0,
                          "text": "研究方向1",
                          "font": "SourceHanSansSC-Regular",
                          "fontSize": 35,
                          "color": "rgba(0, 0, 0, 1)",
                          "fitContent": "yes",
                          "underline": true,
                          "align": "center",
                          "valign": "middle",
                          "padding": "0,0,0,0"
                        },
                        {
                          "_$id": "0aodqx24",
                          "_$var": true,
                          "_$type": "Button",
                          "name": "Bchange",
                          "x": 196,
                          "y": 19.5,
                          "width": 118,
                          "height": 43,
                          "_mouseState": 2,
                          "skin": "res://60fe1a11-1ffa-4f21-b1d4-b23a969e2701",
                          "label": "修改",
                          "labelFont": "SourceHanSansSC-Regular",
                          "labelSize": 25,
                          "labelColors": "#ffffff,#ffffff,#ffffff",
                          "labelAlign": "center",
                          "labelVAlign": "middle",
                          "_$comp": [
                            {
                              "_$type": "1d54b4a4-58a4-4b16-bbcc-4ed63f2c39fc",
                              "scriptPath": "../src/Bchange.ts",
                              "belong": "sci_msg-A"
                            }
                          ]
                        },
                        {
                          "_$id": "2sa9n779",
                          "_$var": true,
                          "_$type": "Label",
                          "name": "Lsciupdate",
                          "x": 1196,
                          "y": 8,
                          "width": 176,
                          "height": 23,
                          "right": 89,
                          "top": 8,
                          "text": "最后一次更新时间",
                          "font": "SourceHanSansSC-Regular",
                          "fontSize": 22,
                          "color": "rgba(112, 124, 116, 1)",
                          "fitContent": "yes",
                          "valign": "top",
                          "padding": "0,0,0,0",
                          "_$comp": [
                            {
                              "_$type": "98712070-2424-4244-a95f-38d81e79401a",
                              "scriptPath": "../src/update_self.ts",
                              "belong_text": "sci_msg-time"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "_$id": "md1b3xij",
                      "_$var": true,
                      "_$type": "Label",
                      "name": "Lsci1",
                      "x": 3.000000000000142,
                      "y": 82,
                      "width": 1425,
                      "height": 29,
                      "text": "Label1",
                      "font": "SourceHanSansSC-Regular",
                      "fontSize": 28,
                      "color": "rgba(112, 124, 116, 1)",
                      "fitContent": "height",
                      "html": true,
                      "valign": "top",
                      "wordWrap": true,
                      "padding": "0,0,0,0",
                      "_$comp": [
                        {
                          "_$type": "98712070-2424-4244-a95f-38d81e79401a",
                          "scriptPath": "../src/update_self.ts",
                          "belong_text": "sci_msg-A"
                        }
                      ]
                    },
                    {
                      "_$id": "1yxnjyok",
                      "_$type": "HBox",
                      "name": "HBox2",
                      "x": 5,
                      "y": 111,
                      "width": 1010,
                      "height": 82,
                      "_mouseState": 2,
                      "space": 35,
                      "align": "middle",
                      "_$child": [
                        {
                          "_$id": "eey44is9",
                          "_$type": "Label",
                          "name": "Label",
                          "y": 23,
                          "width": 161,
                          "height": 36,
                          "centerY": 0,
                          "text": "研究方向2",
                          "font": "SourceHanSansSC-Regular",
                          "fontSize": 35,
                          "color": "rgba(0, 0, 0, 1)",
                          "fitContent": "yes",
                          "underline": true,
                          "align": "center",
                          "valign": "middle",
                          "padding": "0,0,0,0"
                        },
                        {
                          "_$id": "s4icpf5r",
                          "_$var": true,
                          "_$type": "Button",
                          "name": "Bchange",
                          "x": 196,
                          "y": 19.5,
                          "width": 118,
                          "height": 43,
                          "_mouseState": 2,
                          "skin": "res://60fe1a11-1ffa-4f21-b1d4-b23a969e2701",
                          "label": "修改",
                          "labelFont": "SourceHanSansSC-Regular",
                          "labelSize": 25,
                          "labelColors": "#ffffff,#ffffff,#ffffff",
                          "labelAlign": "center",
                          "labelVAlign": "middle",
                          "_$comp": [
                            {
                              "_$type": "1d54b4a4-58a4-4b16-bbcc-4ed63f2c39fc",
                              "scriptPath": "../src/Bchange.ts",
                              "belong": "sci_msg-B"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "_$id": "673c3w06",
                      "_$var": true,
                      "_$type": "Label",
                      "name": "Lsci2",
                      "x": 3,
                      "y": 193,
                      "width": 1425,
                      "height": 29,
                      "text": "Label1",
                      "font": "SourceHanSansSC-Regular",
                      "fontSize": 28,
                      "color": "rgba(112, 124, 116, 1)",
                      "fitContent": "height",
                      "html": true,
                      "valign": "top",
                      "wordWrap": true,
                      "padding": "0,0,0,0",
                      "_$comp": [
                        {
                          "_$type": "98712070-2424-4244-a95f-38d81e79401a",
                          "scriptPath": "../src/update_self.ts",
                          "belong_text": "sci_msg-B"
                        }
                      ]
                    },
                    {
                      "_$id": "b7vc12nx",
                      "_$type": "HBox",
                      "name": "HBox3",
                      "x": 5,
                      "y": 222,
                      "width": 1010,
                      "height": 82,
                      "_mouseState": 2,
                      "space": 35,
                      "align": "middle",
                      "_$child": [
                        {
                          "_$id": "j2vs3qmp",
                          "_$type": "Label",
                          "name": "Label",
                          "y": 23,
                          "width": 161,
                          "height": 36,
                          "centerY": 0,
                          "text": "研究方向3",
                          "font": "SourceHanSansSC-Regular",
                          "fontSize": 35,
                          "color": "rgba(0, 0, 0, 1)",
                          "fitContent": "yes",
                          "underline": true,
                          "align": "center",
                          "valign": "top",
                          "padding": "0,0,0,0"
                        },
                        {
                          "_$id": "sqmwiq65",
                          "_$var": true,
                          "_$type": "Button",
                          "name": "Bchange",
                          "x": 196,
                          "y": 19.5,
                          "width": 118,
                          "height": 43,
                          "_mouseState": 2,
                          "skin": "res://60fe1a11-1ffa-4f21-b1d4-b23a969e2701",
                          "label": "修改",
                          "labelFont": "SourceHanSansSC-Regular",
                          "labelSize": 25,
                          "labelColors": "#ffffff,#ffffff,#ffffff",
                          "labelAlign": "center",
                          "labelVAlign": "middle",
                          "_$comp": [
                            {
                              "_$type": "1d54b4a4-58a4-4b16-bbcc-4ed63f2c39fc",
                              "scriptPath": "../src/Bchange.ts",
                              "belong": "sci_msg-C"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "_$id": "twdfsz3v",
                      "_$var": true,
                      "_$type": "Label",
                      "name": "Lsci3",
                      "x": 4.0000000000001705,
                      "y": 304,
                      "width": 1425,
                      "height": 29,
                      "text": "Label1",
                      "font": "SourceHanSansSC-Regular",
                      "fontSize": 28,
                      "color": "rgba(112, 124, 116, 1)",
                      "fitContent": "height",
                      "html": true,
                      "valign": "top",
                      "wordWrap": true,
                      "padding": "0,0,0,0",
                      "_$comp": [
                        {
                          "_$type": "98712070-2424-4244-a95f-38d81e79401a",
                          "scriptPath": "../src/update_self.ts",
                          "belong_text": "sci_msg-C"
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "_$id": "j25139k5",
          "_$type": "Box",
          "name": "item3",
          "y": 22,
          "width": 1510,
          "height": 718,
          "visible": false,
          "_mouseState": 2,
          "bgColor": "rgba(255, 255, 255, 1)",
          "_$child": [
            {
              "_$id": "sv198rdl",
              "_$type": "Panel",
              "name": "Panel",
              "x": 2,
              "y": -1,
              "width": 1544,
              "height": 720,
              "_mouseState": 2,
              "scrollType": 2,
              "vScrollBarSkin": "res://fc3bb457-8d97-4456-b6b6-304c6b064689",
              "_$child": [
                {
                  "_$id": "ubw0i1x8",
                  "_$type": "VBox",
                  "name": "VBox",
                  "x": -5.684341886080802e-14,
                  "width": 1510,
                  "height": 720,
                  "_mouseState": 2,
                  "space": 0,
                  "_$comp": [
                    {
                      "_$type": "af05e6e7-b10d-4573-a6c4-633ce3df9ccc",
                      "scriptPath": "../src/Vbox.ts",
                      "belong": "enroll_msg"
                    }
                  ],
                  "_$child": [
                    {
                      "_$id": "tt0mdru5",
                      "_$type": "HBox",
                      "name": "HBox1",
                      "x": 5,
                      "width": 1461,
                      "height": 82,
                      "_mouseState": 2,
                      "space": 35,
                      "align": "middle",
                      "_$child": [
                        {
                          "_$id": "dkhrk32x",
                          "_$type": "Label",
                          "name": "Label",
                          "y": 23,
                          "width": 140,
                          "height": 36,
                          "centerY": 0,
                          "text": "招生要求",
                          "font": "SourceHanSansSC-Regular",
                          "fontSize": 35,
                          "color": "rgba(0, 0, 0, 1)",
                          "fitContent": "yes",
                          "underline": true,
                          "align": "center",
                          "valign": "middle",
                          "padding": "0,0,0,0"
                        },
                        {
                          "_$id": "09r7pikc",
                          "_$var": true,
                          "_$type": "Button",
                          "name": "Bchange",
                          "x": 175,
                          "y": 19.5,
                          "width": 118,
                          "height": 43,
                          "_mouseState": 2,
                          "skin": "res://60fe1a11-1ffa-4f21-b1d4-b23a969e2701",
                          "label": "修改",
                          "labelFont": "SourceHanSansSC-Regular",
                          "labelSize": 25,
                          "labelColors": "#ffffff,#ffffff,#ffffff",
                          "labelAlign": "center",
                          "labelVAlign": "middle",
                          "_$comp": [
                            {
                              "_$type": "1d54b4a4-58a4-4b16-bbcc-4ed63f2c39fc",
                              "scriptPath": "../src/Bchange.ts",
                              "belong": "enroll_msg-A"
                            }
                          ]
                        },
                        {
                          "_$id": "yfwl0zdc",
                          "_$var": true,
                          "_$type": "Label",
                          "name": "Lenrollupdate",
                          "x": 1196,
                          "y": 8,
                          "width": 176,
                          "height": 23,
                          "right": 89,
                          "top": 8,
                          "text": "最后一次更新时间",
                          "font": "SourceHanSansSC-Regular",
                          "fontSize": 22,
                          "color": "rgba(112, 124, 116, 1)",
                          "fitContent": "yes",
                          "valign": "top",
                          "padding": "0,0,0,0",
                          "_$comp": [
                            {
                              "_$type": "98712070-2424-4244-a95f-38d81e79401a",
                              "scriptPath": "../src/update_self.ts",
                              "belong_text": "enroll_msg-time"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "_$id": "e5x96gre",
                      "_$var": true,
                      "_$type": "Label",
                      "name": "Lenroll1",
                      "x": 3.000000000000142,
                      "y": 82,
                      "width": 1425,
                      "height": 29,
                      "text": "Label1",
                      "font": "SourceHanSansSC-Regular",
                      "fontSize": 28,
                      "color": "rgba(112, 124, 116, 1)",
                      "fitContent": "height",
                      "html": true,
                      "valign": "top",
                      "wordWrap": true,
                      "padding": "0,0,0,0",
                      "_$comp": [
                        {
                          "_$type": "98712070-2424-4244-a95f-38d81e79401a",
                          "scriptPath": "../src/update_self.ts",
                          "belong_text": "enroll_msg-A"
                        }
                      ]
                    },
                    {
                      "_$id": "uhs2d1dn",
                      "_$type": "HBox",
                      "name": "HBox2",
                      "x": 5,
                      "y": 111,
                      "width": 1010,
                      "height": 82,
                      "_mouseState": 2,
                      "space": 35,
                      "align": "middle",
                      "_$child": [
                        {
                          "_$id": "q9ajexb2",
                          "_$type": "Label",
                          "name": "Label",
                          "y": 23,
                          "width": 140,
                          "height": 36,
                          "centerY": 0,
                          "text": "招生计划",
                          "font": "SourceHanSansSC-Regular",
                          "fontSize": 35,
                          "color": "rgba(0, 0, 0, 1)",
                          "fitContent": "yes",
                          "underline": true,
                          "align": "center",
                          "valign": "middle",
                          "padding": "0,0,0,0"
                        },
                        {
                          "_$id": "6hx1l9te",
                          "_$var": true,
                          "_$type": "Button",
                          "name": "Bchange",
                          "x": 175,
                          "y": 19.5,
                          "width": 118,
                          "height": 43,
                          "_mouseState": 2,
                          "skin": "res://60fe1a11-1ffa-4f21-b1d4-b23a969e2701",
                          "label": "修改",
                          "labelFont": "SourceHanSansSC-Regular",
                          "labelSize": 25,
                          "labelColors": "#ffffff,#ffffff,#ffffff",
                          "labelAlign": "center",
                          "labelVAlign": "middle",
                          "_$comp": [
                            {
                              "_$type": "1d54b4a4-58a4-4b16-bbcc-4ed63f2c39fc",
                              "scriptPath": "../src/Bchange.ts",
                              "belong": "enroll_msg-B"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "_$id": "qd2i1cjo",
                      "_$var": true,
                      "_$type": "Label",
                      "name": "Lenroll2",
                      "x": 3,
                      "y": 193,
                      "width": 1425,
                      "height": 29,
                      "text": "Label1",
                      "font": "SourceHanSansSC-Regular",
                      "fontSize": 28,
                      "color": "rgba(112, 124, 116, 1)",
                      "fitContent": "height",
                      "html": true,
                      "valign": "top",
                      "wordWrap": true,
                      "padding": "0,0,0,0",
                      "_$comp": [
                        {
                          "_$type": "98712070-2424-4244-a95f-38d81e79401a",
                          "scriptPath": "../src/update_self.ts",
                          "belong_text": "enroll_msg-B"
                        }
                      ]
                    },
                    {
                      "_$id": "vvpi8jmd",
                      "_$type": "HBox",
                      "name": "HBox3",
                      "x": 5,
                      "y": 222,
                      "width": 1010,
                      "height": 82,
                      "_mouseState": 2,
                      "space": 35,
                      "align": "middle",
                      "_$child": [
                        {
                          "_$id": "q1mucan5",
                          "_$type": "Label",
                          "name": "Label",
                          "y": 23,
                          "width": 140,
                          "height": 36,
                          "centerY": 0,
                          "text": "招生情况",
                          "font": "SourceHanSansSC-Regular",
                          "fontSize": 35,
                          "color": "rgba(0, 0, 0, 1)",
                          "fitContent": "yes",
                          "underline": true,
                          "align": "center",
                          "valign": "top",
                          "padding": "0,0,0,0"
                        },
                        {
                          "_$id": "t7xn4xya",
                          "_$var": true,
                          "_$type": "Button",
                          "name": "Bchange",
                          "x": 175,
                          "y": 19.5,
                          "width": 118,
                          "height": 43,
                          "_mouseState": 2,
                          "skin": "res://60fe1a11-1ffa-4f21-b1d4-b23a969e2701",
                          "label": "修改",
                          "labelFont": "SourceHanSansSC-Regular",
                          "labelSize": 25,
                          "labelColors": "#ffffff,#ffffff,#ffffff",
                          "labelAlign": "center",
                          "labelVAlign": "middle",
                          "_$comp": [
                            {
                              "_$type": "1d54b4a4-58a4-4b16-bbcc-4ed63f2c39fc",
                              "scriptPath": "../src/Bchange.ts",
                              "belong": "enroll_msg-C"
                            }
                          ]
                        }
                      ]
                    },
                    {
                      "_$id": "jhu7rg2z",
                      "_$var": true,
                      "_$type": "Label",
                      "name": "Lenroll3",
                      "x": 4.0000000000001705,
                      "y": 304,
                      "width": 1425,
                      "height": 29,
                      "text": "Label1",
                      "font": "SourceHanSansSC-Regular",
                      "fontSize": 28,
                      "color": "rgba(112, 124, 116, 1)",
                      "fitContent": "height",
                      "html": true,
                      "valign": "top",
                      "wordWrap": true,
                      "padding": "0,0,0,0",
                      "_$comp": [
                        {
                          "_$type": "98712070-2424-4244-a95f-38d81e79401a",
                          "scriptPath": "../src/update_self.ts",
                          "belong_text": "enroll_msg-C"
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
    },
    {
      "_$id": "tqa8ljdr",
      "_$var": true,
      "_$type": "Button",
      "name": "Bdate",
      "x": 1570,
      "y": 189,
      "width": 147,
      "height": 54,
      "_mouseState": 2,
      "right": 203,
      "skin": "res://92a393b3-d00c-4486-ae48-e233dc5b8c37",
      "label": "预约",
      "labelFont": "SourceHanSansSC-Regular",
      "labelSize": 22,
      "labelColors": "#ffffff,#ffffff,#ffffff",
      "labelAlign": "center",
      "labelVAlign": "middle",
      "_$comp": [
        {
          "_$type": "19f5d462-32f2-4f49-8fc8-389155b2efe7",
          "scriptPath": "../src/Bdate.ts"
        },
        {
          "_$type": "84368dcb-267f-4636-a3d3-a30262f92f3e",
          "scriptPath": "../src/Button_pointer.ts"
        }
      ]
    }
  ]
}