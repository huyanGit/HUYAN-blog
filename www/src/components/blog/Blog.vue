<template>
	<div id="blog">
	  <div class="blog-list" v-for = "blog in blogs">
			<div class="blog">
				<div class="blog-head">
					<div class="blog-title"><router-link :to="'/blog/' + blog._id">{{blog.title}}</router-link></div>
			    <div class="b_data">
			    	<span class="b_span"><span class="glyphicon glyphicon-book"></span><span class="icon">{{blog.category.category_name}}</span></span>
			    	<span class="b_span"><span class="glyphicon glyphicon-calendar"></span><span class="icon">{{blog.create_at | timeFilter}}</span></span>
			    	<span class="b_span"><span class="glyphicon glyphicon-tag"></span><span v-for="tag in blog.tags" class="icon">{{tag.tag_name}}</span></span>
		    	</div>
		    </div>
		    <div class="blog-content">
		    	<div v-html="blog.html.summary"></div>
		    </div>
		    <div class="blog-findall">
		    	<router-link :to="'/blog/' + blog._id">查看原文</router-link>
		    </div>
			</div>
	  </div>
	 </div> 
</template>

<script>
import blogResource from '../../axios/blog'
import {timeFilter} from '../../utils/filters'
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
  filters: {
  	timeFilter: function(time){
  		return timeFilter(time).substr(0, 10);
  	}
  },
  created() {
  	return this.getBlogs();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.blog-list{
	width: inherit;
	margin: 10px auto 30px;
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
.icon{
	padding: 0 8px;
	margin: 0;
}
.blog-findall a{
	font-size: 15px;
	border-bottom: 1px dashed #666;
}

</style>
