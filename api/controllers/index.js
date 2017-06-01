const router = require('express').Router();
const HttpError = require('some-http-error');
const blogController = require('./blog');
const categoryController = require('./category');
const tagController = require('./tag');
const adminController = require('./admin');
const commentController = require('./comment');
const multer = require('multer');
const uploadController = require('./upload');
const assertAndSetId = require('../middlewares/database').assertAndSetId;
const Blog = require('../models').Blog;
const Tag = require('../models').Tag;
const Category = require('../models').Category;
const adminRequired = require('../middlewares').auth.adminRequired;
router.route('/blog')
	.get(blogController.getBlogs)
	.post(adminRequired, blogController.addOneBlog)
	.all(() => {throw new HttpError.MethodNotAllowedError()});

router.route('/blog/:blogName')
  .all(assertAndSetId('blogName', Blog))
	.get(blogController.getOneBlog)
	.put(adminRequired, blogController.updateOneBlog)
	.delete(adminRequired, blogController.removeOneBlog)
	.all(() => {throw new HttpError.MethodNotAllowedError()});

router.route('/category')
	.get(categoryController.getCategory)
	.post(adminRequired, categoryController.addCategory)
	.all(() => {throw new HttpError.MethodNotAllowedError()});

router.route('/category/:categoryName')
  .all(assertAndSetId('categoryName', Category))
	.get(categoryController.getOneCategory)
	.put(adminRequired, categoryController.updateOneCategory)
	.delete(adminRequired, categoryController.deleteOneCategory)
	.all(() => {throw new HttpError.MethodNotAllowedError()});

router.route('/tag')
	.get(tagController.getAllTags)
	.post(adminRequired, tagController.addOneTag)
	.all(() => {throw new HttpError.MethodNotAllowedError()});

router.route('/tag/:tagName')
  .all(assertAndSetId('tagName', Tag))
	.get(tagController.getOneTag)
	.put(adminRequired, tagController.updateOneTag)
	.delete(adminRequired, tagController.deleteOneTag)
	.all(() => {throw new HttpError.MethodNotAllowedError()});

router.route('/comment')
	.get(commentController.getAllComments)
	.post(commentController.createOneComment)
	.all(() => {throw new HttpError.MethodNotAllowedError()});

router.route('/comment/:commentId')
  .delete(commentController.deleteOneComment)
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


