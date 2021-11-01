import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import * as echarts from 'echarts'
import '@/assets/js/flow/china.js'
import {getRequest,postRequest,putRequest,deleteRequest} from "@/utils/api";

//vue中使用网页防复制
document.onselectstart = function () {
  return false;
};
document.oncontextmenu = function () {
  return false;
};

Vue.config.productionTip = false
//挂载eharts
Vue.prototype.$echarts = echarts

//挂载请求

Vue.prototype.getRequest = getRequest;
Vue.prototype.postRequest = postRequest;
Vue.prototype.putRequest = putRequest;
Vue.prototype.deleteRequest = deleteRequest;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
