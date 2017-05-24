<template>
	<div>
		<div class="tag-head">{{tag.tag_name}}</div>
		<div class="tag-blog" v-for="blog in blogs">
			<div v-for="_tag in blog.tags">
				<div v-if="_tag.tag_name == tag.tag_name" class="blog-list">			
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
	</div>
</template>

<script>
import {timeFilter,blogLengthFilter} from '../../utils/filters'
import tagResource from '../../axios/tag'
import blogResource from '../../axios/blog'
export default{
	data(){
		return {
			tag:{},
			blogs:[]
		}
	},
	methods:{
		getTagById: function(tagId){
			var vm = this;
			var tagId = vm.$parent.$route.params.tagId;
			return tagResource.getTagById(tagId).then(function(res){
				vm.tag = res.data;
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
		return this.getTagById();
	},
	beforeMount(){
		return this.getBlogs();
	}
}
</script>

<style scoped>
.tag-head{
  font-size: 28px;
  font-weight: 600;
  color:#555;	
}
.blog-list{
	margin: 15px auto;
}
</style>