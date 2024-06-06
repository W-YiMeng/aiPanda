// 基于准备好的 DOM，初始化 echarts 实例
var myChart = echarts.init(document.getElementById('rent-history'));

// 示例数据
var data_history = [
    { year: 1941, country: '美国', quantity: 2 },
    { year: 1972, country: '美国', quantity: 2 },
    { year: 1996, country: '美国', quantity: 2 },
    { year: 2000, country: '美国', quantity: 2 },
    { year: 2003, country: '美国', quantity: 2 },
    { year: 1946, country: '英国', quantity: 1 },
    { year: 1974, country: '英国', quantity: 2 },
    { year: 2011, country: '英国', quantity: 2 },
    { year: 1972, country: '日本', quantity: 2 },
    { year: 1980, country: '日本', quantity: 1 },
    { year: 1982, country: '日本', quantity: 1 },
    { year: 1994, country: '日本', quantity: 2 },
    { year: 2017, country: '日本', quantity: 1 },
    { year: 1973, country: '法国', quantity: 2 },
    { year: 2012, country: '法国', quantity: 2 },
    { year: 2017, country: '法国', quantity: 1 },
    { year: 1980, country: '德国', quantity: 2 },
    { year: 2017, country: '德国', quantity: 1 },
    { year: 1975, country: '墨西哥', quantity: 2 },
    { year: 1978, country: '西班牙', quantity: 2 },
    { year: 2007, country: '西班牙', quantity: 2 },
    { year: 1958, country: '奥地利', quantity: 1 },
    { year: 2013, country: '奥地利', quantity: 2 },
    { year: 2009, country: '澳大利亚', quantity: 2 },
    { year: 1957, country: '苏联', quantity: 2 },
    { year: 1959, country: '苏联', quantity: 1 },
    { year: 1965, country: '朝鲜', quantity: 2 },
    { year: 1970, country: '朝鲜', quantity: 2 },
    { year: 1979, country: '朝鲜', quantity: 1 },
];

// 提取所有年份和国家，并排序年份
var years = Array.from(new Set(data_history.map(item => item.year))).sort((a, b) => a - b);
var countries = Array.from(new Set(data_history.map(item => item.country)));

// 构造散点图数据
var scatterData = data_history.map(item => {
    return [item.year, item.country, item.quantity];
});

// 指定图表的配置项和数据
var option = {
    title: {
        text: '租赁（赠予）大熊猫历史数据分布图',
        subtext: '注：其他国家历史上共获得16只大熊猫，不在此图中显示',
        left: 'center'
    },
    tooltip: {
        trigger: 'item',
        formatter: function (params) {
            var year = years[params.value[0]];
            var country = countries[params.value[1]];
            var quantity = params.value[2];
            return `年份: ${year}<br>国家: ${country}<br>数量: ${quantity}`;
        }
    },
    xAxis: {
        type: 'category',
        data: years,
        name: '年份',
    },
    yAxis: {
        type: 'category',
        data: countries,
        name: '国家',
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
        name: 'Pandas',
        type: 'scatter',
        data: scatterData.map(item => [years.indexOf(item[0]), countries.indexOf(item[1]), item[2]]),
        symbolSize: function (data) {
            return data[2] * 20; // 根据数量调整点的大小
        },
        height:150,
    }]
};

// 使用刚指定的配置项和数据显示图表
myChart.setOption(option);