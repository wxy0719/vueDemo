<template>
<div class="layui-side layui-bg-black">
    <div class="layui-side-scroll">
        <tree :dataList="dataList"></tree>
    </div>
</div>
</template>

<script>
import tree from '../components/tree.vue'

export default {
  components: {tree},
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
            ['false','选项卡','/system/tab','0'],
            ['false','进度条','/system/progressBar','0'],
            ['false','布局','/system/layout','0'],
            ['false','面板','/system/blackBoard','0'],
            ['false','时间线','/system/timeLine','0'],
            ['false','时间控件','/system/datePicker','0'],
            ['false','弹出层','/system/layer','0'],
            ['false','图表一','/system/chart1','0'],
            ['false','图表二','/system/chart2','0'],
            ['false','文件上传','/system/fileUpLoad','0'],
            ['false','轮播','/system/carousel','0'],
            ['false','工具集','/system/utils','0']
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
