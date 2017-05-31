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
      width="250px">
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
        <router-link :to="{path: '/blog/create', query:{id: scope.row._id}}">修改</router-link>
        <router-link :to="{path: '/blog/comment', query:{id: scope.row._id}}">评论管理</router-link>
        <el-button
          size="small"
          type="danger"
          @click="deleteBlog(scope.row)">删除</el-button>
      </template>
    </el-table-column>
    <el-table-column label="浏览次数">
      <template scope="scope">
        <span>{{scope.row.click_count}}</span>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import blogResource from '../../axios/blog'
import timeFilter from '../../utils/filters'
import removeByValue from '../../utils/tool'
export default {
  data() {
    return {
      blogs: []
    }
  },
  methods: {
    deleteBlog(blog) {
      var vm = this;
      vm.$confirm('此操作将永久删除该篇博客, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          blogResource.deleteOneBlog(blog._id).then(function(){
            console.log('remove blog :' + blog.title);
            vm.$message({
              type: 'success',
              message: '删除成功!'
            });            
          });
          //update data
          removeByValue(vm.blogs, blog);
        }).catch(() => {
          vm.$message({
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
  }
}
</script>
<style>
a{
  text-decoration: none;
  color: #1f2d3d;
  border: 1px solid #bfcbd9;
  border-radius: 4px;
  padding: 4.5px 9px;
  font-size: 12px;
  margin-right: 8px;
}
a:hover{
  color: #20a0ff;
  border-color: #20a0ff;
}

</style>