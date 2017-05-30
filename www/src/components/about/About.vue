<template>
  <div class="about">
    <h2 class="aboutme">关于我</h2>
    <p>我是HUYAN，合肥工业大学计算机科学与技术专业在读大二学生。</p>
    <p>大一的时候，恰逢机缘加入了信息工程系创新实验室中的软件工程实验室。在这里我遇到一群有着共同爱好的小伙伴，之后我粗浅地学习了Javascript技术栈，学的东西都很浅，所以在很长的一段时间里都没有能力写出一份自己满意的作品。</p>
    <p>如今博客正式上线，回望走过的路，也是一路坎坷，借鉴了学长们的开源blog，结合自己学习的积累终于完成了人生中第一个自己独立开发的完整项目。在这里我非常感谢Dremy对我的不断督促鼓励以及技术上的支持。同时Dremy也是我们实验室的大神，他始终保持着对技术的热情与不懈追求。想了解更多关于他的信息，可以关注他的<a href="https://dremy.cn/">博客</a>以及<a href="https://github.com/DremyGit">GitHub</a>。</p>
    <div>
      <h2 class="aboutblog">关于博客</h2>
      <p>本博客采用前后端完全分离的架构，后端采用Node框架Express提供API接口，前端页面和后台管理系统采用Vue。Vue是一个基于MVVM的轻量级前端框架，它吸收了Angular和React各自的优点，它的指令系统和组件化的开发方式使得开发变得快捷和高效，是目前非常流行的前端框架。同时Vue提供的vue-cli工具能够快速构建项目骨架并使用webpack进行打包。因为时间仓促，该博客的一些功能并未完善，我会在之后持续更新。</p>
      <p>该博客项目基于Github开源，不足之处还请多多指正：<a href="https://github.com/huyanGit/my-blog">https://github.com/huyanGit/my-blog</a>。</p>
    </div>
    <div class="link">
      <h2 class="link-title">友情链接</h2>
    	<ul>
    		<li><a href="https://xcsoft.hfut.edu.cn/">合肥工业大学软件工程创新实验室</a></li>
    		<li><a href="https://dremy.cn/">Dremy_博客</a></li>
    		<li><a href="http://www.yeahz.cn/">YeahZ博客</a></li>
    	</ul>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
li{
  list-style: none;
}
ul{
  padding-left: 20px;
}
.about{
	width: inherit;
	margin: 30px auto;
}
.link-title,.aboutme,.aboutblog{
  border-left: 5px solid rgba(29, 140, 224, 0.54);
  padding-left: 10px;
  color:#555;
	font-size: 26px;
}
.link ul a{
	font-size: 16px;
  line-height: 2;
}
.about p{
	color:#555;
	font-size: 16px;
	line-height: 2;
}
</style>
