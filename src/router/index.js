import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/index'
import content from '@/page/content'
import user from '@/page/system/user'
import prvi from '@/page/system/prvi'
import menu from '@/page/system/menu'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: index
    },
    {
      path: '/system',
      component: index,
      children:[
        {path:'user',component:user},
        {path:'prvi',component:prvi},
        {path:'menu',component:menu}
      ]
    },
    {
      path: '/content/:id',
      component: content
    }
  ]
})
