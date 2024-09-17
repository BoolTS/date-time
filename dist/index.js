export var ETimeUnit;
(function (ETimeUnit) {
    ETimeUnit["year"] = "year";
    ETimeUnit["month"] = "month";
    ETimeUnit["day"] = "day";
    ETimeUnit["hours"] = "hours";
    ETimeUnit["minutes"] = "minutes";
    ETimeUnit["seconds"] = "seconds";
    ETimeUnit["miliseconds"] = "miliseconds";
})(ETimeUnit || (ETimeUnit = {}));
export const add = (time, value, unit = ETimeUnit.day) => {
    const date = time instanceof Date ? time : new Date(time);
    switch (unit) {
        case ETimeUnit.year:
            date.setFullYear(date.getFullYear() + value);
            break;
        case ETimeUnit.month:
            date.setMonth(date.getMonth() + value);
            break;
        case ETimeUnit.day:
            date.setDate(date.getDate() + value);
            break;
        case ETimeUnit.hours:
            date.setHours(date.getHours() + value);
            break;
        case ETimeUnit.minutes:
            date.setMinutes(date.getMinutes() + value);
            break;
        case ETimeUnit.seconds:
            date.setSeconds(date.getSeconds() + value);
            break;
        case ETimeUnit.miliseconds:
            date.setMilliseconds(date.getMilliseconds() + value);
            break;
    }
    return date;
};
export const splitTime = (params) => {
    const { dateData, isUTC, isString } = !params
        ? {
            ["dateData"]: new Date(),
            ["isUTC"]: false,
            ["isString"]: false
        }
        : params;
    if (!isUTC) {
        const year = !isString ? dateData.getFullYear() : String(dateData.getFullYear());
        const month = dateData.getMonth() < 9
            ? !isString
                ? dateData.getMonth() + 1
                : `0${dateData.getMonth() + 1}`
            : !isString
                ? dateData.getMonth() + 1
                : String(dateData.getMonth() + 1);
        const date = dateData.getDate() < 10
            ? !isString
                ? dateData.getDate()
                : `0${dateData.getDate()}`
            : !isString
                ? dateData.getDate()
                : String(dateData.getDate());
        const hours = dateData.getHours() < 10
            ? !isString
                ? dateData.getHours()
                : `0${dateData.getHours()}`
            : !isString
                ? dateData.getHours()
                : String(dateData.getHours());
        const minutes = dateData.getMinutes() < 10
            ? !isString
                ? dateData.getMinutes()
                : `0${dateData.getMinutes()}`
            : !isString
                ? dateData.getMinutes()
                : String(dateData.getMinutes());
        const seconds = dateData.getSeconds() < 10
            ? !isString
                ? dateData.getSeconds()
                : `0${dateData.getSeconds()}`
            : !isString
                ? dateData.getSeconds()
                : String(dateData.getSeconds());
        const milliseconds = dateData.getMilliseconds() < 10
            ? !isString
                ? dateData.getMilliseconds()
                : `0${dateData.getMilliseconds()}`
            : !isString
                ? dateData.getMilliseconds()
                : String(dateData.getMilliseconds());
        return { source: dateData, year, month, date, hours, minutes, seconds, milliseconds };
    }
    else {
        const year = !isString ? dateData.getUTCFullYear() : String(dateData.getUTCFullYear());
        const month = dateData.getUTCMonth() < 9
            ? !isString
                ? dateData.getUTCMonth() + 1
                : `0${dateData.getUTCMonth() + 1}`
            : !isString
                ? dateData.getUTCMonth() + 1
                : String(dateData.getUTCMonth() + 1);
        const date = dateData.getUTCDate() < 10
            ? !isString
                ? dateData.getUTCDate()
                : `0${dateData.getUTCDate()}`
            : !isString
                ? dateData.getUTCDate()
                : String(dateData.getUTCDate());
        const hours = dateData.getUTCHours() < 10
            ? !isString
                ? dateData.getUTCHours()
                : `0${dateData.getUTCHours()}`
            : !isString
                ? dateData.getUTCHours()
                : String(dateData.getUTCHours());
        const minutes = dateData.getUTCMinutes() < 10
            ? !isString
                ? dateData.getUTCMinutes()
                : `0${dateData.getUTCMinutes()}`
            : !isString
                ? dateData.getUTCMinutes()
                : String(dateData.getUTCMinutes());
        const seconds = dateData.getUTCSeconds() < 10
            ? !isString
                ? dateData.getUTCSeconds()
                : `0${dateData.getUTCSeconds()}`
            : !isString
                ? dateData.getUTCSeconds()
                : String(dateData.getUTCSeconds());
        const milliseconds = dateData.getUTCMilliseconds() < 10
            ? !isString
                ? dateData.getUTCMilliseconds()
                : `0${dateData.getUTCMilliseconds()}`
            : !isString
                ? dateData.getUTCMilliseconds()
                : String(dateData.getUTCMilliseconds());
        return { source: dateData, year, month, date, hours, minutes, seconds, milliseconds };
    }
};
