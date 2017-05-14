const jwt = require('jsonwebtoken');
const configs = require('../configs');

//create token
exports.create = (obj, time, cert) => {
	cert = cert || configs.jwt_cert;
	return jwt.sign(obj, cert, {
		algorithm: 'HS256',
		expiresIn: time || '30m'
	});
};


//verify token
exports.verify = (token, cert, callback) => {
	return new Promise ((resolve, reject) => {
		jwt.verify(token, cert, (err, decoded) => {
			if(err) {
				reject(err);
			}
			else{
				resolve(decoded);
			}
			callback(err, decoded);
		});
	});
};