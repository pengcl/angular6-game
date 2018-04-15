const player = {
  "id": 1,
  "name": {
    "en": "Lionel Messi",
    "cn": "梅西"
  },
  "ability": {
    "attacking": {
      "property": {
        "crossing": 77,
        "finishing": 95,
        "heading": 71,
        "shortPassing": 88,
        "volleys": 86
      },
      "value": 62.6
    },
    "skill": {
      "property": {
        "dribbling": 97,
        "curve": 90,
        "freeKick": 92,
        "longPassing": 87,
        "ballControl": 96
      },
      "value": 83.2
    },
    "movement": {
      "property": {
        "acceleration": 92,
        "sprintSpeed": 87,
        "agility": 90,
        "reactions": 95,
        "balance": 95
      },
      "value": 93
    },
    "power": {
      "property": {
        "shotPower": 85,
        "jumping": 67,
        "stamina": 73,
        "strength": 59,
        "longShots": 88
      },
      "value": 86
    },
    "mentality": {
      "property": {
        "aggression": 48,
        "interceptions": 22,
        "positioning": 93,
        "vision": 92,
        "penalties": 75,
        "composure": 97
      },
      "value": 90.1666666666667
    },
    "defending": {
      "property": {
        "marking": 13,
        "standingTackle": 28,
        "slidingTackle": 26
      },
      "value": 102.333333333333
    },
    "goalkeeping": {
      "property": {
        "diving": 6,
        "handling": 11,
        "kicking": 15,
        "positioning": 14,
        "reflexes": 8
      },
      "value": 13.6
    }
  },
  "positions": [
    {
      "name": "ST",
      "value": 91.76
    },
    {
      "name": "AML",
      "value": 93.99
    },
    {
      "name": "AMF",
      "value": 91.76
    },
    {
      "name": "AMR",
      "value": 95.25
    },
    {
      "name": "LMF",
      "value": 94.56
    },
    {
      "name": "CMF",
      "value": 96.98
    },
    {
      "name": "RMF",
      "value": 94.56
    },
    {
      "name": "DMF",
      "value": 98.41
    },
    {
      "name": "LB",
      "value": 96.19
    },
    {
      "name": "CB",
      "value": 97.74
    },
    {
      "name": "RB",
      "value": 96.19
    },
    {
      "name": "GK",
      "value": 30.66
    }
  ],
  "goodAt": [],
  "description": "",
  "country": 3,
  "weight": 99,
  "height": 182,
  "uniformNo": 10,
  "team": 1,
  "star": 2,
  "level": 1,
  "type": 3,
  "tag": 3,
  "avatar": "/assets/images/lineup/avatars/players/1.png",
  "owner": "",
  "baseId": "",
  "exp": 0,
};

var getPropertyOverall = function (ability) {
  for (let item in ability) {
    let value = 0;
    let index = 0;
    for (let property in  ability[item].property) {
      index = index + 1;
      value = value + ability[item].property[property];
    }
    ability[item].value = Math.round(value / index);
  }
  return ability;
};

console.log(getPropertyOverall(player.ability));
