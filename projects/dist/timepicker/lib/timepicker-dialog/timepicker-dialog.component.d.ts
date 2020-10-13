import { EventEmitter, OnInit } from '@angular/core';
import { ClockChange, ClockType, Duration } from '../timepicker.model';
import * as i0 from "@angular/core";
export declare class MateTimepickerDialogComponent implements OnInit {
    private _value;
    clockActive: ClockType;
    valueActive: number;
    second: boolean;
    defaultValue: Duration;
    set value(value: Duration);
    get value(): Duration;
    change: EventEmitter<Duration>;
    cancel: EventEmitter<void>;
    constructor();
    ngOnInit(): void;
    onActive(type: ClockType): void;
    onChange(value: ClockChange): void;
    onSwitch(): void;
    onClockSwitch(type: string): void;
    onOk(): void;
    onCancel(): void;
    static ɵfac: i0.ɵɵFactoryDef<MateTimepickerDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<MateTimepickerDialogComponent, "mate-timepicker-dialog", ["mateTimepickerDialog"], { "second": "second"; "defaultValue": "defaultValue"; "value": "value"; }, { "change": "change"; "cancel": "cancel"; }, never, never>;
}
//# sourceMappingURL=timepicker-dialog.component.d.ts.map