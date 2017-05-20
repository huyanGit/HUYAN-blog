import Vue from 'vue'
import Router from 'vue-router'
import Blog from '../components/Blog/Blog'
import createBlog from '../components/Blog/createBlog'
import manageBlog from '../components/Blog/manageBlog'
import Tag from '../components/Tag/Tag'
import createTag from '../components/Tag/createTag'
import manageTag from '../components/Tag/manageTag'
import Category from '../components/Category/Category'
import createCategory from '../components/Category/createCategory'
import manageCategory from '../components/Category/manageCategory'
Vue.use(Router);
const routes = [
	{
		path: '/blog/create',component:Blog,
		children:[
			{path: '/', component: createBlog}
		]
	},
	{
		path: '/blog/manage',component:Blog,
		children:[
			{path: '/', component: manageBlog}
		]
	},
	{
		path: '/tag/create',component:Tag,
		children:[
			{path: '/', component: createTag}
		]
	},
	{
		path: '/tag/manage',component:Tag,
		children:[
			{path: '/', component: manageTag}
		]
	},
	{
		path: '/category/create',component:Category,
		children:[
			{path: '/', component: createCategory}
		]
	},
	{
		path: '/category/manage',component:Category,
		children:[
			{path: '/', component: manageCategory}
		]
	}	
];
export default new Router({
	mode: 'history',
  routes
});
