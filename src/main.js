// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 引用API文件
// 将API方法绑定到全局
import baseAPI from './api/baseAPI.js'
Vue.prototype.$baseAPI = baseAPI

// 引用时间格式化工具
import dateTimeUtils from './utils/dateTimeUtils.js'
Vue.prototype.$dateTimeUtils = dateTimeUtils

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
