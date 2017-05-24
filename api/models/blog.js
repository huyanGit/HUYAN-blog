const mongoose = require('mongoose');
const marked = require('marked');
const pangu = require('pangu');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
const BlogSchema = new Schema({
	title: {type: String},
	markdown: {
			summary: String,
			body: String
	},
	html: {
			summary: String,
			body: String
	},
	category: {type: ObjectId, ref: 'Category'},
	tags: [{type: ObjectId, ref: 'Tag'}],
	comment_count: {type: Number, default: 0},
	click_count: {type: Number, default: 0},
	create_at: {type: Date, default: Date.now},
	update_at: {type: Date, default: Date.now}
});
BlogSchema.pre('save', function(next) {
	this.update_at = Date.now;
	// this.title = pangu.spacing(this.title);
	// this.markdown.summary = pangu.spacing(this.markdown.summary);
	// this.markdown.body = pangu.spacing(this.markdown.body);
	this.html.summary = marked(this.markdown.summary);
	this.html.body = marked(this.markdown.body);
	next();
})
BlogSchema.statics = {
	findBlogByQuery: function (query, obt) {
		return this.find(query, {'markdown': 0, 'html.body': 0}, obt).populate(['category', 'tags']).exec();
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
	getBlogArchives: function() {
		return this.aggregate([
				{"$project": {"year": {"$year": "$create_at"}, "blog":{"_id":"$_id","create_at": "$create_at", "title": "$title"}}},
				{"$sort": {"blog.create_at": -1}},
				{"$group": {"_id": {"year": "$year"}, "blogs": {"$push": "$blog"}}},
				{"$project": {"_id": 0, "year": "$_id.year", "blogs": 1, "count": {"$size": "$blogs"}}},
				{"$sort":{"year": -1}}
			]).exec();
	}
};

const Blog = mongoose.model('Blog', BlogSchema);

module.exports = Blog;