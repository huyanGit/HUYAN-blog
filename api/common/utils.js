const crypto = require('crypto');//加密解密
const utils = {};

utils.md5 = (string) =>
  crypto.createHash('md5').update(string).digest('hex');

module.exports = utils;