const router = require('express').Router();
const HttpError = require('some-http-error');
const blogController = require('./blog');
const categoryController = require('./category');
const tagController = require('./tag');

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
	.get(categoryController.getCategory)
	.post(categoryController.addCategory)
	.all(() => {throw new HttpError.MethodNotAllowedError()});

router.route('/category/:categoryId')
	.get(categoryController.getOneCategory)
	.put(categoryController.updateOneCategory)
	.delete(categoryController.deleteOneCategory)
	.all(() => {throw new HttpError.MethodNotAllowedError()});

router.route('/tag')
	.get(tagController.getAllTags)
	.post(tagController.addOneTag)
	.all(() => {throw new HttpError.MethodNotAllowedError()});

router.route('/tag/:tagId')
	.get(tagController.getOneTag)
	.put(tagController.updateOneTag)
	.delete(tagController.deleteOneTag)
	.all(() => {throw new HttpError.MethodNotAllowedError()});

module.exports = router;


