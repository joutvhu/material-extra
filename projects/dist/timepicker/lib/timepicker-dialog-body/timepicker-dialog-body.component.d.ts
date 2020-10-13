import { EventEmitter, OnInit } from '@angular/core';
import { ClockChange, ClockType } from '../timepicker.model';
import * as i0 from "@angular/core";
export declare class MateTimepickerDialogBodyComponent implements OnInit {
    type: ClockType;
    value: any;
    change: EventEmitter<ClockChange>;
    switchClock: EventEmitter<string>;
    enterPress: EventEmitter<void>;
    finish: EventEmitter<number>;
    constructor();
    ngOnInit(): void;
    onChange(value: number): void;
    static ɵfac: i0.ɵɵFactoryDef<MateTimepickerDialogBodyComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<MateTimepickerDialogBodyComponent, "mate-timepicker-dialog-body", ["mateTimepickerDialogBody"], { "type": "type"; "value": "value"; }, { "change": "change"; "switchClock": "switchClock"; "enterPress": "enterPress"; "finish": "finish"; }, never, never>;
}
//# sourceMappingURL=timepicker-dialog-body.component.d.ts.map