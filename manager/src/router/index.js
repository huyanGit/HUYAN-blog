import Vue from 'vue'
import Router from 'vue-router'
import createBlog from '../components/Blog/createBlog'
import manageBlog from '../components/Blog/manageBlog'
import createTag from '../components/Tag/createTag'
import manageTag from '../components/Tag/manageTag'
import createCategory from '../components/Category/createCategory'
import manageCategory from '../components/Category/manageCategory'
import Login from '../components/Login'
Vue.use(Router);
const routes = [
	{
		path: '/',
		component: Login,
	},
	{
		path: '/blog/create',
		component: createBlog
	},
	{
		path: '/blog/manage',
		component: manageBlog
	},
	{
		path: '/category/create',
		component: createCategory
	},
	{
		path: '/category/manage',
		component: manageCategory
	},
	{
		path: '/tag/create',
		component: createTag
	},
	{
		path: '/tag/manage',
		component: manageTag
	}
];
export default new Router({
	mode: 'history',
  routes
});
