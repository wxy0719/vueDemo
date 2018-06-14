<template>
  <ul class="layui-nav layui-nav-tree" lay-filter="demo">
    <li class="layui-nav-item" v-for="(d,index) in dataList">
      <a v-if="d[0]" :id="d[3]" :href="d[2]" @click="openMenu(d[3],d[4])">{{d[1]}}</a>
      <dl class="layui-nav-child" style="display:none;">
      <router-link to="test">test</router-link>
      </dl>
    </li>
  </ul>
</template>

<script>
  var openedMenu = []

  export default {
    props: ['dataList'],
    data() {
      return {

      }
    },
    created (){

    },
    mounted (){
      let vueObj = this
      $(document).on('click','.subMenuClass',vueObj, function() {
        let flag = $.inArray(menuId, openedMenu)
        let menuId = $(this).attr("id")
        let grade = $(this).attr("grade")
        vueObj.openMenu(menuId,grade)
      });
    },
    methods : {
      getData() {

      },
      openMenu(menuId,grade){
        //判断菜单是否已经加载
        let flag = $.inArray(menuId, openedMenu)
        if(flag != -1){
          return false;
        }
        //懒加载菜单信息
        if(localStorage.esteban_TOKEN!=null&&localStorage.esteban_TOKEN!=""){
          let params = {
            parentId:menuId,
            grade:grade
          }
          this.$baseAPI.get('interfaceAdapter', params ,10005 ,localStorage.esteban_TOKEN , r => {
            let ml = eval(r.menuList)
            let htmlStr = ""
            for(let i=0;i<ml.length;i++){
              let widthClstyle = ""
              if(ml[i][4] == "1"){
                widthClstyle ="style='width:190px !important;'"
              }else if(ml[i][4] == "2"){
                widthClstyle ="style='width:172px !important;'"
              }else if(ml[i][4] == "3"){
                widthClstyle ="style='width:154px !important;'"
              }

              if(ml[i][0] == "true"){
                //菜单是文件夹
                htmlStr +="<dl class='layui-nav-child' "+widthClstyle+" >"+
                          "<dd>"+
                          "<li class='layui-nav-item layui-nav-itemed'>"+
                          "<a id="+ml[i][3]+" grade="+ml[i][4]+" class='subMenuClass' href="+ml[i][2]+" style='background-color: #393D49 !important;margin-right:8px;'>"+ml[i][1]+"</a>"+
                          "<dl class='layui-nav-child' style='display:none;'><router-link to='test'>test</router-link></dl>"+
                          "</li>"+
                          "</dd>"+
                          "</dl>"
              }else{
                //菜单是功能模块
                htmlStr +="<dl class='layui-nav-child' "+widthClstyle+"><a href='#/"+ml[i][2]+"'>"+ml[i][1]+"</a></dl>"
              }
            }

            $("#"+menuId).after(htmlStr);
            openedMenu.push(menuId)
            console.log(ml)
          }, r => {
            layer.alert(r.message)
          })
        }else{
          console.log("本地token缺失，无法获取菜单列表")
        }
        layui.use(['element','layer'], function(){})
      }
    }
  }

</script>
