<template>
  <div id="queryAssets" style="width:100%;height:95%;margin-top: 5%"></div>
</template>

<script>
export default {
  name: "QueryAssets",
  data() {
    return{
      queryAssetChart: null,
      queryAssetOption:{
        tooltip: {
          trigger: 'item'
        },
        legend: {
          top: '8%',
          left: 'left',
          orient: 'vertical',
          textStyle:{
            color:'#FFF8DC',
            fontSize:12
          }
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['55%', '70%'],
            center:['70%', '50%'],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: '10',
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: []
          }
        ]
      }
    }
  },
  mounted() {
    this.queryAssetChart = this.$echarts.init(document.getElementById('queryAssets'));
    this.drawQueryAssets();
  },
  methods:{
    drawQueryAssets() {
      this.$http.get("/flow/queryAssets").then(resp=>{
        if (resp.status != 200) {
          this.$message.error("数据获取失败");
        } else {
          this.queryAssetOption.series[0].data = resp.data.data;
          this.queryAssetChart.setOption(this.queryAssetOption);
        }
      })
    },
  }
}
</script>

<style scoped>

</style>