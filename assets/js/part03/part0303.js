
var myChart = echarts.init(document.getElementById('part0303'), 'LL');

var option;

// prettier-ignore
const hours = [
  '巴山木竹属', '方竹属', '刚竹属', '箭竹属', '鐮序竹属', '筇竹属', '玉山竹属',
  '箬竹属'
];
// prettier-ignore
const days = [
  '陕西', '四川', '甘肃'
];
// prettier-ignore
const data = [[0, 0, 102108], [0, 1, 32], [0, 2, 230], [0, 3, 208476], [0, 4, 0], [0, 5, 0], [0, 6, 0], [0, 7, 3961],
[1, 0, 436631], [1, 1, 126864], [1, 2, 49861], [1, 3, 819869], [1, 4, 1942], [1, 5, 75764], [1, 6, 376169], [1, 7, 0],
[2, 0, 1521], [2, 1, 0], [2, 2, 259], [2, 3, 126838], [2, 4, 0], [2, 5, 0], [2, 6, 0], [2, 7, 0]]
  .map(function (item) {
    return [item[1], item[0], item[2] || '-'];
  });
option = {
  tooltip: {
    position: 'top',
    formatter: function (params) {
      return params.name + '<br/>' + '占地面积： ' + params.value + ' (M²)';
    },
   
  },
  title: {
    text: "大熊猫主食竹分布-占地面积图",
   left:'center',
    textStyle: { // 标题样式  
      fontSize: 16, // 字体大小设置为20  

      // 其他样式属性，如颜色、字体类型等也可以在这里设置  
    }

  },
  grid: {
    height: '40%',
    top: '8%'
  },
  xAxis: {
    type: 'category',
    data: hours,
    splitArea: {
      show: true
    },
    axisLabel: {
      interval: 0,
      rotate: 70
    }
  },
  yAxis: {
    type: 'category',
    data: days,
    splitArea: {
      show: true
    }
  },
  visualMap: {
    min: 0,
    max: 819869,
    calculable: true,
    orient: 'horizontal',
    left: 'center',
    bottom: '20%',
    color: [
      "#2a3523",
      "#6dba49",
      "#b5e09b",

    ]
  },
  series: [
    {
      name: 'Punch Card',
      type: 'heatmap',
      data: data,
      label: {
        show: true
      },
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      },

    }
  ]
};

option && myChart.setOption(option);
