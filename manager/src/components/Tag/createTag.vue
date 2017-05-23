<template>
<div class="tag">
  <el-form label-position="left" label-width="80px" :model="newtag" :inline="true" ref="newtag" :rules="rules">
  <el-form-item label="标签" prop="tag_name" required>
    <el-input v-model="newtag.tag_name" placeholder="标签"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitTag('newtag')">{{submit}}</el-button>
  </el-form-item>
</el-form>
</div>  
</template>
<script>
import tagResource from '../../axios/tag' 
export default {
  data() {
    return {
      newtag: {
        tag_name: ''
      },
      rules: {
        tag_name:[{required: true, message:'请输入标签名', trigger:'blur'}]
      },
      submit:'',
      tag_update_id:''
    };
  },
  methods:{
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    createOneTag(formName){
      var vm = this;
      tagResource.getTags().then(function(res){
        for(let i = 0; i < res.data.length; i++){
          if(res.data[i].tag_name == vm.newtag.tag_name){
            vm.$message({
              message: '该标签已存在！',
              type: 'info'
            });
            vm.resetForm(formName);
            return false;
          }
        }
        tagResource.createOneTag(vm.newtag).then(function(){
          vm.submitSuccess(formName);
          vm.$router.push('/tag/manage');
        }); 
      });
    },
    updateOneTag(formName){
      var vm = this;
      tagResource.getTags().then(function(res){
        for(let i = 0; i < res.data.length; i++){
          if(res.data[i].tag_name == vm.newtag.tag_name && res.data[i]._id !== vm.tag_update_id){
            vm.$message({
              message: '该标签已存在！',
              type: 'info'
            });       
            vm.resetForm(formName);
            return false;
          }
        }
        tagResource.updateOneTag(vm.tag_update_id, vm.newtag).then(function(){
          vm.submitSuccess(formName);
          vm.$router.push('/tag/manage');
        });  
      });
    },
    submitSuccess(formName){
      this.$message({
        message: '操作成功！',
        type: 'success'
      });
  
    },
    submitTag(formName){
      var vm = this;
      if(vm.tag_update_id == ''){
        vm.$refs[formName].validate((valid) => {
          if (valid) {
            vm.createOneTag(formName);     
          }
        });        
      }else{
        vm.$refs[formName].validate((valid) => {
          if(valid){
            vm.updateOneTag(formName);
          }
        });
      }
    },
    getTag_update(){
      var vm = this;
      tagResource.getOneTag(vm.tag_update_id).then(function(res){
        vm.newtag.tag_name = res.data.tag_name;
      });
    }
  },
  created(){
    this.submit = '添加';
    this.tag_update_id = window.location.search.split('=')[1];
    if(this.tag_update_id){
      this.submit = '修改';
      this.getTag_update();
    }else{
      this.tag_update_id = '';
    }
  }
} 
</script>
<style>
  .tag{
    margin-top: 50px;
    margin-left: 20px;
  }
</style>