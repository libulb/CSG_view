<template>
  <div>
    <div id="china_map" style="width:100%;height:600%;"></div>
  </div>

</template>



<!--<script type="text/javascript" src="./rem.js"></script>-->
<script type="text/javascript" src="../../plugins/jquery-3.3.1.min.js"></script>
<script type="text/javascript" src="../../plugins/echarts.min.js"></script>
<script type="text/javascript" src="./china.js"></script>

<!--<script type="text/javascript" src="./testmap.js"></script>-->
<script type="text/javascript">
$('document').ready(function () {
  $("body").css('visibility', 'visible');
})
</script>

<script>
import '@/assets/js/flow/china.js';
// import "@/viewCharts/flow/jquery-3.3.1.min";
// import "@/viewCharts/flow/echarts.min";
import "@/plugins/jquery-3.3.1.min";
import "@/plugins/echarts.min";

export default {
  name: "DynamicChinaMap",
  data() {
    return {
      mapChart: null,
      uploadedDataURL: null,//各个省里面的多点坐标
      geoCoordMap: {
        "杭州": [119.5313, 29.8773],
        "苏州": [118.8062, 31.9208],
        '上海': [121.4648, 31.2891],
        "天津": [117.4219, 39.4189],
        '深圳': [114.072026, 22.552194],
        "成都": [103.9526, 30.7617],
        "郑州": [113.4668, 34.6234],
        "宁波": [121.640618, 29.86206],
        "合肥": [117.29, 32.0581],
        "重庆": [108.384366, 30.439702],
        "广州": [113.12244, 23.009505],
        "大连": [123.1238, 42.1216],
        "青岛": [117.1582, 36.8701],
        '北京': [116.4551, 40.2539],
        '义乌': [120.067209, 29.346921],
        '东莞': [113.764742, 23.02039],
        "长沙": [113.0823, 28.2568],
        "贵阳": [106.6992, 26.7682],
        '珠海': [113.556111, 22.250876],
        '威海': [122.109148, 37.516889],
        '南昌': [115.892151, 28.676493],
        '西安': [109.948024, 34.263161],
        '南京': [118.767413, 32.041544],
        "海口": [110.35, 20.02],
        "厦门": [118.1, 24.46],
        '沈阳': [123.429096, 41.796767],
        '无锡': [120.301663, 31.574729],
        // "哈尔滨": [126.63, 45.75],
        // '长春': [125.3245,43.886841],
        "呼和浩特": [111.65, 40.82],
      },
      d1: {
        "杭州": 10,
        "苏州": 2,
        '上海': 21,
        "天津": 4,
        '深圳': 7,
        "郑州": 7,
        "成都": 5,
        "宁波": 2,
        "合肥": 1,
        "重庆": 3,
        "广州": 19,
        "大连": 1,
        "青岛": 2,
        '北京': 16,
        '义乌': 2,
        '东莞': 1,
        "长沙": 3,
        "贵阳": 0,
        '珠海': 0,
        '威海': 0,
        '南昌': 1,
        '西安': 2,
        '南京': 6,
        '海口': 0,
        '厦门': 3,
        '沈阳': 3,
        '无锡': 0,
        '呼和浩特': 0,
      },
      d2: {
        "杭州": 131,
        "苏州": 51,
        '上海': 114,
        "天津": 58,
        '深圳': 104,
        "郑州": 66,
        "成都": 35,
        "宁波": 59,
        "合肥": 28,
        "重庆": 68,
        "广州": 120,
        "大连": 24,
        "青岛": 58,
        '北京': 118,
        '义乌': 36,
        '东莞': 46,
        "长沙": 34,
        "贵阳": 8,
        '珠海': 11,
        '威海': 7,
        '南昌': 24,
        '西安': 35,
        '南京': 42,
        '海口': 6,
        '厦门': 59,
        '沈阳': 18,
        '无锡': 21,
        '呼和浩特': 7,
      },
      d3: {
        "杭州": 311,
        "苏州": 174,
        '上海': 308,
        "天津": 192,
        '深圳': 304,
        "郑州": 194,
        "成都": 179,
        "宁波": 191,
        "合肥": 130,
        "重庆": 189,
        "广州": 345,
        "大连": 139,
        "青岛": 182,
        '北京': 336,
        '义乌': 136,
        '东莞': 159,
        "长沙": 151,
        "贵阳": 81,
        '珠海': 96,
        '威海': 80,
        '南昌': 112,
        '西安': 163,
        '南京': 155,
        '海口': 59,
        '厦门': 170,
        '沈阳': 102,
        '无锡': 110,
        '呼和浩特': 54,
      },

      d4: {
        "杭州": 296,
        "苏州": 184,
        '上海': 332,
        "天津": 136,
        '深圳': 327,
        "郑州": 208,
        "成都": 235,
        "宁波": 200,
        "合肥": 142,
        "重庆": 191,
        "广州": 327,
        "大连": 154,
        "青岛": 168,
        '北京': 358,
        '义乌': 133,
        '东莞': 166,
        "长沙": 159,
        "贵阳": 81,
        '珠海': 86,
        '威海': 58,
        '南昌': 118,
        '西安': 180,
        '南京': 170,
        '海口': 78,
        '厦门': 160,
        '沈阳': 114,
        '无锡': 119,
        '呼和浩特': 80,
      },
      d5: {
        "杭州": 334,
        "苏州": 185,
        '上海': 313,
        "天津": 181,
        '深圳': 379,
        "郑州": 231,
        "成都": 215,
        "宁波": 183,
        "合肥": 145,
        "重庆": 205,
        "广州": 344,
        "大连": 166,
        "青岛": 170,
        '北京': 351,
        '义乌': 150,
        '东莞': 176,
        "长沙": 174,
        "贵阳": 89,
        '珠海': 91,
        '威海': 61,
        '南昌': 135,
        '西安': 181,
        '南京': 183,
        '海口': 80,
        '厦门': 167,
        '沈阳': 130,
        '无锡': 121,
        '呼和浩特': 89,
      },
      d6: {
        "杭州": 365,
        "苏州": 213,
        '上海': 352,
        "天津": 187,
        '深圳': 430,
        "郑州": 251,
        "成都": 226,
        "宁波": 196,
        "合肥": 165,
        "重庆": 234,
        "广州": 364,
        "大连": 151,
        "青岛": 193,
        '北京': 358,
        '义乌': 162,
        '东莞': 197,
        "长沙": 212,
        "贵阳": 94,
        '珠海': 108,
        '威海': 70,
        '南昌': 167,
        '西安': 188,
        '南京': 203,
        '海口': 102,
        '厦门': 187,
        '沈阳': 148,
        '无锡': 133,
        '呼和浩特': 88,
      },
      d7: {
        "杭州": 352,
        "苏州": 204,
        '上海': 331,
        "天津": 168,
        '深圳': 421,
        "郑州": 271,
        "成都": 231,
        "宁波": 199,
        "合肥": 172,
        "重庆": 141,
        "广州": 365,
        "大连": 132,
        "青岛": 205,
        '北京': 239,
        '义乌': 147,
        '东莞': 193,
        "长沙": 213,
        "贵阳": 105,
        '珠海': 99,
        '威海': 76,
        '南昌': 163,
        '西安': 184,
        '南京': 193,
        '海口': 109,
        '厦门': 170,
        '沈阳': 147,
        '无锡': 138,
        '呼和浩特': 81,
      },

      colors: [
        ["#1DE9B6", "#F46E36", "#04B9FF", "#5DBD32", "#FFC809", "#FB95D5", "#BDA29A", "#6E7074", "#546570", "#C4CCD3"],
        ["#37A2DA", "#67E0E3", "#32C5E9", "#9FE6B8", "#FFDB5C", "#FF9F7F", "#FB7293", "#E062AE", "#E690D1", "#E7BCF3",
          "#9D96F5", "#8378EA", "#8378EA"
        ],
        ["#DD6B66", "#759AA0", "#E69D87", "#8DC1A9", "#EA7E53", "#EEDD78", "#73A373", "#73B9BC", "#7289AB", "#91CA8C",
          "#F49F42"
        ]
      ],

      colorIndex: 0


    };
  },
  mounted() {
    this.mapChart = this.$echarts.init(document.getElementById("china_map"));
    this.uploadedDataURL = "data-1528971808162-BkOXf61WX.json";
    this. drawDynamicChinaMap();


  },
  methods: {
    drawDynamicChinaMap() {
      this.getRequest("/flow/dynamicChinaMap").then(resp => {
        if (resp.status != 200) {
          this.$message.error("数据获取失败");
        } else {
          // console.log(resp);

          var day = ["1", "2", "3", "4", "5", "6", "7"];
          var mapData = [
            [],
            [],
            [],
            [],
            [],
            [],
            []
          ];

          /*柱子Y名称*/
          var categoryData = [];
          var barData = [];

          for (var key in this.geoCoordMap) {
            mapData[0].push({
              "day": '1',
              "name": key,
              "value": this.d1[key],
            });
            mapData[1].push({
              "day": '2',
              "name": key,
              "value": this.d2[key],
            });
            mapData[2].push({
              "day": '3',
              "name": key,
              "value": this.d3[key],
            });
            mapData[3].push({
              "day": '4',
              "name": key,
              "value": this.d4[key],
            });
            mapData[4].push({
              "day": '5',
              "name": key,
              "value": this.d5[key],
            });
            mapData[5].push({
              "day": '6',
              "name": key,
              "value": this.d6[key],
            });
            mapData[6].push({
              "day": '7',
              "name": key,
              "value": this.d7[key],
            });
          }

          for (var i = 0; i < mapData.length; i++) {
            mapData[i].sort(function sortNumber(a, b) {
              return a.value - b.value
            });
            barData.push([]);
            categoryData.push([]);
            for (var j = 0; j < mapData[i].length; j++) {
              barData[i].push(mapData[i][j].value);
              categoryData[i].push(mapData[i][j].name);
            }
          }


          this.getRequest("/flow/data-1528971808162-BkOXf61WX").then(resp => {
            if (resp.status != 200) {
              this.$message.error("数据获取失败");
            } else {

              var mapChart = this.mapChart;
              var geoCoordMap = this.geoCoordMap;
              var colors = this.colors;
              var colorIndex = this.colorIndex;
              // console.log(resp);
              // console.log(mapData);

              var Features = resp.data.data[0].features;
              // var mapFeatures = this.$echarts.getMap('china').geoJson.features;
              // this.$echarts.registerMap('china', mapFeatures);
              // echarts.registerMap('china', geoJson);

              var regeoCoordMap = {};
              /*获取地图数据*/
              var mapFeatures = this.$echarts.getMap('china').geoJson.features;
//  console.log(mapFeatures)
              mapFeatures.forEach(function(v) {
                // 地区名称
                var name = v.properties.name;
                // 地区经纬度
                regeoCoordMap[name] = v.properties.cp;

              });

              var convertData = function(data) {
                var res = [];
                for (var i = 0; i < data.length; i++) {
                  var geoCoord = geoCoordMap[data[i].name];
                  if (geoCoord) {
                    res.push({
                      name: data[i].name,
                      // value: geoCoord.concat(data[i].value)
                      value: geoCoord.concat(data[i].value)
                    });
                  }
                }
                return res;
              };



              var optionXyMap01 = {
                timeline: {
                  data: day,
                  axisType: 'category',
                  autoPlay: true,
                  playInterval: 3000,
                  left: '10%',
                  right: '10%',
                  bottom: '3%',
                  width: '80%',
                  label: {
                    normal: {
                      textStyle: {
                        color: '#ddd'
                      }
                    },
                    emphasis: {
                      textStyle: {
                        color: '#fff'
                      }
                    }
                  },
                  symbolSize: 10,
                  lineStyle: {
                    color: '#555'
                  },
                  checkpointStyle: {
                    borderColor: '#777',
                    borderWidth: 2
                  },
                  controlStyle: {
                    showNextBtn: true,
                    showPrevBtn: true,
                    normal: {
                      color: '#666',
                      borderColor: '#666'
                    },
                    emphasis: {
                      color: '#aaa',
                      borderColor: '#aaa'
                    }
                  },

                },
                baseOption: {
                  animation: true,
                  animationDuration: 1000,
                  animationEasing: 'cubicInOut',
                  animationDurationUpdate: 1000,
                  animationEasingUpdate: 'cubicInOut',
                  grid: {
                    right: '1%',
                    top: '15%',
                    bottom: '15%',
                    width: '20%'
                  },
                  tooltip: {
                    trigger: 'axis', // hover触发器
                    axisPointer: { // 坐标轴指示器，坐标轴触发有效
                      type: 'shadow', // 默认为直线，可选为：'line' | 'shadow'
                      shadowStyle: {
                        color: 'rgba(150,150,150,0.1)' //hover颜色
                      }
                    }
                  },
                  geo: {
                    show: true,
                    map: 'china',
                    roam: true,
                    zoom: 1,
                    center: [113.83531246, 34.0267395887],
                    label: {
                      emphasis: {
                        show: false
                      }
                    },
                    itemStyle: {
                      normal: {
                        borderColor: 'rgba(50, 180, 186, 1)',
                        borderWidth: 1,
                        areaColor: {
                          type: 'radial',
                          x: 0.5,
                          y: 0.5,
                          r: 0.8,
                          colorStops: [{
                            offset: 0,
                            color: 'rgba(15, 60, 60, 0)' // 0% 处的颜色
                          }, {
                            offset: 1,
                            color: 'rgba(15, 60, 60, .5)' // 100% 处的颜色
                          }],
                          globalCoord: false // 缺省为 false
                        },
                        shadowColor: 'rgba(128, 217, 248, 1)',
                        // shadowColor: 'rgba(255, 255, 255, 1)',
                        shadowOffsetX: -2,
                        shadowOffsetY: 2,
                        shadowBlur: 10
                      },
                      emphasis: {
                        areaColor: 'rgba(100,220,226,0.8)',
                        borderWidth: 0
                      }
                    }
                  },
                },
                options: []

              };

              for (var n = 0; n < day.length; n++) {
                optionXyMap01.options.push({
                  backgroundColor: '#031116',
                  title: [{
                    text: '流量分布(7min内)',
                    left: '10%',
                    top: '3%',
                    textStyle: {
                      color: '#fff',
                      fontSize: 25
                    }
                  },
                    {
                      id: 'statistic',
                      text: day[n] + "min前",
                      left: '80%',
                      top: '2%',
                      textStyle: {
                        color: '#fff',
                        fontSize: 20
                      }
                    }
                  ],
                  xAxis: {
                    type: 'value',
                    scale: true,
                    position: 'top',
                    min: 0,
                    boundaryGap: false,
                    splitLine: {
                      show: false
                    },
                    axisLine: {
                      show: false
                    },
                    axisTick: {
                      show: false
                    },
                    axisLabel: {
                      margin: 2,
                      textStyle: {
                        color: '#aaa',
                        fontSize: 8
                      }
                    },
                  },
                  yAxis: {
                    type: 'category',
                    //  name: 'TOP 20',
                    nameGap: 16,
                    axisLine: {
                      show: true,
                      lineStyle: {
                        color: '#ddd'
                      }
                    },
                    axisTick: {
                      show: false,
                      lineStyle: {
                        color: '#ddd'
                      }
                    },
                    axisLabel: {
                      interval: 0,
                      textStyle: {
                        color: '#ddd',
                        fontSize: 7
                      }
                    },
                    data: categoryData[n]
                  },

                  series: [
                    //地图
                    {
                      type: 'map',
                      map: 'china',
                      geoIndex: 0,
                      aspectScale: 0.75, //长宽比
                      showLegendSymbol: false, // 存在legend时显示
                      label: {
                        normal: {
                          show: false
                        },
                        emphasis: {
                          show: false,
                          textStyle: {
                            color: '#fff'
                          }
                        }
                      },
                      roam: true,
                      itemStyle: {
                        normal: {
                          areaColor: '#031525',
                          borderColor: '#FFFFFF',
                        },
                        emphasis: {
                          areaColor: '#2B91B7'
                        }
                      },
                      animation: false,
                      data: mapData
                    },
                    //地图中闪烁的点
                    {
                      //  name: 'Top 5',
                      type: 'effectScatter',
                      coordinateSystem: 'geo',
                      data: convertData(mapData[n].sort(function (a, b) {
                        return b.value - a.value;
                      }).slice(0, 20)),
                      symbolSize: function (val) {
                        return val[2] / 10;
                      },
                      showEffectOn: 'render',
                      rippleEffect: {
                        brushType: 'stroke'
                      },
                      hoverAnimation: true,
                      label: {
                        normal: {
                          formatter: '{b}',
                          position: 'right',
                          show: true
                        }
                      },
                      itemStyle: {
                        normal: {
                          color:colors[colorIndex][n],
                          shadowBlur: 10,
                          shadowColor: colors[colorIndex][n]
                        }
                      },
                      zlevel: 1
                    },
                    //柱状图
                    {
                      zlevel: 1.5,
                      type: 'bar',
                      symbol: 'none',
                      itemStyle: {
                        normal: {
                          color: colors[colorIndex][n]
                        }
                      },
                      data: barData[n]
                    }
                  ]
                })
              }

              mapChart.setOption(optionXyMap01);
              console.log(optionXyMap01.options.series);

            }
          })

        }
      })
    }
  }
}
</script>

<style scoped>

</style>
