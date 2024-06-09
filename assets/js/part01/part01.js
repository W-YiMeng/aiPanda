
  var chart_4eaa364a159c406194abd4e507a4402c = echarts.init(
          document.getElementById('part01'), 'white', {renderer: 'canvas'});
  var option_4eaa364a159c406194abd4e507a4402c = {
    "animation": true,
    "animationThreshold": 2000,
    "animationDuration": 1000,
    "animationEasing": "cubicOut",
    "animationDelay": 0,
    "animationDurationUpdate": 300,
    "animationEasingUpdate": "cubicOut",
    "animationDelayUpdate": 0,
    "aria": {
      "enabled": false
    },
  
    "color": [
        "#94c1b6",
        "#6b969a",
        "#dcc672",
        "#e0ba19",
        "#c69519",
        "#647129",
        "#83962f",
        "#96c02f",
        "#d0d13d",
        "#c5d366",
        "#87c47b",
        "#90af82",
      ],
    "series": [
      {
        "type": "graph",
        "layout": "circular",
        "symbolSize": 10,
        "circular": {
          "rotateLabel": true
        },
        "force": {
          "repulsion": 50,
          "gravity": 0.2,
          "edgeLength": 30,
          "friction": 0.6,
          "layoutAnimation": true
        },
        "label": {
          "show": true,
          "position": "right",
          "color": "black",
          "margin": 8,
          "fontSize": 12
        },
        "lineStyle": {
          "show": true,
          "width": 1,
          "opacity": 0.6,
          "curveness": 0.3,
          "type": "solid",
          "color": "source"
        },
        "roam": true,
        "draggable": false,
        "focusNodeAdjacency": true,
        "data": [
          {
            "id": "0",
            "name": "\u6b63\u4ed4",
            "symbolSize": 20,
            "x": 600.0,
            "y": 0.0,
            "value": 1,
            "label": {
              "normal": {
                "show": true
              }
            },
            "category": 7,
            "symbol": "image://https://pandapia.com/upload/misc/crop/20230509/1683620311805615495.png"
          },
          {
            "id": "1",
            "name": "\u6b63\u6b63",
            "symbolSize": 20,
            "x": 597.484883957297,
            "y": 44.785790441323144,
            "value": 2,
            "label": {
              "normal": {
                "show": true
              }
            },
            "category": 7,
            "symbol": "image://https://pandapia.com/upload/misc/crop/20171226/1514278598132304999.png"
          },
          {
            "id": "2",
            "name": "\u5706\u5706",
            "symbolSize": 20,
            "x": 589.9711648727294,
            "y": 89.00837358252576,
            "value": 1,
            "label": {
              "normal": {
                "show": true
              }
            },
            "category": 0,
            "symbol": "image://https://pandapia.com/upload/misc/crop/20161027/1477561093324588460.png"
          },
          {
            "id": "3",
            "name": "\u51b0\u51b0",
            "symbolSize": 20,
            "x": 577.553332123347,
            "y": 132.11162478206683,
            "value": 0,
            "label": {
              "normal": {
                "show": true
              }
            },
            "category": 0,
            "symbol": "image://https://pandapia.com/upload/misc/crop/20170322/1490163782579511594.png"
          },
          {
            "id": "4",
            "name": "\u90e1\u4e3b",
            "symbolSize": 20,
            "x": 560.3875471609676,
            "y": 173.55349564702325,
            "value": 1,
            "label": {
              "normal": {
                "show": true
              }
            },
            "category": 8,
            "symbol": "image://https://pandapia.com/upload/misc/crop/20161027/1477556985393123258.png"
          },
          {
            "id": "5",
            "name": "\u516c\u4e3b",
            "symbolSize": 20,
            "x": 538.6896796913137,
            "y": 212.81283060613464,
            "value": 1,
            "label": {
              "normal": {
                "show": true
              }
            },
            "category": 8,
            "symbol": "image://https://pandapia.com/upload/misc/crop/20180119/1516335184604568603.png"
          },
          {
            "id": "6",
            "name": "\u68a6\u68a6",
            "symbolSize": 20,
            "x": 512.732592987212,
            "y": 249.3959207434934,
            "value": 2,
            "label": {
              "normal": {
                "show": true
              }
            },
            "category": 8,
            "symbol": "image://https://pandapia.com/upload/misc/crop/20190902/1567406706547963267.png"
          },
          {
            "id": "7",
            "name": "\u9633\u82b1",
            "symbolSize": 20,
            "x": 482.842712474619,
            "y": 282.842712474619,
            "value": 2,
            "label": {
              "normal": {
                "show": true
              }
            },
            "category": 8,
            "symbol": "image://https://pandapia.com/upload/misc/crop/20180102/1514877423734723346.png"
          },
          {
            "id": "8",
            "name": "\u76fc\u6708",
            "symbolSize": 20,
            "x": 449.39592074349343,
            "y": 312.73259298721194,
            "value": 3,
            "label": {
              "normal": {
                "show": true
              }
            },
            "category": 8,
            "symbol": "image://https://pandapia.com/upload/misc/crop/20180104/1515048075996635624.png"
          },
          {
            "id": "9",
            "name": "\u9a84\u9633",
            "symbolSize": 20,
            "x": 412.81283060613464,
            "y": 338.68967969131364,
            "value": 3,
            "label": {
              "normal": {
                "show": true
              }
            },
            "category": 8,
            "symbol": "image://https://pandapia.com/upload/misc/crop/20231025/1698219204367725705.png"
          },
          {
            "id": "10",
            "name": "\u6210\u98ce",
            "symbolSize": 20,
            "x": 373.5534956470233,
            "y": 360.38754716096764,
            "value": 1,
            "label": {
              "normal": {
                "show": true
              }
            },
            "category": 1,
            "symbol": "image://https://pandapia.com/upload/misc/crop/20210525/1621931859529723332.png"
          },
          {
            "id": "11",
            "name": "\u6210\u5927",
            "symbolSize": 20,
            "x": 332.1116247820669,
            "y": 377.55333212334705,
            "value": 2,
            "label": {
              "normal": {
                "show": true
              }
            },
            "category": 1,
            "symbol": "image://https://pandapia.com/upload/misc/crop/20160927/1474948816152391560.png"
          },
          {
            "id": "12",
            "name": "\u79d1\u8c46",
            "symbolSize": 20,
            "x": 289.0083735825258,
            "y": 389.97116487272945,
            "value": 1,
            "label": {
              "normal": {
                "show": true
              }
            },
            "category": 0,
            "symbol": "image://https://gss0.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/zhidao/wh%3D600%2C800/sign=66f64e469016fdfad839cee884bfa06c/eaf81a4c510fd9f91633e004282dd42a2834a4b3.jpg"
          },
          {
            "id": "13",
            "name": "\u79d1\u7433",
            "symbolSize": 20,
            "x": 244.78579044132317,
            "y": 397.48488395729703,
            "value": 2,
            "label": {
              "normal": {
                "show": true
              }
            },
            "category": 0,
            "symbol": "image://https://pandapia.com/upload/misc/crop/20161122/1479812355970663963.png"
          },
          {
            "id": "14",
            "name": "\u6210\u6d6a",
            "symbolSize": 20,
            "x": 200.00000000000003,
            "y": 400.0,
            "value": 1,
            "label": {
              "normal": {
                "show": true
              }
            },
            "category": 1,
            "symbol": "image://https://pandapia.com/upload/misc/crop/20210525/1621931804505241204.png"
          },
          {
            "id": "15",
            "name": "\u8389\u8389",
            "symbolSize": 20,
            "x": 155.21420955867688,
            "y": 397.48488395729703,
            "value": 1,
            "label": {
              "normal": {
                "show": true
              }
            },
            "category": 2,
            "symbol": "image://https://pandapia.com/upload/misc/crop/20160927/1474974175132563116.png"
          },
          {
            "id": "16",
            "name": "\u5e86\u5e86",
            "symbolSize": 20,
            "x": 110.99162641747427,
            "y": 389.97116487272945,
            "value": 0,
            "label": {
              "normal": {
                "show": true
              }
            },
            "category": 2,
            "symbol": "image://https://pandapia.com/upload/misc/crop/20160927/1474965203355742643.png"
          },
          {
            "id": "17",
            "name": "\u8700\u5e86",
            "symbolSize": 20,
            "x": 67.8883752179332,
            "y": 377.55333212334705,
            "value": 1,
            "label": {
              "normal": {
                "show": true
              }
            },
            "category": 4,
            "symbol": "image://https://pandapia.com/upload/misc/crop/20160924/1474715596782365320.png"
          },
          {
            "id": "18",
            "name": "\u65b0\u661f",
            "symbolSize": 20,
            "x": 26.446504352976774,
            "y": 360.38754716096764,
            "value": 0,
            "label": {
              "normal": {
                "show": true
              }
            },
            "category": 4,
            "symbol": "image://https://pandapia.com/upload/misc/crop/20161021/1477033777794999891.png"
          },
          {
            "id": "19",
            "name": "\u96c5\u90e1",
            "symbolSize": 20,
            "x": -12.812830606134582,
            "y": 338.6896796913137,
            "value": 2,
            "label": {
              "normal": {
                "show": true
              }
            },
            "category": 8,
            "symbol": "image://https://pandapia.com/upload/misc/crop/20180102/1514876859229409720.png"
          },
          {
            "id": "20",
            "name": "\u79d1\u5ff5",
            "symbolSize": 20,
            "x": -49.395920743493406,
            "y": 312.73259298721194,
            "value": 1,
            "label": {
              "normal": {
                "show": true
              }
            },
            "category": 0,
            "symbol": "image://https://pandapia.com/upload/misc/crop/20230920/1695170059346257760.png"
          },
          {
            "id": "21",
            "name": "\u79d1\u5927",
            "symbolSize": 20,
            "x": -82.84271247461896,
            "y": 282.842712474619,
            "value": 3,
            "label": {
              "normal": {
                "show": true
              }
            },
            "category": 0,
            "symbol": "image://https://gss0.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/zhidao/wh%3D600%2C800/sign=66f64e469016fdfad839cee884bfa06c/eaf81a4c510fd9f91633e004282dd42a2834a4b3.jpg"
          },
          {
            "id": "22",
            "name": "\u6587\u6587",
            "symbolSize": 20,
            "x": -112.73259298721189,
            "y": 249.39592074349343,
            "value": 1,
            "label": {
              "normal": {
                "show": true
              }
            },
            "category": 2,
            "symbol": "image://https://pandapia.com/upload/misc/crop/20210525/1621933850431613946.png"
          },
          {
            "id": "23",
            "name": "\u6587\u8389",
            "symbolSize": 20,
            "x": -138.68967969131364,
            "y": 212.81283060613467,
            "value": 2,
            "label": {
              "normal": {
                "show": true
              }
            },
            "category": 2,
            "symbol": "image://https://pandapia.com/upload/misc/crop/20171116/1510801584932425712.png"
          },
          {
            "id": "24",
            "name": "\u8700\u84c9",
            "symbolSize": 20,
            "x": -160.38754716096764,
            "y": 173.55349564702328,
            "value": 2,
            "label": {
              "normal": {
                "show": true
              }
            },
            "category": 4,
            "symbol": "image://https://pandapia.com/upload/misc/crop/20180514/1526261871973492855.png"
          },
          {
            "id": "25",
            "name": "\u6210\u529f",
            "symbolSize": 20,
            "x": -177.55333212334705,
            "y": 132.11162478206688,
            "value": 1,
            "label": {
              "normal": {
                "show": true
              }
            },
            "category": 1,
            "symbol": "image://https://pandapia.com/upload/misc/crop/20160708/1467967062596903728.png"
          },
          {
            "id": "26",
            "name": "\u6210\u6210",
            "symbolSize": 20,
            "x": -189.97116487272945,
            "y": 89.0083735825258,
            "value": 0,
            "label": {
              "normal": {
                "show": true
              }
            },
            "category": 1,
            "symbol": "image://https://pandapia.com/upload/misc/crop/20180815/1534327470130825158.png"
          },
          {
            "id": "27",
            "name": "\u8f89\u8f89",
            "symbolSize": 20,
            "x": -197.48488395729703,
            "y": 44.78579044132319,
            "value": 1,
            "label": {
              "normal": {
                "show": true
              }
            },
            "category": 7,
            "symbol": "image://https://pandapia.com/upload/misc/crop/20161128/1480316064111813307.png"
          },
          {
            "id": "28",
            "name": "\u559c\u59b9",
            "symbolSize": 20,
            "x": -200.0,
            "y": 4.898587196589413e-14,
            "value": 1,
            "label": {
              "normal": {
                "show": true
              }
            },
            "category": 7,
            "symbol": "image://https://pandapia.com/upload/misc/crop/20180105/1515122175169213811.png"
          },
          {
            "id": "29",
            "name": "\u5706\u6da6",
            "symbolSize": 20,
            "x": -197.48488395729703,
            "y": -44.785790441323094,
            "value": 2,
            "label": {
              "normal": {
                "show": true
              }
            },
            "category": 0,
            "symbol": "image://https://gss0.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/zhidao/wh%3D600%2C800/sign=66f64e469016fdfad839cee884bfa06c/eaf81a4c510fd9f91633e004282dd42a2834a4b3.jpg"
          },
          {
            "id": "30",
            "name": "\u5a07\u5b50",
            "symbolSize": 20,
            "x": -189.97116487272945,
            "y": -89.0083735825257,
            "value": 1,
            "label": {
              "normal": {
                "show": true
              }
            },
            "category": 0,
            "symbol": "image://https://pandapia.com/upload/misc/crop/20160928/1475038668927313520.png"
          },
          {
            "id": "31",
            "name": "\u5065\u5065",
            "symbolSize": 20,
            "x": -177.55333212334705,
            "y": -132.11162478206677,
            "value": 3,
            "label": {
              "normal": {
                "show": true
              }
            },
            "category": 4,
            "symbol": "image://https://pandapia.com/upload/misc/crop/20161028/1477640852125170940.png"
          },
          {
            "id": "32",
            "name": "\u6dd8\u6dd8",
            "symbolSize": 20,
            "x": -160.38754716096764,
            "y": -173.5534956470232,
            "value": 1,
            "label": {
              "normal": {
                "show": true
              }
            },
            "category": 7,
            "symbol": "image://https://pandapia.com/upload/misc/crop/20230712/1689140865712445244.png"
          },
          {
            "id": "33",
            "name": "\u65b0\u59ae\u513f",
            "symbolSize": 20,
            "x": -138.6896796913137,
            "y": -212.81283060613458,
            "value": 1,
            "label": {
              "normal": {
                "show": true
              }
            },
            "category": 5,
            "symbol": "image://https://pandapia.com/upload/misc/crop/20161027/1477560378337365622.png"
          },
          {
            "id": "34",
            "name": "\u4f18\u4f18",
            "symbolSize": 20,
            "x": -112.73259298721194,
            "y": -249.39592074349335,
            "value": 1,
            "label": {
              "normal": {
                "show": true
              }
            },
            "category": 5,
            "symbol": "image://https://pandapia.com/upload/misc/crop/20161027/1477561583443266545.png"
          },
          {
            "id": "35",
            "name": "\u6210\u5170",
            "symbolSize": 20,
            "x": -82.84271247461908,
            "y": -282.84271247461896,
            "value": 1,
            "label": {
              "normal": {
                "show": true
              }
            },
            "category": 1,
            "symbol": "image://https://pandapia.com/upload/misc/crop/20220427/1651033834250136379.png"
          },
          {
            "id": "36",
            "name": "\u6587\u9759",
            "symbolSize": 20,
            "x": -49.39592074349349,
            "y": -312.7325929872119,
            "value": 3,
            "label": {
              "normal": {
                "show": true
              }
            },
            "category": 2,
            "symbol": "image://https://pandapia.com/upload/misc/crop/20230920/1695170463556587496.png"
          },
          {
            "id": "37",
            "name": "\u601d\u96ea",
            "symbolSize": 20,
            "x": -12.812830606134668,
            "y": -338.68967969131364,
            "value": 1,
            "label": {
              "normal": {
                "show": true
              }
            },
            "category": 3,
            "symbol": "image://https://pandapia.com/upload/misc/crop/20190124/1548315902596485186.png"
          },
          {
            "id": "38",
            "name": "\u767d\u96ea",
            "symbolSize": 20,
            "x": 26.44650435297669,
            "y": -360.38754716096764,
            "value": 0,
            "label": {
              "normal": {
                "show": true
              }
            },
            "category": 3,
            "symbol": "image://https://pandapia.com/upload/misc/crop/20161027/1477554728445445607.png"
          },
          {
            "id": "39",
            "name": "\u96ea\u96ea",
            "symbolSize": 20,
            "x": 67.88837521793309,
            "y": -377.553332123347,
            "value": 2,
            "label": {
              "normal": {
                "show": true
              }
            },
            "category": 3,
            "symbol": "image://https://pandapia.com/upload/misc/crop/20180105/1515120945374764279.png"
          },
          {
            "id": "40",
            "name": "\u529f\u4ed4",
            "symbolSize": 20,
            "x": 110.99162641747417,
            "y": -389.97116487272945,
            "value": 2,
            "label": {
              "normal": {
                "show": true
              }
            },
            "category": 1,
            "symbol": "image://https://pandapia.com/upload/misc/crop/20160922/1474544208226557316.png"
          },
          {
            "id": "41",
            "name": "\u6210\u7ee9",
            "symbolSize": 20,
            "x": 155.21420955867677,
            "y": -397.48488395729703,
            "value": 1,
            "label": {
              "normal": {
                "show": true
              }
            },
            "category": 1,
            "symbol": "image://https://pandapia.com/upload/misc/crop/20161121/1479700953773557479.png"
          },
          {
            "id": "42",
            "name": "\u6620\u96ea",
            "symbolSize": 20,
            "x": 199.99999999999991,
            "y": -400.0,
            "value": 2,
            "label": {
              "normal": {
                "show": true
              }
            },
            "category": 3,
            "symbol": "image://https://pandapia.com/upload/misc/crop/20170429/1493455807786805204.png"
          },
          {
            "id": "43",
            "name": "\u96ea\u5b9d",
            "symbolSize": 20,
            "x": 244.78579044132306,
            "y": -397.48488395729703,
            "value": 2,
            "label": {
              "normal": {
                "show": true
              }
            },
            "category": 3,
            "symbol": "image://https://pandapia.com/upload/misc/crop/20190319/1552960698977767608.png"
          },
          {
            "id": "44",
            "name": "\u5927\u7f8e",
            "symbolSize": 20,
            "x": 289.0083735825257,
            "y": -389.97116487272945,
            "value": 3,
            "label": {
              "normal": {
                "show": true
              }
            },
            "category": 1,
            "symbol": "image://https://pandapia.com/upload/misc/crop/20191011/1570781016739987521.png"
          },
          {
            "id": "45",
            "name": "\u79d1\u5c0f",
            "symbolSize": 20,
            "x": 332.11162478206677,
            "y": -377.55333212334705,
            "value": 2,
            "label": {
              "normal": {
                "show": true
              }
            },
            "category": 0,
            "symbol": "image://https://gss0.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/zhidao/wh%3D600%2C800/sign=66f64e469016fdfad839cee884bfa06c/eaf81a4c510fd9f91633e004282dd42a2834a4b3.jpg"
          },
          {
            "id": "46",
            "name": "\u8700\u5170",
            "symbolSize": 20,
            "x": 373.55349564702317,
            "y": -360.3875471609677,
            "value": 1,
            "label": {
              "normal": {
                "show": true
              }
            },
            "category": 6,
            "symbol": "image://https://pandapia.com/upload/misc/crop/20160928/1475038066437370573.png"
          },
          {
            "id": "47",
            "name": "\u82cf\u82cf",
            "symbolSize": 20,
            "x": 412.8128306061345,
            "y": -338.6896796913137,
            "value": 0,
            "label": {
              "normal": {
                "show": true
              }
            },
            "category": 6,
            "symbol": "image://https://pandapia.com/upload/misc/crop/20160927/1474946841593441895.png"
          },
          {
            "id": "48",
            "name": "\u5170\u5b9d",
            "symbolSize": 20,
            "x": 449.3959207434933,
            "y": -312.73259298721194,
            "value": 2,
            "label": {
              "normal": {
                "show": true
              }
            },
            "category": 6,
            "symbol": "image://https://pandapia.com/upload/misc/crop/20180402/1522649113393792700.png"
          },
          {
            "id": "49",
            "name": "\u9f99\u53e4",
            "symbolSize": 20,
            "x": 482.84271247461896,
            "y": -282.8427124746191,
            "value": 0,
            "label": {
              "normal": {
                "show": true
              }
            },
            "category": 7,
            "symbol": "image://https://pandapia.com/upload/misc/crop/20180314/1521020270269202798.png"
          },
          {
            "id": "50",
            "name": "\u56de\u56de",
            "symbolSize": 20,
            "x": 512.7325929872119,
            "y": -249.3959207434935,
            "value": 2,
            "label": {
              "normal": {
                "show": true
              }
            },
            "category": 7,
            "symbol": "image://https://pandapia.com/upload/misc/crop/20180206/1517908023526967794.png"
          },
          {
            "id": "51",
            "name": "\u534e\u59ae",
            "symbolSize": 20,
            "x": 538.6896796913136,
            "y": -212.81283060613472,
            "value": 2,
            "label": {
              "normal": {
                "show": true
              }
            },
            "category": 5,
            "symbol": "image://https://pandapia.com/upload/misc/crop/20170120/1484895701669822769.png"
          },
          {
            "id": "52",
            "name": "\u5170\u4ed4",
            "symbolSize": 20,
            "x": 560.3875471609676,
            "y": -173.55349564702334,
            "value": 2,
            "label": {
              "normal": {
                "show": true
              }
            },
            "category": 6,
            "symbol": "image://https://pandapia.com/upload/misc/crop/20180104/1515036454766354755.png"
          },
          {
            "id": "53",
            "name": "\u79d1\u6bd4",
            "symbolSize": 20,
            "x": 577.553332123347,
            "y": -132.11162478206694,
            "value": 1,
            "label": {
              "normal": {
                "show": true
              }
            },
            "category": 6,
            "symbol": "image://https://pandapia.com/upload/misc/crop/20160927/1474968059494322819.png"
          },
          {
            "id": "54",
            "name": "\u798f\u5b9d",
            "symbolSize": 20,
            "x": 589.9711648727293,
            "y": -89.00837358252586,
            "value": 3,
            "label": {
              "normal": {
                "show": true
              }
            },
            "category": 5,
            "symbol": "image://https://pandapia.com/upload/misc/crop/20231227/1703644271532677991.png"
          },
          {
            "id": "55",
            "name": "\u777f\u5b9d",
            "symbolSize": 20,
            "x": 597.484883957297,
            "y": -44.785790441323236,
            "value": 3,
            "label": {
              "normal": {
                "show": true
              }
            },
            "category": 5,
            "symbol": "image://https://pandapia.com/upload/misc/crop/20230711/1689062446170666606.png"
          },
          {
            "id": "56",
            "name": "\u6da6\u4e5d",
            "symbolSize": 20,
            "x": 600.0,
            "y": -9.797174393178826e-14,
            "value": 3,
            "label": {
              "normal": {
                "show": true
              }
            },
            "category": 0,
            "symbol": "image://https://pandapia.com/upload/misc/crop/20220427/1651030550272502752.png"
          },
          {
            "id": "57",
            "name": "\u516b\u4ed4",
            "symbolSize": 20,
            "x": 597.484883957297,
            "y": 44.785790441323044,
            "value": 3,
            "label": {
              "normal": {
                "show": true
              }
            },
            "category": 7,
            "symbol": "image://https://pandapia.com/upload/misc/crop/20230509/1683620769480323733.png"
          },
          {
            "id": "58",
            "name": "\u5510\u5510",
            "symbolSize": 20,
            "x": 589.9711648727294,
            "y": 89.00837358252566,
            "value": 0,
            "label": {
              "normal": {
                "show": true
              }
            },
            "category": 8,
            "symbol": "image://https://pandapia.com/upload/misc/crop/20161027/1477559825642402880.png"
          },
          {
            "id": "59",
            "name": "\u6c47\u5b9d",
            "symbolSize": 20,
            "x": 577.553332123347,
            "y": 132.11162478206674,
            "value": 3,
            "label": {
              "normal": {
                "show": true
              }
            },
            "category": 5,
            "symbol": "image://https://gss0.baidu.com/9vo3dSag_xI4khGko9WTAnF6hhy/zhidao/wh%3D600%2C800/sign=66f64e469016fdfad839cee884bfa06c/eaf81a4c510fd9f91633e004282dd42a2834a4b3.jpg"
          },
          {
            "id": "60",
            "name": "\u6885\u6885",
            "symbolSize": 20,
            "x": 560.3875471609676,
            "y": 173.55349564702317,
            "value": 1,
            "label": {
              "normal": {
                "show": true
              }
            },
            "category": 6,
            "symbol": "image://https://pandapia.com/upload/misc/crop/20160928/1475037712196907594.png"
          },
          {
            "id": "61",
            "name": "\u6da6\u73a5",
            "symbolSize": 20,
            "x": 538.6896796913138,
            "y": 212.81283060613453,
            "value": 3,
            "label": {
              "normal": {
                "show": true
              }
            },
            "category": 0,
            "symbol": "image://https://pandapia.com/upload/misc/crop/20220427/1651025302933594650.png"
          },
          {
            "id": "62",
            "name": "\u5eb7\u5eb7",
            "symbolSize": 20,
            "x": 512.732592987212,
            "y": 249.39592074349335,
            "value": 3,
            "label": {
              "normal": {
                "show": true
              }
            },
            "category": 4,
            "symbol": "image://https://pandapia.com/upload/misc/crop/20161028/1477641403975430955.png"
          },
          {
            "id": "63",
            "name": "\u82f1\u82f1",
            "symbolSize": 20,
            "x": 482.8427124746191,
            "y": 282.84271247461896,
            "value": 0,
            "label": {
              "normal": {
                "show": true
              }
            },
            "category": 5,
            "symbol": "image://https://pandapia.com/upload/misc/crop/20161229/1482997392848769228.png"
          }
        ],
        "categories": [
          {
            "name": "\u51b0\u51b0"
          },
          {
            "name": "\u6210\u6210"
          },
          {
            "name": "\u5e86\u5e86"
          },
          {
            "name": "\u767d\u96ea"
          },
          {
            "name": "\u65b0\u661f"
          },
          {
            "name": "\u82f1\u82f1"
          },
          {
            "name": "\u82cf\u82cf"
          },
          {
            "name": "\u9f99\u53e4"
          },
          {
            "name": "\u5510\u5510"
          }
        ],
        "edgeLabel": {
          "show": false,
          "margin": 8
        },
        "edgeSymbol": [
          "circle",
          "arrow"
        ],
        "edgeSymbolSize": [
          4,
          10
        ],
        "links": [
          {
            "id": "1",
            "source": "28",
            "target": "0"
          },
          {
            "id": "1",
            "source": "28",
            "target": "57"
          },
          {
            "id": "2",
            "source": "3",
            "target": "29"
          },
          {
            "id": "3",
            "source": "3",
            "target": "2"
          },
          {
            "id": "3",
            "source": "3",
            "target": "30"
          },
          {
            "id": "4",
            "source": "5",
            "target": "6"
          },
          {
            "id": "4",
            "source": "5",
            "target": "7"
          },
          {
            "id": "4",
            "source": "5",
            "target": "19"
          },
          {
            "id": "5",
            "source": "58",
            "target": "4"
          },
          {
            "id": "7",
            "source": "4",
            "target": "8"
          },
          {
            "id": "7",
            "source": "4",
            "target": "9"
          },
          {
            "id": "11",
            "source": "41",
            "target": "10"
          },
          {
            "id": "11",
            "source": "41",
            "target": "14"
          },
          {
            "id": "11",
            "source": "41",
            "target": "35"
          },
          {
            "id": "11",
            "source": "41",
            "target": "44"
          },
          {
            "id": "13",
            "source": "30",
            "target": "12"
          },
          {
            "id": "13",
            "source": "30",
            "target": "21"
          },
          {
            "id": "13",
            "source": "30",
            "target": "45"
          },
          {
            "id": "15",
            "source": "16",
            "target": "23"
          },
          {
            "id": "16",
            "source": "16",
            "target": "15"
          },
          {
            "id": "17",
            "source": "18",
            "target": "24"
          },
          {
            "id": "18",
            "source": "18",
            "target": "17"
          },
          {
            "id": "21",
            "source": "13",
            "target": "20"
          },
          {
            "id": "23",
            "source": "15",
            "target": "22"
          },
          {
            "id": "23",
            "source": "15",
            "target": "36"
          },
          {
            "id": "24",
            "source": "17",
            "target": "31"
          },
          {
            "id": "24",
            "source": "17",
            "target": "62"
          },
          {
            "id": "25",
            "source": "26",
            "target": "40"
          },
          {
            "id": "26",
            "source": "26",
            "target": "25"
          },
          {
            "id": "26",
            "source": "26",
            "target": "41"
          },
          {
            "id": "28",
            "source": "49",
            "target": "27"
          },
          {
            "id": "28",
            "source": "49",
            "target": "1"
          },
          {
            "id": "28",
            "source": "49",
            "target": "32"
          },
          {
            "id": "28",
            "source": "49",
            "target": "50"
          },
          {
            "id": "29",
            "source": "2",
            "target": "56"
          },
          {
            "id": "29",
            "source": "2",
            "target": "61"
          },
          {
            "id": "30",
            "source": "3",
            "target": "13"
          },
          {
            "id": "33",
            "source": "34",
            "target": "51"
          },
          {
            "id": "34",
            "source": "63",
            "target": "33"
          },
          {
            "id": "37",
            "source": "38",
            "target": "39"
          },
          {
            "id": "37",
            "source": "38",
            "target": "42"
          },
          {
            "id": "37",
            "source": "38",
            "target": "43"
          },
          {
            "id": "38",
            "source": "38",
            "target": "37"
          },
          {
            "id": "41",
            "source": "26",
            "target": "11"
          },
          {
            "id": "46",
            "source": "47",
            "target": "48"
          },
          {
            "id": "46",
            "source": "47",
            "target": "52"
          },
          {
            "id": "47",
            "source": "47",
            "target": "46"
          },
          {
            "id": "47",
            "source": "47",
            "target": "53"
          },
          {
            "id": "47",
            "source": "47",
            "target": "60"
          },
          {
            "id": "49",
            "source": "49",
            "target": "28"
          },
          {
            "id": "51",
            "source": "33",
            "target": "54"
          },
          {
            "id": "51",
            "source": "33",
            "target": "55"
          },
          {
            "id": "51",
            "source": "33",
            "target": "59"
          },
          {
            "id": "58",
            "source": "58",
            "target": "5"
          },
          {
            "id": "63",
            "source": "63",
            "target": "34"
          }
        ]
      }
    ],
    "legend": [
      {
        "data": [
          "\u51b0\u51b0",
          "\u6210\u6210",
          "\u5e86\u5e86",
          "\u767d\u96ea",
          "\u65b0\u661f",
          "\u82f1\u82f1",
          "\u82cf\u82cf",
          "\u9f99\u53e4",
          "\u5510\u5510"
        ],
        "selected": {},
        "show": true,
        "left": "2%",
        "top": "20%",
        "orient": "vertical",
        "padding": 5,
        "itemGap": 10,
        "itemWidth": 25,
        "itemHeight": 14,
        "textStyle": {
          "color": "black",
          "fontSize": 12
        },
        "backgroundColor": "transparent",
        "borderColor": "#ccc",
        "borderRadius": 0,
        "pageButtonItemGap": 5,
        "pageButtonPosition": "end",
        "pageFormatter": "{current}/{total}",
        "pageIconColor": "#2f4554",
        "pageIconInactiveColor": "#aaa",
        "pageIconSize": 15,
        "animationDurationUpdate": 800,
        "selector": false,
        "selectorPosition": "auto",
        "selectorItemGap": 7,
        "selectorButtonGap": 10
      }
    ],
    "tooltip": {
      "show": true,
      "trigger": "item",
      "triggerOn": "mousemove",
      "axisPointer": {
        "type": "line"
      },
      "showContent": true,
      "alwaysShowContent": false,
      "showDelay": 0,
      "hideDelay": 100,
      "enterable": false,
      "confine": false,
      "appendToBody": false,
      "transitionDuration": 0.4,
      "textStyle": {
        "color": "black",
        "fontSize": 12
      },
      "backgroundColor": "white",
      "borderColor": "black",
      "borderWidth": 0,
      "padding": 5,
      "order": "seriesAsc",
     

    },
    "title": {
      text: "大熊猫谱系图",
      textStyle: { // 标题样式  
          fontSize: 16, // 字体大小设置为20  
          // 其他样式属性，如颜色、字体类型等也可以在这里设置  
      },  
      left:50
      
    }
  };
  chart_4eaa364a159c406194abd4e507a4402c.setOption(option_4eaa364a159c406194abd4e507a4402c);