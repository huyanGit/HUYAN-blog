const Tag = require('../models').Tag;

const tagControllers = {};

//add one tag
tagControllers.addOneTag = (req, res, next) => {
	const body = req.body;
	Tag.createTag(new Tag(body)).then(tag => {
		res.success(tag, 201);
	});
};

//find all tags
tagControllers.getAllTags = (req, res, next) => {
	Tag.findAllTags().then(tags => {
		res.success(tags);
	});
};

//find one tag
tagControllers.getOneTag = (req, res, next) => {
	const tagId = req.params.tagId;
	Tag.findTagById(tagId).then(tag => {
		res.success(tag);
	});
};

//update one tag
tagControllers.updateOneTag = (req, res, next) => {
	const body = req.body;
	const tagId = req.params.tagId;
	Tag.findTagById(tagId).then(tag => {
		const _tag = Object.assign(tag, body);
		return Tag.createTag(_tag);
	}).then(tag => {
		res.success(tag, 201);
	});
};

//remove one tag
tagControllers.deleteOneTag = (req, res, next) => {
	const tagId = req.params.tagId;
	Tag.deleteTagById(tagId).then(() => {
		res.success(null, 204);
	});
};

module.exports = tagControllers;