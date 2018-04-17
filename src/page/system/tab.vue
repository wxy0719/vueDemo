<template>
    <tab :title="title" :content="content" ></tab>
</template>

<script>
  import tab from '../../components/tab.vue'

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
        ]
      }
    }

  }

</script>
