<template>
  <div class="layui-collapse" lay-accordion="">
    <div class="layui-colla-item">
      <h2 class="layui-colla-title">文豪</h2>
      <div class="layui-colla-content layui-show">

        <div class="layui-collapse" lay-accordion="">
          <div class="layui-colla-item">
            <h2 class="layui-colla-title">唐代</h2>
            <div class="layui-colla-content layui-show">

              <div class="layui-collapse" lay-accordion="">
                <div class="layui-colla-item">
                  <h2 class="layui-colla-title">杜甫</h2>
                  <div class="layui-colla-content layui-show">
                    伟大的诗人
                  </div>
                </div>
                <div class="layui-colla-item">
                  <h2 class="layui-colla-title">李白</h2>
                  <div class="layui-colla-content">
                    <p>据说是韩国人</p>
                  </div>
                </div>
                <div class="layui-colla-item">
                  <h2 class="layui-colla-title">王勃</h2>
                  <div class="layui-colla-content">
                    <p>千古绝唱《滕王阁序》</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div class="layui-colla-item">
            <h2 class="layui-colla-title">宋代</h2>
            <div class="layui-colla-content">
              <p>比如苏轼、李清照</p>
            </div>
          </div>
          <div class="layui-colla-item">
            <h2 class="layui-colla-title">当代</h2>
            <div class="layui-colla-content">
              <p>比如贤心</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="layui-colla-item">
      <h2 class="layui-colla-title">科学家</h2>
      <div class="layui-colla-content">
        <p>伟大的科学家</p>
      </div>
    </div>
    <div class="layui-colla-item">
      <h2 class="layui-colla-title">艺术家</h2>
      <div class="layui-colla-content">
        <p>浑身散发着艺术细胞</p>
      </div>
    </div>
  </div>
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

      }
    }
  }
</script>
