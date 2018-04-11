var mongoose = require('mongoose');
var CountriesSchema = require('../schemas/countries'); //拿到导出的数据集模块
var Countries = mongoose.model('countries', CountriesSchema); // 编译生成Countries 模型

module.exports = Countries;
