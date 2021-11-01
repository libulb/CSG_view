<template>
  <div id="left-mid-CompanyCondition" style="width:100%;height:100%;"></div>
</template>

<script>
export default {
  name: "CompanyCondition",
  data() {
    return {

    };
  },
  mounted() {
    this.drawCountChange();
  },
  methods:{
    drawCountChange() {
      var CountChangeChart = this.$echarts.init(document.getElementById('left-mid-CompanyCondition'));
      CountChangeChart.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['百度', '阿里巴巴', '腾讯', '京东', '美团', '字节跳动', '华为'],
            axisTick: {
              alignWithLabel: true
            },
            axisLine: {
              lineStyle: {
                type: 'solid',
                color: '#F8F8FF',//左边线的颜色
              }
            },
          }
        ],
        yAxis: [
          {
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
          }
        ],
        series: [
          {
            name: '离线终端',
            type: 'bar',
            barWidth: '60%',
            data: [10, 52, 200, 334, 390, 330, 220]
          }
        ]
      })
    }
  }
}
</script>

<style scoped>

</style>