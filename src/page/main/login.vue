<template>
<div class="layadmin-tabsbody-item layui-show login-bg" >&nbsp;
<div class="login-form" >
  <form class="layui-form" action="" id="login-form">
    <div class="layui-form-item login-form-title">
      <p>欢迎登录</p>
    </div>
    <div class="layui-form-item">
      <label class="layui-form-label login-form-username-icon">
        <i class="layui-icon layui-icon-username" style="font-size: 24px; color: black;"></i>
      </label>
      <div class="layui-input-block login-form-inputDiv">
        <input type="text" name="userId" id="userId" lay-verify="title" :value="userName" autocomplete="off" placeholder="用户名" class="layui-input login-form-input">
      </div>
    </div>
    <div class="layui-form-item">
      <label class="layui-form-label login-form-username-icon">
        <i class="layui-icon layui-icon-password" style="font-size: 24px; color: black;"></i>
      </label>
      <div class="layui-input-block login-form-inputDiv">
        <input style="display:none">
        <input type="password" id="password" placeholder="密码" autocomplete="off" class="layui-input login-form-input">
        <input type="password" style="display:none;" name="passwd" id="passwd" >
      </div>
    </div>
    <div class="layui-form-item">
      <label class="layui-form-label login-form-username-icon">
        <i class="layui-icon layui-icon-vercode" style="font-size: 24px; color: black;"></i>
      </label>
      <div class="layui-input-block login-form-inputDiv">
        <input type="text" name="checkCode" placeholder="验证码" autocomplete="off" class="layui-input login-form-input">
      </div>
    </div>
    <div class="layui-form-item">
      <button type="button" v-on:click="login" class="layui-btn login-button" href="javascript:void(0);">登录</button>
    </div>
  </form>
</div>
</div>
</template>

<script>
import md5 from 'js-md5';
console.log(localStorage.esteban_TOKEN)

export default {
  components: {},
  data() {
    return {
      userName: localStorage.userId
    }
  },
  created () {
  
  },
  methods : {
    login() {
        $("#login-form #passwd").val(md5.hex($("#login-form #password").val()))
        let params = $("#login-form").serializeObject()
        this.$baseAPI.get('interfaceAdapter', params ,10001 ,null , r => {
          if(r.status == "200"){
            localStorage.userId = r.userId
            localStorage.esteban_TOKEN = r.token
            if(localStorage.esteban_TOKEN!=null&&localStorage.esteban_TOKEN!=""){
              window.location.href = "#/home/"
            }else{
              layer.alert(r.message)
            }
          }else{
            layer.alert(r.message)
          }
        }, r => {
          layer.alert(r.message)
        })
    }
  }
}

</script>
