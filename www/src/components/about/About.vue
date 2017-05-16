<template>
  <div class="about">
    <div class="aboutme">关于我</div>
    <p>我是HUYAN，目前就读于合肥工业大学，计算机科学与技术大二。我喜欢一切新奇的技术，实现炫酷的事情，目前以 Web 开发为主要发展方向。</p>
    <p>大一的时候，恰逢机缘加入了信息工程系创新实验室中的软件工程实验室。在这里我遇到一群有着共同爱好的小伙伴，在之后的一年里我走马观花式的学习了一遍全栈Javascript技术栈，学的东西都很浅，所以在很长的一段时间里都没有能力写出一份自己满意的作品。</p>
    <p>如今博客正式上线，回望走过的路，也是一路坎坷，借鉴了学长们的开源blog，结合自己学习的积累终于完成了人生中第一个自己独立开发的完整项目。在这里我非常感谢Dremy对我的不断督促鼓励以及技术上的支持。同时Dremy也是我们实验室技术大咖，我崇拜的偶像，在他身上永远都有着对技术的热情与不懈追求。了解更多关于他的信息，可以关注他的<a href="https://dremy.cn/">博客</a>以及<a href="https://github.com/DremyGit">GitHub</a>。</p>
    <div class="link">友情链接
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
  data () {
    return {
      msg: 'About me'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.about{
	width: 800px;
	margin: 30px auto;
}
.link,.aboutme{
	font-size: 26px;
}
.link ul a{
	font-size: 16px;
}
.about p{
	color:#555;
	font-size: 16px;
	line-height: 2;
}
</style>
