<template>
  <div class="clearfix layer-area" id="chutiyan">
    <a class="layui-btn layui-btn-primary" href="javascript:;" @click="m1">初体验</a>
    <a class="layui-btn layui-btn-primary" href="javascript:;" @click="m2">第三方扩展皮肤</a>
    <a class="layui-btn layui-btn-primary" href="javascript:;" @click="m3">询问层</a>
    <a class="layui-btn layui-btn-primary" href="javascript:;" @click="m4">提示层</a>
    <a class="layui-btn layui-btn-primary" href="javascript:;" @click="m26">提示层-带方法</a>
    <a class="layui-btn layui-btn-primary" href="javascript:;" @click="m5">墨绿深蓝风</a>
    <a class="layui-btn layui-btn-primary" href="javascript:;" @click="m15">prompt层</a>
    <br/>
    <br/>
    <a class="layui-btn layui-btn-primary" href="javascript:;" style="_display:none;" @click="m6">捕获页</a>
    <a class="layui-btn layui-btn-primary" href="javascript:;" @click="m7">页面层</a>
    <a class="layui-btn layui-btn-primary" href="javascript:;" @click="m8">自定页</a>
    <br/>
    <br/>
    <a class="layui-btn layui-btn-primary" href="javascript:;" @click="m10">iframe层</a>
    <a class="layui-btn layui-btn-primary" href="javascript:;" @click="m11">iframe窗</a>
    <a class="layui-btn layui-btn-primary" href="javascript:;" @click="m18">iframe层-多媒体</a>
    <a class="layui-btn layui-btn-primary" href="javascript:;" @click="m18">iframe层-禁滚动条</a>
    <a class="layui-btn layui-btn-primary" href="javascript:;" @click="m16">tab层</a>
    <a class="layui-btn layui-btn-primary" href="javascript:;" @click="m17">相册层</a>
    <br/>
    <br/>
    <a class="layui-btn layui-btn-primary" href="javascript:;" @click="m12">loading层1</a>
    <a class="layui-btn layui-btn-primary" href="javascript:;" @click="m13">loading层2</a>
    <a class="layui-btn layui-btn-primary" href="javascript:;" @click="m20">loading层3</a>
    <a class="layui-btn layui-btn-primary" href="javascript:;" @click="m21">loading层4</a>
    <a class="layui-btn layui-btn-primary" href="javascript:;" @click="m22">loading层5</a>
    <br/>
    <br/>
    <a class="layui-btn layui-btn-primary" href="javascript:;" @click="m9">tips层-上</a>
    <a class="layui-btn layui-btn-primary" href="javascript:;" @click="m23">tips层-右</a>
    <a class="layui-btn layui-btn-primary" href="javascript:;" @click="m24">tips层-下</a>
    <a class="layui-btn layui-btn-primary" href="javascript:;" @click="m25">tips层-左</a>
    <a class="layui-btn layui-btn-primary" href="javascript:;" id="tips" @click="m14">小tips-带颜色</a>

  </div>
</template>

<script>
export default {
  components: {},
  data () {
    return {

    }
  },
  created () {
    this.getData()
  },
  methods : {
    getData () {

    },
    m1 () {
      layer.alert('内容')
    },
    m2 () {
      layer.alert('内容', {
        icon: 1,
        skin: 'layer-ext-moon' //该皮肤由layer.seaning.com友情扩展。关于皮肤的扩展规则，去这里查阅
      })
    },
    m3 () {
      layer.confirm('您是如何看待前端开发？', {btn: ['重要','奇葩']}, function(){
        layer.msg('的确很重要', {icon: 1});
      }, function(){
        layer.msg('也可以这样', {
          time: 20000, //20s后自动关闭
          btn: ['明白了', '知道了']
        });
      });
    },
    m4 () {
      layer.msg('玩命提示中');
    },
    m5 () {
      layer.alert('墨绿风格，点击确认看深蓝', {skin: 'layui-layer-molv',closeBtn: 0}, function(){
        layer.alert('偶吧深蓝style', {
          skin: 'layui-layer-lan'
          ,closeBtn: 0
          ,anim: 4 //动画类型
        });
      });
    },
    m6 () {
      layer.open({
        type: 1,
        shade: false,
        title: false, //不显示标题
        content: $('.layer_notice'), //捕获的元素，注意：最好该指定的元素要存放在body最外层，否则可能被其它的相对元素所影响
        cancel: function(){
          layer.msg('捕获就是从页面已经存在的元素上，包裹layer的结构', {time: 5000, icon:6});
        }
      });
    },
    m7 () {
      layer.open({
        type: 1,
        skin: 'layui-layer-rim', //加上边框
        area: ['420px', '240px'], //宽高
        content: 'html内容'
      });
    },
    m8 () {
      layer.open({
        type: 1,
        skin: 'layui-layer-demo', //样式类名
        area: ['420px', '240px'], //宽高
        closeBtn: 1, //不显示关闭按钮
        anim: 2,
        maxmin: true,
        shadeClose: true, //开启遮罩关闭
        content: '内容'
      });
    },
    m9 () {
      layer.tips('上', '#tips', {
        tips: [1, '#0FA6D8'] //还可配置颜色
      });
    },
    m10 () {
      var iframe_test=layer.open({
        type: 2,
        title: 'layer mobile页',
        shadeClose: true,
        shade: 0.8,
        area: ['380px', '90%'],
        maxmin: true,
        content: 'http://www.baidu.com' //iframe的url
      });
      layer.full(iframe_test);
    },
    m11 () {
      layer.open({
        type: 2,
        title: false,
        closeBtn: 0, //不显示关闭按钮
        shade: [0],
        area: ['340px', '215px'],
        offset: 'rb', //右下角弹出
        time: 2000, //2秒后自动关闭
        anim: 2,
        content: ['http://www.baidu.com', 'no'], //iframe的url，no代表不显示滚动条
        end: function(){ //此处用于演示
          layer.open({
            type: 2,
            title: '很多时候，我们想最大化看，比如像这个页面。',
            shadeClose: true,
            shade: false,
            maxmin: true, //开启最大化最小化按钮
            area: ['893px', '600px'],
            content: '//fly.layui.com/'
          });
        }
      });
    },
    m12 () {
      var index = layer.load(0, {shade: false}); //0代表加载的风格，支持0-2
    },
    m13 () {
      var index = layer.load(1, {
        shade: [0.1,'#fff'] //0.1透明度的白色背景
      });
    },
    m14 () {
      layer.tips('我是另外一个tips，只不过我长得跟之前那位稍有些不一样。', '#tips', {
        tips: [1, 'red'],
        time: 4000
      });
    },
    m15 () {
      layer.prompt({title: '输入任何口令，并确认', formType: 1}, function(pass, index){
        layer.close(index);
        layer.prompt({title: '随便写点啥，并确认', formType: 2}, function(text, index){
          layer.close(index);
          layer.msg('演示完毕！您的口令：'+ pass +'<br>您最后写下了：'+text);
        });
      });
    },
    m16 () {
      layer.tab({
        area: ['600px', '300px'],
        tab: [{
          title: 'TAB1',
          content: '内容1'
        }, {
          title: 'TAB2',
          content: '内容2'
        }, {
          title: 'TAB3',
          content: '内容3'
        }]
      });
    },
    m17 () {
      $.getJSON('test/photos.json?v='+new Date, function(json){
        layer.photos({
          photos: json //格式见API文档手册页
          ,anim: 5 //0-6的选择，指定弹出图片动画类型，默认随机
        });
      });
    },
    m18 () {
      layer.open({
        type: 2,
        title: false,
        area: ['630px', '360px'],
        shade: 0.8,
        closeBtn: 0,
        shadeClose: true,
        content: '//player.youku.com/embed/XMjY3MzgzODg0'
      });
    },
    m19 () {
      layer.open({
        type: 2,
        area: ['360px', '500px'],
        skin: 'layui-layer-rim', //加上边框
        content: ['http://www.baidu.com', 'no']
      });
    },
    m20 () {
      layer.load(2);
    },
    m21 () {
      layer.msg('加载中', {
        icon: 16
        ,shade: 0.01
      });
    },
    m22 () {
      layer.msg('尼玛，打个酱油', {icon: 4});
    },
    m23 () {
      layer.tips('右', '#tips', {
        tips: [2, '#0FA6D8'] //还可配置颜色
      });
      // layer.tips('Hi，我是tips', '#tips'); 默认就是右边，可以直接这样写
    },
    m24 () {
      layer.tips('下', '#tips', {
        tips: [3, '#0FA6D8'] //还可配置颜色
      });
    },
    m25 () {
      layer.tips('左', '#tips', {
        tips: [4, '#0FA6D8'] //还可配置颜色
      });
    },
    m26 () {
      layer.msg('玩命卖萌中', function(){
        //关闭后的操作
      });
    }
  }
}
</script>
