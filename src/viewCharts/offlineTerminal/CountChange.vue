<template>
  <div id="left-top-CountChange" style="width:100%;height:100%;"></div>
</template>

<script>
export default {
  name: "CountChange",
  data() {
    return {
      CountChangeChart:null,
      CountChangeChartOption:{
        color: ['#00DDFF', '#37A2FF', '#FF0087', '#FFBF00'],
        title: {
          text: '离\n线\n终\n端\n数\n量\n',
          // subtext: '(kbit/s)',
          textStyle: {
            fontSize: 12,
            fontWeight: 'bolder',
            color: '#F8F8FF'                             // 主标题文字颜色
          },
          subtextStyle: {//副标题的属性
            color: '#F8F8FF',
          },
        },
        tooltip: {
          trigger: 'axis'
        },
        legend: {
          data: ['']
        },
        grid: {
          left: '5.5%',
          right: '4%',
          bottom: '3%',
          width:'92%',  // 调整折线图大小
          height:'100%',
          containLabel: true
        },
        // toolbox: {
        //     feature: {
        //         saveAsImage: {}
        //     }
        // },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          axisLine: {
            lineStyle: {
              type: 'solid',
              color: '#F8F8FF',//左边线的颜色
            }
          },
          // axisLabel: { //坐标轴刻度标签的相关设置
          //   margin: 100, //刻度标签与轴线之间的距离
          // },
          data: []
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
            name: '离线终端',
            type: 'line',
            stack: '总量',
            data: []
          },

        ]
      }

    };
  },
  mounted() {
    this.CountChangeChart = this.$echarts.init(document.getElementById('left-top-CountChange'));
    this.drawCountChange();
  },
  methods:{
    drawCountChange() {
      this.getRequest("offlineTerminal/countChange").then(resp=>{
        if (resp.status != 200) {
          this.$message.error("数据获取失败");
        } else {
          this.CountChangeChartOption.xAxis.data=resp.data.data[0];
          this.CountChangeChartOption.series[0].data=resp.data.data[1];
          this.CountChangeChart.setOption(this.CountChangeChartOption);
        }
      })

    }
  }
}
</script>

<style scoped>

</style>