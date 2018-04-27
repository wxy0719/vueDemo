<template>
  <div>
    <Pie2D :dataObj="dataObj.pie2D"></Pie2D>
    <Pie3D :dataObj="dataObj.pie3D"></Pie3D>
    <Donut2D :dataObj="dataObj.donut2D"></Donut2D>
  </div>
</template>
<script>
import Pie2D from '../../components/Pie2D.vue'
import Pie3D from '../../components/Pie3D.vue'
import Donut2D from '../../components/Donut2D.vue'

export default {
  components: {Pie2D,Pie3D,Donut2D},
  data () {
    return {
      //展示不同的图标，放在一个对象中，单独使用时，可以拆分出来
      'dataObj' : {
        'pie2D':{ //2D饼状图:
          'id' : 'pie2dTest', //图表的id
          'dataList' : [
                    {name : 'IE',value : 35.75,color:'#a5c2d5'},
                    {name : 'Chrome',value : 29.84,color:'#cbab4f'},
                    {name : 'Firefox',value : 24.88,color:'#76a871'},
                    {name : 'Safari',value : 6.77,color:'#9f7961'},
                    {name : 'Opera',value : 2.02,color:'#a56f8f'},
                    {name : 'Other',value : 0.73,color:'#6f83a5'}
                  ], //数据源
          'title' : {
            'text':'StatCounter Global Stats',
            'textColor':'#2F4F4F',
            'fontsize':20,
            'font':'微软雅黑',
            'textAlign':'center',
            'height':'30',
            'offsetx':'0',
            'offsety':'0'
          },  //图表的标题
          'lefttitle' : {
            'textAlign':'center',
            'textBaseline':'middle',
            'textFont':'600 14px Verdana',
            'text':'UC浏览器、\n手机QQ浏览器及\n欧朋浏览器的份额\n位列第三方手机浏览器\n市场前三甲',
            'textColor':'#C7172F',
            'offsetx':'70',
            'offsety':'-40',
            'lineHeight':'20'
          },
          'subtitle' : {
            'text':'Top 5 Browsers from 1 to 29 Feb 2012',
            'textColor':'#2F4F4F'
          },  //图表的副标题
          'footnote' : {
            'text':'Data from StatCounter',
            'textColor':'#b5bcc5',
            'height':'40',
            'offsetx':'320',
            'offsety':'10'
          },//图表的脚注
          'animation' : true,  //动画效果
          'showpercent' : true, //是否显示百分比
          'decimalsnum' : 2,//百分比的小数位
          'width' : 800, //图表的宽度
          'height' : 420, //图表的高度
          'shadow' : true, //激活阴影
          'shadowColor' : '#c7c7c7',  //设置阴影颜色
          'shadowBlur' : 2,
  				'shadowColor' : '#aaaaaa',
  				'shadowOffsetx' : 1,
  				'shadowOffsety' : 0,
  				'columnWidth' : 62,
          'sub_option' : {  //修饰柱状图上的文字描述
            'label' : {
              'fontsize':11,
              'fontweight':600,
              'color' : '#4572a7'
            },
            'border' : {
              'width' : 2,
              'radius' : '5 5 0 0',//上圆角设置
              'color' : '#696969'
            }
  				},
          'label' : {
            'color':'#696969',  //图表轴上的字体颜色
            'fontsize':11,
  					'textAlign':'right',
  					'textBaseline':'middle',
  					'rotate':-45,  //旋转角度
            'offsetx':'0',
            'offsety':'10'
          },   //图表各数据项的字体
  				'backgroundColor' : '#FFFFFF',   //图表背景颜色
  				'tip' : {'enable':true},   //图表是否有提示tip
          'legend' : {
            'enable':true,
            'offsetx':'-560',
            'offsety':'-80'
          }   //图表是否有小项目框
        },
        //--------------------------------------------------------------------------------------
        'pie3D':{ //3D饼状图:
          'id' : 'pie3dTest', //图表的id
          'dataList' : [
                    {name : 'IE',value : 35.75,color:'#a5c2d5'},
                    {name : 'Chrome',value : 29.84,color:'#cbab4f'},
                    {name : 'Firefox',value : 24.88,color:'#76a871'},
                    {name : 'Safari',value : 6.77,color:'#9f7961'},
                    {name : 'Opera',value : 2.02,color:'#a56f8f'},
                    {name : 'Other',value : 0.73,color:'#6f83a5'}
                  ], //数据源
          'title' : {
            'text':'StatCounter Global Stats',
            'textColor':'#2F4F4F',
            'fontsize':20,
            'font':'微软雅黑',
            'textAlign':'center',
            'height':'30',
            'offsetx':'0',
            'offsety':'0'
          },  //图表的标题
          'lefttitle' : {
            'textAlign':'center',
            'textBaseline':'middle',
            'textFont':'600 14px Verdana',
            'text':'UC浏览器、\n手机QQ浏览器及\n欧朋浏览器的份额\n位列第三方手机浏览器\n市场前三甲',
            'textColor':'#C7172F',
            'offsetx':'70',
            'offsety':'-40',
            'lineHeight':'20'
          },
          'subtitle' : {
            'text':'Top 5 Browsers from 1 to 29 Feb 2012',
            'textColor':'#2F4F4F'
          },  //图表的副标题
          'footnote' : {
            'text':'Data from StatCounter',
            'textColor':'#b5bcc5',
            'height':'40',
            'offsetx':'320',
            'offsety':'10'
          },//图表的脚注
          'animation' : true,  //动画效果
          'showpercent' : true, //是否显示百分比
          'decimalsnum' : 2,//百分比的小数位
          'width' : 800, //图表的宽度
          'height' : 420, //图表的高度
          'shadow' : true, //激活阴影
          'shadowColor' : '#c7c7c7',  //设置阴影颜色
          'shadowBlur' : 2,
          'shadowColor' : '#aaaaaa',
          'shadowOffsetx' : 1,
          'shadowOffsety' : 0,
          'columnWidth' : 62,
          'sub_option' : {  //修饰柱状图上的文字描述
            'label' : {
              'fontsize':11,
              'fontweight':600,
              'color' : '#4572a7'
            },
            'border' : {
              'width' : 2,
              'radius' : '5 5 0 0',//上圆角设置
              'color' : '#696969'
            }
          },
          'label' : {
            'color':'#696969',  //图表轴上的字体颜色
            'fontsize':11,
            'textAlign':'right',
            'textBaseline':'middle',
            'rotate':-45,  //旋转角度
            'offsetx':'0',
            'offsety':'10'
          },   //图表各数据项的字体
          'backgroundColor' : '#FFFFFF',   //图表背景颜色
          'tip' : {'enable':true},   //图表是否有提示tip
          'legend' : {
            'enable':true,
            'offsetx':'-560',
            'offsety':'-80'
          }   //图表是否有小项目框
        },
        //--------------------------------------------------------------------------------------
        'donut2D':{ //2D环形图:
          'id' : 'donut2dTest', //图表的id
          'dataList' : [
                    {name : 'IE',value : 35.75,color:'#a5c2d5'},
                    {name : 'Chrome',value : 29.84,color:'#cbab4f'},
                    {name : 'Firefox',value : 24.88,color:'#76a871'},
                    {name : 'Safari',value : 6.77,color:'#9f7961'},
                    {name : 'Opera',value : 2.02,color:'#a56f8f'},
                    {name : 'Other',value : 0.73,color:'#6f83a5'}
                  ], //数据源
          'title' : {
            'text':'StatCounter Global Stats',
            'textColor':'#2F4F4F',
            'fontsize':20,
            'font':'微软雅黑',
            'textAlign':'center',
            'height':'30',
            'offsetx':'0',
            'offsety':'0'
          },  //图表的标题
          'lefttitle' : {
            'textAlign':'center',
            'textBaseline':'middle',
            'textFont':'600 14px Verdana',
            'text':'UC浏览器、\n手机QQ浏览器及\n欧朋浏览器的份额\n位列第三方手机浏览器\n市场前三甲',
            'textColor':'#C7172F',
            'offsetx':'70',
            'offsety':'-40',
            'lineHeight':'20'
          },
          'subtitle' : {
            'text':'Top 5 Browsers from 1 to 29 Feb 2012',
            'textColor':'#2F4F4F'
          },  //图表的副标题
          'footnote' : {
            'text':'Data from StatCounter',
            'textColor':'#b5bcc5',
            'height':'40',
            'offsetx':'320',
            'offsety':'10'
          },//图表的脚注
          'animation' : true,  //动画效果
          'showpercent' : true, //是否显示百分比
          'decimalsnum' : 2,//百分比的小数位
          'width' : 800, //图表的宽度
          'height' : 420, //图表的高度
          'shadow' : true, //激活阴影
          'shadowColor' : '#c7c7c7',  //设置阴影颜色
          'shadowBlur' : 2,
          'shadowColor' : '#aaaaaa',
          'shadowOffsetx' : 1,
          'shadowOffsety' : 0,
          'columnWidth' : 62,
          'sub_option' : {  //修饰柱状图上的文字描述
            'label' : {
              'fontsize':11,
              'fontweight':600,
              'color' : '#4572a7'
            },
            'border' : {
              'width' : 2,
              'radius' : '5 5 0 0',//上圆角设置
              'color' : '#696969'
            }
          },
          'label' : {
            'color':'#696969',  //图表轴上的字体颜色
            'fontsize':11,
            'textAlign':'right',
            'textBaseline':'middle',
            'rotate':-45,  //旋转角度
            'offsetx':'0',
            'offsety':'10'
          },   //图表各数据项的字体
          'backgroundColor' : '#FFFFFF',   //图表背景颜色
          'tip' : {'enable':true},   //图表是否有提示tip
          'legend' : {
            'enable':true,
            'offsetx':'-560',
            'offsety':'-80'
          }   //图表是否有小项目框
        }
      }
    }
  },
  created () {
    this.getData()
  },
  methods : {
    getData () {

    }
  }
}
</script>
