import { Component, EventEmitter, Input, Output } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
function MateTimepickerDialogHeaderComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "span");
    i0.ɵɵtext(2, ":");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "label", 2);
    i0.ɵɵlistener("click", function MateTimepickerDialogHeaderComponent_ng_container_10_Template_label_click_3_listener() { i0.ɵɵrestoreView(_r2); const ctx_r1 = i0.ɵɵnextContext(); return ctx_r1.onActive("second"); });
    i0.ɵɵtext(4);
    i0.ɵɵpipe(5, "number");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵclassProp("active", ctx_r0.type == "second");
    i0.ɵɵadvance(1);
    i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(5, 3, ctx_r0.value.second, "2.0"), " ");
} }
export class MateTimepickerDialogHeaderComponent {
    constructor() {
        this.type = 'hour';
        this.second = false;
        this.active = new EventEmitter();
    }
    ngOnInit() {
    }
    onActive(type) {
        this.type = type;
        this.active.emit(type);
    }
}
MateTimepickerDialogHeaderComponent.ɵfac = function MateTimepickerDialogHeaderComponent_Factory(t) { return new (t || MateTimepickerDialogHeaderComponent)(); };
MateTimepickerDialogHeaderComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MateTimepickerDialogHeaderComponent, selectors: [["mate-timepicker-dialog-header"]], hostAttrs: [1, "mate-timepicker-dialog-header"], inputs: { type: "type", second: "second", value: "value" }, outputs: { active: "active" }, exportAs: ["mateTimepickerDialogHeader"], decls: 11, vars: 13, consts: [[1, "mate-timepicker-dial"], [1, "timepicker-dial-time"], [1, "timepicker-dial-time-item", 3, "click"], [4, "ngIf"]], template: function MateTimepickerDialogHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "div", 0);
        i0.ɵɵelementStart(1, "div", 1);
        i0.ɵɵelementStart(2, "label", 2);
        i0.ɵɵlistener("click", function MateTimepickerDialogHeaderComponent_Template_label_click_2_listener() { return ctx.onActive("hour"); });
        i0.ɵɵtext(3);
        i0.ɵɵpipe(4, "number");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(5, "span");
        i0.ɵɵtext(6, ":");
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(7, "label", 2);
        i0.ɵɵlistener("click", function MateTimepickerDialogHeaderComponent_Template_label_click_7_listener() { return ctx.onActive("minute"); });
        i0.ɵɵtext(8);
        i0.ɵɵpipe(9, "number");
        i0.ɵɵelementEnd();
        i0.ɵɵtemplate(10, MateTimepickerDialogHeaderComponent_ng_container_10_Template, 6, 6, "ng-container", 3);
        i0.ɵɵelementEnd();
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵadvance(2);
        i0.ɵɵclassProp("active", ctx.type == "hour");
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(4, 7, ctx.value.hour, "2.0"), " ");
        i0.ɵɵadvance(4);
        i0.ɵɵclassProp("active", ctx.type == "minute");
        i0.ɵɵadvance(1);
        i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(9, 10, ctx.value.minute, "2.0"), " ");
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", ctx.second);
    } }, directives: [i1.NgIf], pipes: [i1.DecimalPipe], styles: [".mate-timepicker-dialog-header[_nghost-%COMP%]{display:block;width:100%}.mate-timepicker-dialog-header[_nghost-%COMP%]   .mate-timepicker-dial[_ngcontent-%COMP%]{margin:0 auto}.mate-timepicker-dialog-header[_nghost-%COMP%]   .mate-timepicker-dial[_ngcontent-%COMP%]   .timepicker-dial-time[_ngcontent-%COMP%]{align-content:center;font-size:44px;line-height:normal;text-align:center}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MateTimepickerDialogHeaderComponent, [{
        type: Component,
        args: [{
                selector: 'mate-timepicker-dialog-header',
                templateUrl: './timepicker-dialog-header.component.html',
                styleUrls: ['./timepicker-dialog-header.component.scss'],
                host: {
                    class: 'mate-timepicker-dialog-header'
                },
                exportAs: 'mateTimepickerDialogHeader'
            }]
    }], function () { return []; }, { type: [{
            type: Input
        }], second: [{
            type: Input
        }], value: [{
            type: Input
        }], active: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXBpY2tlci1kaWFsb2ctaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJEOi9Eb2N1bWVudC9MaWJyYXJ5L0FuZ3VsYXIvbWF0ZXJpYWwtZXh0cmEvcHJvamVjdHMvbWF0ZXJpYWwvdGltZXBpY2tlci9zcmMvIiwic291cmNlcyI6WyJsaWIvdGltZXBpY2tlci1kaWFsb2ctaGVhZGVyL3RpbWVwaWNrZXItZGlhbG9nLWhlYWRlci5jb21wb25lbnQudHMiLCJsaWIvdGltZXBpY2tlci1kaWFsb2ctaGVhZGVyL3RpbWVwaWNrZXItZGlhbG9nLWhlYWRlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFDLE1BQU0sZUFBZSxDQUFDOzs7OztJQ1N6RSw2QkFDRTtJQUFBLDRCQUFNO0lBQUEsaUJBQUM7SUFBQSxpQkFBTztJQUNkLGdDQUNFO0lBRHlFLHlNQUFrQixRQUFRLEtBQUU7SUFDckcsWUFDRjs7SUFBQSxpQkFBUTtJQUNWLDBCQUFlOzs7SUFINEIsZUFBaUM7SUFBakMsaURBQWlDO0lBQ3hFLGVBQ0Y7SUFERSxpRkFDRjs7QURBTixNQUFNLE9BQU8sbUNBQW1DO0lBYTlDO1FBWE8sU0FBSSxHQUFjLE1BQU0sQ0FBQztRQUd6QixXQUFNLEdBQVksS0FBSyxDQUFDO1FBTXhCLFdBQU0sR0FBRyxJQUFJLFlBQVksRUFBYSxDQUFDO0lBRzlDLENBQUM7SUFFRCxRQUFRO0lBQ1IsQ0FBQztJQUVELFFBQVEsQ0FBQyxJQUFlO1FBQ3RCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pCLENBQUM7O3NIQXRCVSxtQ0FBbUM7d0VBQW5DLG1DQUFtQztRQ2JoRCw4QkFDRTtRQUFBLDhCQUNFO1FBQUEsZ0NBQ0U7UUFEdUUsK0dBQVMsYUFBUyxNQUFNLENBQUMsSUFBQztRQUNqRyxZQUNGOztRQUFBLGlCQUFRO1FBQ1IsNEJBQU07UUFBQSxpQkFBQztRQUFBLGlCQUFPO1FBQ2QsZ0NBQ0U7UUFEeUUsK0dBQVMsYUFBUyxRQUFRLENBQUMsSUFBQztRQUNyRyxZQUNGOztRQUFBLGlCQUFRO1FBQ1Isd0dBQ0U7UUFLSixpQkFBTTtRQUNSLGlCQUFNOztRQWR1QyxlQUErQjtRQUEvQiw0Q0FBK0I7UUFDdEUsZUFDRjtRQURFLDRFQUNGO1FBRXlDLGVBQWlDO1FBQWpDLDhDQUFpQztRQUN4RSxlQUNGO1FBREUsK0VBQ0Y7UUFDYyxlQUFjO1FBQWQsaUNBQWM7O2tEREluQixtQ0FBbUM7Y0FUL0MsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSwrQkFBK0I7Z0JBQ3pDLFdBQVcsRUFBRSwyQ0FBMkM7Z0JBQ3hELFNBQVMsRUFBRSxDQUFDLDJDQUEyQyxDQUFDO2dCQUN4RCxJQUFJLEVBQUU7b0JBQ0osS0FBSyxFQUFFLCtCQUErQjtpQkFDdkM7Z0JBQ0QsUUFBUSxFQUFFLDRCQUE0QjthQUN2QztzQ0FHUSxJQUFJO2tCQURWLEtBQUs7WUFJQyxNQUFNO2tCQURaLEtBQUs7WUFJQyxLQUFLO2tCQURYLEtBQUs7WUFJQyxNQUFNO2tCQURaLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHtDbG9ja1R5cGUsIER1cmF0aW9ufSBmcm9tICcuLi90aW1lcGlja2VyLm1vZGVsJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbWF0ZS10aW1lcGlja2VyLWRpYWxvZy1oZWFkZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi90aW1lcGlja2VyLWRpYWxvZy1oZWFkZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3RpbWVwaWNrZXItZGlhbG9nLWhlYWRlci5jb21wb25lbnQuc2NzcyddLFxyXG4gIGhvc3Q6IHtcclxuICAgIGNsYXNzOiAnbWF0ZS10aW1lcGlja2VyLWRpYWxvZy1oZWFkZXInXHJcbiAgfSxcclxuICBleHBvcnRBczogJ21hdGVUaW1lcGlja2VyRGlhbG9nSGVhZGVyJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTWF0ZVRpbWVwaWNrZXJEaWFsb2dIZWFkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHR5cGU6IENsb2NrVHlwZSA9ICdob3VyJztcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2Vjb25kOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgcHVibGljIHZhbHVlOiBEdXJhdGlvbjtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIGFjdGl2ZSA9IG5ldyBFdmVudEVtaXR0ZXI8Q2xvY2tUeXBlPigpO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gIH1cclxuXHJcbiAgb25BY3RpdmUodHlwZTogQ2xvY2tUeXBlKSB7XHJcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xyXG4gICAgdGhpcy5hY3RpdmUuZW1pdCh0eXBlKTtcclxuICB9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cIm1hdGUtdGltZXBpY2tlci1kaWFsXCI+XHJcbiAgPGRpdiBjbGFzcz1cInRpbWVwaWNrZXItZGlhbC10aW1lXCI+XHJcbiAgICA8bGFiZWwgY2xhc3M9XCJ0aW1lcGlja2VyLWRpYWwtdGltZS1pdGVtXCIgW2NsYXNzLmFjdGl2ZV09XCJ0eXBlID09ICdob3VyJ1wiIChjbGljayk9XCJvbkFjdGl2ZSgnaG91cicpXCI+XHJcbiAgICAgIHt7dmFsdWUuaG91ciB8IG51bWJlcjonMi4wJ319XHJcbiAgICA8L2xhYmVsPlxyXG4gICAgPHNwYW4+Ojwvc3Bhbj5cclxuICAgIDxsYWJlbCBjbGFzcz1cInRpbWVwaWNrZXItZGlhbC10aW1lLWl0ZW1cIiBbY2xhc3MuYWN0aXZlXT1cInR5cGUgPT0gJ21pbnV0ZSdcIiAoY2xpY2spPVwib25BY3RpdmUoJ21pbnV0ZScpXCI+XHJcbiAgICAgIHt7dmFsdWUubWludXRlIHwgbnVtYmVyOicyLjAnfX1cclxuICAgIDwvbGFiZWw+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwic2Vjb25kXCI+XHJcbiAgICAgIDxzcGFuPjo8L3NwYW4+XHJcbiAgICAgIDxsYWJlbCBjbGFzcz1cInRpbWVwaWNrZXItZGlhbC10aW1lLWl0ZW1cIiBbY2xhc3MuYWN0aXZlXT1cInR5cGUgPT0gJ3NlY29uZCdcIiAoY2xpY2spPVwib25BY3RpdmUoJ3NlY29uZCcpXCI+XHJcbiAgICAgICAge3t2YWx1ZS5zZWNvbmQgfCBudW1iZXI6JzIuMCd9fVxyXG4gICAgICA8L2xhYmVsPlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgPC9kaXY+XHJcbjwvZGl2PlxyXG4iXX0=