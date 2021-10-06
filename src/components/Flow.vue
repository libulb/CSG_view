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
          <select class="selectId" >
            <option value="1">1 min</option>
            <option value="2">2 min</option>
            <option value="3">3 min</option>
            <option value="4">4 min</option>
            <option value="5">5 min</option>
            <option value="6">6 min</option>
            <option value="7">7 min</option>
          </select>
        </div>
        <div class="chart-box">
          <FlowHotpoint/>
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
import FlowHotpoint from "@/viewCharts/flow/FlowHotpoint";
import EquipmentFlowRank from "@/viewCharts/flow/EquipmentFlowRank";
import FlowTimeTrend from "@/viewCharts/flow/FlowTimeTrend";
import FlowMap from "@/viewCharts/flow/FlowMap";
export default {
  name: "Flow",
  components: {FlowMap, FlowTimeTrend, EquipmentFlowRank, FlowHotpoint, QueryAssets},
  mounted() {

  },
  data() {
    return{

    }
  },
  methods:{

  }

}
</script>

<style scoped src="../assets/css/flow.css">
@import '../assets/css/flow.css';

</style>