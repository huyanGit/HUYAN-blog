<template>
  <div class="blog-list">
		<div class="blog">
			<div class="blog-head">
				<div class="blog-title"><a>{{ msg }}</a></div>
		    <div class="b_data">
		    	<span class="b_span"><span class="glyphicon glyphicon-book icon"></span><span>前端</span></span>
		    	<span class="b_span"><span class="glyphicon glyphicon-calendar"></span><span>2016-12-31</span></span>
		    	<span class="b_span"><span class="glyphicon glyphicon-tag"></span><span>JavaScript</span></span>
	    	</div>
	    </div>
	    <div class="blog-content">
	    	<p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Sed posuere consectetur est at lobortis. Cras mattis consectetur purus sit amet fermentum.</p>
	    </div>
	    <div class="blog-findall"><a href="">查看全文</a></div>
		</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'HUYAN-Blog上线'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.blog-list{
	width: 800px;
	margin: 30px auto;
}
.blog-head{
	 color: #888;
}
.blog-title{
	font-size: 24px;
  font-weight: 400;
}
.blog-content{
	font-size: 16px;
	color:#555;
}
.b_data{
  font-size: 12px;
  line-height: 2;
}
.b_span{
	margin-right: 8px;
}
</style>
