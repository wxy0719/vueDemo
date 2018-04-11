<template>
  <div>index page</div>
</template>
<script>
export default {
  created () {
    this.$api.get('topics','5aae1cc8f5dfc27d7ad98909',r => {
      console.log(r)
    })
  }
}
</script>
