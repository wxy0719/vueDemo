<template>
  <ul class="layui-nav layui-nav-tree" lay-filter="demo">
    <li :class="[index == 0 ? 'layui-nav-item layui-nav-itemed' : 'layui-nav-item']" v-for="(d,index) in dataList">
      <a v-if="d[0]" :href="d[2]" @click="openMenu(d[3],d[4])">{{d[1]}}</a>
      <div :id="d[3]" ></div>
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
      openMenu(menuId,grade){
        //懒加载菜单信息
        if(localStorage.esteban_TOKEN!=null&&localStorage.esteban_TOKEN!=""){
          let params = {
            parentId:menuId,
            grade:grade
          }
          this.$baseAPI.get('interfaceAdapter', params ,10005 ,localStorage.esteban_TOKEN , r => {
            r.menuList
            console.log(r.menuList)
          }, r => {
            layer.alert(r.message)
          })
        }else{
          console.log("本地token缺失，无法获取菜单列表")
        }
      }
    }
  }
</script>
