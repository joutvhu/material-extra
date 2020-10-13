export declare type ClockType = 'hour' | 'minute' | 'second';
export declare type ClickType = 'ok' | 'cancel';
export interface ClockChange {
    type: ClockType;
    value: number;
}
export declare class Duration {
    static matrix: any;
    hour: number;
    minute: number;
    second: number;
    constructor(hour: number, minute: number, second: number);
    private static parseTimes;
    static valueOf(hour: number, minute: number, second: number): Duration;
    static zero(): Duration;
    static fromMillis(count: number): Duration;
    static fromString(value: string, separator?: string): Duration;
    static fromDate(value: Date): Duration;
    static now(second?: boolean): Duration;
    clone(): Duration;
    getValue(type: ClockType): number;
    setValue(type: ClockType, value: number): this;
    setNew(type: ClockType, value: number): Duration;
    format(format?: string): string;
    milliseconds(): number;
    setToDate(value: Date): Date;
    equals(value: Duration): boolean;
}
//# sourceMappingURL=timepicker.model.d.ts.map