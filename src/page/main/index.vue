<template>
<div id="app" class="layui-layout layui-layout-admin">
  <Header :userInfo='userInfo'></Header>
  <Sider :menuList='menuList'></Sider>

  <div class="layui-body">
    <template>
        <tab :title="title" :content="content" :cssStr="card" :isClose="true" :tabId="tabId"></tab>
    </template>
  </div>

  <Footer></Footer>
</div>
</template>

<script>
import Header from './header.vue'
import Sider from './sider.vue'
import Footer from './footer.vue'
import tab from '../../components/basic/tab.vue'

export default {
  name: 'App',
  components: {Header, Footer, Sider, tab },
  data() {
    return {
      userInfo : null,
      menuList : null,
      'title' : [
         "<a href='#/home/' tabMenuId='home' class='tabMenuClick' style='color: #646E7A !important;height:30px;line-height:30px;'>"+
         "<div class='navDot' style='position:absolute;top:8px;width:13px;height:13px;background-color:#E8EAEC;border-radius:50px;float:left'>&nbsp;</div>"+
         "<div style='position:absolute;left:40px;float:left;'>首页</div>"+
         "</a>"
      ],
      'content': [
        ''
      ],
      'card': 'layui-tab-card',
      'tabId' : 'rightTabNav'
    }
  },
  created () {
    this.getData()
  },
  methods : {
    getData() {
      //初次加载时，页面加载到home页面，防止刷新后不在首页。
      let homeUrl = window.location.href
      let str = homeUrl.split("#")
      if(str[1]!="/home"){
        window.location.href = "#/home/"
      }

      //初始用户信息,左侧菜单信息
      if(localStorage.userId!=null&&localStorage.userId!=""&&localStorage.esteban_TOKEN!=null&&localStorage.esteban_TOKEN!=""){
        let params = {
          userId:localStorage.userId,
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
