const crypto = require('crypto');//加密解密
const utils = {};

utils.md5 = (string) =>
  crypto.createHash('md5').update(string).digest('hex');

utils.isObjectId = (id) =>
  typeof id === 'string' && /^[0-9a-fA-F]{24}$/.test(id);
  
module.exports = utils;