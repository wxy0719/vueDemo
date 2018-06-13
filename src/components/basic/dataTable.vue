<template>
    <table class="layui-hide" :id="tab_id"></table>
</template>

<script>
export default {
  props: ['column_list','data_list','tab_id'],
  data() {
    return {
    }
  },
  created () {
    var r=new Array()
    r.push(this.tab_id)
    r.push(this.column_list)
    r.push(this.data_list)
    this.getData(r)
  },
  methods: {
    getData (r) {
      layui.use('table', function(){
        var table = layui.table;

        table.render({
          elem: '#'+r[0]
          ,cellMinWidth: 80 //全局定义常规单元格的最小宽度，layui 2.2.1 新增
          ,cols: r[1]
          ,data: r[2]
          ,page: true
        });
      });
    }
  },
  watch: {
    data_list(newValue, oldValue) {
      var r=new Array()
      r.push(this.tab_id)
      r.push(this.column_list)
      r.push(newValue)
      this.getData(r)
　　}
  }
}
</script>

<style>
  .dataTable_css {
    width: 80%;
    margin:auto;
  }
</style>
