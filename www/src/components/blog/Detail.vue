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
		<div class="comment-area">
			<div class="comment-header">评论区</div>
			<div class="comment-list" v-for="(item, index) in comments" ref="commentList">	
				<span class="user">{{item.user}}: </span>
				<span class="com-content">{{item.content}}</span>
				<span class="reply" @click="reply(index)">回复</span>
			</div>
			<div class="comment-box">
				<textarea placeholder="说点什么吧" class="comment-content" v-model="comment.content"></textarea>
				<input type="text" placeholder="称呼" class="name" v-model="comment.user">
				<button class="comment" @click="submit">评论</button>
			</div>
		</div>
	</div>
</template>

<script>
import blogResource from '../../axios/blog'
import commentResource from '../../axios/comment'
import {timeFilter} from '../../utils/filters'
export default{
	data(){
		return {
			blog: {},
			comments:[],
			comment: {
				user:'',
				content:'',
				blog:''
			}
		}
	},
	methods: {
		getBlogById: function(){
			var vm = this;
			var blogId = vm.$parent.$route.params.blogId;
			blogResource.getBlogById(blogId).then(function(res){
				vm.blog = res.data;
			});
		},
		getAllComments: function(){
			var vm = this;
			commentResource.getAllComments().then(function(res){
				for(let i = 0; i < res.data.length; i++){
					if(res.data[i].blog._id == vm.blog._id){
						vm.comments.push(res.data[i]);
					}
				}
			});
		},
		submit: function(){
			var vm = this;
			vm.comment.blog = vm.blog._id;
			if(vm.comment.user != '' && vm.comment.content != ''){
				commentResource.createComment(vm.comment).then(function(res){
					vm.comments.push(res.data);
					vm.comment.content = '';
				});
			}
		},
		reply: function(index){
			var vm = this;
			let user = vm.$refs.commentList[index].getElementsByClassName('user')[0].innerText;
			vm.comment.content = '@' + user;
		}
	},
	filters:{
		timeFilter: function(time) {
			return timeFilter(time).substr(0,10);
		}
	},
	created(){
		this.getBlogById();
		this.getAllComments();
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
.comment-header{
	font-size: 20px;
  font-weight: 400;
  color: #555;
  margin-top: 20px;
  padding-bottom: 5px;
  border-bottom: 1px solid #eee;
}
.com-content{
	margin-left: 10px;
}
.comment-list{
	height: 40px;
	line-height: 40px;
	font-size: 16px;
	color: #555;
	border-bottom: 1px dashed #eee;
}
.reply{
	display: inline-block;
	float: right;
	font-size: 15px;
	color: #1D8CE0;
}
.reply:hover{
	color: #337ab7;
	cursor: pointer;
}
.comment-content{
	display: block;
	margin:30px auto 10px;
	width: 100%;
	height: 80px;
	border-radius: 5px;
	border: 1px solid #9d9d9d;
	outline: none;
}
.name{
	display: inline-block;
	padding: 5px 10px;
	border-radius: 4px;
	border: 1px solid #9d9d9d;
	outline: none;
}
.comment{
	display: inline-block;
	padding: 5px 10px;
	border-radius: 4px;
	border: none;
	background-color: #1D8CE0;
	color: #fff;
	outline: none;
}
@media screen and (max-width: 600px) {
	.comment-list{
		font-size: 13px;
	}
	.reply{
		font-size: 13px;
	}
	.comment-header{
		font-size: 18px;
	}
	.comment-box{
		font-size: 13px;
	}
}
</style>