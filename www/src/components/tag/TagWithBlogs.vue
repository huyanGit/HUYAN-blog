<template>
	<div>
		<div class="tag-head">标签『{{tag.tag_name}}』<span class="blog-number">(共有{{count}}篇文章)</span></div>
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
import { mapState, mapGetters } from 'vuex'
export default{
	computed: {
		...mapState({
			tag: state => state.tag.tag,
			blogs: state => state.blog.blogs
		}),
		...mapGetters({
			count: 'countByTag'
		})
	},
	created(){
		const tagName = this.$parent.$route.params.tagName
		this.$store.dispatch('getOneTag', tagName)
		this.$store.dispatch('getAllBlogs')
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