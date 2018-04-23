<template>
  <router-view></router-view>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  beforeCreate(){
    layui.use('element', function(){
      var element = layui.element; //导航的hover效果、二级菜单等功能，需要依赖element模块

    });
  },
  updated(){
    console.log("1111111111111111")
    layui.use('element', function(){
      var element = layui.element; //导航的hover效果、二级菜单等功能，需要依赖element模块

    });
  },
  methods : {
    getData() {
    }
  }
}
</script>
