const oneMinute = 1000 * 60; // 一Minute in milliseconds
const oneHour = oneMinute * 60; // -Hour in milliseconds
const oneDay = oneHour * 24; // -Day in milliseconds
const oneWeek = oneDay * 7; // -Week in milliseconds
const oneMonth = oneDay * 30; // -Month in milliseconds

/**
 * Decrease by the day
 *
 * @param days The number of days to decrease
 */
Date.prototype.minusDays = function (days) {
    return this.minusMillis(oneDay * days);
};

/**
 * Increase by the day
 *
 * @param days The number of days to increase
 */
Date.prototype.plusDays = function (days) {
    return this.plusMillis(oneDay * days);
};

/**
 *  Decrease by the hour
 *
 * @param hours The number of hours to decrease
 */
Date.prototype.minusHours = function (hours) {
    return this.minusMillis(oneHour * hours);
};

/**
 * Increase by the hour
 *
 * @param hours The number of hours to increase
 */
Date.prototype.plusHours = function (hours) {
    return this.plusMillis(oneHour * hours);
};

/**
 * Decrease by the minute
 *
 * @param minutes The number of minutes to decrease
 */
Date.prototype.minusMinutes = function (minutes) {
    return this.minusMillis(oneMinute * minutes);
};

/**
 * Increase by the minute
 *
 * @param minutes The number of minutes to increase
 */
Date.prototype.plusMinutes = function (minutes) {
    return this.plusMillis(oneMinute * minutes);
};

/**
 * Decrease by the milisecond
 *
 * @param millis The number of miliseconds to decrease
 */
Date.prototype.minusMillis = function(millis) {
    let time = this.getTime() - millis;
    let newDate = new Date();
    newDate.setTime(time);
    return newDate;
};

/**
 * Increase by the milisecond
 *
 * @param millis The number of miliseconds to increase
 */
Date.prototype.plusMillis = function(millis) {
    let time = this.getTime() + millis;
    let newDate = new Date();
    newDate.setTime(time);
    return newDate;
};

/**
 * 设置时间为当天的 00:00:00.000
 */
Date.prototype.setMinTime = function () {
    this.setHours(0);
    this.setMinutes(0);
    this.setSeconds(0);
    this.setMilliseconds(0);
    return this;
};

/**
 * 设置时间为当天的 23:59:59.999
 */
Date.prototype.setMaxTime = function () {
    this.setHours(23);
    this.setMinutes(59);
    this.setSeconds(59);
    this.setMilliseconds(999);
    return this;
};

/**
 * 格式化日期
 */
Date.prototype.formatDate = function () {
    return this.getFullYear() + "-" + addZero(this.getMonth() + 1) + "-" + addZero(this.getDate());
};

/**
 * 格式化时间
 */
Date.prototype.formatTime = function () {
    return addZero(this.getHours()) + ":" + addZero(this.getMinutes()) + ":" + addZero(this.getSeconds());
};

/**
 * 格式化日期加时间
 *
 * @param split 日期和时间之间的分隔符，默认是一个空格
 */
Date.prototype.formatDateTime = function (split = ' ') {
    return this.formatDate() + split + this.formatTime();
};

class DateUtil {

    // 字符串转 Date 对象
    static parseDate(str) {
        return new Date(str.replace(/-/g, '/'));
    }

    static formatMillis(millis) {
        return moment(millis).format('YYYY-M-D H:m:s')
    }

    static firstDayOfMonth() {
        const date = new Date();
        date.setDate(1);
        date.setMinTime();
        return date;
    }
}