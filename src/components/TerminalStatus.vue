<template>
  <div class="terminalStatus_css">
<!--    terminalStatus页面-->

    <div class="container-flex" tabindex="0" hidefocus="true">
      <div class="box-left">
        <div class="title-box">
          <h6>网段终端总体统计</h6>
        </div>
        <div class="left-top">
          <div class="chart-box" >
            <div class="left-name">
              <div class="txt">
                <h2>上传速率</h2>
              </div>
              <div class="txt">
                <h2>下载速率</h2>
              </div>
              <div class="txt">
                <h2>告警流数</h2>
              </div>
              <div class="txt">
                <h2>本地主机数</h2>
              </div>
              <div class="txt">
                <h2>远程主机数</h2>
              </div>
              <div class="txt">
                <h2>在线设备数</h2>
              </div>
              <div class="txt">
                <h2>离线设备数</h2>
              </div>
              <div class="txt">
                <h2>活跃流数</h2>
              </div>
            </div>
            <div class="left-num">
              <div class="Num">
                <h1>5.70kbit/s</h1>
              </div>
              <div class="Num">
                <h1>4.81kbit/s</h1>
              </div>
              <div class="Num">
                <h1>2</h1>
              </div>
              <div class="Num">
                <h1>41</h1>
              </div>
              <div class="Num">
                <h1>572</h1>
              </div>
              <div class="Num">
                <h1>72</h1>
              </div>
              <div class="Num">
                <h1>10</h1>
              </div>
              <div class="Num">
                <h1>5449</h1>
              </div>
            </div>

          </div>
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
            <div class="center-left-inactive">
<!--              <div id="left-inactive"></div>-->
              <UnActiveTerminal/>
            </div>
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
            <table>
              <thead>
              <tr>
                <th>IP</th>
                <th>位置</th>
                <th>流数</th>
                <th>总发送字节数</th>
                <th>名称</th>
                <th>上次出现时间</th>
                <th>上下行速率</th>
                <th>总字节数</th>
              </tr>
              </thead>
              <tbody>
              <td>192.168.1.2</td>
              <td>Local</td>
              <td>24</td>
              <td>342Bytes</td>
              <td>gateway</td>
              <td>02:40</td>
              <td>2.56Mbit/s</td>
              <td>4.61KB</td>
              </tbody>
              <tbody>
              <td>175.24.84.198</td>
              <td>Local</td>
              <td>40</td>
              <td>312Bytes</td>
              <td>gateway</td>
              <td>03:22</td>
              <td>3.24Mbit/s</td>
              <td>5.21KB</td>
              </tbody>
              <tbody>
              <td>173.24.56.72</td>
              <td>Local</td>
              <td>12</td>
              <td>420Bytes</td>
              <td>gateway</td>
              <td>02:24</td>
              <td>1.12Mbit/s</td>
              <td>3.32KB</td>
              </tbody>
              <tbody>
              <td>178.62.3.29</td>
              <td>Local</td>
              <td>16</td>
              <td>256Bytes</td>
              <td>gateway</td>
              <td>01:36</td>
              <td>2.42Mbit/s</td>
              <td>2.24KB</td>
              </tbody>
              <tbody>
              <td>176.56.32.164</td>
              <td>Local</td>
              <td>25</td>
              <td>326Bytes</td>
              <td>gateway</td>
              <td>02:35</td>
              <td>3.35Mbit/s</td>
              <td>5.27KB</td>
              </tbody>
              <!--                        <tbody>-->
              <!--                            <td>176.64.68.142</td>-->
              <!--                            <td>Local</td>-->
              <!--                            <td>35</td>-->
              <!--                            <td>252Bytes</td>-->
              <!--                            <td>gateway</td>-->
              <!--                            <td>03:28</td>-->
              <!--                            <td>1.27Mbit/s</td>-->
              <!--                            <td>3.45KB</td>-->
              <!--                        </tbody>-->
            </table>
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
import ActiveTerminal from "@/viewCharts/terminalStatus/ActiveTerminal";
import UnActiveTerminal from "@/viewCharts/terminalStatus/UnActiveTerminal";
import TerminalLocationMap from "@/viewCharts/terminalStatus/TerminalLocationMap";
import TopHosts from "@/viewCharts/networkTraffic/TopHosts";
import FlowTimingRecived from "@/viewCharts/terminalStatus/FlowTimingRecived";
import FlowTimingSent from "@/viewCharts/terminalStatus/FlowTimingSent";
export default {
  name: "TerminalStatus",
  components: {FlowTimingSent, FlowTimingRecived, TopHosts, TerminalLocationMap, UnActiveTerminal, ActiveTerminal},
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