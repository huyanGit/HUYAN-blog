import Vue from 'vue'
import App from './App'
import router from './router'
import hljs from 'highlight.js'
import 'highlight.js/styles/docco.css'
Vue.directive('highlight',function (el) {
  let blocks = el.querySelectorAll('pre code');
  blocks.forEach((block)=>{
    hljs.highlightBlock(block)
  })
})
router.beforeEach((to, from, next) => {
	document.title = to.meta.title;
	next();
});
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
