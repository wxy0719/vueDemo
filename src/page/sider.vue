<template>
<div class="layui-side layui-bg-black">
    <div class="layui-side-scroll">
        <tree_1 :dataList="dataList"></tree_1>
    </div>
</div>
</template>

<script>
import tree_1 from '../components/tree_1.vue'

export default {
  components: {tree_1},
  data () {
    return {
      'dataList' : []
    }
  },
  created () {
    this.getData()
  },
  methods : {
    getData () {
      this.dataList = [
        ['true','子组件样例','javascript:;',
          [
            ['false','数据表格','/system/dataTable','0'],
            ['false','树形菜单一','/system/tree_1','0'],
            ['false','树形菜单二','/system/tree_2','0'],
            ['false','选项卡','/system/tab','0']
          ]
        ],
        ['true','解决方案','javascript:;',
          [
            ['false','列表一','javascript:;','1'],
            ['false','列表二','javascript:;','1'],
            ['false','超链接','http://www.baidu.com','2']
          ]
        ],
      ]
    }
  }
}
</script>
