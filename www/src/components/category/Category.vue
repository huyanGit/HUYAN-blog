<template>
  <div class="category">
    <div v-for="item in categories">
    	<div class="category-title">
    		<router-link :to="'/category/' + item.code" class="category-name">{{item.category_name}}</router-link>
    		<span class="blog-number">(共有{{item.count}}篇文章)</span>
    	</div>
    	<div class="blog-list">
    		<div class="blog" v-for="blog in item.blogs">
          <span class="time">{{blog.create_at | timeFilter}} </span>
    			<router-link :to="'/blog/' + blog.code">{{blog.title}}</router-link>
    		</div>
    	</div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: mapState({
    categories: state => state.category.categories
  }),
  created(){
    this.$store.dispatch('getAllCategories')
  }
}
</script>

<style scoped>
.category-name{
	font-size: 22px;
	color: #666;
}
.blog-number{
	font-size: 16px;
  font-weight: 200; 
  margin-left: 10px;
  color: #999;
}
.blog {
	font-size: 15px;
	color: #555;
	margin: 13px;

}
.time{
  margin-right:15px;
  font-size: 14px;
  color: #555;
}
.category-title a:hover{
  color: #1D8CE0;
}
</style>
