import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/main/index'
import content from '@/page/main/content'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: index
    },
    {
      path: '/home',
      component: index,
      children:[
        {path:'/',component:resolve => require(['@/page/main/home'],resolve)},
      ]
    },
    {
      path: '/example',
      component: index,
      children:[
        {path:'dataTable',component:resolve => require(['@/page/example/dataTable'],resolve)},
        {path:'tree_1',component:resolve => require(['@/page/example/tree_1'],resolve)},
        {path:'tree_2',component:resolve => require(['@/page/example/tree_2'],resolve)},
        {path:'tab',component:resolve => require(['@/page/example/tab'],resolve)},
        {path:'progressBar',component:resolve => require(['@/page/example/progressBar'],resolve)},
        {path:'layout',component:resolve => require(['@/page/example/layout'],resolve)},
        {path:'blackBoard',component:resolve => require(['@/page/example/blackBoard'],resolve)},
        {path:'timeLine',component:resolve => require(['@/page/example/timeLine'],resolve)},
        {path:'datePicker',component:resolve => require(['@/page/example/datePicker'],resolve)},
        {path:'layer',component:resolve => require(['@/page/example/layer'],resolve)},
        {path:'chart1',component:resolve => require(['@/page/example/chart1'],resolve)},
        {path:'chart2',component:resolve => require(['@/page/example/chart2'],resolve)},
        {path:'chart3',component:resolve => require(['@/page/example/chart3'],resolve)},
        {path:'chart4',component:resolve => require(['@/page/example/chart4'],resolve)},
        {path:'chart5',component:resolve => require(['@/page/example/chart5'],resolve)},
        {path:'fileUpLoad',component:resolve => require(['@/page/example/fileUpLoad'],resolve)},
        {path:'carousel',component:resolve => require(['@/page/example/carousel'],resolve)},
        {path:'utils',component:resolve => require(['@/page/example/utils'],resolve)}
      ]
    },
    {
      path: '/content/:id',
      component: content
    }
  ]
})
