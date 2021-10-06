<template>
  <div id="equipmentFlowRank" style="width:100%;height:95%;"></div>
</template>

<script>
export default {
  name: "EquipmentFlowRank",
  data() {
    return {

    };
  },
  mounted() {
    this.drawEquipmentFlowRank();
  },
  methods:{
    drawEquipmentFlowRank() {
      var equipmentFlowRankChart = this.$echarts.init(document.getElementById('equipmentFlowRank'));
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