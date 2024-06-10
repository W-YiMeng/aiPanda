// 初始化 ECharts 实例
var myChart = echarts.init(document.getElementById('conservation-area'));

// 指定图表的配置项和数据
var option = {
    title: {
        text: '中国大熊猫保护区面积分布图',
        subtext: '单位：公顷',
        left: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: '{b}'
    },
    visualMap: {
        min: 300000,
        max: 2200000,
        left: 'left',
        top: 'bottom',
        text: ['大', '小'],
        inRange: {
            color: ['#356b31', '#d4fde7']
        },
        show: true
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
    series: [{
        name: '中国地图',
        type: 'map',
        mapType: 'china', // 使用中国地图
        roam: true, // 开启缩放和平移
        label: {
            show: true
        },
        data: [
            { name: '四川', value: 2171879 },
            { name: '甘肃', value: 705527 },
            { name: '陕西', value: 350047 }
        ]
    }]
};

// 使用刚指定的配置项和数据显示图表
myChart.setOption(option);