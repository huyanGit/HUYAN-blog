
<template>
 <div>
    <el-table
      :data="comments"
      border
      style="width: 100%">
      <el-table-column
        prop="user"
        label="用户名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="content"
        label="评论">
      </el-table-column>
      <el-table-column
        label="操作"
        width="180">
         <template scope="scope">
            <el-button
            size="small"
            type="danger"
            @click="deleteComment(scope.row._id)">删除</el-button>
          </template>    
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import commentResource from '../../axios/comment'
export default {
  data() {
    return {
      comments: []
    }
  },
  methods: {
    getAllComments: function(){
      var vm = this;
      var blogId = window.location.search.split('=')[1];
      commentResource.getAllComments().then(function(res){
        for(let i = 0; i < res.data.length; i++){
          if(res.data[i].blog._id == blogId){
            vm.comments.push(res.data[i]);
          }
        }
      });
    },
    deleteComment: function(commentId){
      var vm = this;
      commentResource.deleteOneComment(commentId).then(function(){
        //update data
        for(let i = 0; i < vm.comments.length; i++){
          if(vm.comments[i]._id == commentId){
            vm.comments.splice(i, 1);
            break;
          }
        }        
      });
    }
  },
  created(){
    this.getAllComments();
  }
}
</script>