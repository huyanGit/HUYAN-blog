

<template>
  <div class="app">
    <nav>
      <el-menu theme="dark" :router="true">
        <div class="title">博客管理系统</div>
        <el-submenu index="1">
          <template slot="title"><i class="el-icon-document"></i>博客</template>
          <el-menu-item-group>
            <el-menu-item index="/blog/create">发布文章</el-menu-item>
            <el-menu-item index="/blog/manage">管理文章</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title"><i class="el-icon-menu"></i>分类</template>
          <el-menu-item-group>
            <el-menu-item index="/category/create">添加分类</el-menu-item>
            <el-menu-item index="/category/manage">管理分类</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title"><i class="el-icon-star-on"></i>标签</template>
          <el-menu-item-group>
            <el-menu-item index="/tag/create">添加标签</el-menu-item>
            <el-menu-item index="/tag/manage">管理标签</el-menu-item>
          </el-menu-item-group>
        </el-submenu>        
      </el-menu>
    </nav>
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
}
</script>
<style>
html body{
  margin: 0;
  padding: 0;
}
nav{
  width: 200px;
  height: 569px;
  background-color: #324157;
}
.app{
  display: flex;
  align-items: flex-start;
}
main{
  flex-grow: 1;
  padding: 30px 50px;
}
.title{
  color: #bfcbd9;
  font-size: 22px;
  height: 56px;
  line-height: 56px;
  margin-left: 18px;
}
</style>