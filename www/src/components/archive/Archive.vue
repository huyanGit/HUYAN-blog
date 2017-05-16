<template>
  <div class="blog-archive">
    <div class="year">2017</div>
    <div class="myblog"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'this is archive'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.blog-archive{
	width: 800px;
	margin: 30px auto;
}
.year{
	font-size: 26px;
}
</style>
