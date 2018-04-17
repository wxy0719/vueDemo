import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/index'
import content from '@/page/content'
import dataTable from '@/page/system/dataTable'
import tree_1 from '@/page/system/tree_1'
import tab from '@/page/system/tab'

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
        {path:'dataTable',component:dataTable},
        {path:'tree_1',component:tree_1},
        {path:'tab',component:tab}
      ]
    },
    {
      path: '/content/:id',
      component: content
    }
  ]
})
