import { ElementRef, EventEmitter } from '@angular/core';
import * as i0 from "@angular/core";
export declare class MateTimepickerFace {
    private moved;
    private selected;
    private isStarted;
    step: number;
    outerValues: number[];
    innerValues?: number[];
    clockFace: ElementRef;
    innerClockFaceSize: number;
    switchClock: EventEmitter<string>;
    enterPress: EventEmitter<void>;
    onChange(value: number): void;
    onFinish(): void;
    onMousedown(e: MouseEvent | TouchEvent): void;
    onClick(e: MouseEvent): void;
    onTouchend(e: Touch): void;
    onMove(e: MouseEvent | Touch): void;
    selectTime(e: MouseEvent | Touch): void;
    onMouseup(e: MouseEvent | TouchEvent): void;
    private roundAngle;
    private isInnerClockFace;
    private countAngleByCords;
    valueChange(add: number): void;
    onKeydown(event: KeyboardEvent): void;
    static ɵfac: i0.ɵɵFactoryDef<MateTimepickerFace, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<MateTimepickerFace, "mate-timepicker-face", never, {}, { "switchClock": "switchClock"; "enterPress": "enterPress"; }, never>;
}
//# sourceMappingURL=timepicker-face.directive.d.ts.map