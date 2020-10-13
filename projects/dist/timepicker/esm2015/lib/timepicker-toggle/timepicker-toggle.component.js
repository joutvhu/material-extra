import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Attribute, ChangeDetectionStrategy, Component, ContentChild, Directive, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { merge, of as observableOf, Subscription } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "../timepicker-intl.service";
import * as i2 from "@angular/material/button";
import * as i3 from "@angular/common";
const _c0 = ["button"];
function MateTimepickerToggleComponent__svg_svg_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(0, "svg", 3);
    i0.ɵɵelement(1, "path", 4);
    i0.ɵɵelementEnd();
} }
const _c1 = [[["", "mateTimepickerToggleIcon", ""]]];
const _c2 = ["[mateTimepickerToggleIcon]"];
export class MateTimepickerToggleIconDirective {
}
MateTimepickerToggleIconDirective.ɵfac = function MateTimepickerToggleIconDirective_Factory(t) { return new (t || MateTimepickerToggleIconDirective)(); };
MateTimepickerToggleIconDirective.ɵdir = i0.ɵɵdefineDirective({ type: MateTimepickerToggleIconDirective, selectors: [["", "mateTimepickerToggleIcon", ""]] });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MateTimepickerToggleIconDirective, [{
        type: Directive,
        args: [{
                selector: '[mateTimepickerToggleIcon]'
            }]
    }], null, null); })();
export class MateTimepickerToggleComponent {
    constructor(_intl, _changeDetectorRef, defaultTabIndex) {
        this._intl = _intl;
        this._changeDetectorRef = _changeDetectorRef;
        this._stateChanges = Subscription.EMPTY;
        const parsedTabIndex = Number(defaultTabIndex);
        this.tabIndex = (parsedTabIndex || parsedTabIndex === 0) ? parsedTabIndex : null;
    }
    set disabled(value) {
        this._disabled = coerceBooleanProperty(value);
    }
    get disabled() {
        if (this._disabled === undefined && this.timepicker) {
            return this.timepicker.disabled;
        }
        return !!this._disabled;
    }
    ngOnChanges(changes) {
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
    _open(event) {
        if (this.timepicker && !this.disabled) {
            this.timepicker.open();
            event.stopPropagation();
        }
    }
    _watchStateChanges() {
        const TimepickerDisabled = this.timepicker ? this.timepicker._disabledChange : observableOf();
        const inputDisabled = this.timepicker && this.timepicker._timepickerInput ?
            this.timepicker._timepickerInput._disabledChange : observableOf();
        const TimepickerToggled = this.timepicker ?
            merge(this.timepicker.openedStream, this.timepicker.closedStream) :
            observableOf();
        this._stateChanges.unsubscribe();
        this._stateChanges = merge(this._intl.changes, TimepickerDisabled, inputDisabled, TimepickerToggled).subscribe(() => this._changeDetectorRef.markForCheck());
    }
}
MateTimepickerToggleComponent.ɵfac = function MateTimepickerToggleComponent_Factory(t) { return new (t || MateTimepickerToggleComponent)(i0.ɵɵdirectiveInject(i1.MateTimepickerIntlService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵinjectAttribute('tabindex')); };
MateTimepickerToggleComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MateTimepickerToggleComponent, selectors: [["mate-timepicker-toggle"]], contentQueries: function MateTimepickerToggleComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        i0.ɵɵcontentQuery(dirIndex, MateTimepickerToggleIconDirective, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._customIcon = _t.first);
    } }, viewQuery: function MateTimepickerToggleComponent_Query(rf, ctx) { if (rf & 1) {
        i0.ɵɵviewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._button = _t.first);
    } }, hostAttrs: [1, "mate-timepicker-toggle"], hostVars: 7, hostBindings: function MateTimepickerToggleComponent_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("focus", function MateTimepickerToggleComponent_focus_HostBindingHandler() { return ctx._button.focus(); });
    } if (rf & 2) {
        i0.ɵɵattribute("tabindex", ctx.disabled ? null : -1);
        i0.ɵɵclassProp("mate-timepicker-toggle-active", ctx.timepicker && ctx.timepicker.opened)("mat-accent", ctx.timepicker && ctx.timepicker.color === "accent")("mat-warn", ctx.timepicker && ctx.timepicker.color === "warn");
    } }, inputs: { timepicker: ["for", "timepicker"], tabIndex: "tabIndex", disabled: "disabled", disableRipple: "disableRipple" }, exportAs: ["matetimepickerToggle"], features: [i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c2, decls: 4, vars: 6, consts: [["mat-icon-button", "", "type", "button", 3, "disabled", "disableRipple", "click"], ["button", ""], ["class", "mate-timepicker-toggle-default-icon", "viewBox", "0 0 24 24", "width", "24px", "height", "24px", "fill", "currentColor", "focusable", "false", 4, "ngIf"], ["viewBox", "0 0 24 24", "width", "24px", "height", "24px", "fill", "currentColor", "focusable", "false", 1, "mate-timepicker-toggle-default-icon"], ["d", "M15.87 15.25l-3.37-2V8.72c0-.4-.32-.72-.72-.72h-.06c-.4 0-.72.32-.72.72v4.72c0 .35.18.68.49.86l3.65 2.19c.34.2.78.1.98-.24.21-.35.1-.8-.25-1zm5.31-10.24L18.1 2.45c-.42-.35-1.05-.3-1.41.13-.35.42-.29 1.05.13 1.41l3.07 2.56c.42.35 1.05.3 1.41-.13.36-.42.3-1.05-.12-1.41zM4.1 6.55l3.07-2.56c.43-.36.49-.99.13-1.41-.35-.43-.98-.48-1.4-.13L2.82 5.01c-.42.36-.48.99-.12 1.41.35.43.98.48 1.4.13zM12 4c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z"]], template: function MateTimepickerToggleComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵprojectionDef(_c1);
        i0.ɵɵelementStart(0, "button", 0, 1);
        i0.ɵɵlistener("click", function MateTimepickerToggleComponent_Template_button_click_0_listener($event) { return ctx._open($event); });
        i0.ɵɵtemplate(2, MateTimepickerToggleComponent__svg_svg_2_Template, 2, 0, "svg", 2);
        i0.ɵɵprojection(3);
        i0.ɵɵelementEnd();
    } if (rf & 2) {
        i0.ɵɵproperty("disabled", ctx.disabled)("disableRipple", ctx.disableRipple);
        i0.ɵɵattribute("aria-label", ctx._intl.openTimepickerLabel)("aria-haspopup", ctx.timepicker ? "dialog" : null)("tabindex", ctx.disabled ? -1 : ctx.tabIndex);
        i0.ɵɵadvance(2);
        i0.ɵɵproperty("ngIf", !ctx._customIcon);
    } }, directives: [i2.MatButton, i3.NgIf], styles: [".mat-badge-content{font-family:Roboto,Helvetica Neue,sans-serif;font-size:12px;font-weight:600}.mat-badge-small .mat-badge-content{font-size:9px}.mat-badge-large .mat-badge-content{font-size:24px}.mat-h1,.mat-headline,.mat-typography h1{font:400 24px/32px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal;margin:0 0 16px}.mat-h2,.mat-title,.mat-typography h2{font:500 20px/32px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal;margin:0 0 16px}.mat-h3,.mat-subheading-2,.mat-typography h3{font:400 16px/28px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal;margin:0 0 16px}.mat-h4,.mat-subheading-1,.mat-typography h4{font:400 15px/24px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal;margin:0 0 16px}.mat-h5,.mat-typography h5{font:400 11.62px/20px Roboto,Helvetica Neue,sans-serif;margin:0 0 12px}.mat-h6,.mat-typography h6{font:400 9.38px/20px Roboto,Helvetica Neue,sans-serif;margin:0 0 12px}.mat-body-2,.mat-body-strong{font:500 14px/24px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-body,.mat-body-1,.mat-typography{font:400 14px/20px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-body-1 p,.mat-body p,.mat-typography p{margin:0 0 12px}.mat-caption,.mat-small{font:400 12px/20px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-display-4,.mat-typography .mat-display-4{font:300 112px/112px Roboto,Helvetica Neue,sans-serif;letter-spacing:-.05em;margin:0 0 56px}.mat-display-3,.mat-typography .mat-display-3{font:400 56px/56px Roboto,Helvetica Neue,sans-serif;letter-spacing:-.02em;margin:0 0 64px}.mat-display-2,.mat-typography .mat-display-2{font:400 45px/48px Roboto,Helvetica Neue,sans-serif;letter-spacing:-.005em;margin:0 0 64px}.mat-display-1,.mat-typography .mat-display-1{font:400 34px/40px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal;margin:0 0 64px}.mat-bottom-sheet-container{font:400 14px/20px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-button,.mat-fab,.mat-flat-button,.mat-icon-button,.mat-mini-fab,.mat-raised-button,.mat-stroked-button{font-family:Roboto,Helvetica Neue,sans-serif;font-size:14px;font-weight:500}.mat-button-toggle,.mat-card{font-family:Roboto,Helvetica Neue,sans-serif}.mat-card-title{font-size:24px;font-weight:500}.mat-card-header .mat-card-title{font-size:20px}.mat-card-content,.mat-card-subtitle{font-size:14px}.mat-checkbox{font-family:Roboto,Helvetica Neue,sans-serif}.mat-checkbox-layout .mat-checkbox-label{line-height:24px}.mat-chip{font-size:14px;font-weight:500}.mat-chip .mat-chip-remove.mat-icon,.mat-chip .mat-chip-trailing-icon.mat-icon{font-size:18px}.mat-table{font-family:Roboto,Helvetica Neue,sans-serif}.mat-header-cell{font-size:12px;font-weight:500}.mat-cell,.mat-footer-cell{font-size:14px}.mat-calendar{font-family:Roboto,Helvetica Neue,sans-serif}.mat-calendar-body{font-size:13px}.mat-calendar-body-label,.mat-calendar-period-button{font-size:14px;font-weight:500}.mat-calendar-table-header th{font-size:11px;font-weight:400}.mat-dialog-title{font:500 20px/32px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-expansion-panel-header{font-family:Roboto,Helvetica Neue,sans-serif;font-size:15px;font-weight:400}.mat-expansion-panel-content{font:400 14px/20px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-form-field{font-family:Roboto,Helvetica Neue,sans-serif;font-size:inherit;font-weight:400;letter-spacing:normal;line-height:1.125}.mat-form-field-wrapper{padding-bottom:1.34375em}.mat-form-field-prefix .mat-icon,.mat-form-field-suffix .mat-icon{font-size:150%;line-height:1.125}.mat-form-field-prefix .mat-icon-button,.mat-form-field-suffix .mat-icon-button{height:1.5em;width:1.5em}.mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field-suffix .mat-icon-button .mat-icon{height:1.125em;line-height:1.125}.mat-form-field-infix{border-top:.84375em solid transparent;padding:.5em 0}.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label,.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label{transform:translateY(-1.34375em) scale(.75);width:133.3333333333%}.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{transform:translateY(-1.34374em) scale(.75);width:133.3333433333%}.mat-form-field-label-wrapper{padding-top:.84375em;top:-.84375em}.mat-form-field-label{top:1.34375em}.mat-form-field-underline{bottom:1.34375em}.mat-form-field-subscript-wrapper{font-size:75%;margin-top:.6666666667em;top:calc(100% - 1.79167em)}.mat-form-field-appearance-legacy .mat-form-field-wrapper{padding-bottom:1.25em}.mat-form-field-appearance-legacy .mat-form-field-infix{padding:.4375em 0}.mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label,.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label{-ms-transform:translateY(-1.28125em) scale(.75);transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.001px);width:133.3333333333%}.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{-ms-transform:translateY(-1.28124em) scale(.75);transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00101px);width:133.3333433333%}.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{-ms-transform:translateY(-1.28123em) scale(.75);transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00102px);width:133.3333533333%}.mat-form-field-appearance-legacy .mat-form-field-label{top:1.28125em}.mat-form-field-appearance-legacy .mat-form-field-underline{bottom:1.25em}.mat-form-field-appearance-legacy .mat-form-field-subscript-wrapper{margin-top:.5416666667em;top:calc(100% - 1.66667em)}@media print{.mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label,.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label{transform:translateY(-1.28122em) scale(.75)}.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{transform:translateY(-1.28121em) scale(.75)}.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{transform:translateY(-1.2812em) scale(.75)}}.mat-form-field-appearance-fill .mat-form-field-infix{padding:.25em 0 .75em}.mat-form-field-appearance-fill .mat-form-field-label{margin-top:-.5em;top:1.09375em}.mat-form-field-appearance-fill.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label,.mat-form-field-appearance-fill.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label{transform:translateY(-.59375em) scale(.75);width:133.3333333333%}.mat-form-field-appearance-fill.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{transform:translateY(-.59374em) scale(.75);width:133.3333433333%}.mat-form-field-appearance-outline .mat-form-field-infix{padding:1em 0}.mat-form-field-appearance-outline .mat-form-field-label{margin-top:-.25em;top:1.84375em}.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label,.mat-form-field-appearance-outline.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label{transform:translateY(-1.59375em) scale(.75);width:133.3333333333%}.mat-form-field-appearance-outline.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{transform:translateY(-1.59374em) scale(.75);width:133.3333433333%}.mat-grid-tile-footer,.mat-grid-tile-header{font-size:14px}.mat-grid-tile-footer .mat-line,.mat-grid-tile-header .mat-line{box-sizing:border-box;display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-grid-tile-footer .mat-line:nth-child(n+2),.mat-grid-tile-header .mat-line:nth-child(n+2){font-size:12px}input.mat-input-element{margin-top:-.0625em}.mat-menu-item{font-family:Roboto,Helvetica Neue,sans-serif;font-size:14px;font-weight:400}.mat-paginator,.mat-paginator-page-size .mat-select-trigger{font-family:Roboto,Helvetica Neue,sans-serif;font-size:12px}.mat-radio-button,.mat-select{font-family:Roboto,Helvetica Neue,sans-serif}.mat-select-trigger{height:1.125em}.mat-slide-toggle-content,.mat-slider-thumb-label-text{font-family:Roboto,Helvetica Neue,sans-serif}.mat-slider-thumb-label-text{font-size:12px;font-weight:500}.mat-stepper-horizontal,.mat-stepper-vertical{font-family:Roboto,Helvetica Neue,sans-serif}.mat-step-label{font-size:14px;font-weight:400}.mat-step-sub-label-error{font-weight:400}.mat-step-label-error{font-size:14px}.mat-step-label-selected{font-size:14px;font-weight:500}.mat-tab-group,.mat-tab-label,.mat-tab-link{font-family:Roboto,Helvetica Neue,sans-serif}.mat-tab-label,.mat-tab-link{font-size:14px;font-weight:500}.mat-toolbar,.mat-toolbar h1,.mat-toolbar h2,.mat-toolbar h3,.mat-toolbar h4,.mat-toolbar h5,.mat-toolbar h6{font:500 20px/32px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal;margin:0}.mat-tooltip{font-family:Roboto,Helvetica Neue,sans-serif;font-size:10px;padding-bottom:6px;padding-top:6px}.mat-tooltip-handset{font-size:14px;padding-bottom:8px;padding-top:8px}.mat-list-item,.mat-list-option{font-family:Roboto,Helvetica Neue,sans-serif}.mat-list-base .mat-list-item{font-size:16px}.mat-list-base .mat-list-item .mat-line{box-sizing:border-box;display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-list-base .mat-list-item .mat-line:nth-child(n+2){font-size:14px}.mat-list-base .mat-list-option{font-size:16px}.mat-list-base .mat-list-option .mat-line{box-sizing:border-box;display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-list-base .mat-list-option .mat-line:nth-child(n+2){font-size:14px}.mat-list-base .mat-subheader{font-family:Roboto,Helvetica Neue,sans-serif;font-size:14px;font-weight:500}.mat-list-base[dense] .mat-list-item{font-size:12px}.mat-list-base[dense] .mat-list-item .mat-line{box-sizing:border-box;display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-list-base[dense] .mat-list-item .mat-line:nth-child(n+2),.mat-list-base[dense] .mat-list-option{font-size:12px}.mat-list-base[dense] .mat-list-option .mat-line{box-sizing:border-box;display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-list-base[dense] .mat-list-option .mat-line:nth-child(n+2){font-size:12px}.mat-list-base[dense] .mat-subheader{font-family:Roboto,Helvetica Neue,sans-serif;font-size:12px;font-weight:500}.mat-option{font-family:Roboto,Helvetica Neue,sans-serif;font-size:16px}.mat-optgroup-label{font:500 14px/24px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-simple-snackbar{font-family:Roboto,Helvetica Neue,sans-serif;font-size:14px}.mat-simple-snackbar-action{font-family:inherit;font-size:inherit;font-weight:500;line-height:1}.mat-tree{font-family:Roboto,Helvetica Neue,sans-serif}.mat-nested-tree-node,.mat-tree-node{font-size:14px;font-weight:400}.mat-ripple{overflow:hidden;position:relative}.mat-ripple:not(:empty){transform:translateZ(0)}.mat-ripple.mat-ripple-unbounded{overflow:visible}.mat-ripple-element{border-radius:50%;pointer-events:none;position:absolute;transform:scale(0);transition:opacity,transform 0ms cubic-bezier(0,0,.2,1)}.cdk-high-contrast-active .mat-ripple-element{display:none}.cdk-visually-hidden{-moz-appearance:none;-webkit-appearance:none;border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;outline:0;overflow:hidden;padding:0;position:absolute;width:1px}.cdk-global-overlay-wrapper,.cdk-overlay-container{height:100%;left:0;pointer-events:none;top:0;width:100%}.cdk-overlay-container{position:fixed;z-index:1000}.cdk-overlay-container:empty{display:none}.cdk-global-overlay-wrapper,.cdk-overlay-pane{display:flex;position:absolute;z-index:1000}.cdk-overlay-pane{box-sizing:border-box;max-height:100%;max-width:100%;pointer-events:auto}.cdk-overlay-backdrop{-webkit-tap-highlight-color:transparent;bottom:0;left:0;opacity:0;pointer-events:auto;position:absolute;right:0;top:0;transition:opacity .4s cubic-bezier(.25,.8,.25,1);z-index:1000}.cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:1}@media screen and (-ms-high-contrast:active){.cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:.6}}.cdk-overlay-dark-backdrop{background:rgba(0,0,0,.32)}.cdk-overlay-transparent-backdrop,.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing{opacity:0}.cdk-overlay-connected-position-bounding-box{display:flex;flex-direction:column;min-height:1px;min-width:1px;position:absolute;z-index:1000}.cdk-global-scrollblock{overflow-y:scroll;position:fixed;width:100%}@keyframes cdk-text-field-autofill-start{\n  /*!*/}@keyframes cdk-text-field-autofill-end{\n  /*!*/}.cdk-text-field-autofill-monitored:-webkit-autofill{animation:cdk-text-field-autofill-start 0s 1ms}.cdk-text-field-autofill-monitored:not(:-webkit-autofill){animation:cdk-text-field-autofill-end 0s 1ms}textarea.cdk-textarea-autosize{resize:none}textarea.cdk-textarea-autosize-measuring{box-sizing:initial!important;height:auto!important;overflow:hidden!important;padding:2px 0!important}textarea.cdk-textarea-autosize-measuring-firefox{box-sizing:initial!important;height:0!important;padding:2px 0!important}.mat-focus-indicator,.mat-mdc-focus-indicator{position:relative}:host.mate-timepicker-toggle .mat-icon-button{height:24px;width:24px}.mate-timepicker-toggle{color:rgba(0,0,0,.54)}.mate-timepicker-toggle-active{color:#3f51b5}.mate-timepicker-toggle-active.mat-accent{color:#ff4081}.mate-timepicker-toggle-active.mat-warn{color:#f44336}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MateTimepickerToggleComponent, [{
        type: Component,
        args: [{
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
            }]
    }], function () { return [{ type: i1.MateTimepickerIntlService }, { type: i0.ChangeDetectorRef }, { type: undefined, decorators: [{
                type: Attribute,
                args: ['tabindex']
            }] }]; }, { timepicker: [{
            type: Input,
            args: ['for']
        }], tabIndex: [{
            type: Input
        }], disabled: [{
            type: Input
        }], disableRipple: [{
            type: Input
        }], _customIcon: [{
            type: ContentChild,
            args: [MateTimepickerToggleIconDirective, { static: false }]
        }], _button: [{
            type: ViewChild,
            args: ['button', { static: false }]
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXBpY2tlci10b2dnbGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IkQ6L0RvY3VtZW50L0xpYnJhcnkvQW5ndWxhci9tYXRlcmlhbC1leHRyYS9wcm9qZWN0cy9tYXRlcmlhbC90aW1lcGlja2VyL3NyYy8iLCJzb3VyY2VzIjpbImxpYi90aW1lcGlja2VyLXRvZ2dsZS90aW1lcGlja2VyLXRvZ2dsZS5jb21wb25lbnQudHMiLCJsaWIvdGltZXBpY2tlci10b2dnbGUvdGltZXBpY2tlci10b2dnbGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDNUQsT0FBTyxFQUVILFNBQVMsRUFDVCx1QkFBdUIsRUFFdkIsU0FBUyxFQUNULFlBQVksRUFDWixTQUFTLEVBQ1QsS0FBSyxFQUlMLFNBQVMsRUFDVCxpQkFBaUIsRUFDcEIsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFDLEtBQUssRUFBRSxFQUFFLElBQUksWUFBWSxFQUFFLFlBQVksRUFBQyxNQUFNLE1BQU0sQ0FBQzs7Ozs7OztJQ1ozRCxtQkFFRTtJQUZGLDhCQUVFO0lBQUEsMEJBQ0Y7SUFBQSxpQkFBTTs7OztBRGlCUixNQUFNLE9BQU8saUNBQWlDOztrSEFBakMsaUNBQWlDO3NFQUFqQyxpQ0FBaUM7a0RBQWpDLGlDQUFpQztjQUg3QyxTQUFTO2VBQUM7Z0JBQ1AsUUFBUSxFQUFFLDRCQUE0QjthQUN6Qzs7QUFvQkQsTUFBTSxPQUFPLDZCQUE2QjtJQTJCdEMsWUFDVyxLQUFnQyxFQUMvQixrQkFBcUMsRUFDdEIsZUFBdUI7UUFGdkMsVUFBSyxHQUFMLEtBQUssQ0FBMkI7UUFDL0IsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUFtQjtRQTVCekMsa0JBQWEsR0FBRyxZQUFZLENBQUMsS0FBSyxDQUFDO1FBK0J2QyxNQUFNLGNBQWMsR0FBRyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUM7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b0JBQy9CLGlCQUFpQixFQUFFLHNCQUFzQjtvQkFDekMsdUNBQXVDLEVBQUUsaUNBQWlDO29CQUMxRSxvQkFBb0IsRUFBRSw2Q0FBNkM7b0JBQ25FLGtCQUFrQixFQUFFLDJDQUEyQztvQkFDL0QsU0FBUyxFQUFFLGlCQUFpQjtpQkFDL0I7Z0JBQ0QsUUFBUSxFQUFFLHNCQUFzQjtnQkFDaEMsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2FBQ2xEOztzQkErQlEsU0FBUzt1QkFBQyxVQUFVO3dCQXpCWCxVQUFVO2tCQUF2QixLQUFLO21CQUFDLEtBQUs7WUFFSCxRQUFRO2tCQUFoQixLQUFLO1lBR0YsUUFBUTtrQkFEWCxLQUFLO1lBWUcsYUFBYTtrQkFBckIsS0FBSztZQUU0RCxXQUFXO2tCQUE1RSxZQUFZO21CQUFDLGlDQUFpQyxFQUFFLEVBQUMsTUFBTSxFQUFFLEtBQUssRUFBQztZQUUxQixPQUFPO2tCQUE1QyxTQUFTO21CQUFDLFFBQVEsRUFBRSxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NvZXJjZUJvb2xlYW5Qcm9wZXJ0eX0gZnJvbSAnQGFuZ3VsYXIvY2RrL2NvZXJjaW9uJztcclxuaW1wb3J0IHtcclxuICAgIEFmdGVyQ29udGVudEluaXQsXHJcbiAgICBBdHRyaWJ1dGUsXHJcbiAgICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICAgIENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgQ29udGVudENoaWxkLFxyXG4gICAgRGlyZWN0aXZlLFxyXG4gICAgSW5wdXQsXHJcbiAgICBPbkNoYW5nZXMsXHJcbiAgICBPbkRlc3Ryb3ksXHJcbiAgICBTaW1wbGVDaGFuZ2VzLFxyXG4gICAgVmlld0NoaWxkLFxyXG4gICAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtNYXRCdXR0b259IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XHJcbmltcG9ydCB7bWVyZ2UsIG9mIGFzIG9ic2VydmFibGVPZiwgU3Vic2NyaXB0aW9ufSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7TWF0ZVRpbWVwaWNrZXJJbnRsU2VydmljZX0gZnJvbSAnLi4vdGltZXBpY2tlci1pbnRsLnNlcnZpY2UnO1xyXG5pbXBvcnQge01hdGVUaW1lcGlja2VyQ29tcG9uZW50fSBmcm9tICcuLi90aW1lcGlja2VyL3RpbWVwaWNrZXIuY29tcG9uZW50JztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6ICdbbWF0ZVRpbWVwaWNrZXJUb2dnbGVJY29uXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIE1hdGVUaW1lcGlja2VyVG9nZ2xlSWNvbkRpcmVjdGl2ZSB7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdtYXRlLXRpbWVwaWNrZXItdG9nZ2xlJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi90aW1lcGlja2VyLXRvZ2dsZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi90aW1lcGlja2VyLXRvZ2dsZS5jb21wb25lbnQuc2NzcyddLFxyXG4gICAgaG9zdDoge1xyXG4gICAgICAgIGNsYXNzOiAnbWF0ZS10aW1lcGlja2VyLXRvZ2dsZScsXHJcbiAgICAgICAgJ1thdHRyLnRhYmluZGV4XSc6ICdkaXNhYmxlZCA/IG51bGwgOiAtMScsXHJcbiAgICAgICAgJ1tjbGFzcy5tYXRlLXRpbWVwaWNrZXItdG9nZ2xlLWFjdGl2ZV0nOiAndGltZXBpY2tlciAmJiB0aW1lcGlja2VyLm9wZW5lZCcsXHJcbiAgICAgICAgJ1tjbGFzcy5tYXQtYWNjZW50XSc6ICd0aW1lcGlja2VyICYmIHRpbWVwaWNrZXIuY29sb3IgPT09IFwiYWNjZW50XCInLFxyXG4gICAgICAgICdbY2xhc3MubWF0LXdhcm5dJzogJ3RpbWVwaWNrZXIgJiYgdGltZXBpY2tlci5jb2xvciA9PT0gXCJ3YXJuXCInLFxyXG4gICAgICAgICcoZm9jdXMpJzogJ19idXR0b24uZm9jdXMoKSdcclxuICAgIH0sXHJcbiAgICBleHBvcnRBczogJ21hdGV0aW1lcGlja2VyVG9nZ2xlJyxcclxuICAgIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWF0ZVRpbWVwaWNrZXJUb2dnbGVDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlckNvbnRlbnRJbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XHJcbiAgICBwcml2YXRlIF9zdGF0ZUNoYW5nZXMgPSBTdWJzY3JpcHRpb24uRU1QVFk7XHJcblxyXG4gICAgcHJpdmF0ZSBfZGlzYWJsZWQ6IGJvb2xlYW47XHJcblxyXG4gICAgQElucHV0KCdmb3InKSB0aW1lcGlja2VyOiBNYXRlVGltZXBpY2tlckNvbXBvbmVudDtcclxuXHJcbiAgICBASW5wdXQoKSB0YWJJbmRleDogbnVtYmVyIHwgbnVsbDtcclxuXHJcbiAgICBASW5wdXQoKVxyXG4gICAgc2V0IGRpc2FibGVkKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fZGlzYWJsZWQgPSBjb2VyY2VCb29sZWFuUHJvcGVydHkodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAodGhpcy5fZGlzYWJsZWQgPT09IHVuZGVmaW5lZCAmJiB0aGlzLnRpbWVwaWNrZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudGltZXBpY2tlci5kaXNhYmxlZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuICEhdGhpcy5fZGlzYWJsZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgQElucHV0KCkgZGlzYWJsZVJpcHBsZTogYm9vbGVhbjtcclxuXHJcbiAgICBAQ29udGVudENoaWxkKE1hdGVUaW1lcGlja2VyVG9nZ2xlSWNvbkRpcmVjdGl2ZSwge3N0YXRpYzogZmFsc2V9KSBfY3VzdG9tSWNvbjogTWF0ZVRpbWVwaWNrZXJUb2dnbGVJY29uRGlyZWN0aXZlO1xyXG5cclxuICAgIEBWaWV3Q2hpbGQoJ2J1dHRvbicsIHtzdGF0aWM6IGZhbHNlfSkgX2J1dHRvbjogTWF0QnV0dG9uO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHB1YmxpYyBfaW50bDogTWF0ZVRpbWVwaWNrZXJJbnRsU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIF9jaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICAgICAgQEF0dHJpYnV0ZSgndGFiaW5kZXgnKSBkZWZhdWx0VGFiSW5kZXg6IHN0cmluZykge1xyXG5cclxuICAgICAgICBjb25zdCBwYXJzZWRUYWJJbmRleCA9IE51bWJlcihkZWZhdWx0VGFiSW5kZXgpO1xyXG4gICAgICAgIHRoaXMudGFiSW5kZXggPSAocGFyc2VkVGFiSW5kZXggfHwgcGFyc2VkVGFiSW5kZXggPT09IDApID8gcGFyc2VkVGFiSW5kZXggOiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgICAgICBpZiAoY2hhbmdlc1snVGltZXBpY2tlciddKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3dhdGNoU3RhdGVDaGFuZ2VzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMuX3N0YXRlQ2hhbmdlcy51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcclxuICAgICAgICB0aGlzLl93YXRjaFN0YXRlQ2hhbmdlcygpO1xyXG4gICAgfVxyXG5cclxuICAgIF9vcGVuKGV2ZW50OiBFdmVudCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLnRpbWVwaWNrZXIgJiYgIXRoaXMuZGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgdGhpcy50aW1lcGlja2VyLm9wZW4oKTtcclxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3dhdGNoU3RhdGVDaGFuZ2VzKCkge1xyXG4gICAgICAgIGNvbnN0IFRpbWVwaWNrZXJEaXNhYmxlZCA9IHRoaXMudGltZXBpY2tlciA/IHRoaXMudGltZXBpY2tlci5fZGlzYWJsZWRDaGFuZ2UgOiBvYnNlcnZhYmxlT2YoKTtcclxuICAgICAgICBjb25zdCBpbnB1dERpc2FibGVkID0gdGhpcy50aW1lcGlja2VyICYmIHRoaXMudGltZXBpY2tlci5fdGltZXBpY2tlcklucHV0ID9cclxuICAgICAgICAgICAgdGhpcy50aW1lcGlja2VyLl90aW1lcGlja2VySW5wdXQuX2Rpc2FibGVkQ2hhbmdlIDogb2JzZXJ2YWJsZU9mKCk7XHJcbiAgICAgICAgY29uc3QgVGltZXBpY2tlclRvZ2dsZWQgPSB0aGlzLnRpbWVwaWNrZXIgP1xyXG4gICAgICAgICAgICBtZXJnZSh0aGlzLnRpbWVwaWNrZXIub3BlbmVkU3RyZWFtLCB0aGlzLnRpbWVwaWNrZXIuY2xvc2VkU3RyZWFtKSA6XHJcbiAgICAgICAgICAgIG9ic2VydmFibGVPZigpO1xyXG5cclxuICAgICAgICB0aGlzLl9zdGF0ZUNoYW5nZXMudW5zdWJzY3JpYmUoKTtcclxuICAgICAgICB0aGlzLl9zdGF0ZUNoYW5nZXMgPSBtZXJnZShcclxuICAgICAgICAgICAgdGhpcy5faW50bC5jaGFuZ2VzLFxyXG4gICAgICAgICAgICBUaW1lcGlja2VyRGlzYWJsZWQsXHJcbiAgICAgICAgICAgIGlucHV0RGlzYWJsZWQsXHJcbiAgICAgICAgICAgIFRpbWVwaWNrZXJUb2dnbGVkXHJcbiAgICAgICAgKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5fY2hhbmdlRGV0ZWN0b3JSZWYubWFya0ZvckNoZWNrKCkpO1xyXG4gICAgfVxyXG59XHJcbiIsIjxidXR0b24gI2J1dHRvbiBtYXQtaWNvbi1idXR0b24gdHlwZT1cImJ1dHRvblwiIFthdHRyLmFyaWEtbGFiZWxdPVwiX2ludGwub3BlblRpbWVwaWNrZXJMYWJlbFwiXHJcbiAgICAgICAgW2F0dHIuYXJpYS1oYXNwb3B1cF09XCJ0aW1lcGlja2VyID8gJ2RpYWxvZycgOiBudWxsXCIgW2F0dHIudGFiaW5kZXhdPVwiZGlzYWJsZWQgPyAtMSA6IHRhYkluZGV4XCJcclxuICAgICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxyXG4gICAgICAgIFtkaXNhYmxlUmlwcGxlXT1cImRpc2FibGVSaXBwbGVcIiAoY2xpY2spPVwiX29wZW4oJGV2ZW50KVwiPlxyXG5cclxuICA8c3ZnICpuZ0lmPVwiIV9jdXN0b21JY29uXCIgY2xhc3M9XCJtYXRlLXRpbWVwaWNrZXItdG9nZ2xlLWRlZmF1bHQtaWNvblwiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxyXG4gICAgICAgd2lkdGg9XCIyNHB4XCIgaGVpZ2h0PVwiMjRweFwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBmb2N1c2FibGU9XCJmYWxzZVwiPlxyXG4gICAgPHBhdGggZD1cIk0xNS44NyAxNS4yNWwtMy4zNy0yVjguNzJjMC0uNC0uMzItLjcyLS43Mi0uNzJoLS4wNmMtLjQgMC0uNzIuMzItLjcyLjcydjQuNzJjMCAuMzUuMTguNjguNDkuODZsMy42NSAyLjE5Yy4zNC4yLjc4LjEuOTgtLjI0LjIxLS4zNS4xLS44LS4yNS0xem01LjMxLTEwLjI0TDE4LjEgMi40NWMtLjQyLS4zNS0xLjA1LS4zLTEuNDEuMTMtLjM1LjQyLS4yOSAxLjA1LjEzIDEuNDFsMy4wNyAyLjU2Yy40Mi4zNSAxLjA1LjMgMS40MS0uMTMuMzYtLjQyLjMtMS4wNS0uMTItMS40MXpNNC4xIDYuNTVsMy4wNy0yLjU2Yy40My0uMzYuNDktLjk5LjEzLTEuNDEtLjM1LS40My0uOTgtLjQ4LTEuNC0uMTNMMi44MiA1LjAxYy0uNDIuMzYtLjQ4Ljk5LS4xMiAxLjQxLjM1LjQzLjk4LjQ4IDEuNC4xM3pNMTIgNGMtNC45NyAwLTkgNC4wMy05IDlzNC4wMyA5IDkgOSA5LTQuMDMgOS05LTQuMDMtOS05LTl6bTAgMTZjLTMuODYgMC03LTMuMTQtNy03czMuMTQtNyA3LTcgNyAzLjE0IDcgNy0zLjE0IDctNyA3elwiLz5cclxuICA8L3N2Zz5cclxuXHJcbiAgPG5nLWNvbnRlbnQgc2VsZWN0PVwiW21hdGVUaW1lcGlja2VyVG9nZ2xlSWNvbl1cIj48L25nLWNvbnRlbnQ+XHJcbjwvYnV0dG9uPlxyXG4iXX0=