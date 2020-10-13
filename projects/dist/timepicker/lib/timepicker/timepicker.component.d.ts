import { Directionality } from '@angular/cdk/bidi';
import { Overlay, ScrollStrategy } from '@angular/cdk/overlay';
import { EventEmitter, InjectionToken, NgZone, OnDestroy, OnInit, ViewContainerRef } from '@angular/core';
import { CanColor, ThemePalette } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { MateTimepickerInputDirective } from '../timepicker-input.directive';
import { Duration } from '../timepicker.model';
import * as i0 from "@angular/core";
export declare const MATE_TIMEPICKER_SCROLL_STRATEGY: InjectionToken<() => ScrollStrategy>;
export declare function MAT_TIMEPICKER_SCROLL_STRATEGY_FACTORY(overlay: Overlay): () => ScrollStrategy;
export declare const MATE_TIMEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER: {
    provide: InjectionToken<() => ScrollStrategy>;
    deps: (typeof Overlay)[];
    useFactory: typeof MAT_TIMEPICKER_SCROLL_STRATEGY_FACTORY;
};
export declare class MateTimepickerComponent implements OnInit, OnDestroy, CanColor {
    private _dialog;
    private _overlay;
    private _ngZone;
    private _viewContainerRef;
    private _dir;
    private _document;
    private _scrollStrategy;
    private _second;
    private _opened;
    private _color;
    private _touchUi;
    private _disabled;
    private _validSelected;
    private _popupRef;
    private _dialogRef;
    private _timepickerPortal;
    private _popupComponentRef;
    private _focusedElementBeforeOpen;
    private _inputSubscription;
    _timepickerInput: MateTimepickerInputDirective;
    id: string;
    defaultColor: ThemePalette | undefined;
    readonly _disabledChange: Subject<boolean>;
    readonly _selectedChanged: Subject<Duration>;
    get _selected(): Duration | null;
    set _selected(value: Duration | null);
    get touchUi(): boolean;
    set touchUi(value: boolean);
    get opened(): boolean;
    set opened(value: boolean);
    get disabled(): boolean;
    set disabled(value: boolean);
    set color(value: ThemePalette);
    get color(): ThemePalette;
    set second(value: boolean);
    get second(): boolean;
    openedStream: EventEmitter<void>;
    closedStream: EventEmitter<void>;
    constructor(_dialog: MatDialog, _overlay: Overlay, _ngZone: NgZone, _viewContainerRef: ViewContainerRef, scrollStrategy: any, _dir: Directionality, _document: any);
    ngOnInit(): void;
    ngOnDestroy(): void;
    select(time: Duration): void;
    _registerInput(input: MateTimepickerInputDirective): void;
    open(): void;
    close(): void;
    private _openAsDialog;
    private _openAsPopup;
    private _createPopup;
    private _createPopupPositionStrategy;
    private _setColor;
    static ɵfac: i0.ɵɵFactoryDef<MateTimepickerComponent, [null, null, null, null, null, { optional: true; }, { optional: true; }]>;
    static ɵcmp: i0.ɵɵComponentDefWithMeta<MateTimepickerComponent, "mate-timepicker", ["mateTimepicker"], { "touchUi": "touchUi"; "opened": "opened"; "disabled": "disabled"; "color": "color"; "second": "second"; }, { "openedStream": "opened"; "closedStream": "closed"; }, never, never>;
}
//# sourceMappingURL=timepicker.component.d.ts.map