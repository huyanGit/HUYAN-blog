<template>
	<el-form label-position="top" label-width="80px" :model="newblog" ref="newblog" :rules="rules">
    <el-form-item label="文章标题" prop="title" required>
      <el-input v-model="newblog.title"></el-input>
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
    <el-form-item label="文章内容" prop="content" required>
      <el-input
        type="textarea"
        :autosize="{ minRows: 5, maxRows: 15}"
        placeholder="请输入内容"
        v-model="newblog.content">
      </el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('newblog')">{{submit}}</el-button>
      <el-button @click="resetForm('newblog')">重置</el-button>
    </el-form-item>   
  </el-form>

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
      blog_update_id:'',
      submit:'',
      tags:[],
      categories:[],
      rules:{
        title:[{required: true, message:'请输入文章标题', trigger:'blur'}],
        category:[{required: true, message:'请选择文章分类', trigger:'change'}],
        tags:[{type: 'array', required: true, message:'请选择文章标签', trigger:'change'}],
        content:[{required: true, message:'请输入文章内容', trigger:'blur'}]
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
            console.log(vm.newblog);
            vm.createOneBlog(vm.newblog);
            setTimeout(function(){
              vm.resetForm(formName);
            },200);      
          } else {
            return false;
          }
        });
      }else{
        vm.$refs[formName].validate((valid) => {
          if(valid) {
            vm.updateOneBlog(vm.blog_update_id, vm.newblog);
            setTimeout(function(){
              vm.resetForm(formName);
            },200);
          }else{
            return false;
          }
        });
      }
    },
    createOneBlog: function(data){
      return blogResource.createOneBlog(data).then(function(res){
        vm.$message({
          message: '发布成功！',
          type: 'success'
        });
      });
    },
    updateOneBlog: function(blogId, data){
      return blogResource.updateOneBlog(blogId, data).then(function(res){
        vm.$message({
          message: '修改成功！',
          type: 'success'
        });
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
        blog.content = data.content;
        blog.category = data.category._id;
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