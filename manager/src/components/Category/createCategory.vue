<template>
<div>
	<el-form label-position="left" label-width="80px" :model="newcategory" :inline="true">
  <el-form-item label="添加分类" required>
    <el-input v-model="newcategory.category_name" placeholder="分类"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitCategory()">创建</el-button>
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
      }
    };
  },
  methods:{
    createOneCategory(){
      var vm = this;
      return categoryResource.createOneCategory(vm.newcategory).then(function(res) {
        console.log(res.data);
      })
    },
    submitCategory(){
      this.$confirm('确定创建该分类吗, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.createOneCategory(this.newcategory);
          this.$message({
            type: 'success',
            message: '创建成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消创建'
          });          
        }); 
    }
  }
}	
</script>