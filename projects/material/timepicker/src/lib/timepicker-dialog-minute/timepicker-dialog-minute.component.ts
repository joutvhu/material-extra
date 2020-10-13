import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

import {MateTimepickerFace} from '../timepicker-face/timepicker-face.directive';

@Component({
    selector: 'mate-timepicker-dialog-minute',
    templateUrl: './timepicker-dialog-minute.component.html',
    styleUrls: ['./timepicker-dialog-minute.component.scss'],
    exportAs: 'mateTimepickerDialogMinute'
})
export class MateTimepickerDialogMinuteComponent extends MateTimepickerFace implements OnInit {
    public readonly step = 6;
    public readonly values = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];
    public readonly outerValues = Array.from(Array(60).keys());

    @ViewChild('clockFace', {static: true})
    public clockFace: ElementRef;

    @Input()
    public value;

    @Output()
    public change = new EventEmitter<number>();

    @Output()
    public finish = new EventEmitter<number>();

    constructor() {
        super();
    }

    public ngOnInit() {
    }

    public onChange(value: number) {
        this.value = value;
        this.change.emit(this.value);
    }

    public valueChange(add: number) {
        add += this.value;
        if (add < 0) {
            add = 59;
        }
        if (add > 59) {
            add = 0;
        }

        this.value = add;
        this.change.emit(this.value);
    }

    public onFinish() {
        this.finish.emit();
    }
}
