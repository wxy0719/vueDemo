<template>
  <div class="layui-collapse" lay-accordion="">
    <!--
    只循环展示2级菜单
    -->
    <!-- 第一层 -->
    <div class="layui-colla-item" v-for="item in dataList">
      <h2 class="layui-colla-title">{{item[0]}}</h2>
      <div class="layui-colla-content layui-show">
        <div v-if="item[2]" class="layui-collapse" lay-accordion="">
          <!-- 第二层 -->
          <div class="layui-colla-item" v-for="item_1 in item[2]">
            <h2 class="layui-colla-title">{{item_1[0]}}</h2>
            <div class="layui-colla-content">
              <div v-if="item_1[2]" class="layui-collapse" lay-accordion="">
                <div class="layui-colla-item" v-for="item_2 in item_1[2]">
                  <h2 class="layui-colla-title">{{item_2[0]}}</h2>
                  <div class="layui-colla-content">
                    <!-- 第三层 -->
                    <div v-if="item_2[2]" class="layui-collapse" lay-accordion="">
                      <div class="layui-colla-item" v-for="item_3 in item_2[2]">
                        <h2 class="layui-colla-title">{{item_3[0]}}</h2>
                        <div class="layui-colla-content">
                          {{item_3[1]}}
                        </div>
                      </div>
                    </div>
                    <p v-else >{{item_2[1]}}</p>
                    <!-- 第三层 -->
                  </div>
                </div>
              </div>
              <p v-else >{{item_1[1]}}</p>
            </div>
          </div>
          <!-- 第二层 -->
        </div>
        <p v-else >{{item[1]}}</p>
      </div>
    </div>
    <!-- 第一层 -->
  </div>
</template>

<script>
  export default {
    props: ['dataList'],
    data() {
      return {

      }
    },
    created(){
      this.getData()
    },
    methods : {
      getData() {
        
      }
    }
  }
</script>
