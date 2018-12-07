<template>
<div class="layui-header" >
    <div class="layui-logo">layui 后台布局</div>
    <!-- 头部区域（可配合layui已有的水平导航） -->

    <div style="position:absolute;left:230px;top:25px;">
      <i class="layui-icon layui-icon-shrink-right" style="font-size: 20px; color: #393D49;"></i>
      <a id="header-url-str" style="margin-left:40px;color:#878585;">home</a>
    </div>

    <component :is="compName" :user="userInfo"></component>
</div>
</template>

<script>
export default {
  components: {},
  props: ['userInfo'],
  data () {
    return {
      compName : ""
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
    userInfo(newVal,oldVal){
      if(newVal!=null && newVal!="" && newVal != oldVal){
        this.compName = "logined"
        layui.use(['element','layer'], function(){})
      }else{
        this.compName = "notLogined"
      }
    }
  },
  components: {
    notLogined : {
      template :"<ul class='layui-nav layui-layout-right'>"+
                "<li class='layui-nav-item'><a href=''>登录</a></li>"+
                "<li class='layui-nav-item'><a href=''>注册</a></li></ul>"
    },
    logined : {
      props: ['user'],
      template :"<ul class='layui-nav layui-layout-right' >"+
                "<li class='layui-nav-item' >"+
                "      <a href='javascript:;' >"+
                "          <img src='http://t.cn/RCzsdCq' class='layui-nav-img'>"+
                "          {{user.name}}"+
                "      </a>"+
                "      <dl class='layui-nav-child' >"+
                "          <dd><a href=''>基本资料</a></dd>"+
                "          <dd><a href=''>安全设置</a></dd>"+
                "      </dl>"+
                "</li>"+
                "<li class='layui-nav-item' style='width:75px;text-align:center;cursor:pointer;' v-on:click='loginOut'><b style='color:black;font-weight:normal;' >退出</b></li></ul>",
      methods :{
        loginOut (){
          this.$baseAPI.openedMenu=[]
          localStorage.esteban_TOKEN = ""
          window.location.href = "#/login"
        }
      }
    }
  }
}
</script>
