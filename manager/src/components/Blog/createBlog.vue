<template>
<div>
	<el-form label-position="top" label-width="80px" :model="newblog">
  <el-form-item label="文章标题">
    <el-input v-model="newblog.title"></el-input>
  </el-form-item>
  <el-form-item label="文章分类">
    <el-select v-model="newblog.category" placeholder="请选择">
      <el-option
      v-for="category in catagories"
      :key="category._id"
      :label="category.category_name"
      :value="category._id">
      </el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="文章标签">
     <el-select v-model="newblog.tags" multiple placeholder="请选择">
      <el-option
      v-for="tag in tags"
      :key="tag._id"
      :label="tag.tag_name"
      :value="tag._id">
      </el-option>
    </el-select>   
  </el-form-item>
  <el-form-item label="文章内容">
    <el-input
      type="textarea"
      :autosize="{ minRows: 5, maxRows: 15}"
      placeholder="请输入内容"
      v-model="newblog.content">
    </el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submit">发布文章</el-button>
  </el-form-item>   
</el-form>
</div>	
</template>
<script>
import tagResource from '../../axios/tag'
import categoryResource from '../../axios/category'
import blogResource from '../../axios/blog'
export default {
  data() {
    return {
      newblog: {
        title:'',
        content:'',        
        category:'',
        tags:[]
      },
      tags:[],
      catagories:[]
    };
  },
  methods: {
    submit: function(){
      return this.createOneBlog(this.newblog);
    },
    getTags: function(){
      var vm = this;
      return tagResource.getTags().then(function(res){
        vm.tags = res.data;
      });
    },
    getCategories: function(){
      var vm = this;
      return categoryResource.getCategories().then(function(res){
        vm.catagories = res.data;
      })
    },
    createOneBlog: function(data){
      return blogResource.createOneBlog(data).then(function(res){
        console.log(res.data);
      });
    },
    getTagsAndCategories:function(){
      this.getTags();
      this.getCategories();
    }
  },
  created(){
    return this.getTagsAndCategories();
  }
}	
</script>