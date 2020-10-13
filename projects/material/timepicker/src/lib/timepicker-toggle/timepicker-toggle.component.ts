import {coerceBooleanProperty} from '@angular/cdk/coercion';
import {
    AfterContentInit,
    Attribute,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ContentChild,
    Directive,
    Input,
    OnChanges,
    OnDestroy,
    SimpleChanges,
    ViewChild,
    ViewEncapsulation
} from '@angular/core';
import {MatButton} from '@angular/material/button';
import {merge, of as observableOf, Subscription} from 'rxjs';

import {MateTimepickerIntlService} from '../timepicker-intl.service';
import {MateTimepickerComponent} from '../timepicker/timepicker.component';

@Directive({
    selector: '[mateTimepickerToggleIcon]'
})
export class MateTimepickerToggleIconDirective {
}

@Component({
    selector: 'mate-timepicker-toggle',
    templateUrl: './timepicker-toggle.component.html',
    styleUrls: ['./timepicker-toggle.component.scss'],
    host: {
        class: 'mate-timepicker-toggle',
        '[attr.tabindex]': 'disabled ? null : -1',
        '[class.mate-timepicker-toggle-active]': 'timepicker && timepicker.opened',
        '[class.mat-accent]': 'timepicker && timepicker.color === "accent"',
        '[class.mat-warn]': 'timepicker && timepicker.color === "warn"',
        '(focus)': '_button.focus()'
    },
    exportAs: 'matetimepickerToggle',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MateTimepickerToggleComponent implements AfterContentInit, OnChanges, OnDestroy {
    private _stateChanges = Subscription.EMPTY;

    private _disabled: boolean;

    @Input('for') timepicker: MateTimepickerComponent;

    @Input() tabIndex: number | null;

    @Input()
    set disabled(value: boolean) {
        this._disabled = coerceBooleanProperty(value);
    }

    get disabled(): boolean {
        if (this._disabled === undefined && this.timepicker) {
            return this.timepicker.disabled;
        }
        return !!this._disabled;
    }

    @Input() disableRipple: boolean;

    @ContentChild(MateTimepickerToggleIconDirective, {static: false}) _customIcon: MateTimepickerToggleIconDirective;

    @ViewChild('button', {static: false}) _button: MatButton;

    constructor(
        public _intl: MateTimepickerIntlService,
        private _changeDetectorRef: ChangeDetectorRef,
        @Attribute('tabindex') defaultTabIndex: string) {

        const parsedTabIndex = Number(defaultTabIndex);
        this.tabIndex = (parsedTabIndex || parsedTabIndex === 0) ? parsedTabIndex : null;
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes['Timepicker']) {
            this._watchStateChanges();
        }
    }

    ngOnDestroy() {
        this._stateChanges.unsubscribe();
    }

    ngAfterContentInit() {
        this._watchStateChanges();
    }

    _open(event: Event): void {
        if (this.timepicker && !this.disabled) {
            this.timepicker.open();
            event.stopPropagation();
        }
    }

    private _watchStateChanges() {
        const TimepickerDisabled = this.timepicker ? this.timepicker._disabledChange : observableOf();
        const inputDisabled = this.timepicker && this.timepicker._timepickerInput ?
            this.timepicker._timepickerInput._disabledChange : observableOf();
        const TimepickerToggled = this.timepicker ?
            merge(this.timepicker.openedStream, this.timepicker.closedStream) :
            observableOf();

        this._stateChanges.unsubscribe();
        this._stateChanges = merge(
            this._intl.changes,
            TimepickerDisabled,
            inputDisabled,
            TimepickerToggled
        ).subscribe(() => this._changeDetectorRef.markForCheck());
    }
}
