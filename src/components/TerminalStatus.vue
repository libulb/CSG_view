<template>
  <div class="terminalStatus_css">
<!--    terminalStatus页面-->

    <div class="container-flex" tabindex="0" hidefocus="true">
      <div class="box-left">
        <div class="title-box">
          <h6>网段终端总体统计</h6>
        </div>
        <div class="left-top">
          <NetworkSegmentTerminalTotal/>

        </div>
<!--        <div class="title-box">-->
<!--          <h6>终端类型统计</h6>-->
<!--        </div>-->
        <!--            <div class="center-left-devices">-->
        <!--                <div id="devicesTypes"></div>-->
        <!--            </div>-->
      </div>
      <div class="box-center">
        <div class="center-top">
          <div class="center-left">
            <div class="center-left-active">
<!--              <div id="left-active"></div>-->
              <ActiveTerminal/>
            </div>
<!--            <div class="center-left-inactive">-->
<!--&lt;!&ndash;              <div id="left-inactive"></div>&ndash;&gt;-->
<!--              <UnActiveTerminal/>-->
<!--            </div>-->
          </div>
          <div class="center-center">
<!--            <div id="terminalLocation"></div>-->
            <TerminalLocationMap/>
          </div>
          <div class="center-right">

            <div class="center-right-hosts">
<!--              <div id="topHosts"></div>-->
              <TopHosts/>
            </div>
          </div>

        </div>
        <div class="center-mid">
          <div class="title-box">
            <h6>终端通信情况表</h6>
          </div>
          <div class="center-active">
            <terminalCommunication/>
          </div>
        </div>
        <div class="center-bottom">
          <div class="title-box">
            <h6>终端流量时序图</h6>
            <select class='terminalFlow' >
              <option value="1">终端1</option>
              <option value="2">终端2</option>
              <option value="3">终端3</option>
              <option value="4">终端4</option>
              <option value="5">终端5</option>
              <option value="6">终端6</option>
              <option value="7">终端7</option>
            </select>
          </div>
<!--          <div class="timeInterval">-->
<!--&lt;!&ndash;            <input placeholder="请选择起始时间" class="laydate-icon" id="startTime" value="">&ndash;&gt;-->
<!--&lt;!&ndash;            <input placeholder="请选择结束时间" class="laydate-icon" id="endTime" value="">&ndash;&gt;-->
<!--            <div class="block">-->
<!--              <el-date-picker-->
<!--                  v-model="value1"-->
<!--                  type="datetimerange"-->
<!--                  start-placeholder="开始日期"-->
<!--                  end-placeholder="结束日期">-->
<!--              </el-date-picker>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div id="center-flowTiming-sent"></div>-->
<!--          <div id="center-flowTiming-recived"></div>-->
          <FlowTimingRecived/>
          <FlowTimingSent/>
        </div>

      </div>

    </div>
  </div>
</template>

<script>
import NetworkSegmentTerminalTotal from "../viewCharts/networkTraffic/NetworkSegmentTerminalTotal";
import ActiveTerminal from "@/viewCharts/terminalStatus/ActiveTerminal";
import TerminalLocationMap from "@/viewCharts/terminalStatus/TerminalLocationMap";
import TopHosts from "@/viewCharts/terminalStatus/TopHosts";
import terminalCommunication from "@/viewCharts/terminalStatus/terminalCommunication";
import FlowTimingRecived from "@/viewCharts/terminalStatus/FlowTimingRecived";
import FlowTimingSent from "@/viewCharts/terminalStatus/FlowTimingSent";
export default {
  name: "TerminalStatus",
  components: {NetworkSegmentTerminalTotal,FlowTimingSent, FlowTimingRecived, TopHosts, TerminalLocationMap, ActiveTerminal,terminalCommunication},
  data() {
    return {
      value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
    }
  }
}
</script>

<style scoped src="../assets/css/terminalStatus.css">
@import "../assets/css/terminalStatus.css";
</style>