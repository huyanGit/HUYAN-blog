<template>
<div>
  <el-form label-position="left" label-width="80px" :model="newtag" :inline="true" ref="newtag" :rules="rules">
  <el-form-item label="添加标签" prop="tag_name" required>
    <el-input v-model="newtag.tag_name" placeholder="标签"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitTag('newtag')">创建</el-button>
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
      }
    };
  },
  methods:{
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    createOneTag(){
      var vm = this;
      tagResource.getTags().then(function(res){
        for(let i = 0; i < res.data.length; i++){
          if(res.data[i].tag_name == vm.newtag.tag_name){
            vm.$message({
              message: '该标签已存在！',
              type: 'info'
            });
            return false;
          }
        }
        tagResource.createOneTag(vm.newtag).then(function(res) {
          console.log(res.data);
        });  
      });
    },
    submitTag(formName){
      var vm = this;
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.createOneTag();
          this.$message({
            message: '添加成功！',
            type: 'success'
          });
          setTimeout(function(){
            vm.resetForm(formName);
          },200);      
        } else {
          return false;
        }
      });
    }
  }
} 
</script>