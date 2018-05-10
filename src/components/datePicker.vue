<template>
  <input type="text" class="layui-input" :id="id" :placeholder="placeholder" :value="timeDefault">
</template>

<script>
  export default {
    props: [
      'id',   //元素ID
      'lang',   //cn，en
      'type',   //year,month,time,datetime
      'range',   //true/false; 直接字符串时，为连接两个时间中间的文字
      'placeholder',   //提示信息
      'format',   //格式"yyyy年MM月dd日H点m分"
      'calendar',   //true/false  开启公历节日
      'mark',   // 重要日期集合
      'min',   //  最小时间范围,'yyyy-MM-dd HH:mm:ss'; 直接填写数字时，为偏移量
      'max',   //  最大时间范围,'yyyy-MM-dd HH:mm:ss'; 直接填写数字时，为偏移量
      'showBottom',   //  true/false  是否显示底部按钮
      'btns',   // 自定义底部按钮
      'theme',   //  主题，"molv","grid"; 可直接填写颜色 '#393D49'
      'position',   //  直接显示在页面上 'static',
      'isInitValue',  // 是否有默认时间
      'timeDefault'  //默认时间值
    ],
    data() {
      return {

      }
    },
    created (){
      this.getData(this)
    },
    methods : {
      getData(ts_) {
        layui.use('laydate', function(){
          var laydate = layui.laydate;
          var type_= (ts_.type == null||ts_.type == "") ? 'datetime' : ts_.type
          var format_= ts_.format
          if(format_==null||format_==""){
            if("year"==type_){
              format_ = "yyyy"
            }else if("month"==type_){
              format_ = "yyyy-MM"
            }else if("time"==type_){
              format_ = "HH:mm:ss"
            }else if("datetime"==type_){
              format_ = "yyyy-MM-dd HH:mm:ss"
            }
          }

          var mark_ ={

          }
          laydate.render({
            elem: '#'+ts_.id,
            lang: (ts_.lang == null||ts_.lang == "") ? 'cn' : ts_.lang,
            type: type_,
            range: (ts_.range == null||ts_.range == "") ? false : ts_.range,
            placeholder: (ts_.placeholder == null||ts_.placeholder == "") ? '' : ts_.placeholder,
            format: format_,
            calendar: (ts_.calendar == null||ts_.calendar == "") ? false : ts_.calendar,
            mark: (ts_.mark == null||ts_.mark == "") ? mark_ : ts_.mark,
            min: (ts_.min == null||ts_.min == "") ? '1990-01-01 00:00:00' : ts_.min,
            max: (ts_.max == null||ts_.max == "") ? '2088-12-31 59:59:59' : ts_.max,
            showBottom: (ts_.showBottom == null||ts_.showBottom == "") ? true : ts_.showBottom,
            btns: (ts_.btns == null||ts_.btns == "") ? ['clear','now', 'confirm'] : ts_.btns,
            theme: (ts_.theme == null||ts_.theme == "") ? null : ts_.theme,
            position: (ts_.position == null||ts_.position == "") ? '' : ts_.position,
            isInitValue: (ts_.isInitValue == null||ts_.isInitValue == "") ? false : ts_.isInitValue
          });

        });
      }
    }
  }
</script>
