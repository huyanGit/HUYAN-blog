const router = require('express').Router();
const HttpError = require('some-http-error');
const blogController = require('./blog');

router.route('/blog')
	.get(blogController.getBlogs)
	.post(blogController.addOneBlog)
	.all(() => {throw new HttpError.MethodNotAllowedError()});

router.route('/blog/:blogId')
	.get(blogController.getOneBlog)
	.put(blogController.updateOneBlog)
	.delete(blogController.removeOneBlog)
	.all(() => {throw new HttpError.MethodNotAllowedError()});






module.exports = router;


