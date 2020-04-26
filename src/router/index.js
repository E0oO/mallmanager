import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index'
import Home from '@/page/Home'
import Center from '@/page/Center'

// @ 自动查找src文件夹。
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/center',
      name: 'center',
      component: Center
    }
  ]
})
