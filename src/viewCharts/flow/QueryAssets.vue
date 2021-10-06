<template>
  <div id="queryAssets" style="width:100%;height:99%;"></div>
</template>

<script>
export default {
  name: "QueryAssets",
  data() {
    return{

    }
  },
  mounted() {
    this.drawQueryAssets();
  },
  methods:{
    drawQueryAssets() {
      var queryAssetChart = this.$echarts.init(document.getElementById('queryAssets'));
      queryAssetChart.setOption({
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