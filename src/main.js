import Vue from 'vue'
import App from './App.vue'
// import store from './store'
import router from './router/router'
import {imgSrcHandleError} from "@/utils/imgErrorHandler";

// 重置css样式
import "normalize.css"
import "@/styles/index.scss"

// Vue.config.productionTip = false
Vue.config.errorHandler = imgSrcHandleError;
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
