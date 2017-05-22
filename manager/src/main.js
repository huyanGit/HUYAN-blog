import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(Element)
router.beforeEach((to, from, next) => {
	document.title = to.meta.title;
	// if(!window.sessionStorage.getItem('token') && to.path !== '/login'){
	// 	return next({path: '/login'});
	// }
	next();
});
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
