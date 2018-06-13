<template>
  <div class="layui-progress" :class="isBigCSS" :lay-showpercent="isShowPercent" :lay-filter="filterId">
    <div class="layui-progress-bar" :class="bgColorCSS" :lay-percent="nowPercent+'%'"></div>
  </div>
</template>

<script>
  export default {
    props: ['isBig','isShowPercent','filterId','bgColor','nowPercent'],
    data() {
      return {

      }
    },
    created (){
      this.getData()
    },
    methods : {
      getData() {

      }
    },
    computed: {
      bgColorCSS: function(){
        if(this.bgColor == 'red'){
            return "layui-bg-red"
        }else if(this.bgColor == 'gray'){
            return "layui-bg-gray"
        }else if(this.bgColor == 'orange'){
            return "layui-bg-orange"
        }else if(this.bgColor == 'green'){
            return "layui-bg-green"
        }else if(this.bgColor == 'blue'){
            return "layui-bg-blue"
        }else if(this.bgColor == 'black'){
            return "layui-bg-black"
        }else if(this.bgColor == 'yellow'){
            return "layui-bg-yellow"
        }
      },
      isBigCSS: function(){
        if(this.isBig){
          return "layui-progress-big"
        }else{
          return ""
        }
      }
    },
    watch: {
      nowPercent(newValue, oldValue) {
        if(newValue != oldValue){
          if(newValue<=100 && newValue >= 0){
            var filterId_ = this.filterId
            layui.use('element', function(){
              var $ = layui.jquery
              layui.element.progress(filterId_, newValue+'%')
            });
          }
        }
  　　}
    }
  }
</script>
