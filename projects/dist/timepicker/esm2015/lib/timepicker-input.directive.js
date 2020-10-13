import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { DOWN_ARROW } from '@angular/cdk/keycodes';
import { DecimalPipe } from '@angular/common';
import { Directive, EventEmitter, HostBinding, HostListener, Input, Optional, Output } from '@angular/core';
import { Validators } from '@angular/forms';
import { MAT_INPUT_VALUE_ACCESSOR } from '@angular/material/input';
import { Subscription } from 'rxjs';
import { Duration } from './timepicker.model';
import { TimepickerUtil } from './timepicker.util';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/material/form-field";
export class MateTimepickerInputEvent {
    constructor(target, targetElement) {
        this.target = target;
        this.targetElement = targetElement;
        this.value = this.target.value;
    }
}
export class MateTimepickerInputDirective {
    constructor(_decimalPipe, _elementRef, _formField) {
        this._decimalPipe = _decimalPipe;
        this._elementRef = _elementRef;
        this._formField = _formField;
        this._value = Duration.zero();
        this._timepickerSubscription = Subscription.EMPTY;
        this._validator = Validators.compose([]);
        this._disabledChange = new EventEmitter();
        this._valueChange = new EventEmitter();
        this.maxLength = 8;
        this.timeChange = new EventEmitter();
        this.timeInput = new EventEmitter();
        this._onTouched = () => {
        };
        this._validatorOnChange = () => {
        };
        this._cvaOnChange = () => {
        };
    }
    set mateTimepicker(value) {
        if (!value)
            return;
        this._timepicker = value;
        this._timepicker._registerInput(this);
        this._timepickerSubscription.unsubscribe();
        this._timepickerSubscription = this._timepicker._selectedChanged.subscribe((selected) => {
            this.value = selected;
            this._cvaOnChange(selected);
            this._onTouched();
            this.timeInput.emit(new MateTimepickerInputEvent(this, this._elementRef.nativeElement));
            this.timeChange.emit(new MateTimepickerInputEvent(this, this._elementRef.nativeElement));
        });
    }
    get value() {
        return this._value;
    }
    set value(value) {
        const oldDate = this.value;
        value = this._convertValue(value);
        this._value = value;
        this._formatValue(value);
        if (!this.sameTime(oldDate, value))
            this._valueChange.emit(value);
    }
    get disabled() {
        return !!this._disabled;
    }
    set disabled(value) {
        const newValue = coerceBooleanProperty(value);
        const element = this._elementRef.nativeElement;
        if (this._disabled !== newValue) {
            this._disabled = newValue;
            this._disabledChange.emit(newValue);
        }
        if (newValue && element.blur)
            element.blur();
    }
    set defaultValue(value) {
        this._defaultValue = this._convertValue(value);
    }
    get defaultValue() {
        return this._defaultValue;
    }
    ngOnDestroy() {
        this._valueChange.complete();
        this._disabledChange.complete();
    }
    _onKeydown(event) {
        const isAltDownArrow = event.altKey && event.code === 'ArrowDown' || event['keyCode'] === DOWN_ARROW;
        if (this._timepicker && isAltDownArrow && !this._elementRef.nativeElement.readOnly) {
            this._timepicker.open();
            event.preventDefault();
        }
    }
    _onInput(value) {
        const time = this._convertValue(value);
        if (!this.sameTime(this._value, time)) {
            this._value = time;
            this._cvaOnChange(time);
            this._valueChange.emit(time);
            this.timeInput.emit(new MateTimepickerInputEvent(this, this._elementRef.nativeElement));
        }
        else if (time == null)
            this._validatorOnChange();
    }
    _onChange() {
        this.timeChange.emit(new MateTimepickerInputEvent(this, this._elementRef.nativeElement));
    }
    _onBlur() {
        // Reformat the input only if we have a valid value.
        this._formatValue(this.value);
        this._onTouched();
    }
    _getThemePalette() {
        return this._formField ? this._formField.color : undefined;
    }
    reformatValue() {
        this._formatValue(this.value);
    }
    sameTime(v1, v2) {
        return TimepickerUtil.isEqualsDeep(v1, v2) || v1 != null && v2 != null && typeof v1.equals === 'function' && v1.equals(v2);
    }
    _convertValue(value) {
        if (value && !(value instanceof Duration)) {
            if (typeof value === 'string')
                return Duration.fromString(value);
            else if (typeof value === 'number')
                return Duration.fromMillis(value);
            else if (value instanceof Date)
                return Duration.fromDate(value);
            else
                return null;
        }
        return value;
    }
    _formatValue(value) {
        let timeValue = '';
        if (value instanceof Duration) {
            timeValue = `${this._decimalPipe.transform(value.hour, '2.0')}:${this._decimalPipe.transform(value.minute, '2.0')}`;
            if (this._timepicker.second)
                timeValue = typeof value.second === 'number' ?
                    `${timeValue}:${this._decimalPipe.transform(value.second, '2.0')}` : '';
        }
        this._elementRef.nativeElement.value = timeValue;
    }
    getPopupConnectionElementRef() {
        return this.getConnectedOverlayOrigin();
    }
    getConnectedOverlayOrigin() {
        return this._formField ? this._formField.getConnectedOverlayOrigin() : this._elementRef;
    }
    registerOnChange(fn) {
        this._cvaOnChange = fn;
    }
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
    registerOnValidatorChange(fn) {
        this._validatorOnChange = fn;
    }
    validate(control) {
        return this._validator ? this._validator(control) : null;
    }
    writeValue(obj) {
        this.value = obj;
    }
}
MateTimepickerInputDirective.ɵfac = function MateTimepickerInputDirective_Factory(t) { return new (t || MateTimepickerInputDirective)(i0.ɵɵdirectiveInject(i1.DecimalPipe), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i2.MatFormField, 8)); };
MateTimepickerInputDirective.ɵdir = i0.ɵɵdefineDirective({ type: MateTimepickerInputDirective, selectors: [["input", "mateTimepicker", ""]], hostVars: 4, hostBindings: function MateTimepickerInputDirective_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("keydown", function MateTimepickerInputDirective_keydown_HostBindingHandler($event) { return ctx._onKeydown($event); })("input", function MateTimepickerInputDirective_input_HostBindingHandler($event) { return ctx._onInput($event.target.value); })("change", function MateTimepickerInputDirective_change_HostBindingHandler() { return ctx._onChange(); })("blur", function MateTimepickerInputDirective_blur_HostBindingHandler() { return ctx._onBlur(); });
    } if (rf & 2) {
        i0.ɵɵhostProperty("disabled", ctx.disabled)("maxLength", ctx.maxLength);
        i0.ɵɵattribute("aria-haspopup", ctx._timepicker ? "dialog" : null)("aria-owns", (ctx._timepicker == null ? null : ctx._timepicker.opened) && ctx._timepicker.id || null);
    } }, inputs: { mateTimepicker: "mateTimepicker", value: "value", disabled: "disabled", defaultValue: "defaultValue" }, outputs: { timeChange: "timeChange", timeInput: "timeInput" }, exportAs: ["mateDatepickerInput"], features: [i0.ɵɵProvidersFeature([
            { provide: MAT_INPUT_VALUE_ACCESSOR, useExisting: MateTimepickerInputDirective },
            DecimalPipe
        ])] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MateTimepickerInputDirective, [{
        type: Directive,
        args: [{
                selector: 'input[mateTimepicker]',
                providers: [
                    { provide: MAT_INPUT_VALUE_ACCESSOR, useExisting: MateTimepickerInputDirective },
                    DecimalPipe
                ],
                host: {
                    '[attr.aria-haspopup]': '_timepicker ? "dialog" : null',
                    '[attr.aria-owns]': '(_timepicker?.opened && _timepicker.id) || null',
                    '[disabled]': 'disabled'
                },
                exportAs: 'mateDatepickerInput'
            }]
    }], function () { return [{ type: i1.DecimalPipe }, { type: i0.ElementRef }, { type: i2.MatFormField, decorators: [{
                type: Optional
            }] }]; }, { maxLength: [{
            type: HostBinding,
            args: ['maxLength']
        }], mateTimepicker: [{
            type: Input
        }], value: [{
            type: Input
        }], disabled: [{
            type: Input
        }], defaultValue: [{
            type: Input
        }], timeChange: [{
            type: Output
        }], timeInput: [{
            type: Output
        }], _onKeydown: [{
            type: HostListener,
            args: ['keydown', ['$event']]
        }], _onInput: [{
            type: HostListener,
            args: ['input', ['$event.target.value']]
        }], _onChange: [{
            type: HostListener,
            args: ['change']
        }], _onBlur: [{
            type: HostListener,
            args: ['blur']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXBpY2tlci1pbnB1dC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiRDovRG9jdW1lbnQvTGlicmFyeS9Bbmd1bGFyL21hdGVyaWFsLWV4dHJhL3Byb2plY3RzL21hdGVyaWFsL3RpbWVwaWNrZXIvc3JjLyIsInNvdXJjZXMiOlsibGliL3RpbWVwaWNrZXItaW5wdXQuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBQyxxQkFBcUIsRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQzVELE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDNUMsT0FBTyxFQUFDLFNBQVMsRUFBYyxZQUFZLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQWEsUUFBUSxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNqSSxPQUFPLEVBQWtGLFVBQVUsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBRzNILE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ2pFLE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxNQUFNLENBQUM7QUFFbEMsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBQzVDLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQzs7OztBQUdqRCxNQUFNLE9BQU8sd0JBQXdCO0lBR2pDLFlBQ1csTUFBb0MsRUFDcEMsYUFBMEI7UUFEMUIsV0FBTSxHQUFOLE1BQU0sQ0FBOEI7UUFDcEMsa0JBQWEsR0FBYixhQUFhLENBQWE7UUFDakMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNuQyxDQUFDO0NBQ0o7QUFlRCxNQUFNLE9BQU8sNEJBQTRCO0lBc0ZyQyxZQUNZLFlBQXlCLEVBQ3pCLFdBQXlDLEVBQzdC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QWtCLEVBQUUsaURBQWlEO29CQUNyRSxZQUFZLEVBQUUsVUFBVTtpQkFDM0I7Z0JBQ0QsUUFBUSxFQUFFLHFCQUFxQjthQUNsQzs7c0JBMEZRLFFBQVE7d0JBOUVOLFNBQVM7a0JBRGYsV0FBVzttQkFBQyxXQUFXO1lBSXBCLGNBQWM7a0JBRGpCLEtBQUs7WUFrQkYsS0FBSztrQkFEUixLQUFLO1lBZ0JGLFFBQVE7a0JBRFgsS0FBSztZQWtCSyxZQUFZO2tCQUR0QixLQUFLO1lBVUcsVUFBVTtrQkFEbEIsTUFBTTtZQUlFLFNBQVM7a0JBRGpCLE1BQU07WUF5QlAsVUFBVTtrQkFEVCxZQUFZO21CQUFDLFNBQVMsRUFBRSxDQUFDLFFBQVEsQ0FBQztZQVduQyxRQUFRO2tCQURQLFlBQVk7bUJBQUMsT0FBTyxFQUFFLENBQUMscUJBQXFCLENBQUM7WUFZOUMsU0FBUztrQkFEUixZQUFZO21CQUFDLFFBQVE7WUFNdEIsT0FBTztrQkFETixZQUFZO21CQUFDLE1BQU0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NvZXJjZUJvb2xlYW5Qcm9wZXJ0eX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcclxuaW1wb3J0IHtET1dOX0FSUk9XfSBmcm9tICdAYW5ndWxhci9jZGsva2V5Y29kZXMnO1xyXG5pbXBvcnQge0RlY2ltYWxQaXBlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge0RpcmVjdGl2ZSwgRWxlbWVudFJlZiwgRXZlbnRFbWl0dGVyLCBIb3N0QmluZGluZywgSG9zdExpc3RlbmVyLCBJbnB1dCwgT25EZXN0cm95LCBPcHRpb25hbCwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtBYnN0cmFjdENvbnRyb2wsIENvbnRyb2xWYWx1ZUFjY2Vzc29yLCBWYWxpZGF0aW9uRXJyb3JzLCBWYWxpZGF0b3IsIFZhbGlkYXRvckZuLCBWYWxpZGF0b3JzfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7VGhlbWVQYWxldHRlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcclxuaW1wb3J0IHtNYXRGb3JtRmllbGR9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xyXG5pbXBvcnQge01BVF9JTlBVVF9WQUxVRV9BQ0NFU1NPUn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xyXG5pbXBvcnQge1N1YnNjcmlwdGlvbn0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQge0R1cmF0aW9ufSBmcm9tICcuL3RpbWVwaWNrZXIubW9kZWwnO1xyXG5pbXBvcnQge1RpbWVwaWNrZXJVdGlsfSBmcm9tICcuL3RpbWVwaWNrZXIudXRpbCc7XHJcbmltcG9ydCB7TWF0ZVRpbWVwaWNrZXJDb21wb25lbnR9IGZyb20gJy4vdGltZXBpY2tlci90aW1lcGlja2VyLmNvbXBvbmVudCc7XHJcblxyXG5leHBvcnQgY2xhc3MgTWF0ZVRpbWVwaWNrZXJJbnB1dEV2ZW50IHtcclxuICAgIHZhbHVlOiBEdXJhdGlvbjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwdWJsaWMgdGFyZ2V0OiBNYXRlVGltZXBpY2tlcklucHV0RGlyZWN0aXZlLFxyXG4gICAgICAgIHB1YmxpYyB0YXJnZXRFbGVtZW50OiBIVE1MRWxlbWVudCkge1xyXG4gICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLnRhcmdldC52YWx1ZTtcclxuICAgIH1cclxufVxyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgICBzZWxlY3RvcjogJ2lucHV0W21hdGVUaW1lcGlja2VyXScsXHJcbiAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICB7cHJvdmlkZTogTUFUX0lOUFVUX1ZBTFVFX0FDQ0VTU09SLCB1c2VFeGlzdGluZzogTWF0ZVRpbWVwaWNrZXJJbnB1dERpcmVjdGl2ZX0sXHJcbiAgICAgICAgRGVjaW1hbFBpcGVcclxuICAgIF0sXHJcbiAgICBob3N0OiB7XHJcbiAgICAgICAgJ1thdHRyLmFyaWEtaGFzcG9wdXBdJzogJ190aW1lcGlja2VyID8gXCJkaWFsb2dcIiA6IG51bGwnLFxyXG4gICAgICAgICdbYXR0ci5hcmlhLW93bnNdJzogJyhfdGltZXBpY2tlcj8ub3BlbmVkICYmIF90aW1lcGlja2VyLmlkKSB8fCBudWxsJyxcclxuICAgICAgICAnW2Rpc2FibGVkXSc6ICdkaXNhYmxlZCdcclxuICAgIH0sXHJcbiAgICBleHBvcnRBczogJ21hdGVEYXRlcGlja2VySW5wdXQnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYXRlVGltZXBpY2tlcklucHV0RGlyZWN0aXZlIGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE9uRGVzdHJveSwgVmFsaWRhdG9yIHtcclxuICAgIHByaXZhdGUgX3ZhbHVlOiBEdXJhdGlvbiB8IG51bGwgPSBEdXJhdGlvbi56ZXJvKCk7XHJcbiAgICBwcml2YXRlIF9kaXNhYmxlZDogYm9vbGVhbjtcclxuICAgIHByaXZhdGUgX2RlZmF1bHRWYWx1ZTogRHVyYXRpb247XHJcbiAgICBwcml2YXRlIF90aW1lcGlja2VyU3Vic2NyaXB0aW9uID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xyXG4gICAgcHJpdmF0ZSBfdmFsaWRhdG9yOiBWYWxpZGF0b3JGbiB8IG51bGwgPSBWYWxpZGF0b3JzLmNvbXBvc2UoW10pO1xyXG4gICAgcHVibGljIF90aW1lcGlja2VyOiBNYXRlVGltZXBpY2tlckNvbXBvbmVudDtcclxuICAgIHB1YmxpYyBfZGlzYWJsZWRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcbiAgICBwdWJsaWMgX3ZhbHVlQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxEdXJhdGlvbiB8IG51bGw+KCk7XHJcblxyXG4gICAgQEhvc3RCaW5kaW5nKCdtYXhMZW5ndGgnKVxyXG4gICAgcHVibGljIG1heExlbmd0aCA9IDg7XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIHNldCBtYXRlVGltZXBpY2tlcih2YWx1ZTogTWF0ZVRpbWVwaWNrZXJDb21wb25lbnQpIHtcclxuICAgICAgICBpZiAoIXZhbHVlKSByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMuX3RpbWVwaWNrZXIgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLl90aW1lcGlja2VyLl9yZWdpc3RlcklucHV0KHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX3RpbWVwaWNrZXJTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuXHJcbiAgICAgICAgdGhpcy5fdGltZXBpY2tlclN1YnNjcmlwdGlvbiA9IHRoaXMuX3RpbWVwaWNrZXIuX3NlbGVjdGVkQ2hhbmdlZC5zdWJzY3JpYmUoKHNlbGVjdGVkOiBEdXJhdGlvbikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gc2VsZWN0ZWQ7XHJcbiAgICAgICAgICAgIHRoaXMuX2N2YU9uQ2hhbmdlKHNlbGVjdGVkKTtcclxuICAgICAgICAgICAgdGhpcy5fb25Ub3VjaGVkKCk7XHJcbiAgICAgICAgICAgIHRoaXMudGltZUlucHV0LmVtaXQobmV3IE1hdGVUaW1lcGlja2VySW5wdXRFdmVudCh0aGlzLCB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpKTtcclxuICAgICAgICAgICAgdGhpcy50aW1lQ2hhbmdlLmVtaXQobmV3IE1hdGVUaW1lcGlja2VySW5wdXRFdmVudCh0aGlzLCB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHZhbHVlKCk6IER1cmF0aW9uIHwgbnVsbCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCB2YWx1ZSh2YWx1ZTogRHVyYXRpb24gfCBudWxsKSB7XHJcbiAgICAgICAgY29uc3Qgb2xkRGF0ZSA9IHRoaXMudmFsdWU7XHJcbiAgICAgICAgdmFsdWUgPSB0aGlzLl9jb252ZXJ0VmFsdWUodmFsdWUpO1xyXG4gICAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5fZm9ybWF0VmFsdWUodmFsdWUpO1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuc2FtZVRpbWUob2xkRGF0ZSwgdmFsdWUpKVxyXG4gICAgICAgICAgICB0aGlzLl92YWx1ZUNoYW5nZS5lbWl0KHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGRpc2FibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiAhIXRoaXMuX2Rpc2FibGVkO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBkaXNhYmxlZCh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIGNvbnN0IG5ld1ZhbHVlID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcclxuICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50O1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fZGlzYWJsZWQgIT09IG5ld1ZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2Rpc2FibGVkID0gbmV3VmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMuX2Rpc2FibGVkQ2hhbmdlLmVtaXQobmV3VmFsdWUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG5ld1ZhbHVlICYmIGVsZW1lbnQuYmx1cikgZWxlbWVudC5ibHVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KClcclxuICAgIHB1YmxpYyBzZXQgZGVmYXVsdFZhbHVlKHZhbHVlOiBEdXJhdGlvbikge1xyXG4gICAgICAgIHRoaXMuX2RlZmF1bHRWYWx1ZSA9IHRoaXMuX2NvbnZlcnRWYWx1ZSh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBkZWZhdWx0VmFsdWUoKTogRHVyYXRpb24ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kZWZhdWx0VmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgQE91dHB1dCgpXHJcbiAgICByZWFkb25seSB0aW1lQ2hhbmdlOiBFdmVudEVtaXR0ZXI8TWF0ZVRpbWVwaWNrZXJJbnB1dEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8TWF0ZVRpbWVwaWNrZXJJbnB1dEV2ZW50PigpO1xyXG5cclxuICAgIEBPdXRwdXQoKVxyXG4gICAgcmVhZG9ubHkgdGltZUlucHV0OiBFdmVudEVtaXR0ZXI8TWF0ZVRpbWVwaWNrZXJJbnB1dEV2ZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8TWF0ZVRpbWVwaWNrZXJJbnB1dEV2ZW50PigpO1xyXG5cclxuICAgIHByaXZhdGUgX29uVG91Y2hlZCA9ICgpID0+IHtcclxuICAgIH07XHJcblxyXG4gICAgcHJpdmF0ZSBfdmFsaWRhdG9yT25DaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICB9O1xyXG5cclxuICAgIHByaXZhdGUgX2N2YU9uQ2hhbmdlOiAodmFsdWU6IGFueSkgPT4gdm9pZCA9ICgpID0+IHtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBfZGVjaW1hbFBpcGU6IERlY2ltYWxQaXBlLFxyXG4gICAgICAgIHByaXZhdGUgX2VsZW1lbnRSZWY6IEVsZW1lbnRSZWY8SFRNTElucHV0RWxlbWVudD4sXHJcbiAgICAgICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBfZm9ybUZpZWxkOiBNYXRGb3JtRmllbGRcclxuICAgICkge1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3ZhbHVlQ2hhbmdlLmNvbXBsZXRlKCk7XHJcbiAgICAgICAgdGhpcy5fZGlzYWJsZWRDaGFuZ2UuY29tcGxldGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBASG9zdExpc3RlbmVyKCdrZXlkb3duJywgWyckZXZlbnQnXSlcclxuICAgIF9vbktleWRvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcclxuICAgICAgICBjb25zdCBpc0FsdERvd25BcnJvdyA9IGV2ZW50LmFsdEtleSAmJiBldmVudC5jb2RlID09PSAnQXJyb3dEb3duJyB8fCBldmVudFsna2V5Q29kZSddID09PSBET1dOX0FSUk9XO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fdGltZXBpY2tlciAmJiBpc0FsdERvd25BcnJvdyAmJiAhdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnJlYWRPbmx5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3RpbWVwaWNrZXIub3BlbigpO1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBASG9zdExpc3RlbmVyKCdpbnB1dCcsIFsnJGV2ZW50LnRhcmdldC52YWx1ZSddKVxyXG4gICAgX29uSW5wdXQodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnN0IHRpbWUgPSB0aGlzLl9jb252ZXJ0VmFsdWUodmFsdWUpO1xyXG4gICAgICAgIGlmICghdGhpcy5zYW1lVGltZSh0aGlzLl92YWx1ZSwgdGltZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5fdmFsdWUgPSB0aW1lO1xyXG4gICAgICAgICAgICB0aGlzLl9jdmFPbkNoYW5nZSh0aW1lKTtcclxuICAgICAgICAgICAgdGhpcy5fdmFsdWVDaGFuZ2UuZW1pdCh0aW1lKTtcclxuICAgICAgICAgICAgdGhpcy50aW1lSW5wdXQuZW1pdChuZXcgTWF0ZVRpbWVwaWNrZXJJbnB1dEV2ZW50KHRoaXMsIHRoaXMuX2VsZW1lbnRSZWYubmF0aXZlRWxlbWVudCkpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGltZSA9PSBudWxsKSB0aGlzLl92YWxpZGF0b3JPbkNoYW5nZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIEBIb3N0TGlzdGVuZXIoJ2NoYW5nZScpXHJcbiAgICBfb25DaGFuZ2UoKSB7XHJcbiAgICAgICAgdGhpcy50aW1lQ2hhbmdlLmVtaXQobmV3IE1hdGVUaW1lcGlja2VySW5wdXRFdmVudCh0aGlzLCB0aGlzLl9lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpKTtcclxuICAgIH1cclxuXHJcbiAgICBASG9zdExpc3RlbmVyKCdibHVyJylcclxuICAgIF9vbkJsdXIoKSB7XHJcbiAgICAgICAgLy8gUmVmb3JtYXQgdGhlIGlucHV0IG9ubHkgaWYgd2UgaGF2ZSBhIHZhbGlkIHZhbHVlLlxyXG4gICAgICAgIHRoaXMuX2Zvcm1hdFZhbHVlKHRoaXMudmFsdWUpO1xyXG4gICAgICAgIHRoaXMuX29uVG91Y2hlZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIF9nZXRUaGVtZVBhbGV0dGUoKTogVGhlbWVQYWxldHRlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZm9ybUZpZWxkID8gdGhpcy5fZm9ybUZpZWxkLmNvbG9yIDogdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZm9ybWF0VmFsdWUoKSB7XHJcbiAgICAgICAgdGhpcy5fZm9ybWF0VmFsdWUodGhpcy52YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2FtZVRpbWUodjE6IER1cmF0aW9uIHwgbnVsbCwgdjI6IER1cmF0aW9uIHwgbnVsbCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBUaW1lcGlja2VyVXRpbC5pc0VxdWFsc0RlZXAodjEsIHYyKSB8fCB2MSAhPSBudWxsICYmIHYyICE9IG51bGwgJiYgdHlwZW9mIHYxLmVxdWFscyA9PT0gJ2Z1bmN0aW9uJyAmJiB2MS5lcXVhbHModjIpO1xyXG4gICAgfVxyXG5cclxuICAgIF9jb252ZXJ0VmFsdWUodmFsdWU6IGFueSk6IER1cmF0aW9uIHwgbnVsbCB7XHJcbiAgICAgICAgaWYgKHZhbHVlICYmICEodmFsdWUgaW5zdGFuY2VvZiBEdXJhdGlvbikpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gRHVyYXRpb24uZnJvbVN0cmluZyh2YWx1ZSk7XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ251bWJlcicpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gRHVyYXRpb24uZnJvbU1pbGxpcyh2YWx1ZSk7XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHZhbHVlIGluc3RhbmNlb2YgRGF0ZSlcclxuICAgICAgICAgICAgICAgIHJldHVybiBEdXJhdGlvbi5mcm9tRGF0ZSh2YWx1ZSk7XHJcbiAgICAgICAgICAgIGVsc2UgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9mb3JtYXRWYWx1ZSh2YWx1ZTogRHVyYXRpb24gfCBudWxsKSB7XHJcbiAgICAgICAgbGV0IHRpbWVWYWx1ZSA9ICcnO1xyXG4gICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIER1cmF0aW9uKSB7XHJcbiAgICAgICAgICAgIHRpbWVWYWx1ZSA9IGAke3RoaXMuX2RlY2ltYWxQaXBlLnRyYW5zZm9ybSh2YWx1ZS5ob3VyLCAnMi4wJyl9OiR7dGhpcy5fZGVjaW1hbFBpcGUudHJhbnNmb3JtKHZhbHVlLm1pbnV0ZSwgJzIuMCcpfWA7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl90aW1lcGlja2VyLnNlY29uZClcclxuICAgICAgICAgICAgICAgIHRpbWVWYWx1ZSA9IHR5cGVvZiB2YWx1ZS5zZWNvbmQgPT09ICdudW1iZXInID9cclxuICAgICAgICAgICAgICAgICAgICBgJHt0aW1lVmFsdWV9OiR7dGhpcy5fZGVjaW1hbFBpcGUudHJhbnNmb3JtKHZhbHVlLnNlY29uZCwgJzIuMCcpfWAgOiAnJztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnZhbHVlID0gdGltZVZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFBvcHVwQ29ubmVjdGlvbkVsZW1lbnRSZWYoKTogRWxlbWVudFJlZiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Q29ubmVjdGVkT3ZlcmxheU9yaWdpbigpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldENvbm5lY3RlZE92ZXJsYXlPcmlnaW4oKTogRWxlbWVudFJlZiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Zvcm1GaWVsZCA/IHRoaXMuX2Zvcm1GaWVsZC5nZXRDb25uZWN0ZWRPdmVybGF5T3JpZ2luKCkgOiB0aGlzLl9lbGVtZW50UmVmO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX2N2YU9uQ2hhbmdlID0gZm47XHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX29uVG91Y2hlZCA9IGZuO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyT25WYWxpZGF0b3JDaGFuZ2UoZm46ICgpID0+IHZvaWQpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLl92YWxpZGF0b3JPbkNoYW5nZSA9IGZuO1xyXG4gICAgfVxyXG5cclxuICAgIHZhbGlkYXRlKGNvbnRyb2w6IEFic3RyYWN0Q29udHJvbCk6IFZhbGlkYXRpb25FcnJvcnMgfCBudWxsIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdmFsaWRhdG9yID8gdGhpcy5fdmFsaWRhdG9yKGNvbnRyb2wpIDogbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICB3cml0ZVZhbHVlKG9iajogYW55KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy52YWx1ZSA9IG9iajtcclxuICAgIH1cclxufVxyXG4iXX0=