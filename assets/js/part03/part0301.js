var myChart = echarts.init(document.getElementById('part0301'),'LLL');

var option;

myChart.showLoading();
myChart.hideLoading();

myChart.setOption(
  (option = {
    tooltip: {
      trigger: 'item',
      triggerOn: 'mousemove',
      formatter: function (params) {
        return  params.name +'<br/>'+'占地面积： '+params.value + ' (M²)';
    },
   
    },

    title: {
      text: "大熊猫伴生植物占地面积图",
      textStyle: { // 标题样式  
          fontSize: 16, // 字体大小设置为20  
          // 其他样式属性，如颜色、字体类型等也可以在这里设置  
      }  
      
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
        type: 'sankey',

        data: [
          {
            name: '针叶林'
          },
          {
            name: '阔叶林'
          },
          {
            name: '灌丛'
          },
          {
            name: '草甸'
          },
          {
            name: '栽培植被'
          },
          {
            name: '栽培作物'
          },
          {
            name: '寒温性针叶林'
          },
          {
            name: '温性针叶林'
          },
          {
            name: '温性针阔叶混交林'
          },
          {
            name: '暖性针叶林'
          },
          {
            name: '落叶阔叶林'
          },
          {
            name: '常绿、落叶阔叶混交林'
          },
          {
            name: '常绿翧叶林'
          },
          {
            name: '常绿阔叶林'
          },
          {
            name: '硬叶常绿阔叶林'
          },
          {
            name: '温性竹林'
          },
          {
            name: '暖性竹林'
          },
          {
            name: '常绿灌丛'
          },
          {
            name: '落叶灌丛'
          },
          {
            name: '灌草丛'
          },
          {
            name: '典型草甸'
          },
          {
            name: '栽培森林植被'
          },
          {
            name: '栽培竹林'
          },
          {
            name: '栽培相关作物'
          },
          {
            name: '秦岭'
          },
          {
            name: '岷山'
          },
          {
            name: '邛崃山'
          },
          {
            name: '大相岭'
          },
          {
            name: '小相岭'
          },
          {
            name: '凉山'
          },
          {
            name: '四川'
          },
          {
            name: '陕西'
          },
          {
            name: '甘肃'
          }
        ],
        links: [
          {
            source: '针叶林',
            target: '寒温性针叶林',
            value: 691077
          },
          {
            source: '针叶林',
            target: '温性针叶林',
            value: 61035
          },
          {
            source: '针叶林',
            target: '温性针阔叶混交林',
            value: 169372
          },
          {
            source: '针叶林',
            target: '暖性针叶林',
            value: 22564
          },
          {
            source: '阔叶林',
            target: '落叶阔叶林',
            value: 745350
          },
          {
            source: '阔叶林',
            target: '常绿、落叶阔叶混交林',
            value: 29453
          },
          {
            source: '阔叶林',
            target: '常绿翧叶林',
            value: 174271
          },
          {
            source: '阔叶林',
            target: '常绿阔叶林',
            value: 21406
          },
          {
            source: '阔叶林',
            target: '硬叶常绿阔叶林',
            value: 946
          },
          {
            source: '阔叶林',
            target: '温性竹林',
            value: 41834
          },
          {
            source: '阔叶林',
            target: '暖性竹林',
            value: 478
          },
          {
            source: '灌丛',
            target: '常绿灌丛',
            value: 187
          },
          {
            source: '灌丛',
            target: '落叶灌丛',
            value: 286066
          },
          {
            source: '灌丛',
            target: '灌草丛',
            value: 61738
          },
          {
            source: '草甸',
            target: '典型草甸',
            value: 30170
          },
          {
            source: '栽培植被',
            target: '栽培森林植被',
            value: 195981.362
          },
          {
            source: '栽培植被',
            target: '栽培竹林',
            value: 2632
          },
          {
            source: '栽培作物',
            target: '栽培相关作物',
            value: 16603
          },
          {
            source: '寒温性针叶林',
            target: '四川',
            value: 593382
          },
          {
            source: '温性针叶林',
            target: '四川',
            value: 21593
          },
          {
            source: '温性针阔叶混交林',
            target: '四川',
            value: 73334
          },
          {
            source: '暖性针叶林',
            target: '四川',
            value: 22538
          },
          {
            source: '落叶阔叶林',
            target: '四川',
            value: 480257
          },
          {
            source: '常绿、落叶阔叶混交林',
            target: '四川',
            value: 26570
          },
          {
            source: '常绿翧叶林',
            target: '四川',
            value: 174271
          },
          {
            source: '常绿阔叶林',
            target: '四川',
            value: 21402
          },
          {
            source: '硬叶常绿阔叶林',
            target: '四川',
            value: 946
          },
          {
            source: '温性竹林',
            target: '四川',
            value: 40758
          },
          {
            source: '暖性竹林',
            target: '四川',
            value: 4378
          },
          {
            source: '常绿灌丛',
            target: '四川',
            value: 187
          },
          {
            source: '落叶灌丛',
            target: '四川',
            value: 260476
          },
          {
            source: '灌草丛',
            target: '四川',
            value: 61673
          },
          {
            source: '典型草甸',
            target: '四川',
            value: 28474
          },
          {
            source: '栽培森林植被',
            target: '四川',
            value: 199302
          },
          {
            source: '栽培竹林',
            target: '四川',
            value: 2632
          },
          {
            source: '栽培相关作物',
            target: '四川',
            value: 15071
          },
          {
            source: '寒温性针叶林',
            target: '陕西',
            value: 20926
          },
          {
            source: '温性针叶林',
            target: '陕西',
            value: 33358
          },
          {
            source: '温性针阔叶混交林',
            target: '陕西',
            value: 95777
          },
          {
            source: '暖性针叶林',
            target: '陕西',
            value: 27
          },
          {
            source: '落叶阔叶林',
            target: '陕西',
            value: 194949
          },
          {
            source: '常绿、落叶阔叶混交林',
            target: '陕西',
            value: 2883
          },
          {
            source: '常绿翧叶林',
            target: '陕西',
            value: 0
          },
          {
            source: '常绿阔叶林',
            target: '陕西',
            value: 0
          },
          {
            source: '硬叶常绿阔叶林',
            target: '陕西',
            value: 0
          },
          {
            source: '温性竹林',
            target: '陕西',
            value: 354
          },
          {
            source: '暖性竹林',
            target: '陕西',
            value: 0
          },
          {
            source: '常绿灌丛',
            target: '陕西',
            value: 0
          },
          {
            source: '落叶灌丛',
            target: '陕西',
            value: 4983
          },
          {
            source: '灌草丛',
            target: '陕西',
            value: 65
          },
          {
            source: '典型草甸',
            target: '陕西',
            value: 133
          },
          {
            source: '栽培森林植被',
            target: '陕西',
            value: 2036
          },
          {
            source: '栽培竹林',
            target: '陕西',
            value: 0
          },
          {
            source: '栽培相关作物',
            target: '陕西',
            value: 1532
          },
          {
            source: '寒温性针叶林',
            target: '甘肃',
            value: 76769
          },
          {
            source: '温性针叶林',
            target: '甘肃',
            value: 6084
          },
          {
            source: '温性针阔叶混交林',
            target: '甘肃',
            value: 230
          },
          {
            source: '暖性针叶林',
            target: '甘肃',
            value: 0
          },
          {
            source: '落叶阔叶林',
            target: '甘肃',
            value: 70144
          },
          {
            source: '常绿、落叶阔叶混交林',
            target: '甘肃',
            value: 0
          },
          {
            source: '常绿翧叶林',
            target: '甘肃',
            value: 0
          },
          {
            source: '常绿阔叶林',
            target: '甘肃',
            value: 0
          },
          {
            source: '硬叶常绿阔叶林',
            target: '甘肃',
            value: 0
          },
          {
            source: '温性竹林',
            target: '甘肃',
            value: 722
          },
          {
            source: '暖性竹林',
            target: '甘肃',
            value: 0
          },
          {
            source: '常绿灌丛',
            target: '甘肃',
            value: 0
          },
          {
            source: '落叶灌丛',
            target: '甘肃',
            value: 20608
          },
          {
            source: '灌草丛',
            target: '甘肃',
            value: 0
          },
          {
            source: '典型草甸',
            target: '甘肃',
            value: 1563
          },
          {
            source: '栽培森林植被',
            target: '甘肃',
            value: 0
          },
          {
            source: '栽培竹林',
            target: '甘肃',
            value: 0
          },
          {
            source: '栽培相关作物',
            target: '甘肃',
            value: 0
          },

          {
            source: '四川',
            target: '凉山',
            value: 302368
          },
          {
            source: '四川',
            target: '邛崃山',
            value: 688831.27
          },
          {
            source: '四川',
            target: '大相岭',
            value: 122180
          },
          {
            source: '四川',
            target: '小相岭',
            value: 116079.29
          },
          {
            source: '四川',
            target: '岷山',
            value: 668254
          },
          {
            source: '甘肃',
            target: '岷山',
            value: 164813
          },
          {
            source: '甘肃',
            target: '秦岭',
            value: 11307
          },
          {
            source: '陕西',
            target: '秦岭',
            value: 357023
          }
        ],

        emphasis: {
          focus: 'adjacency'
        },
        lineStyle: {
          color: 'gradient',
          curveness: 0.4
        },
        height:600,
        width:1000

      }
    ]
  })
);

option && myChart.setOption(option);
