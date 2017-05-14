const Admin = require('../models').Admin;
const jwt = require('../common/jwt');
const HttpError = require('some-http-error');
const adminController = {};

adminController.authorize = (req, res, next) => {
	const body = req.body;
	Admin.isAdmin(body.username, body.password).then(isAdmin => {
		if(isAdmin){
			const token = jwt.create({username: body.username});
			res.success({token: token});
		}
		else{
			next(new HttpError.BadRequestError('username or password error'));
		}
	});
};

module.exports = adminController;