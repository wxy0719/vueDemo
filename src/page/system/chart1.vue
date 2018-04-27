<template>
  <div>
    <Column2D :dataObj="dataObj.column2d"></Column2D>
    <ColumnMulti2D :dataObj="dataObj.columnMulti2D"></ColumnMulti2D>
    <ColumnStacked2D :dataObj="dataObj.columnStacked2D"></ColumnStacked2D>

    <Column3D :dataObj="dataObj.column3d"></Column3D>
    <ColumnMulti3D :dataObj="dataObj.columnMulti3D"></ColumnMulti3D>
    <ColumnStacked3D :dataObj="dataObj.columnStacked3D"></ColumnStacked3D>
  </div>
</template>
<script>
import Column2D from '../../components/Column2D.vue'
import ColumnMulti2D from '../../components/ColumnMulti2D.vue'
import ColumnStacked2D from '../../components/ColumnStacked2D.vue'

import Column3D from '../../components/Column3D.vue'
import ColumnMulti3D from '../../components/ColumnMulti3D.vue'
import ColumnStacked3D from '../../components/ColumnStacked3D.vue'

export default {
  components: {Column2D,ColumnMulti2D,ColumnStacked2D,Column3D,ColumnMulti3D,ColumnStacked3D},
  data () {
    return {
      //展示不同的图标，放在一个对象中，单独使用时，可以拆分出来
      'dataObj' : {
        'column2d':{ //2D柱状图:
          'id' : 'column2dTest', //图表的id
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
            'textFont':'600 13px Verdana',
            'text':'Total percent market share',
            'textColor':'#6d869f',
            'offsetx':'50',
            'rotate':'-90'
          },
          'leftToptitle' : {
            'textAlign':'start',
            'textBaseline':'bottom',
            'textFont':'600 13px Verdana',
            'text':'市场占有率（%）',
            'textColor':'#6d869f',
            'offsetx':'50'
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
          'coordinate' : {
            'bgColor' : '#ffffff', //图表内的背景颜色
            'offsetx' : '30',  //图表左侧的偏移量
            'offsety' : '10',  //图表上侧的偏移量
            'width' : '680',  //图表内的宽度
            'height' : '260',  //图表内的高度
            'gridColor' : 'red',  //图表横水平线的颜色
            'axis' : {'color':'#4e5464','width':[0,0,2,2]},  //图表四周边框的颜色和宽度
            'scale' : {
              'position' : 'left',   //图表数据尺度的位置，左或右
              'startScale' : '0',  //尺度起始数据
              'endScale' : '40',  //尺度终止数据
              'scaleSpace' : '8',  //尺度之间的跨度
              'label' : {'color':'#696969'}  //尺度的字体颜色
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
            'offsetx':'20',
            'offsety':'0'
          }   //图表是否有小项目框
        },
        //------------------------------------------------------------------------------------------------------
        'columnMulti2D' : {  //2D蔟状柱形图
          'id' : 'columnMulti2DTest', //图表的id
          'dataList' : [
    				         	{name : 'DPS01A',value:[45,52,54,74,90,84],color:'#1385a5'},
    				         	{name : 'DPS01B',value:[60,80,105,125,108,120],color:'#c56966'}
    				         ], //数据源
          'labels' : ["一月","二月","三月","四月","五月","六月"],
          'title' : {
            'text':'DPS01A型号比DPS01B型号的产品更受用户喜欢',
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
            'textFont':'600 13px Verdana',
            'text':'Total percent market share',
            'textColor':'#6d869f',
            'offsetx':'50',
            'rotate':'-90'
          },
          'leftToptitle' : {
            'textAlign':'start',
            'textBaseline':'bottom',
            'textFont':'600 13px Verdana',
            'text':'单位（万台）',
            'textColor':'#6d869f',
            'offsetx':'50'
          },
          'subtitle' : {
            'text':'2012上半年DPS01A型号与DPS01B型号的鼠标销售比较',
            'textColor':'#2F4F4F'
          },  //图表的副标题
          'footnote' : {
            'text':'数据来源：销售中心',
            'textColor':'#b5bcc5',
            'height':'40',
            'offsetx':'320',
            'offsety':'10'
          },//图表的脚注
          'animation' : true,  //动画效果
          'showpercent' : false, //是否显示百分比
          'decimalsnum' : 2,//百分比的小数位
          'width' : 800, //图表的宽度
          'height' : 420, //图表的高度
          'shadow' : true, //激活阴影
          'shadowColor' : '#c7c7c7',  //设置阴影颜色
          'shadowBlur' : 2,
          'shadowColor' : '#aaaaaa',
          'shadowOffsetx' : 1,
          'shadowOffsety' : 0,
          'columnWidth' : 30,
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
          'coordinate' : {
            'bgColor' : '#ffffff', //图表内的背景颜色
            'offsetx' : '30',  //图表左侧的偏移量
            'offsety' : '10',  //图表上侧的偏移量
            'width' : '680',  //图表内的宽度
            'height' : '260',  //图表内的高度
            'gridColor' : 'red',  //图表横水平线的颜色
            'axis' : {'color':'#4e5464','width':[0,0,2,2]},  //图表四周边框的颜色和宽度
            'scale' : {
              'position' : 'left',   //图表数据尺度的位置，左或右
              'startScale' : '0',  //尺度起始数据
              'endScale' : '140',  //尺度终止数据
              'scaleSpace' : '20',  //尺度之间的跨度
              'label' : {'color':'#696969'}  //尺度的字体颜色
            }
          },
          'label' : {
            'color':'#696969',  //图表轴上的字体颜色
            'fontsize':11,
            'textAlign':'right',
            'textBaseline':'middle',
            'rotate':0,  //旋转角度
            'offsetx':'0',
            'offsety':'10'
          },   //图表各数据项的字体
          'backgroundColor' : '#FFFFFF',   //图表背景颜色
          'tip' : {'enable':true},   //图表是否有提示tip
          'legend' : {
            'enable':true,
            'offsetx':'20',
            'offsety':'0'
          }   //图表是否有小项目框
        },
        //-----------------------------------------------------------------------------------------------
        'columnStacked2D' : {  //2D堆积柱形图
          'id' : 'columnStacked2DTest', //图表的id
          'dataList' : [
			         	{name : '一月',value:[45,52,54,60],color:'#4f81bd'},
			         	{name : '二月',value:[60,80,105,80],color:'#bd4d4a'},
			         	{name : '三月',value:[50,70,120,100],color:'#98c045'}
                ], //数据源
          'labels' : ["北京","上海","广州","深圳"],
          'title' : {
            'text':'DPS01A型号产品第一季度4城市销售情况',
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
            'textFont':'600 13px Verdana',
            'text':'Total percent market share',
            'textColor':'#6d869f',
            'offsetx':'50',
            'rotate':'-90'
          },
          'leftToptitle' : {
            'textAlign':'start',
            'textBaseline':'bottom',
            'textFont':'600 13px Verdana',
            'text':'单位（万台）',
            'textColor':'#6d869f',
            'offsetx':'50'
          },
          'subtitle' : {
            'text':'2012上半年DPS01A型号与DPS01B型号的鼠标销售比较',
            'textColor':'#2F4F4F'
          },  //图表的副标题
          'footnote' : {
            'text':'数据来源：销售中心',
            'textColor':'#b5bcc5',
            'height':'40',
            'offsetx':'320',
            'offsety':'10'
          },//图表的脚注
          'animation' : true,  //动画效果
          'showpercent' : false, //是否显示百分比
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
          'coordinate' : {
            'bgColor' : '#ffffff', //图表内的背景颜色
            'offsetx' : '30',  //图表左侧的偏移量
            'offsety' : '10',  //图表上侧的偏移量
            'width' : '680',  //图表内的宽度
            'height' : '260',  //图表内的高度
            'gridColor' : 'red',  //图表横水平线的颜色
            'axis' : {'color':'#4e5464','width':[0,0,2,2]},  //图表四周边框的颜色和宽度
            'scale' : {
              'position' : 'left',   //图表数据尺度的位置，左或右
              'startScale' : '0',  //尺度起始数据
              'endScale' : '300',  //尺度终止数据
              'scaleSpace' : '50',  //尺度之间的跨度
              'label' : {'color':'#696969'}  //尺度的字体颜色
            }
          },
          'label' : {
            'color':'#696969',  //图表轴上的字体颜色
            'fontsize':11,
            'textAlign':'right',
            'textBaseline':'middle',
            'rotate':0,  //旋转角度
            'offsetx':'0',
            'offsety':'10'
          },   //图表各数据项的字体
          'backgroundColor' : '#FFFFFF',   //图表背景颜色
          'tip' : {'enable':true},   //图表是否有提示tip
          'legend' : {
            'enable':true,
            'offsetx':'20',
            'offsety':'0'
          }   //图表是否有小项目框
        },
        //------------------------------------------------------------------------------------------------
        'column3d':{ //3D柱状图:
          'id' : 'column3dTest', //图表的id
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
            'textFont':'600 13px Verdana',
            'text':'Total percent market share',
            'textColor':'#6d869f',
            'offsetx':'50',
            'rotate':'-90'
          },
          'leftToptitle' : {
            'textAlign':'start',
            'textBaseline':'bottom',
            'textFont':'600 13px Verdana',
            'text':'市场占有率（%）',
            'textColor':'#6d869f',
            'offsetx':'50'
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
          'coordinate' : {
            'bgColor' : '#ffffff', //图表内的背景颜色
            'offsetx' : '30',  //图表左侧的偏移量
            'offsety' : '10',  //图表上侧的偏移量
            'width' : '680',  //图表内的宽度
            'height' : '260',  //图表内的高度
            'gridColor' : 'red',  //图表横水平线的颜色
            'axis' : {'color':'#4e5464','width':[0,0,2,2]},  //图表四周边框的颜色和宽度
            'scale' : {
              'position' : 'left',   //图表数据尺度的位置，左或右
              'startScale' : '0',  //尺度起始数据
              'endScale' : '40',  //尺度终止数据
              'scaleSpace' : '8',  //尺度之间的跨度
              'label' : {'color':'#696969'}  //尺度的字体颜色
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
            'offsetx':'20',
            'offsety':'0'
          }   //图表是否有小项目框
        },
        //------------------------------------------------------------------------------------------------------
        'columnMulti3D' : {  //3D蔟状柱形图
          'id' : 'columnMulti3DTest', //图表的id
          'dataList' : [
    				         	{name : 'DPS01A',value:[45,52,54,74,90,84],color:'#1385a5'},
    				         	{name : 'DPS01B',value:[60,80,105,125,108,120],color:'#c56966'}
    				         ], //数据源
          'labels' : ["一月","二月","三月","四月","五月","六月"],
          'title' : {
            'text':'DPS01A型号比DPS01B型号的产品更受用户喜欢',
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
            'textFont':'600 13px Verdana',
            'text':'Total percent market share',
            'textColor':'#6d869f',
            'offsetx':'50',
            'rotate':'-90'
          },
          'leftToptitle' : {
            'textAlign':'start',
            'textBaseline':'bottom',
            'textFont':'600 13px Verdana',
            'text':'单位（万台）',
            'textColor':'#6d869f',
            'offsetx':'50'
          },
          'subtitle' : {
            'text':'2012上半年DPS01A型号与DPS01B型号的鼠标销售比较',
            'textColor':'#2F4F4F'
          },  //图表的副标题
          'footnote' : {
            'text':'数据来源：销售中心',
            'textColor':'#b5bcc5',
            'height':'40',
            'offsetx':'320',
            'offsety':'10'
          },//图表的脚注
          'animation' : true,  //动画效果
          'showpercent' : false, //是否显示百分比
          'decimalsnum' : 2,//百分比的小数位
          'width' : 800, //图表的宽度
          'height' : 420, //图表的高度
          'shadow' : true, //激活阴影
          'shadowColor' : '#c7c7c7',  //设置阴影颜色
          'shadowBlur' : 2,
          'shadowColor' : '#aaaaaa',
          'shadowOffsetx' : 1,
          'shadowOffsety' : 0,
          'columnWidth' : 30,
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
          'coordinate' : {
            'bgColor' : '#ffffff', //图表内的背景颜色
            'offsetx' : '30',  //图表左侧的偏移量
            'offsety' : '10',  //图表上侧的偏移量
            'width' : '680',  //图表内的宽度
            'height' : '260',  //图表内的高度
            'gridColor' : 'red',  //图表横水平线的颜色
            'axis' : {'color':'#4e5464','width':[0,0,2,2]},  //图表四周边框的颜色和宽度
            'scale' : {
              'position' : 'left',   //图表数据尺度的位置，左或右
              'startScale' : '0',  //尺度起始数据
              'endScale' : '140',  //尺度终止数据
              'scaleSpace' : '20',  //尺度之间的跨度
              'label' : {'color':'#696969'}  //尺度的字体颜色
            }
          },
          'label' : {
            'color':'#696969',  //图表轴上的字体颜色
            'fontsize':11,
            'textAlign':'right',
            'textBaseline':'middle',
            'rotate':0,  //旋转角度
            'offsetx':'0',
            'offsety':'10'
          },   //图表各数据项的字体
          'backgroundColor' : '#FFFFFF',   //图表背景颜色
          'tip' : {'enable':true},   //图表是否有提示tip
          'legend' : {
            'enable':true,
            'offsetx':'20',
            'offsety':'0'
          }   //图表是否有小项目框
        },
        //-----------------------------------------------------------------------------------------------
        'columnStacked3D' : {  //3D堆积柱形图
          'id' : 'columnStacked3DTest', //图表的id
          'dataList' : [
			         	{name : '一月',value:[45,52,54,60],color:'#4f81bd'},
			         	{name : '二月',value:[60,80,105,80],color:'#bd4d4a'},
			         	{name : '三月',value:[50,70,120,100],color:'#98c045'}
                ], //数据源
          'labels' : ["北京","上海","广州","深圳"],
          'title' : {
            'text':'DPS01A型号产品第一季度4城市销售情况',
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
            'textFont':'600 13px Verdana',
            'text':'Total percent market share',
            'textColor':'#6d869f',
            'offsetx':'50',
            'rotate':'-90'
          },
          'leftToptitle' : {
            'textAlign':'start',
            'textBaseline':'bottom',
            'textFont':'600 13px Verdana',
            'text':'单位（万台）',
            'textColor':'#6d869f',
            'offsetx':'50'
          },
          'subtitle' : {
            'text':'2012上半年DPS01A型号与DPS01B型号的鼠标销售比较',
            'textColor':'#2F4F4F'
          },  //图表的副标题
          'footnote' : {
            'text':'数据来源：销售中心',
            'textColor':'#b5bcc5',
            'height':'40',
            'offsetx':'320',
            'offsety':'10'
          },//图表的脚注
          'animation' : true,  //动画效果
          'showpercent' : false, //是否显示百分比
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
          'coordinate' : {
            'bgColor' : '#ffffff', //图表内的背景颜色
            'offsetx' : '30',  //图表左侧的偏移量
            'offsety' : '10',  //图表上侧的偏移量
            'width' : '680',  //图表内的宽度
            'height' : '260',  //图表内的高度
            'gridColor' : 'red',  //图表横水平线的颜色
            'axis' : {'color':'#4e5464','width':[0,0,2,2]},  //图表四周边框的颜色和宽度
            'scale' : {
              'position' : 'left',   //图表数据尺度的位置，左或右
              'startScale' : '0',  //尺度起始数据
              'endScale' : '300',  //尺度终止数据
              'scaleSpace' : '50',  //尺度之间的跨度
              'label' : {'color':'#696969'}  //尺度的字体颜色
            }
          },
          'label' : {
            'color':'#696969',  //图表轴上的字体颜色
            'fontsize':11,
            'textAlign':'right',
            'textBaseline':'middle',
            'rotate':0,  //旋转角度
            'offsetx':'0',
            'offsety':'10'
          },   //图表各数据项的字体
          'backgroundColor' : '#FFFFFF',   //图表背景颜色
          'tip' : {'enable':true},   //图表是否有提示tip
          'legend' : {
            'enable':true,
            'offsetx':'20',
            'offsety':'0'
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
