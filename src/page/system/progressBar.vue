<template>
  <div>
    <progressBar :isBig='isBig' :isShowPercent='isShowPercent' :filterId='filterId' :bgColor='bgColor' :defaultPercent='defaultPercent' :nowPercent='nowPercent'></progressBar>
    <input :value='nowPercent' @keydown.up='up' @keydown.down='down'> 使用键盘上下键控制进度条
  </div>
</template>

<script>
import progressBar from '../../components/progressBar.vue'

export default {
  components: {progressBar},
  data () {
    return {
      'isBig' : 'true',
      'isShowPercent' : 'true',
      'filterId' : 'demo',
      'bgColor' : 'red',
      'defaultPercent' : '0',
      'nowPercent' : '0'
    }
  },
  created () {
    this.getData()
  },
  methods : {
    getData () {

    },
    up () {
      this.nowPercent ++;
    },
    down () {
      this.nowPercent --;
    }
  }
}
</script>
