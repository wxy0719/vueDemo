<template>
  <blackBoard :dataList='dataList'></blackBoard>
</template>

<script>
import blackBoard from '../../components/blackBoard.vue'

export default {
  components: {blackBoard},
  data () {
    return {
      'dataList' : [
        ['文豪','shayebuxiangshuo',[
          ['唐代','',[
            ['NO.1','李白'],
            ['NO.2','苏轼'],
            ['NO.3','杜甫']
          ]],
          ['宋代','比如苏轼、李清照'],
          ['元代','马致远']
        ]],
        ['科学家','伟大的科学家'],
        ['艺术家','浑身散发着艺术细胞']
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
