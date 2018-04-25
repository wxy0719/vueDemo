<template>
  <ul class="layui-timeline">
    <li class="layui-timeline-item" v-for="item in dataList">
      <i class="layui-icon layui-timeline-axis">{{item.icon}}</i>
      <div class="layui-timeline-content layui-text">
        <h3 class="layui-timeline-title">{{item.title}}</h3>
        <p v-html="item.content"></p>
      </div>
    </li>
  </ul>
</template>

<script>
  export default {
    props: ['dataList'],
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
    }
  }
</script>
