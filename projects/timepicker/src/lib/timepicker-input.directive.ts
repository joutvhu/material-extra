import {coerceBooleanProperty} from '@angular/cdk/coercion';
import {DOWN_ARROW} from '@angular/cdk/keycodes';
import {DecimalPipe} from '@angular/common';
import {Directive, ElementRef, EventEmitter, HostBinding, HostListener, Input, OnDestroy, Optional, Output} from '@angular/core';
import {AbstractControl, ControlValueAccessor, ValidationErrors, Validator, ValidatorFn, Validators} from '@angular/forms';
import {ThemePalette} from '@angular/material/core';
import {MatFormField} from '@angular/material/form-field';
import {MAT_INPUT_VALUE_ACCESSOR} from '@angular/material/input';
import {Subscription} from 'rxjs';

import {Duration} from './mate-timepicker.model';
import {MateTimepickerComponent} from './mate-timepicker/mate-timepicker.component';

export class MateTimepickerInputEvent {
    value: Duration;

    constructor(
        public target: MateTimepickerInputDirective,
        public targetElement: HTMLElement) {
        this.value = this.target.value;
    }
}

@Directive({
    selector: 'input[mateTimepicker]',
    providers: [
        {provide: MAT_INPUT_VALUE_ACCESSOR, useExisting: MateTimepickerInputDirective},
        DecimalPipe
    ],
    host: {
        '[attr.aria-haspopup]': '_timepicker ? "dialog" : null',
        '[attr.aria-owns]': '(_timepicker?.opened && _timepicker.id) || null',
        '[disabled]': 'disabled'
    },
    exportAs: 'mateDatepickerInput'
})
export class MateTimepickerInputDirective implements ControlValueAccessor, OnDestroy, Validator {
    private _value: Duration | null = Duration.zero();
    private _disabled: boolean;
    private _defaultValue: Duration;
    private _timepickerSubscription = Subscription.EMPTY;
    private _validator: ValidatorFn | null = Validators.compose([]);
    public _timepicker: MateTimepickerComponent;
    public _disabledChange = new EventEmitter<boolean>();
    public _valueChange = new EventEmitter<Duration | null>();

    @HostBinding('maxLength')
    public maxLength = 8;

    @Input()
    set mateTimepicker(value: MateTimepickerComponent) {
        if (!value) return;

        this._timepicker = value;
        this._timepicker._registerInput(this);
        this._timepickerSubscription.unsubscribe();

        this._timepickerSubscription = this._timepicker._selectedChanged.subscribe((selected: Duration) => {
            this.value = selected;
            this._cvaOnChange(selected);
            this._onTouched();
            this.timeInput.emit(new MateTimepickerInputEvent(this, this._elementRef.nativeElement));
            this.timeChange.emit(new MateTimepickerInputEvent(this, this._elementRef.nativeElement));
        });
    }

    @Input()
    get value(): Duration | null {
        return this._value;
    }

    set value(value: Duration | null) {
        const oldDate = this.value;
        value = this._convertValue(value);
        this._value = value;
        this._formatValue(value);

        if (!this.sameTime(oldDate, value))
            this._valueChange.emit(value);
    }

    @Input()
    get disabled(): boolean {
        return !!this._disabled;
    }

    set disabled(value: boolean) {
        const newValue = coerceBooleanProperty(value);
        const element = this._elementRef.nativeElement;

        if (this._disabled !== newValue) {
            this._disabled = newValue;
            this._disabledChange.emit(newValue);
        }

        if (newValue && element.blur) element.blur();
    }

    @Input()
    public set defaultValue(value: Duration) {
        this._defaultValue = this._convertValue(value);
    }

    public get defaultValue(): Duration {
        return this._defaultValue;
    }

    @Output()
    readonly timeChange: EventEmitter<MateTimepickerInputEvent> = new EventEmitter<MateTimepickerInputEvent>();

    @Output()
    readonly timeInput: EventEmitter<MateTimepickerInputEvent> = new EventEmitter<MateTimepickerInputEvent>();

    private _onTouched = () => {
    };

    private _validatorOnChange = () => {
    };

    private _cvaOnChange: (value: any) => void = () => {
    };

    constructor(
        private _decimalPipe: DecimalPipe,
        private _elementRef: ElementRef<HTMLInputElement>,
        @Optional() private _formField: MatFormField
    ) {
    }

    ngOnDestroy(): void {
        this._valueChange.complete();
        this._disabledChange.complete();
    }

    @HostListener('keydown', ['$event'])
    _onKeydown(event: KeyboardEvent) {
        const isAltDownArrow = event.altKey && event.code === 'ArrowDown' || event['keyCode'] === DOWN_ARROW;

        if (this._timepicker && isAltDownArrow && !this._elementRef.nativeElement.readOnly) {
            this._timepicker.open();
            event.preventDefault();
        }
    }

    @HostListener('input', ['$event.target.value'])
    _onInput(value: string) {
        const time = this._convertValue(value);
        if (!this.sameTime(this._value, time)) {
            this._value = time;
            this._cvaOnChange(time);
            this._valueChange.emit(time);
            this.timeInput.emit(new MateTimepickerInputEvent(this, this._elementRef.nativeElement));
        } else if (time == null) this._validatorOnChange();
    }

    @HostListener('change')
    _onChange() {
        this.timeChange.emit(new MateTimepickerInputEvent(this, this._elementRef.nativeElement));
    }

    @HostListener('blur')
    _onBlur() {
        // Reformat the input only if we have a valid value.
        this._formatValue(this.value);
        this._onTouched();
    }

    _getThemePalette(): ThemePalette {
        return this._formField ? this._formField.color : undefined;
    }

    reformatValue() {
        this._formatValue(this.value);
    }

    sameTime(v1: Duration | null, v2: Duration | null): boolean {
        return CommonUtil.isEqualsDeep(v1, v2) || v1 != null && v2 != null && typeof v1.equals === 'function' && v1.equals(v2);
    }

    _convertValue(value: any): Duration | null {
        if (value && !(value instanceof Duration)) {
            if (typeof value === 'string')
                return Duration.fromString(value);
            else if (typeof value === 'number')
                return Duration.fromMillis(value);
            else if (value instanceof Date)
                return Duration.fromDate(value);
            else return null;
        }
        return value;
    }

    private _formatValue(value: Duration | null) {
        let timeValue = '';
        if (value instanceof Duration) {
            timeValue = `${this._decimalPipe.transform(value.hour, '2.0')}:${this._decimalPipe.transform(value.minute, '2.0')}`;
            if (this._timepicker.second)
                timeValue = typeof value.second === 'number' ?
                    `${timeValue}:${this._decimalPipe.transform(value.second, '2.0')}` : '';
        }
        this._elementRef.nativeElement.value = timeValue;
    }

    getPopupConnectionElementRef(): ElementRef {
        return this.getConnectedOverlayOrigin();
    }

    getConnectedOverlayOrigin(): ElementRef {
        return this._formField ? this._formField.getConnectedOverlayOrigin() : this._elementRef;
    }

    registerOnChange(fn: any): void {
        this._cvaOnChange = fn;
    }

    registerOnTouched(fn: any): void {
        this._onTouched = fn;
    }

    registerOnValidatorChange(fn: () => void): void {
        this._validatorOnChange = fn;
    }

    validate(control: AbstractControl): ValidationErrors | null {
        return this._validator ? this._validator(control) : null;
    }

    writeValue(obj: any): void {
        this.value = obj;
    }
}
