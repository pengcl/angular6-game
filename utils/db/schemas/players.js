var mongoose = require('mongoose');
var getPosition = require('../../func/getPosition');//导入模型数据模块
//申明一个mongoose对象

var PlayersSchema = new mongoose.Schema({
  id: Number,
  name: {
    cn: String,
    en: String
  },
  country: Number,
  weight: Number,
  height: Number,
  uniformNo: Number,
  team: Number,
  positions: Array,
  position: String,
  star: Number,
  level: Number,
  type: Number,
  tag: Number,
  avatar: String,
  label: String,
  goodAt: Array,
  exp: Number,
  mark: String,
  description: {
    type: String,
    default: '...'
  },
  ability: {
    attacking: {//进攻
      value: Number,
      property: {
        crossing: Number,//传中
        finishing: Number,//射术
        heading: Number,//头球
        shortPassing: Number,//短传
        volleys: Number,//凌空
      }
    },
    skill: {//技巧
      value: Number,
      property: {
        dribbling: Number,//盘带
        curve: Number,//弧线
        freeKick: Number,//任意球
        longPassing: Number,//长传
        ballControl: Number,//控球
      }
    },
    movement: {//移动
      value: Number,
      property: {
        acceleration: Number,//加速
        sprintSpeed: Number,//速度
        agility: Number,//敏捷
        reactions: Number,//反应
        balance: Number//平衡
      }
    },
    power: {//力量
      value: Number,
      property: {
        shotPower: Number,//射门力量
        jumping: Number,//弹跳
        stamina: Number,//体能
        strength: Number,//强壮
        longShots: Number//远射
      }
    },
    mentality: {//心理
      value: Number,
      property: {
        aggression: Number,//侵略性
        interceptions: Number,//拦截意识
        positioning: Number,//跑位
        vision: Number,//视野
        penalties: Number,//点球
        composure: Number,//沉着
      }
    },
    defending: {//防守
      value: Number,
      property: {
        marking: Number,//盯人
        standingTackle: Number,//抢断
        slidingTackle: Number,//铲球
      }
    },
    goalkeeping: {//守门
      value: Number,
      property: {
        diving: Number,//鱼跃
        handling: Number,//手抛球
        kicking: Number,//开球
        positioning: Number,//站位
        reflexes: Number,//反应
      }
    }
  },
  owner: String,
  baseId: String,
  meta: {
    createAt: {
      type: Date,
      default: Date.now()
    },
    updateAt: {
      type: Date,
      default: Date.now()
    },
    birthAt: {
      type: Date,
      default: Date.now()
    }
  }
});

//每次执行都会调用,时间更新操作
PlayersSchema.pre('save', function (next) {
  if (this.isNew) {
    this.exp = 0;
    this.meta.createAt = this.meta.updateAt = Date.now();
  } else {
    this.meta.updateAt = Date.now();
  }
  this.positions = getPosition(this.ability, this.level);
  for (let item in this.ability) {
    this.ability[item].value = 0;
    this.ability[item].len = 0;

    for (let property in  this.ability[item].property) {
      this.ability[item].len = this.ability[item].len + 1;
      console.log(this.ability[item].len);
      this.ability[item].value = this.ability[item].value + this.ability[item].property[property];
    }
  }
  next();
});

//查询的静态方法
PlayersSchema.statics = {
  findAll: function (cb) { //查询所有数据
    return this.find().exec(cb) //回调
  },
  findById: function (id, cb) { //根据id查询单条数据
    return this.findOne({_id: id}).exec(cb) //回调
  },
  findByCid: function (id, cb) { //根据id查询单条数据
    return this.find({id: id}).exec(cb) //回调
  },
  findByTeam: function (team, cb) { //根据id查询单条数据
    return this.find({team: team}).exec(cb) //回调
  }
};
//暴露出去的方法
module.exports = PlayersSchema;
