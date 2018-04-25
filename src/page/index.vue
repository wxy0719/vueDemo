<template>
<div id="app" class="layui-layout layui-layout-admin">
  <Header></Header>
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

    }
  },
  methods : {
    getData() {
    }
  }
}

</script>

<style>
  @import "../assets/style/index.css"
</style>
