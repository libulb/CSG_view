<template>
  <div id="left-bottom-LineChart" style="width:100%;height:100%;"></div>
</template>

<script>
export default {
  name: "LineChart",
  data() {
    return {

    };
  },
  mounted() {
    this.drawCountChange();
  },
  methods:{
    drawCountChange() {
      var CountChangeChart = this.$echarts.init(document.getElementById('left-bottom-LineChart'));
      CountChangeChart.setOption({
        tooltip: {
          trigger: 'axis'
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['8:00', '8:30', '9:00', '9:30', '10:00', '10:30', '11:00'],
          axisLine: {
            lineStyle: {
              type: 'solid',
              color: '#F8F8FF',//左边线的颜色
            }
          },
        },
        yAxis: {
          type: 'value',
          axisLine: {
            lineStyle: {
              type: 'solid',
              color: '#F8F8FF',//左边线的颜色
              width:'2'//坐标线的宽度
            }
          },
          splitLine:{
            show:false
          }
        },
        series: [
          {
            name: 'Email',
            type: 'line',
            stack: 'Total',
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: 'Union Ads',
            type: 'line',
            stack: 'Total',
            data: [220, 182, 191, 234, 290, 330, 310]
          },
          {
            name: 'Video Ads',
            type: 'line',
            stack: 'Total',
            data: [150, 232, 201, 154, 190, 330, 410]
          }
        ]
      })
    }
  }
}
</script>

<style scoped>

</style>