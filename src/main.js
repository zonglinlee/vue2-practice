import Vue from 'vue'
import App from './App.vue'
// import store from './store'
import router from './router/router'

// 重置css样式
import "normalize.css"
import "@/styles/index.scss"

// Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
