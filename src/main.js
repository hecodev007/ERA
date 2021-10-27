// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/font/font.css'

import Element from 'element-ui'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper)

import 'element-ui/lib/theme-chalk/index.css'
Vue.use(Element)
// Vue.use(vueSwiper)

// import VueAwesomeSwiper from 'vue-awesome-swiper'
// Vue.use(VueAwesomeSwiper)

// import 'swiper/dist/css/swiper.min.css'

import less from 'less'
Vue.use(less)
Vue.config.productionTip = false

import global_ from './components/global'

Vue.prototype.GLOBAL = global_

import toast from './plugin/toast/toast'
Vue.use(toast);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
})
