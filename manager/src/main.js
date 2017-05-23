import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(Element)
router.beforeEach((to, from, next) => {
	document.title = to.meta.title;
	next();
});
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
