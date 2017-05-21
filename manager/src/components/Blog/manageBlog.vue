<template>
  <el-table
    :data="blogs"
    border
    style="width: 100%">
    <el-table-column
      label="发布日期"
      width="200px">
      <template scope="scope">
        <el-icon name="time"></el-icon>
        <span style="margin-left: 10px">{{ scope.row.create_at | timeFilter(scope.row.create_at)}}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="文章信息"
      width="300px">
      <template scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>分类: {{ scope.row.category.category_name }}</p>
          <p>标签: <span v-for="tag in scope.row.tags">{{ tag.tag_name }} </span></p>
          <div slot="reference" class="name-wrapper">
            <span>{{ scope.row.title }}</span>
          </div>
        </el-popover>
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template scope="scope">
        <el-button size="small">修改</el-button>
        <el-button
          size="small"
          type="danger"
          @click="deleteBlog(scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import blogResource from '../../axios/blog'
import timeFilter from '../../utils/filters'
export default {
  data() {
    return {
      blogs: []
    }
  },
  methods: {
    deleteBlog(blog) {
      this.$confirm('此操作将永久删除该篇博客, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          blogResource.deleteOneBlog(blog._id);
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
    getBlogs(){
      var vm = this;
      return blogResource.getBlogs().then(function(res){
        vm.blogs = res.data;
      })
    }
  },
  filters: {
    timeFilter(time){
      return timeFilter(time).substr(0,10);
    }
  },
  mounted(){
    return this.getBlogs();
  },
  updated(){
    return this.getBlogs();
  }
}
</script>
<style scoped>
a{
  text-decoration: none;
  color: #1f2d3d;
  border: 1px solid #bfcbd9;
  border-radius: 4px;
  padding: 5.5px 9px;
  font-size: 12px;
  margin-right: 8px;
}
a:hover{
  color: #20a0ff;
  border-color: #20a0ff;
}

</style>