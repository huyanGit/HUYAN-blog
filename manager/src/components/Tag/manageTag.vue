<template>
  <el-table
    :data="tags"
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
      label="标签"
      width="180">
      <template scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>{{scope.row.tag_name}}中有{{ scope.row.blogs.length}}篇文章</p>
          <div slot="reference" class="name-wrapper">
            <span>{{ scope.row.tag_name}}</span>
          </div>
        </el-popover>
      </template>       
    </el-table-column>
    <el-table-column label="操作">
      <template scope="scope">
        <router-link :to="{path: '/tag/create', query:{id: scope.row._id}}">修改</router-link>
        <el-button
          size="small"
          type="danger"
          @click="deleteTag(scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import tagResource from '../../axios/tag'
import blogResource from '../../axios/blog'
import timeFilter from '../../utils/filters'
export default {
  data() {
    return {
      tags: []
    }
  },
  methods: {
    updateTag(tag) {
      console.log(tag);
    },
    deleteTag(tag) {  
      this.$confirm('删除该标签会删除关联的所有文章, 是否继续?', '提示', {
        confirmButtonText: '我已经深思熟虑，确定删除',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        for(let i = 0; i < tag.blogs.length; i++){
          console.log(tag.blogs[i]._id);
          blogResource.deleteOneBlog(tag.blogs[i]._id);
        }
        tagResource.deleteOneTag(tag._id).then(function(){
          console.log('remove success');
        });
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
    getTags(){
      var vm = this;
      tagResource.getTags().then(function(res){
        vm.tags = res.data;
      })
    }
  },
  filters:{
    timeFilter(time){
      return timeFilter(time).substr(0,10);
    }
  },
  created(){
    return this.getTags();
  },
  updated(){
    return this.getTags();
  }
}
</script>