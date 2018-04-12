<template>
  <div id="content_div" >
    <h1>主题内容！</h1>
    <table>
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
        <td>{{d.title}}</td>
        <td>{{d.visit_count}}</td>
      </tr>
    </table>
  </div>
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
