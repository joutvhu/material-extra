import { AfterContentInit, ChangeDetectorRef, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MateTimepickerIntlService } from '../timepicker-intl.service';
import { MateTimepickerComponent } from '../timepicker/timepicker.component';
import * as i0 from "@angular/core";
export declare class MateTimepickerToggleIconDirective {
    static ɵfac: i0.ɵɵFactoryDef<MateTimepickerToggleIconDirective, never>;
    static ɵdir: i0.ɵɵDirectiveDefWithMeta<MateTimepickerToggleIconDirective, "[mateTimepickerToggleIcon]", never, {}, {}, never>;
}
export declare class MateTimepickerToggleComponent implements AfterContentInit, OnChanges, OnDestroy {
    _intl: MateTimepickerIntlService;
    private _changeDetectorRef;
    private _stateChanges;
    private _disabled;
    timepicker: MateTimepickerComponent;
    tabIndex: number | null;
    set disabled(value: boolean);
    get disabled(): boolean;
    disableRipple: boolean;
    _customIcon: MateTimepickerToggleIconDirective;
    _button: MatButton;
    constructor(_intl: MateTimepickerIntlService, _changeDetectorRef: ChangeDetectorRef, defaultTabIndex: string);
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    ngAfterContentInit(): void;
    _open(event: Event): void;
    private _watchStateChanges;
    static ɵfac: i0.ɵɵFactoryDef<MateTimepickerToggleComponent, [null, null, { attribute: "tabindex"; }]>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<MateTimepickerToggleComponent, "mate-timepicker-toggle", ["matetimepickerToggle"], { "timepicker": "for"; "tabIndex": "tabIndex"; "disabled": "disabled"; "disableRipple": "disableRipple"; }, {}, ["_customIcon"], ["[mateTimepickerToggleIcon]"]>;
}
//# sourceMappingURL=timepicker-toggle.component.d.ts.map