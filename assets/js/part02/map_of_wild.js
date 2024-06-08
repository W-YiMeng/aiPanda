function initializeMap02(containerId, topoJsonUrl) {
    // 使用async/await来处理fetch请求和异步操作  
    (async function () {
        try {
            const response = await fetch(topoJsonUrl);
            if (!response.ok) {
                throw new Error('Failed to fetch topo JSON');
            }
            const topology = await response.json();

            // Prepare demo data. The data is joined to map using value of 'hc-key'
            // property by default. See API docs for 'joinBy' for more info on linking
            // data and map.
            const data020201 =
                [{
                    'hc-key': 'cn-sc',
                    value: 2027244,
                    num: 1387


                }, {
                    'hc-key': 'cn-sa',
                    value: 360587,
                    num: 345


                }, {
                    'hc-key': 'cn-gs',
                    value: 188764,
                    num: 132


                }
                ];


            // Create the chart
            Highcharts.mapChart('part020201', {
                chart: {
                    map: topology,
                   
                },

                title: {
                    text: '野生大熊猫栖息地分布图',
                    style: {
                        fontSize: '16px' // 字体大小  
                    }
                },

                mapNavigation: {
                    enabled: true,
                    buttonOptions: {
                        verticalAlign: 'bottom'
                    }
                },

                colorAxis: {
                    min: 10,
                    stops: [
                        [0, '#A4E2C6'],
                        [0.15, '#789262'],

                        [0.75, '#057748']
                    ]


                },
                plotOptions: {

                    mapbubble: {
                        tooltip: {
                            pointFormat: "1"
                        }
                    }

                },

                tooltip: {
                    backgroundColor: 'none',
                    borderWidth: 0,
                    shadow: false,
                    useHTML: true,
                    padding: 0,

                    pointFormat: '<span class="f32"><span class="flag {point.properties.hc-key}">' +
                        '</span></span> {point.name}<br>' + '<span style="font-size:15px">数量:{point.num}只</span>' +
                        '<span style="font-size:15px">栖息地面积:{point.value}/km²</span>',
                    positioner: function () {
                        return { x: 100, y: 250 };
                    }
                },

                series: [{
                    data: data020201,
                    name: '野生大熊猫栖息地面积和数量',
                    states: {
                        hover: {
                            color: '#11DA55'
                        },

                    },
                    dataLabels: {
                        enabled: true,
                        formatter: function () {
                            if (this.point.name == '四川省' || this.point.name == '陕西省' || this.point.name == '甘肃省') {
                                return this.point.name;
                            } else {
                                return null;
                            }
                        }
                    }

                }]
            });

        } catch (error) {
            console.error('Error initializing map:', error);
        }
    })();
}


