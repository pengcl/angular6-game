var mongoose = require('mongoose');
//申明一个mongoose对象

var TypesSchema = new mongoose.Schema({
  name: {
    cn: String,
    en: String
  },
});

//查询的静态方法
TypesSchema.statics = {
  findAll: function (cb) { //查询所有数据
    return this.find().exec(cb) //回调
  },
  findById: function (id, cb) { //根据id查询单条数据
    return this.findOne({_id: id}).exec(cb) //回调
  }
};
//暴露出去的方法
module.exports = TypesSchema;
