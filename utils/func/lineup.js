exports.getLineup = function (lineup, player) {
  if (lineup.main.length < 11) {
    lineup.main.push(player);
    return lineup;
  }
  if (lineup.bench.length < 7) {
    lineup.bench.push(player);
    return lineup;
  }
  if (lineup.reserve.length < 100) {
    lineup.reserve.push(player);
    return lineup;
  }
  return false;
};
