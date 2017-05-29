const configs = require('../configs');
const HttpError = require('some-http-error');
const path = require('path');
const fs = require('fs');
const mkdirp = require('mkdirp');
const utils = require('../common/utils');

const uploadController = {};
 
function mkdirIfNotExist(dir, callback) {
	fs.exists(dir, function(exist){
		if(!exist) {
			mkdirp(dir,function(err){
				if(err) {
          return callback(err);
        }
				return callback(null);
			});
		} else{
			return callback(null);
		}
	});
}
function getNowTimeStempSub(length) {
  return Date.now().toString().substring(13 - length, 13)
}

uploadController.storagePicture =  {
  destination(req, file, callback) {
    const dir = path.resolve(configs.upload_dir, 'pictures');
    console.log(dir);
    mkdirIfNotExist(dir, err => {
      if (err) {
        return callback(err)
      } else {
        return callback(null, dir + '/');
      }
    })
  },
  filename(req, file, callback) {
    const filenameArr = file.originalname.split('.');
    const ext = filenameArr[filenameArr.length - 1];
    if (!configs.upload_allow_types.test(ext)) {
      return callback(new HttpError.BadRequestError('上传的不是图片文件'));
    }
    return callback(null, utils.md5(getNowTimeStempSub(8)) + '.' + ext);
  }
};
uploadController.handleResult = (req, res, next) => {
  res.success({
    url: req.file.path.replace(path.resolve(configs.upload_dir), configs.upload_base).replace(/\\/g, '/')
  }, 201);
};

module.exports = uploadController;
