import {TimepickerUtil} from './timepicker.util';

export declare type ClockType = 'hour' | 'minute' | 'second';

export declare type ClickType = 'ok' | 'cancel';

export interface ClockChange {
    type: ClockType;
    value: number;
}

export class Duration {
    static matrix: any = {
        days: {hours: 24, minutes: 1440, seconds: 86400, milliseconds: 86400000},
        hours: {minutes: 60, seconds: 3600, milliseconds: 3600000},
        minutes: {seconds: 60, milliseconds: 60000},
        seconds: {milliseconds: 1000}
    };

    hour: number;
    minute: number;
    second: number;

    constructor(hour: number, minute: number, second: number) {
        this.hour = hour;
        this.minute = minute;
        this.second = second;
    }

    private static parseTimes(times: string[]) {
        let hour, minute, second;
        if (times.length > 1) {
            hour = parseInt(times[0], 10);
            minute = parseInt(times[1], 10);
            if (TimepickerUtil.isRealNumber(hour) && TimepickerUtil.isRealNumber(minute)) {
                if (times.length > 2) {
                    second = parseInt(times[2], 10);
                }
                if (!TimepickerUtil.isRealNumber(second)) {
                    second = 0;
                }

                if (hour < 0) {
                    hour = 0;
                }
                if (minute < 0) {
                    minute = 0;
                }
                if (second < 0) {
                    second = 0;
                }
                hour %= 24;
                minute %= 60;
                second %= 60;

                if (hour < 12 && times.length > 2 && times[2].toLowerCase().includes('pm')) {
                    hour += 12;
                }
                return new Duration(hour, minute, second);
            }
        }
        return null;
    }

    static valueOf(hour: number, minute: number, second: number): Duration {
        return new Duration(hour, minute, second);
    }

    static zero(): Duration {
        return new Duration(0, 0, 0);
    }

    static fromMillis(count: number): Duration {
        if (count < 0) {
            return null;
        }
        return new Duration(
            Math.floor(count / Duration.matrix.hours.milliseconds) % Duration.matrix.days.hours,
            Math.floor(count / Duration.matrix.minutes.milliseconds) % Duration.matrix.hours.minutes,
            Math.floor(count / Duration.matrix.seconds.milliseconds) % Duration.matrix.minutes.seconds
        );
    }

    static fromString(value: string, separator?: string): Duration {
        if (typeof value === 'string') {
            let time;
            if (typeof separator === 'string') {
                time = Duration.parseTimes(value.split(separator));
                if (time) {
                    return time;
                }
            }
            time = Duration.parseTimes(value.split(':'));
            if (time) {
                return time;
            }
            time = Duration.parseTimes(value.split('-'));
            if (time) {
                return time;
            }
            time = Duration.parseTimes(value.split('.'));
            if (time) {
                return time;
            }
            time = Duration.parseTimes(value.split(';'));
            if (time) {
                return time;
            }
            time = Duration.parseTimes(value.split(','));
            if (time) {
                return time;
            }
        }
        return null;
    }

    static fromDate(value: Date): Duration {
        if (value instanceof Date) {
            return new Duration(value.getHours(), value.getMinutes(), value.getSeconds());
        }
        return null;
    }

    static now(second: boolean = true): Duration {
        const now = new Date();
        return new Duration(now.getHours(), now.getMinutes(), second ? now.getSeconds() : 0);
    }

    clone(): Duration {
        return new Duration(this.hour, this.minute, this.second);
    }

    getValue(type: ClockType): number {
        if (['hour', 'minute', 'second'].includes(type)) {
            return this[type];
        }
        return null;
    }

    setValue(type: ClockType, value: number) {
        if (['hour', 'minute', 'second'].includes(type)) {
            this[type] = value;
        }
        return this;
    }

    setNew(type: ClockType, value: number): Duration {
        const result: Duration = new Duration(this.hour, this.minute, this.second);
        if (['hour', 'minute', 'second'].includes(type)) {
            result[type] = value;
        }
        return result;
    }

    format(format?: string): string {
        if (format) {
            const replace = (f, v, r) => {
                let match;
                while (true) {
                    match = r.match(f);
                    if (match && typeof match[0] === 'string') {
                        r = r.replace(match[0], String(v).padStart(match[0].length, '0'));
                    } else {
                        break;
                    }
                }
                return r;
            };
            let result = format;
            result = replace(/h+/i, this.hour, result);
            result = replace(/m+/i, this.minute, result);
            result = replace(/s+/i, this.second, result);
            return result;
        } else {
            return `${String(this.hour).padStart(2, '0')}:${String(this.minute).padStart(2, '0')}:${String(this.second).padStart(2, '0')}`;
        }
    }

    milliseconds(): number {
        return this.hour * Duration.matrix.hours.milliseconds +
            this.minute * Duration.matrix.minutes.milliseconds +
            this.second * Duration.matrix.seconds.milliseconds;
    }

    setToDate(value: Date): Date {
        value.setHours(this.hour);
        value.setMinutes(this.minute);
        value.setSeconds(this.second);
        value.setMilliseconds(0);
        return value;
    }

    equals(value: Duration): boolean {
        return value != null && this.hour === value.hour && this.minute === value.minute && this.second === value.second;
    }
}
