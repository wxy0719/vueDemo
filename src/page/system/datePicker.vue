<template>
  <div>



    <fieldset class="layui-elem-field layui-field-title" style="margin-top: 30px;">
    <legend>常规用法</legend>
    </fieldset>

    <div class="layui-form">
    <div class="layui-form-item">
      <div class="layui-inline">
        <label class="layui-form-label">中文版</label>
        <div class="layui-input-inline">
          <datePicker id="test1" placeholder="yyyy-MM-dd" ></datePicker>
        </div>
      </div>
      <div class="layui-inline">
        <label class="layui-form-label">国际版</label>
        <div class="layui-input-inline">
          <datePicker id="test2" placeholder="yyyy-MM-dd" lang="en"></datePicker>
        </div>
      </div>
    </div>
    </div>

    <fieldset class="layui-elem-field layui-field-title" style="margin-top: 30px;">
    <legend>其它选择器</legend>
    </fieldset>

    <div class="layui-form">
    <div class="layui-form-item">
      <div class="layui-inline">
        <label class="layui-form-label">年选择器</label>
        <div class="layui-input-inline">
          <datePicker id="test3" placeholder="yyyy" type="year"></datePicker>
        </div>
      </div>
      <div class="layui-inline">
        <label class="layui-form-label">年月选择器</label>
        <div class="layui-input-inline">
          <datePicker id="test4" placeholder="yyyy-MM" type="month"></datePicker>
        </div>
      </div>
      <div class="layui-inline">
        <label class="layui-form-label">时间选择器</label>
        <div class="layui-input-inline">
          <datePicker id="test5" placeholder="HH:mm:ss" type="time"></datePicker>
        </div>
      </div>
      <div class="layui-inline">
        <label class="layui-form-label">日期时间选择器</label>
        <div class="layui-input-inline">
          <datePicker id="test6" placeholder="yyyy-MM-dd HH:mm:ss" type="datetime"></datePicker>
        </div>
      </div>
    </div>
    </div>

    <fieldset class="layui-elem-field layui-field-title" style="margin-top: 30px;">
    <legend>范围选择</legend>
    </fieldset>

    <div class="layui-form">
    <div class="layui-form-item">
      <div class="layui-inline">
        <label class="layui-form-label">日期范围</label>
        <div class="layui-input-inline">
          <datePicker id="test7" placeholder="-" type="date" range="-"></datePicker>
        </div>
      </div>
      <div class="layui-inline">
        <label class="layui-form-label">年范围</label>
        <div class="layui-input-inline">
          <datePicker id="test8" placeholder="-" type="year" range="-"></datePicker>
        </div>
      </div>
      <div class="layui-inline">
        <label class="layui-form-label">年月范围</label>
        <div class="layui-input-inline">
          <datePicker id="test9" placeholder="-" type="month" range="-"></datePicker>
        </div>
      </div>
      <div class="layui-inline">
        <label class="layui-form-label">时间范围</label>
        <div class="layui-input-inline">
          <datePicker id="test10" placeholder="-" type="time" range="-"></datePicker>
        </div>
      </div>
      <div class="layui-inline">
        <label class="layui-form-label">日期时间范围</label>
        <div class="layui-input-inline">
          <datePicker id="test11" placeholder="-" type="datetime" range="-"></datePicker>
        </div>
      </div>
    </div>
    </div>

    <fieldset class="layui-elem-field layui-field-title" style="margin-top: 30px;">
    <legend>自定义格式</legend>
    </fieldset>

    <div class="layui-form">
    <div class="layui-form-item">
      <div class="layui-inline">
        <label class="layui-form-label">请选择日期</label>
        <div class="layui-input-inline">
          <datePicker id="test12" placeholder="yyyy年MM月dd日" type="date" format="yyyy年MM月dd日"></datePicker>
        </div>
      </div>
      <div class="layui-inline">
        <label class="layui-form-label">请选择日期</label>
        <div class="layui-input-inline">
          <datePicker id="test13" placeholder="dd/MM/yyyy" type="date" format="dd/MM/yyyy"></datePicker>
        </div>
      </div>
      <div class="layui-inline">
        <label class="layui-form-label">请选择月份</label>
        <div class="layui-input-inline">
          <datePicker id="test14" placeholder="yyyyMMdd" type="date" format="yyyyMMdd"></datePicker>
        </div>
      </div>
      <div class="layui-inline">
        <label class="layui-form-label">请选择时间</label>
        <div class="layui-input-inline">
          <datePicker id="test15" placeholder="H点m分" type="time" format="H点m分"></datePicker>
        </div>
      </div>
      <div class="layui-inline">
        <label class="layui-form-label">请选择范围</label>
        <div class="layui-input-inline">
          <datePicker id="test16" placeholder=" ~ " type="date" format="yyyy年MM月dd日" range=" ~ "></datePicker>
        </div>
      </div>
      <div class="layui-inline">
        <label class="layui-form-label">请选择范围</label>
        <div class="layui-input-inline">
          <datePicker id="test17" placeholder=" 开始 到 结束 " type="date" format="yyyy年MM月dd日" range=" ~ "></datePicker>
        </div>
      </div>
    </div>
    </div>

    <fieldset class="layui-elem-field layui-field-title" style="margin-top: 30px;">
    <legend>公历节日和自定义重要日子</legend>
    </fieldset>

    <div class="layui-form">
    <div class="layui-form-item">
      <div class="layui-inline">
        <label class="layui-form-label">开启公历节日</label>
        <div class="layui-input-inline">
          <datePicker id="test18" placeholder="yyyy-MM-dd" calendar="true"></datePicker>
        </div>
      </div>
      <div class="layui-inline">
        <label class="layui-form-label">自定义重要日</label>
        <div class="layui-input-inline">
          <datePicker id="test19" placeholder="yyyy-MM-dd" calendar="true"></datePicker>
        </div>
      </div>
    </div>
    </div>

    <fieldset class="layui-elem-field layui-field-title" style="margin-top: 30px;">
    <legend>控制可选的日期与时间</legend>
    </fieldset>

    <div class="layui-form">
    <div class="layui-form-item">
      <div class="layui-inline">
        <label class="layui-form-label">限定可选日期</label>
        <div class="layui-input-inline">
          <datePicker id="test20" placeholder="yyyy-MM-dd" min="2018-05-05" max="2018-05-20"></datePicker>
        </div>
      </div>
      <div class="layui-inline">
        <label class="layui-form-label">前后若干天可选</label>
        <div class="layui-input-inline">
          <datePicker id="test21" placeholder="yyyy-MM-dd" min="-5" max="5"></datePicker>
        </div>
      </div>
      <div class="layui-inline">
        <label class="layui-form-label">限定可选时间</label>
        <div class="layui-input-inline">
          <datePicker id="test22" placeholder="HH:mm:ss" min="09:30:00" max="17:30:00" type="time"></datePicker>
        </div>
        <div class="layui-form-mid layui-word-aux">
          这里以控制在9:30-17:30为例
        </div>
      </div>
    </div>
    </div>

    <fieldset class="layui-elem-field layui-field-title" style="margin-top: 30px;">
    <legend>其它功能示例</legend>
    </fieldset>

    <div class="layui-form">
    <div class="layui-form-item">
      <div class="layui-inline">
        <label class="layui-form-label">初始赋值</label>
        <div class="layui-input-inline">
          <datePicker id="test23" placeholder="yyyy-MM-dd" isInitValue="true" value="1991-02-10"></datePicker>
        </div>
      </div>

      <div class="layui-inline">
        <label class="layui-form-label">不出现底部栏</label>
        <div class="layui-input-inline">
          <datePicker id="test24" placeholder="yyyy-MM-dd" showBottom="false"></datePicker>
        </div>
      </div>
      <div class="layui-inline">
        <label class="layui-form-label">只出现确定按钮</label>
        <div class="layui-input-inline">
          <datePicker id="test25" placeholder="yyyy-MM-dd" confirmBtn="true" ></datePicker>
        </div>
      </div>

      <div class="layui-inline">
        <label class="layui-form-label" id="test26-1">双击我触发</label>
        <div class="layui-input-inline">
          <datePicker id="test26" placeholder="yyyy-MM-dd" trigger="dblclick"></datePicker>
        </div>
      </div>

      <div class="layui-inline">
        <label class="layui-form-label">日期只读</label>
        <div class="layui-input-inline">
          <datePicker id="test27" placeholder="yyyy-MM-dd" readonly="readonly"></datePicker>
        </div>
      </div>
      <div class="layui-inline">
        <label class="layui-form-label">非input元素</label>
        <div class="layui-input-inline">
          <datePicker id="test28" style_="height: 38px; line-height: 38px; cursor: pointer; border-bottom: 1px solid #e2e2e2;"></datePicker>
        </div>
      </div>
    </div>
    </div>

    <fieldset class="layui-elem-field layui-field-title" style="margin-top: 30px;">
    <legend>其它主题</legend>
    </fieldset>

    <div class="layui-form">
    <div class="layui-form-item">
      <div class="layui-inline">
        <label class="layui-form-label">墨绿主题</label>
        <div class="layui-input-inline">
          <datePicker id="test29" placeholder="yyyy-MM-dd" theme="molv" ></datePicker>
        </div>
      </div>
      <div class="layui-inline">
        <label class="layui-form-label">自定义颜色主题</label>
        <div class="layui-input-inline">
          <datePicker id="test30" placeholder="yyyy-MM-dd" theme="#cccccc" ></datePicker>
        </div>
      </div>
      <div class="layui-inline">
        <label class="layui-form-label">格子主题</label>
        <div class="layui-input-inline">
          <datePicker id="test31" placeholder="yyyy-MM-dd" theme="grid" ></datePicker>
        </div>
      </div>
    </div>
    </div>
    <fieldset class="layui-elem-field layui-field-title" style="margin-top: 30px;">
    <legend>直接嵌套显示</legend>
    </fieldset>

    <div class="site-demo-laydate">
      <datePickerDiv id="test32" position="static"></datePickerDiv>
      <datePickerDiv id="test33" position="static" lang="en"></datePickerDiv>
      <datePickerDiv id="test34" position="static" type="month"></datePickerDiv>
      <datePickerDiv id="test35" position="static" type="time"></datePickerDiv>
    </div>

    <datePicker
      :id="id"
      :lang="lang"
      :type="type"
      :range="range"
      :placeholder="placeholder"
      :format="format"
      :calendar="calendar"
      :mark="mark"
      :min="min"
      :max="max"
      :showBottom="showBottom"
      :btns="btns"
      :theme="theme"
      :position="position"
      :isInitValue="isInitValue"
      :timeDefault="timeDefault"
    ></datePicker>
  </div>
</template>

<script>
import datePicker from '../../components/datePicker.vue'
import datePickerDiv from '../../components/datePickerDiv.vue'

export default {
  components: {datePicker,datePickerDiv},
  data () {
    return {
      'id' : 'test999',
      'lang' : 'cn',
      'type' : 'datetime',
      'range' : false,
      'placeholder' : 'yyyy年MM月dd日 HH时mm分ss秒',
      'format' : 'yyyy年MM月dd日 HH时mm分ss秒',
      'calendar' : true,
      'mark' : {
        '0-10-14': '生日'
        ,'0-12-31': '跨年' //每年的日期
        ,'0-5-10': '工资' //每月某天
        ,'0-0-15': '月中'
        ,'2017-8-15': '' //如果为空字符，则默认显示数字+徽章
        ,'2099-10-14': '呵呵'
      },
      min: '2018-04-14' ,
      max: '2018-05-24' ,
      showBottom: true ,
      btns: ['clear', 'confirm'] ,
      theme: 'molv' ,
      position: '',
      isInitValue : true,
      timeDefault : '2018年05月10日 17时51分00秒'
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
