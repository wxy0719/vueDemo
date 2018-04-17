<template>
  <ul class="layui-nav layui-nav-tree" lay-filter="demo">
    <!--
    只循环展示2级菜单
    -->
    <li :class="[index == 0 ? 'layui-nav-item layui-nav-itemed' : 'layui-nav-item']" v-for="(d,index) in dataList">
      <a v-if="d[0]" :href="d[2]">{{d[1]}}</a>
      <dl class="layui-nav-child" v-if="d[3].length">
        <dd v-for="d_1 in d[3]">
          <!-- 直接跳转用a标签，子路由用router-link -->
          <a v-if="d_1[3] == 0" :href="d_1[2]">{{d_1[1]}}</a>
          <router-link v-else :to="d_1[2]">{{d_1[1]}}</router-link>
        </dd>
      </dl>
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
