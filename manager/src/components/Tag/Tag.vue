<template>
  <div class="content">

          <!-- 左侧导航 -->
      <div class="main-left">
        <el-menu class="el-menu-vertical-demo" :router="true">
          <el-menu-item index="/tag/create" :class="{'isActive': active}">添加标签</el-menu-item>
          <el-menu-item index="/tag/manage" :class="{'isActive': !active}">标签管理</el-menu-item>
        </el-menu>
      </div>

        <!-- 右侧主内容区 -->
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
