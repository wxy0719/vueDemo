<template>
  <div class="layui-carousel" :id="id" :lay-filter="id" :width="width" :height="height">
    <div carousel-item="">
      <div v-for="item in dataList" v-html="item.content"></div>
    </div>
  </div>
</template>

<script>
  export default {
    props: [
      'id',
      'interval', //自动切换的时间间隔，不能低于800ms
      'anim',  //动画类型：default/updown/fade
      'width',
      'height',
      'full', //是否全屏
      'arrow', //切换箭头默认显示状态：hover/always/none
      'indicator', //指示器位置：inside/outside/none
      'autoplay',  //是否自动切换
      'trigger', //指示器的触发方式：click/hover
      'index', //初始开始的索引
      'dataList'
    ],
    data() {
      return {

      }
    },
    created (){
      this.getData(this)
    },
    methods : {
      getData(ts_) {
        layui.use(['carousel'], function(){
          var carousel = layui.carousel

          //常规轮播
          carousel.render({
            elem: '#'+ts_.id,
            interval: (ts_.interval == null||ts_.interval == "") ? 3000 : ts_.interval*1,
            anim: (ts_.anim == null||ts_.anim == "") ? 'default' : ts_.anim,
            full: (ts_.full == null||ts_.full == "") ? false : ts_.full,
            arrow: (ts_.arrow == null||ts_.arrow == "") ? 'always' : ts_.arrow,
            indicator: (ts_.indicator == null||ts_.indicator == "") ? 'inside' : ts_.indicator,
            autoplay: (ts_.autoplay == null||ts_.autoplay == "") ? true : false,
            trigger: (ts_.trigger == null||ts_.trigger == "") ? 'click' : ts_.trigger,
            index: (ts_.index == null||ts_.index == "") ? 0 : ts_.index*1
          });

        });
      }
    }
  }
</script>
