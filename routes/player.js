var express = require('express');
var router = express.Router();
var Players = require('../utils/db/modules/players');//导入模型数据模块


router.get('/find', function (req, res, next) {
  if (req.query.team) {
    Players.findByTeam(req.query.team, function (err, data) {
      if (err) return err;
      res.send(data);
    });
  } else {
    Players.findAll(function (err, data) {
      if (err) return err;
      res.send(data);
    })
  }
});

module.exports = router;
