<template>
  <div id="app">
    <header class="header header-fixed">
      <el-row>
          <el-col :span="24">
            <el-menu default-active="/blog" class="el-menu-demo" mode="horizontal" router="true">
              <el-menu-item index="/blog/create">博客</el-menu-item>
              <el-menu-item index="/tag/create">标签</el-menu-item>
              <el-menu-item index="/category/create">分类</el-menu-item>
            </el-menu>
          </el-col>
      </el-row>
    </header>
    <div style="position: relative;height: 60px;width: 100%;"></div>
    <main> 
        <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Vue from 'vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(Element)

export default {
  name: 'app',
  data: function (){
    return {
      active:true
    }
  }
}
</script>

<style>
body{margin: 0;}
#app {
min-width: 1200px;
margin: 0 auto;
font-family: "Helvetica Neue","PingFang SC",Arial,sans-serif;
}
/* 头部导航 */
header{
  z-index: 1000;
  border-top: solid 4px #3091F2;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.12),0 0 6px 0 rgba(0,0,0,.04); 
   }

header .el-menu-demo{
  padding-left: 300px;
}
header.header-fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
/* 主内容区 */
  main{     
    display: flex; 
    min-height: 800px;  
    background-color: #FCFCFC;
    border: 40px solid #e9ecf1;  
  }
</style>
