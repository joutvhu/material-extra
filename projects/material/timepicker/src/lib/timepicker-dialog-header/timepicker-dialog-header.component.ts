import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {ClockType, Duration} from '../timepicker.model';

@Component({
    selector: 'mate-timepicker-dialog-header',
    templateUrl: './timepicker-dialog-header.component.html',
    styleUrls: ['./timepicker-dialog-header.component.scss'],
    host: {
        class: 'mate-timepicker-dialog-header'
    },
    exportAs: 'mateTimepickerDialogHeader'
})
export class MateTimepickerDialogHeaderComponent implements OnInit {
    @Input()
    public type: ClockType = 'hour';

    @Input()
    public second: boolean = false;

    @Input()
    public value: Duration;

    @Output()
    public active = new EventEmitter<ClockType>();

    constructor() {
    }

    ngOnInit() {
    }

    onActive(type: ClockType) {
        this.type = type;
        this.active.emit(type);
    }
}
