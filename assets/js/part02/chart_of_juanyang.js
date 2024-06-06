


var myChart = echarts.init(document.getElementById('part020302'),'theme');

var option;

option = {
  grid:{
    top:10,
},
  title: {
    text: '国内圈养大熊猫分布图',
    subtext:'数据来源于全国第四次大熊猫调查报告',
    left: 'center'
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    
    top: 'bottom',
    textStyle: {  
     
      fontSize: 12, // 字体大小  
      // ... 其他样式属性  
  },  
  },
  color: [
    "#83962f",
    "#96c02f",
    "#d0d13d",
    "#c5d366",
    "#87c47b",
    "#90af82",
      "#94c1b6",
      "#6b969a",
      "#dcc672",
      "#e0ba19",
      "#c69519",
      "#647129",
     
    
    
  ],
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: '45%',
      data: [
        { value: 193, name: '中国保护大熊猫研究中心 ' },
        { value: 128, name: '成都大熊猫繁育研究基地' },
        { value: 21, name: '陕西省珍稀野生动物抢救饲养研究中心' },
        { value: 12, name: '北京动物园' },
        { value: 8, name: '重庆动物园' },
        { value: 2, name: '兰州动物园' },
        { value: 1, name: '海峡大熊猫交流研究中心(福州)' },
        { value: 1, name: '上海动物园' },
        { value: 4, name: '澳门环石排湾郊野公园' },
        { value: 2, name: '台北市立动物园' },

      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
};

option && myChart.setOption(option);