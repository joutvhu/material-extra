import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {CanColor, ThemePalette} from '@angular/material/core';

import {MateTimepickerFace} from '../timepicker-face/timepicker-face.directive';

@Component({
    selector: 'mate-timepicker-dialog-hour',
    templateUrl: './timepicker-dialog-hour.component.html',
    styleUrls: ['./timepicker-dialog-hour.component.scss'],
    exportAs: 'mateTimepickerDialogHour'
})
export class MateTimepickerDialogHourComponent extends MateTimepickerFace implements OnInit, CanColor {
    public readonly step = 30;
    public readonly outerValues = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    public readonly innerValues = [0, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];

    @ViewChild('clockFace', {static: true})
    public clockFace: ElementRef;

    @Input()
    public value;

    public color: ThemePalette;

    @Output()
    public change = new EventEmitter<number>();

    @Output()
    public finish = new EventEmitter<number>();

    public defaultColor: ThemePalette | undefined;

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
            add = 23;
        }
        if (add > 23) {
            add = 0;
        }

        this.value = add;
        this.change.emit(this.value);
    }

    public onFinish() {
        this.finish.emit();
    }
}
