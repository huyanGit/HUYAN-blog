const router = require('express').Router();
const HttpError = require('some-http-error');
const blogController = require('./blog');
const categoryController = require('./category');
const tagController = require('./tag');
const adminController = require('./admin');
const multer = require('multer');
const uploadController = require('./upload');
const adminRequired = require('../middlewares').auth.adminRequired;
router.route('/blog')
	.get(blogController.getBlogs)
	.post(adminRequired, blogController.addOneBlog)
	.all(() => {throw new HttpError.MethodNotAllowedError()});

router.route('/blog/:blogId')
	.get(blogController.getOneBlog)
	.put(adminRequired, blogController.updateOneBlog)
	.delete(adminRequired, blogController.removeOneBlog)
	.all(() => {throw new HttpError.MethodNotAllowedError()});

router.route('/category')
	.get(categoryController.getCategory)
	.post(adminRequired, categoryController.addCategory)
	.all(() => {throw new HttpError.MethodNotAllowedError()});

router.route('/category/:categoryId')
	.get(categoryController.getOneCategory)
	.put(adminRequired, categoryController.updateOneCategory)
	.delete(adminRequired, categoryController.deleteOneCategory)
	.all(() => {throw new HttpError.MethodNotAllowedError()});

router.route('/tag')
	.get(tagController.getAllTags)
	.post(adminRequired, tagController.addOneTag)
	.all(() => {throw new HttpError.MethodNotAllowedError()});

router.route('/tag/:tagId')
	.get(tagController.getOneTag)
	.put(adminRequired, tagController.updateOneTag)
	.delete(adminRequired, tagController.deleteOneTag)
	.all(() => {throw new HttpError.MethodNotAllowedError()});

router.route('/archive')
	.get(blogController.getArchives)
	.all(() => {throw new HttpError.MethodNotAllowedError()});

router.route('/admin/authorization')
	.post(adminController.authorize)
	.all(() => {throw new HttpError.MethodNotAllowedError()});

router.route('/upload/picture')
	.post(multer({storage: multer.diskStorage(uploadController.storagePicture)}).single('picture'),
    uploadController.handleResult)
	.all(() => {throw new HttpError.MethodNotAllowedError()});
		
module.exports = router;


