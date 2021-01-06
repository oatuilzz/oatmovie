import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueRouter from 'vue-router'
import routers from './routers'
import axios from 'axios'

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$axios = axios
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: routers
})
new Vue({

  router,
  render: h => h(App),
}).$mount('#app')
