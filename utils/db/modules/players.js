var mongoose = require('mongoose');
var PlayersSchema = require('../schemas/players'); //拿到导出的数据集模块
var Players = mongoose.model('Players', PlayersSchema); // 编译生成Tags 模型

module.exports = Players;
