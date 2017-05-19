<template>
  <div id="app">
    <nav class="nav">
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
        <div class="search">
          <input type="search" class="search-area" placeholder="搜索标题或关键词">
          <span class="glyphicon glyphicon-search search-icon"></span>
        </div>
        <div class="menu" @click="dropdown()">
          <span class="glyphicon glyphicon-menu-hamburger"></span>
        </div>
      </div>
      <transition name="bounce">
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
    <div class="content">
      <router-view></router-view>
    </div>
    <footer class="footer">
      <div class="copyright">Copyright &copy {{year}} HUYAN</div>
    </footer>
  </div>
</template>

<script>
export default {
  data (){
    return {
      showDropNav: false,
      year: new Date().getUTCFullYear()
    }
  },
  methods: {
    dropdown: function(){
      this.showDropNav = !this.showDropNav;
    }
  }
}
</script>

<style>
@import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-out .5s;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes bounce-out {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(0);
  }
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
  position: relative;
  width: 800px;
  margin: 30px auto;
  min-height: 455px;
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
@media screen and (max-width: 600px) {
  .nav-link{
    display: none;
  }
  .menu{
    display: block;
  }
  .drop-nav a{
    font-size: 15px;
    text-align: center;
    width: 19%;
    display: inline-block;
  }
  .content{
    margin: 40px auto;
  }
  .drop-nav{
    padding: 12px 0;
  }

}
</style>
