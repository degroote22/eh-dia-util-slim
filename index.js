'use strict';

var dayjs = require('dayjs');
var getBraziliansYearHolidays = require('./lib/brazilianHolidays');

var ehDiaUtil = function(date) {

    var given = dayjs(date);
    var dayOfWeek = given.toDate().getDay();
    var isSaturday = dayOfWeek === 6;
    var isSunday = dayOfWeek === 0;

    if (isSaturday || isSunday) {
        return false;
    }

    var holidays = getBraziliansYearHolidays(given.year());
    for (var i = 0; i < holidays.length; i++) {
        var holiday = holidays[i];
        var date = holiday.date.date()
        var month = holiday.date.month()
        
        var givenDate = given.date()
        var givenMonth = given.month()

        if (givenDate === date && givenMonth === month) {
            return false;
        }
    }

    return true;
};

module.exports = ehDiaUtil;