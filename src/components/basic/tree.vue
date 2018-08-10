<template>
  <ul class="layui-nav layui-nav-tree" lay-filter="demo">
    <li class="layui-nav-item" v-for="(d,index) in dataList" :menuName="d[1]">
      <a v-if="d[0]" :id="d[3]" :href="d[2]" @click="openMenu(d[3],d[4])">{{d[1]}}</a>
      <dl class="layui-nav-child" style="display:none;">
      <router-link to="test">test</router-link>
      </dl>
    </li>
  </ul>
</template>

<script>
  var openedMenu = []
  var totalMenuNum = 10

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
            grade:grade,
            token:localStorage.esteban_TOKEN
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
                          "<li class='layui-nav-item layui-nav-itemed' menuName='"+ml[i][1]+"'>"+
                          "<a id="+ml[i][3]+" grade="+ml[i][4]+" class='subMenuClass' href="+ml[i][2]+" style='background-color: #393D49 !important;margin-right:8px;'>"+ml[i][1]+"</a>"+
                          "<dl class='layui-nav-child' style='display:none;'><router-link to='test'>test</router-link></dl>"+
                          "</li>"+
                          "</dd>"+
                          "</dl>"
              }else{
                //菜单是功能模块
                //htmlStr +="<dl class='layui-nav-child' "+widthClstyle+"><a href='#/"+ml[i][2]+"'>"+ml[i][1]+"</a></dl>"
                htmlStr +="<dl class='layui-nav-child menuNavChild' "+widthClstyle+" id='"+ml[i][3]+"' menuUrl='"+ml[i][2]+"'><a href='#/"+ml[i][2]+"'>"+ml[i][1]+"</a></dl>"
              }
            }

            $("#"+menuId).after(htmlStr);
            openedMenu.push(menuId)

            //左侧菜单点击打开tab事件
            $(".menuNavChild").off("click").on("click", function(e){
              let navTitle_ = this.innerText
              let id_ = this.id
              let navId_ = "nav_tab_"+this.id
              let menuUrl_ = this.getAttribute("menuUrl")

              //rightTabNav 是固定写死的id
              //判断总标签数，大于10个，则不能新打开
              if($(".layui-tab[lay-filter='rightTabNav'] ul:first.layui-tab-title").children(".tab_nav_class").length <= totalMenuNum){
                if($(".layui-tab-title [lay-id='"+navId_+"']").length == 0){
                  layui.use('element', function(){
                    var element = layui.element;
                    element.tabAdd('rightTabNav', {
                      title: "<a href='#/"+menuUrl_+"' tabMenuId='"+id_+"' class='tabMenuClick' style='color: #646E7A !important;height:30px;line-height:30px;'>"+
                             "<div class='navDot' style='position:absolute;top:8px;width:13px;height:13px;background-color:#E8EAEC;border-radius:50px;float:left'>&nbsp;</div>"+
                             "<div style='position:absolute;left:40px;float:left;'>"+navTitle_+"</div>"+
                             "</a>"
                      ,content: "resultHtml"
                      ,id: navId_
                    });

                    //tab绑定切换事件
                    $(".tabMenuClick").off("click").on("click", function(){
                      let tabMenuId_ = this.getAttribute("tabMenuId")
                      let mStr = "<a style='color:#878585;'>home</a>"

                      if(tabMenuId_!="home"){
                        if($($("#"+tabMenuId_)[0].parentNode.parentNode.parentNode.parentNode).isChildOf(".layui-nav-tree")){
                          mStr+="&nbsp;&nbsp;&nbsp;<a style='color:#878585;'>/&nbsp;&nbsp;&nbsp;"+$("#"+tabMenuId_)[0].parentNode.parentNode.parentNode.parentNode.getAttribute("menuName")+"</a>"
                        }
                        if($($("#"+tabMenuId_)[0].parentNode).isChildOf(".layui-nav-tree")){
                          mStr+="&nbsp;&nbsp;&nbsp;<a style='color:#878585;'>/&nbsp;&nbsp;&nbsp;"+$("#"+tabMenuId_)[0].parentNode.getAttribute("menuName")+"</a>"
                        }
                        mStr+="&nbsp;&nbsp;&nbsp;<b style='color:black !important;'>/&nbsp;&nbsp;&nbsp;"+$("#"+tabMenuId_)[0].innerText+"</b>"
                      }

                      $("#header-url-str").html(mStr)
                    })

                    //tab绑定关闭事件
                    $(".layui-tab[lay-filter='rightTabNav'] .layui-tab-close").off("click").on("click", function(){
                      let menuId = $(this).parent()[0].getAttribute("lay-id")
                      layui.use('element', function(){
                        var element = layui.element;
                        element.tabDelete('rightTabNav', menuId);
                      })
                      window.location.href = $(this).parent()[0].previousElementSibling.firstElementChild.getAttribute("href")

                      let tabMenuId_ = $(this).parent()[0].previousElementSibling.firstElementChild.getAttribute("tabMenuId")
                      let mStr = "<a style='color:#878585;'>home</a>"

                      if(tabMenuId_!="home"){
                        if($($("#"+tabMenuId_)[0].parentNode.parentNode.parentNode.parentNode).isChildOf(".layui-nav-tree")){
                          mStr+="&nbsp;&nbsp;&nbsp;<a style='color:#878585;'>/&nbsp;&nbsp;&nbsp;"+$("#"+tabMenuId_)[0].parentNode.parentNode.parentNode.parentNode.getAttribute("menuName")+"</a>"
                        }
                        if($($("#"+tabMenuId_)[0].parentNode).isChildOf(".layui-nav-tree")){
                          mStr+="&nbsp;&nbsp;&nbsp;<a style='color:#878585;'>/&nbsp;&nbsp;&nbsp;"+$("#"+tabMenuId_)[0].parentNode.getAttribute("menuName")+"</a>"
                        }
                        mStr+="&nbsp;&nbsp;&nbsp;<b style='color:black !important;'>/&nbsp;&nbsp;&nbsp;"+$("#"+tabMenuId_)[0].innerText+"</b>"
                      }

                      $("#header-url-str").html(mStr)
                    })

                    element.tabChange('rightTabNav', navId_);
                    element.init();
                  });

                  let mStr = "<a style='color:#878585;'>home</a>"
                  if($($("#"+id_)[0].parentNode.parentNode.parentNode.parentNode).isChildOf(".layui-nav-tree")){
                    mStr+="&nbsp;&nbsp;&nbsp;<a style='color:#878585;'>/&nbsp;&nbsp;&nbsp;"+$("#"+id_)[0].parentNode.parentNode.parentNode.parentNode.getAttribute("menuName")+"</a>"
                  }
                  if($($("#"+id_)[0].parentNode).isChildOf(".layui-nav-tree")){
                    mStr+="&nbsp;&nbsp;&nbsp;<a style='color:#878585;'>/&nbsp;&nbsp;&nbsp;"+$("#"+id_)[0].parentNode.getAttribute("menuName")+"</a>"
                  }
                  mStr+="&nbsp;&nbsp;&nbsp;<b style='color:black !important;'>/&nbsp;&nbsp;&nbsp;"+$("#"+id_)[0].innerText+"</b>"

                  $("#header-url-str").html(mStr)
                }else{

                }
              }else{
                if($(".layui-tab-title [lay-id='"+navId_+"']").length == 0){
                  e.preventDefault()
                  layer.alert("您已打开超过"+totalMenuNum+"个窗口，请关闭部分窗口后再重新打开")
                }else{
                  let mStr = "<a style='color:#878585;'>home</a>"
                  if($($("#"+id_)[0].parentNode.parentNode.parentNode.parentNode).isChildOf(".layui-nav-tree")){
                    mStr+="&nbsp;&nbsp;&nbsp;<a style='color:#878585;'>/&nbsp;&nbsp;&nbsp;"+$("#"+id_)[0].parentNode.parentNode.parentNode.parentNode.getAttribute("menuName")+"</a>"
                  }
                  if($($("#"+id_)[0].parentNode).isChildOf(".layui-nav-tree")){
                    mStr+="&nbsp;&nbsp;&nbsp;<a style='color:#878585;'>/&nbsp;&nbsp;&nbsp;"+$("#"+id_)[0].parentNode.getAttribute("menuName")+"</a>"
                  }
                  mStr+="&nbsp;&nbsp;&nbsp;<b style='color:black !important;'>/&nbsp;&nbsp;&nbsp;"+$("#"+id_)[0].innerText+"</b>"
                  $("#header-url-str").html(mStr)

                  //tab选中
                  layui.use('element', function(){
                    var element = layui.element;
                    element.tabChange('rightTabNav', navId_);
                    element.init();
                  })

                }
              }
            });

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
