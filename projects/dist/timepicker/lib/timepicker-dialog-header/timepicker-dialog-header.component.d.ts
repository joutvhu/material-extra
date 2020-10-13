import { EventEmitter, OnInit } from '@angular/core';
import { ClockType, Duration } from '../timepicker.model';
import * as i0 from "@angular/core";
export declare class MateTimepickerDialogHeaderComponent implements OnInit {
    type: ClockType;
    second: boolean;
    value: Duration;
    active: EventEmitter<ClockType>;
    constructor();
    ngOnInit(): void;
    onActive(type: ClockType): void;
    static ɵfac: i0.ɵɵFactoryDef<MateTimepickerDialogHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<MateTimepickerDialogHeaderComponent, "mate-timepicker-dialog-header", ["mateTimepickerDialogHeader"], { "type": "type"; "second": "second"; "value": "value"; }, { "active": "active"; }, never, never>;
}
//# sourceMappingURL=timepicker-dialog-header.component.d.ts.map