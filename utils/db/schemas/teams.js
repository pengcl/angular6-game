var mongoose = require('mongoose');
//申明一个mongoose对象

var TeamsSchema = new mongoose.Schema({
  name: {
    cn: String,
    en: String
  },
  country: String,
  meta: {
    createAt: {
      type: Date,
      default: Date.now()
    },
    updateAt: {
      type: Date,
      default: Date.now()
    },
    endAt: {
      type: Date,
      default: Date.now()
    }
  }
});

//每次执行都会调用,时间更新操作
TeamsSchema.pre('save', function (next) {
  if (this.isNew) {
    this.meta.createAt = this.meta.updateAt = Date.now();
  } else {
    this.meta.updateAt = Date.now();
  }
  next();
});

//查询的静态方法
TeamsSchema.statics = {
  findAll: function (cb) { //查询所有数据
    return this.find().exec(cb) //回调
  },
  findById: function (id, cb) { //根据id查询单条数据
    return this.findOne({_id: id}).exec(cb) //回调
  }
};
//暴露出去的方法
module.exports = TeamsSchema;
