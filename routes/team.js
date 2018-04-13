var express = require('express');
var router = express.Router();
var Teams = require('../utils/db/modules/teams');//导入模型数据模块


router.get('/find', function (req, res, next) {
  if (req.query.id) {
    Teams.findById(req.query.id, function (err, data) {
      if (err) return err;
      res.send(data);
    });
  } else {
    Teams.findAll(function (err, data) {
      if (err) return err;
      res.send(data);
    })
  }
});

module.exports = router;
