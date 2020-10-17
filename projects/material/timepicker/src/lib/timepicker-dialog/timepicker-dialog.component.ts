import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {ClockChange, ClockType, Duration} from '../timepicker.model';

@Component({
    selector: 'mate-timepicker-dialog',
    templateUrl: './timepicker-dialog.component.html',
    styleUrls: ['./timepicker-dialog.component.scss'],
    host: {
        class: 'mate-timepicker-dialog'
    },
    exportAs: 'mateTimepickerDialog'
})
export class MateTimepickerDialogComponent implements OnInit {
    private _value: Duration;
    public clockActive: ClockType = 'hour';
    public valueActive = 0;

    @Input()
    public second: boolean = false;

    @Input()
    public defaultValue: Duration;

    @Input()
    public set value(value: Duration) {
        if (value) {
            this._value = value;
        } else if (this.defaultValue) {
            this._value = this.defaultValue.clone();
        } else {
            this._value = Duration.now(this.second);
        }
        this.valueActive = this._value.getValue(this.clockActive);
    }

    public get value(): Duration {
        return this._value;
    }

    @Output()
    public change = new EventEmitter<Duration>();

    @Output()
    public cancel = new EventEmitter<void>();

    constructor() {
    }

    ngOnInit() {
        if (!this._value) {
            this._value = Duration.now(this.second);
        }
        this.valueActive = this._value.getValue(this.clockActive);
    }

    onActive(type: ClockType) {
        this.clockActive = type;
        this.valueActive = this._value.getValue(type);
    }

    onChange(value: ClockChange) {
        this._value = this._value.setNew(value.type, value.value);
        this.valueActive = value.value;
    }

    onSwitch() {
        if (this.clockActive === 'hour') {
            this.onActive('minute');
        } else if (this.second && this.clockActive === 'minute') {
            this.onActive('second');
        }
    }

    onClockSwitch(type: string) {
        if (type === 'right') {
            this.onSwitch();
        } else if (type === 'left') {
            if (this.clockActive === 'second') {
                this.onActive('minute');
            } else if (this.clockActive === 'minute') {
                this.onActive('hour');
            }
        } else if (type === 'start' && this.clockActive !== 'hour') {
            this.onActive('hour');
        } else if (type === 'end') {
            if (!this.second && this.clockActive !== 'minute') {
                this.onActive('minute');
            } else if (this.second && this.clockActive !== 'second') {
                this.onActive('second');
            }
        }
    }

    onOk() {
        this.change.emit(this._value);
    }

    onCancel() {
        this.cancel.emit();
    }
}
