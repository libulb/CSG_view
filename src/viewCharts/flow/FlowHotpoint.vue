<template>
  <div id="flowHotpoint" style="width:100%;height:95%;margin-top: 10px;"></div>
</template>

<script>
export default {
  name: "FlowHotpoint",
  data() {
    return {

    };
  },
  mounted() {
    this.drawFlowHotpoint();
  },
  methods:{
    drawFlowHotpoint() {
      var flowHotpointChart = this.$echarts.init(document.getElementById('flowHotpoint'));
      flowHotpointChart.setOption({
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