<template>
	<div>
	  <div class="blog-list" v-for = "blog in blogs">
			<div class="blog">
				<div class="blog-head">
					<div class="blog-title"><a>{{blog.title}}</a></div>
			    <div class="b_data">
			    	<span class="b_span"><span class="glyphicon glyphicon-book icon"></span><span>前端</span></span>
			    	<span class="b_span"><span class="glyphicon glyphicon-calendar icon"></span><span>2016-12-31</span></span>
			    	<span class="b_span"><span class="glyphicon glyphicon-tag icon"></span><span>JavaScript</span></span>
		    	</div>
		    </div>
		    <div class="blog-content">
		    	<p>{{blog.content}}</p>
		    </div>
		    <div class="blog-findall"><a href="">查看全文</a></div>
			</div>
	  </div>
	 </div> 
</template>

<script>
import blogResource from '../../axios/blog'
export default {
  data () {
    return {
      blogs: []
    }
  },
  methods: {
  	getBlogs: function(){
  		var vm = this;
  		blogResource.getBlogs().then(function(res){
  			vm.blogs = res.data;
  		});
  	}
  },
  created() {
  	return this.getBlogs();
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
	line-height: 2;
	font-size: 16px;
	color:#555;
}
.b_data{
  font-size: 12px;
  line-height: 2;
}
.b_data .icon{
	margin-right: 3px;
}
.b_span{
	margin-right: 8px;
}
</style>
