import { ɵɵgetCurrentView, ɵɵelementContainerStart, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, ɵɵlistener, ɵɵrestoreView, ɵɵnextContext, ɵɵpipe, ɵɵelementContainerEnd, ɵɵadvance, ɵɵclassProp, ɵɵtextInterpolate1, ɵɵpipeBind2, EventEmitter, ɵɵdefineComponent, ɵɵtemplate, ɵɵproperty, ɵsetClassMetadata, Component, Input, Output, ɵɵdefineDirective, ɵɵresolveDocument, Directive, HostListener, ɵɵpureFunction1, ɵɵtextInterpolate, ɵɵstaticViewQuery, ɵɵqueryRefresh, ɵɵloadQuery, ɵɵInheritDefinitionFeature, ɵɵelement, ViewChild, ɵɵdirectiveInject, ElementRef, ViewEncapsulation, ChangeDetectionStrategy, ɵɵhostProperty, ɵɵattribute, ɵɵProvidersFeature, Optional, HostBinding, ɵɵdefineInjectable, Injectable, ɵɵnamespaceSVG, ChangeDetectorRef, ɵɵinjectAttribute, ɵɵcontentQuery, ɵɵviewQuery, ɵɵNgOnChangesFeature, ɵɵprojectionDef, ɵɵprojection, Attribute, ContentChild, InjectionToken, NgZone, ViewContainerRef, Inject, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';
import { mixinColor } from '@angular/material/core';
import { NgIf, DecimalPipe, NgForOf, NgStyle, DOCUMENT, CommonModule } from '@angular/common';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { DOWN_ARROW } from '@angular/cdk/keycodes';
import { Validators } from '@angular/forms';
import { MAT_INPUT_VALUE_ACCESSOR } from '@angular/material/input';
import { Subscription, Subject, of, merge } from 'rxjs';
import { MatFormField } from '@angular/material/form-field';
import { Overlay, OverlayConfig, OverlayModule } from '@angular/cdk/overlay';
import { ComponentPortal, PortalModule } from '@angular/cdk/portal';
import { take, filter } from 'rxjs/operators';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Directionality } from '@angular/cdk/bidi';
import { A11yModule } from '@angular/cdk/a11y';

class TimepickerUtil {
    static isEqualsDeep(value1, value2) {
        return value1 === value2 || ((value1 == null || value2 == null || value1.length === value2.length) &&
            JSON.stringify(value1) === JSON.stringify(value2));
    }
    static isRealNumber(value) {
        return typeof value === 'number' && !isNaN(value) && value !== Infinity && value !== -Infinity;
    }
    static toString(value) {
        if (value === null || value === undefined || value.constructor === String) {
            return value;
        }
        else if (value instanceof Date) {
            return value.toJSON();
        }
        else {
            try {
                return JSON.stringify(value);
            }
            catch (e) {
                return value + '';
            }
        }
    }
}

class Duration {
    constructor(hour, minute, second) {
        this.hour = hour;
        this.minute = minute;
        this.second = second;
    }
    static parseTimes(times) {
        let hour, minute, second;
        if (times.length > 1) {
            hour = parseInt(times[0], 10);
            minute = parseInt(times[1], 10);
            if (TimepickerUtil.isRealNumber(hour) && TimepickerUtil.isRealNumber(minute)) {
                if (times.length > 2) {
                    second = parseInt(times[2], 10);
                }
                if (!TimepickerUtil.isRealNumber(second)) {
                    second = 0;
                }
                if (hour < 0) {
                    hour = 0;
                }
                if (minute < 0) {
                    minute = 0;
                }
                if (second < 0) {
                    second = 0;
                }
                hour %= 24;
                minute %= 60;
                second %= 60;
                if (hour < 12 && times.length > 2 && times[2].toLowerCase().includes('pm')) {
                    hour += 12;
                }
                return new Duration(hour, minute, second);
            }
        }
        return null;
    }
    static valueOf(hour, minute, second) {
        return new Duration(hour, minute, second);
    }
    static zero() {
        return new Duration(0, 0, 0);
    }
    static fromMillis(count) {
        if (count < 0) {
            return null;
        }
        return new Duration(Math.floor(count / Duration.matrix.hours.milliseconds) % Duration.matrix.days.hours, Math.floor(count / Duration.matrix.minutes.milliseconds) % Duration.matrix.hours.minutes, Math.floor(count / Duration.matrix.seconds.milliseconds) % Duration.matrix.minutes.seconds);
    }
    static fromString(value, separator) {
        if (typeof value === 'string') {
            let time;
            if (typeof separator === 'string') {
                time = Duration.parseTimes(value.split(separator));
                if (time) {
                    return time;
                }
            }
            time = Duration.parseTimes(value.split(':'));
            if (time) {
                return time;
            }
            time = Duration.parseTimes(value.split('-'));
            if (time) {
                return time;
            }
            time = Duration.parseTimes(value.split('.'));
            if (time) {
                return time;
            }
            time = Duration.parseTimes(value.split(';'));
            if (time) {
                return time;
            }
            time = Duration.parseTimes(value.split(','));
            if (time) {
                return time;
            }
        }
        return null;
    }
    static fromDate(value) {
        if (value instanceof Date) {
            return new Duration(value.getHours(), value.getMinutes(), value.getSeconds());
        }
        return null;
    }
    static now(second = true) {
        const now = new Date();
        return new Duration(now.getHours(), now.getMinutes(), second ? now.getSeconds() : 0);
    }
    clone() {
        return new Duration(this.hour, this.minute, this.second);
    }
    getValue(type) {
        if (['hour', 'minute', 'second'].includes(type)) {
            return this[type];
        }
        return null;
    }
    setValue(type, value) {
        if (['hour', 'minute', 'second'].includes(type)) {
            this[type] = value;
        }
        return this;
    }
    setNew(type, value) {
        const result = new Duration(this.hour, this.minute, this.second);
        if (['hour', 'minute', 'second'].includes(type)) {
            result[type] = value;
        }
        return result;
    }
    format(format) {
        if (format) {
            const replace = (f, v, r) => {
                let match;
                while (true) {
                    match = r.match(f);
                    if (match && typeof match[0] === 'string') {
                        r = r.replace(match[0], String(v).padStart(match[0].length, '0'));
                    }
                    else {
                        break;
                    }
                }
                return r;
            };
            let result = format;
            result = replace(/h+/i, this.hour, result);
            result = replace(/m+/i, this.minute, result);
            result = replace(/s+/i, this.second, result);
            return result;
        }
        else {
            return `${String(this.hour).padStart(2, '0')}:${String(this.minute).padStart(2, '0')}:${String(this.second).padStart(2, '0')}`;
        }
    }
    milliseconds() {
        return this.hour * Duration.matrix.hours.milliseconds +
            this.minute * Duration.matrix.minutes.milliseconds +
            this.second * Duration.matrix.seconds.milliseconds;
    }
    setToDate(value) {
        value.setHours(this.hour);
        value.setMinutes(this.minute);
        value.setSeconds(this.second);
        value.setMilliseconds(0);
        return value;
    }
    equals(value) {
        return value != null && this.hour === value.hour && this.minute === value.minute && this.second === value.second;
    }
}
Duration.matrix = {
    days: { hours: 24, minutes: 1440, seconds: 86400, milliseconds: 86400000 },
    hours: { minutes: 60, seconds: 3600, milliseconds: 3600000 },
    minutes: { seconds: 60, milliseconds: 60000 },
    seconds: { milliseconds: 1000 }
};

function MateTimepickerDialogHeaderComponent_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "span");
    ɵɵtext(2, ":");
    ɵɵelementEnd();
    ɵɵelementStart(3, "label", 2);
    ɵɵlistener("click", function MateTimepickerDialogHeaderComponent_ng_container_10_Template_label_click_3_listener() { ɵɵrestoreView(_r2); const ctx_r1 = ɵɵnextContext(); return ctx_r1.onActive("second"); });
    ɵɵtext(4);
    ɵɵpipe(5, "number");
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance(3);
    ɵɵclassProp("active", ctx_r0.type == "second");
    ɵɵadvance(1);
    ɵɵtextInterpolate1(" ", ɵɵpipeBind2(5, 3, ctx_r0.value.second, "2.0"), " ");
} }
class MateTimepickerDialogHeaderComponent {
    constructor() {
        this.type = 'hour';
        this.second = false;
        this.active = new EventEmitter();
    }
    ngOnInit() {
    }
    onActive(type) {
        this.type = type;
        this.active.emit(type);
    }
}
MateTimepickerDialogHeaderComponent.ɵfac = function MateTimepickerDialogHeaderComponent_Factory(t) { return new (t || MateTimepickerDialogHeaderComponent)(); };
MateTimepickerDialogHeaderComponent.ɵcmp = ɵɵdefineComponent({ type: MateTimepickerDialogHeaderComponent, selectors: [["mate-timepicker-dialog-header"]], hostAttrs: [1, "mate-timepicker-dialog-header"], inputs: { type: "type", second: "second", value: "value" }, outputs: { active: "active" }, exportAs: ["mateTimepickerDialogHeader"], decls: 11, vars: 13, consts: [[1, "mate-timepicker-dial"], [1, "timepicker-dial-time"], [1, "timepicker-dial-time-item", 3, "click"], [4, "ngIf"]], template: function MateTimepickerDialogHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "div", 1);
        ɵɵelementStart(2, "label", 2);
        ɵɵlistener("click", function MateTimepickerDialogHeaderComponent_Template_label_click_2_listener() { return ctx.onActive("hour"); });
        ɵɵtext(3);
        ɵɵpipe(4, "number");
        ɵɵelementEnd();
        ɵɵelementStart(5, "span");
        ɵɵtext(6, ":");
        ɵɵelementEnd();
        ɵɵelementStart(7, "label", 2);
        ɵɵlistener("click", function MateTimepickerDialogHeaderComponent_Template_label_click_7_listener() { return ctx.onActive("minute"); });
        ɵɵtext(8);
        ɵɵpipe(9, "number");
        ɵɵelementEnd();
        ɵɵtemplate(10, MateTimepickerDialogHeaderComponent_ng_container_10_Template, 6, 6, "ng-container", 3);
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(2);
        ɵɵclassProp("active", ctx.type == "hour");
        ɵɵadvance(1);
        ɵɵtextInterpolate1(" ", ɵɵpipeBind2(4, 7, ctx.value.hour, "2.0"), " ");
        ɵɵadvance(4);
        ɵɵclassProp("active", ctx.type == "minute");
        ɵɵadvance(1);
        ɵɵtextInterpolate1(" ", ɵɵpipeBind2(9, 10, ctx.value.minute, "2.0"), " ");
        ɵɵadvance(2);
        ɵɵproperty("ngIf", ctx.second);
    } }, directives: [NgIf], pipes: [DecimalPipe], styles: [".mate-timepicker-dialog-header[_nghost-%COMP%]{display:block;width:100%}.mate-timepicker-dialog-header[_nghost-%COMP%]   .mate-timepicker-dial[_ngcontent-%COMP%]{margin:0 auto}.mate-timepicker-dialog-header[_nghost-%COMP%]   .mate-timepicker-dial[_ngcontent-%COMP%]   .timepicker-dial-time[_ngcontent-%COMP%]{align-content:center;font-size:44px;line-height:normal;text-align:center}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(MateTimepickerDialogHeaderComponent, [{
        type: Component,
        args: [{
                selector: 'mate-timepicker-dialog-header',
                templateUrl: './timepicker-dialog-header.component.html',
                styleUrls: ['./timepicker-dialog-header.component.scss'],
                host: {
                    class: 'mate-timepicker-dialog-header'
                },
                exportAs: 'mateTimepickerDialogHeader'
            }]
    }], function () { return []; }, { type: [{
            type: Input
        }], second: [{
            type: Input
        }], value: [{
            type: Input
        }], active: [{
            type: Output
        }] }); })();

class MateTimepickerFace {
    constructor() {
        this.innerClockFaceSize = 40;
        this.switchClock = new EventEmitter();
        this.enterPress = new EventEmitter();
    }
    onChange(value) {
    }
    onFinish() {
    }
    onMousedown(e) {
        e.preventDefault();
        this.moved = false;
        this.selected = false;
        this.isStarted = true;
    }
    onClick(e) {
        e.preventDefault();
        this.selectTime(e);
        this.isStarted = false;
        this.selected = false;
        this.onFinish();
    }
    onTouchend(e) {
        this.selectTime(e);
        if (this.moved) {
            this.isStarted = false;
            this.moved = false;
            this.selected = false;
            this.onFinish();
        }
    }
    onMove(e) {
        this.moved = true;
        this.selectTime(e);
    }
    selectTime(e) {
        if (!this.isStarted && (e instanceof MouseEvent && e.type !== 'click')) {
            return;
        }
        const clockFaceCords = this.clockFace.nativeElement.getBoundingClientRect();
        const centerX = clockFaceCords.left + clockFaceCords.width / 2;
        const centerY = clockFaceCords.top + clockFaceCords.height / 2;
        const arc = Math.atan(Math.abs(e.clientX - centerX) / Math.abs(e.clientY - centerY)) * 180 / Math.PI;
        const circleAngle = this.countAngleByCords(centerX, centerY, e.clientX, e.clientY, arc);
        const isInnerClockChosen = !!this.innerValues && this.isInnerClockFace(centerX, centerY, e.clientX, e.clientY, ((clockFaceCords.height + clockFaceCords.width) / 4) - this.innerClockFaceSize);
        let index = this.roundAngle(circleAngle);
        index = index < 0 ? 0 : index;
        const value = isInnerClockChosen ? this.innerValues[index % this.innerValues.length] :
            this.outerValues[index % this.outerValues.length];
        this.onChange(value);
        this.selected = true;
    }
    onMouseup(e) {
        e.preventDefault();
        this.isStarted = false;
        if (this.selected) {
            this.selected = false;
            this.onFinish();
        }
    }
    roundAngle(angle) {
        return Math.round(angle / this.step);
    }
    isInnerClockFace(x0, y0, x, y, border) {
        return Math.sqrt(Math.pow(x - x0, 2) + Math.pow(y - y0, 2)) < border;
    }
    countAngleByCords(x0, y0, x, y, currentAngle) {
        if (y > y0 && x >= x0) {
            return 180 - currentAngle;
        }
        else if (y > y0 && x < x0) {
            return 180 + currentAngle;
        }
        else if (y < y0 && x < x0) {
            return 360 - currentAngle;
        }
        else { // I quarter
            return currentAngle;
        }
    }
    valueChange(add) {
    }
    onKeydown(event) {
        switch (event.code) {
            case 'ArrowLeft':
                this.switchClock.emit('left');
                return;
            case 'ArrowRight':
                this.switchClock.emit('right');
                return;
            case 'PageUp':
            case 'ArrowUp':
                this.valueChange(1);
                return;
            case 'PageDown':
            case 'ArrowDown':
                this.valueChange(-1);
                return;
            case 'Home':
                this.switchClock.emit('start');
                return;
            case 'End':
                this.switchClock.emit('end');
                return;
            case 'Enter':
            case 'Space':
                this.enterPress.emit();
                return;
            default:
                return;
        }
    }
}
MateTimepickerFace.ɵfac = function MateTimepickerFace_Factory(t) { return new (t || MateTimepickerFace)(); };
MateTimepickerFace.ɵdir = ɵɵdefineDirective({ type: MateTimepickerFace, selectors: [["mate-timepicker-face"]], hostBindings: function MateTimepickerFace_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("mousedown", function MateTimepickerFace_mousedown_HostBindingHandler($event) { return ctx.onMousedown($event); })("click", function MateTimepickerFace_click_HostBindingHandler($event) { return ctx.onClick($event); })("touchend", function MateTimepickerFace_touchend_HostBindingHandler($event) { return ctx.onTouchend($event.changedTouches[0]); })("mousemove", function MateTimepickerFace_mousemove_HostBindingHandler($event) { return ctx.onMove($event); })("touchmove", function MateTimepickerFace_touchmove_HostBindingHandler($event) { return ctx.onMove($event.changedTouches[0]); })("mouseup", function MateTimepickerFace_mouseup_HostBindingHandler($event) { return ctx.onMouseup($event); })("mouseup", function MateTimepickerFace_mouseup_HostBindingHandler($event) { return ctx.onMouseup($event); }, false, ɵɵresolveDocument)("keydown", function MateTimepickerFace_keydown_HostBindingHandler($event) { return ctx.onKeydown($event); }, false, ɵɵresolveDocument);
    } }, outputs: { switchClock: "switchClock", enterPress: "enterPress" } });
/*@__PURE__*/ (function () { ɵsetClassMetadata(MateTimepickerFace, [{
        type: Directive,
        args: [{ selector: 'mate-timepicker-face' }]
    }], null, { switchClock: [{
            type: Output
        }], enterPress: [{
            type: Output
        }], onMousedown: [{
            type: HostListener,
            args: ['mousedown', ['$event']]
        }], onClick: [{
            type: HostListener,
            args: ['click', ['$event']]
        }], onTouchend: [{
            type: HostListener,
            args: ['touchend', ['$event.changedTouches[0]']]
        }], onMove: [{
            type: HostListener,
            args: ['mousemove', ['$event']]
        }, {
            type: HostListener,
            args: ['touchmove', ['$event.changedTouches[0]']]
        }], onMouseup: [{
            type: HostListener,
            args: ['mouseup', ['$event']]
        }, {
            type: HostListener,
            args: ['document:mouseup', ['$event']]
        }], onKeydown: [{
            type: HostListener,
            args: ['document:keydown', ['$event']]
        }] }); })();

const _c0 = ["clockFace"];
const _c1 = function (a0) { return { transform: a0 }; };
function MateTimepickerDialogHourComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 8);
    ɵɵelementStart(1, "span", 9);
    ɵɵtext(2);
    ɵɵpipe(3, "number");
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const hour_r3 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassProp("active", hour_r3 == ctx_r1.value);
    ɵɵproperty("ngStyle", ɵɵpureFunction1(8, _c1, "translateX(-50%) rotateZ(" + ctx_r1.step * hour_r3 + "deg)"));
    ɵɵadvance(1);
    ɵɵproperty("ngStyle", ɵɵpureFunction1(10, _c1, "rotateZ(" + -ctx_r1.step * hour_r3 + "deg)"));
    ɵɵadvance(1);
    ɵɵtextInterpolate(ɵɵpipeBind2(3, 5, hour_r3, "1.0"));
} }
function MateTimepickerDialogHourComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 10);
    ɵɵelementStart(1, "span", 9);
    ɵɵtext(2);
    ɵɵpipe(3, "number");
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const hour_r4 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassProp("active", hour_r4 == ctx_r2.value % 24);
    ɵɵproperty("ngStyle", ɵɵpureFunction1(8, _c1, "translateX(-50%) rotateZ(" + ctx_r2.step * (hour_r4 % 12) + "deg)"));
    ɵɵadvance(1);
    ɵɵproperty("ngStyle", ɵɵpureFunction1(10, _c1, "rotateZ(" + -ctx_r2.step * (hour_r4 % 12) + "deg)"));
    ɵɵadvance(1);
    ɵɵtextInterpolate(ɵɵpipeBind2(3, 5, hour_r4, "2.0"));
} }
class MateTimepickerDialogHourComponent extends MateTimepickerFace {
    constructor() {
        super();
        this.step = 30;
        this.outerValues = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
        this.innerValues = [0, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
        this.change = new EventEmitter();
        this.finish = new EventEmitter();
    }
    ngOnInit() {
    }
    onChange(value) {
        this.value = value;
        this.change.emit(this.value);
    }
    valueChange(add) {
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
    onFinish() {
        this.finish.emit();
    }
}
MateTimepickerDialogHourComponent.ɵfac = function MateTimepickerDialogHourComponent_Factory(t) { return new (t || MateTimepickerDialogHourComponent)(); };
MateTimepickerDialogHourComponent.ɵcmp = ɵɵdefineComponent({ type: MateTimepickerDialogHourComponent, selectors: [["mate-timepicker-dialog-hour"]], viewQuery: function MateTimepickerDialogHourComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵstaticViewQuery(_c0, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.clockFace = _t.first);
    } }, inputs: { value: "value" }, outputs: { change: "change", finish: "finish" }, exportAs: ["mateTimepickerDialogHour"], features: [ɵɵInheritDefinitionFeature], decls: 8, vars: 9, consts: [[1, "mate-timepicker-face", 3, "keydown"], [1, "clock-face", "hour-face"], ["clockFace", ""], [1, "clock-face__container"], ["class", "clock-face__number clock-face__number--outer", 3, "active", "ngStyle", 4, "ngFor", "ngForOf"], [1, "clock-face__inner"], ["class", "clock-face__number clock-face__number--inner", 3, "active", "ngStyle", 4, "ngFor", "ngForOf"], [1, "clock-face__clock-hand", 3, "ngStyle"], [1, "clock-face__number", "clock-face__number--outer", 3, "ngStyle"], [3, "ngStyle"], [1, "clock-face__number", "clock-face__number--inner", 3, "ngStyle"]], template: function MateTimepickerDialogHourComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵlistener("keydown", function MateTimepickerDialogHourComponent_Template_div_keydown_0_listener($event) { return ctx.onKeydown($event); });
        ɵɵelementStart(1, "div", 1, 2);
        ɵɵelementStart(3, "div", 3);
        ɵɵtemplate(4, MateTimepickerDialogHourComponent_div_4_Template, 4, 12, "div", 4);
        ɵɵelementStart(5, "div", 5);
        ɵɵtemplate(6, MateTimepickerDialogHourComponent_div_6_Template, 4, 12, "div", 6);
        ɵɵelementEnd();
        ɵɵelementEnd();
        ɵɵelement(7, "span", 7);
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(4);
        ɵɵproperty("ngForOf", ctx.outerValues);
        ɵɵadvance(2);
        ɵɵproperty("ngForOf", ctx.innerValues);
        ɵɵadvance(1);
        ɵɵclassProp("outer", ctx.value > 0 && ctx.value <= 12)("inner", ctx.value <= 0 || ctx.value > 12);
        ɵɵproperty("ngStyle", ɵɵpureFunction1(7, _c1, "rotateZ(" + ctx.step * ctx.value + "deg)"));
    } }, directives: [NgForOf, NgStyle], pipes: [DecimalPipe], styles: [".clock-face.hour-face[_ngcontent-%COMP%]   .clock-face__clock-hand.outer[_ngcontent-%COMP%]{height:calc(50% - 27px);top:27px}.clock-face.hour-face[_ngcontent-%COMP%]   .clock-face__clock-hand.inner[_ngcontent-%COMP%]{height:calc(50% - 77px);top:77px}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(MateTimepickerDialogHourComponent, [{
        type: Component,
        args: [{
                selector: 'mate-timepicker-dialog-hour',
                templateUrl: './timepicker-dialog-hour.component.html',
                styleUrls: ['./timepicker-dialog-hour.component.scss'],
                exportAs: 'mateTimepickerDialogHour'
            }]
    }], function () { return []; }, { clockFace: [{
            type: ViewChild,
            args: ['clockFace', { static: true }]
        }], value: [{
            type: Input
        }], change: [{
            type: Output
        }], finish: [{
            type: Output
        }] }); })();

const _c0$1 = ["clockFace"];
const _c1$1 = function (a0) { return { transform: a0 }; };
function MateTimepickerDialogMinuteComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    ɵɵelementStart(0, "div", 6);
    ɵɵelementStart(1, "span", 7);
    ɵɵtext(2);
    ɵɵpipe(3, "number");
    ɵɵelementEnd();
    ɵɵelementEnd();
} if (rf & 2) {
    const minute_r2 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassProp("active", minute_r2 == ctx_r1.value % 60);
    ɵɵproperty("ngStyle", ɵɵpureFunction1(8, _c1$1, "translateX(-50%) rotateZ(" + ctx_r1.step * minute_r2 + "deg)"));
    ɵɵadvance(1);
    ɵɵproperty("ngStyle", ɵɵpureFunction1(10, _c1$1, "rotateZ(" + -ctx_r1.step * minute_r2 + "deg)"));
    ɵɵadvance(1);
    ɵɵtextInterpolate(ɵɵpipeBind2(3, 5, minute_r2, "2.0"));
} }
class MateTimepickerDialogMinuteComponent extends MateTimepickerFace {
    constructor() {
        super();
        this.step = 6;
        this.values = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];
        this.outerValues = Array.from(Array(60).keys());
        this.change = new EventEmitter();
        this.finish = new EventEmitter();
    }
    ngOnInit() {
    }
    onChange(value) {
        this.value = value;
        this.change.emit(this.value);
    }
    valueChange(add) {
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
    onFinish() {
        this.finish.emit();
    }
}
MateTimepickerDialogMinuteComponent.ɵfac = function MateTimepickerDialogMinuteComponent_Factory(t) { return new (t || MateTimepickerDialogMinuteComponent)(); };
MateTimepickerDialogMinuteComponent.ɵcmp = ɵɵdefineComponent({ type: MateTimepickerDialogMinuteComponent, selectors: [["mate-timepicker-dialog-minute"]], viewQuery: function MateTimepickerDialogMinuteComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵstaticViewQuery(_c0$1, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.clockFace = _t.first);
    } }, inputs: { value: "value" }, outputs: { change: "change", finish: "finish" }, exportAs: ["mateTimepickerDialogMinute"], features: [ɵɵInheritDefinitionFeature], decls: 6, vars: 6, consts: [[1, "mate-timepicker-face", 3, "keydown"], [1, "clock-face", "minute-face"], ["clockFace", ""], [1, "clock-face__container"], ["class", "clock-face__number", 3, "active", "ngStyle", 4, "ngFor", "ngForOf"], [1, "clock-face__clock-hand", 3, "ngStyle"], [1, "clock-face__number", 3, "ngStyle"], [3, "ngStyle"]], template: function MateTimepickerDialogMinuteComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵlistener("keydown", function MateTimepickerDialogMinuteComponent_Template_div_keydown_0_listener($event) { return ctx.onKeydown($event); });
        ɵɵelementStart(1, "div", 1, 2);
        ɵɵelementStart(3, "div", 3);
        ɵɵtemplate(4, MateTimepickerDialogMinuteComponent_div_4_Template, 4, 12, "div", 4);
        ɵɵelementEnd();
        ɵɵelement(5, "span", 5);
        ɵɵelementEnd();
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵadvance(4);
        ɵɵproperty("ngForOf", ctx.values);
        ɵɵadvance(1);
        ɵɵclassProp("hand-point", ctx.value % 5 != 0);
        ɵɵproperty("ngStyle", ɵɵpureFunction1(4, _c1$1, "rotateZ(" + ctx.step * ctx.value + "deg)"));
    } }, directives: [NgForOf, NgStyle], pipes: [DecimalPipe], styles: [".clock-face.minute-face[_ngcontent-%COMP%]   .clock-face__clock-hand[_ngcontent-%COMP%]{height:calc(50% - 27px);top:27px}.clock-face.minute-face[_ngcontent-%COMP%]   .clock-face__clock-hand.hand-point[_ngcontent-%COMP%]{height:calc(50% - 15px);top:15px}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(MateTimepickerDialogMinuteComponent, [{
        type: Component,
        args: [{
                selector: 'mate-timepicker-dialog-minute',
                templateUrl: './timepicker-dialog-minute.component.html',
                styleUrls: ['./timepicker-dialog-minute.component.scss'],
                exportAs: 'mateTimepickerDialogMinute'
            }]
    }], function () { return []; }, { clockFace: [{
            type: ViewChild,
            args: ['clockFace', { static: true }]
        }], value: [{
            type: Input
        }], change: [{
            type: Output
        }], finish: [{
            type: Output
        }] }); })();

function MateTimepickerDialogBodyComponent_mate_timepicker_dialog_hour_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mate-timepicker-dialog-hour", 1);
    ɵɵlistener("change", function MateTimepickerDialogBodyComponent_mate_timepicker_dialog_hour_0_Template_mate_timepicker_dialog_hour_change_0_listener($event) { ɵɵrestoreView(_r4); const ctx_r3 = ɵɵnextContext(); return ctx_r3.onChange($event); })("switchClock", function MateTimepickerDialogBodyComponent_mate_timepicker_dialog_hour_0_Template_mate_timepicker_dialog_hour_switchClock_0_listener($event) { ɵɵrestoreView(_r4); const ctx_r5 = ɵɵnextContext(); return ctx_r5.switchClock.emit($event); })("enterPress", function MateTimepickerDialogBodyComponent_mate_timepicker_dialog_hour_0_Template_mate_timepicker_dialog_hour_enterPress_0_listener() { ɵɵrestoreView(_r4); const ctx_r6 = ɵɵnextContext(); return ctx_r6.enterPress.emit(); })("finish", function MateTimepickerDialogBodyComponent_mate_timepicker_dialog_hour_0_Template_mate_timepicker_dialog_hour_finish_0_listener() { ɵɵrestoreView(_r4); const ctx_r7 = ɵɵnextContext(); return ctx_r7.finish.emit(); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("value", ctx_r0.value);
} }
function MateTimepickerDialogBodyComponent_mate_timepicker_dialog_minute_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mate-timepicker-dialog-minute", 1);
    ɵɵlistener("change", function MateTimepickerDialogBodyComponent_mate_timepicker_dialog_minute_1_Template_mate_timepicker_dialog_minute_change_0_listener($event) { ɵɵrestoreView(_r9); const ctx_r8 = ɵɵnextContext(); return ctx_r8.onChange($event); })("switchClock", function MateTimepickerDialogBodyComponent_mate_timepicker_dialog_minute_1_Template_mate_timepicker_dialog_minute_switchClock_0_listener($event) { ɵɵrestoreView(_r9); const ctx_r10 = ɵɵnextContext(); return ctx_r10.switchClock.emit($event); })("enterPress", function MateTimepickerDialogBodyComponent_mate_timepicker_dialog_minute_1_Template_mate_timepicker_dialog_minute_enterPress_0_listener() { ɵɵrestoreView(_r9); const ctx_r11 = ɵɵnextContext(); return ctx_r11.enterPress.emit(); })("finish", function MateTimepickerDialogBodyComponent_mate_timepicker_dialog_minute_1_Template_mate_timepicker_dialog_minute_finish_0_listener() { ɵɵrestoreView(_r9); const ctx_r12 = ɵɵnextContext(); return ctx_r12.finish.emit(); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("value", ctx_r1.value);
} }
function MateTimepickerDialogBodyComponent_mate_timepicker_dialog_minute_2_Template(rf, ctx) { if (rf & 1) {
    const _r14 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "mate-timepicker-dialog-minute", 1);
    ɵɵlistener("change", function MateTimepickerDialogBodyComponent_mate_timepicker_dialog_minute_2_Template_mate_timepicker_dialog_minute_change_0_listener($event) { ɵɵrestoreView(_r14); const ctx_r13 = ɵɵnextContext(); return ctx_r13.onChange($event); })("switchClock", function MateTimepickerDialogBodyComponent_mate_timepicker_dialog_minute_2_Template_mate_timepicker_dialog_minute_switchClock_0_listener($event) { ɵɵrestoreView(_r14); const ctx_r15 = ɵɵnextContext(); return ctx_r15.switchClock.emit($event); })("enterPress", function MateTimepickerDialogBodyComponent_mate_timepicker_dialog_minute_2_Template_mate_timepicker_dialog_minute_enterPress_0_listener() { ɵɵrestoreView(_r14); const ctx_r16 = ɵɵnextContext(); return ctx_r16.enterPress.emit(); })("finish", function MateTimepickerDialogBodyComponent_mate_timepicker_dialog_minute_2_Template_mate_timepicker_dialog_minute_finish_0_listener() { ɵɵrestoreView(_r14); const ctx_r17 = ɵɵnextContext(); return ctx_r17.finish.emit(); });
    ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("value", ctx_r2.value);
} }
class MateTimepickerDialogBodyComponent {
    constructor() {
        this.type = 'hour';
        this.change = new EventEmitter();
        this.switchClock = new EventEmitter();
        this.enterPress = new EventEmitter();
        this.finish = new EventEmitter();
    }
    ngOnInit() {
    }
    onChange(value) {
        this.value = value;
        this.change.emit({
            type: this.type,
            value: this.value
        });
    }
}
MateTimepickerDialogBodyComponent.ɵfac = function MateTimepickerDialogBodyComponent_Factory(t) { return new (t || MateTimepickerDialogBodyComponent)(); };
MateTimepickerDialogBodyComponent.ɵcmp = ɵɵdefineComponent({ type: MateTimepickerDialogBodyComponent, selectors: [["mate-timepicker-dialog-body"]], hostAttrs: [1, "mate-timepicker-dialog-body"], inputs: { type: "type", value: "value" }, outputs: { change: "change", switchClock: "switchClock", enterPress: "enterPress", finish: "finish" }, exportAs: ["mateTimepickerDialogBody"], decls: 3, vars: 3, consts: [[3, "value", "change", "switchClock", "enterPress", "finish", 4, "ngIf"], [3, "value", "change", "switchClock", "enterPress", "finish"]], template: function MateTimepickerDialogBodyComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵtemplate(0, MateTimepickerDialogBodyComponent_mate_timepicker_dialog_hour_0_Template, 1, 1, "mate-timepicker-dialog-hour", 0);
        ɵɵtemplate(1, MateTimepickerDialogBodyComponent_mate_timepicker_dialog_minute_1_Template, 1, 1, "mate-timepicker-dialog-minute", 0);
        ɵɵtemplate(2, MateTimepickerDialogBodyComponent_mate_timepicker_dialog_minute_2_Template, 1, 1, "mate-timepicker-dialog-minute", 0);
    } if (rf & 2) {
        ɵɵproperty("ngIf", ctx.type == "hour");
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.type == "minute");
        ɵɵadvance(1);
        ɵɵproperty("ngIf", ctx.type == "second");
    } }, directives: [NgIf, MateTimepickerDialogHourComponent, MateTimepickerDialogMinuteComponent], styles: [".mate-timepicker-dialog-body[_nghost-%COMP%]{display:flex;flex:auto;margin:1rem 0;width:100%}.mate-timepicker-dialog-body[_nghost-%COMP%]   mate-timepicker-dialog-hour[_ngcontent-%COMP%], .mate-timepicker-dialog-body[_nghost-%COMP%]   mate-timepicker-dialog-minute[_ngcontent-%COMP%]{display:block;margin:auto}.mate-timepicker-dialog-body[_nghost-%COMP%]     .mate-timepicker-face{-webkit-user-select:none;user-select:none}.mate-timepicker-dialog-body[_nghost-%COMP%]     .mate-timepicker-face .clock-face{border-radius:50%;box-sizing:border-box;display:flex;height:260px;justify-content:center;margin:auto;position:relative;width:260px}.mate-timepicker-dialog-body[_nghost-%COMP%]     .mate-timepicker-face .clock-face .clock-face__container{height:100%}.mate-timepicker-dialog-body[_nghost-%COMP%]     .mate-timepicker-face .clock-face .clock-face__container .clock-face__number{font-size:14px;height:100%;position:absolute;text-align:center;width:30px;z-index:10}.mate-timepicker-dialog-body[_nghost-%COMP%]     .mate-timepicker-face .clock-face .clock-face__container .clock-face__number span{-webkit-user-select:none;align-items:center;border-radius:50%;display:flex;font-weight:500;height:30px;justify-content:center;margin:auto;user-select:none;width:30px}.mate-timepicker-dialog-body[_nghost-%COMP%]     .mate-timepicker-face .clock-face .clock-face__container .clock-face__inner{border-radius:50%;display:flex;height:calc(100% - 100px);position:absolute;top:50px}.mate-timepicker-dialog-body[_nghost-%COMP%]     .mate-timepicker-face .clock-face .clock-face__container .clock-face__inner .clock-face__number{font-size:12px;width:30px}.mate-timepicker-dialog-body[_nghost-%COMP%]     .mate-timepicker-face .clock-face .clock-face__clock-hand{position:absolute;transform-origin:bottom center;width:2px;z-index:1}.mate-timepicker-dialog-body[_nghost-%COMP%]     .mate-timepicker-face .clock-face .clock-face__clock-hand:after{background-color:inherit;border-radius:50%;bottom:-3px;content:\"\";height:6px;left:-2px;position:absolute;width:6px}.mate-timepicker-dialog-body[_nghost-%COMP%]     .mate-timepicker-face .clock-face .clock-face__clock-hand.hand-point:before{border-radius:50%;border-style:solid;border-width:8px;box-sizing:initial;content:\"\";height:4px;left:calc(50% - 10px);position:absolute;top:-11px;width:4px}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(MateTimepickerDialogBodyComponent, [{
        type: Component,
        args: [{
                selector: 'mate-timepicker-dialog-body',
                templateUrl: './timepicker-dialog-body.component.html',
                styleUrls: ['./timepicker-dialog-body.component.scss'],
                host: {
                    class: 'mate-timepicker-dialog-body'
                },
                exportAs: 'mateTimepickerDialogBody'
            }]
    }], function () { return []; }, { type: [{
            type: Input
        }], value: [{
            type: Input
        }], change: [{
            type: Output
        }], switchClock: [{
            type: Output
        }], enterPress: [{
            type: Output
        }], finish: [{
            type: Output
        }] }); })();

class MateTimepickerDialogFooterComponent {
    constructor() {
        this.clickOk = new EventEmitter();
        this.clickCancel = new EventEmitter();
    }
    ngOnInit() {
    }
}
MateTimepickerDialogFooterComponent.ɵfac = function MateTimepickerDialogFooterComponent_Factory(t) { return new (t || MateTimepickerDialogFooterComponent)(); };
MateTimepickerDialogFooterComponent.ɵcmp = ɵɵdefineComponent({ type: MateTimepickerDialogFooterComponent, selectors: [["mate-timepicker-dialog-footer"]], hostAttrs: [1, "mate-timepicker-dialog-footer"], outputs: { clickOk: "clickOk", clickCancel: "clickCancel" }, exportAs: ["mateTimepickerDialogFooter"], decls: 5, vars: 0, consts: [[1, "mate-timepicker-actions"], ["mat-raised-button", "", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "click"]], template: function MateTimepickerDialogFooterComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "div", 0);
        ɵɵelementStart(1, "button", 1);
        ɵɵlistener("click", function MateTimepickerDialogFooterComponent_Template_button_click_1_listener() { return ctx.clickCancel.emit(); });
        ɵɵtext(2, "Cancel");
        ɵɵelementEnd();
        ɵɵelementStart(3, "button", 2);
        ɵɵlistener("click", function MateTimepickerDialogFooterComponent_Template_button_click_3_listener() { return ctx.clickOk.emit(); });
        ɵɵtext(4, "Ok");
        ɵɵelementEnd();
        ɵɵelementEnd();
    } }, directives: [MatButton], styles: [".mate-timepicker-dialog-footer[_nghost-%COMP%]{display:block;width:100%}.mate-timepicker-dialog-footer[_nghost-%COMP%]   .mate-timepicker-actions[_ngcontent-%COMP%]{align-content:flex-end;display:flex;justify-content:flex-end;margin-left:auto}.mate-timepicker-dialog-footer[_nghost-%COMP%]   .mate-timepicker-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:not(:first-child){margin-left:.5rem}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(MateTimepickerDialogFooterComponent, [{
        type: Component,
        args: [{
                selector: 'mate-timepicker-dialog-footer',
                templateUrl: './timepicker-dialog-footer.component.html',
                styleUrls: ['./timepicker-dialog-footer.component.scss'],
                host: {
                    class: 'mate-timepicker-dialog-footer'
                },
                exportAs: 'mateTimepickerDialogFooter'
            }]
    }], function () { return []; }, { clickOk: [{
            type: Output
        }], clickCancel: [{
            type: Output
        }] }); })();

class MateTimepickerDialogComponent {
    constructor() {
        this.clockActive = 'hour';
        this.valueActive = 0;
        this.second = false;
        this.change = new EventEmitter();
        this.cancel = new EventEmitter();
    }
    set value(value) {
        if (value)
            this._value = value;
        else if (this.defaultValue)
            this._value = this.defaultValue.clone();
        else
            this._value = Duration.now(this.second);
        this.valueActive = this._value.getValue(this.clockActive);
    }
    get value() {
        return this._value;
    }
    ngOnInit() {
        if (!this._value)
            this._value = Duration.now(this.second);
        this.valueActive = this._value.getValue(this.clockActive);
    }
    onActive(type) {
        this.clockActive = type;
        this.valueActive = this._value.getValue(type);
    }
    onChange(value) {
        this._value = this._value.setNew(value.type, value.value);
        this.valueActive = value.value;
    }
    onSwitch() {
        if (this.clockActive === 'hour')
            this.onActive('minute');
        else if (this.second && this.clockActive === 'minute')
            this.onActive('second');
    }
    onClockSwitch(type) {
        if (type === 'right')
            this.onSwitch();
        else if (type === 'left') {
            if (this.clockActive === 'second')
                this.onActive('minute');
            else if (this.clockActive === 'minute')
                this.onActive('hour');
        }
        else if (type === 'start' && this.clockActive !== 'hour') {
            this.onActive('hour');
        }
        else if (type === 'end') {
            if (!this.second && this.clockActive !== 'minute')
                this.onActive('minute');
            else if (this.second && this.clockActive !== 'second')
                this.onActive('second');
        }
    }
    onOk() {
        this.change.emit(this._value);
    }
    onCancel() {
        this.cancel.emit();
    }
}
MateTimepickerDialogComponent.ɵfac = function MateTimepickerDialogComponent_Factory(t) { return new (t || MateTimepickerDialogComponent)(); };
MateTimepickerDialogComponent.ɵcmp = ɵɵdefineComponent({ type: MateTimepickerDialogComponent, selectors: [["mate-timepicker-dialog"]], hostAttrs: [1, "mate-timepicker-dialog"], inputs: { second: "second", defaultValue: "defaultValue", value: "value" }, outputs: { change: "change", cancel: "cancel" }, exportAs: ["mateTimepickerDialog"], decls: 3, vars: 5, consts: [[3, "type", "value", "second", "active"], [3, "value", "type", "change", "switchClock", "enterPress", "finish"], [3, "clickOk", "clickCancel"]], template: function MateTimepickerDialogComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mate-timepicker-dialog-header", 0);
        ɵɵlistener("active", function MateTimepickerDialogComponent_Template_mate_timepicker_dialog_header_active_0_listener($event) { return ctx.onActive($event); });
        ɵɵelementEnd();
        ɵɵelementStart(1, "mate-timepicker-dialog-body", 1);
        ɵɵlistener("change", function MateTimepickerDialogComponent_Template_mate_timepicker_dialog_body_change_1_listener($event) { return ctx.onChange($event); })("switchClock", function MateTimepickerDialogComponent_Template_mate_timepicker_dialog_body_switchClock_1_listener($event) { return ctx.onClockSwitch($event); })("enterPress", function MateTimepickerDialogComponent_Template_mate_timepicker_dialog_body_enterPress_1_listener() { return ctx.onOk(); })("finish", function MateTimepickerDialogComponent_Template_mate_timepicker_dialog_body_finish_1_listener() { return ctx.onSwitch(); });
        ɵɵelementEnd();
        ɵɵelementStart(2, "mate-timepicker-dialog-footer", 2);
        ɵɵlistener("clickOk", function MateTimepickerDialogComponent_Template_mate_timepicker_dialog_footer_clickOk_2_listener() { return ctx.onOk(); })("clickCancel", function MateTimepickerDialogComponent_Template_mate_timepicker_dialog_footer_clickCancel_2_listener() { return ctx.onCancel(); });
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("type", ctx.clockActive)("value", ctx.value)("second", ctx.second);
        ɵɵadvance(1);
        ɵɵproperty("value", ctx.valueActive)("type", ctx.clockActive);
    } }, directives: [MateTimepickerDialogHeaderComponent, MateTimepickerDialogBodyComponent, MateTimepickerDialogFooterComponent], styles: [".mate-timepicker-dialog[_nghost-%COMP%]{display:flex;flex-direction:column;height:420px;padding:8px;width:280px}.mate-timepicker-dialog[_nghost-%COMP%]   .mate-dialog-container[_ngcontent-%COMP%]{overflow:visible}"] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(MateTimepickerDialogComponent, [{
        type: Component,
        args: [{
                selector: 'mate-timepicker-dialog',
                templateUrl: './timepicker-dialog.component.html',
                styleUrls: ['./timepicker-dialog.component.scss'],
                host: {
                    class: 'mate-timepicker-dialog'
                },
                exportAs: 'mateTimepickerDialog'
            }]
    }], function () { return []; }, { second: [{
            type: Input
        }], defaultValue: [{
            type: Input
        }], value: [{
            type: Input
        }], change: [{
            type: Output
        }], cancel: [{
            type: Output
        }] }); })();

class MateTimepickerContentBase {
    constructor(_elementRef) {
        this._elementRef = _elementRef;
    }
}
const _MateTimepickerContentMixinBase = mixinColor(MateTimepickerContentBase);
class MateTimepickerContentComponent extends _MateTimepickerContentMixinBase {
    constructor(elementRef) {
        super(elementRef);
    }
    ngAfterViewInit() {
    }
}
MateTimepickerContentComponent.ɵfac = function MateTimepickerContentComponent_Factory(t) { return new (t || MateTimepickerContentComponent)(ɵɵdirectiveInject(ElementRef)); };
MateTimepickerContentComponent.ɵcmp = ɵɵdefineComponent({ type: MateTimepickerContentComponent, selectors: [["mate-timepicker-content"]], hostAttrs: [1, "mate-timepicker-content"], hostVars: 2, hostBindings: function MateTimepickerContentComponent_HostBindings(rf, ctx) { if (rf & 2) {
        ɵɵclassProp("mate-timepicker-content-touch", ctx.timepicker.touchUi);
    } }, inputs: { color: "color" }, exportAs: ["mateTimepickerContent"], features: [ɵɵInheritDefinitionFeature], decls: 1, vars: 4, consts: [[3, "id", "defaultValue", "second", "value", "change", "cancel"]], template: function MateTimepickerContentComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵelementStart(0, "mate-timepicker-dialog", 0);
        ɵɵlistener("change", function MateTimepickerContentComponent_Template_mate_timepicker_dialog_change_0_listener($event) { return ctx.timepicker.select($event); })("cancel", function MateTimepickerContentComponent_Template_mate_timepicker_dialog_cancel_0_listener() { return ctx.timepicker.close(); });
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("id", ctx.timepicker.id)("defaultValue", ctx.timepicker == null ? null : ctx.timepicker._timepickerInput == null ? null : ctx.timepicker._timepickerInput.defaultValue)("second", ctx.timepicker.second)("value", ctx.timepicker._selected);
    } }, directives: [MateTimepickerDialogComponent], styles: [".mat-badge-content{font-family:Roboto,Helvetica Neue,sans-serif;font-size:12px;font-weight:600}.mat-badge-small .mat-badge-content{font-size:9px}.mat-badge-large .mat-badge-content{font-size:24px}.mat-h1,.mat-headline,.mat-typography h1{font:400 24px/32px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal;margin:0 0 16px}.mat-h2,.mat-title,.mat-typography h2{font:500 20px/32px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal;margin:0 0 16px}.mat-h3,.mat-subheading-2,.mat-typography h3{font:400 16px/28px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal;margin:0 0 16px}.mat-h4,.mat-subheading-1,.mat-typography h4{font:400 15px/24px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal;margin:0 0 16px}.mat-h5,.mat-typography h5{font:400 11.62px/20px Roboto,Helvetica Neue,sans-serif;margin:0 0 12px}.mat-h6,.mat-typography h6{font:400 9.38px/20px Roboto,Helvetica Neue,sans-serif;margin:0 0 12px}.mat-body-2,.mat-body-strong{font:500 14px/24px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-body,.mat-body-1,.mat-typography{font:400 14px/20px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-body-1 p,.mat-body p,.mat-typography p{margin:0 0 12px}.mat-caption,.mat-small{font:400 12px/20px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-display-4,.mat-typography .mat-display-4{font:300 112px/112px Roboto,Helvetica Neue,sans-serif;letter-spacing:-.05em;margin:0 0 56px}.mat-display-3,.mat-typography .mat-display-3{font:400 56px/56px Roboto,Helvetica Neue,sans-serif;letter-spacing:-.02em;margin:0 0 64px}.mat-display-2,.mat-typography .mat-display-2{font:400 45px/48px Roboto,Helvetica Neue,sans-serif;letter-spacing:-.005em;margin:0 0 64px}.mat-display-1,.mat-typography .mat-display-1{font:400 34px/40px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal;margin:0 0 64px}.mat-bottom-sheet-container{font:400 14px/20px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-button,.mat-fab,.mat-flat-button,.mat-icon-button,.mat-mini-fab,.mat-raised-button,.mat-stroked-button{font-family:Roboto,Helvetica Neue,sans-serif;font-size:14px;font-weight:500}.mat-button-toggle,.mat-card{font-family:Roboto,Helvetica Neue,sans-serif}.mat-card-title{font-size:24px;font-weight:500}.mat-card-header .mat-card-title{font-size:20px}.mat-card-content,.mat-card-subtitle{font-size:14px}.mat-checkbox{font-family:Roboto,Helvetica Neue,sans-serif}.mat-checkbox-layout .mat-checkbox-label{line-height:24px}.mat-chip{font-size:14px;font-weight:500}.mat-chip .mat-chip-remove.mat-icon,.mat-chip .mat-chip-trailing-icon.mat-icon{font-size:18px}.mat-table{font-family:Roboto,Helvetica Neue,sans-serif}.mat-header-cell{font-size:12px;font-weight:500}.mat-cell,.mat-footer-cell{font-size:14px}.mat-calendar{font-family:Roboto,Helvetica Neue,sans-serif}.mat-calendar-body{font-size:13px}.mat-calendar-body-label,.mat-calendar-period-button{font-size:14px;font-weight:500}.mat-calendar-table-header th{font-size:11px;font-weight:400}.mat-dialog-title{font:500 20px/32px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-expansion-panel-header{font-family:Roboto,Helvetica Neue,sans-serif;font-size:15px;font-weight:400}.mat-expansion-panel-content{font:400 14px/20px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-form-field{font-family:Roboto,Helvetica Neue,sans-serif;font-size:inherit;font-weight:400;letter-spacing:normal;line-height:1.125}.mat-form-field-wrapper{padding-bottom:1.34375em}.mat-form-field-prefix .mat-icon,.mat-form-field-suffix .mat-icon{font-size:150%;line-height:1.125}.mat-form-field-prefix .mat-icon-button,.mat-form-field-suffix .mat-icon-button{height:1.5em;width:1.5em}.mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field-suffix .mat-icon-button .mat-icon{height:1.125em;line-height:1.125}.mat-form-field-infix{border-top:.84375em solid transparent;padding:.5em 0}.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label,.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label{transform:translateY(-1.34375em) scale(.75);width:133.3333333333%}.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{transform:translateY(-1.34374em) scale(.75);width:133.3333433333%}.mat-form-field-label-wrapper{padding-top:.84375em;top:-.84375em}.mat-form-field-label{top:1.34375em}.mat-form-field-underline{bottom:1.34375em}.mat-form-field-subscript-wrapper{font-size:75%;margin-top:.6666666667em;top:calc(100% - 1.79167em)}.mat-form-field-appearance-legacy .mat-form-field-wrapper{padding-bottom:1.25em}.mat-form-field-appearance-legacy .mat-form-field-infix{padding:.4375em 0}.mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label,.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label{-ms-transform:translateY(-1.28125em) scale(.75);transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.001px);width:133.3333333333%}.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{-ms-transform:translateY(-1.28124em) scale(.75);transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00101px);width:133.3333433333%}.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{-ms-transform:translateY(-1.28123em) scale(.75);transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00102px);width:133.3333533333%}.mat-form-field-appearance-legacy .mat-form-field-label{top:1.28125em}.mat-form-field-appearance-legacy .mat-form-field-underline{bottom:1.25em}.mat-form-field-appearance-legacy .mat-form-field-subscript-wrapper{margin-top:.5416666667em;top:calc(100% - 1.66667em)}@media print{.mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label,.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label{transform:translateY(-1.28122em) scale(.75)}.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{transform:translateY(-1.28121em) scale(.75)}.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{transform:translateY(-1.2812em) scale(.75)}}.mat-form-field-appearance-fill .mat-form-field-infix{padding:.25em 0 .75em}.mat-form-field-appearance-fill .mat-form-field-label{margin-top:-.5em;top:1.09375em}.mat-form-field-appearance-fill.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label,.mat-form-field-appearance-fill.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label{transform:translateY(-.59375em) scale(.75);width:133.3333333333%}.mat-form-field-appearance-fill.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{transform:translateY(-.59374em) scale(.75);width:133.3333433333%}.mat-form-field-appearance-outline .mat-form-field-infix{padding:1em 0}.mat-form-field-appearance-outline .mat-form-field-label{margin-top:-.25em;top:1.84375em}.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label,.mat-form-field-appearance-outline.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label{transform:translateY(-1.59375em) scale(.75);width:133.3333333333%}.mat-form-field-appearance-outline.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{transform:translateY(-1.59374em) scale(.75);width:133.3333433333%}.mat-grid-tile-footer,.mat-grid-tile-header{font-size:14px}.mat-grid-tile-footer .mat-line,.mat-grid-tile-header .mat-line{box-sizing:border-box;display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-grid-tile-footer .mat-line:nth-child(n+2),.mat-grid-tile-header .mat-line:nth-child(n+2){font-size:12px}input.mat-input-element{margin-top:-.0625em}.mat-menu-item{font-family:Roboto,Helvetica Neue,sans-serif;font-size:14px;font-weight:400}.mat-paginator,.mat-paginator-page-size .mat-select-trigger{font-family:Roboto,Helvetica Neue,sans-serif;font-size:12px}.mat-radio-button,.mat-select{font-family:Roboto,Helvetica Neue,sans-serif}.mat-select-trigger{height:1.125em}.mat-slide-toggle-content,.mat-slider-thumb-label-text{font-family:Roboto,Helvetica Neue,sans-serif}.mat-slider-thumb-label-text{font-size:12px;font-weight:500}.mat-stepper-horizontal,.mat-stepper-vertical{font-family:Roboto,Helvetica Neue,sans-serif}.mat-step-label{font-size:14px;font-weight:400}.mat-step-sub-label-error{font-weight:400}.mat-step-label-error{font-size:14px}.mat-step-label-selected{font-size:14px;font-weight:500}.mat-tab-group,.mat-tab-label,.mat-tab-link{font-family:Roboto,Helvetica Neue,sans-serif}.mat-tab-label,.mat-tab-link{font-size:14px;font-weight:500}.mat-toolbar,.mat-toolbar h1,.mat-toolbar h2,.mat-toolbar h3,.mat-toolbar h4,.mat-toolbar h5,.mat-toolbar h6{font:500 20px/32px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal;margin:0}.mat-tooltip{font-family:Roboto,Helvetica Neue,sans-serif;font-size:10px;padding-bottom:6px;padding-top:6px}.mat-tooltip-handset{font-size:14px;padding-bottom:8px;padding-top:8px}.mat-list-item,.mat-list-option{font-family:Roboto,Helvetica Neue,sans-serif}.mat-list-base .mat-list-item{font-size:16px}.mat-list-base .mat-list-item .mat-line{box-sizing:border-box;display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-list-base .mat-list-item .mat-line:nth-child(n+2){font-size:14px}.mat-list-base .mat-list-option{font-size:16px}.mat-list-base .mat-list-option .mat-line{box-sizing:border-box;display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-list-base .mat-list-option .mat-line:nth-child(n+2){font-size:14px}.mat-list-base .mat-subheader{font-family:Roboto,Helvetica Neue,sans-serif;font-size:14px;font-weight:500}.mat-list-base[dense] .mat-list-item{font-size:12px}.mat-list-base[dense] .mat-list-item .mat-line{box-sizing:border-box;display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-list-base[dense] .mat-list-item .mat-line:nth-child(n+2),.mat-list-base[dense] .mat-list-option{font-size:12px}.mat-list-base[dense] .mat-list-option .mat-line{box-sizing:border-box;display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-list-base[dense] .mat-list-option .mat-line:nth-child(n+2){font-size:12px}.mat-list-base[dense] .mat-subheader{font-family:Roboto,Helvetica Neue,sans-serif;font-size:12px;font-weight:500}.mat-option{font-family:Roboto,Helvetica Neue,sans-serif;font-size:16px}.mat-optgroup-label{font:500 14px/24px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-simple-snackbar{font-family:Roboto,Helvetica Neue,sans-serif;font-size:14px}.mat-simple-snackbar-action{font-family:inherit;font-size:inherit;font-weight:500;line-height:1}.mat-tree{font-family:Roboto,Helvetica Neue,sans-serif}.mat-nested-tree-node,.mat-tree-node{font-size:14px;font-weight:400}.mat-ripple{overflow:hidden;position:relative}.mat-ripple:not(:empty){transform:translateZ(0)}.mat-ripple.mat-ripple-unbounded{overflow:visible}.mat-ripple-element{border-radius:50%;pointer-events:none;position:absolute;transform:scale(0);transition:opacity,transform 0ms cubic-bezier(0,0,.2,1)}.cdk-high-contrast-active .mat-ripple-element{display:none}.cdk-visually-hidden{-moz-appearance:none;-webkit-appearance:none;border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;outline:0;overflow:hidden;padding:0;position:absolute;width:1px}.cdk-global-overlay-wrapper,.cdk-overlay-container{height:100%;left:0;pointer-events:none;top:0;width:100%}.cdk-overlay-container{position:fixed;z-index:1000}.cdk-overlay-container:empty{display:none}.cdk-global-overlay-wrapper,.cdk-overlay-pane{display:flex;position:absolute;z-index:1000}.cdk-overlay-pane{box-sizing:border-box;max-height:100%;max-width:100%;pointer-events:auto}.cdk-overlay-backdrop{-webkit-tap-highlight-color:transparent;bottom:0;left:0;opacity:0;pointer-events:auto;position:absolute;right:0;top:0;transition:opacity .4s cubic-bezier(.25,.8,.25,1);z-index:1000}.cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:1}@media screen and (-ms-high-contrast:active){.cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:.6}}.cdk-overlay-dark-backdrop{background:rgba(0,0,0,.32)}.cdk-overlay-transparent-backdrop,.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing{opacity:0}.cdk-overlay-connected-position-bounding-box{display:flex;flex-direction:column;min-height:1px;min-width:1px;position:absolute;z-index:1000}.cdk-global-scrollblock{overflow-y:scroll;position:fixed;width:100%}@keyframes cdk-text-field-autofill-start{\n  /*!*/}@keyframes cdk-text-field-autofill-end{\n  /*!*/}.cdk-text-field-autofill-monitored:-webkit-autofill{animation:cdk-text-field-autofill-start 0s 1ms}.cdk-text-field-autofill-monitored:not(:-webkit-autofill){animation:cdk-text-field-autofill-end 0s 1ms}textarea.cdk-textarea-autosize{resize:none}textarea.cdk-textarea-autosize-measuring{box-sizing:initial!important;height:auto!important;overflow:hidden!important;padding:2px 0!important}textarea.cdk-textarea-autosize-measuring-firefox{box-sizing:initial!important;height:0!important;padding:2px 0!important}.mat-focus-indicator,.mat-mdc-focus-indicator{position:relative}.mate-timepicker-content{border-radius:4px;box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12);display:block}.mate-timepicker-content-touch{display:block;margin:-24px;max-height:80vh;overflow:auto}.mate-timepicker-content-touch .mate-timepicker-dialog{max-height:788px;max-width:750px;min-height:312px;min-width:250px}.mate-timepicker-content{background-color:#fff;color:rgba(0,0,0,.87)}.mate-timepicker-content .mate-timepicker-dialog-header .mate-timepicker-dial .timepicker-dial-time{color:rgba(0,0,0,.54)}.mate-timepicker-content .mate-timepicker-dialog-body .mate-timepicker-face,.mate-timepicker-content .mate-timepicker-dialog-header .mate-timepicker-dial .timepicker-dial-time label.timepicker-dial-time-item.active{color:rgba(0,0,0,.87)}.mate-timepicker-content .mate-timepicker-face .clock-face .clock-face__container .clock-face__number.active span{background:#3f51b5;color:#fff}.mate-timepicker-content .mate-timepicker-face .clock-face .clock-face__clock-hand{background-color:#3f51b5}.mate-timepicker-content .mate-timepicker-face .clock-face .clock-face__clock-hand.hand-point:before{background-color:#fff;border-color:#3f51b5}.mate-timepicker-content.mat-accent .mate-timepicker-face .clock-face .clock-face__container .clock-face__number.active span{background:#ff4081;color:#fff}.mate-timepicker-content.mat-accent .mate-timepicker-face .clock-face .clock-face__clock-hand{background-color:#ff4081}.mate-timepicker-content.mat-accent .mate-timepicker-face .clock-face .clock-face__clock-hand.hand-point:before{background-color:#fff;border-color:#ff4081}.mate-timepicker-content.mat-warn .mate-timepicker-face .clock-face .clock-face__container .clock-face__number.active span{background:#f44336;color:#fff}.mate-timepicker-content.mat-warn .mate-timepicker-face .clock-face .clock-face__clock-hand{background-color:#f44336}.mate-timepicker-content.mat-warn .mate-timepicker-face .clock-face .clock-face__clock-hand.hand-point:before{background-color:#fff;border-color:#f44336}"], encapsulation: 2, data: { animation: [
        // matDatepickerAnimations.transformPanel,
        // matDatepickerAnimations.fadeInCalendar
        ] }, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(MateTimepickerContentComponent, [{
        type: Component,
        args: [{
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
            }]
    }], function () { return [{ type: ElementRef }]; }, null); })();

class MateTimepickerInputEvent {
    constructor(target, targetElement) {
        this.target = target;
        this.targetElement = targetElement;
        this.value = this.target.value;
    }
}
class MateTimepickerInputDirective {
    constructor(_decimalPipe, _elementRef, _formField) {
        this._decimalPipe = _decimalPipe;
        this._elementRef = _elementRef;
        this._formField = _formField;
        this._value = Duration.zero();
        this._timepickerSubscription = Subscription.EMPTY;
        this._validator = Validators.compose([]);
        this._disabledChange = new EventEmitter();
        this._valueChange = new EventEmitter();
        this.maxLength = 8;
        this.timeChange = new EventEmitter();
        this.timeInput = new EventEmitter();
        this._onTouched = () => {
        };
        this._validatorOnChange = () => {
        };
        this._cvaOnChange = () => {
        };
    }
    set mateTimepicker(value) {
        if (!value)
            return;
        this._timepicker = value;
        this._timepicker._registerInput(this);
        this._timepickerSubscription.unsubscribe();
        this._timepickerSubscription = this._timepicker._selectedChanged.subscribe((selected) => {
            this.value = selected;
            this._cvaOnChange(selected);
            this._onTouched();
            this.timeInput.emit(new MateTimepickerInputEvent(this, this._elementRef.nativeElement));
            this.timeChange.emit(new MateTimepickerInputEvent(this, this._elementRef.nativeElement));
        });
    }
    get value() {
        return this._value;
    }
    set value(value) {
        const oldDate = this.value;
        value = this._convertValue(value);
        this._value = value;
        this._formatValue(value);
        if (!this.sameTime(oldDate, value))
            this._valueChange.emit(value);
    }
    get disabled() {
        return !!this._disabled;
    }
    set disabled(value) {
        const newValue = coerceBooleanProperty(value);
        const element = this._elementRef.nativeElement;
        if (this._disabled !== newValue) {
            this._disabled = newValue;
            this._disabledChange.emit(newValue);
        }
        if (newValue && element.blur)
            element.blur();
    }
    set defaultValue(value) {
        this._defaultValue = this._convertValue(value);
    }
    get defaultValue() {
        return this._defaultValue;
    }
    ngOnDestroy() {
        this._valueChange.complete();
        this._disabledChange.complete();
    }
    _onKeydown(event) {
        const isAltDownArrow = event.altKey && event.code === 'ArrowDown' || event['keyCode'] === DOWN_ARROW;
        if (this._timepicker && isAltDownArrow && !this._elementRef.nativeElement.readOnly) {
            this._timepicker.open();
            event.preventDefault();
        }
    }
    _onInput(value) {
        const time = this._convertValue(value);
        if (!this.sameTime(this._value, time)) {
            this._value = time;
            this._cvaOnChange(time);
            this._valueChange.emit(time);
            this.timeInput.emit(new MateTimepickerInputEvent(this, this._elementRef.nativeElement));
        }
        else if (time == null)
            this._validatorOnChange();
    }
    _onChange() {
        this.timeChange.emit(new MateTimepickerInputEvent(this, this._elementRef.nativeElement));
    }
    _onBlur() {
        // Reformat the input only if we have a valid value.
        this._formatValue(this.value);
        this._onTouched();
    }
    _getThemePalette() {
        return this._formField ? this._formField.color : undefined;
    }
    reformatValue() {
        this._formatValue(this.value);
    }
    sameTime(v1, v2) {
        return TimepickerUtil.isEqualsDeep(v1, v2) || v1 != null && v2 != null && typeof v1.equals === 'function' && v1.equals(v2);
    }
    _convertValue(value) {
        if (value && !(value instanceof Duration)) {
            if (typeof value === 'string')
                return Duration.fromString(value);
            else if (typeof value === 'number')
                return Duration.fromMillis(value);
            else if (value instanceof Date)
                return Duration.fromDate(value);
            else
                return null;
        }
        return value;
    }
    _formatValue(value) {
        let timeValue = '';
        if (value instanceof Duration) {
            timeValue = `${this._decimalPipe.transform(value.hour, '2.0')}:${this._decimalPipe.transform(value.minute, '2.0')}`;
            if (this._timepicker.second)
                timeValue = typeof value.second === 'number' ?
                    `${timeValue}:${this._decimalPipe.transform(value.second, '2.0')}` : '';
        }
        this._elementRef.nativeElement.value = timeValue;
    }
    getPopupConnectionElementRef() {
        return this.getConnectedOverlayOrigin();
    }
    getConnectedOverlayOrigin() {
        return this._formField ? this._formField.getConnectedOverlayOrigin() : this._elementRef;
    }
    registerOnChange(fn) {
        this._cvaOnChange = fn;
    }
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
    registerOnValidatorChange(fn) {
        this._validatorOnChange = fn;
    }
    validate(control) {
        return this._validator ? this._validator(control) : null;
    }
    writeValue(obj) {
        this.value = obj;
    }
}
MateTimepickerInputDirective.ɵfac = function MateTimepickerInputDirective_Factory(t) { return new (t || MateTimepickerInputDirective)(ɵɵdirectiveInject(DecimalPipe), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(MatFormField, 8)); };
MateTimepickerInputDirective.ɵdir = ɵɵdefineDirective({ type: MateTimepickerInputDirective, selectors: [["input", "mateTimepicker", ""]], hostVars: 4, hostBindings: function MateTimepickerInputDirective_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("keydown", function MateTimepickerInputDirective_keydown_HostBindingHandler($event) { return ctx._onKeydown($event); })("input", function MateTimepickerInputDirective_input_HostBindingHandler($event) { return ctx._onInput($event.target.value); })("change", function MateTimepickerInputDirective_change_HostBindingHandler() { return ctx._onChange(); })("blur", function MateTimepickerInputDirective_blur_HostBindingHandler() { return ctx._onBlur(); });
    } if (rf & 2) {
        ɵɵhostProperty("disabled", ctx.disabled)("maxLength", ctx.maxLength);
        ɵɵattribute("aria-haspopup", ctx._timepicker ? "dialog" : null)("aria-owns", (ctx._timepicker == null ? null : ctx._timepicker.opened) && ctx._timepicker.id || null);
    } }, inputs: { mateTimepicker: "mateTimepicker", value: "value", disabled: "disabled", defaultValue: "defaultValue" }, outputs: { timeChange: "timeChange", timeInput: "timeInput" }, exportAs: ["mateDatepickerInput"], features: [ɵɵProvidersFeature([
            { provide: MAT_INPUT_VALUE_ACCESSOR, useExisting: MateTimepickerInputDirective },
            DecimalPipe
        ])] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(MateTimepickerInputDirective, [{
        type: Directive,
        args: [{
                selector: 'input[mateTimepicker]',
                providers: [
                    { provide: MAT_INPUT_VALUE_ACCESSOR, useExisting: MateTimepickerInputDirective },
                    DecimalPipe
                ],
                host: {
                    '[attr.aria-haspopup]': '_timepicker ? "dialog" : null',
                    '[attr.aria-owns]': '(_timepicker?.opened && _timepicker.id) || null',
                    '[disabled]': 'disabled'
                },
                exportAs: 'mateDatepickerInput'
            }]
    }], function () { return [{ type: DecimalPipe }, { type: ElementRef }, { type: MatFormField, decorators: [{
                type: Optional
            }] }]; }, { maxLength: [{
            type: HostBinding,
            args: ['maxLength']
        }], mateTimepicker: [{
            type: Input
        }], value: [{
            type: Input
        }], disabled: [{
            type: Input
        }], defaultValue: [{
            type: Input
        }], timeChange: [{
            type: Output
        }], timeInput: [{
            type: Output
        }], _onKeydown: [{
            type: HostListener,
            args: ['keydown', ['$event']]
        }], _onInput: [{
            type: HostListener,
            args: ['input', ['$event.target.value']]
        }], _onChange: [{
            type: HostListener,
            args: ['change']
        }], _onBlur: [{
            type: HostListener,
            args: ['blur']
        }] }); })();

class MateTimepickerIntlService {
    constructor() {
        this.changes = new Subject();
        this.openTimepickerLabel = 'Open timepicker';
    }
}
MateTimepickerIntlService.ɵfac = function MateTimepickerIntlService_Factory(t) { return new (t || MateTimepickerIntlService)(); };
MateTimepickerIntlService.ɵprov = ɵɵdefineInjectable({ token: MateTimepickerIntlService, factory: MateTimepickerIntlService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { ɵsetClassMetadata(MateTimepickerIntlService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();

const _c0$2 = ["button"];
function MateTimepickerToggleComponent__svg_svg_2_Template(rf, ctx) { if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelementStart(0, "svg", 3);
    ɵɵelement(1, "path", 4);
    ɵɵelementEnd();
} }
const _c1$2 = [[["", "mateTimepickerToggleIcon", ""]]];
const _c2 = ["[mateTimepickerToggleIcon]"];
class MateTimepickerToggleIconDirective {
}
MateTimepickerToggleIconDirective.ɵfac = function MateTimepickerToggleIconDirective_Factory(t) { return new (t || MateTimepickerToggleIconDirective)(); };
MateTimepickerToggleIconDirective.ɵdir = ɵɵdefineDirective({ type: MateTimepickerToggleIconDirective, selectors: [["", "mateTimepickerToggleIcon", ""]] });
/*@__PURE__*/ (function () { ɵsetClassMetadata(MateTimepickerToggleIconDirective, [{
        type: Directive,
        args: [{
                selector: '[mateTimepickerToggleIcon]'
            }]
    }], null, null); })();
class MateTimepickerToggleComponent {
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
        const TimepickerDisabled = this.timepicker ? this.timepicker._disabledChange : of();
        const inputDisabled = this.timepicker && this.timepicker._timepickerInput ?
            this.timepicker._timepickerInput._disabledChange : of();
        const TimepickerToggled = this.timepicker ?
            merge(this.timepicker.openedStream, this.timepicker.closedStream) :
            of();
        this._stateChanges.unsubscribe();
        this._stateChanges = merge(this._intl.changes, TimepickerDisabled, inputDisabled, TimepickerToggled).subscribe(() => this._changeDetectorRef.markForCheck());
    }
}
MateTimepickerToggleComponent.ɵfac = function MateTimepickerToggleComponent_Factory(t) { return new (t || MateTimepickerToggleComponent)(ɵɵdirectiveInject(MateTimepickerIntlService), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵinjectAttribute('tabindex')); };
MateTimepickerToggleComponent.ɵcmp = ɵɵdefineComponent({ type: MateTimepickerToggleComponent, selectors: [["mate-timepicker-toggle"]], contentQueries: function MateTimepickerToggleComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        ɵɵcontentQuery(dirIndex, MateTimepickerToggleIconDirective, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._customIcon = _t.first);
    } }, viewQuery: function MateTimepickerToggleComponent_Query(rf, ctx) { if (rf & 1) {
        ɵɵviewQuery(_c0$2, true);
    } if (rf & 2) {
        var _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._button = _t.first);
    } }, hostAttrs: [1, "mate-timepicker-toggle"], hostVars: 7, hostBindings: function MateTimepickerToggleComponent_HostBindings(rf, ctx) { if (rf & 1) {
        ɵɵlistener("focus", function MateTimepickerToggleComponent_focus_HostBindingHandler() { return ctx._button.focus(); });
    } if (rf & 2) {
        ɵɵattribute("tabindex", ctx.disabled ? null : -1);
        ɵɵclassProp("mate-timepicker-toggle-active", ctx.timepicker && ctx.timepicker.opened)("mat-accent", ctx.timepicker && ctx.timepicker.color === "accent")("mat-warn", ctx.timepicker && ctx.timepicker.color === "warn");
    } }, inputs: { timepicker: ["for", "timepicker"], tabIndex: "tabIndex", disabled: "disabled", disableRipple: "disableRipple" }, exportAs: ["matetimepickerToggle"], features: [ɵɵNgOnChangesFeature], ngContentSelectors: _c2, decls: 4, vars: 6, consts: [["mat-icon-button", "", "type", "button", 3, "disabled", "disableRipple", "click"], ["button", ""], ["class", "mate-timepicker-toggle-default-icon", "viewBox", "0 0 24 24", "width", "24px", "height", "24px", "fill", "currentColor", "focusable", "false", 4, "ngIf"], ["viewBox", "0 0 24 24", "width", "24px", "height", "24px", "fill", "currentColor", "focusable", "false", 1, "mate-timepicker-toggle-default-icon"], ["d", "M15.87 15.25l-3.37-2V8.72c0-.4-.32-.72-.72-.72h-.06c-.4 0-.72.32-.72.72v4.72c0 .35.18.68.49.86l3.65 2.19c.34.2.78.1.98-.24.21-.35.1-.8-.25-1zm5.31-10.24L18.1 2.45c-.42-.35-1.05-.3-1.41.13-.35.42-.29 1.05.13 1.41l3.07 2.56c.42.35 1.05.3 1.41-.13.36-.42.3-1.05-.12-1.41zM4.1 6.55l3.07-2.56c.43-.36.49-.99.13-1.41-.35-.43-.98-.48-1.4-.13L2.82 5.01c-.42.36-.48.99-.12 1.41.35.43.98.48 1.4.13zM12 4c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z"]], template: function MateTimepickerToggleComponent_Template(rf, ctx) { if (rf & 1) {
        ɵɵprojectionDef(_c1$2);
        ɵɵelementStart(0, "button", 0, 1);
        ɵɵlistener("click", function MateTimepickerToggleComponent_Template_button_click_0_listener($event) { return ctx._open($event); });
        ɵɵtemplate(2, MateTimepickerToggleComponent__svg_svg_2_Template, 2, 0, "svg", 2);
        ɵɵprojection(3);
        ɵɵelementEnd();
    } if (rf & 2) {
        ɵɵproperty("disabled", ctx.disabled)("disableRipple", ctx.disableRipple);
        ɵɵattribute("aria-label", ctx._intl.openTimepickerLabel)("aria-haspopup", ctx.timepicker ? "dialog" : null)("tabindex", ctx.disabled ? -1 : ctx.tabIndex);
        ɵɵadvance(2);
        ɵɵproperty("ngIf", !ctx._customIcon);
    } }, directives: [MatButton, NgIf], styles: [".mat-badge-content{font-family:Roboto,Helvetica Neue,sans-serif;font-size:12px;font-weight:600}.mat-badge-small .mat-badge-content{font-size:9px}.mat-badge-large .mat-badge-content{font-size:24px}.mat-h1,.mat-headline,.mat-typography h1{font:400 24px/32px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal;margin:0 0 16px}.mat-h2,.mat-title,.mat-typography h2{font:500 20px/32px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal;margin:0 0 16px}.mat-h3,.mat-subheading-2,.mat-typography h3{font:400 16px/28px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal;margin:0 0 16px}.mat-h4,.mat-subheading-1,.mat-typography h4{font:400 15px/24px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal;margin:0 0 16px}.mat-h5,.mat-typography h5{font:400 11.62px/20px Roboto,Helvetica Neue,sans-serif;margin:0 0 12px}.mat-h6,.mat-typography h6{font:400 9.38px/20px Roboto,Helvetica Neue,sans-serif;margin:0 0 12px}.mat-body-2,.mat-body-strong{font:500 14px/24px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-body,.mat-body-1,.mat-typography{font:400 14px/20px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-body-1 p,.mat-body p,.mat-typography p{margin:0 0 12px}.mat-caption,.mat-small{font:400 12px/20px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-display-4,.mat-typography .mat-display-4{font:300 112px/112px Roboto,Helvetica Neue,sans-serif;letter-spacing:-.05em;margin:0 0 56px}.mat-display-3,.mat-typography .mat-display-3{font:400 56px/56px Roboto,Helvetica Neue,sans-serif;letter-spacing:-.02em;margin:0 0 64px}.mat-display-2,.mat-typography .mat-display-2{font:400 45px/48px Roboto,Helvetica Neue,sans-serif;letter-spacing:-.005em;margin:0 0 64px}.mat-display-1,.mat-typography .mat-display-1{font:400 34px/40px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal;margin:0 0 64px}.mat-bottom-sheet-container{font:400 14px/20px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-button,.mat-fab,.mat-flat-button,.mat-icon-button,.mat-mini-fab,.mat-raised-button,.mat-stroked-button{font-family:Roboto,Helvetica Neue,sans-serif;font-size:14px;font-weight:500}.mat-button-toggle,.mat-card{font-family:Roboto,Helvetica Neue,sans-serif}.mat-card-title{font-size:24px;font-weight:500}.mat-card-header .mat-card-title{font-size:20px}.mat-card-content,.mat-card-subtitle{font-size:14px}.mat-checkbox{font-family:Roboto,Helvetica Neue,sans-serif}.mat-checkbox-layout .mat-checkbox-label{line-height:24px}.mat-chip{font-size:14px;font-weight:500}.mat-chip .mat-chip-remove.mat-icon,.mat-chip .mat-chip-trailing-icon.mat-icon{font-size:18px}.mat-table{font-family:Roboto,Helvetica Neue,sans-serif}.mat-header-cell{font-size:12px;font-weight:500}.mat-cell,.mat-footer-cell{font-size:14px}.mat-calendar{font-family:Roboto,Helvetica Neue,sans-serif}.mat-calendar-body{font-size:13px}.mat-calendar-body-label,.mat-calendar-period-button{font-size:14px;font-weight:500}.mat-calendar-table-header th{font-size:11px;font-weight:400}.mat-dialog-title{font:500 20px/32px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-expansion-panel-header{font-family:Roboto,Helvetica Neue,sans-serif;font-size:15px;font-weight:400}.mat-expansion-panel-content{font:400 14px/20px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-form-field{font-family:Roboto,Helvetica Neue,sans-serif;font-size:inherit;font-weight:400;letter-spacing:normal;line-height:1.125}.mat-form-field-wrapper{padding-bottom:1.34375em}.mat-form-field-prefix .mat-icon,.mat-form-field-suffix .mat-icon{font-size:150%;line-height:1.125}.mat-form-field-prefix .mat-icon-button,.mat-form-field-suffix .mat-icon-button{height:1.5em;width:1.5em}.mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field-suffix .mat-icon-button .mat-icon{height:1.125em;line-height:1.125}.mat-form-field-infix{border-top:.84375em solid transparent;padding:.5em 0}.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label,.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label{transform:translateY(-1.34375em) scale(.75);width:133.3333333333%}.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{transform:translateY(-1.34374em) scale(.75);width:133.3333433333%}.mat-form-field-label-wrapper{padding-top:.84375em;top:-.84375em}.mat-form-field-label{top:1.34375em}.mat-form-field-underline{bottom:1.34375em}.mat-form-field-subscript-wrapper{font-size:75%;margin-top:.6666666667em;top:calc(100% - 1.79167em)}.mat-form-field-appearance-legacy .mat-form-field-wrapper{padding-bottom:1.25em}.mat-form-field-appearance-legacy .mat-form-field-infix{padding:.4375em 0}.mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label,.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label{-ms-transform:translateY(-1.28125em) scale(.75);transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.001px);width:133.3333333333%}.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{-ms-transform:translateY(-1.28124em) scale(.75);transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00101px);width:133.3333433333%}.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{-ms-transform:translateY(-1.28123em) scale(.75);transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00102px);width:133.3333533333%}.mat-form-field-appearance-legacy .mat-form-field-label{top:1.28125em}.mat-form-field-appearance-legacy .mat-form-field-underline{bottom:1.25em}.mat-form-field-appearance-legacy .mat-form-field-subscript-wrapper{margin-top:.5416666667em;top:calc(100% - 1.66667em)}@media print{.mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label,.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label{transform:translateY(-1.28122em) scale(.75)}.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{transform:translateY(-1.28121em) scale(.75)}.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{transform:translateY(-1.2812em) scale(.75)}}.mat-form-field-appearance-fill .mat-form-field-infix{padding:.25em 0 .75em}.mat-form-field-appearance-fill .mat-form-field-label{margin-top:-.5em;top:1.09375em}.mat-form-field-appearance-fill.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label,.mat-form-field-appearance-fill.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label{transform:translateY(-.59375em) scale(.75);width:133.3333333333%}.mat-form-field-appearance-fill.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{transform:translateY(-.59374em) scale(.75);width:133.3333433333%}.mat-form-field-appearance-outline .mat-form-field-infix{padding:1em 0}.mat-form-field-appearance-outline .mat-form-field-label{margin-top:-.25em;top:1.84375em}.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label,.mat-form-field-appearance-outline.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label{transform:translateY(-1.59375em) scale(.75);width:133.3333333333%}.mat-form-field-appearance-outline.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{transform:translateY(-1.59374em) scale(.75);width:133.3333433333%}.mat-grid-tile-footer,.mat-grid-tile-header{font-size:14px}.mat-grid-tile-footer .mat-line,.mat-grid-tile-header .mat-line{box-sizing:border-box;display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-grid-tile-footer .mat-line:nth-child(n+2),.mat-grid-tile-header .mat-line:nth-child(n+2){font-size:12px}input.mat-input-element{margin-top:-.0625em}.mat-menu-item{font-family:Roboto,Helvetica Neue,sans-serif;font-size:14px;font-weight:400}.mat-paginator,.mat-paginator-page-size .mat-select-trigger{font-family:Roboto,Helvetica Neue,sans-serif;font-size:12px}.mat-radio-button,.mat-select{font-family:Roboto,Helvetica Neue,sans-serif}.mat-select-trigger{height:1.125em}.mat-slide-toggle-content,.mat-slider-thumb-label-text{font-family:Roboto,Helvetica Neue,sans-serif}.mat-slider-thumb-label-text{font-size:12px;font-weight:500}.mat-stepper-horizontal,.mat-stepper-vertical{font-family:Roboto,Helvetica Neue,sans-serif}.mat-step-label{font-size:14px;font-weight:400}.mat-step-sub-label-error{font-weight:400}.mat-step-label-error{font-size:14px}.mat-step-label-selected{font-size:14px;font-weight:500}.mat-tab-group,.mat-tab-label,.mat-tab-link{font-family:Roboto,Helvetica Neue,sans-serif}.mat-tab-label,.mat-tab-link{font-size:14px;font-weight:500}.mat-toolbar,.mat-toolbar h1,.mat-toolbar h2,.mat-toolbar h3,.mat-toolbar h4,.mat-toolbar h5,.mat-toolbar h6{font:500 20px/32px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal;margin:0}.mat-tooltip{font-family:Roboto,Helvetica Neue,sans-serif;font-size:10px;padding-bottom:6px;padding-top:6px}.mat-tooltip-handset{font-size:14px;padding-bottom:8px;padding-top:8px}.mat-list-item,.mat-list-option{font-family:Roboto,Helvetica Neue,sans-serif}.mat-list-base .mat-list-item{font-size:16px}.mat-list-base .mat-list-item .mat-line{box-sizing:border-box;display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-list-base .mat-list-item .mat-line:nth-child(n+2){font-size:14px}.mat-list-base .mat-list-option{font-size:16px}.mat-list-base .mat-list-option .mat-line{box-sizing:border-box;display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-list-base .mat-list-option .mat-line:nth-child(n+2){font-size:14px}.mat-list-base .mat-subheader{font-family:Roboto,Helvetica Neue,sans-serif;font-size:14px;font-weight:500}.mat-list-base[dense] .mat-list-item{font-size:12px}.mat-list-base[dense] .mat-list-item .mat-line{box-sizing:border-box;display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-list-base[dense] .mat-list-item .mat-line:nth-child(n+2),.mat-list-base[dense] .mat-list-option{font-size:12px}.mat-list-base[dense] .mat-list-option .mat-line{box-sizing:border-box;display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-list-base[dense] .mat-list-option .mat-line:nth-child(n+2){font-size:12px}.mat-list-base[dense] .mat-subheader{font-family:Roboto,Helvetica Neue,sans-serif;font-size:12px;font-weight:500}.mat-option{font-family:Roboto,Helvetica Neue,sans-serif;font-size:16px}.mat-optgroup-label{font:500 14px/24px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-simple-snackbar{font-family:Roboto,Helvetica Neue,sans-serif;font-size:14px}.mat-simple-snackbar-action{font-family:inherit;font-size:inherit;font-weight:500;line-height:1}.mat-tree{font-family:Roboto,Helvetica Neue,sans-serif}.mat-nested-tree-node,.mat-tree-node{font-size:14px;font-weight:400}.mat-ripple{overflow:hidden;position:relative}.mat-ripple:not(:empty){transform:translateZ(0)}.mat-ripple.mat-ripple-unbounded{overflow:visible}.mat-ripple-element{border-radius:50%;pointer-events:none;position:absolute;transform:scale(0);transition:opacity,transform 0ms cubic-bezier(0,0,.2,1)}.cdk-high-contrast-active .mat-ripple-element{display:none}.cdk-visually-hidden{-moz-appearance:none;-webkit-appearance:none;border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;outline:0;overflow:hidden;padding:0;position:absolute;width:1px}.cdk-global-overlay-wrapper,.cdk-overlay-container{height:100%;left:0;pointer-events:none;top:0;width:100%}.cdk-overlay-container{position:fixed;z-index:1000}.cdk-overlay-container:empty{display:none}.cdk-global-overlay-wrapper,.cdk-overlay-pane{display:flex;position:absolute;z-index:1000}.cdk-overlay-pane{box-sizing:border-box;max-height:100%;max-width:100%;pointer-events:auto}.cdk-overlay-backdrop{-webkit-tap-highlight-color:transparent;bottom:0;left:0;opacity:0;pointer-events:auto;position:absolute;right:0;top:0;transition:opacity .4s cubic-bezier(.25,.8,.25,1);z-index:1000}.cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:1}@media screen and (-ms-high-contrast:active){.cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:.6}}.cdk-overlay-dark-backdrop{background:rgba(0,0,0,.32)}.cdk-overlay-transparent-backdrop,.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing{opacity:0}.cdk-overlay-connected-position-bounding-box{display:flex;flex-direction:column;min-height:1px;min-width:1px;position:absolute;z-index:1000}.cdk-global-scrollblock{overflow-y:scroll;position:fixed;width:100%}@keyframes cdk-text-field-autofill-start{\n  /*!*/}@keyframes cdk-text-field-autofill-end{\n  /*!*/}.cdk-text-field-autofill-monitored:-webkit-autofill{animation:cdk-text-field-autofill-start 0s 1ms}.cdk-text-field-autofill-monitored:not(:-webkit-autofill){animation:cdk-text-field-autofill-end 0s 1ms}textarea.cdk-textarea-autosize{resize:none}textarea.cdk-textarea-autosize-measuring{box-sizing:initial!important;height:auto!important;overflow:hidden!important;padding:2px 0!important}textarea.cdk-textarea-autosize-measuring-firefox{box-sizing:initial!important;height:0!important;padding:2px 0!important}.mat-focus-indicator,.mat-mdc-focus-indicator{position:relative}:host.mate-timepicker-toggle .mat-icon-button{height:24px;width:24px}.mate-timepicker-toggle{color:rgba(0,0,0,.54)}.mate-timepicker-toggle-active{color:#3f51b5}.mate-timepicker-toggle-active.mat-accent{color:#ff4081}.mate-timepicker-toggle-active.mat-warn{color:#f44336}"], encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(MateTimepickerToggleComponent, [{
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
    }], function () { return [{ type: MateTimepickerIntlService }, { type: ChangeDetectorRef }, { type: undefined, decorators: [{
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

let timepickerUid = 0;
const MATE_TIMEPICKER_SCROLL_STRATEGY = new InjectionToken('mate-timepicker-scroll-strategy');
function MAT_TIMEPICKER_SCROLL_STRATEGY_FACTORY(overlay) {
    return () => overlay.scrollStrategies.block();
}
const MATE_TIMEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER = {
    provide: MATE_TIMEPICKER_SCROLL_STRATEGY,
    deps: [Overlay],
    useFactory: MAT_TIMEPICKER_SCROLL_STRATEGY_FACTORY
};
class MateTimepickerComponent {
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
MateTimepickerComponent.ɵfac = function MateTimepickerComponent_Factory(t) { return new (t || MateTimepickerComponent)(ɵɵdirectiveInject(MatDialog), ɵɵdirectiveInject(Overlay), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(MATE_TIMEPICKER_SCROLL_STRATEGY), ɵɵdirectiveInject(Directionality, 8), ɵɵdirectiveInject(DOCUMENT, 8)); };
MateTimepickerComponent.ɵcmp = ɵɵdefineComponent({ type: MateTimepickerComponent, selectors: [["mate-timepicker"]], inputs: { touchUi: "touchUi", opened: "opened", disabled: "disabled", color: "color", second: "second" }, outputs: { openedStream: "opened", closedStream: "closed" }, exportAs: ["mateTimepicker"], decls: 0, vars: 0, template: function MateTimepickerComponent_Template(rf, ctx) { }, encapsulation: 2, changeDetection: 0 });
/*@__PURE__*/ (function () { ɵsetClassMetadata(MateTimepickerComponent, [{
        type: Component,
        args: [{
                selector: 'mate-timepicker',
                template: '',
                exportAs: 'mateTimepicker',
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None
            }]
    }], function () { return [{ type: MatDialog }, { type: Overlay }, { type: NgZone }, { type: ViewContainerRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [MATE_TIMEPICKER_SCROLL_STRATEGY]
            }] }, { type: Directionality, decorators: [{
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

class MateTimepickerModule {
}
MateTimepickerModule.ɵmod = ɵɵdefineNgModule({ type: MateTimepickerModule });
MateTimepickerModule.ɵinj = ɵɵdefineInjector({ factory: function MateTimepickerModule_Factory(t) { return new (t || MateTimepickerModule)(); }, providers: [
        MateTimepickerIntlService,
        MATE_TIMEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER
    ], imports: [[
            CommonModule,
            MatButtonModule,
            MatDialogModule,
            OverlayModule,
            A11yModule,
            PortalModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(MateTimepickerModule, { declarations: [MateTimepickerFace,
        MateTimepickerComponent,
        MateTimepickerContentComponent,
        MateTimepickerToggleComponent,
        MateTimepickerToggleIconDirective,
        MateTimepickerInputDirective,
        MateTimepickerDialogComponent,
        MateTimepickerDialogBodyComponent,
        MateTimepickerDialogHeaderComponent,
        MateTimepickerDialogFooterComponent,
        MateTimepickerDialogHourComponent,
        MateTimepickerDialogMinuteComponent], imports: [CommonModule,
        MatButtonModule,
        MatDialogModule,
        OverlayModule,
        A11yModule,
        PortalModule], exports: [MateTimepickerComponent,
        MateTimepickerContentComponent,
        MateTimepickerToggleComponent,
        MateTimepickerToggleIconDirective,
        MateTimepickerInputDirective,
        MateTimepickerDialogComponent,
        MateTimepickerDialogBodyComponent,
        MateTimepickerDialogHeaderComponent,
        MateTimepickerDialogFooterComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(MateTimepickerModule, [{
        type: NgModule,
        args: [{
                declarations: [
                    MateTimepickerFace,
                    MateTimepickerComponent,
                    MateTimepickerContentComponent,
                    MateTimepickerToggleComponent,
                    MateTimepickerToggleIconDirective,
                    MateTimepickerInputDirective,
                    MateTimepickerDialogComponent,
                    MateTimepickerDialogBodyComponent,
                    MateTimepickerDialogHeaderComponent,
                    MateTimepickerDialogFooterComponent,
                    MateTimepickerDialogHourComponent,
                    MateTimepickerDialogMinuteComponent
                ],
                imports: [
                    CommonModule,
                    MatButtonModule,
                    MatDialogModule,
                    OverlayModule,
                    A11yModule,
                    PortalModule
                ],
                providers: [
                    MateTimepickerIntlService,
                    MATE_TIMEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER
                ],
                entryComponents: [
                    MateTimepickerContentComponent,
                    MateTimepickerDialogComponent,
                    MateTimepickerDialogBodyComponent,
                    MateTimepickerDialogHeaderComponent,
                    MateTimepickerDialogFooterComponent
                ],
                exports: [
                    MateTimepickerComponent,
                    MateTimepickerContentComponent,
                    MateTimepickerToggleComponent,
                    MateTimepickerToggleIconDirective,
                    MateTimepickerInputDirective,
                    MateTimepickerDialogComponent,
                    MateTimepickerDialogBodyComponent,
                    MateTimepickerDialogHeaderComponent,
                    MateTimepickerDialogFooterComponent
                ]
            }]
    }], null, null); })();

/*
 * Public API Surface of timepicker
 */

/**
 * Generated bundle index. Do not edit.
 */

export { MATE_TIMEPICKER_SCROLL_STRATEGY, MATE_TIMEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER, MAT_TIMEPICKER_SCROLL_STRATEGY_FACTORY, MateTimepickerComponent, MateTimepickerContentComponent, MateTimepickerDialogBodyComponent, MateTimepickerDialogComponent, MateTimepickerDialogFooterComponent, MateTimepickerDialogHeaderComponent, MateTimepickerDialogHourComponent, MateTimepickerDialogMinuteComponent, MateTimepickerFace, MateTimepickerInputDirective, MateTimepickerInputEvent, MateTimepickerModule, MateTimepickerToggleComponent, MateTimepickerToggleIconDirective };
//# sourceMappingURL=material-extra-timepicker.js.map
