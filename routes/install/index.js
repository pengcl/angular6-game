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

router.get('/install', function (req, res, next) {
  const options = {};
  Countries.findAll()
    .then(countries => {
      if (countries.length === 0) {
        COUNTRIES.forEach(item => {
          (function (item) {
            var country = new Countries({
              name: item
            });
            country.save();
          })(item);
        });
      }
    })
    .then(Tags.findAll().then(tags => {
      if (tags.length === 0) {
        TAGS.forEach(item => {
          (function (item) {
            var tag = new Tags({
              name: item
            });
            tag.save();
          })(item);
        });
      }
    }))
    .then(Types.findAll().then(types => {
      if (types.length === 0) {
        TYPES.forEach(item => {
          (function (item) {
            var type = new Types({
              name: item
            });
            type.save();
          })(item);
        });
      }
    }))
    .then(Teams.findAll().then(teams => {
      Countries.findAll().then(countries => {
        if (teams.length === 0) {
          TEAMS.forEach(item => {
            (function (item) {
              var team = new Teams({
                name: {
                  en: item.en,
                  cn: item.cn
                },
                country: (function () {
                  for (let i = 0; i < countries.length; i++) {
                    if (countries[i].name.en === item.country.en) {
                      return countries[i]._id
                    }
                  }
                })()
              });
              team.save();
            })(item);
          });
          //res.send('done');
        } else {
          //res.send('done');
        }
      });
    }))
    .then(Players.findAll().then(players => {
      loadPlayers(100);
      res.send('done');
    }))
});

module.exports = router;
