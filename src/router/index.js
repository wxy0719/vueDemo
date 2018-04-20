import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/index'
import content from '@/page/content'
import dataTable from '@/page/system/dataTable'
import tree_1 from '@/page/system/tree_1'
import tree_2 from '@/page/system/tree_2'
import tab from '@/page/system/tab'
import progressBar from '@/page/system/progressBar'
import layout from '@/page/system/layout'
import blackBoard from '@/page/system/blackBoard'
import timeLine from '@/page/system/timeLine'
import datePicker from '@/page/system/datePicker'
import fileUpLoad from '@/page/system/fileUpLoad'
import carousel from '@/page/system/carousel'
import utils from '@/page/system/utils'

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
        {path:'tree_2',component:tree_2},
        {path:'tab',component:tab},
        {path:'progressBar',component:progressBar},
        {path:'layout',component:layout},
        {path:'blackBoard',component:blackBoard},
        {path:'timeLine',component:timeLine},
        {path:'datePicker',component:datePicker},
        {path:'fileUpLoad',component:fileUpLoad},
        {path:'carousel',component:carousel},
        {path:'utils',component:utils}
      ]
    },
    {
      path: '/content/:id',
      component: content
    }
  ]
})
