const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
const BlogSchema = new Schema({
	title: {type: String},
	content: {type: String},
	category: {type: ObjectId, ref: 'Category'},
	tags: [{type: ObjectId, ref: 'Tag'}],
	comment_count: {type: Number, default: 0},
	click_count: {type: Number, default: 0},
	create_at: {type: Date, default: Date.now},
	updata_at: {type: Date, default: Date.now}
});
BlogSchema.pre('save', next => {
	this.updata_at = Date.now;
	next();
})
BlogSchema.statics = {
	findBlogByQuery: function (query, obt) {
		return this.find(query, {}, obt).populate(['category', 'tags']).exec();
	},
	findBlogById: function (blogId) {
		return this.findById(blogId).populate(['category', 'tags']).exec();
	},
	updateBlog: function (blog) {
		return blog.save();
	},
	deleteBlogById: function (blogId) {
		return this.remove({_id: blogId}).exec();
	},
	deleteCategoryInBlog: function (categoryId) {
		return this.update({category: categoryId}, {$unset: {categoryId: 1}}, {multi: 1});
	},
	deleteTagInBlog: function (tagId) {
		return this.update({tags: tagId}, {$pull: {tags: tagId}}, {multi: 1});
	}
};

const Blog = mongoose.model('Blog', BlogSchema);

module.exports = Blog;