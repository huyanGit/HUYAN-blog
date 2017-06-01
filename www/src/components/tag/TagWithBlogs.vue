<template>
	<div>
		<div class="tag-head">标签『{{tag.tag_name}}』<span class="blog-number">(共有{{tag_count}}篇文章)</span></div>
		<div class="tag-blog" v-for="blog in blogs">
			<div v-for="_tag in blog.tags">
				<div v-if="_tag.tag_name == tag.tag_name" class="blog-list">			
					<div class="blog-head">
						<router-link :to="'/blog/' + blog.code" class="blog-title">{{blog.title}}</router-link>
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
			    	<router-link :to="'/blog/' + blog.code">查看原文</router-link>
			    </div>
		    </div>
	    </div>
		</div>
	</div>
</template>

<script>
import {timeFilter} from '../../utils/filters'
import tagResource from '../../axios/tag'
import blogResource from '../../axios/blog'
export default{
	data(){
		return {
			tag:{},
			blogs:[],
			tag_count:''
		}
	},
	methods:{
		getTagById: function(tagId){
			var vm = this;
			var tagName = vm.$parent.$route.params.tagName;
			return tagResource.getTagById(tagName).then(function(res){
				vm.tag = res.data;
			});
		},
		getBlogs: function(){
			var vm = this;
			return blogResource.getBlogs().then(function(res){
				vm.blogs = res.data;
				let count = 0;
				for(let i = 0; i < vm.blogs.length; i++){
					for(let j = 0; j < vm.blogs[i].tags.length; j++){
						if(vm.blogs[i].tags[j].tag_name === vm.tag.tag_name){
							count++;
						}
					}
				}
				vm.tag_count = count;
			});
		}
	},
	filters:{
  	timeFilter: function(time){
  		return timeFilter(time).substr(0, 10);
  	}
	},
	created(){
		this.getTagById();
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
.tag-head{
  font-size: 28px;
  font-weight: 600;
  color:#555;	
}
.blog-list{
	margin: 15px auto;
}
@media screen and (max-width: 600px) {
	.tag-head{
		font-size: 24px;
	}
}	
</style>