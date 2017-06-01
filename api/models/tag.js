const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
const TagSchema = new Schema({
	tag_name: {type: String},
	code: {type: String},	
	create_at: {type: Date, default: Date.now},
	update_at: {type: Date, default: Date.now}
});

TagSchema.pre('save', function(next) {
	this.update_at = Date.now;
	next();
});

TagSchema.statics = {
	createTag: function (tag) {
		return tag.save();
	},
	findAllTags: function () {
		return this.find({}).exec();
	},
	findTagById: function(tagId) {
		return this.findById(tagId).exec();
	},
	deleteTagById: function (tagId) {
		return this.remove({_id: tagId}).exec();
	},
	getTagsWithBlogCount: function(){
		return this.aggregate([
				{"$lookup":{"from": "blogs", "localField": "_id", "foreignField":"tags", "as": "blogs"}},
				{"$project":{"code": 1, "tag_name":1,"count":{"$size": "$blogs"}, "create_at": 1, "blogs": 1}},
				{"$sort": {"create_at": -1}}
			]).exec();
	}
};

const Tag = mongoose.model('Tag', TagSchema);

module.exports = Tag;