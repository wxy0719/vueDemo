<template>
    <table class="dataTable_css">
      <tr>
        <td>1</td>
        <td>2</td>
        <td>3</td>
        <td>4</td>
      </tr>
      <tr>
        <td v-for='c in column_list'>{{c}}</td>
      </tr>
      <tr v-for='d in data_list'>
        <td>{{d.id}}</td>
        <td>{{d.author.loginname}}</td>
        <td>{{$dateTimeUtils.transTime(d.create_at)}}</td>
        <td><router-link :to="'/content/' + d.id">{{d.title}}</router-link></td>
        <td>{{d.visit_count}}</td>
      </tr>
    </table>
</template>

<script>
export default {
  props: ['column_list','data_list'],
  data() {
    return {

    }
  }
}
</script>

<style>
  .dataTable_css {
    width: 80%;
    margin:auto;
  }
</style>
