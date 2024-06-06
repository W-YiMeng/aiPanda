// 初始化 ECharts 实例
var myChart = echarts.init(document.getElementById('conservation-change'));

// 指定图表的配置项和数据
var option = {
    title: {
        text: '全国自然保护区面积变化'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['四川', '甘肃', '陕西']
    },
    xAxis: {
        type: 'category',
        data: ['1967', '1972', '1977', '1982', '1987', '1992', '1997', '2002', '2007']
    },
    yAxis: {
        type: 'value'
    },
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
    series: [
        {
            name: '四川',
            type: 'line',
            data: [271938, 271938, 310977, 549580, 604680, 604680, 1508797, 1953870, 2171879]
        },
        {
            name: '陕西',
            type: 'line',
            data: [56325, 56325, 56325, 85565, 141958, 141958, 184475, 282076, 350047]
        },
        {
            name: '甘肃',
            type: 'line',
            data: [0, 0, 0, 223671, 223671, 233711, 233711, 308655, 705527]
        }
    ]
};

// 使用刚指定的配置项和数据显示图表
myChart.setOption(option);