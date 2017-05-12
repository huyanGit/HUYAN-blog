const responseMiddleware = (req, res, next) => {
	res.success = (object, statusCode) => {
		statusCode = statusCode || 200;
		res.status(statusCode).json(object);
	};
	res.error = (errorMessage, statusCode) => {
		statusCode = statusCode || 500;
		res.status(statusCode).json({
			statusCode: statusCode,
			message: errorMessage
		})
	};
	next();
}

module.exports = responseMiddleware;