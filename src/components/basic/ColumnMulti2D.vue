<template>
  <div :id="dataObj.id"></div>
</template>

<script>
  export default {
    props: ['dataObj'],
    data() {
      return {

      }
    },
    mounted (){
      this.getData()
    },
    methods : {
      getData() {
        var chart_ = new iChart.ColumnMulti2D({
          render : this.dataObj.id,  //图表的id
          data: this.dataObj.dataList,  //数据源
          labels: this.dataObj.labels,
          title : {
  					text : (this.dataObj.title==null||this.dataObj.title.text == null||this.dataObj.title.text == "") ? null : this.dataObj.title.text,
  					color : (this.dataObj.title==null||this.dataObj.title.textColor == null||this.dataObj.title.textColor == "") ? '#696969' : this.dataObj.title.textColor,
            fontsize: (this.dataObj.title==null||this.dataObj.title.fontsize == null||this.dataObj.title.fontsize == "") ? 20 : this.dataObj.title.fontsize*1,
            font: (this.dataObj.title==null||this.dataObj.title.font == null||this.dataObj.title.font == "") ? '微软雅黑' : this.dataObj.title.font,
            textAlign: (this.dataObj.title==null||this.dataObj.title.textAlign == null||this.dataObj.title.textAlign == "") ? 'center' : this.dataObj.title.textAlign,
            height: (this.dataObj.title==null||this.dataObj.title.height == null||this.dataObj.title.height == "") ? 30 : this.dataObj.title.height*1,
            offsetx: (this.dataObj.title==null||this.dataObj.title.offsetx == null||this.dataObj.title.offsetx == "") ? 0 : this.dataObj.title.offsetx*1,
            offsety: (this.dataObj.title==null||this.dataObj.title.offsety == null||this.dataObj.title.offsety == "") ? 0 : this.dataObj.title.offsety*1
  				},   //图表的标题
  				subtitle : {
  					text : (this.dataObj.subtitle==null||this.dataObj.subtitle.text == null||this.dataObj.subtitle.text == "") ? null : this.dataObj.subtitle.text,
            color : (this.dataObj.subtitle==null||this.dataObj.subtitle.textColor == null||this.dataObj.subtitle.textColor == "") ? '#696969' : this.dataObj.subtitle.textColor,
            fontsize: (this.dataObj.subtitle==null||this.dataObj.subtitle.fontsize == null||this.dataObj.subtitle.fontsize == "") ? 20 : this.dataObj.subtitle.fontsize*1,
            font: (this.dataObj.subtitle==null||this.dataObj.subtitle.font == null||this.dataObj.subtitle.font == "") ? '微软雅黑' : this.dataObj.subtitle.font,
            textAlign: (this.dataObj.subtitle==null||this.dataObj.subtitle.textAlign == null||this.dataObj.subtitle.textAlign == "") ? 'center' : this.dataObj.subtitle.textAlign,
            height: (this.dataObj.subtitle==null||this.dataObj.subtitle.height == null||this.dataObj.subtitle.height == "") ? 30 : this.dataObj.subtitle.height*1,
            offsetx: (this.dataObj.subtitle==null||this.dataObj.subtitle.offsetx == null||this.dataObj.subtitle.offsetx == "") ? 0 : this.dataObj.subtitle.offsetx*1,
            offsety: (this.dataObj.subtitle==null||this.dataObj.subtitle.offsety == null||this.dataObj.subtitle.offsety == "") ? 0 : this.dataObj.subtitle.offsety*1
  				},   //图表的副标题
  				footnote : {
  					text : (this.dataObj.footnote==null||this.dataObj.footnote.text == null||this.dataObj.footnote.text == "") ? null : this.dataObj.footnote.text,
            color : (this.dataObj.footnote==null||this.dataObj.footnote.textColor == null||this.dataObj.footnote.textColor == "") ? '#696969' : this.dataObj.footnote.textColor,
            fontsize: (this.dataObj.footnote==null||this.dataObj.footnote.fontsize == null||this.dataObj.footnote.fontsize == "") ? 12 : this.dataObj.footnote.fontsize*1,
            font: (this.dataObj.footnote==null||this.dataObj.footnote.font == null||this.dataObj.footnote.font == "") ? '微软雅黑' : this.dataObj.footnote.font,
            textAlign: (this.dataObj.footnote==null||this.dataObj.footnote.textAlign == null||this.dataObj.footnote.textAlign == "") ? 'center' : this.dataObj.footnote.textAlign,
            height: (this.dataObj.footnote==null||this.dataObj.footnote.height == null||this.dataObj.footnote.height == "") ? 30 : this.dataObj.footnote.height*1,
            offsetx: (this.dataObj.footnote==null||this.dataObj.footnote.offsetx == null||this.dataObj.footnote.offsetx == "") ? 0 : this.dataObj.footnote.offsetx*1,
            offsety: (this.dataObj.footnote==null||this.dataObj.footnote.offsety == null||this.dataObj.footnote.offsety == "") ? 0 : this.dataObj.footnote.offsety*1
  				},  //图表的脚注
          animation : (this.dataObj.animation == null||this.dataObj.animation == "") ? false : this.dataObj.animation,  //是否显示动画效果
					showpercent : (this.dataObj.showpercent == null||this.dataObj.showpercent == "") ? false : this.dataObj.showpercent,  //是否显示百分比
					decimalsnum : (this.dataObj.decimalsnum == null||this.dataObj.decimalsnum == "") ? 2 : this.dataObj.decimalsnum*1,   //百分比的小数位
					width : (this.dataObj.width == null||this.dataObj.width == "") ? 800 : this.dataObj.width*1,   //图表的宽度
					height : (this.dataObj.height == null||this.dataObj.height == "") ? 400 : this.dataObj.height*1,  //图表的高度
          shadow : (this.dataObj.shadow == null||this.dataObj.shadow == "") ? false : this.dataObj.shadow, //激活阴影
          shadow_color : (this.dataObj.shadowColor == null||this.dataObj.shadowColor == "") ? '#cccccc' : this.dataObj.shadowColor,  //设置阴影颜色
          shadow_blur : (this.dataObj.shadowBlur == null||this.dataObj.shadowBlur == "") ? 2 : this.dataObj.shadowBlur*1,
  				shadow_offsetx : (this.dataObj.shadowOffsetx == null||this.dataObj.shadowOffsetx == "") ? 0 : this.dataObj.shadowOffsetx*1,
  				shadow_offsety : (this.dataObj.shadowOffsety == null||this.dataObj.shadowOffsety == "") ? 0 : this.dataObj.shadowOffsety*1,
  				column_width : (this.dataObj.columnWidth == null||this.dataObj.columnWidth == "") ? 60 : this.dataObj.columnWidth*1,
					coordinate:{
            offsetx : (this.dataObj.coordinate.offsetx == null||this.dataObj.coordinate.offsetx == "") ? 0 : this.dataObj.coordinate.offsetx*1,  //图表左侧的偏移量
            offsety : (this.dataObj.coordinate.offsety == null||this.dataObj.coordinate.offsety == "") ? 0 : this.dataObj.coordinate.offsety*1,  //图表上侧的偏移量
						background_color : (this.dataObj.coordinate.bgColor == null||this.dataObj.coordinate.bgColor == "") ? '#ffffff' : this.dataObj.coordinate.bgColor,  //图表内的背景颜色
  					width : (this.dataObj.coordinate.width == null||this.dataObj.coordinate.width == "") ? 350 : this.dataObj.coordinate.width*1,  //图表内的宽度
  					height : (this.dataObj.coordinate.height == null||this.dataObj.coordinate.height == "") ? 650 : this.dataObj.coordinate.height*1,  //图表内的高度
  					grid_color : (this.dataObj.coordinate.gridColor == null||this.dataObj.coordinate.gridColor == "") ? '#cccccc' : this.dataObj.coordinate.gridColor,    //图表横水平线的颜色
  					axis:{
  						color : (this.dataObj.coordinate.axis == null||this.dataObj.coordinate.axis.color == null||this.dataObj.coordinate.axis.color == "") ? '#696969' : this.dataObj.coordinate.axis.color,
  						width : (this.dataObj.coordinate.axis == null||this.dataObj.coordinate.axis.width == null||this.dataObj.coordinate.axis.width == "") ? [0,0,0,1] : this.dataObj.coordinate.axis.width,
  					},   //图表四周边框的颜色和宽度
						scale:[{
							 position : (this.dataObj.coordinate.scale == null||this.dataObj.coordinate.scale.position == null||this.dataObj.coordinate.scale.position == "") ? 'left' : this.dataObj.coordinate.scale.position,    //图表数据尺度的位置，左或右
							 start_scale : (this.dataObj.coordinate.scale == null||this.dataObj.coordinate.scale.startScale == null||this.dataObj.coordinate.scale.startScale == "") ? 0 : this.dataObj.coordinate.scale.startScale*1,   //尺度起始数据
							 end_scale : (this.dataObj.coordinate.scale == null||this.dataObj.coordinate.scale.endScale == null||this.dataObj.coordinate.scale.endScale == "") ? 100 : this.dataObj.coordinate.scale.endScale*1,   //尺度终止数据
							 scale_space : (this.dataObj.coordinate.scale == null||this.dataObj.coordinate.scale.scaleSpace == null||this.dataObj.coordinate.scale.scaleSpace == "") ? 5 : this.dataObj.coordinate.scale.scaleSpace*1,   //尺度之间的跨度
               label : {color:this.dataObj.coordinate.scale.label.color},   //尺度的字体颜色
							 listeners:{ //修饰尺度的文字
								parseText:function(t,x,y){
                  return {text:t}
								}
							}
						}]
          },
          label:{
            color : (this.dataObj.label.color == null||this.dataObj.label.color == "") ? '#696969' : this.dataObj.label.color, //图表轴上的字体颜色
            fontsize : (this.dataObj.label.fontsize == null||this.dataObj.label.fontsize == "") ? 12 : this.dataObj.label.fontsize*1,
  					textAlign : (this.dataObj.label.textAlign == null||this.dataObj.label.textAlign == "") ? 'center' : this.dataObj.label.textAlign,
  					textBaseline : (this.dataObj.label.textBaseline == null||this.dataObj.label.textBaseline == "") ? 'middle' : this.dataObj.label.textBaseline,
  					rotate : (this.dataObj.label.rotate == null||this.dataObj.label.rotate == "") ? 0 : this.dataObj.label.rotate*1,  //旋转角度
            offsetx : (this.dataObj.label.offsetx == null||this.dataObj.label.offsetx == "") ? 0 : this.dataObj.label.offsetx*1,
            offsety : (this.dataObj.label.offsety == null||this.dataObj.label.offsety == "") ? 0 : this.dataObj.label.offsety*1
          },
  				background_color : (this.dataObj.backgroundColor == null||this.dataObj.backgroundColor == "") ? '#ffffff' : this.dataObj.backgroundColor,   //图表背景颜色
          sub_option:{  //修饰柱状图上的文字描述
            label : {
              fontsize:(this.dataObj.sub_option == null||this.dataObj.sub_option.label == null||this.dataObj.sub_option.label.fontsize == ""||this.dataObj.sub_option.label.fontsize == null) ? 11 : this.dataObj.sub_option.label.fontsize*1,
              fontweight:(this.dataObj.sub_option == null||this.dataObj.sub_option.label == null||this.dataObj.sub_option.label.fontweight == ""||this.dataObj.sub_option.label.fontweight == null) ? 600 : this.dataObj.sub_option.label.fontweight*1,
              color : (this.dataObj.sub_option == null||this.dataObj.sub_option.label == null||this.dataObj.sub_option.label.color == ""||this.dataObj.sub_option.label.color == null) ? null : this.dataObj.sub_option.label.color
            },
            border : {
              width : (this.dataObj.sub_option == null||this.dataObj.sub_option.border == null||this.dataObj.sub_option.border.width == ""||this.dataObj.sub_option.border.width == null) ? 0 : this.dataObj.sub_option.border.width*1,
              radius : (this.dataObj.sub_option == null||this.dataObj.sub_option.border == null||this.dataObj.sub_option.border.radius == ""||this.dataObj.sub_option.border.radius == null) ? '0 0 0 0' : this.dataObj.sub_option.border.radius,//上圆角设置
              color : (this.dataObj.sub_option == null||this.dataObj.sub_option.border == null||this.dataObj.sub_option.border.color == ""||this.dataObj.sub_option.border.color == null) ? '#696969' : this.dataObj.sub_option.border.color
            },
  					listeners:{
  						parseText:function(r,t){
  							return t+"";
  						}
  					}
  				},
  				tip:{
            enable:(this.dataObj.tip == null||this.dataObj.tip.enable == null||this.dataObj.tip.enable == "") ? false : this.dataObj.tip.enable,
            listeners:{
  						 //tip:提示框对象、name:数据名称、value:数据值、text:当前文本、i:数据点的索引
  						parseText:function(tip,name,value,text,i){
  							//将数字进行千位格式化
  							var f = new String(value);
  							f = f.split("").reverse().join("").replace(/(\d{3})/g,"$1,").split("").reverse();
  							if(f[0]==','){
  								f.shift();
  							}
  							f = f.join("");

  							return name+"人口:<br/>"+f+"人<br/>占全国比重:<br/>"+(value/this.get('total') * 100).toFixed(2)+ '%';
  						}
  					}
          },    //图表是否有提示tip
  				legend:{
            enable:(this.dataObj.legend == null||this.dataObj.legend.enable == null||this.dataObj.legend.enable == "") ? false : this.dataObj.legend.enable,
            offsetx:(this.dataObj.legend == null||this.dataObj.legend.offsetx == null||this.dataObj.legend.offsetx == "") ? 0 : this.dataObj.legend.offsetx*1,
            offsety:(this.dataObj.legend == null||this.dataObj.legend.offsety == null||this.dataObj.legend.offsety == "") ? 0 : this.dataObj.legend.offsety*1,
          }    //图表是否有小项目框
        });

        /**
  			 *利用自定义组件构造左侧说明文本。
  			 */
        var ltObj=this.dataObj.lefttitle
        var lttObj=this.dataObj.leftToptitle
        chart_.plugin(new iChart.Custom({
            drawFn:function(){
              //计算位置
              var coo = chart_.getCoordinate(),
                x = coo.get('originx'),
                y = coo.get('originy'),
                H = coo.height;
              if(ltObj!=null){
                //在左侧的位置，设置逆时针90度的旋转，渲染文字。
                chart_.target.textAlign((ltObj.textAlign == null||ltObj.textAlign == "") ? 'center' : ltObj.textAlign)
                .textBaseline((ltObj.textBaseline == null||ltObj.textBaseline == "") ? 'middle' : ltObj.textBaseline)
                .textFont((ltObj.textFont == null||ltObj.textFont == "") ? '微软雅黑' : ltObj.textFont)
                .fillText(
                  (ltObj.text == null||ltObj.text == "") ? null : ltObj.text,  //文本
                  (ltObj.offsetx == null||ltObj.offsetx == "") ? x-40 : x-ltObj.offsetx*1,   //左偏移量
                  y+H/2,  //上偏移量
                  false,
                  (ltObj.textColor == null||ltObj.textColor == "") ? '#696969' : ltObj.textColor,
                  false,
                  false,
                  false,
                  -90);
              }
              if(lttObj!=null){
                //在左上角，渲染一个单位的文字
                chart_.target.textAlign((lttObj.textAlign == null||lttObj.textAlign == "") ? 'start' : lttObj.textAlign)
                .textBaseline((lttObj.textBaseline == null||lttObj.textBaseline == "") ? 'bottom' : lttObj.textBaseline)
                .textFont((lttObj.textFont == null||lttObj.textFont == "") ? '600 13px Verdana' : lttObj.textFont)
                .fillText(
                  (lttObj.text == null||lttObj.text == "") ? null : lttObj.text,
                  (lttObj.offsetx == null||lttObj.offsetx == "") ? x-40 : x-lttObj.offsetx*1,   //左偏移量,
                  (lttObj.offsety == null||lttObj.offsety == "") ? y-10 : y-lttObj.offsety*1,   //左偏移量
                  false,
                  (lttObj.textColor == null||lttObj.textColor == "") ? '#696969' : lttObj.textColor,);
              }
            }
        }));

        chart_.draw()
      }
    }
  }
</script>
