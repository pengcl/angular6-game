var getAbility = function (ability) {
  console.log('haha');
  for (let item in ability) {
    var _val = 0;
    var _idx = 0;
    for (let property in  ability[item].property) {
      _idx = _idx + 1;
      _val = _val + ability[item].property[property];
    }
    console.log(_idx, _val);
    ability[item].value = Math.round(_val / _idx);
  }
  return ability;
};

module.exports = getAbility;
