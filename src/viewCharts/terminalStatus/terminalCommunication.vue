<template>
<div>
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
    <tr>
      <td>{{tableValue[0][0]}}</td>
      <td>{{tableValue[0][1]}}</td>
      <td>{{tableValue[0][2]}}</td>
      <td>{{tableValue[0][3]+"Bytes"}}</td>
      <td>{{tableValue[0][4]}}</td>
      <td>{{tableValue[0][5]}}</td>
      <td>{{tableValue[0][6]+"Mbit/s"}}</td>
      <td>{{tableValue[0][7]+"KB"}}</td>
    </tr>
    <tr>
      <td>{{tableValue[1][0]}}</td>
      <td>{{tableValue[1][1]}}</td>
      <td>{{tableValue[1][2]}}</td>
      <td>{{tableValue[1][3]+"Bytes"}}</td>
      <td>{{tableValue[1][4]}}</td>
      <td>{{tableValue[1][5]}}</td>
      <td>{{tableValue[1][6]+"Mbit/s"}}</td>
      <td>{{tableValue[1][7]+"KB"}}</td>
    </tr>
    <tr>
      <td>{{tableValue[2][0]}}</td>
      <td>{{tableValue[2][1]}}</td>
      <td>{{tableValue[2][2]}}</td>
      <td>{{tableValue[2][3]+"Bytes"}}</td>
      <td>{{tableValue[2][4]}}</td>
      <td>{{tableValue[2][5]}}</td>
      <td>{{tableValue[2][6]+"Mbit/s"}}</td>
      <td>{{tableValue[2][7]+"KB"}}</td>
    </tr>
    <tr>
      <td>{{tableValue[3][0]}}</td>
      <td>{{tableValue[3][1]}}</td>
      <td>{{tableValue[3][2]}}</td>
      <td>{{tableValue[3][3]+"Bytes"}}</td>
      <td>{{tableValue[3][4]}}</td>
      <td>{{tableValue[3][5]}}</td>
      <td>{{tableValue[3][6]+"Mbit/s"}}</td>
      <td>{{tableValue[3][7]+"KB"}}</td>
    </tr>
    <tr>
      <td>{{tableValue[4][0]}}</td>
      <td>{{tableValue[4][1]}}</td>
      <td>{{tableValue[4][2]}}</td>
      <td>{{tableValue[4][3]+"Bytes"}}</td>
      <td>{{tableValue[4][4]}}</td>
      <td>{{tableValue[4][5]}}</td>
      <td>{{tableValue[4][6]+"Mbit/s"}}</td>
      <td>{{tableValue[4][7]+"KB"}}</td>
    </tr>
  </table>
</div>
</template>

<script>
export default {
  name: "terminalCommunication",
  data(){
    return{
      tableValue:[]

    }
  },
  mounted() {
    this.drawterminalCommunication();
  },
  methods:{
    drawterminalCommunication() {
      this.getRequest("/terminalStatus/terminalCommunication").then(resp=>{
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
table{
  width: 100%;
  height: 87%;
  border-collapse: collapse;
  position: absolute;
  text-align: center;
}
table thead th{
  color: #61d2f7;
  font-size: 14px;
  font-weight: 600;
  padding-top: 5px;
  padding-bottom: 5px;
}
table tr{
  color: #61d2f7;
  font-size: 14px;
  font-weight: 600;
  padding-top: 5px;
  padding-bottom: 5px;
}
table thead th {
  color: #F5F5F5;
  font-size: 14px;
  font-weight: 600;
  padding-top: 5px;
  padding-bottom: 5px;
}
td {
  color: 	#F5F5F5;
}
</style>