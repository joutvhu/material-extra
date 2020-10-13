import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
    selector: 'mate-timepicker-dialog-footer',
    templateUrl: './timepicker-dialog-footer.component.html',
    styleUrls: ['./timepicker-dialog-footer.component.scss'],
    host: {
        class: 'mate-timepicker-dialog-footer'
    },
    exportAs: 'mateTimepickerDialogFooter'
})
export class MateTimepickerDialogFooterComponent implements OnInit {
    @Output()
    public clickOk = new EventEmitter<void>();

    @Output()
    public clickCancel = new EventEmitter<void>();

    constructor() {
    }

    ngOnInit() {
    }
}
