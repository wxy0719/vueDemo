<template>
  <ul class="layui-nav layui-nav-tree" lay-filter="demo">
    <!--
    只循环展示3级菜单
    -->
    <li :class="[index == 0 ? 'layui-nav-item layui-nav-itemed' : 'layui-nav-item']" v-for="(d,index) in dataList">
      <a v-if="d[0]" :href="d[2]">{{d[1]}}</a>
      <dl class="layui-nav-child" v-if="d[3].length">
        <dd v-for="d_1 in d[3]">
          <!-- 直接跳转用a标签，子路由用router-link -->
          <!-- type: 0，路由跳转；1，自身跳转；2，新窗口跳转；9，新一层父级菜单  -->
          <router-link v-if="d_1[3] == 0" :to="d_1[2]">{{d_1[1]}}</router-link>
          <a v-else-if="d_1[3] == 1" href="javascript:;" @click="openWebSite(d_1[2],'_self')" >{{d_1[1]}}</a>
          <a v-else-if="d_1[3] == 2" href="javascript:;" @click="openWebSite(d_1[2],'_blank')" >{{d_1[1]}}</a>

          <!-- 第三级菜单 -->
          <li v-else-if="d_1[3] == 9 && d_1[4].length" class="layui-nav-item" >
            <a v-if="d_1[0]" :href="d_1[2]" style="background-color: #393D49 !important;margin-right:8px;">{{d_1[1]}}</a>
            <dl class="layui-nav-child" style="width:172px !important;">
              <dd v-for="d_2 in d_1[4]">
                <router-link v-if="d_2[3] == 0" :to="d_2[2]">{{d_2[1]}}</router-link>
                <a v-else-if="d_2[3] == 1" href="javascript:;" @click="openWebSite(d_2[2],'_self')" >{{d_2[1]}}</a>
                <a v-else-if="d_2[3] == 2" href="javascript:;" @click="openWebSite(d_2[2],'_blank')" >{{d_2[1]}}</a>
              </dd>
            </dl>
          </li>

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

      },
      openWebSite(url,type){
        window.open(url,type);
      }
    }
  }
</script>
