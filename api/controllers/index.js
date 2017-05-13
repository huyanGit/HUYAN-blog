const router = require('express').Router();
const HttpError = require('some-http-error');
const blogController = require('./blog');
const categoryControlller = require('./category');

router.route('/blog')
	.get(blogController.getBlogs)
	.post(blogController.addOneBlog)
	.all(() => {throw new HttpError.MethodNotAllowedError()});

router.route('/blog/:blogId')
	.get(blogController.getOneBlog)
	.put(blogController.updateOneBlog)
	.delete(blogController.removeOneBlog)
	.all(() => {throw new HttpError.MethodNotAllowedError()});

router.route('/category')
	.get(categoryControlller.getCategory)
	.post(categoryControlller.addCategory)
	.all(() => {throw new HttpError.MethodNotAllowedError()});

router.route('/category/:categoryId')
	.get(categoryControlller.getOneCategory)
	.put(categoryControlller.updateOneCategory)
	.delete(categoryControlller.deleteOneCategory)
	.all(() => {throw new HttpError.MethodNotAllowedError()});

module.exports = router;


