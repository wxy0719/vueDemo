<template>
  <div>
    <Area2D :dataObj="dataObj.area2d"></Area2D>
  </div>
</template>
<script>
import Area2D from '../../components/Area2D.vue'


export default {
  components: {Area2D},
  data () {
    return {
      //展示不同的图标，放在一个对象中，单独使用时，可以拆分出来
      'dataObj' : {
        'area2d':{ //2D面积图:
          'id' : 'area2dTest', //图表的id
          'dataList' : [
    				         	{name : 'DPS01A',value:[45,52,54,74,90,84,58,42,36,0,0,0,0,0,0,0,12,56,89,23,47,52,19,38,17,56],color:'#1385a5'},
    				         	{name : 'DPS01B',value:[60,80,105,125,108,120,42,36,78,96,52,41,56,86,32,12,56,87,45,68,12,45,12,89,75],color:'#c56966'}
    				         ], //数据源
          'labels' : ["一月","二月","三月","四月","五月","六月"],
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
            'offsety':'-296',
            'rotate':'90'
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
          'parseBlank' : true, //是否过滤为0的点
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
            'smooth' : true,
            'pointSize' : 7,
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
            'gridColor' : 'gray',  //图表横水平线的颜色
            'axis' : {'color':'#4e5464','width':[0,0,2,2]},  //图表四周边框的颜色和宽度
            'scale' : [{
                'position' : 'left',   //图表数据尺度的位置，左或右
                'startScale' : '0',  //尺度起始数据
                'endScale' : '200',  //尺度终止数据
                'scaleSpace' : '40',  //尺度之间的跨度
                'label' : {'color':'#696969'}  //尺度的字体颜色
              },
              {
                'position' : 'bottom',   //图表数据尺度的位置，上或下
                'label' : {'color':'#696969'}  //尺度的字体颜色
              }
            ]
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
          'crosshair' : {'enable':true}, //是否有十字标线
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
