import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
import 'vant/lib/index.css'
import 'amfe-flexible'

import './Moke/index'
import axios from 'axios'
// import '@/style/index.scss'
import 'less-loader'
import '@/iconfont/icon.css'

Vue.use(Vant)
Vue.prototype.$http = axios // 挂载了axios请求到原型链

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
