const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const utils = require('../common/utils');
const AdminSchema = new Schema({
	username: {type: String},
	password: {type: String}
});

AdminSchema.pre('save', (next) => {
	if(this.password){
		this.password = utils.md5(this.password);
	}
	next();
});

AdminSchema.statics = {
	isAdmin: function(username, password){
		return this.find({username: username, password: utils.md5(password)}).count().exec();
	}
};

const Admin = mongoose.model('Admin', AdminSchema);

module.exports = Admin;