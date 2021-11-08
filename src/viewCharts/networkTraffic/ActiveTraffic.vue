<template>
<div>

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
        <tr>
          <td>{{tableValue[0][0]}}</td>
          <td>{{tableValue[0][1]}}</td>
          <td>{{tableValue[0][2]}}</td>
          <td>{{tableValue[0][3]}}</td>
          <td>{{tableValue[0][4]}}</td>
          <td>{{tableValue[0][5]+"Mbit/s"}}</td>
          <td>{{tableValue[0][6]+"Mbit/s"}}</td>
          <td>{{tableValue[0][7]+"MB"}}</td>
        </tr>
        <tr>
        <td>{{tableValue[1][0]}}</td>
        <td>{{tableValue[1][1]}}</td>
        <td>{{tableValue[1][2]}}</td>
        <td>{{tableValue[1][3]}}</td>
        <td>{{tableValue[1][4]}}</td>
        <td>{{tableValue[1][5]+"Mbit/s"}}</td>
        <td>{{tableValue[1][6]+"Mbit/s"}}</td>
        <td>{{tableValue[1][7]+"MB"}}</td>
        </tr>
        <tr>
          <td>{{tableValue[2][0]}}</td>
          <td>{{tableValue[2][1]}}</td>
          <td>{{tableValue[2][2]}}</td>
          <td>{{tableValue[2][3]}}</td>
          <td>{{tableValue[2][4]}}</td>
          <td>{{tableValue[2][5]+"Mbit/s"}}</td>
          <td>{{tableValue[2][6]+"Mbit/s"}}</td>
          <td>{{tableValue[2][7]+"MB"}}</td>
        </tr>
        <tr>
          <td>{{tableValue[3][0]}}</td>
          <td>{{tableValue[3][1]}}</td>
          <td>{{tableValue[3][2]}}</td>
          <td>{{tableValue[3][3]}}</td>
          <td>{{tableValue[3][4]}}</td>
          <td>{{tableValue[3][5]+"Mbit/s"}}</td>
          <td>{{tableValue[3][6]+"Mbit/s"}}</td>
          <td>{{tableValue[3][7]+"MB"}}</td>
        </tr>
        <tr>
          <td>{{tableValue[4][0]}}</td>
          <td>{{tableValue[4][1]}}</td>
          <td>{{tableValue[4][2]}}</td>
          <td>{{tableValue[4][3]}}</td>
          <td>{{tableValue[4][4]}}</td>
          <td>{{tableValue[4][5]+"Mbit/s"}}</td>
          <td>{{tableValue[4][6]+"Mbit/s"}}</td>
          <td>{{tableValue[4][7]+"MB"}}</td>
        </tr>
        <tr>
          <td>{{tableValue[5][0]}}</td>
          <td>{{tableValue[5][1]}}</td>
          <td>{{tableValue[5][2]}}</td>
          <td>{{tableValue[5][3]}}</td>
          <td>{{tableValue[5][4]}}</td>
          <td>{{tableValue[5][5]+"Mbit/s"}}</td>
          <td>{{tableValue[5][6]+"Mbit/s"}}</td>
          <td>{{tableValue[5][7]+"MB"}}</td>
        </tr>

      </table>

    </div>
  </div>

</div>
</template>

<script>
export default {
  name: "ActiveTraffic",
  data(){
    return{
      tableValue:[]

    }
  },
  mounted() {
    this.drawActiveTraffic();
  },
  methods:{
    drawActiveTraffic() {
      this.getRequest("/networkTraffic/activeTraffic").then(resp=>{
        if (resp.status != 200) {
          this.$message.error("数据获取失败");
        } else {
          this.tableValue=resp.data.data;
        }
      })
    }
  }
}
</script>

<style scoped>


.center-active-detail>.active-detail-table {
  width: 100%;
  height: 100%;
  /*background: gold;*/
  position: relative;
}
.center-active-detail>.active-detail-table table{
  width: 100%;
  height: 100%;
  border-collapse: collapse;
  position: absolute;
  text-align: center;
}
.center-active-detail>.active-detail-table table thead th{
  color: #61d2f7;
  font-size: 14px;
  font-weight: 600;
  padding-top: 5px;
  padding-bottom: 5px;
}
.center-active-detail>.active-detail-table table tr td{
  color: #61d2f7;
  font-size: 14px;
  font-weight: 600;
  padding-top: 5px;
  padding-bottom: 5px;
}
</style>