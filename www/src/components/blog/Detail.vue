<template>
	<div>
		<div class="detail">
			<div class="detail-header">
				<div class="detail-title">{{blog.title}}</div>
				<div class="detail-blogdata">
					<span class="b_span"><span class="glyphicon glyphicon-book"></span><span class="icon">{{blog.category.category_name}}</span></span>
		    	<span class="b_span"><span class="glyphicon glyphicon-calendar"></span><span class="icon">{{blog.create_at | timeFilter}}</span></span>
		    	<span class="b_span"><span class="glyphicon glyphicon-tag"></span><span class="icon" v-for="tag in blog.tags">{{tag.tag_name}}</span></span>
				</div>
			</div>
			<div class="detail-content">
				<div v-html="blog.html.summary" class="blog"></div>
				<div v-html="blog.html.body" class="blog" v-highlight></div>
			</div>
		</div>
	</div>
</template>

<script>
import blogResource from '../../axios/blog'
import {timeFilter} from '../../utils/filters'
export default{
	data(){
		return {
			blog: {}
		}
	},
	methods: {
		getBlogById: function(){
			var vm = this;
			var blogId = vm.$parent.$route.params.blogId;
			blogResource.getBlogById(blogId).then(function(res){
				vm.blog = res.data;
				console.log(vm.blog.category.category_name);
			});
		}
	},
	filters:{
		timeFilter: function(time) {
			return timeFilter(time).substr(0,10);
		}
	},
	created(){
		return this.getBlogById();
	}
}
</script>

<style scoped>
.detail{
	color: #555;
}
.detail-title{
	font-size: 24px;
  font-weight: 400;
}
.detail-blogdata{
  color: #888;
  font-size: 12px;
  line-height: 2;
}
.detail-header{
	text-align: center;
}	
.icon{
	padding: 0 8px;
	margin: 0;
}
.detail-content p{
	font-size: 16px;
 	line-height: 2;
  margin: 20px 10px;
}

</style>