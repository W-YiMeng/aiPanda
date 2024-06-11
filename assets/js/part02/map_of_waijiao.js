
function initializeMap(containerId, topoJsonUrl) {
    // 使用async/await来处理fetch请求和异步操作  
    (async function () {
        try {
            const response = await fetch(topoJsonUrl);
            if (!response.ok) {
                throw new Error('Failed to fetch topo JSON');
            }
            const topology = await response.json();


            Highcharts.mapChart('part020101', {
                chart: {
                    credits: {
                        enabled: false//不显示LOGO
                        },
                    map: topology
                },
                style: {  
                    fontFamily: 'Arial, sans-serif', // 字体家族  
                    fontSize: '13px' // 字体大小  
                },
                title: {
                    text: '大熊猫国际交流版图',
                    align: 'center',
                    style: {
                        fontSize: '16px' // 字体大小  
                    }
                },

                mapNavigation: {
                    enabled: true
                },

                mapView: {
                    fitToGeometry: {
                        type: 'MultiPoint',
                        coordinates: [
                            // Alaska west
                            [-164, 54],
                            //Greenland north
                            [-35, 84],
                            //New Zealand east
                            [179, -38],
                            //Chile south
                            [-68, -55]
                        ]
                    }
                },

                accessibility: {
                    point: {
                        valueDescriptionFormat: '{xDescription}.'
                    }
                },

                plotOptions: {  
                    flowmap: { // 假设 flowmap 是一个可用的系列类型  
                        tooltip: {  
                            headerFormat: '{point.options.name}<br>{point.options.year}<br>',  
                            pointFormat: '{point.options.name}<br>{point.options.year}<br>{point.options.from} \u2192 {point.options.to}',  
                            style: {  
                                fontSize: '18px'  
                            }  
                        },  
                    },  
                    mappoint: {  
                        tooltip: {  
                            headerFormat: '{point.id}<br>',  
                            pointFormat: 'Lat: {point.lat} Lon: {point.lon}',  
                            style: {  
                                fontSize: '13px'  
                            }  
                        },  
                        showInLegend: false  
                    }  
                },

                series: [{
                    name: 'Basemap',
                    showInLegend: false,
                    states: {
                        inactive: {
                            enabled: false,
                        }
                    },
                    //data: [
                    // ['cn', 3],
                     style: {
                            fontSize: '13px'
                          }
                    //]
                }, {
                    type: 'mappoint',
                    name: 'Countries',
                    color: '#add8e6',
                    marker: {
                        radius: 2, // 设置标记的半径大小  
                    },
                    dataLabels: {
                        format: '{point.id}',
                        style: {
                            fontSize: '8px', // 设置数据标签的字体大小  
                            fontWeight: 'normal',
                        },
                    },
                    data: [{
                        id: '中国四川省',
                        lat: 30.50
                        ,
                        lon: 102.50
                        ,
                        color: '#000000',

                    }, {
                        id: '美国芝加哥布鲁克菲尔德动物园',
                        lat: 41.83
                        ,
                        lon: -87.83
                        ,
                    }, {
                        id: '英国伦敦动物园',
                        lat: 51.53
                        ,
                        lon: -0.15
                        ,
                        color: '#000000'
                    },
                    {
                        id: '北京动物园',
                        lat: 39.95
                        ,
                        lon: 116.34
                        ,
                        color: '#000000'
                    },
                    {
                        id: '苏联莫斯科动物园',
                        lat: 55.76
                        ,
                        lon: 37.58
                        ,
                        color: '#000000'
                    },

                    {
                        id: '日本东京上野动物园',
                        lat: 35.71
                        ,
                        lon: 139.76
                        ,
                        color: '#000000'
                    }, {
                        id: '美国华盛顿史密森学会国家动物园',
                        lat: 38.91
                        ,
                        lon: -77.07
                        ,
                        color: '#000000'
                    }, {
                        id: '日本和歌山白浜野生动物园',
                        lat: 33.91
                        ,
                        lon: 135.26
                        ,
                        color: '#000000'
                    },
                    {
                        id: '德国柏林动物园',
                        lat: 52.52
                        ,
                        lon: 13.35
                        ,
                        color: '#000000'
                    }, {
                        id: '中国大熊猫保护研究中心核桃坪野化培训基地',
                        lat: 31.10
                        ,
                        lon: 103.25
                        ,
                        color: '#000000'
                    }, {
                        id: '美国圣地亚哥动物园',
                        lat: 32.74
                        ,
                        lon: -117.15
                        ,
                        color: '#000000',

                    }, {
                        id: '成都大熊猫繁育研究基地',
                        lat: 30.74
                        ,
                        lon: 104.14
                        ,
                        color: '#000000'
                    }, {
                        id: '美国亚特兰大动物园',
                        lat: 33.77
                        ,
                        lon: -84.39
                        ,
                        color: '#000000'
                    }, {
                        id: '中国大熊猫保护研究中心卧龙基地',
                        lat: 31.14
                        ,
                        lon: 103.14
                        ,
                        color: '#000000'
                    }, {
                        id: '日本神户市立王子动物园',
                        lat: 34.71
                        ,
                        lon: 135.21
                        ,
                        color: '#000000'
                    }, {
                        id: '美国华盛顿国家动物园',
                        lat: 38.91
                        ,
                        lon: -77.08
                        ,
                        color: '#000000'
                    }, {
                        id: '泰国清迈动物园',
                        lat: 18.81
                        ,
                        lon: 98.95
                        ,
                        color: '#000000'
                    }, {
                        id: '奥地利美泉宫动物园',
                        lat: 48.18
                        ,
                        lon: 16.31
                        ,
                        color: '#000000'
                    }, {
                        id: '重庆动物园',
                        lat: 29.50
                        ,
                        lon: 106.50
                        ,
                        color: '#000000'
                    }, {
                        id: '美国田纳西州孟菲斯动物园',
                        lat: 35.12
                        ,
                        lon: -89.98
                        ,
                        color: '#000000'
                    }, {
                        id: '中国大熊猫保护研究中心雅安碧峰峡基地',
                        lat: 30.04
                        ,
                        lon: 103.00
                        ,
                        color: '#000000'
                    }, {
                        id: '西班牙马德里动物园',
                        lat: 40.42
                        ,
                        lon: -3.69
                        ,
                        color: '#000000'
                    }, {
                        id: '澳大利亚阿德莱德动物园',
                        lat: -34.92
                        ,
                        lon: 138.60
                        ,
                        color: '#000000'
                    }, {
                        id: '英国爱丁堡动物园',
                        lat: 55.94
                        ,
                        lon: -3.27
                        ,
                        color: '#000000'
                    }, {
                        id: '新加坡河川生态园',
                        lat: 1.33
                        ,
                        lon: 103.84
                        ,
                        color: '#000000'
                    }, {
                        id: '中国大熊猫保护研究中心都江堰青城山基地',
                        lat: 31.00
                        ,
                        lon: 103.60
                        ,
                        color: '#000000'
                    }, {
                        id: '法国博瓦勒动物园',
                        lat: 47.72
                        ,
                        lon: 1.78
                        ,
                        color: '#000000'
                    }, {
                        id: '加拿大多伦多动物园',
                        lat: 43.77
                        ,
                        lon: -79.24
                        ,
                        color: '#000000'
                    }, {
                        id: '比利时天堂动物园',
                        lat: 50.35
                        ,
                        lon: 4.15
                        ,
                        color: '#000000'
                    }, {
                        id: '马来西亚国家动物园大熊猫保护中心',
                        lat: 3.13
                        ,
                        lon: 101.71
                        ,
                        color: '#000000'
                    }, {
                        id: '美国国家动物园熊猫馆',
                        lat: 38.91
                        ,
                        lon: -77.07
                        ,
                        color: '#000000'
                    }, {
                        id: '韩国三星爱宝乐园',
                        lat: 37.50
                        ,
                        lon: 126.98
                        ,
                        color: '#000000'
                    },
                    {
                        id: '印度尼西亚野生动物园',
                        lat: -6.92
                        ,
                        lon: 107.57
                        ,
                        color: '#000000'
                    }, {
                        id: '荷兰欧维汉动物园',
                        lat: 51.96
                        ,
                        lon: 5.58
                        , color: '#000000'
                    }, {
                        id: '芬兰艾赫泰里动物园',
                        lat: 65.37
                        ,
                        lon: 25.00
                        ,
                        color: '#000000'
                    }, {
                        id: '丹麦哥本哈根动物园',
                        lat: 55.68
                        ,
                        lon: 12.57
                        ,
                        color: '#000000'
                    }, {
                        id: '俄罗斯莫斯科动物园',
                        lat: 55.76
                        ,
                        lon: 37.58
                        ,
                        color: '#000000'
                    }, {
                        id: '卡塔尔熊猫公园',
                        lat: 25.35
                        ,
                        lon: 51.55
                        ,
                        color: '#000000'
                    },

                    ]
                }, {
                    type: 'flowmap',
                    name: '去世',
                    
                    accessibility: {
                        point: {
                            valueDescriptionFormat:
                                'Origin: {point.options.from:.2f}, ' +
                                'Destination: {point.options.to:.2f}.'
                        },
                        description:
                            'This is a map showing flight routes to Qatar ' +
                            'from countries that participated in the 2022 World Cup.'
                    },
                    fillOpacity: 1,
                    width: 0.01,
                    color: '#000000',
                  
                    data: [
                        //去世
                        {
                            from: '中国四川省',
                            to: '美国芝加哥布鲁克菲尔德动物园',
                            name: '苏琳',
                            year: '1936',
                            now: 'D',
                            description: '1938年4月1日死于肺炎',
                            color: '#973444',


                        },
                        {
                            from: '中国四川省',
                            to: '英国伦敦动物园',
                            name: '明',
                            year: '1938',
                            now: 'D',
                            description: '1944年去世',
                            color: '#973444',

                        }, {
                            from: '北京动物园',
                            to: '苏联莫斯科动物园',
                            name: '平平',
                            year: '1957',
                            now: 'D',
                            description: '1961年5月29日病逝',
                            color: '#973444'

                        }, {
                            from: '中国四川省',
                            to: '日本东京上野动物园',
                            name: '兰兰',
                            year: '1972',
                            now: 'D',
                            description: '1978年9月去世',
                            color: '#973444'

                        }, {
                            from: '中国四川省',
                            to: '日本东京上野动物园',
                            name: '康康',
                            year: '1972',
                            now: 'D',
                            description: '1980年6月30日去世',
                            color: '#973444'

                        }, {
                            from: '中国四川省',
                            to: '美国华盛顿史密森学会国家动物园',
                            name: '玲玲（美国）',
                            year: '1972',
                            now: 'D',
                            description: '1992年12月31日去世赠送',
                            color: '#973444'

                        }, {
                            from: '中国四川省',
                            to: '美国华盛顿史密森学会国家动物园',
                            name: '兴兴',
                            year: '1972',
                            now: 'D',
                            description: '1999年11月28日去世',
                            color: '#973444'

                        }, {
                            from: '北京动物园',
                            to: '日本东京上野动物园',
                            name: '玲玲（日本）',
                            year: '1992',
                            now: 'D',
                            description: '2008年4月30日去世',
                            color: '#973444'

                        }, {
                            from: '成都大熊猫繁育研究基地',
                            to: '日本和歌山白浜野生动物园',
                            name: '蓉浜',
                            year: '1992',
                            now: 'D',
                            description: '1997年7月17日去世',
                            color: '#973444'

                        }, {
                            from: '北京动物园',
                            to: '德国柏林动物园',
                            name: '嫣嫣',
                            year: '1995',
                            now: 'D',
                            description: '2007年去世',
                            color: '#973444'

                        }, {
                            from: '中国大熊猫保护研究中心都江堰青城山基地',
                            to: '日本神户市立王子动物园',
                            name: '旦旦',
                            year: '2000.7.16',
                            now: 'D',
                            description: '2024.3.31病逝',
                            color: '#973444'

                        }, {
                            from: '成都大熊猫繁育研究基地',
                            to: '日本和歌山白浜野生动物园',
                            name: '梅梅',
                            year: '2000.7.7',
                            now: 'D',
                            description: '2008.10.15病逝',
                            color: '#973444'

                        }, {
                            from: '中国大熊猫保护研究中心核桃坪野化培训基地',
                            to: '泰国清迈动物园',
                            name: '林惠',
                            year: '2003.10.12',
                            now: 'D',
                            description: '2023.4.19病逝',
                            color: '#973444'

                        }, {
                            from: '中国大熊猫保护研究中心核桃坪野化培训基地',
                            to: '奥地利美泉宫动物园',
                            name: '龙徽',
                            year: '2003.3.3',
                            now: 'D',
                            description: '2016.12.9去世',
                            color: '#973444'

                        }, {
                            from: '重庆动物园',
                            to: '美国田纳西州孟菲斯动物园',
                            name: '乐乐',
                            year: '2003.4.7',
                            now: 'D',
                            description: '2023.2.1去世466',
                            color: '#973444'

                        }, {
                            from: '中国大熊猫保护研究中心都江堰青城山基地',
                            to: '泰国清迈动物园',
                            name: '创创',
                            year: '2003.10.12',
                            now: 'D',
                            description: '2019.9.16去世',
                            color: '#973444'

                        },]
                },
                {
                    type: 'flowmap',
                    name: '归国',

                    accessibility: {
                        point: {
                            valueDescriptionFormat:
                                'Origin: {point.options.from:.2f}, ' +
                                'Destination: {point.options.to:.2f}.'
                        },
                        description:
                            'This is a map showing flight routes to Qatar ' +
                            'from countries that participated in the 2022 World Cup.'
                    },
                    fillOpacity: 1,
                    width: 0.01,
                    color: '#000000',

                    data: [



                        //归国
                        {
                            from: '北京动物园',
                            to: '日本和歌山白浜野生动物园',
                            name: '永明',
                            year: '1994',
                            now: 'G',
                            description: '2023年2月22日返回中国',
                            color: '#1661ab'

                        },
                          {
                            from: '中国大熊猫保护研究中心核桃坪野化培训基地',
                            to: '美国圣地亚哥动物园',
                            name: '白云',
                            year: '1996',
                            now: 'G',
                            description: '2019年5月16日返回中国',
                            color: '#1661ab'

                        },  {
                            from: '中国大熊猫保护研究中心核桃坪野化培训基地',
                            to: '美国华盛顿国家动物园',
                            name: '添添',
                            year: '2000.12.6',
                            now: 'G',
                            description: '2023.11.8返回四川成都',
                            color: '#1661ab'

                        },{
                            from: '中国大熊猫保护研究中心核桃坪野化培训基地',
                            to: '美国华盛顿国家动物园',
                            name: '美香',
                            year: '2000.12.6',
                            now: 'G',
                            description: '2023.11.8返回四川成都',
                            color: '#1661ab'

                        },  {
                            from: '中国大熊猫保护研究中心卧龙基地',
                            to: '日本神户市立王子动物园',
                            name: '锦竹',
                            year: '2000.7.16',
                            now: 'G',
                            description: '2002.12.5回到成都',
                            color: '#1661ab'

                        },  {
                            from: '中国四川省',
                            to: '美国圣地亚哥动物园',
                            name: '高高',
                            year: '2003.1.15',
                            now: 'G',
                            description: '2018.11.1回到中国大熊猫保护研究中心',
                            color: '#1661ab'

                        },  {
                            from: '北京动物园',
                            to: '美国田纳西州孟菲斯动物园',
                            name: '丫丫',
                            year: '2003.4.7',
                            now: 'G',
                            description: '2023.4.7回到北京动物园',
                            color: '#1661ab'

                        }, {
                            from: '成都大熊猫繁育研究基地',
                            to: '西班牙马德里动物园',
                            name: '冰星',
                            year: '2007.9.8',
                            now: 'G',
                            description: '2024.3.1回到四川成都',
                            color: '#1661ab'

                        }, {
                            from: '成都大熊猫繁育研究基地',
                            to: '西班牙马德里动物园',
                            name: '花嘴巴',
                            year: '2007.9.8',
                            now: 'G',
                            description: '2024.3.1回到四川成都',
                            color: '#1661ab'

                        },  {
                            from: '北京动物园',
                            to: '英国爱丁堡动物园',
                            name: '甜甜',
                            year: '2011.12',
                            now: 'G',
                            description: '2023.12.5回国，雅安碧峰峡基地',
                            color: '#1661ab'

                        },  {
                            from: '中国大熊猫保护研究中心核桃坪野化培训基地',
                            to: '英国爱丁堡动物园',
                            name: '阳光',
                            year: '2011.12',
                            now: 'G',
                            description: '2023.12.5回国，雅安碧峰峡基地',
                            color: '#1661ab'

                        },  {
                            from: '成都大熊猫繁育研究基地',
                            to: '加拿大多伦多动物园',
                            name: '大毛',
                            year: '2011.12',
                            now: 'G',
                            description: '2020.11.29返回中国',
                            color: '#1661ab'

                        }, {
                            from: '重庆动物园',
                            to: '加拿大多伦多动物园',
                            name: '二顺',
                            year: '2013.3.25',
                            now: 'G',
                            description: '2020.11.29返回中国',
                            color: '#1661ab'

                        }, ]
                }, {
                    type: 'flowmap',
                    name: '至今未归',

                    accessibility: {
                        point: {
                            valueDescriptionFormat:
                                'Origin: {point.options.from:.2f}, ' +
                                'Destination: {point.options.to:.2f}.'
                        },
                        description:
                            'This is a map showing panda '
                    },
                    fillOpacity: 1,
                    width: 0.01,
                    color: '#000000',

                    data: [


                        //至今未归
                        {
                            from: '成都大熊猫繁育研究基地',
                            to: '美国亚特兰大动物园',
                            name: '伦伦',
                            year: '1999.11.5',
                            now: 'W',
                            description: '至今未归',
                            color: '#815c94'

                        }, {
                            from: '成都大熊猫繁育研究基地',
                            to: '美国亚特兰大动物园',
                            name: '洋洋',
                            year: '1999.11.5',
                            now: 'W',
                            description: '至今未归',
                            color: '#815c94'

                        }, {
                            from: '中国大熊猫保护研究中心核桃坪野化培训基地',
                            to: '奥地利美泉宫动物园',
                            name: '阳阳',
                            year: '2003.3.3',
                            now: 'W',
                            description: '至今未归',
                            color: '#815c94'

                        }, {
                            from: '中国大熊猫保护研究中心核桃坪野化培训基地',
                            to: '澳大利亚阿德莱德动物园',
                            name: '网网',
                            year: '2009.11.27',
                            now: 'W',
                            description: '至今未归',
                            color: '#815c94'

                        }, {
                            from: '中国大熊猫保护研究中心核桃坪野化培训基地',
                            to: '澳大利亚阿德莱德动物园',
                            name: '福妮',
                            year: '2009.11.27',
                            now: 'W',
                            description: '至今未归',
                            color: '#815c94'

                        }, {
                            from: '中国大熊猫保护研究中心雅安碧峰峡基地',
                            to: '新加坡河川生态园',
                            name: '沪宝',
                            year: '2012.9.9',
                            now: 'W',
                            description: '至今未归',
                            color: '#815c94'

                        }, {
                            from: '中国大熊猫保护研究中心雅安碧峰峡基地',
                            to: '新加坡河川生态园',
                            name: '凯凯',
                            year: '2012.9.9',
                            now: 'W',
                            description: '至今未归',
                            color: '#815c94'

                        }, {
                            from: '成都大熊猫繁育研究基地',
                            to: '法国博瓦勒动物园',
                            name: '园子',
                            year: '2012.1.15',
                            now: 'W',
                            description: '至今未归',
                            color: '#815c94'

                        }, {
                            from: '成都大熊猫繁育研究基地',
                            to: '法国博瓦勒动物园',
                            name: '欢欢',
                            year: '2012.1.15',
                            now: 'W',
                            description: '至今未归',
                            color: '#815c94'

                        }, {
                            from: '中国大熊猫保护研究中心都江堰青城山基地',
                            to: '比利时天堂动物园',
                            name: '好好',
                            year: '2014.2.22',
                            now: 'W',
                            description: '至今未归',
                            color: '#815c94'

                        }, {
                            from: '中国大熊猫保护研究中心都江堰青城山基地',
                            to: '比利时天堂动物园',
                            name: '星徽',
                            year: '2014.2.22',
                            now: 'W',
                            description: '至今未归',
                            color: '#815c94'

                        }, {
                            from: '中国大熊猫保护研究中心都江堰青城山基地',
                            to: '马来西亚国家动物园大熊猫保护中心',
                            name: '靓靓',
                            year: '2014.5.20',
                            now: 'W',
                            description: '至今未归',
                            color: '#815c94'

                        }, {
                            from: '中国大熊猫保护研究中心都江堰青城山基地',
                            to: '马来西亚国家动物园大熊猫保护中心',
                            name: '福娃',
                            year: '2014.5.20',
                            now: 'W',
                            description: '至今未归',
                            color: '#815c94'

                        }, {
                            from: '中国大熊猫保护研究中心都江堰青城山基地',
                            to: '韩国三星爱宝乐园',
                            name: '华妮',
                            year: '2016.3.3',
                            now: 'W',
                            description: '至今未归',
                            color: '#815c94'

                        }, {
                            from: '中国大熊猫保护研究中心都江堰青城山基地',
                            to: '韩国三星爱宝乐园',
                            name: '园欣',
                            year: '2016.3.3',
                            now: 'W',
                            description: '至今未归',
                            color: '#815c94'

                        }, {
                            from: '中国大熊猫保护研究中心雅安碧峰峡基地',
                            to: '印度尼西亚野生动物园',
                            name: '彩陶',
                            year: '2017.9.28',
                            now: 'W',
                            description: '至今未归',
                            color: '#815c94'

                        }, {
                            from: '中国大熊猫保护研究中心雅安碧峰峡基地',
                            to: '印度尼西亚野生动物园',
                            name: '湖春',
                            year: '2017.9.28',
                            now: 'W',
                            description: '至今未归',
                            color: '#815c94'

                        }, {
                            from: '中国大熊猫保护研究中心雅安碧峰峡基地',
                            to: '荷兰欧维汉动物园',
                            name: '星雅',
                            year: '2017.4.11',
                            now: 'W',
                            description: '至今未归',
                            color: '#815c94'

                        }, {
                            from: '中国大熊猫保护研究中心雅安碧峰峡基地',
                            to: '荷兰欧维汉动物园',
                            name: '武雯',
                            year: '2017.4.11',
                            now: 'W',
                            description: '至今未归',
                            color: '#815c94'

                        }, {
                            from: '成都大熊猫繁育研究基地',
                            to: '德国柏林动物园',
                            name: '娇庆',
                            year: '2017.6.25',
                            now: 'W',
                            description: '至今未归',
                            color: '#815c94'

                        }, {
                            from: '成都大熊猫繁育研究基地',
                            to: '德国柏林动物园',
                            name: '梦梦',
                            year: '2017.6.25',
                            now: 'W',
                            description: '至今未归',
                            color: '#815c94'

                        }, {
                            from: '中国大熊猫保护研究中心雅安碧峰峡基地',
                            to: '芬兰艾赫泰里动物园',
                            name: '华豹',
                            year: '2018.1.18',
                            now: 'W',
                            description: '至今未归',
                            color: '#815c94'

                        }, {
                            from: '中国大熊猫保护研究中心雅安碧峰峡基地',
                            to: '芬兰艾赫泰里动物园',
                            name: '金宝宝',
                            year: '2018.1.18',
                            now: 'W',
                            description: '至今未归',
                            color: '#815c94'

                        }, {
                            from: '成都大熊猫繁育研究基地',
                            to: '丹麦哥本哈根动物园',
                            name: '毛笋',
                            year: '2019.4.4',
                            now: 'W',
                            description: '至今未归',
                            color: '#815c94'

                        }, {
                            from: '成都大熊猫繁育研究基地',
                            to: '丹麦哥本哈根动物园',
                            name: '星二',
                            year: '2019.4.4',
                            now: 'W',
                            description: '至今未归',
                            color: '#815c94'

                        }, {
                            from: '中国大熊猫保护研究中心卧龙基地',
                            to: '俄罗斯莫斯科动物园',
                            name: '丁丁',
                            year: '2019.4.2',
                            now: 'W',
                            description: '至今未归',
                            color: '#815c94'

                        }, {
                            from: '中国大熊猫保护研究中心卧龙基地',
                            to: '俄罗斯莫斯科动物园',
                            name: '如意',
                            year: '2019.4.2',
                            now: 'W',
                            description: '至今未归',
                            color: '#815c94'

                        }, {
                            from: '中国大熊猫保护研究中心卧龙基地',
                            to: '奥地利美泉宫动物园',
                            name: '园园',
                            year: '2019.4.15',
                            now: 'W',
                            description: '至今未归',
                            color: '#815c94'

                        }, {
                            from: '中国大熊猫保护研究中心卧龙基地',
                            to: '卡塔尔熊猫公园',
                            name: '四海',
                            year: '2022.10.19',
                            now: 'W',
                            description: '至今未归',
                            color: '#815c94'

                        }, {
                            from: '中国大熊猫保护研究中心卧龙基地',
                            to: '卡塔尔熊猫公园',
                            name: '京京',
                            year: '2022.10.19',
                            now: 'W',
                            description: '至今未归',
                            color: '#815c94'

                        }, {
                            from: '成都大熊猫繁育研究基地',
                            to: '西班牙马德里动物园',
                            name: '金喜',
                            year: '2022.10.19',
                            now: 'W',
                            description: '至今未归',
                            color: '#815c94'

                        },]
                },
                {
                    type: 'flowmap',
                    name: '繁殖归国',

                    accessibility: {
                        point: {
                            valueDescriptionFormat:
                                'Origin: {point.options.from:.2f}, ' +
                                'Destination: {point.options.to:.2f}.'
                        },
                        description:
                            'This is a map showing flight routes to back '

                    },
                    fillOpacity: 1,
                    width: 0.01,
                    color: '#000000',

                    data: [






                        //繁殖归国
                        {
                            from: '美国圣地亚哥动物园',
                            to: '中国大熊猫保护研究中心卧龙基地',
                            name: '华美',
                            year: '2004.3.13',
                            now: 'G',
                            description: '2004年3月13日入住中国大熊猫保护研究中心卧龙基地',
                            color: '#20a162'

                        }, {
                            from: '美国华盛顿国家动物园',
                            to: '中国保护大熊猫研究中心雅安碧峰峡基地',
                            name: '泰山',
                            year: '2010.2.5',
                            now: 'G',
                            description: '2010年2月5日，回到中国保护大熊猫研究中心雅安碧峰峡基地',
                            color: '#20a162'

                        }, {
                            from: '美国亚特兰大动物园',
                            to: '成都大熊猫繁育研究基地',
                            name: '美兰',
                            year: '2010.2.5',
                            now: 'G',
                            description: '2010年2月5日，回到成都大熊猫繁育研究基地。',
                            color: '#20a162'

                        }, {
                            from: '美国亚特兰大动物园',
                            to: '成都大熊猫繁育研究基地',
                            name: '美兰',
                            year: '2014.5.15',
                            now: 'G',
                            description: '2014.5.15回国',
                            color: '#20a162'

                        }, {
                            from: '西班牙马德里动物园',
                            to: '成都大熊猫繁育研究基地',
                            name: '阿宝',
                            year: '2013.5.18',
                            now: 'G',
                            description: '2013.5.18回国',
                            color: '#20a162'

                        }, {
                            from: '美国圣地亚哥动物园',
                            to: '中国大熊猫保护研究中心都江堰青城山基地',
                            name: '小礼物',
                            year: '2019.5.16',
                            now: 'G',
                            description: '2019.5.16返回中国大熊猫保护研究中心都江堰青城山基地',
                            color: '#20a162'

                        }, {
                            from: '美国华盛顿国家动物园',
                            to: '中国保护大熊猫研究中心都江堰青城山基地',
                            name: '宝宝',
                            year: '2017.2.22',
                            now: 'G',
                            description: '2017.2.22返回中国',
                            color: '#20a162'

                        }, {
                            from: '日本和歌山白浜野生动物园',
                            to: '成都大熊猫繁育基地',
                            name: '桃浜',
                            year: '2023.2.22',
                            now: 'G',
                            description: '2023.2.22返回中国',
                            color: '#20a162'

                        }, {
                            from: '日本和歌山白浜野生动物园',
                            to: '成都大熊猫繁育基地',
                            name: '樱浜',
                            year: '2023.2.22',
                            now: 'G',
                            description: '2023.2.22返回中国',
                            color: '#20a162'

                        }, {
                            from: '加拿大多伦多动物园',
                            to: '成都大熊猫繁育基地',
                            name: '加盼盼',
                            year: '2020.1.12',
                            now: 'G',
                            description: '2020.1.12返回中国',
                            color: '#20a162'

                        }, {
                            from: '加拿大多伦多动物园',
                            to: '成都大熊猫繁育基地',
                            name: '加悦悦',
                            year: '2020.1.12',
                            now: 'G',
                            description: '2020.1.12返回中国',
                            color: '#20a162'

                        }, {
                            from: '马来西亚国家动物园大熊猫保护中心',
                            to: '中国大熊猫保护研究中心都江堰青城山基地',
                            name: '暖暖',
                            year: '2017.11.5',
                            now: 'G',
                            description: '2017.11.5归国',
                            color: '#20a162'

                        }, {
                            from: '美国国家动物园熊猫馆',
                            to: '中国大熊猫保护研究中心的碧峰峡基地',
                            name: '贝贝',
                            year: '2019.11.19',
                            now: 'G',
                            description: '2019.11.19',
                            color: '#20a162'

                        }, {
                            from: '西班牙马德里动物园',
                            to: '成都大熊猫繁育研究基地',
                            name: '竹莉娜',
                            year: '2024.3.1',
                            now: 'G',
                            description: '2024.3.1归国',
                            color: '#20a162'

                        }, {
                            from: '法国博瓦勒动物园',
                            to: '成都大熊猫繁育研究基地',
                            name: '圆梦',
                            year: '2023.7.26',
                            now: 'G',
                            description: '2023.7.26归国',
                            color: '#20a162'

                        }, {
                            from: '日本东京上野动物园',
                            to: '中国大熊猫保护研究中心雅安碧峰峡基地',
                            name: '香香',
                            year: '2023.2.21',
                            now: 'G',
                            description: '2023.2.21归国',
                            color: '#20a162'

                        }, {
                            from: '马来西亚国家动物园大熊猫保护中心',
                            to: '中国大熊猫保护研究中心卧龙基地',
                            name: '谊谊',
                            year: '2023.8.30',
                            now: 'G',
                            description: '2023.8.30归国',
                            color: '#20a162'

                        }, {
                            from: '德国柏林动物园',
                            to: '中国四川省',
                            name: '梦想',
                            year: '2023.12.17',
                            now: 'G',
                            description: '2023.12.17归国',
                            color: '#20a162'

                        }, {
                            from: '德国柏林动物园',
                            to: '中国四川省',
                            name: '梦圆',
                            year: '2023.12.17',
                            now: 'G',
                            description: '2023.12.17归国',
                            color: '#20a162'

                        }, {
                            from: '荷兰欧维汉动物园',
                            to: '中国大熊猫保护研究中心都江堰青城山基地',
                            name: '梵星',
                            year: '2023.9.7',
                            now: 'G',
                            description: '2023.9.7归国',
                            color: '#20a162'

                        }, {
                            from: '韩国三星爱宝乐园',
                            to: '中国大熊猫保护研究中心卧龙基地',
                            name: '福宝',
                            year: '2024.4.3',
                            now: 'G',
                            description: '2024.4.3归国',
                            color: '#20a162'

                        }, {
                            from: '美国华盛顿国家动物园',
                            to: '中国四川省',
                            name: '小奇迹',
                            year: '2023.11.9',
                            now: 'G',
                            description: '2023.11.9归国',
                            color: '#20a162'

                        }, {
                            from: '马来西亚国家动物园大熊猫保护中心',
                            to: '中国四川省',
                            name: '升谊',
                            year: '2023.8.29',
                            now: 'G',
                            description: '2023.8.29归国',
                            color: '#20a162'

                        }, {
                            from: '西班牙马德里动物园',
                            to: '中国四川省',
                            name: '友友',
                            year: '2024.3.1',
                            now: 'G',
                            description: '2024.3.1归国',
                            color: '#20a162'

                        }, {
                            from: '西班牙马德里动物园',
                            to: '中国四川省',
                            name: '久久',
                            year: '2024.3.1',
                            now: 'G',
                            description: '2024.3.1归国',
                            color: '#20a162'

                        }, {
                            from: '新加坡河川生态园',
                            to: '中国四川省',
                            name: '叻叻',
                            year: '2024.1.16',
                            now: 'G',
                            description: '2024.1.16归国',
                            color: '#20a162'

                        },





                    ]
                },

                ],

            });
        } catch (error) {
            console.error('Error initializing map:', error);
        }
    })();
}



