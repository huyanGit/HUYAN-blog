<template>
	<div>
		<div class="category-head">标签『{{category.category_name}}』<span class="blog-number">(共有{{category_count}}篇文章)</span></div>
		<div class="category-blog" v-for="(blog, index) in blogs">
			<div v-if="blog.category.category_name == category.category_name" class="blog-list">			
				<div class="blog-head">
					<router-link :to="'/blog/' + blog._id" class="blog-title">{{blog.title}}</router-link :to="'/blog/' + blog._id">
					<div class="b_data">
						<span><span class="glyphicon glyphicon-book"></span><span class="icon">{{blog.category.category_name}}</span></span>
			    	<span><span class="glyphicon glyphicon-calendar"></span><span class="icon">{{blog.create_at | timeFilter}}</span></span>
			    	<span><span class="glyphicon glyphicon-tag"></span><span v-for="tag in blog.tags" class="icon">{{tag.tag_name}}</span></span>
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
import {timeFilter} from '../../utils/filters'
import categoryResource from '../../axios/category'
import blogResource from '../../axios/blog'
export default{
	data(){
		return {
			category:{},
			blogs:[],
			category_count:''
		}
	},
	methods:{
		getCategoryById: function(categoryId){
			var vm = this;
			var categoryId = vm.$parent.$route.params.categoryId;
			return categoryResource.getCategoryById(categoryId).then(function(res){
				vm.category = res.data;
			});
		},
		getBlogs: function(){
			var vm = this;
			return blogResource.getBlogs().then(function(res){
				vm.blogs = res.data;
				let count = 0;
				for(let i = 0; i < vm.blogs.length; i++){
					if(vm.blogs[i].category.category_name === vm.category.category_name){
						count++;
					}
				}
				vm.category_count = count;
			});
		}
	},
	filters:{
  	timeFilter: function(time){
  		return timeFilter(time).substr(0, 10);
  	}
	},
	created(){
		this.getCategoryById();
		this.getBlogs();
	}
}
</script>

<style scoped>
.blog-number{
	font-size: 18px;
  font-weight: 200; 
  margin-left: 10px;
  color: #999;
}
.category-head{
  font-size: 28px;
  font-weight: 600;
  color:#555;
}
.blog-list{
	margin: 15px auto;
}
@media screen and (max-width: 600px) {
	.category-head{
		font-size: 24px;
	}
}	
</style>