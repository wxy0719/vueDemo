<template>
<div>
    <ztree :dataList="dataList" :treeId="treeId" v-on:p_method="showCheckedMsg"></ztree>
    <div>
      选中的值：
      <input id="ckdMsg" value="" />
    </div>
</div>
</template>

<script>
import ztree from '../../components/basic/ztree.vue'

export default {
  components: {ztree},
  data () {
    return {
      'treeId' : 'testTree',
      'dataList' : []
    }
  },
  created () {
    this.getData()
  },
  methods : {
    getData () {
      this.dataList = [
  			{ id:1, pId:0, name:"随意勾选 1", open:true},
  			{ id:11, pId:1, name:"随意勾选 1-1", open:true},
  			{ id:111, pId:11, name:"随意勾选 1-1-1"},
  			{ id:112, pId:11, name:"随意勾选 1-1-2"},
  			{ id:12, pId:1, name:"随意勾选 1-2", open:true},
  			{ id:121, pId:12, name:"随意勾选 1-2-1"},
  			{ id:122, pId:12, name:"随意勾选 1-2-2"},
  			{ id:2, pId:0, name:"随意勾选 2", checked:true, open:true},
  			{ id:21, pId:2, name:"随意勾选 2-1"},
  			{ id:22, pId:2, name:"随意勾选 2-2", open:true},
  			{ id:221, pId:22, name:"随意勾选 2-2-1", checked:true},
  			{ id:222, pId:22, name:"随意勾选 2-2-2"},
  			{ id:23, pId:2, name:"随意勾选 2-3"}
		  ]
    },
    showCheckedMsg (msg){
      $("#ckdMsg").val(msg)
    }
  }
}
</script>
