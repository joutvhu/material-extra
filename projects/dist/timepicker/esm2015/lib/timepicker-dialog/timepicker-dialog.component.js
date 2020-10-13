import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Duration } from '../timepicker.model';
import * as i0 from "@angular/core";
import * as i1 from "../timepicker-dialog-header/timepicker-dialog-header.component";
import * as i2 from "../timepicker-dialog-body/timepicker-dialog-body.component";
import * as i3 from "../timepicker-dialog-footer/timepicker-dialog-footer.component";
export class MateTimepickerDialogComponent {
    constructor() {
        this.clockActive = 'hour';
        this.valueActive = 0;
        this.second = false;
        this.change = new EventEmitter();
        this.cancel = new EventEmitter();
    }
    set value(value) {
        if (value)
            this._value = value;
        else if (this.defaultValue)
            this._value = this.defaultValue.clone();
        else
            this._value = Duration.now(this.second);
        this.valueActive = this._value.getValue(this.clockActive);
    }
    get value() {
        return this._value;
    }
    ngOnInit() {
        if (!this._value)
            this._value = Duration.now(this.second);
        this.valueActive = this._value.getValue(this.clockActive);
    }
    onActive(type) {
        this.clockActive = type;
        this.valueActive = this._value.getValue(type);
    }
    onChange(value) {
        this._value = this._value.setNew(value.type, value.value);
        this.valueActive = value.value;
    }
    onSwitch() {
        if (this.clockActive === 'hour')
            this.onActive('minute');
        else if (this.second && this.clockActive === 'minute')
            this.onActive('second');
    }
    onClockSwitch(type) {
        if (type === 'right')
            this.onSwitch();
        else if (type === 'left') {
            if (this.clockActive === 'second')
                this.onActive('minute');
            else if (this.clockActive === 'minute')
                this.onActive('hour');
        }
        else if (type === 'start' && this.clockActive !== 'hour') {
            this.onActive('hour');
        }
        else if (type === 'end') {
            if (!this.second && this.clockActive !== 'minute')
                this.onActive('minute');
            else if (this.second && this.clockActive !== 'second')
                this.onActive('second');
        }
    }
    onOk() {
        this.change.emit(this._value);
    }
    onCancel() {
        this.cancel.emit();
    }
}
MateTimepickerDialogComponent.ɵfac = function MateTimepickerDialogComponent_Factory(t) { return new (t || MateTimepickerDialogComponent)(); };
MateTimepickerDialogComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MateTimepickerDialogComponent, selectors: [["mate-timepicker-dialog"]], hostAttrs: [1, "mate-timepicker-dialog"], inputs: { second: "second", defaultValue: "defaultValue", value: "value" }, outputs: { change: "change", cancel: "cancel" }, exportAs: ["mateTimepickerDialog"], decls: 3, vars: 5, consts: [[3, "type", "value", "second", "active"], [3, "value", "type", "change", "switchClock", "enterPress", "finish"], [3, "clickOk", "clickCancel"]], template: function MateTimepickerDialogComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "mate-timepicker-dialog-header", 0);
        i0.ɵɵlistener("active", function MateTimepickerDialogComponent_Template_mate_timepicker_dialog_header_active_0_listener($event) { return ctx.onActive($event); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(1, "mate-timepicker-dialog-body", 1);
        i0.ɵɵlistener("change", function MateTimepickerDialogComponent_Template_mate_timepicker_dialog_body_change_1_listener($event) { return ctx.onChange($event); })("switchClock", function MateTimepickerDialogComponent_Template_mate_timepicker_dialog_body_switchClock_1_listener($event) { return ctx.onClockSwitch($event); })("enterPress", function MateTimepickerDialogComponent_Template_mate_timepicker_dialog_body_enterPress_1_listener() { return ctx.onOk(); })("finish", function MateTimepickerDialogComponent_Template_mate_timepicker_dialog_body_finish_1_listener() { return ctx.onSwitch(); });
        i0.ɵɵelementEnd();
        i0.ɵɵelementStart(2, "mate-timepicker-dialog-footer", 2);
        i0.ɵɵlistener("clickOk", function MateTimepickerDialogComponent_Template_mate_timepicker_dialog_footer_clickOk_2_listener() { return ctx.onOk(); })("clickCancel", function MateTimepickerDialogComponent_Template_mate_timepicker_dialog_footer_clickCancel_2_listener() { return ctx.onCancel(); });
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("type", ctx.clockActive)("value", ctx.value)("second", ctx.second);
        i0.ɵɵadvance(1);
        i0.ɵɵproperty("value", ctx.valueActive)("type", ctx.clockActive);
    } }, directives: [i1.MateTimepickerDialogHeaderComponent, i2.MateTimepickerDialogBodyComponent, i3.MateTimepickerDialogFooterComponent], styles: [".mate-timepicker-dialog[_nghost-%COMP%]{display:flex;flex-direction:column;height:420px;padding:8px;width:280px}.mate-timepicker-dialog[_nghost-%COMP%]   .mate-dialog-container[_ngcontent-%COMP%]{overflow:visible}"] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MateTimepickerDialogComponent, [{
        type: Component,
        args: [{
                selector: 'mate-timepicker-dialog',
                templateUrl: './timepicker-dialog.component.html',
                styleUrls: ['./timepicker-dialog.component.scss'],
                host: {
                    class: 'mate-timepicker-dialog'
                },
                exportAs: 'mateTimepickerDialog'
            }]
    }], function () { return []; }, { second: [{
            type: Input
        }], defaultValue: [{
            type: Input
        }], value: [{
            type: Input
        }], change: [{
            type: Output
        }], cancel: [{
            type: Output
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXBpY2tlci1kaWFsb2cuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IkQ6L0RvY3VtZW50L0xpYnJhcnkvQW5ndWxhci9tYXRlcmlhbC1leHRyYS9wcm9qZWN0cy9tYXRlcmlhbC90aW1lcGlja2VyL3NyYy8iLCJzb3VyY2VzIjpbImxpYi90aW1lcGlja2VyLWRpYWxvZy90aW1lcGlja2VyLWRpYWxvZy5jb21wb25lbnQudHMiLCJsaWIvdGltZXBpY2tlci1kaWFsb2cvdGltZXBpY2tlci1kaWFsb2cuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUU3RSxPQUFPLEVBQXlCLFFBQVEsRUFBQyxNQUFNLHFCQUFxQixDQUFDOzs7OztBQVdyRSxNQUFNLE9BQU8sNkJBQTZCO0lBNkJ4QztRQTNCTyxnQkFBVyxHQUFjLE1BQU0sQ0FBQztRQUNoQyxnQkFBVyxHQUFHLENBQUMsQ0FBQztRQUdoQixXQUFNLEdBQVksS0FBSyxDQUFDO1FBa0J4QixXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQVksQ0FBQztRQUd0QyxXQUFNLEdBQUcsSUFBSSxZQUFZLEVBQVEsQ0FBQztJQUd6QyxDQUFDO0lBbkJELElBQ1csS0FBSyxDQUFDLEtBQWU7UUFDOUIsSUFBSSxLQUFLO1lBQUUsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7YUFDMUIsSUFBSSxJQUFJLENBQUMsWUFBWTtZQUFFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLEVBQUUsQ0FBQzs7WUFDL0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUks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QUNqRCxpQkFBZ0M7O1FBUEQsc0NBQW9CLG9CQUFBLHNCQUFBO1FBRXRCLGVBQXFCO1FBQXJCLHVDQUFxQix5QkFBQTs7a0REV3JDLDZCQUE2QjtjQVR6QyxTQUFTO2VBQUM7Z0JBQ1QsUUFBUSxFQUFFLHdCQUF3QjtnQkFDbEMsV0FBVyxFQUFFLG9DQUFvQztnQkFDakQsU0FBUyxFQUFFLENBQUMsb0NBQW9DLENBQUM7Z0JBQ2pELElBQUksRUFBRTtvQkFDSixLQUFLLEVBQUUsd0JBQXdCO2lCQUNoQztnQkFDRCxRQUFRLEVBQUUsc0JBQXNCO2FBQ2pDO3NDQU9RLE1BQU07a0JBRFosS0FBSztZQUlDLFlBQVk7a0JBRGxCLEtBQUs7WUFJSyxLQUFLO2tCQURmLEtBQUs7WUFhQyxNQUFNO2tCQURaLE1BQU07WUFJQSxNQUFNO2tCQURaLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25Jbml0LCBPdXRwdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHtDbG9ja0NoYW5nZSwgQ2xvY2tUeXBlLCBEdXJhdGlvbn0gZnJvbSAnLi4vdGltZXBpY2tlci5tb2RlbCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ21hdGUtdGltZXBpY2tlci1kaWFsb2cnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi90aW1lcGlja2VyLWRpYWxvZy5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vdGltZXBpY2tlci1kaWFsb2cuY29tcG9uZW50LnNjc3MnXSxcclxuICBob3N0OiB7XHJcbiAgICBjbGFzczogJ21hdGUtdGltZXBpY2tlci1kaWFsb2cnXHJcbiAgfSxcclxuICBleHBvcnRBczogJ21hdGVUaW1lcGlja2VyRGlhbG9nJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTWF0ZVRpbWVwaWNrZXJEaWFsb2dDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIHByaXZhdGUgX3ZhbHVlOiBEdXJhdGlvbjtcclxuICBwdWJsaWMgY2xvY2tBY3RpdmU6IENsb2NrVHlwZSA9ICdob3VyJztcclxuICBwdWJsaWMgdmFsdWVBY3RpdmUgPSAwO1xyXG5cclxuICBASW5wdXQoKVxyXG4gIHB1YmxpYyBzZWNvbmQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgZGVmYXVsdFZhbHVlOiBEdXJhdGlvbjtcclxuXHJcbiAgQElucHV0KClcclxuICBwdWJsaWMgc2V0IHZhbHVlKHZhbHVlOiBEdXJhdGlvbikge1xyXG4gICAgaWYgKHZhbHVlKSB0aGlzLl92YWx1ZSA9IHZhbHVlO1xyXG4gICAgZWxzZSBpZiAodGhpcy5kZWZhdWx0VmFsdWUpIHRoaXMuX3ZhbHVlID0gdGhpcy5kZWZhdWx0VmFsdWUuY2xvbmUoKTtcclxuICAgIGVsc2UgdGhpcy5fdmFsdWUgPSBEdXJhdGlvbi5ub3codGhpcy5zZWNvbmQpO1xyXG4gICAgdGhpcy52YWx1ZUFjdGl2ZSA9IHRoaXMuX3ZhbHVlLmdldFZhbHVlKHRoaXMuY2xvY2tBY3RpdmUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGdldCB2YWx1ZSgpOiBEdXJhdGlvbiB7XHJcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XHJcbiAgfVxyXG5cclxuICBAT3V0cHV0KClcclxuICBwdWJsaWMgY2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxEdXJhdGlvbj4oKTtcclxuXHJcbiAgQE91dHB1dCgpXHJcbiAgcHVibGljIGNhbmNlbCA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIGlmICghdGhpcy5fdmFsdWUpIHRoaXMuX3ZhbHVlID0gRHVyYXRpb24ubm93KHRoaXMuc2Vjb25kKTtcclxuICAgIHRoaXMudmFsdWVBY3RpdmUgPSB0aGlzLl92YWx1ZS5nZXRWYWx1ZSh0aGlzLmNsb2NrQWN0aXZlKTtcclxuICB9XHJcblxyXG4gIG9uQWN0aXZlKHR5cGU6IENsb2NrVHlwZSkge1xyXG4gICAgdGhpcy5jbG9ja0FjdGl2ZSA9IHR5cGU7XHJcbiAgICB0aGlzLnZhbHVlQWN0aXZlID0gdGhpcy5fdmFsdWUuZ2V0VmFsdWUodHlwZSk7XHJcbiAgfVxyXG5cclxuICBvbkNoYW5nZSh2YWx1ZTogQ2xvY2tDaGFuZ2UpIHtcclxuICAgIHRoaXMuX3ZhbHVlID0gdGhpcy5fdmFsdWUuc2V0TmV3KHZhbHVlLnR5cGUsIHZhbHVlLnZhbHVlKTtcclxuICAgIHRoaXMudmFsdWVBY3RpdmUgPSB2YWx1ZS52YWx1ZTtcclxuICB9XHJcblxyXG4gIG9uU3dpdGNoKCkge1xyXG4gICAgaWYgKHRoaXMuY2xvY2tBY3RpdmUgPT09ICdob3VyJylcclxuICAgICAgdGhpcy5vbkFjdGl2ZSgnbWludXRlJyk7XHJcbiAgICBlbHNlIGlmICh0aGlzLnNlY29uZCAmJiB0aGlzLmNsb2NrQWN0aXZlID09PSAnbWludXRlJylcclxuICAgICAgdGhpcy5vbkFjdGl2ZSgnc2Vjb25kJyk7XHJcbiAgfVxyXG5cclxuICBvbkNsb2NrU3dpdGNoKHR5cGU6IHN0cmluZykge1xyXG4gICAgaWYgKHR5cGUgPT09ICdyaWdodCcpIHRoaXMub25Td2l0Y2goKTtcclxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdsZWZ0Jykge1xyXG4gICAgICBpZiAodGhpcy5jbG9ja0FjdGl2ZSA9PT0gJ3NlY29uZCcpXHJcbiAgICAgICAgdGhpcy5vbkFjdGl2ZSgnbWludXRlJyk7XHJcbiAgICAgIGVsc2UgaWYgKHRoaXMuY2xvY2tBY3RpdmUgPT09ICdtaW51dGUnKVxyXG4gICAgICAgIHRoaXMub25BY3RpdmUoJ2hvdXInKTtcclxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ3N0YXJ0JyAmJiB0aGlzLmNsb2NrQWN0aXZlICE9PSAnaG91cicpIHtcclxuICAgICAgdGhpcy5vbkFjdGl2ZSgnaG91cicpO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnZW5kJykge1xyXG4gICAgICBpZiAoIXRoaXMuc2Vjb25kICYmIHRoaXMuY2xvY2tBY3RpdmUgIT09ICdtaW51dGUnKVxyXG4gICAgICAgIHRoaXMub25BY3RpdmUoJ21pbnV0ZScpO1xyXG4gICAgICBlbHNlIGlmICh0aGlzLnNlY29uZCAmJiB0aGlzLmNsb2NrQWN0aXZlICE9PSAnc2Vjb25kJylcclxuICAgICAgICB0aGlzLm9uQWN0aXZlKCdzZWNvbmQnKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uT2soKSB7XHJcbiAgICB0aGlzLmNoYW5nZS5lbWl0KHRoaXMuX3ZhbHVlKTtcclxuICB9XHJcblxyXG4gIG9uQ2FuY2VsKCkge1xyXG4gICAgdGhpcy5jYW5jZWwuZW1pdCgpO1xyXG4gIH1cclxufVxyXG4iLCI8bWF0ZS10aW1lcGlja2VyLWRpYWxvZy1oZWFkZXIgW3R5cGVdPVwiY2xvY2tBY3RpdmVcIiBbdmFsdWVdPVwidmFsdWVcIiBbc2Vjb25kXT1cInNlY29uZFwiIChhY3RpdmUpPVwib25BY3RpdmUoJGV2ZW50KVwiPlxyXG48L21hdGUtdGltZXBpY2tlci1kaWFsb2ctaGVhZGVyPlxyXG48bWF0ZS10aW1lcGlja2VyLWRpYWxvZy1ib2R5IFt2YWx1ZV09XCJ2YWx1ZUFjdGl2ZVwiIFt0eXBlXT1cImNsb2NrQWN0aXZlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2hhbmdlKT1cIm9uQ2hhbmdlKCRldmVudClcIiAoc3dpdGNoQ2xvY2spPVwib25DbG9ja1N3aXRjaCgkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZW50ZXJQcmVzcyk9XCJvbk9rKClcIiAoZmluaXNoKT1cIm9uU3dpdGNoKClcIj5cclxuPC9tYXRlLXRpbWVwaWNrZXItZGlhbG9nLWJvZHk+XHJcbjxtYXRlLXRpbWVwaWNrZXItZGlhbG9nLWZvb3RlciAoY2xpY2tPayk9XCJvbk9rKClcIiAoY2xpY2tDYW5jZWwpPVwib25DYW5jZWwoKVwiPlxyXG48L21hdGUtdGltZXBpY2tlci1kaWFsb2ctZm9vdGVyPlxyXG4iXX0=