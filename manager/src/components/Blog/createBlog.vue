<template>
<div>
	<el-form label-position="top" label-width="80px" :model="newblog" ref="newblog" :rules="rules">
    <el-form-item label="文章标题" prop="title" required>
      <el-input v-model="newblog.title"></el-input>
    </el-form-item>
    <el-form-item label="英文标题" prop="code" required>
      <el-input v-model="newblog.code"></el-input>
    </el-form-item>
    <el-form-item label="文章分类" prop="category" required>
      <el-select v-model="newblog.category" placeholder="请选择">
        <el-option
        v-for="category in categories"
        :key="category._id"
        :label="category.category_name"
        :value="category._id">
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="文章标签" prop="tags" required>
       <el-select v-model="newblog.tags" multiple placeholder="请选择">
        <el-option
        v-for="tag in tags"
        :key="tag._id"
        :label="tag.tag_name"
        :value="tag._id">
        </el-option>
      </el-select>   
    </el-form-item>
    <el-form-item label="文章概述" prop="markdown.summary" required>
      <el-input
        type="textarea"
        :autosize="{ minRows: 2, maxRows: 2}"
        placeholder="请输入内容"
        v-model="newblog.markdown.summary">
      </el-input>
    </el-form-item>
    <el-form-item label="文章主体" prop="markdown.body" required>
      <el-input
        type="textarea"
        :autosize="{ minRows: 3, maxRows: 3}"
        placeholder="请输入内容"
        v-model="newblog.markdown.body">
      </el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('newblog')">{{submit}}</el-button>
      <el-button @click="resetForm('newblog')">重置</el-button>
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
        category:'',
        tags:[],
        markdown:{
          summary:'',
          body:''
        }
      },
      blog_update_id:'',
      submit:'',
      tags:[],
      categories:[],
      rules:{
        title:[{required: true, message:'请输入文章标题', trigger:'blur'}],
        code:[{required: true, message:'请输英文标题', trigger:'blur'}],
        category:[{required: true, message:'请选择文章分类', trigger:'change'}],
        tags:[{type: 'array', required: true, message:'请选择文章标签', trigger:'change'}]
      }
    };
  },
  methods: {
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    submitForm: function(formName){
      var vm = this;
      if(vm.blog_update_id == ''){
        vm.$refs[formName].validate((valid) => {
          if (valid) {
            vm.createOneBlog(vm.newblog);    
          }
        });
      }else{
        vm.$refs[formName].validate((valid) => {
          if(valid) {
            vm.updateOneBlog(vm.blog_update_id, vm.newblog);
          }
        });
      }
    },
    createOneBlog: function(data){
      var vm = this;
      return blogResource.createOneBlog(data).then(function(res){
        vm.$message({
          message: '发布成功！',
          type: 'success'
        });
        vm.$router.push('/blog/manage');
      });
    },
    updateOneBlog: function(blogId, data){
      var vm = this;
      return blogResource.updateOneBlog(blogId, data).then(function(res){
        vm.$message({
          message: '修改成功！',
          type: 'success'
        });
        vm.$router.push('/blog/manage');
      });
    },
    getTagsAndCategories:function(){
      var vm = this;
      categoryResource.getCategories().then(function(res){
        vm.categories = res.data;
      });
      tagResource.getTags().then(function(res){
        vm.tags = res.data;
      })
    },
    getBlog_update: function(){
      var vm = this;
      blogResource.getOneBlog(vm.blog_update_id).then(function(res){
        let blog = vm.newblog, data = res.data;
        blog.title = data.title;
        blog.markdown = data.markdown;
        blog.category = data.category._id;
        blog.code = data.code;
        for(let i = 0; i < data.tags.length; i++){
          blog.tags.push(data.tags[i]._id);
        }
      });
    }

  },
  created(){
    this.submit = "发布博客";
    this.blog_update_id = window.location.search.split('=')[1];
    if(this.blog_update_id){
      this.submit = "修改博客";
      this.getBlog_update();
    } else{
      this.blog_update_id = '';
    }
    return this.getTagsAndCategories();
  }
}	
</script>
<style scoped>

</style>