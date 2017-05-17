<template>
  <div>
    <div v-for="item in category">
    	<div>
    		<span class="category-name">{{item.category_name}}</span>
    		<span class="blog-number">(共有4篇文章)</span>
    	</div>
    	<div class="blog-list" v-for="blog in blogs">
    		<div class="blog">
    			<span>{{blog.created_at}}</span>
    			<span>{{blog.title}}</span>
    		</div>
    	</div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      category:[{category_name: '前端'}],
      blogs:[{
	      	title: "Vue.js学习笔记",
	      	created_at:'2017-5-16'
	      },
	      {
	      	title: "Vue.js学习笔记",
	      	created_at:'2017-5-16'
	      },
	      {
	      	title: "Vue.js学习笔记",
	      	created_at:'2017-5-16'
	      }
      ]

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.category-name{
	font-size: 22px;
	color: #666;
}
.blog-number{
	font-size: 16px;
   margin-left: 10px;
   color: #999;
}
.blog{
	font-size: 14px;
	color: #555;
	margin: 13px;

}
</style>
