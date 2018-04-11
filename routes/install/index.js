var express = require('express');
var router = express.Router();
var Countries = require('../../utils/db/modules/countries');//导入模型数据模块
var Tags = require('../../utils/db/modules/tags');//导入模型数据模块
var Types = require('../../utils/db/modules/types');//导入模型数据模块
var Teams = require('../../utils/db/modules/teams');//导入模型数据模块
var Players = require('../../utils/db/modules/players');//导入模型数据模块

var {COUNTRIES} = require('../../mock/countries');
var {TAGS} = require('../../mock/tags');
var {TYPES} = require('../../mock/types');

router.get('/install', function (req, res, next) {
  COUNTRIES.forEach(item => {
    (function (item) {
      var country = new Countries({
        name: item
      });
      country.save();
    })(item);
  });

  TAGS.forEach(item => {
    (function (item) {
      var tag = new Tags({
        name: item
      });
      tag.save();
    })(item);
  });

  TYPES.forEach(item => {
    (function (item) {
      var type = new Types({
        name: item
      });
      type.save();
    })(item);
  });

  res.send('ok');
});

module.exports = router;
