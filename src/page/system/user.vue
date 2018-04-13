<template>
    <div style="">
      <!--
      <DataTable :column_list="column_list" :data_list="data_list"></DataTable>
      -->

      <table class="layui-hide" id="test" ></table>

    </div>
</template>

<script>
import DataTable from '../../components/dataTable.vue'

export default {
  name: 'App',
  components: {DataTable},
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

        layui.use('table', function(data_list){
          var table = layui.table;

          table.render({
            elem: '#test'
            ,cellMinWidth: 80 //全局定义常规单元格的最小宽度，layui 2.2.1 新增
            ,cols: [[
              {field:'id', title: 'ID', sort: true}
              ,{field:'author_id', title: '作者'} //width 支持：数字、百分比和不填写。你还可以通过 minWidth 参数局部定义当前单元格的最小宽度，layui 2.2.1 新增
              ,{field:'create_at', title: '时间', sort: true}
              ,{field:'title', title: '标题'}
              ,{field:'visit_count', title: '点击次数',fixed: 'right'}
            ]]
            ,data: r.data
            ,page: true
          });
        });

      })
    }
  }
}
</script>
