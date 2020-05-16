import Vue from 'vue'
import ElementUI from 'element-ui'
import App from './App.vue'
import router from './router'
import store from './store'
import eiAxios from './eiAxios';
Vue.config.productionTip = false

import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI);
Vue.prototype.$eiAxios = eiAxios;

import echarts from 'echarts'
Vue.prototype.$echarts = echarts

import VueLazyload from 'vue-lazyload'

// 使用VueLazyload并传入相应的配置
// Vue.use(VueLazyload, {
//   error: 'dist/error.png',
//   loading: 'dist/loading.gif',// 懒加载使用的图片
// })
Vue.use(VueLazyload)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

// import {getData} from './getData.js';
// getData({
//   url:'url',
//   res=>{
//     console.log(res);
//   },err =>{
//     console.log(err);
//   }
// })
