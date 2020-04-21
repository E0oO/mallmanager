import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index'
// @ 自动查找src文件夹。
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    }
  ]
})
