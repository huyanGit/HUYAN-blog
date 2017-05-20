<template>
<div>
	<el-form label-position="top" label-width="80px" :model="newblog">
  <el-form-item label="文章标题">
    <el-input v-model="newblog.title"></el-input>
  </el-form-item>
  <el-form-item label="文章分类">
    <el-select v-model="newblog.category_name" placeholder="请选择">
      <el-option
      v-for="category in catagories"
      :key="category.category_name"
      :value="category.category_name">
      </el-option>
    </el-select>
  </el-form-item>
  <el-form-item label="文章标签">
     <el-select v-model="newblog.tag_name" placeholder="请选择">
      <el-option
      v-for="tag in tags"
      :key="tag.tag_name"
      :value="tag.tag_name">
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
export default {
  data() {
    return {
      newblog: {
        title:'',
        content:'',        
        category_name : '',
        tag_name:''
      },
      tags:[{tag_name:'2'}],
      catagories: [{category_name:'1'}]
    };
  },
  methods: {
    submit: function(){
      console.log(this.newblog);
    }
  }
}	
</script>