<template>
  <timeLine :dataList="dataList"></timeLine>
</template>

<script>
import timeLine from '../../components/basic/timeLine.vue'

export default {
  components: {timeLine},
  data () {
    return {
      'dataList' : [
        {
          'icon':'',
          'title':'8月18日',
          'content':'layui 2.0 的一切准备工作似乎都已到位。发布之弦，一触即发。<br>不枉近百个日日夜夜与之为伴。因小而大，因弱而强。<br>无论它能走多远，抑或如何支撑？至少我曾倾注全心，无怨无悔 <i class=/"layui-icon/">☺</i>'
        },
        {
          'icon':'',
          'title':'5月18日',
          'content':'5月18，巴拉巴拉'
        },
        {
          'icon':'',
          'title':'5月18日',
          'content':'5月18，巴拉巴拉'
        },
        {
          'icon':'',
          'title':'5月18日',
          'content':'5月18，巴拉巴拉'
        },
        {
          'icon':'',
          'title':'5月18日',
          'content':'5月18，巴拉巴拉'
        },
        {
          'icon':'',
          'title':'5月18日',
          'content':'5月18，巴拉巴拉'
        },
        {
          'icon':'',
          'title':'5月18日',
          'content':'5月18，巴拉巴拉'
        },
        {
          'icon':'',
          'title':'5月18日',
          'content':'5月18，巴拉巴拉'
        },
        {
          'icon':'',
          'title':'5月18日',
          'content':'5月18，巴拉巴拉'
        },
        {
          'icon':'',
          'title':'5月18日',
          'content':'5月18，巴拉巴拉'
        },
        {
          'icon':'',
          'title':'1月18日',
          'content':'1月18，哈哈哈哈'
        }
      ]
    }
  },
  created () {
    this.getData()
  },
  methods : {
    getData () {

    }
  }
}
</script>
