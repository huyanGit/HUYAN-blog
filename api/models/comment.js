const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const  ObjectId = Schema.Types.ObjectId;
const CommentSchema = new Schema({
	user: {type: String},
	content: {type: String},
	blog: {type: ObjectId, ref: 'Blog'},
	create_at: {type: Date, default: Date.now}
});


CommentSchema.statics = {
	createComment: function(comment){
		return comment.save();
	},
	getComments: function(){
		return this.find({}).populate(['blog']).exec();
	},
	removeCommentById: function(commentId){
		return this.remove({_id: commentId}).exec();
	}
};

const Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;