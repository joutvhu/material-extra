import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../timepicker-dialog-hour/timepicker-dialog-hour.component";
import * as i3 from "../timepicker-dialog-minute/timepicker-dialog-minute.component";
function MateTimepickerDialogBodyComponent_mate_timepicker_dialog_hour_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mate-timepicker-dialog-hour", 1);
    i0.ɵɵlistener("change", function MateTimepickerDialogBodyComponent_mate_timepicker_dialog_hour_0_Template_mate_timepicker_dialog_hour_change_0_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.onChange($event); })("switchClock", function MateTimepickerDialogBodyComponent_mate_timepicker_dialog_hour_0_Template_mate_timepicker_dialog_hour_switchClock_0_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.switchClock.emit($event); })("enterPress", function MateTimepickerDialogBodyComponent_mate_timepicker_dialog_hour_0_Template_mate_timepicker_dialog_hour_enterPress_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.enterPress.emit(); })("finish", function MateTimepickerDialogBodyComponent_mate_timepicker_dialog_hour_0_Template_mate_timepicker_dialog_hour_finish_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.finish.emit(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("value", ctx_r0.value);
} }
function MateTimepickerDialogBodyComponent_mate_timepicker_dialog_minute_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mate-timepicker-dialog-minute", 1);
    i0.ɵɵlistener("change", function MateTimepickerDialogBodyComponent_mate_timepicker_dialog_minute_1_Template_mate_timepicker_dialog_minute_change_0_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.onChange($event); })("switchClock", function MateTimepickerDialogBodyComponent_mate_timepicker_dialog_minute_1_Template_mate_timepicker_dialog_minute_switchClock_0_listener($event) { i0.ɵɵrestoreView(_r9); const ctx_r10 = i0.ɵɵnextContext(); return ctx_r10.switchClock.emit($event); })("enterPress", function MateTimepickerDialogBodyComponent_mate_timepicker_dialog_minute_1_Template_mate_timepicker_dialog_minute_enterPress_0_listener() { i0.ɵɵrestoreView(_r9); const ctx_r11 = i0.ɵɵnextContext(); return ctx_r11.enterPress.emit(); })("finish", function MateTimepickerDialogBodyComponent_mate_timepicker_dialog_minute_1_Template_mate_timepicker_dialog_minute_finish_0_listener() { i0.ɵɵrestoreView(_r9); const ctx_r12 = i0.ɵɵnextContext(); return ctx_r12.finish.emit(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("value", ctx_r1.value);
} }
function MateTimepickerDialogBodyComponent_mate_timepicker_dialog_minute_2_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mate-timepicker-dialog-minute", 1);
    i0.ɵɵlistener("change", function MateTimepickerDialogBodyComponent_mate_timepicker_dialog_minute_2_Template_mate_timepicker_dialog_minute_change_0_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r13 = i0.ɵɵnextContext(); return ctx_r13.onChange($event); })("switchClock", function MateTimepickerDialogBodyComponent_mate_timepicker_dialog_minute_2_Template_mate_timepicker_dialog_minute_switchClock_0_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r15 = i0.ɵɵnextContext(); return ctx_r15.switchClock.emit($event); })("enterPress", function MateTimepickerDialogBodyComponent_mate_timepicker_dialog_minute_2_Template_mate_timepicker_dialog_minute_enterPress_0_listener() { i0.ɵɵrestoreView(_r14); const ctx_r16 = i0.ɵɵnextContext(); return ctx_r16.enterPress.emit(); })("finish", function MateTimepickerDialogBodyComponent_mate_timepicker_dialog_minute_2_Template_mate_timepicker_dialog_minute_finish_0_listener() { i0.ɵɵrestoreView(_r14); const ctx_r17 = i0.ɵɵnextContext(); return ctx_r17.finish.emit(); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("value", ctx_r2.value);
} }
export class MateTimepickerDialogBodyComponent {
    constructor() {
        this.type = 'hour';
        this.change = new EventEmitter();
        this.switchClock = new EventEmitter();
        this.enterPress = new EventEmitter();
        this.finish = new EventEmitter();
    }
    ngOnInit() {
    }
    onChange(value) {
        this.value = value;
        this.change.emit({
            type: this.type,
            value: this.value
        });
    }
}
MateTimepickerDialogBodyComponent.ɵfac = function MateTimepickerDialogBodyComponent_Factory(t) { return new (t || MateTimepickerDialogBodyComponent)(); };
MateTimepickerDialogBodyComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MateTimepickerDialogBodyComponent, selectors: [["mate-timepicker-dialog-body"]], hostAttrs: [1, "mate-timepicker-dialog-body"], inputs: { type: "type", value: "value" }, outputs: { change: "change", switchClock: "switchClock", enterPress: "enterPress", finish: "finish" }, exportAs: ["mateTimepickerDialogBody"], decls: 3, vars: 3, consts: [[3, "value", "change", "switchClock", "enterPress", "finish", 4, "ngIf"], [3, "value", "change", "switchClock", "enterPress", "finish"]], template: function MateTimepickerDialogBodyComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵtemplate(0, MateTimepickerDialogBodyComponent_mate_timepicker_dialog_hour_0_Template, 1, 1, "mate-timepicker-dialog-hour", 0);
        i0.ɵɵtemplate(1, MateTimepickerDialogBodyComponent_mate_timepicker_dialog_minute_1_Template, 1, 1, "mate-timepicker-dialog-minute", 0);
        i0.ɵɵtemplate(2, MateTimepickerDialogBodyComponent_mate_timepicker_dialog_minute_2_Template, 1, 1, "mate-timepicker-dialog-minute", 0);
    } if (rf & 2) {
        i0.ɵɵproperty("ngIf", ctx.type == "hour");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.type == "minute");
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("ngIf", ctx.type == "second");
    } }, directives: [i1.NgIf, i2.MateTimepickerDialogHourComponent, i3.MateTimepickerDialogMinuteComponent], styles: [".mate-timepicker-dialog-body[_nghost-%COMP%]{display:flex;flex:auto;margin:1rem 0;width:100%}.mate-timepicker-dialog-body[_nghost-%COMP%]   mate-timepicker-dialog-hour[_ngcontent-%COMP%], .mate-timepicker-dialog-body[_nghost-%COMP%]   mate-timepicker-dialog-minute[_ngcontent-%COMP%]{display:block;margin:auto}.mate-timepicker-dialog-body[_nghost-%COMP%]     .mate-timepicker-face{-webkit-user-select:none;user-select:none}.mate-timepicker-dialog-body[_nghost-%COMP%]     .mate-timepicker-face .clock-face{border-radius:50%;box-sizing:border-box;display:flex;height:260px;justify-content:center;margin:auto;position:relative;width:260px}.mate-timepicker-dialog-body[_nghost-%COMP%]     .mate-timepicker-face .clock-face .clock-face__container{height:100%}.mate-timepicker-dialog-body[_nghost-%COMP%]     .mate-timepicker-face .clock-face .clock-face__container .clock-face__number{font-size:14px;height:100%;position:absolute;text-align:center;width:30px;z-index:10}.mate-timepicker-dialog-body[_nghost-%COMP%]     .mate-timepicker-face .clock-face .clock-face__container .clock-face__number span{-webkit-user-select:none;align-items:center;border-radius:50%;display:flex;font-weight:500;height:30px;justify-content:center;margin:auto;user-select:none;width:30px}.mate-timepicker-dialog-body[_nghost-%COMP%]     .mate-timepicker-face .clock-face .clock-face__container .clock-face__inner{border-radius:50%;display:flex;height:calc(100% - 100px);position:absolute;top:50px}.mate-timepicker-dialog-body[_nghost-%COMP%]     .mate-timepicker-face .clock-face .clock-face__container .clock-face__inner .clock-face__number{font-size:12px;width:30px}.mate-timepicker-dialog-body[_nghost-%COMP%]     .mate-timepicker-face .clock-face .clock-face__clock-hand{position:absolute;transform-origin:bottom center;width:2px;z-index:1}.mate-timepicker-dialog-body[_nghost-%COMP%]     .mate-timepicker-face .clock-face .clock-face__clock-hand:after{background-color:inherit;border-radius:50%;bottom:-3px;content:\"\";height:6px;left:-2px;position:absolute;width:6px}.mate-timepicker-dialog-body[_nghost-%COMP%]     .mate-timepicker-face .clock-face .clock-face__clock-hand.hand-point:before{border-radius:50%;border-style:solid;border-width:8px;box-sizing:initial;content:\"\";height:4px;left:calc(50% - 10px);position:absolute;top:-11px;width:4px}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MateTimepickerDialogBodyComponent, [{
        type: Component,
        args: [{
                selector: 'mate-timepicker-dialog-body',
                templateUrl: './timepicker-dialog-body.component.html',
                styleUrls: ['./timepicker-dialog-body.component.scss'],
                host: {
                    class: 'mate-timepicker-dialog-body'
                },
                exportAs: 'mateTimepickerDialogBody'
            }]
    }], function () { return []; }, { type: [{
            type: Input
        }], value: [{
            type: Input
        }], change: [{
            type: Output
        }], switchClock: [{
            type: Output
        }], enterPress: [{
            type: Output
        }], finish: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXBpY2tlci1kaWFsb2ctYm9keS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiRDovRG9jdW1lbnQvTGlicmFyeS9Bbmd1bGFyL21hdGVyaWFsLWV4dHJhL3Byb2plY3RzL21hdGVyaWFsL3RpbWVwaWNrZXIvc3JjLyIsInNvdXJjZXMiOlsibGliL3RpbWVwaWNrZXItZGlhbG9nLWJvZHkvdGltZXBpY2tlci1kaWFsb2ctYm9keS5jb21wb25lbnQudHMiLCJsaWIvdGltZXBpY2tlci1kaWFsb2ctYm9keS90aW1lcGlja2VyLWRpYWxvZy1ib2R5LmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7Ozs7Ozs7SUNBN0Usc0RBRzhCO0lBRkQsOFBBQTJCLGdPQUFnQiwrQkFBd0IsSUFBeEMsd05BQ2Isd0JBQWlCLElBREosZ05BQ2dCLG9CQUFhLElBRDdCO0lBRXhELGlCQUE4Qjs7O0lBSHNCLG9DQUFlOzs7O0lBSW5FLHdEQUdnQztJQUZELGtRQUEyQixxT0FBZ0IsZ0NBQXdCLElBQXhDLDZOQUNiLHlCQUFpQixJQURKLHFOQUNnQixxQkFBYSxJQUQ3QjtJQUUxRCxpQkFBZ0M7OztJQUh3QixvQ0FBZTs7OztJQUl2RSx3REFHZ0M7SUFGRCxxUUFBMkIsc09BQWdCLGdDQUF3QixJQUF4Qyw4TkFDYix5QkFBaUIsSUFESixzTkFDZ0IscUJBQWEsSUFEN0I7SUFFMUQsaUJBQWdDOzs7SUFId0Isb0NBQWU7O0FESXZFLE1BQU0sT0FBTyxpQ0FBaUM7SUFtQjFDO1FBakJPLFNBQUksR0FBYyxNQUFNLENBQUM7UUFNekIsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFlLENBQUM7UUFHekMsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBR3pDLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO1FBR3RDLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO0lBRzNDLENBQUM7SUFFRCxRQUFRO0lBQ1IsQ0FBQztJQUVELFFBQVEsQ0FBQyxLQUFhO1FBQ2xCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBRW5CLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2IsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO1lBQ2YsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1NBQ3BCLENBQUMsQ0FBQztJQUNQLENBQUM7O2tIQWhDUSxpQ0FBaUM7c0VBQWpDLGlDQUFpQztRQ1o5QyxrSUFHQTtRQUNBLHNJQUdBO1FBQ0Esc0lBR0E7O1FBWDZCLHlDQUFzQjtRQUlwQixlQUF3QjtRQUF4QiwyQ0FBd0I7UUFJeEIsZUFBd0I7UUFBeEIsMkNBQXdCOztrRERJMUMsaUNBQWlDO2NBVDdDLFNBQVM7ZUFBQztnQkFDUCxRQUFRLEVBQUUsNkJBQTZCO2dCQUN2QyxXQUFXLEVBQUUseUNBQXlDO2dCQUN0RCxTQUFTLEVBQUUsQ0FBQyx5Q0FBeUMsQ0FBQztnQkFDdEQsSUFBSSxFQUFFO29CQUNGLEtBQUssRUFBRSw2QkFBNkI7aUJBQ3ZDO2dCQUNELFFBQVEsRUFBRSwwQkFBMEI7YUFDdkM7c0NBR1UsSUFBSTtrQkFEVixLQUFLO1lBSUMsS0FBSztrQkFEWCxLQUFLO1lBSUMsTUFBTTtrQkFEWixNQUFNO1lBSUEsV0FBVztrQkFEakIsTUFBTTtZQUlBLFVBQVU7a0JBRGhCLE1BQU07WUFJQSxNQUFNO2tCQURaLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0Nsb2NrQ2hhbmdlLCBDbG9ja1R5cGV9IGZyb20gJy4uL3RpbWVwaWNrZXIubW9kZWwnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ21hdGUtdGltZXBpY2tlci1kaWFsb2ctYm9keScsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vdGltZXBpY2tlci1kaWFsb2ctYm9keS5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi90aW1lcGlja2VyLWRpYWxvZy1ib2R5LmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgICBob3N0OiB7XHJcbiAgICAgICAgY2xhc3M6ICdtYXRlLXRpbWVwaWNrZXItZGlhbG9nLWJvZHknXHJcbiAgICB9LFxyXG4gICAgZXhwb3J0QXM6ICdtYXRlVGltZXBpY2tlckRpYWxvZ0JvZHknXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYXRlVGltZXBpY2tlckRpYWxvZ0JvZHlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgQElucHV0KClcclxuICAgIHB1YmxpYyB0eXBlOiBDbG9ja1R5cGUgPSAnaG91cic7XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIHB1YmxpYyB2YWx1ZTtcclxuXHJcbiAgICBAT3V0cHV0KClcclxuICAgIHB1YmxpYyBjaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPENsb2NrQ2hhbmdlPigpO1xyXG5cclxuICAgIEBPdXRwdXQoKVxyXG4gICAgcHVibGljIHN3aXRjaENsb2NrID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcblxyXG4gICAgQE91dHB1dCgpXHJcbiAgICBwdWJsaWMgZW50ZXJQcmVzcyA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuXHJcbiAgICBAT3V0cHV0KClcclxuICAgIHB1YmxpYyBmaW5pc2ggPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgIH1cclxuXHJcbiAgICBvbkNoYW5nZSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xyXG5cclxuICAgICAgICB0aGlzLmNoYW5nZS5lbWl0KHtcclxuICAgICAgICAgICAgdHlwZTogdGhpcy50eXBlLFxyXG4gICAgICAgICAgICB2YWx1ZTogdGhpcy52YWx1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsIjxtYXRlLXRpbWVwaWNrZXItZGlhbG9nLWhvdXIgKm5nSWY9XCJ0eXBlID09ICdob3VyJ1wiIFt2YWx1ZV09XCJ2YWx1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNoYW5nZSk9XCJvbkNoYW5nZSgkZXZlbnQpXCIgKHN3aXRjaENsb2NrKT1cInN3aXRjaENsb2NrLmVtaXQoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGVudGVyUHJlc3MpPVwiZW50ZXJQcmVzcy5lbWl0KClcIiAoZmluaXNoKT1cImZpbmlzaC5lbWl0KClcIj5cclxuPC9tYXRlLXRpbWVwaWNrZXItZGlhbG9nLWhvdXI+XHJcbjxtYXRlLXRpbWVwaWNrZXItZGlhbG9nLW1pbnV0ZSAqbmdJZj1cInR5cGUgPT0gJ21pbnV0ZSdcIiBbdmFsdWVdPVwidmFsdWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNoYW5nZSk9XCJvbkNoYW5nZSgkZXZlbnQpXCIgKHN3aXRjaENsb2NrKT1cInN3aXRjaENsb2NrLmVtaXQoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZW50ZXJQcmVzcyk9XCJlbnRlclByZXNzLmVtaXQoKVwiIChmaW5pc2gpPVwiZmluaXNoLmVtaXQoKVwiPlxyXG48L21hdGUtdGltZXBpY2tlci1kaWFsb2ctbWludXRlPlxyXG48bWF0ZS10aW1lcGlja2VyLWRpYWxvZy1taW51dGUgKm5nSWY9XCJ0eXBlID09ICdzZWNvbmQnXCIgW3ZhbHVlXT1cInZhbHVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjaGFuZ2UpPVwib25DaGFuZ2UoJGV2ZW50KVwiIChzd2l0Y2hDbG9jayk9XCJzd2l0Y2hDbG9jay5lbWl0KCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGVudGVyUHJlc3MpPVwiZW50ZXJQcmVzcy5lbWl0KClcIiAoZmluaXNoKT1cImZpbmlzaC5lbWl0KClcIj5cclxuPC9tYXRlLXRpbWVwaWNrZXItZGlhbG9nLW1pbnV0ZT5cclxuIl19