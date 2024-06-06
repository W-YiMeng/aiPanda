

var myChart = echarts.init(document.getElementById('part020202'),'theme');

var option;

option = {
    grid:{
        top:'15%',
        left:'12%',
        right:'20%'
      
    },
    title: {
        text: "野生大熊猫种群数量及栖息地面积变化",
        textStyle: { // 标题样式  
            fontSize: 16, // 字体大小设置为20  
            // 其他样式属性，如颜色、字体类型等也可以在这里设置  
        }  
        
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '"#26231e"'
            }
        }
    },
    toolbox: {
        feature: {
            dataView: { show: false, readOnly: false },
            magicType: { show: false, type: ['line', 'bar'] },
            restore: { show: false },
            saveAsImage: { show: false }
        }
    },
    legend: {
        top:25,
       
        data: ['总数', '四川省', '陕西省', '甘肃省', '栖息地面积']
    },
    xAxis: [
        {
            type: 'category',
            data: ['全国第一次大熊猫调查', '全国第二次大熊猫调查', '全国第三次大熊猫调查', '全国第四次大熊猫调查'],
            axisPointer: {
                type: 'shadow'
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '野生大熊猫数量',
            min: 0,
            max: 2600,
            interval: 500,
            axisLabel: {
                formatter: '{value} 只'
            }
        },
        {
            type: 'value',
            name: '栖息地面积',
            min: 0,
            max: 3000000,
            interval: 500000,
            axisLabel: {
                formatter: '{value}hm² '
            }
        }
    ],
    series: [
        {
            name: '总数',
            type: 'bar',
            
            tooltip: {
                valueFormatter: function (value) {
                    return value + ' 只';
                }
            },
            data: [
                2459, 1112, 1596, 1864,
            ]
        },
        {
            name: '四川省',
            type: 'bar',
            tooltip: {
                valueFormatter: function (value) {
                    return value + ' 只';
                }
            },
            data: [
                1915, 909, 1206, 1387
            ]
        }, {
            name: '陕西省',
            type: 'bar',
            tooltip: {
                valueFormatter: function (value) {
                    return value + ' 只';
                }
            },
            data: [
                "缺乏数据", 109, 273, 345
            ]
        },
        {
            name: '甘肃省',
            type: 'bar',
            tooltip: {
                valueFormatter: function (value) {
                    return value + ' 只';
                }
            },
            data: [
                "缺乏数据", 96, 117, 132
            ]
        },
        {
            name: '栖息地面积',
            type: 'line',
            yAxisIndex: 1,
            tooltip: {
                valueFormatter: function (value) {
                    return value + ' hm²';
                },
            
            },
            data: ["缺乏数据", 1392152, 2304991, 2576595]
        },
        
    ],
    color: [
        "#43b244",
        "#96c24e",
        "#356b31",
        "#d4fde7",
        "#6dba49",
        "#3c8f3b",
        "#b5e09b",
        "#26231e"
      ],
};

option && myChart.setOption(option);




