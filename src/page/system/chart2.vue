<template>
  <Column2D :id="dataObj[0].id" :dataList="dataObj[0].dataList" :title="dataObj[0].title" :showpercent="dataObj[0].showpercent" :decimalsnum="dataObj[0].decimalsnum"
    :width="dataObj[0].width" :height="dataObj[0].height" :bgColor="dataObj[0].bgColor" :position="dataObj[0].position" :startScale="dataObj[0].startScale"
    :endScale="dataObj[0].endScale" :scaleSpace="dataObj[0].scaleSpace"></Column2D>
</template>
<script>
import Column2D from '../../components/Column2D.vue'


export default {
  components: {Column2D},
  data () {
    return {
      //展示不同的图标，放在一个对象中，单独使用时，可以拆分出来
      'dataObj' : [
        //2D柱状图:
        {
          'id' : 'column2dTest',
          'dataList' : [
                    {name : 'IE',value : 35.75,color:'#a5c2d5'},
                    {name : 'Chrome',value : 29.84,color:'#cbab4f'},
                    {name : 'Firefox',value : 24.88,color:'#76a871'},
                    {name : 'Safari',value : 6.77,color:'#9f7961'},
                    {name : 'Opera',value : 2.02,color:'#a56f8f'},
                    {name : 'Other',value : 0.73,color:'#6f83a5'}
                  ],
          'title' : '',
          'showpercent' : true,
          'decimalsnum' : 2,
          'width' : 800,
          'height' : 400,
          'bgColor' : '#fefefe',
          'position' : 'left',
          'startScale' : '0',
          'endScale' : '40',
          'scaleSpace' : '8'
        }
      ]
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
