<template>
<div class="category">
	<el-form label-position="left" label-width="80px" :model="newcategory" :inline="true" :rules="rules" ref="newcategory">
  <el-form-item label="分类" prop="category_name" required>
    <el-input v-model="newcategory.category_name" placeholder="分类"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitCategory('newcategory')">{{submit}}</el-button>
  </el-form-item>
</el-form>
</div>	
</template>
<script>
import categoryResource from '../../axios/category' 
export default {
  data() {
    return {
      newcategory: {
        category_name: ''
      },
      rules:{
        category_name:[{required:true, message:'请输入标签名', trigger:'blur'}]
      },
      submit:'',
      category_update_id:''
    };
  },
  methods:{
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    createOneCategory(formName){
      var vm = this;
      categoryResource.getCategories().then(function(res){
        for(let i = 0; i < res.data.length; i++){
          if(res.data[i].category_name == vm.newcategory.category_name){
            vm.$message({
              message: '该分类已存在！',
              type: 'info'
            });
            vm.resetForm(formName);
            return false;
          }
        }
        categoryResource.createOneCategory(vm.newcategory).then(function(){
          vm.submitSuccess(formName);
        });
      }); 
    },
    updateOneCategory(formName){
      var vm = this;
      categoryResource.getCategories().then(function(res){
        for(let i = 0; i < res.data.length; i++){
          if(res.data[i].category_name == vm.newcategory.category_name && res.data[i]._id !== vm.category_update_id){
            vm.$message({
              message: '该分类已存在！',
              type: 'info'
            });
            vm.resetForm(formName);
            return false;          
          }
        }
        categoryResource.updateOneCategory(vm.category_update_id, vm.newcategory).then(function(){
          vm.submitSuccess(formName);  
        });  
      });
    },
    submitSuccess(formName){
      var vm = this;
      vm.$message({
        message: '添加成功！',
        type: 'success'
      });
      setTimeout(function(){
        vm.resetForm(formName);
      },200);   
    },
    submitCategory(formName){
      var vm = this;
      if(vm.category_update_id == ''){
        vm.$refs[formName].validate((valid) => {
          if (valid) {
            vm.createOneCategory(formName);     
          }
        });        
      }else{
        vm.$refs[formName].validate((valid) => {
          if(valid){
            vm.updateOneCategory(formName);
          }
        });
      }
    },
    getCategory_update(){
      var vm = this;
      categoryResource.getOneCategory(vm.category_update_id).then(function(res){
        vm.newcategory.category_name = res.data.category_name;
      })
    }
  },
  created(){
    this.submit = "添加";
    this.category_update_id = window.location.search.split('=')[1];
    if(this.category_update_id){
      this.submit = "修改";
      this.getCategory_update();
    }else{
      this.category_update_id = '';
    }
  }
}	
</script>
<style>
  .category{
    margin-top: 50px;
    margin-left: 20px;
  }
</style>