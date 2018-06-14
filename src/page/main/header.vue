<template>
<div class="layui-header">
    <div class="layui-logo">layui 后台布局</div>
    <!-- 头部区域（可配合layui已有的水平导航） -->
    <ul class="layui-nav layui-layout-left">
        <li class="layui-nav-item" style="width:70px;"><a href="">控制台</a></li>
        <li class="layui-nav-item" style="width:70px;"><a href="">商品管理</a></li>
        <li class="layui-nav-item" style="width:70px;"><a href="">用户</a></li>
        <li class="layui-nav-item" style="width:90px;">
            <a href="javascript:;">其它系统</a>
            <dl class="layui-nav-child" style="width:80px;">
                <dd style="margin-left:5px;"><a href="">邮件管理</a></dd>
                <dd style="margin-left:5px;"><a href="">消息管理</a></dd>
                <dd style="margin-left:5px;"><a href="">授权管理</a></dd>
            </dl>
        </li>
    </ul>
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
      template :"<ul class='layui-nav layui-layout-right'>"+
                "<li class='layui-nav-item'>"+
                "      <a href='javascript:;'>"+
                "          <img src='http://t.cn/RCzsdCq' class='layui-nav-img'>"+
                "          {{user.name}}"+
                "      </a>"+
                "      <dl class='layui-nav-child'>"+
                "          <dd><a href=''>基本资料</a></dd>"+
                "          <dd><a href=''>安全设置</a></dd>"+
                "      </dl>"+
                "</li>"+
                "<li class='layui-nav-item'><a href=''>退出</a></li></ul>"
    }
  }
}
</script>
