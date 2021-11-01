<template>
  <div class="homeWrap">
    <el-container class="home-container">
      <el-header class="home-header" height="70px">
        <div class="topTitle">
          <div class="left nav">
            <ul style="margin-right: 2%;margin-left: 1%;">
              <li class="nav_active"><a href="/flow"><i class="nav_1"></i>流量分析</a></li>
              <li><a href="/suricata"><i class="nav_2"></i>攻击检测</a> </li>
              <li><a href='/networkTraffic'><i class="nav_6"></i>网段流量</a> </li>
            </ul>
          </div>
          <div class="center-topTitle">
            <h1>XXXX监控系统平台</h1>
          </div>
          <div class="right nav">
            <ul style="margin-left: 2%;">
              <li><a href='/terminalStatus'><i class="nav_4"></i>终端状态</a> </li>
              <li><a href="/offlineTerminal"><i class="nav_5"></i>离线状态</a> </li>
            </ul>
          </div>
        </div>
      </el-header>

      <el-main class="home-main">
        <router-view/>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "Home",
  data(){
    return{

    }
  },
  mounted() {
    // this.getRequest("/flow/flowTimeTrend").then(resp=>{
    //   console.log(resp.data.data);
    // })
  }

}
</script>

<style scoped>
@import "../assets/css/header.css";

.homeWrap {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.home-container {
  height: 100%;
}

.home-header {
  background-color: #10121A;
}

.home-main {
  background-color: #10121A;
  height: 80%;
}

</style>