import {coerceBooleanProperty} from '@angular/cdk/coercion';
import {DOWN_ARROW} from '@angular/cdk/keycodes';
import {DecimalPipe} from '@angular/common';
import {
    Directive,
    ElementRef,
    EventEmitter,
    forwardRef,
    HostBinding,
    HostListener,
    Input,
    OnDestroy,
    Optional,
    Output
} from '@angular/core';
import {
    AbstractControl,
    ControlValueAccessor,
    NG_VALIDATORS,
    NG_VALUE_ACCESSOR,
    ValidationErrors,
    Validator,
    ValidatorFn,
    Validators
} from '@angular/forms';
import {ThemePalette} from '@angular/material/core';
import {MatFormField} from '@angular/material/form-field';
import {MAT_INPUT_VALUE_ACCESSOR} from '@angular/material/input';
import {Subscription} from 'rxjs';

import {Duration} from './timepicker.model';
import {TimepickerUtil} from './timepicker.util';
import {MateTimepickerComponent} from './timepicker/timepicker.component';

export const MATE_TIMEPICKER_VALUE_ACCESSOR: any = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => MateTimepickerInputDirective),
    multi: true
};

export const MATE_TIMEPICKER_VALIDATORS: any = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => MateTimepickerInputDirective),
    multi: true
};

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
        DecimalPipe,
        MATE_TIMEPICKER_VALUE_ACCESSOR,
        MATE_TIMEPICKER_VALIDATORS,
        {provide: MAT_INPUT_VALUE_ACCESSOR, useExisting: MateTimepickerInputDirective}
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
    private _validator: ValidatorFn | null;

    /** Whether the last value set on the input was valid. */
    private _lastValueValid = true;

    public _timepicker: MateTimepickerComponent;
    public _disabledChange = new EventEmitter<boolean>();
    public _valueChange = new EventEmitter<Duration | null>();

    @HostBinding('maxLength')
    public maxLength = 8;

    @Input()
    set mateTimepicker(value: MateTimepickerComponent) {
        if (!value) {
            return;
        }

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
        const lastValueValid = this._lastValueValid;
        this._lastValueValid = true;
        const oldDate = this.value;
        value = this._convertValue(value);
        this._value = value;
        this._formatValue(value);

        if (!this.sameTime(oldDate, value)) {
            this._valueChange.emit(value);
        }
        if (!lastValueValid) {
            this._validatorOnChange();
        }
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

        if (newValue && element.blur) {
            element.blur();
        }
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
        this._validator = Validators.compose([this._formatValidator]);
    }

    private _formatValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
        return this._lastValueValid ? null : {
            matTimepickerFormat: {
                text: this._elementRef.nativeElement.value,
                actual: this.value
            }
        };
    };

    private _validateRegex(): RegExp {
        if (this._timepicker.second) {
            return /^(\d|[0-1]\d|2[0-3]):(\d|[0-5]\d):(\d|[0-5]\d)$/;
        } else {
            return /^(\d|[0-1]\d|2[0-3]):(\d|[0-5]\d)$/;
        }
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

    _emitChange(value: Duration | null) {
        this._value = value;
        this._cvaOnChange(value);
        this._valueChange.emit(value);
        this.timeInput.emit(new MateTimepickerInputEvent(this, this._elementRef.nativeElement));
    }

    @HostListener('input', ['$event.target.value'])
    _onInput(value: string) {
        const lastValueValid = this._lastValueValid;
        if (this._timepicker.repair || value == null || value.length === 0 ||
            this._validateRegex().test(value)) {
            this._lastValueValid = true;

            const time = this._convertValue(value);
            if (!this.sameTime(this._value, time))
                this._emitChange(time);
            else if (time == null || !lastValueValid)
                this._validatorOnChange();
        } else {
            this._lastValueValid = false;
            this._emitChange(null);
            if (lastValueValid)
                this._validatorOnChange();
        }
    }

    @HostListener('change')
    _onChange() {
        this.timeChange.emit(new MateTimepickerInputEvent(this, this._elementRef.nativeElement));
    }

    @HostListener('blur')
    _onBlur() {
        // Reformat the input only if we have a valid value.
        if (this._timepicker.repair || this._lastValueValid) {
            this._formatValue(this.value);
        }
        this._onTouched();
    }

    _getThemePalette(): ThemePalette {
        return this._formField ? this._formField.color : undefined;
    }

    reformatValue() {
        this._formatValue(this.value);
    }

    sameTime(v1: Duration | null, v2: Duration | null): boolean {
        return TimepickerUtil.isEqualsDeep(v1, v2) || v1 != null && v2 != null && typeof v1.equals === 'function' && v1.equals(v2);
    }

    _convertValue(value: any): Duration | null {
        if (value && !(value instanceof Duration)) {
            if (typeof value === 'string') {
                return Duration.fromString(value);
            } else if (typeof value === 'number') {
                return Duration.fromMillis(value);
            } else if (value instanceof Date) {
                return Duration.fromDate(value);
            } else {
                return null;
            }
        }
        return value;
    }

    private _formatValue(value: Duration | null) {
        let timeValue = '';
        if (value instanceof Duration) {
            timeValue = `${this._decimalPipe.transform(value.hour, '2.0')}:${this._decimalPipe.transform(value.minute, '2.0')}`;
            if (this._timepicker.second) {
                timeValue = typeof value.second === 'number' ?
                    `${timeValue}:${this._decimalPipe.transform(value.second, '2.0')}` : '';
            }
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
