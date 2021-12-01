import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import * as echarts from 'echarts'
import '@/assets/js/flow/china.js'
import ElementUI from 'element-ui'
import {getRequest,postRequest,putRequest,deleteRequest} from "@/utils/api";
import global_variable from "@/utils/global_variable";

//vue中使用网页防复制
document.onselectstart = function () {
  return false;
};
document.oncontextmenu = function () {
  return false;
};

Vue.use(ElementUI)
Vue.config.productionTip = false
//挂载eharts
Vue.prototype.$echarts = echarts

//挂载请求

Vue.prototype.getRequest = getRequest;
Vue.prototype.postRequest = postRequest;
Vue.prototype.putRequest = putRequest;
Vue.prototype.deleteRequest = deleteRequest;
//挂载网段
Vue.prototype.GLOBAL = global_variable;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
