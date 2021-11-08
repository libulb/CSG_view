<template>
  <div id="left-bottom-NetworkSegmentDistribution" style="width:100%;height:100%;"></div>
</template>

<script>
export default {
  name: "NetworkSegmentDistribution",
  data() {
    return {
      NetworkSegmentDisChart:null,
      NetworkSegmentDisChartOption:{
          // title: {
          //   text: '流数排名前10主机',
          //   textStyle: {
          //     fontSize: 18,
          //     fontWeight: 'bolder',
          //     color: '#F8F8FF'                             // 主标题文字颜色
          //   },
          // },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'shadow'
            }
          },
          legend: {},
          grid: {
            y2:25,
            x:25,
            y:25,
            x2:25,
            containLabel: true
          },
          xAxis: {
            type: 'value',
            axisLine: {
              lineStyle: {
                type: 'solid',
                color: '#F8F8FF',//左边线的颜色
                width:'1'//坐标线的宽度
              }
            },
            splitLine:{
              show:false
            },
            boundaryGap: [0, 0.01]
          },
          yAxis: {
            type: 'category',
            axisLine: {
              lineStyle: {
                type: 'solid',
                color: '#F8F8FF',//左边线的颜色
                width:'1'//坐标线的宽度
              }
            },
            splitLine:{
              show:false
            },
            data: []
          },
          series: [
            {
              name: '',
              type: 'bar',
              color: 'white',
              data: []
            }
          ]
        }


    };
  },
  mounted(){
    this. NetworkSegmentDisChart = this.$echarts.init(document.getElementById('left-bottom-NetworkSegmentDistribution'));
    this.drawNetworkSegmentDisChart();
  },
  methods:{
    drawNetworkSegmentDisChart(){
      this.getRequest("offlineTerminal/networkSegmentDistribution").then(resp=>{
        if (resp.status != 200) {
          this.$message.error("数据获取失败");
        } else {
          this. NetworkSegmentDisChartOption.yAxis.data=resp.data.data[0];
          this. NetworkSegmentDisChartOption.series[0].data=resp.data.data[1];
          this.NetworkSegmentDisChart.setOption(this. NetworkSegmentDisChartOption);
        }
      })
    }
    }

}
</script>

<style scoped>

</style>