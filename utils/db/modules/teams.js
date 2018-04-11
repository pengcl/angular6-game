var mongoose = require('mongoose');
var TeamsSchema = require('../schemas/teams'); //拿到导出的数据集模块
var Teams = mongoose.model('Teams', TeamsSchema); // 编译生成Teams 模型

module.exports = Teams;
