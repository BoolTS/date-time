export declare enum ETimeUnit {
    year = "year",
    month = "month",
    day = "day",
    hours = "hours",
    minutes = "minutes",
    seconds = "seconds",
    miliseconds = "miliseconds"
}
export declare const add: (time: Date | string | number, value: number, unit?: ETimeUnit) => Date;
export declare const splitTime: (params?: {
    ["dateData"]: Date;
    ["isUTC"]: boolean;
    ["isString"]: boolean;
}) => {
    source: Date;
    year: string | number;
    month: string | number;
    date: string | number;
    hours: string | number;
    minutes: string | number;
    seconds: string | number;
    milliseconds: string | number;
};
