import {Directionality} from '@angular/cdk/bidi';
import {coerceBooleanProperty} from '@angular/cdk/coercion';
import {Overlay, OverlayConfig, OverlayRef, PositionStrategy, ScrollStrategy} from '@angular/cdk/overlay';
import {ComponentPortal} from '@angular/cdk/portal';
import {DOCUMENT} from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    ComponentRef,
    EventEmitter,
    Inject,
    InjectionToken,
    Input,
    NgZone,
    OnDestroy,
    OnInit,
    Optional,
    Output,
    ViewContainerRef,
    ViewEncapsulation
} from '@angular/core';
import {CanColor, ThemePalette} from '@angular/material/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {merge, Subject, Subscription} from 'rxjs';
import {filter, take} from 'rxjs/operators';
import {MateTimepickerContentComponent} from '../timepicker-content/timepicker-content.component';
import {MateTimepickerInputDirective} from '../timepicker-input.directive';
import {Duration} from '../timepicker.model';

let timepickerUid = 0;

export const MATE_TIMEPICKER_SCROLL_STRATEGY = new InjectionToken<() => ScrollStrategy>('mate-timepicker-scroll-strategy');

export function MAT_TIMEPICKER_SCROLL_STRATEGY_FACTORY(overlay: Overlay): () => ScrollStrategy {
    return () => overlay.scrollStrategies.block();
}

export const MATE_TIMEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER = {
    provide: MATE_TIMEPICKER_SCROLL_STRATEGY,
    deps: [Overlay],
    useFactory: MAT_TIMEPICKER_SCROLL_STRATEGY_FACTORY
};

@Component({
    selector: 'mate-timepicker',
    template: '',
    exportAs: 'mateTimepicker',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class MateTimepickerComponent implements OnInit, OnDestroy, CanColor {
    private _scrollStrategy: () => ScrollStrategy;
    private _second: boolean = false;
    private _opened = false;
    private _color: ThemePalette;
    private _touchUi = document.documentElement['ontouchstart'] !== undefined;
    private _disabled: boolean;
    private _validSelected: Duration | null = null;
    private _popupRef: OverlayRef;
    private _dialogRef: MatDialogRef<MateTimepickerContentComponent> | null;
    private _timepickerPortal: ComponentPortal<MateTimepickerContentComponent>;
    private _popupComponentRef: ComponentRef<MateTimepickerContentComponent> | null;
    private _focusedElementBeforeOpen: HTMLElement | null = null;
    private _inputSubscription = Subscription.EMPTY;
    public _timepickerInput: MateTimepickerInputDirective;
    public id = `mate-timepicker-${timepickerUid++}`;

    public defaultColor: ThemePalette | undefined;

    readonly _disabledChange = new Subject<boolean>();
    readonly _selectedChanged = new Subject<Duration>();

    get _selected(): Duration | null {
        return this._validSelected;
    }

    set _selected(value: Duration | null) {
        this._validSelected = value;
    }

    @Input()
    get touchUi(): boolean {
        return this._touchUi;
    }

    set touchUi(value: boolean) {
        this._touchUi = coerceBooleanProperty(value);
    }

    @Input()
    get opened(): boolean {
        return this._opened;
    }

    set opened(value: boolean) {
        value ? this.open() : this.close();
    }

    @Input()
    get disabled(): boolean {
        return this._disabled === undefined && this._timepickerInput ?
            this._timepickerInput.disabled : !!this._disabled;
    }

    set disabled(value: boolean) {
        const newValue = coerceBooleanProperty(value);

        if (newValue !== this._disabled) {
            this._disabled = newValue;
            this._disabledChange.next(newValue);
        }
    }

    @Input()
    set color(value: ThemePalette) {
        this._color = value;
    }

    get color(): ThemePalette {
        return this._color || (this._timepickerInput ? this._timepickerInput._getThemePalette() : undefined);
    }

    @Input()
    public set second(value: boolean) {
        const oldValue = this._second;
        this._second = value;
        if (oldValue !== value) {
            this._timepickerInput.reformatValue();
        }
    }

    public get second(): boolean {
        return this._second;
    }

    @Output('opened') openedStream: EventEmitter<void> = new EventEmitter<void>();

    @Output('closed') closedStream: EventEmitter<void> = new EventEmitter<void>();

    constructor(private _dialog: MatDialog,
                private _overlay: Overlay,
                private _ngZone: NgZone,
                private _viewContainerRef: ViewContainerRef,
                @Inject(MATE_TIMEPICKER_SCROLL_STRATEGY) scrollStrategy: any,
                @Optional() private _dir: Directionality,
                @Optional() @Inject(DOCUMENT) private _document: any) {
        this._scrollStrategy = scrollStrategy;
    }

    ngOnInit() {
    }

    ngOnDestroy(): void {
    }

    select(time: Duration): void {
        // let oldValue = this._selected;
        this._selected = time;
        // if (!this._dateAdapter.sameDate(oldValue, this._selected)) {
        this._selectedChanged.next(time);
        // }
        this.close();
    }

    _registerInput(input: MateTimepickerInputDirective): void {
        if (this._timepickerInput) {
            throw Error('A MatDatepicker can only be associated with a single input.');
        }
        this._timepickerInput = input;
        this._inputSubscription = this._timepickerInput._valueChange
            .subscribe((value: Duration | null) => this._selected = value);
    }

    open(): void {
        if (this._opened || this.disabled) {
            return;
        }
        if (!this._timepickerInput) {
            throw Error('Attempted to open an Matpicker with no associated input.');
        }
        if (this._document) {
            this._focusedElementBeforeOpen = this._document.activeElement;
        }

        this.touchUi ? this._openAsDialog() : this._openAsPopup();
        this._opened = true;
        this.openedStream.emit();
    }

    close(): void {
        if (!this._opened) {
            return;
        }
        if (this._popupRef && this._popupRef.hasAttached()) {
            this._popupRef.detach();
        }
        if (this._dialogRef) {
            this._dialogRef.close();
            this._dialogRef = null;
        }
        if (this._timepickerPortal && this._timepickerPortal.isAttached) {
            this._timepickerPortal.detach();
        }

        const completeClose = () => {
            if (this._opened) {
                this._opened = false;
                this.closedStream.emit();
                this._focusedElementBeforeOpen = null;
            }
        };

        if (this._focusedElementBeforeOpen && typeof this._focusedElementBeforeOpen.focus === 'function') {
            this._focusedElementBeforeOpen.focus();
            setTimeout(completeClose);
        } else {
            completeClose();
        }
    }

    private _openAsDialog(): void {
        if (this._dialogRef) {
            this._dialogRef.close();
        }

        this._dialogRef = this._dialog.open<MateTimepickerContentComponent>(MateTimepickerContentComponent, {
            direction: this._dir ? this._dir.value : 'ltr',
            viewContainerRef: this._viewContainerRef,
            panelClass: 'mate-timepicker-dialog',
            width: '280px',
            height: '420px',
            minWidth: 280,
            minHeight: 420
        });

        this._dialogRef.afterClosed().subscribe(() => this.close());
        this._dialogRef.componentInstance.timepicker = this;
        this._setColor();
    }

    private _openAsPopup(): void {
        if (!this._timepickerPortal) {
            this._timepickerPortal = new ComponentPortal<MateTimepickerContentComponent>(MateTimepickerContentComponent,
                this._viewContainerRef);
        }

        if (!this._popupRef) {
            this._createPopup();
        }

        if (!this._popupRef.hasAttached()) {
            this._popupComponentRef = this._popupRef.attach(this._timepickerPortal);
            this._popupComponentRef.instance.timepicker = this;
            this._setColor();

            this._ngZone.onStable.asObservable().pipe(take(1)).subscribe(() => {
                this._popupRef.updatePosition();
            });
        }
    }

    private _createPopup(): void {
        const overlayConfig = new OverlayConfig({
            positionStrategy: this._createPopupPositionStrategy(),
            hasBackdrop: true,
            backdropClass: 'mate-overlay-transparent-backdrop',
            direction: this._dir,
            scrollStrategy: this._scrollStrategy(),
            panelClass: 'mate-timepicker-popup'
        });

        this._popupRef = this._overlay.create(overlayConfig);
        this._popupRef.overlayElement.setAttribute('role', 'dialog');

        merge(
            this._popupRef.backdropClick(),
            this._popupRef.detachments(),
            this._popupRef.keydownEvents().pipe(filter(event => {
                return event.code === 'Escape' || (this._timepickerInput && event.altKey && event.code === 'ArrowUp');
            }))
        ).subscribe(event => {
            if (event) {
                event.preventDefault();
            }
            this.close();
        });
    }

    private _createPopupPositionStrategy(): PositionStrategy {
        return this._overlay.position()
            .flexibleConnectedTo(this._timepickerInput.getConnectedOverlayOrigin())
            .withTransformOriginOn('.mate-timepicker-content')
            .withFlexibleDimensions(false)
            .withViewportMargin(8)
            .withLockedPosition()
            .withPositions([
                {
                    originX: 'start',
                    originY: 'bottom',
                    overlayX: 'start',
                    overlayY: 'center'
                },
                {
                    originX: 'start',
                    originY: 'top',
                    overlayX: 'start',
                    overlayY: 'center'
                },
                {
                    originX: 'end',
                    originY: 'bottom',
                    overlayX: 'end',
                    overlayY: 'center'
                },
                {
                    originX: 'end',
                    originY: 'top',
                    overlayX: 'end',
                    overlayY: 'center'
                }
            ]);
    }

    private _setColor(): void {
        const color = this.color;
        if (this._popupComponentRef) {
            this._popupComponentRef.instance.color = color;
        }
        if (this._dialogRef) {
            this._dialogRef.componentInstance.color = color;
        }
    }
}
