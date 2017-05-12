const HttpError = require('some-http-error');
const errorHandling = (err, req,  res, next) => {
  if (err instanceof HttpError) {
    if (process.env.NODE_ENV === 'test') {
      console.error(err.statusCode, err.message);
    }
    res.error(err.message, err.statusCode);
  } else {
    console.log(err.stack);
    res.error(err.message, 500)
  }
};

module.exports = errorHandling;