import { ElementRef, EventEmitter, OnInit } from '@angular/core';
import { MateTimepickerFace } from '../timepicker-face/timepicker-face.directive';
import * as i0 from "@angular/core";
export declare class MateTimepickerDialogMinuteComponent extends MateTimepickerFace implements OnInit {
    readonly step = 6;
    readonly values: number[];
    readonly outerValues: number[];
    clockFace: ElementRef;
    value: any;
    change: EventEmitter<number>;
    finish: EventEmitter<number>;
    constructor();
    ngOnInit(): void;
    onChange(value: number): void;
    valueChange(add: number): void;
    onFinish(): void;
    static ɵfac: i0.ɵɵFactoryDef<MateTimepickerDialogMinuteComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<MateTimepickerDialogMinuteComponent, "mate-timepicker-dialog-minute", ["mateTimepickerDialogMinute"], { "value": "value"; }, { "change": "change"; "finish": "finish"; }, never, never>;
}
//# sourceMappingURL=timepicker-dialog-minute.component.d.ts.map