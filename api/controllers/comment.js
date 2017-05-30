const Comment = require('../models').Comment;
const commentControllers = {};

commentControllers.getAllComments = (req, res, next) => {
	Comment.getComments().then(comments => {
		res.success(comments);
	}).catch(next);
}

commentControllers.createOneComment = (req, res, next) => {
	const body = req.body;
	Comment.createComment(new Comment(body)).then(comment => {
		res.success(comment, 201);
	}).catch(next)
}

commentControllers.deleteOneComment = (req, res, next) => {
	const commentId = req.params.commentId;
	Comment.removeCommentById(commentId).then(() => {
		res.success(null, 204);
	}).catch(next);
}

module.exports = commentControllers;