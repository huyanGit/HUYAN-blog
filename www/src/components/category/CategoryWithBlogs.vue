<template>
	<div>
		<div class="category-head">{{category.category_name}}</div>
		<div class="category-blog" v-for="blog in blogs">
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
					<p>{{blog.content | blogLengthFilter(150)}}</p>
				</div>
				<div class="blog-findall">
		    	<router-link :to="'/blog/' + blog._id">查看原文</router-link>
		    </div>
	    </div>		
		</div>
	</div>
</template>

<script>
import {timeFilter,blogLengthFilter} from '../../utils/filters'
import categoryResource from '../../axios/category'
import blogResource from '../../axios/blog'
export default{
	data(){
		return {
			category:{},
			blogs:[]
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
			});
		}
	},
	filters:{
  	timeFilter: function(time){
  		return timeFilter(time).substr(0, 10);
  	},
  	blogLengthFilter: function(content, length){
  		return blogLengthFilter(content, length) + '···';
  	}
	},
	created(){
		return this.getCategoryById();
	},
	beforeMount(){
		return this.getBlogs();
	}
}
</script>

<style scoped>
.category-head{
  font-size: 28px;
  font-weight: 600;
  color:#555;
}
.blog-list{
	margin: 15px auto;
}
</style>