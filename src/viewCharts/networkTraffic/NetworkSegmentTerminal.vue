<template>
  <div id="center-terminal-detail" style="width:100%;height:100%;"></div>
</template>

<script>
export default {
  name: "NetworkSegmentTerminal",
  data() {
    return {
      networkSegmentTerminalChart: null,
      networkSegmentTerminalOption:{
        tooltip: {
          trigger: 'item',
          triggerOn: 'mousemove'
        },
        series: {
          type: 'sankey',
          layout: 'none',
          left:'3%',
          right:'7%',
//        textStyle: {
//        color = "#fff"
//         },
          lineStyle: {
            color: 'source',
            curveness: 0.5
          },
          emphasis: {
            focus: 'adjacency'
          },
          data: [{
            name: '192.168.128.1',
            label:{
              color:'#fff'
            },
            itemStyle: {
              color: '#28cad8'
            }
          }, {
            name: 'Localhost',
            label:{
              color:'#fff'
            },
            itemStyle: {
              color: '#fc853e'
            }
          }, {
            name: '173.24.56.72',
            label:{
              color:'#fff'
            },
            itemStyle: {
              color: '#9564bf'
            }
          },{
            name: '192.168.1.2',
            label:{
              color:'#fff'
            },
            itemStyle: {
              color: '#bd407e'
            }
          }, {
            name: '192.168.1.4',
            label:{
              color:'#fff'
            },
            itemStyle: {
              color: '#37A2FF'
            }
          }, {
            name: '178.62.3.29',
            label:{
              color:'#fff'
            },
            itemStyle: {
              color: '#FFBF00'
            }
          }, {
            name: '178.35.84.125',
            label:{
              color:'#fff'
            },
            itemStyle: {
              color: '#FFBF00'
            }
          }, {
            name: '178.62.5.84',
            label:{
              color:'#fff'
            },
            itemStyle: {
              color: '#80FFA5'
            }
          }, {
            name: '175.24.84.198',
            label:{
              color:'#fff'
            },
            itemStyle: {
              color: '#80FFA5'
            }
          }, {
            name: '175.24.9.126',
            label:{
              color:'#fff'
            },
            itemStyle: {
              color: '#CAFF70'
            }
          }],
          links: []
        }
      }
    };
  },
  mounted() {
    this.networkSegmentTerminalChart = this.$echarts.init(document.getElementById('center-terminal-detail'));
    this.drawNetworkSegmentTerminal();
  },
  methods:{
    drawNetworkSegmentTerminal() {
      this.getRequest("/networkTraffic/networkSegmentTerminal").then(resp=>{
        if (resp.status != 200) {
          this.$message.error("数据获取失败");
        } else {
          this.networkSegmentTerminalOption.series.links = resp.data.data;
          this.networkSegmentTerminalChart.setOption(this.networkSegmentTerminalOption);
        }
      })
    }
  }
}
</script>

<style scoped>

</style>