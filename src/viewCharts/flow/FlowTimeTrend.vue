<template>
  <div id="flowTimeTrend" style="width:100%;height:95%;margin-top: 5%"></div>
</template>

<script>
export default {
  name: "FlowTimeTrend",
  data() {
    return {

    };
  },
  mounted() {
    this.drawFlowTimeTrendRank();
  },
  methods:{
    drawFlowTimeTrendRank() {
      var equipmentFlowRankChart = this.$echarts.init(document.getElementById('flowTimeTrend'));
      equipmentFlowRankChart.setOption({
        tooltip: {},
        xAxis: {
          data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      });
    }
  }
}
</script>

<style scoped>

</style>