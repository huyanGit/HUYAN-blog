<template>
  <div id="app">
    <!-- 导航栏 -->
    <nav class="nav" :class="{active: isActive}">
      <div class="container">
        <div class="logo"><router-link to="/">HUYAN_BLOG</router-link></div>
        <div class="nav-link">
          <ul>
            <li><router-link to="/"><span class="glyphicon glyphicon-home icon"></span>首页</router-link></li>
            <li><router-link to="/category"><span class="glyphicon glyphicon-book icon"></span>分类</router-link></li>
            <li><router-link to="/tag"><span class="glyphicon glyphicon-tags icon"></span>标签</router-link></li>
            <li><router-link to="/archive"><span class="glyphicon glyphicon-briefcase icon"></span>归档</router-link></li>
            <li><router-link to="/about"><span class="glyphicon glyphicon-user icon"></span>关于</router-link></li>
          </ul> 
        </div>
        <!-- 搜索框 -->
        <div class="search">
          <input type="search" class="search-area" placeholder="搜索标题或关键词">
          <span class="glyphicon glyphicon-search search-icon"></span>
        </div>
        <!-- 下拉菜单按钮 -->
        <div class="menu" @click="dropdown()">
          <span class="glyphicon glyphicon-menu-hamburger"></span>
        </div>
      </div>
      <!-- 下拉菜单 -->
      <transition name="drop">
        <div class="drop-nav-box" v-if="showDropNav">
          <div class="drop-nav">
            <router-link to="/">首页</router-link>
            <router-link to="/category">分类</router-link>
            <router-link to="/tag">标签</router-link>
            <router-link to="/archive">归档</router-link>
            <router-link to="/about">关于</router-link>
          </div>
        </div>
      </transition>  
    </nav>
    <!-- 正文 -->
    <div class="content">
      <router-view></router-view>
    </div>
    <!-- 尾部版权 -->
    <footer class="footer">
      <div class="copyright">Copyright &copy {{year}} HUYAN</div>
    </footer>
  </div>
</template>

<script>
export default {
  data (){
    return {
      isActive: false,
      showDropNav: false,
      year: new Date().getUTCFullYear()
    }
  },
  methods: {
    dropdown: function(){
      this.showDropNav = !this.showDropNav;
      this.isActive = !this.isActive;
    }
  }
}
</script>

<style>
@import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

.drop-enter-active, .drop-leave-active {
  transition: opacity .5s
}
.drop-enter, .drop-leave-active {
  opacity: 0
}
body{
  margin: 0;
  perspective: 0;
  font-family:  'Microsoft YaHei';
}
a{
  color: #1D8CE0;
}
#app{
  position: relative;
  width: 100%;
  min-height: 100%;
}
.container{
  display: flex;
  justify-content: center;
  font-size: 16px;
  line-height: 80px;  
  width: inherit;
  margin: 0 auto;
  padding: 0;
}
.content{
  width: 800px;
  margin: 30px auto;
}
.nav{
  height: 80px;
  width: 100%;
  background-color: #eee;
}
.nav-link ul li{
  list-style: none;
  display: inline;
  margin: 0 5px;
}
.search-area{
  font-weight: 200;
  margin-left: 60px;
  border: none;
  outline: none;
  border-bottom: 1px solid #888;
  background-color: #eee;
  line-height: 1;
}
a:focus, a:hover {
  color: #337ab7;
  text-decoration: none;
}
.nav-link, .logo{
  height: 80px;
}
.logo{
  font-size: 22px;
  font-weight: bolder;

}
.logo a:focus{
  color:#1D8CE0;
}
.icon{
  margin-right: 6px;
}
.search-icon{
  cursor:pointer;
  color: #1D8CE0;
  padding: 5px;
}
.menu{
  display: none;
  color:#1D8CE0;
}
.footer{
  color: #555;
  height: 80px;
  width: 100%;
  line-height: 80px;
  text-align: center;
  font-size: 15px;
  background-color: #eee;
  position: relative;
  bottom: 0;
  left: 0;
}
.active{
  height: 95px;
}
/*媒体查询 响应式*/
@media screen and (max-width: 900px) {
  .search{
    display: none;
  }
  .content{
    width: 90%;
    margin: 30px auto;
  }
  .container{
    justify-content: space-between;
  }
}
@media screen and (max-width: 550px) {
  .nav-link{
    display: none;
  }
  .menu{
    display: block;
  }
  .drop-nav{
    padding-top: 10px;
    border-top: 1px solid #ddd;
    text-align: center;
    font-size: 16px;
    background-color: #eee;
  }
  .drop-nav a{
    margin: 0 10px;
  }
  .logo,.container{
    height: 50px;
    line-height: 70px;
  }
}
</style>
