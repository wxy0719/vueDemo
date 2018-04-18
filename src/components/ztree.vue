<template>
    <div class="zTreeDemoBackground left">
      <ul :id="treeId" class="ztree"></ul>
    </div>
</template>

<script>
  export default {
    props: ['dataList','treeId'],
    data() {
      return {
        'setting' : {
          check: {
            enable: true,
            chkboxType: { "Y":"ps", "N":"ps"}
          },
          data: {
            simpleData: {
              enable: true
            }
          },
          callback: {
              beforeClick: this.beforeClick,
              onClick: this.zTreeOnClick,
              onCheck: this.zTreeOnCheck,
          }
        }
      }
    },
    mounted(){
      this.getData()
    },
    methods : {
      getData() {
        $.fn.zTree.init($("#"+this.treeId), this.setting, this.dataList);
      },
      beforeClick(event, treeId, treeNode) {
        console.log("点击之前")
      },
      onClick(event, treeId, treeNode) {
        console.log("点击!")
      },
      zTreeOnCheck(event, treeId, treeNode) {
        console.log("选中!   "+treeNode.tId + ", " + treeNode.name)
        var zTree = $.fn.zTree.getZTreeObj(this.treeId)
        var checkCount = zTree.getCheckedNodes(true).length //选中
        var nocheckCount = zTree.getCheckedNodes(false).length //未选中
        var changeCount = zTree.getChangeCheckedNodes().length //获取输入框勾选状态被改变的节点集合（与原始数据 checkedOld 对比）
        var checkedNames = [],checkedIds = []
        for (var i = 0; i <= zTree.getCheckedNodes(true).length - 1; i++) {
            checkedIds.push(zTree.getCheckedNodes(true)[i].id)
            checkedNames.push(zTree.getCheckedNodes(true)[i].name)
        }
        console.log(checkedIds)
        console.log(checkedNames)

        //调用父级方法，并传值给父级组件
        this.$emit('p_method', checkedIds)
      }
    }
  }
</script>
