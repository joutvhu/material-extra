import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MateTimepickerFace } from '../timepicker-face/timepicker-face.directive';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
const _c0 = ["clockFace"];
const _c1 = function (a0) { return { transform: a0 }; };
function MateTimepickerDialogMinuteComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵelementStart(1, "span", 7);
    i0.ɵɵtext(2);
    i0.ɵɵpipe(3, "number");
    i0.ɵɵelementEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const minute_r2 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassProp("active", minute_r2 == ctx_r1.value % 60);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(8, _c1, "translateX(-50%) rotateZ(" + ctx_r1.step * minute_r2 + "deg)"));
    i0.ɵɵadvance(1);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(10, _c1, "rotateZ(" + -ctx_r1.step * minute_r2 + "deg)"));
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(3, 5, minute_r2, "2.0"));
} }
export class MateTimepickerDialogMinuteComponent extends MateTimepickerFace {
    constructor() {
        super();
        this.step = 6;
        this.values = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];
        this.outerValues = Array.from(Array(60).keys());
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
            add = 59;
        }
        if (add > 59) {
            add = 0;
        }
        this.value = add;
        this.change.emit(this.value);
    }
    onFinish() {
        this.finish.emit();
    }
}
MateTimepickerDialogMinuteComponent.ɵfac = function MateTimepickerDialogMinuteComponent_Factory(t) { return new (t || MateTimepickerDialogMinuteComponent)(); };
MateTimepickerDialogMinuteComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MateTimepickerDialogMinuteComponent, selectors: [["mate-timepicker-dialog-minute"]], viewQuery: function MateTimepickerDialogMinuteComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵstaticViewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.clockFace = _t.first);
    } }, inputs: { value: "value" }, outputs: { change: "change", finish: "finish" }, exportAs: ["mateTimepickerDialogMinute"], features: [i0.ɵɵInheritDefinitionFeature], decls: 6, vars: 6, consts: [[1, "mate-timepicker-face", 3, "keydown"], [1, "clock-face", "minute-face"], ["clockFace", ""], [1, "clock-face__container"], ["class", "clock-face__number", 3, "active", "ngStyle", 4, "ngFor", "ngForOf"], [1, "clock-face__clock-hand", 3, "ngStyle"], [1, "clock-face__number", 3, "ngStyle"], [3, "ngStyle"]], template: function MateTimepickerDialogMinuteComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵlistener("keydown", function MateTimepickerDialogMinuteComponent_Template_div_keydown_0_listener($event) { return ctx.onKeydown($event); });
        i0.ɵɵelementStart(1, "div", 1, 2);
        i0.ɵɵelementStart(3, "div", 3);
        i0.ɵɵtemplate(4, MateTimepickerDialogMinuteComponent_div_4_Template, 4, 12, "div", 4);
        i0.ɵɵelementEnd();
        i0.ɵɵelement(5, "span", 5);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(4);
        i0.ɵɵproperty("ngForOf", ctx.values);
        i0.ɵɵadvance(1);
        i0.ɵɵclassProp("hand-point", ctx.value % 5 != 0);
        i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(4, _c1, "rotateZ(" + ctx.step * ctx.value + "deg)"));
    } }, directives: [i1.NgForOf, i1.NgStyle], pipes: [i1.DecimalPipe], styles: [".clock-face.minute-face[_ngcontent-%COMP%]   .clock-face__clock-hand[_ngcontent-%COMP%]{height:calc(50% - 27px);top:27px}.clock-face.minute-face[_ngcontent-%COMP%]   .clock-face__clock-hand.hand-point[_ngcontent-%COMP%]{height:calc(50% - 15px);top:15px}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MateTimepickerDialogMinuteComponent, [{
        type: Component,
        args: [{
                selector: 'mate-timepicker-dialog-minute',
                templateUrl: './timepicker-dialog-minute.component.html',
                styleUrls: ['./timepicker-dialog-minute.component.scss'],
                exportAs: 'mateTimepickerDialogMinute'
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXBpY2tlci1kaWFsb2ctbWludXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJEOi9Eb2N1bWVudC9MaWJyYXJ5L0FuZ3VsYXIvbWF0ZXJpYWwtZXh0cmEvcHJvamVjdHMvbWF0ZXJpYWwvdGltZXBpY2tlci9zcmMvIiwic291cmNlcyI6WyJsaWIvdGltZXBpY2tlci1kaWFsb2ctbWludXRlL3RpbWVwaWNrZXItZGlhbG9nLW1pbnV0ZS5jb21wb25lbnQudHMiLCJsaWIvdGltZXBpY2tlci1kaWFsb2ctbWludXRlL3RpbWVwaWNrZXItZGlhbG9nLW1pbnV0ZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFjLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLFNBQVMsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUVwRyxPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSw4Q0FBOEMsQ0FBQzs7Ozs7O0lDQzFFLDhCQUVFO0lBQUEsK0JBQXNFO0lBQUEsWUFBeUI7O0lBQUEsaUJBQU87SUFDeEcsaUJBQU07Ozs7SUFId0Qsd0RBQXFDO0lBQzlGLG9IQUFnRjtJQUM3RSxlQUErRDtJQUEvRCxxR0FBK0Q7SUFBQyxlQUF5QjtJQUF6Qiw0REFBeUI7O0FES3ZHLE1BQU0sT0FBTyxtQ0FBb0MsU0FBUSxrQkFBa0I7SUFpQnZFO1FBQ0ksS0FBSyxFQUFFLENBQUM7UUFqQkksU0FBSSxHQUFHLENBQUMsQ0FBQztRQUNULFdBQU0sR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDeEQsZ0JBQVcsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBU3BELFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBR3BDLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO0lBSTNDLENBQUM7SUFFTSxRQUFRO0lBQ2YsQ0FBQztJQUVNLFFBQVEsQ0FBQyxLQUFhO1FBQ3pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBRU0sV0FBVyxDQUFDLEdBQVc7UUFDMUIsR0FBRyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDbEIsSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFO1lBQ1QsR0FBRyxHQUFHLEVBQUUsQ0FBQztTQUNaO1FBQ0QsSUFBSSxHQUFHLEdBQUcsRUFBRSxFQUFFO1lBQ1YsR0FBRyxHQUFHLENBQUMsQ0FBQztTQUNYO1FBRUQsSUFBSSxDQUFDLEtBQUssR0FBRyxHQUFHLENBQUM7UUFDakIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFTSxRQUFRO1FBQ1gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN2QixDQUFDOztzSEE1Q1EsbUNBQW1DO3dFQUFuQyxtQ0FBbUM7Ozs7OztRQ1ZoRCw4QkFDRTtRQURnQyx1SEFBVyxxQkFBaUIsSUFBQztRQUM3RCxpQ0FDRTtRQUFBLDhCQUNFO1FBQUEscUZBRUU7UUFFSixpQkFBTTtRQUNOLDBCQUVPO1FBQ1QsaUJBQU07UUFDUixpQkFBTTs7UUFUZ0MsZUFBNkI7UUFBN0Isb0NBQTZCO1FBTXpELGVBQW1DO1FBQW5DLGdEQUFtQztRQURKLGdHQUE4RDs7a0RERTFGLG1DQUFtQztjQU4vQyxTQUFTO2VBQUM7Z0JBQ1AsUUFBUSxFQUFFLCtCQUErQjtnQkFDekMsV0FBVyxFQUFFLDJDQUEyQztnQkFDeEQsU0FBUyxFQUFFLENBQUMsMkNBQTJDLENBQUM7Z0JBQ3hELFFBQVEsRUFBRSw0QkFBNEI7YUFDekM7c0NBT1UsU0FBUztrQkFEZixTQUFTO21CQUFDLFdBQVcsRUFBRSxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUM7WUFJL0IsS0FBSztrQkFEWCxLQUFLO1lBSUMsTUFBTTtrQkFEWixNQUFNO1lBSUEsTUFBTTtrQkFEWixNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBWaWV3Q2hpbGR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHtNYXRlVGltZXBpY2tlckZhY2V9IGZyb20gJy4uL3RpbWVwaWNrZXItZmFjZS90aW1lcGlja2VyLWZhY2UuZGlyZWN0aXZlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdtYXRlLXRpbWVwaWNrZXItZGlhbG9nLW1pbnV0ZScsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vdGltZXBpY2tlci1kaWFsb2ctbWludXRlLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL3RpbWVwaWNrZXItZGlhbG9nLW1pbnV0ZS5jb21wb25lbnQuc2NzcyddLFxyXG4gICAgZXhwb3J0QXM6ICdtYXRlVGltZXBpY2tlckRpYWxvZ01pbnV0ZSdcclxufSlcclxuZXhwb3J0IGNsYXNzIE1hdGVUaW1lcGlja2VyRGlhbG9nTWludXRlQ29tcG9uZW50IGV4dGVuZHMgTWF0ZVRpbWVwaWNrZXJGYWNlIGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHB1YmxpYyByZWFkb25seSBzdGVwID0gNjtcclxuICAgIHB1YmxpYyByZWFkb25seSB2YWx1ZXMgPSBbMCwgNSwgMTAsIDE1LCAyMCwgMjUsIDMwLCAzNSwgNDAsIDQ1LCA1MCwgNTVdO1xyXG4gICAgcHVibGljIHJlYWRvbmx5IG91dGVyVmFsdWVzID0gQXJyYXkuZnJvbShBcnJheSg2MCkua2V5cygpKTtcclxuXHJcbiAgICBAVmlld0NoaWxkKCdjbG9ja0ZhY2UnLCB7c3RhdGljOiB0cnVlfSlcclxuICAgIHB1YmxpYyBjbG9ja0ZhY2U6IEVsZW1lbnRSZWY7XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIHB1YmxpYyB2YWx1ZTtcclxuXHJcbiAgICBAT3V0cHV0KClcclxuICAgIHB1YmxpYyBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcclxuXHJcbiAgICBAT3V0cHV0KClcclxuICAgIHB1YmxpYyBmaW5pc2ggPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25DaGFuZ2UodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLmNoYW5nZS5lbWl0KHRoaXMudmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB2YWx1ZUNoYW5nZShhZGQ6IG51bWJlcikge1xyXG4gICAgICAgIGFkZCArPSB0aGlzLnZhbHVlO1xyXG4gICAgICAgIGlmIChhZGQgPCAwKSB7XHJcbiAgICAgICAgICAgIGFkZCA9IDU5O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYWRkID4gNTkpIHtcclxuICAgICAgICAgICAgYWRkID0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudmFsdWUgPSBhZGQ7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2UuZW1pdCh0aGlzLnZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25GaW5pc2goKSB7XHJcbiAgICAgICAgdGhpcy5maW5pc2guZW1pdCgpO1xyXG4gICAgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJtYXRlLXRpbWVwaWNrZXItZmFjZVwiIChrZXlkb3duKT1cIm9uS2V5ZG93bigkZXZlbnQpXCI+XHJcbiAgPGRpdiAjY2xvY2tGYWNlIGNsYXNzPVwiY2xvY2stZmFjZSBtaW51dGUtZmFjZVwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNsb2NrLWZhY2VfX2NvbnRhaW5lclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2xvY2stZmFjZV9fbnVtYmVyXCIgKm5nRm9yPVwibGV0IG1pbnV0ZSBvZiB2YWx1ZXNcIiBbY2xhc3MuYWN0aXZlXT1cIm1pbnV0ZSA9PSB2YWx1ZSAlIDYwXCJcclxuICAgICAgICAgICBbbmdTdHlsZV09XCJ7IHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTUwJSkgcm90YXRlWignICsgKHN0ZXAgKiBtaW51dGUpICsgJ2RlZyknfVwiPlxyXG4gICAgICAgIDxzcGFuIFtuZ1N0eWxlXT1cInt0cmFuc2Zvcm06ICdyb3RhdGVaKCcgKyAoLXN0ZXAgKiBtaW51dGUpICsgJ2RlZyknfVwiPnt7bWludXRlIHwgbnVtYmVyOicyLjAnfX08L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8c3BhbiBjbGFzcz1cImNsb2NrLWZhY2VfX2Nsb2NrLWhhbmRcIiBbbmdTdHlsZV09XCJ7IHRyYW5zZm9ybTogJ3JvdGF0ZVooJyArIChzdGVwICogdmFsdWUpICsgJ2RlZyknfVwiXHJcbiAgICAgICAgICBbY2xhc3MuaGFuZC1wb2ludF09XCJ2YWx1ZSAlIDUgIT0gMFwiPlxyXG4gICAgPC9zcGFuPlxyXG4gIDwvZGl2PlxyXG48L2Rpdj5cclxuIl19