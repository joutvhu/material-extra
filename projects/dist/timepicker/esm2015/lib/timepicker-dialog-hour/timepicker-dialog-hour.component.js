import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MateTimepickerFace } from '../timepicker-face/timepicker-face.directive';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = ["clockFace"];
const _c1 = function (a0) { return { transform: a0 }; };
function MateTimepickerDialogHourComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵelementStart(1, "span", 9);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "number");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const hour_r3 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("active", hour_r3 == ctx_r1.value);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(8, _c1, "translateX(-50%) rotateZ(" + ctx_r1.step * hour_r3 + "deg)"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(10, _c1, "rotateZ(" + -ctx_r1.step * hour_r3 + "deg)"));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(3, 5, hour_r3, "1.0"));
} }
function MateTimepickerDialogHourComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵelementStart(1, "span", 9);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "number");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const hour_r4 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("active", hour_r4 == ctx_r2.value % 24);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(8, _c1, "translateX(-50%) rotateZ(" + ctx_r2.step * (hour_r4 % 12) + "deg)"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(10, _c1, "rotateZ(" + -ctx_r2.step * (hour_r4 % 12) + "deg)"));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(3, 5, hour_r4, "2.0"));
} }
export class MateTimepickerDialogHourComponent extends MateTimepickerFace {
    constructor() {
        super();
        this.step = 30;
        this.outerValues = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
        this.innerValues = [0, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
        this.change = new EventEmitter();
        this.finish = new EventEmitter();
    }
    ngOnInit() {
    }
    onChange(value) {
        this.value = value;
        this.change.emit(this.value);
    }
    valueChange(add) {
        add += this.value;
        if (add < 0) {
            add = 23;
        }
        if (add > 23) {
            add = 0;
        }
        this.value = add;
        this.change.emit(this.value);
    }
    onFinish() {
        this.finish.emit();
    }
}
MateTimepickerDialogHourComponent.ɵfac = function MateTimepickerDialogHourComponent_Factory(t) { return new (t || MateTimepickerDialogHourComponent)(); };
MateTimepickerDialogHourComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MateTimepickerDialogHourComponent, selectors: [["mate-timepicker-dialog-hour"]], viewQuery: function MateTimepickerDialogHourComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵstaticViewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.clockFace = _t.first);
    } }, inputs: { value: "value" }, outputs: { change: "change", finish: "finish" }, exportAs: ["mateTimepickerDialogHour"], features: [i0.ɵɵInheritDefinitionFeature], decls: 8, vars: 9, consts: [[1, "mate-timepicker-face", 3, "keydown"], [1, "clock-face", "hour-face"], ["clockFace", ""], [1, "clock-face__container"], ["class", "clock-face__number clock-face__number--outer", 3, "active", "ngStyle", 4, "ngFor", "ngForOf"], [1, "clock-face__inner"], ["class", "clock-face__number clock-face__number--inner", 3, "active", "ngStyle", 4, "ngFor", "ngForOf"], [1, "clock-face__clock-hand", 3, "ngStyle"], [1, "clock-face__number", "clock-face__number--outer", 3, "ngStyle"], [3, "ngStyle"], [1, "clock-face__number", "clock-face__number--inner", 3, "ngStyle"]], template: function MateTimepickerDialogHourComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵlistener("keydown", function MateTimepickerDialogHourComponent_Template_div_keydown_0_listener($event) { return ctx.onKeydown($event); });
        i0.ɵɵelementStart(1, "div", 1, 2);
        i0.ɵɵelementStart(3, "div", 3);
        i0.ɵɵtemplate(4, MateTimepickerDialogHourComponent_div_4_Template, 4, 12, "div", 4);
        i0.ɵɵelementStart(5, "div", 5);
        i0.ɵɵtemplate(6, MateTimepickerDialogHourComponent_div_6_Template, 4, 12, "div", 6);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
        i0.ɵɵelement(7, "span", 7);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngForOf", ctx.outerValues);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngForOf", ctx.innerValues);
        i0.ɵɵadvance(1);
        i0.ɵɵclassProp("outer", ctx.value > 0 && ctx.value <= 12)("inner", ctx.value <= 0 || ctx.value > 12);
        i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(7, _c1, "rotateZ(" + ctx.step * ctx.value + "deg)"));
    } }, directives: [i1.NgForOf, i1.NgStyle], pipes: [i1.DecimalPipe], styles: [".clock-face.hour-face[_ngcontent-%COMP%]   .clock-face__clock-hand.outer[_ngcontent-%COMP%]{height:calc(50% - 27px);top:27px}.clock-face.hour-face[_ngcontent-%COMP%]   .clock-face__clock-hand.inner[_ngcontent-%COMP%]{height:calc(50% - 77px);top:77px}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MateTimepickerDialogHourComponent, [{
        type: Component,
        args: [{
                selector: 'mate-timepicker-dialog-hour',
                templateUrl: './timepicker-dialog-hour.component.html',
                styleUrls: ['./timepicker-dialog-hour.component.scss'],
                exportAs: 'mateTimepickerDialogHour'
            }]
    }], function () { return []; }, { clockFace: [{
            type: ViewChild,
            args: ['clockFace', { static: true }]
        }], value: [{
            type: Input
        }], change: [{
            type: Output
        }], finish: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXBpY2tlci1kaWFsb2ctaG91ci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiRDovRG9jdW1lbnQvTGlicmFyeS9Bbmd1bGFyL21hdGVyaWFsLWV4dHJhL3Byb2plY3RzL21hdGVyaWFsL3RpbWVwaWNrZXIvc3JjLyIsInNvdXJjZXMiOlsibGliL3RpbWVwaWNrZXItZGlhbG9nLWhvdXIvdGltZXBpY2tlci1kaWFsb2ctaG91ci5jb21wb25lbnQudHMiLCJsaWIvdGltZXBpY2tlci1kaWFsb2ctaG91ci90aW1lcGlja2VyLWRpYWxvZy1ob3VyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQWMsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBR3BHLE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLDhDQUE4QyxDQUFDOzs7Ozs7SUNDMUUsOEJBR0U7SUFBQSwrQkFBb0U7SUFBQSxZQUF1Qjs7SUFBQSxpQkFBTztJQUNwRyxpQkFBTTs7OztJQUhELGlEQUE4QjtJQUM5QixrSEFBOEU7SUFDM0UsZUFBNkQ7SUFBN0QsbUdBQTZEO0lBQUMsZUFBdUI7SUFBdkIsMERBQXVCOzs7SUFHM0YsK0JBR0U7SUFBQSwrQkFBMkU7SUFBQSxZQUF1Qjs7SUFBQSxpQkFBTztJQUMzRyxpQkFBTTs7OztJQUhnQyxzREFBbUM7SUFDcEUseUhBQXFGO0lBQ2xGLGVBQW9FO0lBQXBFLDBHQUFvRTtJQUFDLGVBQXVCO0lBQXZCLDBEQUF1Qjs7QURGNUcsTUFBTSxPQUFPLGlDQUFrQyxTQUFRLGtCQUFrQjtJQXFCckU7UUFDSSxLQUFLLEVBQUUsQ0FBQztRQXJCSSxTQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ1YsZ0JBQVcsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDdEQsZ0JBQVcsR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFXdkUsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFHcEMsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7SUFNM0MsQ0FBQztJQUVNLFFBQVE7SUFDZixDQUFDO0lBRU0sUUFBUSxDQUFDLEtBQWE7UUFDekIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFTSxXQUFXLENBQUMsR0FBVztRQUMxQixHQUFHLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNsQixJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUU7WUFDVCxHQUFHLEdBQUcsRUFBRSxDQUFDO1NBQ1o7UUFDRCxJQUFJLEdBQUcsR0FBRyxFQUFFLEVBQUU7WUFDVixHQUFHLEdBQUcsQ0FBQyxDQUFDO1NBQ1g7UUFFRCxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztRQUNqQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVNLFFBQVE7UUFDWCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3ZCLENBQUM7O2tIQWhEUSxpQ0FBaUM7c0VBQWpDLGlDQUFpQzs7Ozs7O1FDWDlDLDhCQUNFO1FBRGdDLHFIQUFXLHFCQUFpQixJQUFDO1FBQzdELGlDQUVFO1FBQUEsOEJBQ0U7UUFBQSxtRkFHRTtRQUVGLDhCQUNFO1FBQUEsbUZBR0U7UUFFSixpQkFBTTtRQUNSLGlCQUFNO1FBQ04sMEJBRU87UUFDVCxpQkFBTTtRQUNSLGlCQUFNOztRQWpCMEQsZUFBZ0M7UUFBaEMseUNBQWdDO1FBT25GLGVBQWdDO1FBQWhDLHlDQUFnQztRQU9uQyxlQUF3QztRQUF4Qyx5REFBd0MsMkNBQUE7UUFEVCxnR0FBOEQ7O2tERE4xRixpQ0FBaUM7Y0FON0MsU0FBUztlQUFDO2dCQUNQLFFBQVEsRUFBRSw2QkFBNkI7Z0JBQ3ZDLFdBQVcsRUFBRSx5Q0FBeUM7Z0JBQ3RELFNBQVMsRUFBRSxDQUFDLHlDQUF5QyxDQUFDO2dCQUN0RCxRQUFRLEVBQUUsMEJBQTBCO2FBQ3ZDO3NDQU9VLFNBQVM7a0JBRGYsU0FBUzttQkFBQyxXQUFXLEVBQUUsRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDO1lBSS9CLEtBQUs7a0JBRFgsS0FBSztZQU1DLE1BQU07a0JBRFosTUFBTTtZQUlBLE1BQU07a0JBRFosTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCwgVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtDYW5Db2xvciwgVGhlbWVQYWxldHRlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcclxuXHJcbmltcG9ydCB7TWF0ZVRpbWVwaWNrZXJGYWNlfSBmcm9tICcuLi90aW1lcGlja2VyLWZhY2UvdGltZXBpY2tlci1mYWNlLmRpcmVjdGl2ZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbWF0ZS10aW1lcGlja2VyLWRpYWxvZy1ob3VyJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi90aW1lcGlja2VyLWRpYWxvZy1ob3VyLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL3RpbWVwaWNrZXItZGlhbG9nLWhvdXIuY29tcG9uZW50LnNjc3MnXSxcclxuICAgIGV4cG9ydEFzOiAnbWF0ZVRpbWVwaWNrZXJEaWFsb2dIb3VyJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTWF0ZVRpbWVwaWNrZXJEaWFsb2dIb3VyQ29tcG9uZW50IGV4dGVuZHMgTWF0ZVRpbWVwaWNrZXJGYWNlIGltcGxlbWVudHMgT25Jbml0LCBDYW5Db2xvciB7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgc3RlcCA9IDMwO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IG91dGVyVmFsdWVzID0gWzEyLCAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMCwgMTFdO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IGlubmVyVmFsdWVzID0gWzAsIDEzLCAxNCwgMTUsIDE2LCAxNywgMTgsIDE5LCAyMCwgMjEsIDIyLCAyM107XHJcblxyXG4gICAgQFZpZXdDaGlsZCgnY2xvY2tGYWNlJywge3N0YXRpYzogdHJ1ZX0pXHJcbiAgICBwdWJsaWMgY2xvY2tGYWNlOiBFbGVtZW50UmVmO1xyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBwdWJsaWMgdmFsdWU7XHJcblxyXG4gICAgcHVibGljIGNvbG9yOiBUaGVtZVBhbGV0dGU7XHJcblxyXG4gICAgQE91dHB1dCgpXHJcbiAgICBwdWJsaWMgY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XHJcblxyXG4gICAgQE91dHB1dCgpXHJcbiAgICBwdWJsaWMgZmluaXNoID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XHJcblxyXG4gICAgcHVibGljIGRlZmF1bHRDb2xvcjogVGhlbWVQYWxldHRlIHwgdW5kZWZpbmVkO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG5nT25Jbml0KCkge1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbkNoYW5nZSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuY2hhbmdlLmVtaXQodGhpcy52YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHZhbHVlQ2hhbmdlKGFkZDogbnVtYmVyKSB7XHJcbiAgICAgICAgYWRkICs9IHRoaXMudmFsdWU7XHJcbiAgICAgICAgaWYgKGFkZCA8IDApIHtcclxuICAgICAgICAgICAgYWRkID0gMjM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhZGQgPiAyMykge1xyXG4gICAgICAgICAgICBhZGQgPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IGFkZDtcclxuICAgICAgICB0aGlzLmNoYW5nZS5lbWl0KHRoaXMudmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbkZpbmlzaCgpIHtcclxuICAgICAgICB0aGlzLmZpbmlzaC5lbWl0KCk7XHJcbiAgICB9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cIm1hdGUtdGltZXBpY2tlci1mYWNlXCIgKGtleWRvd24pPVwib25LZXlkb3duKCRldmVudClcIj5cclxuICA8ZGl2ICNjbG9ja0ZhY2UgY2xhc3M9XCJjbG9jay1mYWNlIGhvdXItZmFjZVwiPlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJjbG9jay1mYWNlX19jb250YWluZXJcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNsb2NrLWZhY2VfX251bWJlciBjbG9jay1mYWNlX19udW1iZXItLW91dGVyXCIgKm5nRm9yPVwibGV0IGhvdXIgb2Ygb3V0ZXJWYWx1ZXNcIlxyXG4gICAgICAgICAgIFtjbGFzcy5hY3RpdmVdPVwiaG91ciA9PSB2YWx1ZVwiXHJcbiAgICAgICAgICAgW25nU3R5bGVdPVwieyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC01MCUpIHJvdGF0ZVooJyArIChzdGVwICogaG91cikgKyAnZGVnKSd9XCI+XHJcbiAgICAgICAgPHNwYW4gW25nU3R5bGVdPVwie3RyYW5zZm9ybTogJ3JvdGF0ZVooJyArICgtc3RlcCAqIGhvdXIpICsgJ2RlZyknfVwiPnt7aG91ciB8IG51bWJlcjonMS4wJ319PC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNsb2NrLWZhY2VfX2lubmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNsb2NrLWZhY2VfX251bWJlciBjbG9jay1mYWNlX19udW1iZXItLWlubmVyXCJcclxuICAgICAgICAgICAgICpuZ0Zvcj1cImxldCBob3VyIG9mIGlubmVyVmFsdWVzXCIgW2NsYXNzLmFjdGl2ZV09XCJob3VyID09IHZhbHVlICUgMjRcIlxyXG4gICAgICAgICAgICAgW25nU3R5bGVdPVwieyB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC01MCUpIHJvdGF0ZVooJyArIChzdGVwICogKGhvdXIgJSAxMikpICsgJ2RlZyknfVwiPlxyXG4gICAgICAgICAgPHNwYW4gW25nU3R5bGVdPVwie3RyYW5zZm9ybTogJ3JvdGF0ZVooJyArICgtc3RlcCAqIChob3VyICUgMTIpKSArICdkZWcpJ31cIj57e2hvdXIgfCBudW1iZXI6JzIuMCd9fTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxzcGFuIGNsYXNzPVwiY2xvY2stZmFjZV9fY2xvY2staGFuZFwiIFtuZ1N0eWxlXT1cInsgdHJhbnNmb3JtOiAncm90YXRlWignICsgKHN0ZXAgKiB2YWx1ZSkgKyAnZGVnKSd9XCJcclxuICAgICAgICAgIFtjbGFzcy5vdXRlcl09XCJ2YWx1ZSA+IDAgJiYgdmFsdWUgPD0gMTJcIiBbY2xhc3MuaW5uZXJdPVwidmFsdWUgPD0gMCB8fCB2YWx1ZSA+IDEyXCI+XHJcbiAgICA8L3NwYW4+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG4iXX0=