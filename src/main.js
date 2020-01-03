import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'

import Fastclick from 'fastclick'
import VueLazylaod from 'vue-lazyload'

import toast from 'components/common/toast/index'

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()


Vue.use(toast)
//使用懒加载插件
Vue.use(VueLazylaod,{
  // loading:require('')  可以添加占位图
})

// 解决移动端300ms延迟
Fastclick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})


/* require('./assets/css/base.css') */