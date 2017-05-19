<template>
	<div>
		<div class="category-head">{{category.category_name}}</div>
		<div class="category-content" v-for="blog in blogs">
			<div class="category-blog">
				<div class="blog-head">
					<h2>{{blog.title}}</h2>
					<div class="blog-data">
						<span class="b_span"><span class="glyphicon glyphicon-book"></span><span class="icon">{{blog.category.category_name}}</span></span>
			    	<span class="b_span"><span class="glyphicon glyphicon-calendar"></span><span class="icon">{{blog.create_at | timeFilter}}</span></span>
			    	<span class="b_span"><span class="glyphicon glyphicon-tag"></span><span v-for="tag in blog.tags" class="icon">{{tag.tag_name}}</span></span>
					</div>
				</div>
				<div class="blog-content"></div>
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
		getBlogsByCategory: function(category){
			var vm = this;
			return blogResource.getBlogsByCategory(category).then(function(res){
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
	}
	
}
</script>

<style scoped>
.category-head{
  font-size: 28px;
  font-weight: 600;
  color:#555;
}	
</style>