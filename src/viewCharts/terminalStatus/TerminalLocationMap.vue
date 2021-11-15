<template>
  <div id="terminalLocation" style="width:100%;height:100%;"></div>
</template>

<script>
export default {
  name: "TerminalLocationMap",
  data() {
    return {
      terminalLocationMapChart:null,
     outname:[],
     outvalue :[]

    }
  },
  mounted() {
    this.terminalLocationMapChart = this.$echarts.init(document.getElementById('terminalLocation'));
    this.drawTerminalLocationMap();
  },
  methods:{
    drawTerminalLocationMap() {



      this.getRequest("terminalStatus/terminalLocationMap").then(resp=>{
        if (resp.status != 200) {
          this.$message.error("数据获取失败");
        } else {
          this.outname=resp.data.data[0];
          this.outvalue=resp.data.data[1];

          var outdata=[];


          var max = 6000,
              min = 10;
          var maxSize4Pin = 100,
              minSize4Pin = 20;

          for (var i = 0; i < this.outname.length; i++) {
            outdata.push({
              name: this.outname[i],
              value: this.outvalue[i]
            })
          }

          var geoCoordMap = {};
          /*获取地图数据*/
          var mapFeatures = this.$echarts.getMap('china').geoJson.features;
//  console.log(mapFeatures)
          mapFeatures.forEach(function(v) {
            // 地区名称
            var name = v.properties.name;
            // 地区经纬度
            geoCoordMap[name] = v.properties.cp;

          });
          var convertData = function(outdata) {
            var res = [];
            for (var i = 0; i < outdata.length; i++) {
              var geoCoord = geoCoordMap[outdata[i].name];
              if (geoCoord) {
                res.push({
                  name: outdata[i].name,
                  value: geoCoord.concat(outdata[i].value),
                });
                // console.log(this.outname);
              }
            }
            return res;
          };

          let mapChartOption = {
            backgroundColor: '#10121A',
            title: {
              text: '在线终端地区分布',
              left: '15%',
              top: '3%',
              textStyle: {
                color: '#fff',
                fontSize: 20
              }
            },
            tooltip: {
              show: true,
              formatter: function(params) {
                if (params.value.length > 1) {
                  return '&nbsp;&nbsp;' + params.name + '&nbsp;&nbsp;&nbsp;' + params.value[2];
                } else {
                  return '&nbsp;&nbsp;' + params.name + '&nbsp;&nbsp;&nbsp;' + params.value ;
                }
              },

            },

            geo: {
              map: 'china',
              show: true,
              roam: false,
              label: {
                emphasis: {
                  show: false
                }
              },
              layoutSize: "100%",
              itemStyle: {
                borderColor: new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: '#00F6FF'
                }, {
                  offset: 1,
                  color: '#53D9FF'
                }], false),
                borderWidth: 3,
                shadowColor: 'rgba(10,76,139,1)',
                shadowOffsetY: 0,
                shadowBlur: 60
              }
            },
            series: [{
              type: 'map',
              map: 'china',
              aspectScale: 0.75,
              //zoom:1.1,
              label: {
                show: false,
                emphasis: {
                  show: false,
                }
              },
              itemStyle: {
                areaColor: {
                  x: 0,
                  y: 0,
                  x2: 0,
                  y2: 1,
                  colorStops: [{
                    offset: 0,
                    color: '#073684' // 0% 处的颜色
                  }, {
                    offset: 1,
                    color: '#061E3D' // 100% 处的颜色
                  }],
                },
                borderColor: '#215495',
                borderWidth: 1,
                emphasis: {
                  areaColor: {
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                      offset: 0,
                      color: '#073684' // 0% 处的颜色
                    }, {
                      offset: 1,
                      color: '#061E3D' // 100% 处的颜色
                    }],
                  },
                }
              },
              data: outdata,
            }, {
              type: 'effectScatter',
              coordinateSystem: 'geo',
              rippleEffect: {
                brushType: 'stroke'
              },
              showEffectOn: 'render',
              itemStyle: {
                color: {
                  type: 'radial',
                  x: 0.5,
                  y: 0.5,
                  r: 0.5,
                  colorStops: [{
                    offset: 0,
                    color: 'rgba(5,80,151,0.2)'
                  }, {
                    offset: 0.8,
                    color: 'rgba(5,80,151,0.8)'
                  }, {
                    offset: 1,
                    color: 'rgba(0,108,255,0.7)'
                  }],
                  global: false // 缺省为 false
                },

              },
              label: {
                show: true,
                color: '#fff',
                fontWeight: 'bold',
                position: 'inside',
                formatter: function(para) {
                  return '{cnNum|' + para.data.value[2] + '}'
                },
                rich: {
                  cnNum: {
                    fontSize: 13,
                    color: '#D4EEFF',
                  }
                }
              },
              symbol: 'circle',
              symbolSize: function(val) {
                if (val[2] === 0) {
                  return 0;
                }
                var a = (maxSize4Pin - minSize4Pin) / (max - min);
                var b = maxSize4Pin - a * max;
                return a * val[2] + b * 1.2;
              },
              data: convertData(outdata),
              zlevel: 1,
            }]
          };


          // 使用刚指定的配置项和数据显示图表。
          this.terminalLocationMapChart.setOption(mapChartOption);

        }
      })



    }
  }
}
</script>

<style scoped>

</style>