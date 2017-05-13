const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
const TagSchema = new Schema({
	tag_name: {type: String},
	create_at: {type: Date, default: Date.now},
	updata_at: {type: Date, default: Date.now}
});

TagSchema.pre('save', next => {
	this.updata_at = Date.now;
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
	}
};

const Tag = mongoose.model('Tag', TagSchema);

module.exports = Tag;