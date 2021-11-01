<template>
  <div id="flowTimeTrend" style="width:100%;height:95%;margin-top: 5%"></div>
</template>

<script>
export default {
  name: "FlowTimeTrend",
  data() {
    return {
      equipmentFlowRankChart:null,
      equipmentFlowRankOption:{
        xAxis: {
          type: 'category',
          axisLabel:{
            color: 'white'
          },
          boundaryGap: false
        },
        yAxis: {
          type: 'value',
          splitLine: {
            show: false
          },
          axisLabel:{
            color: 'white'
          },
          boundaryGap: [0, '30%']
        },
        visualMap: {
          type: 'piecewise',
          show: false,
          dimension: 0,
          seriesIndex: 0,
          pieces: [{
            gt: 1,
            lt: 3,
            color: 'rgba(0, 0, 180, 0.4)'
          }, {
            gt: 5,
            lt: 7,
            color: 'rgba(0, 0, 180, 0.4)'
          }]
        },
        series: [
          {
            type: 'line',
            smooth: 0.6,
            symbol: 'none',
            lineStyle: {
              color: '#5470C6',
              width: 1.5
            },
            markLine: {
              symbol: ['none', 'none'],
              label: {show: false},
              data: [
                {xAxis: 1},
                {xAxis: 3},
                {xAxis: 5},
                {xAxis: 7}
              ]
            },
            areaStyle: {},
            data: []
          }
        ]
      }
    };
  },
  mounted() {
    this.equipmentFlowRankChart = this.$echarts.init(document.getElementById('flowTimeTrend'));
    this.drawFlowTimeTrendRank();
  },
  methods:{
    drawFlowTimeTrendRank() {
      // this.equipmentFlowRankChart.setOption(this.equipmentFlowRankOption);

      this.getRequest("/flow/flowTimeTrend").then(resp=>{
        if (resp.status != 200) {
          this.$message.error("数据获取失败");
        } else {
          this.equipmentFlowRankOption.series[0].data = resp.data.data;
          this.equipmentFlowRankChart.setOption(this.equipmentFlowRankOption);
        }
      })
    }
  }
}
</script>

<style scoped>

</style>