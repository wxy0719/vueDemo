<template>
    <!--
    layui-tab-card  卡片风格
    layui-tab-brief 简洁风格
    -->
    <tab :title="title" :content="content" :cssStr="card" :isClose="false"></tab>
</template>

<script>
  import tab from '../../components/basic/tab.vue'

  export default {
    components: {tab},
    data() {
      return {
        'title' : [
          '网站设置',
          '用户管理',
          '权限分配',
          '订单管理'
        ],
        'content': [
          '网站设置111',
          '用户管理222',
          '权限分配333',
          '订单管理444'
        ],
        'card': 'layui-tab-card'
      }
    }

  }

</script>
