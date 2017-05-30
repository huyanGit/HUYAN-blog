const Blog = require('../models').Blog;
const HttpError = require('some-http-error');
const blogController = {};

blogController.getBlogs = (req, res, next) => {
	const obt = req.pageObj;
	obt.sort = {'create_at': -1};
	Blog.findBlogByQuery({}, obt).then(blogs => {
		res.success(blogs, 200);
	}).catch(next);
};

blogController.getOneBlog = (req, res, next) => {
	const blogId = req.params.blogId;
	Blog.findOneAndUpdate({_id: blogId}, {$inc: {click_count: 1}});
	Blog.findBlogById(blogId).then(blog => {
		res.success(blog, 200);
	}).catch(next);
};

blogController.addOneBlog = (req, res, next) => {
	const body = req.body;
	const _blog = Object.assign(new Blog(), body);
	Blog.updateBlog(_blog).then(blog => {
		res.success(blog, 201);
	}).catch(next);
};

blogController.updateOneBlog = (req, res, next) => {
	const blogId = req.params.blogId;
	const body = req.body;
	Blog.findBlogById(blogId).then(blog => {
		Object.assign(blog, body);
		return Blog.updateBlog(blog);
	}).then(blog => {
		res.success(blog, 201);
	}).catch(next);
};

blogController.removeOneBlog = (req, res, next) => {
	const blogId = req.params.blogId;
	Blog.deleteBlogById(blogId).then(() => {
		res.success(null, 204);
	}).catch(next);
};

blogController.getArchives = (req, res, next) => {
	Blog.getBlogArchives().then(blogs => {
		res.success(blogs);
	}).catch(next);
}
module.exports = blogController;