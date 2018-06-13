<template>
<div class="layui-side layui-bg-black">
    <div class="layui-side-scroll">
        <tree :dataList="dataList"></tree>
    </div>
</div>
</template>

<script>
import tree from '../../components/basic/tree.vue'

export default {
  components: {tree},
  props: ['menuList'],
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

    }
  },
  watch : {
    menuList(newVal,oldVal){
      if(newVal!=null && newVal!="" && newVal != oldVal){
        this.dataList = eval(newVal)

        layui.use(['element','layer'], function(){})
      }else{
        this.dataList = []
      }
    }
  }
}
</script>
