<template>
<div>
	<el-form label-position="left" label-width="80px" :model="newcategory" :inline="true" :rules="rules" ref="newcategory">
  <el-form-item label="添加分类" prop="category_name" required>
    <el-input v-model="newcategory.category_name" placeholder="分类"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitCategory('newcategory')">创建</el-button>
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
      }
    };
  },
  methods:{
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },    
    createOneCategory(){
      var vm = this;
      return categoryResource.createOneCategory(vm.newcategory).then(function(res) {
        console.log(res.data);
      })
    },
    submitCategory(formName){
      var vm = this;
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.createOneCategory(this.newcategory);
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