import {AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, ViewEncapsulation} from '@angular/core';
import {CanColor, CanColorCtor, mixinColor, ThemePalette} from '@angular/material/core';
import {MateTimepickerComponent} from '../timepicker/timepicker.component';

class MateTimepickerContentBase {
    constructor(public _elementRef: ElementRef) {
    }
}

const _MateTimepickerContentMixinBase: CanColorCtor & typeof MateTimepickerContentBase = mixinColor(MateTimepickerContentBase);

@Component({
    selector: 'mate-timepicker-content',
    templateUrl: './timepicker-content.component.html',
    styleUrls: ['./timepicker-content.component.scss'],
    host: {
        class: 'mate-timepicker-content',
        // '[@transformPanel]': '"enter"',
        '[class.mate-timepicker-content-touch]': 'timepicker.touchUi'
    },
    animations: [
        // matDatepickerAnimations.transformPanel,
        // matDatepickerAnimations.fadeInCalendar
    ],
    exportAs: 'mateTimepickerContent',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    inputs: ['color']
})
export class MateTimepickerContentComponent extends _MateTimepickerContentMixinBase implements AfterViewInit, CanColor {
    public color: ThemePalette;
    public timepicker: MateTimepickerComponent;

    constructor(elementRef: ElementRef) {
        super(elementRef);
    }

    ngAfterViewInit(): void {
    }
}
