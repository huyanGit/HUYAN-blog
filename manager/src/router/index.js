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
	{path: '/', redirect: '/login', meta: {title:'博客管理系统登录'}},
	{path: '/login', component: Login, meta: {title:'博客管理系统登录'}},
	{path: '/admin', component: NavMenu, meta: {title:'博客管理系统'},
		children:[
			{path: '/blog/create', component: createBlog, meta: {title:'博客管理系统 | 发布博客'}},
			{path: '/blog/manage', component: manageBlog, meta: {title:'博客管理系统 | 文章管理'}},
			{path: '/tag/create', component: createTag, meta: {title:'博客管理系统 | 添加标签'}},
			{path: '/tag/manage', component: manageTag, meta: {title:'博客管理系统 | 标签管理'}},
			{path: '/category/create', component: createCategory, meta: {title:'博客管理系统 | 添加分类'}},
			{path: '/category/manage', component: manageCategory, meta: {title:'博客管理系统 | 分类管理'}}
		]
	}
];
export default new Router({
	mode: 'history',
  routes
});
