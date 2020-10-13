import { ElementRef, EventEmitter, OnInit } from '@angular/core';
import { CanColor, ThemePalette } from '@angular/material/core';
import { MateTimepickerFace } from '../timepicker-face/timepicker-face.directive';
import * as i0 from "@angular/core";
export declare class MateTimepickerDialogHourComponent extends MateTimepickerFace implements OnInit, CanColor {
    readonly step = 30;
    readonly outerValues: number[];
    readonly innerValues: number[];
    clockFace: ElementRef;
    value: any;
    color: ThemePalette;
    change: EventEmitter<number>;
    finish: EventEmitter<number>;
    defaultColor: ThemePalette | undefined;
    constructor();
    ngOnInit(): void;
    onChange(value: number): void;
    valueChange(add: number): void;
    onFinish(): void;
    static ɵfac: i0.ɵɵFactoryDef<MateTimepickerDialogHourComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<MateTimepickerDialogHourComponent, "mate-timepicker-dialog-hour", ["mateTimepickerDialogHour"], { "value": "value"; }, { "change": "change"; "finish": "finish"; }, never, never>;
}
//# sourceMappingURL=timepicker-dialog-hour.component.d.ts.map