import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import axios from "axios";
import * as echarts from 'echarts'
import '@/assets/js/flow/china.js'

document.onselectstart = function () {
  return false;
};
document.oncontextmenu = function () {
  return false;
};

Vue.config.productionTip = false
//挂载eharts
Vue.prototype.$echarts = echarts

//挂载axios
Vue.prototype.$http = axios

//设置访问根路径
axios.defaults.baseURL = "http://10.23.119.133:9000"


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
