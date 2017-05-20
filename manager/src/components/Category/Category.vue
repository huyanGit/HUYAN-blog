<template>
  <div class="content">

          <!-- 左侧导航 -->
      <div class="main-left">
        <el-menu class="el-menu-vertical-demo" :router="true">
          <el-menu-item index="/category/create" :class="{'isActive': active}">添加分类</el-menu-item>
          <el-menu-item index="/category/manage" :class="{'isActive': !active}">分类管理</el-menu-item>
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

