<template>
  <div id="app">
    <Header></Header>
    <img src="./assets/logo.png">
    <router-view/>
    <DataTable :column_list="column_list" :data_list="data_list"></DataTable>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/header.vue'
import DataTable from './components/dataTable.vue'
import Footer from './components/footer.vue'

export default {
  name: 'App',
  components: {Header, DataTable, Footer},
  data() {
    return {
      'column_list': ['ID','作者','时间','标题','点击次数'],
      'data_list': []
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      this.$index_tableData_api.get('topics', null, r => {
        this.data_list = r.data
      })
    }
  }
}

</script>

<style lang="css">
   @import "./assets/style/index.css";
</style>
