<template>
    <tree :dataList="dataList"></tree>
</template>

<script>
import tree from '../../components/tree.vue'

export default {
  components: {tree},
  data () {
    return {
      'dataList' : []
    }
  },
  created () {
    this.getData()
  },
  methods : {
    getData () {
      this.dataList = [
        ['true','父级一','javascript:;',
          [
            ['false','子级一','1','0'],
            ['false','子级二','2','0'],
            ['false','子级三','3','0'],
            ['false','子级四','4','1']
          ]
        ],
        ['true','跳转一','',[]]
      ]
    }
  }
}
</script>
