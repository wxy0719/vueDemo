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
import Header from '../components/header.vue'
import Sider from '../components/sider.vue'
import DataTable from '../components/dataTable.vue'
import Footer from '../components/footer.vue'

export default {
  name: 'App',
  components: {Header, DataTable, Footer, Sider}
}

</script>

<style>
  @import "../assets/style/index.css"
</style>
