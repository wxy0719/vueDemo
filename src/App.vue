<template>
  <router-view></router-view>
</template>

<script>
var layer = null;
var element = null;

export default {
  data() {
    return {

    }
  },
  beforeCreate(){
    layui.use(['element','layer'], function(){
      element = layui.element //导航的hover效果、二级菜单等功能，需要依赖element模块
      layer = layui.layer
    })
  },
  updated(){
    layui.use(['element','layer'], function(){
      element = layui.element //导航的hover效果、二级菜单等功能，需要依赖element模块
      layer = layui.layer
    })
  },
  methods : {
    getData() {
    }
  }
}
</script>
