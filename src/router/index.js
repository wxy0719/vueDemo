import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/index'
import content from '@/page/content'

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
        {path:'dataTable',component:resolve => require(['@/page/system/dataTable'],resolve)},
        {path:'tree_1',component:resolve => require(['@/page/system/tree_1'],resolve)},
        {path:'tree_2',component:resolve => require(['@/page/system/tree_2'],resolve)},
        {path:'tab',component:resolve => require(['@/page/system/tab'],resolve)},
        {path:'progressBar',component:resolve => require(['@/page/system/progressBar'],resolve)},
        {path:'layout',component:resolve => require(['@/page/system/layout'],resolve)},
        {path:'blackBoard',component:resolve => require(['@/page/system/blackBoard'],resolve)},
        {path:'chart',component:resolve => require(['@/page/system/chart'],resolve)},
        {path:'timeLine',component:resolve => require(['@/page/system/timeLine'],resolve)},
        {path:'datePicker',component:resolve => require(['@/page/system/datePicker'],resolve)},
        {path:'fileUpLoad',component:resolve => require(['@/page/system/fileUpLoad'],resolve)},
        {path:'carousel',component:resolve => require(['@/page/system/carousel'],resolve)},
        {path:'utils',component:resolve => require(['@/page/system/utils'],resolve)}
      ]
    },
    {
      path: '/content/:id',
      component: content
    }
  ]
})
