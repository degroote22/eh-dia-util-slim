var parse = function(config) {
  var reg;
  if (config === null) return new Date(NaN); // Treat null as an invalid date
  if (!config) return new Date();
  if (config instanceof Date) return config;
  // eslint-disable-next-line no-cond-assign
  if ((reg = String(config).match(/^(\d{4})-?(\d{2})-?(\d{1,2})$/))) {
    // 2018-08-08 or 20180808
    return new Date(reg[1], reg[2] - 1, reg[3]);
  }
  return new Date(config); // timestamp
};

module.exports = parse;
