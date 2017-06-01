import Vue from 'vue'
import Router from 'vue-router'
import Blog from '../components/blog/Blog'
import Category from '../components/category/Category'
import Tag from '../components/tag/Tag'
import Archive from '../components/archive/Archive'
import About from '../components/about/About'
import Notfound from '../components/Notfound'
import Detail from '../components/blog/Detail'
import CategoryWithBlogs from '../components/category/CategoryWithBlogs'
import TagWithBlogs from '../components/tag/TagWithBlogs'

Vue.use(Router);

const routes = [
	{ path: '/', component: Blog, meta: {title:'HUYAN-BLOG'}},
	{ path: '/blog/:blogName', component: Detail, meta: {title:'Blog-detail'}},
	{ path: '/category', component: Category, meta: {title:'Category'}},
	{ path: '/category/:categoryName', component: CategoryWithBlogs, meta: {title:'Category-detail'}},
	{ path: '/tag', component: Tag, meta: {title:'Tag'}},
	{ path: '/tag/:tagName', component: TagWithBlogs, meta: {title:'Tag-detail'}},
	{ path: '/archive', component: Archive, meta: {title:'Archive'}},
	{ path: '/about', component: About, meta: {title:'About'}},
	{ path:'/*', component: Notfound, meta: {title:'404'}}				
];

export default new Router({
	mode: 'history',
	routes
});
