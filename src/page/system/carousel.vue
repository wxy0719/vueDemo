<template>
  <div>
  <carousel id="test1" interval="5000" anim="updown" arrow="hover" indicator="outside" index="2" :dataList="dateList"></carousel>
  <hr/>
  <carousel id="test2" interval="1000" anim="fade" arrow="always" indicator="inside" index="0" autoplay="false" :dataList="dateList"></carousel>
  <hr/>
  <carousel id="test3" arrow="none" indicator="none" :dataList="dateList"></carousel>
  </div>
</template>

<script>
import carousel from '../../components/carousel.vue'

export default {
  components: {carousel},
  data () {
    return {
      'dateList' : [
        {'content':'<p>我是第一页</p>'},
        {'content':'<p>我是第二页</p>'},
        {'content':'<p>我是第三页</p>'},
        {'content':'<p>我是第四页</p>'},
        {'content':'<p>我是第五页</p>'}
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
