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
      </div>
      <div class="box-center">
        <div class="center-top">
          <div class="center-left">
            <div class="center-left-active">
<!--              <div id="left-active"></div>-->
              <ActiveTerminal/>
            </div>
          </div>
          <div class="center-center">
            <TerminalLocationMap/>
          </div>
          <div class="center-right">

            <div class="center-right-hosts">
<!--              <div id="topHosts"></div>-->
              <AlertIP/>
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
import terminalCommunication from "@/viewCharts/terminalStatus/terminalCommunication";
import FlowTimingRecived from "@/viewCharts/terminalStatus/FlowTimingRecived";
import FlowTimingSent from "@/viewCharts/terminalStatus/FlowTimingSent";
import AlertIP from "../viewCharts/terminalStatus/AlertIP";
export default {
  name: "TerminalStatus",
  components: {NetworkSegmentTerminalTotal,FlowTimingSent, FlowTimingRecived, AlertIP, TerminalLocationMap, ActiveTerminal,terminalCommunication},
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
