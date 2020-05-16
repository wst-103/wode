import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/dat',
      name: '主要',
      component: () => import('./views/Main.vue'),
      children:[
        { path: 'dlkcy', component: () => import('./nydsj/dlkcy.vue') },//电力看产业
        { path: 'dlkjj', component: () => import('./nydsj/dlkjj.vue') },//电力看经济
        { path: 'dlkms', component: () => import('./nydsj/dlkms.vue') },//电力看民生
        { path: 'qyfcfgfx', component: () => import('./nydsj/qyfcfgfx.vue') },//企业复产复工
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./commons/login.vue')
    }
  ]
})
