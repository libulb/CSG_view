<template>
  <div class="networkTraffic_css">
<!--    NetworkTraffic页面-->
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
                <h1>{{ upload }}</h1>
                <h1>kbps</h1>
              </div>
              <div class="Num">
                <h1>{{ download }}</h1>
                <h1>kbps</h1>
              </div>
              <div class="Num">
                <h1>{{ warnFlow }}</h1>
              </div>
              <div class="Num">
                <h1>{{ localHost }}</h1>
              </div>
              <div class="Num">
                <h1>{{ remoteHost }}</h1>
              </div>
              <div class="Num">
                <h1>{{ onlineNum }}</h1>
              </div>
              <div class="Num">
                <h1>{{ offlineNum }}</h1>
              </div>
              <div class="Num">
                <h1>{{ activeFlow }}</h1>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div class="box-center">
        <div class="center-top">
          <div class="title-box">
            <h6>网段终端总体统计</h6>
          </div>
          <div class="center-terminal">
<!--            <div id="center-terminal-detail"></div>-->
            <NetworkSegmentTerminal/>
          </div>
        </div>
        <div class="center-mid">
          <div class="title-box">
            <h6>活跃流表</h6>
          </div>
          <div class="center-active">
            <div class="center-active-detail">
              <div class="active-detail-table">
                <table>
                  <thead>
                  <tr>
                    <th>上层应用协议</th>
                    <th>传输层协议</th>
                    <th>客户端</th>
                    <th>服务器端</th>
                    <th>持续时间</th>
                    <th>前向流传输速率</th>
                    <th>后向流传输速率</th>
                    <th>传输总字节数</th>
                  </tr>
                  </thead>
                  <tbody>
                  <td>HTTP</td>
                  <td>TCP</td>
                  <td>192.168.1.2</td>
                  <td>178.62.3.29</td>
                  <td>00:58</td>
                  <td>3.12Mbit/s</td>
                  <td>2.56Mbit/s</td>
                  <td>11.32MB</td>
                  </tbody>
                  <tbody>
                  <td>HTTP</td>
                  <td>TCP</td>
                  <td>175.24.84.198</td>
                  <td>172.17.0.16</td>
                  <td>00:27</td>
                  <td>2.32Mbit/s</td>
                  <td>3.59Mbit/s</td>
                  <td>12.56MB</td>
                  </tbody>
                  <tbody>
                  <td>HTTP</td>
                  <td>TCP</td>
                  <td>173.24.56.72</td>
                  <td>178.35.84.125</td>
                  <td>00:45</td>
                  <td>1.25Mbit/s</td>
                  <td>3.45Mbit/s</td>
                  <td>10.58MB</td>
                  </tbody>
                  <tbody>
                  <td>HTTP</td>
                  <td>TCP</td>
                  <td>192.168.1.2</td>
                  <td>178.62.3.29</td>
                  <td>00:52</td>
                  <td>3.24Mbit/s</td>
                  <td>2.65Mbit/s</td>
                  <td>12.72MB</td>
                  </tbody>
                  <tbody>
                  <td>HTTP</td>
                  <td>TCP</td>
                  <td>176.56.32.164</td>
                  <td>172.78.95.152</td>
                  <td>00:36</td>
                  <td>2.58Mbit/s</td>
                  <td>3.16Mbit/s</td>
                  <td>11.40MB</td>
                  </tbody>
                  <tbody>
                  <td>HTTP</td>
                  <td>TCP</td>
                  <td>175.25.75.168</td>
                  <td>176.64.68.142</td>
                  <td>00:24</td>
                  <td>3.72Mbit/s</td>
                  <td>2.56Mbit/s</td>
                  <td>12.85MB</td>
                  </tbody>

                </table>
              </div>
            </div>
          </div>
        </div>
        <div class="center-bottom">
          <div class="title-box">
            <h6>网段流量时序图</h6>
            <select class='segmentTraffic' >
              <option value="1">网段1</option>
              <option value="2">网段2</option>
              <option value="3">网段3</option>
              <option value="4">网段4</option>
              <option value="5">网段5</option>
              <option value="6">网段6</option>
              <option value="7">网段7</option>
            </select>
          </div>
          <div class="timeInterval">
            <input placeholder="请选择起始时间" class="laydate-icon" id="startTime" value="">
            <input placeholder="请选择结束时间" class="laydate-icon" id="endTime" value="">
          </div>

          <div class="center-flowTiming">
<!--            <div id="center-flowTiming-detail"></div>-->
            <SegmentTraffic/>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script>

import NetworkSegmentTerminal from "@/viewCharts/networkTraffic/NetworkSegmentTerminal";
import SegmentTraffic from "@/viewCharts/networkTraffic/SegmentTraffic";

export default {
  name: "NetworkTraffic",
  components: {NetworkSegmentTerminal,SegmentTraffic},
  mounted() {
    this.getRandomNum();
    this.timer = setInterval(() =>{
      setTimeout(this.getRandomNum,0)
    },1000*1)
  },
  data() {
    return{
      upload:'',
      download:'',
      warnFlow:'',
      localHost:'',
      remoteHost:'',
      onlineNum:'',
      offlineNum:'',
      activeFlow:'',
      timer: null
    }
  },
  methods:{
    getRandomNum(){
      this.upload = (Math.random() * 50 + 20).toFixed(2);
      this.download = (Math.random() * 100 + 20).toFixed(2);
      this.warnFlow = Math.floor(Math.random() * 50 + 20);
      this.localHost = Math.floor(Math.random() * 50 + 10);
      this.remoteHost = Math.floor(Math.random() * 20 + 20);
      this.onlineNum = Math.floor(Math.random() * 10 + 20);
      this.offlineNum = Math.floor(Math.random() * 10 + 10);
      this.activeFlow = Math.floor(Math.random() * 10 + 100);
    }
  },
  beforeDestroy() {
    clearInterval(this.timer);
    this.timer = null;
  }

}
</script>

<style scoped src="../assets/css/networkTraffic.css">
@import "../assets/css/networkTraffic.css";

</style>