import { Component, EventEmitter, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/button";
export class MateTimepickerDialogFooterComponent {
    constructor() {
        this.clickOk = new EventEmitter();
        this.clickCancel = new EventEmitter();
    }
    ngOnInit() {
    }
}
MateTimepickerDialogFooterComponent.ɵfac = function MateTimepickerDialogFooterComponent_Factory(t) { return new (t || MateTimepickerDialogFooterComponent)(); };
MateTimepickerDialogFooterComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MateTimepickerDialogFooterComponent, selectors: [["mate-timepicker-dialog-footer"]], hostAttrs: [1, "mate-timepicker-dialog-footer"], outputs: { clickOk: "clickOk", clickCancel: "clickCancel" }, exportAs: ["mateTimepickerDialogFooter"], decls: 5, vars: 0, consts: [[1, "mate-timepicker-actions"], ["mat-raised-button", "", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "click"]], template: function MateTimepickerDialogFooterComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "button", 1);
        i0.ɵɵlistener("click", function MateTimepickerDialogFooterComponent_Template_button_click_1_listener() { return ctx.clickCancel.emit(); });
        i0.ɵɵtext(2, "Cancel");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(3, "button", 2);
        i0.ɵɵlistener("click", function MateTimepickerDialogFooterComponent_Template_button_click_3_listener() { return ctx.clickOk.emit(); });
        i0.ɵɵtext(4, "Ok");
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } }, directives: [i1.MatButton], styles: [".mate-timepicker-dialog-footer[_nghost-%COMP%]{display:block;width:100%}.mate-timepicker-dialog-footer[_nghost-%COMP%]   .mate-timepicker-actions[_ngcontent-%COMP%]{align-content:flex-end;display:flex;justify-content:flex-end;margin-left:auto}.mate-timepicker-dialog-footer[_nghost-%COMP%]   .mate-timepicker-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:not(:first-child){margin-left:.5rem}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MateTimepickerDialogFooterComponent, [{
        type: Component,
        args: [{
                selector: 'mate-timepicker-dialog-footer',
                templateUrl: './timepicker-dialog-footer.component.html',
                styleUrls: ['./timepicker-dialog-footer.component.scss'],
                host: {
                    class: 'mate-timepicker-dialog-footer'
                },
                exportAs: 'mateTimepickerDialogFooter'
            }]
    }], function () { return []; }, { clickOk: [{
            type: Output
        }], clickCancel: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXBpY2tlci1kaWFsb2ctZm9vdGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJEOi9Eb2N1bWVudC9MaWJyYXJ5L0FuZ3VsYXIvbWF0ZXJpYWwtZXh0cmEvcHJvamVjdHMvbWF0ZXJpYWwvdGltZXBpY2tlci9zcmMvIiwic291cmNlcyI6WyJsaWIvdGltZXBpY2tlci1kaWFsb2ctZm9vdGVyL3RpbWVwaWNrZXItZGlhbG9nLWZvb3Rlci5jb21wb25lbnQudHMiLCJsaWIvdGltZXBpY2tlci1kaWFsb2ctZm9vdGVyL3RpbWVwaWNrZXItZGlhbG9nLWZvb3Rlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBVSxNQUFNLEVBQUMsTUFBTSxlQUFlLENBQUM7OztBQVd0RSxNQUFNLE9BQU8sbUNBQW1DO0lBTzVDO1FBTE8sWUFBTyxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7UUFHbkMsZ0JBQVcsR0FBRyxJQUFJLFlBQVksRUFBUSxDQUFDO0lBRzlDLENBQUM7SUFFRCxRQUFRO0lBQ1IsQ0FBQzs7c0hBWFEsbUNBQW1DO3dFQUFuQyxtQ0FBbUM7UUNYaEQsOEJBQ0U7UUFBQSxpQ0FBdUQ7UUFBN0IsZ0hBQVMsc0JBQWtCLElBQUM7UUFBQyxzQkFBTTtRQUFBLGlCQUFTO1FBQ3RFLGlDQUFtRTtRQUF6QixnSEFBUyxrQkFBYyxJQUFDO1FBQUMsa0JBQUU7UUFBQSxpQkFBUztRQUNoRixpQkFBTTs7a0REUU8sbUNBQW1DO2NBVC9DLFNBQVM7ZUFBQztnQkFDUCxRQUFRLEVBQUUsK0JBQStCO2dCQUN6QyxXQUFXLEVBQUUsMkNBQTJDO2dCQUN4RCxTQUFTLEVBQUUsQ0FBQywyQ0FBMkMsQ0FBQztnQkFDeEQsSUFBSSxFQUFFO29CQUNGLEtBQUssRUFBRSwrQkFBK0I7aUJBQ3pDO2dCQUNELFFBQVEsRUFBRSw0QkFBNEI7YUFDekM7c0NBR1UsT0FBTztrQkFEYixNQUFNO1lBSUEsV0FBVztrQkFEakIsTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIE9uSW5pdCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdtYXRlLXRpbWVwaWNrZXItZGlhbG9nLWZvb3RlcicsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vdGltZXBpY2tlci1kaWFsb2ctZm9vdGVyLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL3RpbWVwaWNrZXItZGlhbG9nLWZvb3Rlci5jb21wb25lbnQuc2NzcyddLFxyXG4gICAgaG9zdDoge1xyXG4gICAgICAgIGNsYXNzOiAnbWF0ZS10aW1lcGlja2VyLWRpYWxvZy1mb290ZXInXHJcbiAgICB9LFxyXG4gICAgZXhwb3J0QXM6ICdtYXRlVGltZXBpY2tlckRpYWxvZ0Zvb3RlcidcclxufSlcclxuZXhwb3J0IGNsYXNzIE1hdGVUaW1lcGlja2VyRGlhbG9nRm9vdGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIEBPdXRwdXQoKVxyXG4gICAgcHVibGljIGNsaWNrT2sgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcblxyXG4gICAgQE91dHB1dCgpXHJcbiAgICBwdWJsaWMgY2xpY2tDYW5jZWwgPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICB9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cIm1hdGUtdGltZXBpY2tlci1hY3Rpb25zXCI+XHJcbiAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiAoY2xpY2spPVwiY2xpY2tDYW5jZWwuZW1pdCgpXCI+Q2FuY2VsPC9idXR0b24+XHJcbiAgPGJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiAoY2xpY2spPVwiY2xpY2tPay5lbWl0KClcIj5PazwvYnV0dG9uPlxyXG48L2Rpdj5cclxuIl19