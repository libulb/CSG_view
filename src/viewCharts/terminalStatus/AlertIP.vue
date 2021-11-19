<template>
  <div id="alertIP" style="width:100%;height:100%;">
    <div class="h1">告警IP</div>
<!--    <h1></h1>-->
    <table>
      <tr>
        <th>出现时间</th>
        <th>IP</th>
        <th>流数</th>
      </tr>
      <tr v-for="(item,index) in  list1">
        <td>{{item[0]}}</td>
        <td>{{item[1]}}</td>
        <td>{{item[2]}}</td>
      </tr>

    </table>

  </div>

</template>

<script>
export default {
  name: "AlertIP",
  data() {
    return {
      list1:[ ],

    };
  },
  mounted() {
    this.drawTopHosts();
  },
  methods:{
    drawTopHosts() {

      this.getRequest("terminalStatus/alertIP").then(resp=>{
        if (resp.status != 200) {
          this.$message.error("数据获取失败");
        } else {
          console.log(resp);
        this.list1=resp.data.data;
        }
      })
    }
  }
}
</script>

<style scoped>

.h1{
  font-size: 20px;
  font-weight: bolder;
  color: #F5F5F5;
  width: 100%;
  margin: 0 auto;
  text-align: center;
}
table,th {
  border: 1px solid black;
  text-align: center;
  color: #fff;
}
table, td{
  border: 1px solid black;
  text-align: center;
  color : gold;
  /*color:hsl(50, 50%, 50%)*/
}


table {
  width: 100%;
  bottom: 2%;
  /*background-color: hsl(160,15%,50%);*/
  background-color:  #10121A;
  border-collapse: collapse;
}
</style>