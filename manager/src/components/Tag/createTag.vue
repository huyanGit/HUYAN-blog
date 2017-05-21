<template>
<div>
  <el-form label-position="left" label-width="80px" :model="newtag" :inline="true">
  <el-form-item label="添加标签" required>
    <el-input v-model="newtag.tag_name" placeholder="标签"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitTag()">创建</el-button>
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
      }
    };
  },
  methods:{
    createOneTag(){
      var vm = this;
      return tagResource.createOneTag(vm.newtag).then(function(res) {
        console.log(res.data);
      })
    },
    submitTag(){
      this.$confirm('确定创建标签类吗, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.createOneTag(this.newtag);
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