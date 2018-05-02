"use strict";

var getBraziliansYearHolidays = require("./lib/brazilianHolidays");
var parse = require("./lib/parse");

var ehDiaUtil = function(date) {
  var given = parse(date);

  var dayOfWeek = given.getDay();
  var isSaturday = dayOfWeek === 6;
  var isSunday = dayOfWeek === 0;

  if (isSaturday || isSunday) {
    return false;
  }

  var year = given.getFullYear();
  var holidays = getBraziliansYearHolidays(year);
  for (var i = 0; i < holidays.length; i++) {
    var holiday = holidays[i];
    var date = holiday.date.getDate();
    var month = holiday.date.getMonth();

    var givenDate = given.getDate();
    var givenMonth = given.getMonth();

    if (givenDate === date && givenMonth === month) {
      return false;
    }
  }

  return true;
};

module.exports = ehDiaUtil;
