<template>
  <div id="equipmentFlowRank" style="width:100%;height:95%;"></div>
</template>

<script>
export default {
  name: "EquipmentFlowRank",
  data() {
    return {
      equipmentFlowRankChart: null,
      equipmentFlowRankOption: {
        tooltip: {},
        xAxis: {
          data: []
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: []
        }]
      },

    };
  },
  mounted() {
    this.equipmentFlowRankChart = this.$echarts.init(document.getElementById('equipmentFlowRank'));
    this.drawEquipmentFlowRank();
  },
  methods:{
    drawEquipmentFlowRank() {
      this.getRequest("/flow/equipmentFlowRank").then(resp=>{
        if (resp.status != 200) {
          this.$message.error("数据获取失败");
        } else {
          this.equipmentFlowRankOption.xAxis.data = resp.data.data[0];
          this.equipmentFlowRankOption.series[0].data = resp.data.data[1];

          this.equipmentFlowRankChart.setOption(this.equipmentFlowRankOption);
        }
      })
    }
  }
}
</script>

<style scoped>

</style>