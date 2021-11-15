<template>
<div>
  <button id="btn1">按钮 </button>
</div>
</template>
<script type="text/javascript">
window.onload=function (){
  var btn1=document.getElementById("btn1");
  btn1.onclick = function (){
    alert("这个");
  }
}
</script>
<script>
export default {
  name: "test",
  mounted() {
    this.drawTest();
  },
  methods:{
    drawTest() {
      // this.equipmentFlowRankChart.setOption(this.equipmentFlowRankOption);

      this.getRequest("/flow/data-1528971808162-BkOXf61WX").then(resp=>{
        if (resp.status != 200) {
          this.$message.error("数据获取失败");
        } else {
          console.log(resp);

          var mapFeatures = resp.data.data[0].features;
          // var mapFeatures = this.$echarts.getMap('china').geoJson.features;

          mapFeatures.forEach(function(v) {
            // 地区名称
            var name = v.properties.name;
            // 地区经纬度
            geoCoordMap[name] = v.properties.cp;

          });
          var convertData = function(data) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
              var geoCoord = geoCoordMap[data[i].name];
              if (geoCoord) {
                res.push({
                  name: data[i].name,
                  value: geoCoord.concat(data[i].value)
                });
              }
            }
            return res;
          };

        }
      })
    }
  }
}
</script>

<style scoped>

</style>