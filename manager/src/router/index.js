import Vue from 'vue'
import Router from 'vue-router'
import createBlog from '../components/Blog/createBlog'
import manageBlog from '../components/Blog/manageBlog'
import createTag from '../components/Tag/createTag'
import manageTag from '../components/Tag/manageTag'
import createCategory from '../components/Category/createCategory'
import manageCategory from '../components/Category/manageCategory'
import Login from '../components/Login'
import NavMenu from '../components/NavMenu'
Vue.use(Router);
const routes = [
	{path: '/', redirect: '/login'},
	{path: '/login', component: Login},
	{path: '/admin', component: NavMenu,
		children:[
			{path: '/blog/create', component: createBlog},
			{path: '/blog/manage', component: manageBlog},
			{path: '/tag/create', component: createTag},
			{path: '/tag/manage', component: manageTag},
			{path: '/category/create', component: createCategory},
			{path: '/category/manage', component: manageCategory}
		]
	}
];
export default new Router({
	mode: 'history',
  routes
});
