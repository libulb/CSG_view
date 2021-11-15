<template>
  <div id="topHosts" style="width:100%;height:100%;"></div>
</template>

<script>
export default {
  name: "TopHosts",
  data() {
    return {
      topHostsChart:null,
      topHostsChartOption:{
        title: {
          text: '流数排名前10主机',
          textStyle: {
            fontSize: 18,
            fontWeight: 'bolder',
            color: '#F8F8FF'                             // 主标题文字颜色
          },
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {},
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
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
  mounted() {
    this.topHostsChart= this.$echarts.init(document.getElementById('topHosts'));
    this.drawTopHosts();
  },
  methods:{
    drawTopHosts() {

      this.getRequest("terminalStatus/topHosts").then(resp=>{
        if (resp.status != 200) {
          this.$message.error("数据获取失败");
        } else {
          this.topHostsChartOption.yAxis.data=resp.data.data[0];
          this.topHostsChartOption.series[0].data=resp.data.data[1];
          this.topHostsChart.setOption(this.topHostsChartOption);
        }
      })
    }
  }
}
</script>

<style scoped>

</style>