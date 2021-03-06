import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import 'muse-ui/dist/muse-ui.css'
import 'muse-ui/dist/theme-teal.css'
import 'assets/css/app.css'

import './plugins' //引入插件

new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
})
