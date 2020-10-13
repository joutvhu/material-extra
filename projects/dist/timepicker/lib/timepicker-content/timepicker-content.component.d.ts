import { AfterViewInit, ElementRef } from '@angular/core';
import { CanColor, CanColorCtor, ThemePalette } from '@angular/material/core';
import { MateTimepickerComponent } from '../timepicker/timepicker.component';
import * as i0 from "@angular/core";
declare class MateTimepickerContentBase {
    _elementRef: ElementRef;
    constructor(_elementRef: ElementRef);
}
declare const _MateTimepickerContentMixinBase: CanColorCtor & typeof MateTimepickerContentBase;
export declare class MateTimepickerContentComponent extends _MateTimepickerContentMixinBase implements AfterViewInit, CanColor {
    color: ThemePalette;
    timepicker: MateTimepickerComponent;
    constructor(elementRef: ElementRef);
    ngAfterViewInit(): void;
    static ɵfac: i0.ɵɵFactoryDef<MateTimepickerContentComponent, never>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<MateTimepickerContentComponent, "mate-timepicker-content", ["mateTimepickerContent"], { "color": "color"; }, {}, never, never>;
}
export {};
//# sourceMappingURL=timepicker-content.component.d.ts.map