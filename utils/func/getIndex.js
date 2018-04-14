var {eqObj} = require('./getIndexObj');//导入模型数据模块
var _ = require('underscore');
exports.getIndex = function (array, key, value) {
  for (let i = 0; i < array.length; i++) {
    if (typeof value === 'object') {
      if (_.isEqual(array[i][key], value)) {
        return i
      }
    } else {
      if (array[i][key] === value) {
        return i;
      }
    }
  }
};
