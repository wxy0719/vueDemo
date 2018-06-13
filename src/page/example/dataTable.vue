<template>
    <div style="">

      <DataTable :column_list="column_list" :data_list="data_list" :tab_id="tab_id"></DataTable>

    </div>
</template>

<script>
import DataTable from '../../components/basic/dataTable.vue'

export default {
  components: {DataTable},
  data() {
    return {
      'tab_id': 'test',
      'column_list': [[
                        {field:'id', title: 'ID', sort: true}
                        ,{field:'author_id', title: '作者'} //width 支持：数字、百分比和不填写。你还可以通过 minWidth 参数局部定义当前单元格的最小宽度，layui 2.2.1 新增
                        ,{field:'create_at', title: '时间', sort: true}
                        ,{field:'title', title: '标题'}
                        ,{field:'visit_count', title: '点击次数',fixed: 'right'}
                      ]],
      'data_list': []
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      this.$baseAPI.get('topics?'+Math.random(), null, r => {
        this.data_list = r.data
      })
    }
  }
}
</script>
