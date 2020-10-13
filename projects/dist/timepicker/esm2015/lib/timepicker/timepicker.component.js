import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Inject, InjectionToken, Input, Optional, Output, ViewEncapsulation } from '@angular/core';
import { merge, Subject, Subscription } from 'rxjs';
import { filter, take } from 'rxjs/operators';
import { MateTimepickerContentComponent } from '../timepicker-content/timepicker-content.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "@angular/cdk/overlay";
import * as i3 from "@angular/cdk/bidi";
let timepickerUid = 0;
export const MATE_TIMEPICKER_SCROLL_STRATEGY = new InjectionToken('mate-timepicker-scroll-strategy');
export function MAT_TIMEPICKER_SCROLL_STRATEGY_FACTORY(overlay) {
    return () => overlay.scrollStrategies.block();
}
export const MATE_TIMEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER = {
    provide: MATE_TIMEPICKER_SCROLL_STRATEGY,
    deps: [Overlay],
    useFactory: MAT_TIMEPICKER_SCROLL_STRATEGY_FACTORY
};
export class MateTimepickerComponent {
    constructor(_dialog, _overlay, _ngZone, _viewContainerRef, scrollStrategy, _dir, _document) {
        this._dialog = _dialog;
        this._overlay = _overlay;
        this._ngZone = _ngZone;
        this._viewContainerRef = _viewContainerRef;
        this._dir = _dir;
        this._document = _document;
        this._second = false;
        this._opened = false;
        this._touchUi = document.documentElement['ontouchstart'] !== undefined;
        this._validSelected = null;
        this._focusedElementBeforeOpen = null;
        this._inputSubscription = Subscription.EMPTY;
        this.id = `mate-timepicker-${timepickerUid++}`;
        this._disabledChange = new Subject();
        this._selectedChanged = new Subject();
        this.openedStream = new EventEmitter();
        this.closedStream = new EventEmitter();
        this._scrollStrategy = scrollStrategy;
    }
    get _selected() {
        return this._validSelected;
    }
    set _selected(value) {
        this._validSelected = value;
    }
    get touchUi() {
        return this._touchUi;
    }
    set touchUi(value) {
        this._touchUi = coerceBooleanProperty(value);
    }
    get opened() {
        return this._opened;
    }
    set opened(value) {
        value ? this.open() : this.close();
    }
    get disabled() {
        return this._disabled === undefined && this._timepickerInput ?
            this._timepickerInput.disabled : !!this._disabled;
    }
    set disabled(value) {
        const newValue = coerceBooleanProperty(value);
        if (newValue !== this._disabled) {
            this._disabled = newValue;
            this._disabledChange.next(newValue);
        }
    }
    set color(value) {
        this._color = value;
    }
    get color() {
        return this._color || (this._timepickerInput ? this._timepickerInput._getThemePalette() : undefined);
    }
    set second(value) {
        const oldValue = this._second;
        this._second = value;
        if (oldValue !== value) {
            this._timepickerInput.reformatValue();
        }
    }
    get second() {
        return this._second;
    }
    ngOnInit() {
    }
    ngOnDestroy() {
    }
    select(time) {
        // let oldValue = this._selected;
        this._selected = time;
        // if (!this._dateAdapter.sameDate(oldValue, this._selected)) {
        this._selectedChanged.next(time);
        // }
        this.close();
    }
    _registerInput(input) {
        if (this._timepickerInput) {
            throw Error('A MatDatepicker can only be associated with a single input.');
        }
        this._timepickerInput = input;
        this._inputSubscription = this._timepickerInput._valueChange
            .subscribe((value) => this._selected = value);
    }
    open() {
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
    close() {
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
        }
        else {
            completeClose();
        }
    }
    _openAsDialog() {
        if (this._dialogRef) {
            this._dialogRef.close();
        }
        this._dialogRef = this._dialog.open(MateTimepickerContentComponent, {
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
    _openAsPopup() {
        if (!this._timepickerPortal) {
            this._timepickerPortal = new ComponentPortal(MateTimepickerContentComponent, this._viewContainerRef);
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
    _createPopup() {
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
        merge(this._popupRef.backdropClick(), this._popupRef.detachments(), this._popupRef.keydownEvents().pipe(filter(event => {
            return event.code === 'Escape' || (this._timepickerInput && event.altKey && event.code === 'ArrowUp');
        }))).subscribe(event => {
            if (event) {
                event.preventDefault();
            }
            this.close();
        });
    }
    _createPopupPositionStrategy() {
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
    _setColor() {
        const color = this.color;
        if (this._popupComponentRef) {
            this._popupComponentRef.instance.color = color;
        }
        if (this._dialogRef) {
            this._dialogRef.componentInstance.color = color;
        }
    }
}
MateTimepickerComponent.ɵfac = function MateTimepickerComponent_Factory(t) { return new (t || MateTimepickerComponent)(i0.ɵɵdirectiveInject(i1.MatDialog), i0.ɵɵdirectiveInject(i2.Overlay), i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(MATE_TIMEPICKER_SCROLL_STRATEGY), i0.ɵɵdirectiveInject(i3.Directionality, 8), i0.ɵɵdirectiveInject(DOCUMENT, 8)); };
MateTimepickerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MateTimepickerComponent, selectors: [["mate-timepicker"]], inputs: { touchUi: "touchUi", opened: "opened", disabled: "disabled", color: "color", second: "second" }, outputs: { openedStream: "opened", closedStream: "closed" }, exportAs: ["mateTimepicker"], decls: 0, vars: 0, template: function MateTimepickerComponent_Template(rf, ctx) { }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MateTimepickerComponent, [{
        type: Component,
        args: [{
                selector: 'mate-timepicker',
                template: '',
                exportAs: 'mateTimepicker',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: i1.MatDialog }, { type: i2.Overlay }, { type: i0.NgZone }, { type: i0.ViewContainerRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [MATE_TIMEPICKER_SCROLL_STRATEGY]
            }] }, { type: i3.Directionality, decorators: [{
                type: Optional
            }] }, { type: undefined, decorators: [{
                type: Optional
            }, {
                type: Inject,
                args: [DOCUMENT]
            }] }]; }, { touchUi: [{
            type: Input
        }], opened: [{
            type: Input
        }], disabled: [{
            type: Input
        }], color: [{
            type: Input
        }], second: [{
            type: Input
        }], openedStream: [{
            type: Output,
            args: ['opened']
        }], closedStream: [{
            type: Output,
            args: ['closed']
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiRDovRG9jdW1lbnQvTGlicmFyeS9Bbmd1bGFyL21hdGVyaWFsLWV4dHJhL3Byb2plY3RzL21hdGVyaWFsL3RpbWVwaWNrZXIvc3JjLyIsInNvdXJjZXMiOlsibGliL3RpbWVwaWNrZXIvdGltZXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDNUQsT0FBTyxFQUFDLE9BQU8sRUFBRSxhQUFhLEVBQStDLE1BQU0sc0JBQXNCLENBQUM7QUFDMUcsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ3BELE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQ0gsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFFVCxZQUFZLEVBQ1osTUFBTSxFQUNOLGNBQWMsRUFDZCxLQUFLLEVBSUwsUUFBUSxFQUNSLE1BQU0sRUFFTixpQkFBaUIsRUFDcEIsTUFBTSxlQUFlLENBQUM7QUFHdkIsT0FBTyxFQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBQ2xELE9BQU8sRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUMsT0FBTyxFQUFDLDhCQUE4QixFQUFDLE1BQU0sb0RBQW9ELENBQUM7Ozs7O0FBSWxHLElBQUksYUFBYSxHQUFHLENBQUMsQ0FBQztBQUV0QixNQUFNLENBQUMsTUFBTSwrQkFBK0IsR0FBRyxJQUFJLGNBQWMsQ0FBdUIsaUNBQWlDLENBQUMsQ0FBQztBQUUzSCxNQUFNLFVBQVUsc0NBQXNDLENBQUMsT0FBZ0I7SUFDbkUsT0FBTyxHQUFHLEVBQUUsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDbEQsQ0FBQztBQUVELE1B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QUs7WUFnQkYsS0FBSztrQkFEUixLQUFLO1lBVUssTUFBTTtrQkFEaEIsS0FBSztZQWFZLFlBQVk7a0JBQTdCLE1BQU07bUJBQUMsUUFBUTtZQUVFLFlBQVk7a0JBQTdCLE1BQU07bUJBQUMsUUFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aW9uYWxpdHl9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcclxuaW1wb3J0IHtjb2VyY2VCb29sZWFuUHJvcGVydHl9IGZyb20gJ0Bhbmd1bGFyL2Nkay9jb2VyY2lvbic7XHJcbmltcG9ydCB7T3ZlcmxheSwgT3ZlcmxheUNvbmZpZywgT3ZlcmxheVJlZiwgUG9zaXRpb25TdHJhdGVneSwgU2Nyb2xsU3RyYXRlZ3l9IGZyb20gJ0Bhbmd1bGFyL2Nkay9vdmVybGF5JztcclxuaW1wb3J0IHtDb21wb25lbnRQb3J0YWx9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xyXG5pbXBvcnQge0RPQ1VNRU5UfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge1xyXG4gICAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgICBDb21wb25lbnQsXHJcbiAgICBDb21wb25lbnRSZWYsXHJcbiAgICBFdmVudEVtaXR0ZXIsXHJcbiAgICBJbmplY3QsXHJcbiAgICBJbmplY3Rpb25Ub2tlbixcclxuICAgIElucHV0LFxyXG4gICAgTmdab25lLFxyXG4gICAgT25EZXN0cm95LFxyXG4gICAgT25Jbml0LFxyXG4gICAgT3B0aW9uYWwsXHJcbiAgICBPdXRwdXQsXHJcbiAgICBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtDYW5Db2xvciwgVGhlbWVQYWxldHRlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcclxuaW1wb3J0IHtNYXREaWFsb2csIE1hdERpYWxvZ1JlZn0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcclxuaW1wb3J0IHttZXJnZSwgU3ViamVjdCwgU3Vic2NyaXB0aW9ufSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHtmaWx0ZXIsIHRha2V9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHtNYXRlVGltZXBpY2tlckNvbnRlbnRDb21wb25lbnR9IGZyb20gJy4uL3RpbWVwaWNrZXItY29udGVudC90aW1lcGlja2VyLWNvbnRlbnQuY29tcG9uZW50JztcclxuaW1wb3J0IHtNYXRlVGltZXBpY2tlcklucHV0RGlyZWN0aXZlfSBmcm9tICcuLi90aW1lcGlja2VyLWlucHV0LmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7RHVyYXRpb259IGZyb20gJy4uL3RpbWVwaWNrZXIubW9kZWwnO1xyXG5cclxubGV0IHRpbWVwaWNrZXJVaWQgPSAwO1xyXG5cclxuZXhwb3J0IGNvbnN0IE1BVEVfVElNRVBJQ0tFUl9TQ1JPTExfU1RSQVRFR1kgPSBuZXcgSW5qZWN0aW9uVG9rZW48KCkgPT4gU2Nyb2xsU3RyYXRlZ3k+KCdtYXRlLXRpbWVwaWNrZXItc2Nyb2xsLXN0cmF0ZWd5Jyk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTUFUX1RJTUVQSUNLRVJfU0NST0xMX1NUUkFURUdZX0ZBQ1RPUlkob3ZlcmxheTogT3ZlcmxheSk6ICgpID0+IFNjcm9sbFN0cmF0ZWd5IHtcclxuICAgIHJldHVybiAoKSA9PiBvdmVybGF5LnNjcm9sbFN0cmF0ZWdpZXMuYmxvY2soKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IE1BVEVfVElNRVBJQ0tFUl9TQ1JPTExfU1RSQVRFR1lfRkFDVE9SWV9QUk9WSURFUiA9IHtcclxuICAgIHByb3ZpZGU6IE1BVEVfVElNRVBJQ0tFUl9TQ1JPTExfU1RSQVRFR1ksXHJcbiAgICBkZXBzOiBbT3ZlcmxheV0sXHJcbiAgICB1c2VGYWN0b3J5OiBNQVRfVElNRVBJQ0tFUl9TQ1JPTExfU1RSQVRFR1lfRkFDVE9SWVxyXG59O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ21hdGUtdGltZXBpY2tlcicsXHJcbiAgICB0ZW1wbGF0ZTogJycsXHJcbiAgICBleHBvcnRBczogJ21hdGVUaW1lcGlja2VyJyxcclxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWF0ZVRpbWVwaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgQ2FuQ29sb3Ige1xyXG4gICAgcHJpdmF0ZSBfc2Nyb2xsU3RyYXRlZ3k6ICgpID0+IFNjcm9sbFN0cmF0ZWd5O1xyXG4gICAgcHJpdmF0ZSBfc2Vjb25kOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIF9vcGVuZWQgPSBmYWxzZTtcclxuICAgIHByaXZhdGUgX2NvbG9yOiBUaGVtZVBhbGV0dGU7XHJcbiAgICBwcml2YXRlIF90b3VjaFVpID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50WydvbnRvdWNoc3RhcnQnXSAhPT0gdW5kZWZpbmVkO1xyXG4gICAgcHJpdmF0ZSBfZGlzYWJsZWQ6IGJvb2xlYW47XHJcbiAgICBwcml2YXRlIF92YWxpZFNlbGVjdGVkOiBEdXJhdGlvbiB8IG51bGwgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBfcG9wdXBSZWY6IE92ZXJsYXlSZWY7XHJcbiAgICBwcml2YXRlIF9kaWFsb2dSZWY6IE1hdERpYWxvZ1JlZjxNYXRlVGltZXBpY2tlckNvbnRlbnRDb21wb25lbnQ+IHwgbnVsbDtcclxuICAgIHByaXZhdGUgX3RpbWVwaWNrZXJQb3J0YWw6IENvbXBvbmVudFBvcnRhbDxNYXRlVGltZXBpY2tlckNvbnRlbnRDb21wb25lbnQ+O1xyXG4gICAgcHJpdmF0ZSBfcG9wdXBDb21wb25lbnRSZWY6IENvbXBvbmVudFJlZjxNYXRlVGltZXBpY2tlckNvbnRlbnRDb21wb25lbnQ+IHwgbnVsbDtcclxuICAgIHByaXZhdGUgX2ZvY3VzZWRFbGVtZW50QmVmb3JlT3BlbjogSFRNTEVsZW1lbnQgfCBudWxsID0gbnVsbDtcclxuICAgIHByaXZhdGUgX2lucHV0U3Vic2NyaXB0aW9uID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xyXG4gICAgcHVibGljIF90aW1lcGlja2VySW5wdXQ6IE1hdGVUaW1lcGlja2VySW5wdXREaXJlY3RpdmU7XHJcbiAgICBwdWJsaWMgaWQgPSBgbWF0ZS10aW1lcGlja2VyLSR7dGltZXBpY2tlclVpZCsrfWA7XHJcblxyXG4gICAgcHVibGljIGRlZmF1bHRDb2xvcjogVGhlbWVQYWxldHRlIHwgdW5kZWZpbmVkO1xyXG5cclxuICAgIHJlYWRvbmx5IF9kaXNhYmxlZENoYW5nZSA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XHJcbiAgICByZWFkb25seSBfc2VsZWN0ZWRDaGFuZ2VkID0gbmV3IFN1YmplY3Q8RHVyYXRpb24+KCk7XHJcblxyXG4gICAgZ2V0IF9zZWxlY3RlZCgpOiBEdXJhdGlvbiB8IG51bGwge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl92YWxpZFNlbGVjdGVkO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBfc2VsZWN0ZWQodmFsdWU6IER1cmF0aW9uIHwgbnVsbCkge1xyXG4gICAgICAgIHRoaXMuX3ZhbGlkU2VsZWN0ZWQgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IHRvdWNoVWkoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RvdWNoVWk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHRvdWNoVWkodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLl90b3VjaFVpID0gY29lcmNlQm9vbGVhblByb3BlcnR5KHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IG9wZW5lZCgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fb3BlbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIHNldCBvcGVuZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICB2YWx1ZSA/IHRoaXMub3BlbigpIDogdGhpcy5jbG9zZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgZGlzYWJsZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Rpc2FibGVkID09PSB1bmRlZmluZWQgJiYgdGhpcy5fdGltZXBpY2tlcklucHV0ID9cclxuICAgICAgICAgICAgdGhpcy5fdGltZXBpY2tlcklucHV0LmRpc2FibGVkIDogISF0aGlzLl9kaXNhYmxlZDtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgZGlzYWJsZWQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICBjb25zdCBuZXdWYWx1ZSA9IGNvZXJjZUJvb2xlYW5Qcm9wZXJ0eSh2YWx1ZSk7XHJcblxyXG4gICAgICAgIGlmIChuZXdWYWx1ZSAhPT0gdGhpcy5fZGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5fZGlzYWJsZWQgPSBuZXdWYWx1ZTtcclxuICAgICAgICAgICAgdGhpcy5fZGlzYWJsZWRDaGFuZ2UubmV4dChuZXdWYWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBzZXQgY29sb3IodmFsdWU6IFRoZW1lUGFsZXR0ZSkge1xyXG4gICAgICAgIHRoaXMuX2NvbG9yID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGNvbG9yKCk6IFRoZW1lUGFsZXR0ZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbG9yIHx8ICh0aGlzLl90aW1lcGlja2VySW5wdXQgPyB0aGlzLl90aW1lcGlja2VySW5wdXQuX2dldFRoZW1lUGFsZXR0ZSgpIDogdW5kZWZpbmVkKTtcclxuICAgIH1cclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgcHVibGljIHNldCBzZWNvbmQodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICBjb25zdCBvbGRWYWx1ZSA9IHRoaXMuX3NlY29uZDtcclxuICAgICAgICB0aGlzLl9zZWNvbmQgPSB2YWx1ZTtcclxuICAgICAgICBpZiAob2xkVmFsdWUgIT09IHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3RpbWVwaWNrZXJJbnB1dC5yZWZvcm1hdFZhbHVlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgc2Vjb25kKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZWNvbmQ7XHJcbiAgICB9XHJcblxyXG4gICAgQE91dHB1dCgnb3BlbmVkJykgb3BlbmVkU3RyZWFtOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcblxyXG4gICAgQE91dHB1dCgnY2xvc2VkJykgY2xvc2VkU3RyZWFtOiBFdmVudEVtaXR0ZXI8dm9pZD4gPSBuZXcgRXZlbnRFbWl0dGVyPHZvaWQ+KCk7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfZGlhbG9nOiBNYXREaWFsb2csXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIF9vdmVybGF5OiBPdmVybGF5LFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfbmdab25lOiBOZ1pvbmUsXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIF92aWV3Q29udGFpbmVyUmVmOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgICAgICAgICAgICAgQEluamVjdChNQVRFX1RJTUVQSUNLRVJfU0NST0xMX1NUUkFURUdZKSBzY3JvbGxTdHJhdGVneTogYW55LFxyXG4gICAgICAgICAgICAgICAgQE9wdGlvbmFsKCkgcHJpdmF0ZSBfZGlyOiBEaXJlY3Rpb25hbGl0eSxcclxuICAgICAgICAgICAgICAgIEBPcHRpb25hbCgpIEBJbmplY3QoRE9DVU1FTlQpIHByaXZhdGUgX2RvY3VtZW50OiBhbnkpIHtcclxuICAgICAgICB0aGlzLl9zY3JvbGxTdHJhdGVneSA9IHNjcm9sbFN0cmF0ZWd5O1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgfVxyXG5cclxuICAgIHNlbGVjdCh0aW1lOiBEdXJhdGlvbik6IHZvaWQge1xyXG4gICAgICAgIC8vIGxldCBvbGRWYWx1ZSA9IHRoaXMuX3NlbGVjdGVkO1xyXG4gICAgICAgIHRoaXMuX3NlbGVjdGVkID0gdGltZTtcclxuICAgICAgICAvLyBpZiAoIXRoaXMuX2RhdGVBZGFwdGVyLnNhbWVEYXRlKG9sZFZhbHVlLCB0aGlzLl9zZWxlY3RlZCkpIHtcclxuICAgICAgICB0aGlzLl9zZWxlY3RlZENoYW5nZWQubmV4dCh0aW1lKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIF9yZWdpc3RlcklucHV0KGlucHV0OiBNYXRlVGltZXBpY2tlcklucHV0RGlyZWN0aXZlKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3RpbWVwaWNrZXJJbnB1dCkge1xyXG4gICAgICAgICAgICB0aHJvdyBFcnJvcignQSBNYXREYXRlcGlja2VyIGNhbiBvbmx5IGJlIGFzc29jaWF0ZWQgd2l0aCBhIHNpbmdsZSBpbnB1dC4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fdGltZXBpY2tlcklucHV0ID0gaW5wdXQ7XHJcbiAgICAgICAgdGhpcy5faW5wdXRTdWJzY3JpcHRpb24gPSB0aGlzLl90aW1lcGlja2VySW5wdXQuX3ZhbHVlQ2hhbmdlXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoKHZhbHVlOiBEdXJhdGlvbiB8IG51bGwpID0+IHRoaXMuX3NlbGVjdGVkID0gdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIG9wZW4oKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuX29wZW5lZCB8fCB0aGlzLmRpc2FibGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLl90aW1lcGlja2VySW5wdXQpIHtcclxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ0F0dGVtcHRlZCB0byBvcGVuIGFuIE1hdHBpY2tlciB3aXRoIG5vIGFzc29jaWF0ZWQgaW5wdXQuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLl9kb2N1bWVudCkge1xyXG4gICAgICAgICAgICB0aGlzLl9mb2N1c2VkRWxlbWVudEJlZm9yZU9wZW4gPSB0aGlzLl9kb2N1bWVudC5hY3RpdmVFbGVtZW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy50b3VjaFVpID8gdGhpcy5fb3BlbkFzRGlhbG9nKCkgOiB0aGlzLl9vcGVuQXNQb3B1cCgpO1xyXG4gICAgICAgIHRoaXMuX29wZW5lZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5vcGVuZWRTdHJlYW0uZW1pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5fb3BlbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX3BvcHVwUmVmICYmIHRoaXMuX3BvcHVwUmVmLmhhc0F0dGFjaGVkKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5fcG9wdXBSZWYuZGV0YWNoKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLl9kaWFsb2dSZWYpIHtcclxuICAgICAgICAgICAgdGhpcy5fZGlhbG9nUmVmLmNsb3NlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2RpYWxvZ1JlZiA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLl90aW1lcGlja2VyUG9ydGFsICYmIHRoaXMuX3RpbWVwaWNrZXJQb3J0YWwuaXNBdHRhY2hlZCkge1xyXG4gICAgICAgICAgICB0aGlzLl90aW1lcGlja2VyUG9ydGFsLmRldGFjaCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgY29tcGxldGVDbG9zZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX29wZW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fb3BlbmVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlZFN0cmVhbS5lbWl0KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9mb2N1c2VkRWxlbWVudEJlZm9yZU9wZW4gPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2ZvY3VzZWRFbGVtZW50QmVmb3JlT3BlbiAmJiB0eXBlb2YgdGhpcy5fZm9jdXNlZEVsZW1lbnRCZWZvcmVPcGVuLmZvY3VzID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2ZvY3VzZWRFbGVtZW50QmVmb3JlT3Blbi5mb2N1cygpO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGNvbXBsZXRlQ2xvc2UpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbXBsZXRlQ2xvc2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfb3BlbkFzRGlhbG9nKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLl9kaWFsb2dSZWYpIHtcclxuICAgICAgICAgICAgdGhpcy5fZGlhbG9nUmVmLmNsb3NlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9kaWFsb2dSZWYgPSB0aGlzLl9kaWFsb2cub3BlbjxNYXRlVGltZXBpY2tlckNvbnRlbnRDb21wb25lbnQ+KE1hdGVUaW1lcGlja2VyQ29udGVudENvbXBvbmVudCwge1xyXG4gICAgICAgICAgICBkaXJlY3Rpb246IHRoaXMuX2RpciA/IHRoaXMuX2Rpci52YWx1ZSA6ICdsdHInLFxyXG4gICAgICAgICAgICB2aWV3Q29udGFpbmVyUmVmOiB0aGlzLl92aWV3Q29udGFpbmVyUmVmLFxyXG4gICAgICAgICAgICBwYW5lbENsYXNzOiAnbWF0ZS10aW1lcGlja2VyLWRpYWxvZycsXHJcbiAgICAgICAgICAgIHdpZHRoOiAnMjgwcHgnLFxyXG4gICAgICAgICAgICBoZWlnaHQ6ICc0MjBweCcsXHJcbiAgICAgICAgICAgIG1pbldpZHRoOiAyODAsXHJcbiAgICAgICAgICAgIG1pbkhlaWdodDogNDIwXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuX2RpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZSgoKSA9PiB0aGlzLmNsb3NlKCkpO1xyXG4gICAgICAgIHRoaXMuX2RpYWxvZ1JlZi5jb21wb25lbnRJbnN0YW5jZS50aW1lcGlja2VyID0gdGhpcztcclxuICAgICAgICB0aGlzLl9zZXRDb2xvcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX29wZW5Bc1BvcHVwKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5fdGltZXBpY2tlclBvcnRhbCkge1xyXG4gICAgICAgICAgICB0aGlzLl90aW1lcGlja2VyUG9ydGFsID0gbmV3IENvbXBvbmVudFBvcnRhbDxNYXRlVGltZXBpY2tlckNvbnRlbnRDb21wb25lbnQ+KE1hdGVUaW1lcGlja2VyQ29udGVudENvbXBvbmVudCxcclxuICAgICAgICAgICAgICAgIHRoaXMuX3ZpZXdDb250YWluZXJSZWYpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLl9wb3B1cFJlZikge1xyXG4gICAgICAgICAgICB0aGlzLl9jcmVhdGVQb3B1cCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLl9wb3B1cFJlZi5oYXNBdHRhY2hlZCgpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3BvcHVwQ29tcG9uZW50UmVmID0gdGhpcy5fcG9wdXBSZWYuYXR0YWNoKHRoaXMuX3RpbWVwaWNrZXJQb3J0YWwpO1xyXG4gICAgICAgICAgICB0aGlzLl9wb3B1cENvbXBvbmVudFJlZi5pbnN0YW5jZS50aW1lcGlja2VyID0gdGhpcztcclxuICAgICAgICAgICAgdGhpcy5fc2V0Q29sb3IoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX25nWm9uZS5vblN0YWJsZS5hc09ic2VydmFibGUoKS5waXBlKHRha2UoMSkpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9wb3B1cFJlZi51cGRhdGVQb3NpdGlvbigpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfY3JlYXRlUG9wdXAoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3Qgb3ZlcmxheUNvbmZpZyA9IG5ldyBPdmVybGF5Q29uZmlnKHtcclxuICAgICAgICAgICAgcG9zaXRpb25TdHJhdGVneTogdGhpcy5fY3JlYXRlUG9wdXBQb3NpdGlvblN0cmF0ZWd5KCksXHJcbiAgICAgICAgICAgIGhhc0JhY2tkcm9wOiB0cnVlLFxyXG4gICAgICAgICAgICBiYWNrZHJvcENsYXNzOiAnbWF0ZS1vdmVybGF5LXRyYW5zcGFyZW50LWJhY2tkcm9wJyxcclxuICAgICAgICAgICAgZGlyZWN0aW9uOiB0aGlzLl9kaXIsXHJcbiAgICAgICAgICAgIHNjcm9sbFN0cmF0ZWd5OiB0aGlzLl9zY3JvbGxTdHJhdGVneSgpLFxyXG4gICAgICAgICAgICBwYW5lbENsYXNzOiAnbWF0ZS10aW1lcGlja2VyLXBvcHVwJ1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLl9wb3B1cFJlZiA9IHRoaXMuX292ZXJsYXkuY3JlYXRlKG92ZXJsYXlDb25maWcpO1xyXG4gICAgICAgIHRoaXMuX3BvcHVwUmVmLm92ZXJsYXlFbGVtZW50LnNldEF0dHJpYnV0ZSgncm9sZScsICdkaWFsb2cnKTtcclxuXHJcbiAgICAgICAgbWVyZ2UoXHJcbiAgICAgICAgICAgIHRoaXMuX3BvcHVwUmVmLmJhY2tkcm9wQ2xpY2soKSxcclxuICAgICAgICAgICAgdGhpcy5fcG9wdXBSZWYuZGV0YWNobWVudHMoKSxcclxuICAgICAgICAgICAgdGhpcy5fcG9wdXBSZWYua2V5ZG93bkV2ZW50cygpLnBpcGUoZmlsdGVyKGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBldmVudC5jb2RlID09PSAnRXNjYXBlJyB8fCAodGhpcy5fdGltZXBpY2tlcklucHV0ICYmIGV2ZW50LmFsdEtleSAmJiBldmVudC5jb2RlID09PSAnQXJyb3dVcCcpO1xyXG4gICAgICAgICAgICB9KSlcclxuICAgICAgICApLnN1YnNjcmliZShldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGlmIChldmVudCkge1xyXG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfY3JlYXRlUG9wdXBQb3NpdGlvblN0cmF0ZWd5KCk6IFBvc2l0aW9uU3RyYXRlZ3kge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9vdmVybGF5LnBvc2l0aW9uKClcclxuICAgICAgICAgICAgLmZsZXhpYmxlQ29ubmVjdGVkVG8odGhpcy5fdGltZXBpY2tlcklucHV0LmdldENvbm5lY3RlZE92ZXJsYXlPcmlnaW4oKSlcclxuICAgICAgICAgICAgLndpdGhUcmFuc2Zvcm1PcmlnaW5PbignLm1hdGUtdGltZXBpY2tlci1jb250ZW50JylcclxuICAgICAgICAgICAgLndpdGhGbGV4aWJsZURpbWVuc2lvbnMoZmFsc2UpXHJcbiAgICAgICAgICAgIC53aXRoVmlld3BvcnRNYXJnaW4oOClcclxuICAgICAgICAgICAgLndpdGhMb2NrZWRQb3NpdGlvbigpXHJcbiAgICAgICAgICAgIC53aXRoUG9zaXRpb25zKFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBvcmlnaW5YOiAnc3RhcnQnLFxyXG4gICAgICAgICAgICAgICAgICAgIG9yaWdpblk6ICdib3R0b20nLFxyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJsYXlYOiAnc3RhcnQnLFxyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJsYXlZOiAnY2VudGVyJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBvcmlnaW5YOiAnc3RhcnQnLFxyXG4gICAgICAgICAgICAgICAgICAgIG9yaWdpblk6ICd0b3AnLFxyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJsYXlYOiAnc3RhcnQnLFxyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJsYXlZOiAnY2VudGVyJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBvcmlnaW5YOiAnZW5kJyxcclxuICAgICAgICAgICAgICAgICAgICBvcmlnaW5ZOiAnYm90dG9tJyxcclxuICAgICAgICAgICAgICAgICAgICBvdmVybGF5WDogJ2VuZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmxheVk6ICdjZW50ZXInXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIG9yaWdpblg6ICdlbmQnLFxyXG4gICAgICAgICAgICAgICAgICAgIG9yaWdpblk6ICd0b3AnLFxyXG4gICAgICAgICAgICAgICAgICAgIG92ZXJsYXlYOiAnZW5kJyxcclxuICAgICAgICAgICAgICAgICAgICBvdmVybGF5WTogJ2NlbnRlcidcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfc2V0Q29sb3IoKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgY29sb3IgPSB0aGlzLmNvbG9yO1xyXG4gICAgICAgIGlmICh0aGlzLl9wb3B1cENvbXBvbmVudFJlZikge1xyXG4gICAgICAgICAgICB0aGlzLl9wb3B1cENvbXBvbmVudFJlZi5pbnN0YW5jZS5jb2xvciA9IGNvbG9yO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5fZGlhbG9nUmVmKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2RpYWxvZ1JlZi5jb21wb25lbnRJbnN0YW5jZS5jb2xvciA9IGNvbG9yO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=