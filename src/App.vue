<template>
  <router-view></router-view>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  created (){
    this.getData()
  },
  methods : {
    getData() {
      layui.use('element', function(){
        var element = layui.element; //导航的hover效果、二级菜单等功能，需要依赖element模块
      });
    }
  }
}
</script>
