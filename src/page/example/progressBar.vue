<template>
  <div>
    <progressBar :isBig='isBig' :isShowPercent='isShowPercent' :filterId='filterId' :bgColor='bgColor' :nowPercent='nowPercent'></progressBar>
    <input :value='nowPercent' @keydown.up='up' @keydown.down='down'> 使用键盘上下键控制进度条
  </div>
</template>

<script>
import progressBar from '../../components/basic/progressBar.vue'

export default {
  components: {progressBar},
  data () {
    return {
      'isBig' : 'true',
      'isShowPercent' : 'true',
      'filterId' : 'demo',
      'bgColor' : 'red',
      'nowPercent' : '20'
    }
  },
  created () {
    this.getData()
  },
  methods : {
    getData () {

    },
    up () {
      if(this.nowPercent<100){
        this.nowPercent ++
      }
    },
    down () {
      if(this.nowPercent>0){
        this.nowPercent --
      }
    }
  }
}
</script>
