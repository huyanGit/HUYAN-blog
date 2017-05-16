<template>
  <div id="app">
    <nav class="nav">
      <div class="container">
        <div class="logo">HUYAN_Blog</div>
        <div class="nav-link">
          <ul>
            <li><router-link to="/"><span class="glyphicon glyphicon-home icon"></span>首页</router-link></li>
            <li><router-link to="/category"><span class="glyphicon glyphicon-book icon"></span>分类</router-link></li>
            <li><router-link to="/tag"><span class="glyphicon glyphicon-tags icon"></span>标签</router-link></li>
            <li><router-link to="/archive"><span class="glyphicon glyphicon-briefcase icon"></span>归档</router-link></li>
            <li><router-link to="/about"><span class="glyphicon glyphicon-user icon"></span>关于</router-link></li>
          </ul> 
        </div>
        <div class="menu">
          <span class="glyphicon glyphicon-menu-hamburger"></span>
        </div>
      </div>   
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
      year: new Date().getUTCFullYear()
    }
  }
}
</script>

<style>
@import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

body{
  margin: 0;
  perspective: 0;
  font-family:  'Microsoft YaHei';
}
#app{
  position: relative;
  width: 100%;
  min-height: 100%;
}
.content{
  padding-bottom: 60px;
}
.nav{
  height: 80px;
  width: 100%;
  background-color: #eee;
}
.nav .container{
  display: flex;
  font-size: 16px;
  line-height: 80px;
}
.nav ul li{
  list-style: none;
  display: inline;
  margin: 0 5px;
}
a:focus, a:hover {
    color: #23527c;
    text-decoration: none;
}
.nav-link, .logo{
  height: 80px;
}
.logo{
  font-size: 22px;
  font-weight: bolder;
  color: #337ab7;
}
.icon{
  margin-right: 6px;
}
.menu{
  display: none;
}
.footer{
  height: 60px;
  width: 100%;
  line-height: 60px;
  text-align: center;
  font-size: 15px;
  background-color: #eee;
  position: fixed;
  bottom: 0;
  left: 0;
}
</style>
