import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ClockChange, ClockType} from '../timepicker.model';

@Component({
    selector: 'mate-timepicker-dialog-body',
    templateUrl: './timepicker-dialog-body.component.html',
    styleUrls: ['./timepicker-dialog-body.component.scss'],
    host: {
        class: 'mate-timepicker-dialog-body'
    },
    exportAs: 'mateTimepickerDialogBody'
})
export class MateTimepickerDialogBodyComponent implements OnInit {
    @Input()
    public type: ClockType = 'hour';

    @Input()
    public value;

    @Output()
    public change = new EventEmitter<ClockChange>();

    @Output()
    public switchClock = new EventEmitter<string>();

    @Output()
    public enterPress = new EventEmitter<void>();

    @Output()
    public finish = new EventEmitter<number>();

    constructor() {
    }

    ngOnInit() {
    }

    onChange(value: number) {
        this.value = value;

        this.change.emit({
            type: this.type,
            value: this.value
        });
    }
}
