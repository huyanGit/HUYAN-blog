<template>
  <div class="content">
      <div class="main-left">
        <el-menu class="el-menu-vertical-demo" :router="true">
          <el-menu-item index="/blog/create" :class="{'isActive': active}">博客发布</el-menu-item>
          <el-menu-item index="/blog/manage" :class="{'isActive': !active}">博客管理</el-menu-item>
        </el-menu>
      </div>
      <div  class="main-right" >
        <router-view></router-view>
      </div>
  </div>
</template>

<script>
export default {
  data: function (){
    return {
      active:true
    }
  }
}
</script>

<style scoped>
.content{
  display: flex;
  width: 100%;
}
.main-left{
    text-align: center;
    width: 200px;
    float: left;
  }
.main-right{
    -webkit-box-flex: 1;  
    -ms-flex: 1;  
    flex: 1;  
    background-color: #fff; 
    padding: 50px 70px; 
  }
.el-menu{
    background-color: transparent!important;
  }
.main-right{
  width: 100%;
}
</style>
