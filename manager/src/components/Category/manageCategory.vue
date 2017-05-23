<template>
  <el-table
    :data="categories"
    border
    style="width: 100%">
    <el-table-column
      label="创建日期"
      width="180">
      <template scope="scope">
        <el-icon name="time"></el-icon>
        <span style="margin-left: 10px">{{ scope.row.create_at | timeFilter(scope.row.create_at)}}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="分类"
      width="180">
      <template scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>{{scope.row.category_name}}中有{{ scope.row.blogs.length}}篇文章</p>
          <div slot="reference" class="name-wrapper">
            <span>{{ scope.row.category_name}}</span>
          </div>
        </el-popover>
      </template>       
    </el-table-column>
    <el-table-column label="操作">
      <template scope="scope">
        <router-link :to="{path:'/category/create', query:{id: scope.row._id}}">修改</router-link>
        <el-button
          size="small"
          type="danger"
          @click="deleteCategory(scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import categoryResource from '../../axios/category'
import blogResource from '../../axios/blog'
import timeFilter from '../../utils/filters'
import removeByValue from '../../utils/tool'
export default {
  data() {
    return {
      categories: []
    }
  },
  methods: {
    updateCategory(category) {
      console.log(category);
    },
    deleteCategory(category) {  
      this.$confirm('删除该分类会删除关联的所有文章, 是否继续?', '提示', {
        confirmButtonText: '我已经深思熟虑，确定删除',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        for(let i = 0; i<category.blogs.length; i++){
          console.log('remove blog in ' + category.category_name + ': ' + category.blogs[i].title);
          blogResource.deleteOneBlog(category.blogs[i]._id);
        }
        categoryResource.deleteOneCategory(category._id).then(function(){
          console.log('remove category: ' + category.category_name);
        });
        //update data
        removeByValue(this.categories, category);
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });          
      }); 
    },
    getCategories(){
      var vm = this;
      categoryResource.getCategories().then(function(res){
        vm.categories = res.data;
      })
    }
  },
  filters:{
    timeFilter(time){
      return timeFilter(time).substr(0,10);
    }
  },
  created(){
    return this.getCategories();
  }
}
</script>