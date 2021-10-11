<template>
  <div class="flow_css">
    <div class="box-left">

      <div class="left-top">
        <div class="title-box">
          <h6>被访问资产比例</h6>
        </div>
        <div class="chart-box">
          <QueryAssets/>
        </div>
      </div>

      <div class="left-bottom">
        <div class="title-box">
          <h6>流量高发区域</h6>
          <select class="selectId" v-model="selectNum" v-on:change="NumSelect">
            <option v-for="item in selectOptions"
                    :label="item.label"
                    :value="item.value">
            </option>
          </select>
        </div>
        <div class="chart-box">
          <div id="flowHotpoint" style="width:95%;height:90%;margin-top: 10%;"></div>
        </div>
      </div>
    </div>

    <div class="box-center">
      <div class="center-top">
        <div class="chart-box">
          <FlowMap/>
        </div>
      </div>
      <div class="center-bottom">
        <div class="title-box">
          <h6>流量地区分布图</h6>
        </div>
        <div class="chart-box">

        </div>
      </div>
    </div>

    <div class="box-right">
      <div class="right-top">
        <div class="title-box">
          <h6>设备流量总数排行</h6>
        </div>
        <div class="chart-box">
          <EquipmentFlowRank/>
        </div>
      </div>

      <div class="right-bottom">
        <div class="title-box">
          <h6>设备流量时间趋势图</h6>
        </div>
        <div class="chart-box">
          <FlowTimeTrend/>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import QueryAssets from "@/viewCharts/flow/QueryAssets";
import EquipmentFlowRank from "@/viewCharts/flow/EquipmentFlowRank";
import FlowTimeTrend from "@/viewCharts/flow/FlowTimeTrend";
import FlowMap from "@/viewCharts/flow/FlowMap";
export default {
  name: "Flow",
  components: {FlowMap, FlowTimeTrend, EquipmentFlowRank, QueryAssets},
  mounted() {
    this.flowHotpointChart = this.$echarts.init(document.getElementById('flowHotpoint'));
    this.getFlowHotpointData();
  },
  data() {
    return{
      flowHotpointOption:null,
      flowHotpointData: [],
      flowHotpointChart: null,
      selectOptions: [{
        value: 1,
        label: '1min'
      }, {
        value: 2,
        label: '2min'
      }, {
        value: 3,
        label: '3min'
      }, {
        value: 4,
        label: '4min'
      }, {
        value: 5,
        label: '5min'
      },{
        value: 6,
        label: '6min'
      },{
        value: 7,
        label: '7min'
      }],
      selectNum: 1
    }
  },
  methods:{
    NumSelect() {
      this.drawFlowHotpoint(this.flowHotpointData.data.data[this.selectNum-1]);
    },
    getFlowHotpointData() {
      // this.$http.get("/flowHotpoint").then(resp=>{
      //   if (resp.status != 200) {
      //     this.$message.error("数据获取失败")
      //   } else {
      //     this.$message.success("数据获取成功");
      //     this.drawFlowHotpoint(resp.data.data[0]);
      //     this.flowHotpointData = resp;
      //   }
      // })
    },
    drawFlowHotpoint(data) {
      var colorList = [[
        '#ff7f50', '#87cefa', '#da70d6', '#32cd32', '#6495ed',
        '#ff69b4', '#ba55d3', '#cd5c5c', '#ffa500', '#40e0d0',
        '#1e90ff', '#ff6347', '#7b68ee', '#d0648a', '#ffd700',
        '#6b8e23', '#4ea397', '#3cb371', '#b8860b', '#7bd9a5'
      ],
        [
          '#ff7f50', '#87cefa', '#da70d6', '#32cd32', '#6495ed',
          '#ff69b4', '#ba55d3', '#cd5c5c', '#ffa500', '#40e0d0',
          '#1e90ff', '#ff6347', '#7b68ee', '#00fa9a', '#ffd700',
          '#6b8e23', '#ff00ff', '#3cb371', '#b8860b', '#30e0e0'
        ],
        [
          '#929fff', '#9de0ff', '#ffa897', '#af87fe', '#7dc3fe',
          '#bb60b2', '#433e7c', '#f47a75', '#009db2', '#024b51',
          '#0780cf', '#765005', '#e75840', '#26ccd8', '#3685fe',
          '#9977ef', '#f5616f', '#f7b13f', '#f9e264', '#50c48f'
        ]][2];
      this.flowHotpointOption = {
        backgroundColor: '#10121A',
        tooltip: {},
        animationEasingUpdate: 'bounceIn',
        color: ['#fff', '#fff', '#fff'],
        series: [{
          type: 'graph',
          layout: 'force',
          force: {
            repulsion: 300,
            edgeLength: 10
          },
          roam: true,
          label: {
            show: true,
            color: '#fff'
          },
          data: [{
            "name": data[0][0],
            "value": data[0][1],
            "symbolSize": 148,
            "draggable": true,
            "itemStyle": {
              "shadowBlur": 100,
              "color": colorList[0]
            }
          }, {
            "name": data[1][0],
            "value": data[1][1],
            "symbolSize": 137,
            "draggable": true,
            "itemStyle": {
              "shadowBlur": 100,
              "color": colorList[2]
            }
          }, {
            "name": data[2][0],
            "value": data[2][1],
            "symbolSize": 121,
            "draggable": true,
            "itemStyle": {
              "shadowBlur": 100,
              "color": colorList[4]
            }
          }, {
            "name": data[3][0],
            "value": data[3][1],
            "symbolSize": 109,
            "draggable": true,
            "itemStyle": {
              "shadowBlur": 100,
              "color": colorList[5]
            }
          }, {
            "name": data[4][0],
            "value": data[4][1],
            "symbolSize": 88,
            "draggable": true,
            "itemStyle": {
              "shadowBlur": 100,
              "color": colorList[8]
            }
          }, {
            "name": data[5][0],
            "value": data[5][1],
            "symbolSize": 77,
            "draggable": true,
            "itemStyle": {
              "shadowBlur": 100,
              "color": colorList[11]
            }
          }, {
            "name": data[6][0],
            "value": data[6][1],
            "symbolSize": 64,
            "draggable": true,
            "itemStyle": {
              "shadowBlur": 100,
              "color": colorList[12]
            }
          }, {
            "name": data[7][0],
            "value": data[7][1],
            "symbolSize": 55,
            "draggable": true,
            "itemStyle": {
              "shadowBlur": 100,
              "color": colorList[15]
            }
          }, {
            "name": data[8][0],
            "value": data[8][1],
            "symbolSize": 48,
            "draggable": true,
            "itemStyle": {
              "shadowBlur": 100,
              "color": colorList[17]
            }
          }, {
            "name": data[9][0],
            "value": data[9][1],
            "symbolSize": 40,
            "draggable": true,
            "itemStyle": {
              "shadowBlur": 100,
              "color": colorList[19]
            }
          }]
        }]
      };
      this.flowHotpointChart.setOption(this.flowHotpointOption);
    }
  }

}
</script>

<style scoped src="../assets/css/flow.css">
@import '../assets/css/flow.css';

</style>