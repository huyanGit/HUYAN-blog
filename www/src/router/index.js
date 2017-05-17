import Vue from 'vue'
import Router from 'vue-router'
import Blog from '../components/blog/Blog'
import Category from '../components/category/Category'
import Tag from '../components/tag/Tag'
import Archive from '../components/archive/Archive'
import About from '../components/about/About'
import Notfound from '../components/Notfound'
import Detail from '../components/blog/Detail'
Vue.use(Router);

const routes = [
	{
		path: '/',
		component: Blog
	},
	{
		path: '/blog/:blogId',
		component: Detail
	},
	{
		path: '/category',
		component: Category
	},
	{
		path: '/tag',
		component: Tag
	},
	{
		path: '/archive',
		component: Archive
	},
	{
		path: '/about',
		component: About
	},
	{
		path:'/*',
		component: Notfound
	}				
];

export default new Router({
	mode: 'history',
	routes
});
