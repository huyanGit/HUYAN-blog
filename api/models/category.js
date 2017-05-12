const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
const CategorySchema = new Schema({
	category_name: {type: String},
	create_at: {type: Date, default: Date.now},
	updata_at: {type: Date, default: Date.now}
});

CategorySchema.pre('save', next => {
	this.updata_at = Date.now;
	next();
});

CategorySchema.statics = {

};

const Category = mongoose.model('Category', CategorySchema);

module.exports = Category;