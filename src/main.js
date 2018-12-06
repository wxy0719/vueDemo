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
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireAuth)){  // 判断该路由是否需要登录权限
    if (localStorage.esteban_TOKEN) {  // 判断当前的token是否存在
      next();
    }else {
      next({
        path: '/login',
        query: {redirect: to.fullPath}  // 将跳转的路由path作为参数，登录成功后跳转到该路由
      })
    }
  }else {
    next();
  }
});
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
