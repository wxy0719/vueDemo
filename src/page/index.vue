<template>
<div id="app" class="layui-layout layui-layout-admin">
  <Header :userInfo='userInfo'></Header>
  <Sider></Sider>

  <div class="layui-body">
      <router-view></router-view>
  </div>

  <Footer></Footer>
</div>
</template>

<script>
import Header from './header.vue'
import Sider from './sider.vue'
import Footer from './footer.vue'

export default {
  name: 'App',
  components: {Header, Footer, Sider},
  data() {
    return {
      userInfo : null
    }
  },
  methods : {
    getData() {
      localStorage.userId = ""
      localStorage.esteban_TOKEN = ""

      //初始化头部用户信息
      if(localStorage.userId!=null&&localStorage.userId!=""&&localStorage.esteban_TOKEN!=null&&localStorage.esteban_TOKEN!=""){
        let params = {
          token:localStorage.esteban_TOKEN
        }
        this.$baseAPI.get('interfaceAdapter', params ,10004 ,localStorage.esteban_TOKEN , r => {
          layer.alert(r.message)
        }, r => {
          layer.alert(r.message)
        })
      }

      //初始化左侧菜单信息

      //初始化其他通知类信息

    }
  }
}

</script>

<style>
  @import "../assets/style/index.css"
</style>
