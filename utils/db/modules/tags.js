var mongoose = require('mongoose');
var TagsSchema = require('../schemas/tags'); //拿到导出的数据集模块
var Tags = mongoose.model('Tags', TagsSchema); // 编译生成Tags 模型

module.exports = Tags;
