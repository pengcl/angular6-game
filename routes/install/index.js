var express = require('express');
var router = express.Router();
var _ = require('underscore');
var Countries = require('../../utils/db/modules/countries');//导入模型数据模块
var Tags = require('../../utils/db/modules/tags');//导入模型数据模块
var Types = require('../../utils/db/modules/types');//导入模型数据模块
var Teams = require('../../utils/db/modules/teams');//导入模型数据模块
var Players = require('../../utils/db/modules/players');//导入模型数据模块
var loadPlayers = require('../../utils/fake/players');

var {getIndex} = require('../../utils/func/getIndex');

var {COUNTRIES} = require('../../mock/countries');
var {TAGS} = require('../../mock/tags');
var {TYPES} = require('../../mock/types');
var {TEAMS} = require('../../mock/teams');
var {PLAYERS} = require('../../mock/players');

router.get('/install', function (req, res, next) {
  const options = {};
  Countries.findAll()
    .then(countries => {
      if (countries.length === 0) {
        COUNTRIES.forEach(item => {
          (function (item) {
            var country = new Countries(item);
            country.save();
          })(item);
        });
      }
    })
    .then(Tags.findAll().then(tags => {
      if (tags.length === 0) {
        TAGS.forEach(item => {
          (function (item) {
            var tag = new Tags(item);
            tag.save();
          })(item);
        });
      }
    }))
    .then(Types.findAll().then(types => {
      if (types.length === 0) {
        TYPES.forEach(item => {
          (function (item) {
            var type = new Types(item);
            type.save();
          })(item);
        });
      }
    }))
    .then(() => {
      PLAYERS.forEach(item => {
        Players.findByCid(item.id).then(players => {
          if(players.length === 0){
            (function (item) {
              var player = new Players(item);
              player.save();
            })(item);
          }
          res.send('done');
        })
      });
    })
  /*.then(Teams.findAll().then(teams => {
    Countries.findAll().then(countries => {
      if (teams.length === 0) {
        TEAMS.forEach(item => {
          (function (item) {
            var team = new Teams(item);
            team.save();
          })(item);
        });
      }
    });
  }))
  .then(Players.findAll().then(players => {
    loadPlayers();
    res.send('done');
  }))*/
});

module.exports = router;
