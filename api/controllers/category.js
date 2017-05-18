const Category = require('../models').Category;
//const mongoose = require('mongoose');
const categoryControllers = {};

//add category
categoryControllers.addCategory = (req, res, next) => {
	const body = req.body;
	Category.updateCategory(new Category(body)).then(category => {
		res.success(category, 201);
	}).catch(next);
};

//find all category
categoryControllers.getCategory = (req, res, next) => {
	Category.getCategoryWithBlogCount().then(category => {
		res.success(category);
	}).catch(next);
};

//find one category
categoryControllers.getOneCategory = (req, res, next) => {
	const categoryId = req.params.categoryId;
	Category.findCategoryById(categoryId).then(category => {
		res.success(category);
	}).catch(next);
};

//update one category
categoryControllers.updateOneCategory = (req, res, next) => {
	const categoryId = req.params.categoryId;
	const body = req.body;
	Category.findCategoryById(categoryId).then(category => {
			const _category = Object.assign(category, body);
			return Category.updateCategory(_category);
	}).then(category => {
		res.success(category, 201);
	}).catch(next);
};

//remove one category
categoryControllers.deleteOneCategory = (req, res, next) => {
	const categoryId = req.params.categoryId;
	Category.deleteCategoryById(categoryId).then(() => {
		res.success(null, 204);
	});
}

module.exports = categoryControllers;