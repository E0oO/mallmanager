// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/assets/css/reset.css'
import MyHttpServer from '@/plugin/http.js'
import App from './App'
import router from './router'
import {setCookie, getCookie, delCookie} from './util/util.js';
Vue.use(ElementUI);
Vue.use(MyHttpServer)
// 上线 = 生产。 无影响
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  beforeMount () {
    Vue.prototype.$cookieStore = {
      setCookie,
      getCookie,
      delCookie
    }
  }
})
