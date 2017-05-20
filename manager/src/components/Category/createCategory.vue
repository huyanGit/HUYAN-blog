<template>
<div>
	<el-form label-position="top" label-width="80px" :model="formLabelAlign">
  <el-form-item label="文章标题">
    <el-input v-model="formLabelAlign.name"></el-input>
  </el-form-item>
  <el-form-item label="文章分类">
    <el-input v-model="formLabelAlign.region"></el-input>
  </el-form-item>
  <el-form-item label="文章标签">
    <el-input v-model="formLabelAlign.type"></el-input>
  </el-form-item>
</el-form>
</div>	
</template>
<script>
  export default {
    data() {
      return {
        labelPosition: 'right',
        formLabelAlign: {
          name: '',
          region: '',
          type: ''
        }
      };
    }
  }	
</script>