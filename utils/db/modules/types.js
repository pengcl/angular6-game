var mongoose = require('mongoose');
var TypesSchema = require('../schemas/types'); //拿到导出的数据集模块
var Types = mongoose.model('Types', TypesSchema); // 编译生成Tags 模型

module.exports = Types;
