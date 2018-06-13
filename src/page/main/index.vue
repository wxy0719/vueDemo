<template>
<div id="app" class="layui-layout layui-layout-admin">
  <Header :userInfo='userInfo'></Header>
  <Sider :menuList='menuList'></Sider>

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
      userInfo : null,
      menuList : null
    }
  },
  created () {
    this.getData()
  },
  methods : {
    getData() {
      localStorage.userId = "admin"
      localStorage.esteban_TOKEN = "eyd0eXAnOidKV1QnLCdhbGcnOidIUzI1Nid9.eydpc3MnOidlc3RlYmFuJywnc3ViJzonMScsJ2V4cCc6JzE4MDBzJywnaWF0JzonMTUyODc4OTYyODM4OCd9.c12af0adfa0251de36a436948721fb4a"

      //初始用户信息,左侧菜单信息
      if(localStorage.userId!=null&&localStorage.userId!=""&&localStorage.esteban_TOKEN!=null&&localStorage.esteban_TOKEN!=""){
        let params = {
          token:localStorage.esteban_TOKEN
        }
        this.$baseAPI.get('interfaceAdapter', params ,10004 ,null , r => {
          this.userInfo = r.userInfo
          this.menuList = r.menuList
        }, r => {
          layer.alert(r.message)
        })
      }

      //初始化其他通知类信息

    }
  }
}

</script>

<style>
  @import "../../assets/style/index.css"
</style>
