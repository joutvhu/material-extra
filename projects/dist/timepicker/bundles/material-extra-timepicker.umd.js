(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/material/core'), require('@angular/common'), require('@angular/material/button'), require('@angular/cdk/coercion'), require('@angular/cdk/keycodes'), require('@angular/forms'), require('@angular/material/input'), require('rxjs'), require('@angular/material/form-field'), require('@angular/cdk/overlay'), require('@angular/cdk/portal'), require('rxjs/operators'), require('@angular/material/dialog'), require('@angular/cdk/bidi'), require('@angular/cdk/a11y')) :
    typeof define === 'function' && define.amd ? define('@material-extra/timepicker', ['exports', '@angular/core', '@angular/material/core', '@angular/common', '@angular/material/button', '@angular/cdk/coercion', '@angular/cdk/keycodes', '@angular/forms', '@angular/material/input', 'rxjs', '@angular/material/form-field', '@angular/cdk/overlay', '@angular/cdk/portal', 'rxjs/operators', '@angular/material/dialog', '@angular/cdk/bidi', '@angular/cdk/a11y'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['material-extra'] = global['material-extra'] || {}, global['material-extra'].timepicker = {}), global.ng.core, global.ng.material.core, global.ng.common, global.ng.material.button, global.ng.cdk.coercion, global.ng.cdk.keycodes, global.ng.forms, global.ng.material.input, global.rxjs, global.ng.material.formField, global.ng.cdk.overlay, global.ng.cdk.portal, global.rxjs.operators, global.ng.material.dialog, global.ng.cdk.bidi, global.ng.cdk.a11y));
}(this, (function (exports, i0, core, i1, i1$1, coercion, keycodes, forms, input, rxjs, i2, i2$1, portal, operators, i1$2, i3, a11y) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    ;
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    var TimepickerUtil = /** @class */ (function () {
        function TimepickerUtil() {
        }
        TimepickerUtil.isEqualsDeep = function (value1, value2) {
            return value1 === value2 || ((value1 == null || value2 == null || value1.length === value2.length) &&
                JSON.stringify(value1) === JSON.stringify(value2));
        };
        TimepickerUtil.isRealNumber = function (value) {
            return typeof value === 'number' && !isNaN(value) && value !== Infinity && value !== -Infinity;
        };
        TimepickerUtil.toString = function (value) {
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
        };
        return TimepickerUtil;
    }());

    var Duration = /** @class */ (function () {
        function Duration(hour, minute, second) {
            this.hour = hour;
            this.minute = minute;
            this.second = second;
        }
        Duration.parseTimes = function (times) {
            var hour, minute, second;
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
        };
        Duration.valueOf = function (hour, minute, second) {
            return new Duration(hour, minute, second);
        };
        Duration.zero = function () {
            return new Duration(0, 0, 0);
        };
        Duration.fromMillis = function (count) {
            if (count < 0) {
                return null;
            }
            return new Duration(Math.floor(count / Duration.matrix.hours.milliseconds) % Duration.matrix.days.hours, Math.floor(count / Duration.matrix.minutes.milliseconds) % Duration.matrix.hours.minutes, Math.floor(count / Duration.matrix.seconds.milliseconds) % Duration.matrix.minutes.seconds);
        };
        Duration.fromString = function (value, separator) {
            if (typeof value === 'string') {
                var time = void 0;
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
        };
        Duration.fromDate = function (value) {
            if (value instanceof Date) {
                return new Duration(value.getHours(), value.getMinutes(), value.getSeconds());
            }
            return null;
        };
        Duration.now = function (second) {
            if (second === void 0) { second = true; }
            var now = new Date();
            return new Duration(now.getHours(), now.getMinutes(), second ? now.getSeconds() : 0);
        };
        Duration.prototype.clone = function () {
            return new Duration(this.hour, this.minute, this.second);
        };
        Duration.prototype.getValue = function (type) {
            if (['hour', 'minute', 'second'].includes(type)) {
                return this[type];
            }
            return null;
        };
        Duration.prototype.setValue = function (type, value) {
            if (['hour', 'minute', 'second'].includes(type)) {
                this[type] = value;
            }
            return this;
        };
        Duration.prototype.setNew = function (type, value) {
            var result = new Duration(this.hour, this.minute, this.second);
            if (['hour', 'minute', 'second'].includes(type)) {
                result[type] = value;
            }
            return result;
        };
        Duration.prototype.format = function (format) {
            if (format) {
                var replace = function (f, v, r) {
                    var match;
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
                var result = format;
                result = replace(/h+/i, this.hour, result);
                result = replace(/m+/i, this.minute, result);
                result = replace(/s+/i, this.second, result);
                return result;
            }
            else {
                return String(this.hour).padStart(2, '0') + ":" + String(this.minute).padStart(2, '0') + ":" + String(this.second).padStart(2, '0');
            }
        };
        Duration.prototype.milliseconds = function () {
            return this.hour * Duration.matrix.hours.milliseconds +
                this.minute * Duration.matrix.minutes.milliseconds +
                this.second * Duration.matrix.seconds.milliseconds;
        };
        Duration.prototype.setToDate = function (value) {
            value.setHours(this.hour);
            value.setMinutes(this.minute);
            value.setSeconds(this.second);
            value.setMilliseconds(0);
            return value;
        };
        Duration.prototype.equals = function (value) {
            return value != null && this.hour === value.hour && this.minute === value.minute && this.second === value.second;
        };
        return Duration;
    }());
    Duration.matrix = {
        days: { hours: 24, minutes: 1440, seconds: 86400, milliseconds: 86400000 },
        hours: { minutes: 60, seconds: 3600, milliseconds: 3600000 },
        minutes: { seconds: 60, milliseconds: 60000 },
        seconds: { milliseconds: 1000 }
    };

    function MateTimepickerDialogHeaderComponent_ng_container_10_Template(rf, ctx) {
        if (rf & 1) {
            var _r2_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementContainerStart(0);
            i0.ɵɵelementStart(1, "span");
            i0.ɵɵtext(2, ":");
            i0.ɵɵelementEnd();
            i0.ɵɵelementStart(3, "label", 2);
            i0.ɵɵlistener("click", function MateTimepickerDialogHeaderComponent_ng_container_10_Template_label_click_3_listener() { i0.ɵɵrestoreView(_r2_1); var ctx_r1 = i0.ɵɵnextContext(); return ctx_r1.onActive("second"); });
            i0.ɵɵtext(4);
            i0.ɵɵpipe(5, "number");
            i0.ɵɵelementEnd();
            i0.ɵɵelementContainerEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵadvance(3);
            i0.ɵɵclassProp("active", ctx_r0.type == "second");
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(5, 3, ctx_r0.value.second, "2.0"), " ");
        }
    }
    var MateTimepickerDialogHeaderComponent = /** @class */ (function () {
        function MateTimepickerDialogHeaderComponent() {
            this.type = 'hour';
            this.second = false;
            this.active = new i0.EventEmitter();
        }
        MateTimepickerDialogHeaderComponent.prototype.ngOnInit = function () {
        };
        MateTimepickerDialogHeaderComponent.prototype.onActive = function (type) {
            this.type = type;
            this.active.emit(type);
        };
        return MateTimepickerDialogHeaderComponent;
    }());
    MateTimepickerDialogHeaderComponent.ɵfac = function MateTimepickerDialogHeaderComponent_Factory(t) { return new (t || MateTimepickerDialogHeaderComponent)(); };
    MateTimepickerDialogHeaderComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MateTimepickerDialogHeaderComponent, selectors: [["mate-timepicker-dialog-header"]], hostAttrs: [1, "mate-timepicker-dialog-header"], inputs: { type: "type", second: "second", value: "value" }, outputs: { active: "active" }, exportAs: ["mateTimepickerDialogHeader"], decls: 11, vars: 13, consts: [[1, "mate-timepicker-dial"], [1, "timepicker-dial-time"], [1, "timepicker-dial-time-item", 3, "click"], [4, "ngIf"]], template: function MateTimepickerDialogHeaderComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵelementStart(1, "div", 1);
                i0.ɵɵelementStart(2, "label", 2);
                i0.ɵɵlistener("click", function MateTimepickerDialogHeaderComponent_Template_label_click_2_listener() { return ctx.onActive("hour"); });
                i0.ɵɵtext(3);
                i0.ɵɵpipe(4, "number");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(5, "span");
                i0.ɵɵtext(6, ":");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(7, "label", 2);
                i0.ɵɵlistener("click", function MateTimepickerDialogHeaderComponent_Template_label_click_7_listener() { return ctx.onActive("minute"); });
                i0.ɵɵtext(8);
                i0.ɵɵpipe(9, "number");
                i0.ɵɵelementEnd();
                i0.ɵɵtemplate(10, MateTimepickerDialogHeaderComponent_ng_container_10_Template, 6, 6, "ng-container", 3);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(2);
                i0.ɵɵclassProp("active", ctx.type == "hour");
                i0.ɵɵadvance(1);
                i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(4, 7, ctx.value.hour, "2.0"), " ");
                i0.ɵɵadvance(4);
                i0.ɵɵclassProp("active", ctx.type == "minute");
                i0.ɵɵadvance(1);
                i0.ɵɵtextInterpolate1(" ", i0.ɵɵpipeBind2(9, 10, ctx.value.minute, "2.0"), " ");
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngIf", ctx.second);
            }
        }, directives: [i1.NgIf], pipes: [i1.DecimalPipe], styles: [".mate-timepicker-dialog-header[_nghost-%COMP%]{display:block;width:100%}.mate-timepicker-dialog-header[_nghost-%COMP%]   .mate-timepicker-dial[_ngcontent-%COMP%]{margin:0 auto}.mate-timepicker-dialog-header[_nghost-%COMP%]   .mate-timepicker-dial[_ngcontent-%COMP%]   .timepicker-dial-time[_ngcontent-%COMP%]{align-content:center;font-size:44px;line-height:normal;text-align:center}"] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(MateTimepickerDialogHeaderComponent, [{
                type: i0.Component,
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
                    type: i0.Input
                }], second: [{
                    type: i0.Input
                }], value: [{
                    type: i0.Input
                }], active: [{
                    type: i0.Output
                }] });
    })();

    var MateTimepickerFace = /** @class */ (function () {
        function MateTimepickerFace() {
            this.innerClockFaceSize = 40;
            this.switchClock = new i0.EventEmitter();
            this.enterPress = new i0.EventEmitter();
        }
        MateTimepickerFace.prototype.onChange = function (value) {
        };
        MateTimepickerFace.prototype.onFinish = function () {
        };
        MateTimepickerFace.prototype.onMousedown = function (e) {
            e.preventDefault();
            this.moved = false;
            this.selected = false;
            this.isStarted = true;
        };
        MateTimepickerFace.prototype.onClick = function (e) {
            e.preventDefault();
            this.selectTime(e);
            this.isStarted = false;
            this.selected = false;
            this.onFinish();
        };
        MateTimepickerFace.prototype.onTouchend = function (e) {
            this.selectTime(e);
            if (this.moved) {
                this.isStarted = false;
                this.moved = false;
                this.selected = false;
                this.onFinish();
            }
        };
        MateTimepickerFace.prototype.onMove = function (e) {
            this.moved = true;
            this.selectTime(e);
        };
        MateTimepickerFace.prototype.selectTime = function (e) {
            if (!this.isStarted && (e instanceof MouseEvent && e.type !== 'click')) {
                return;
            }
            var clockFaceCords = this.clockFace.nativeElement.getBoundingClientRect();
            var centerX = clockFaceCords.left + clockFaceCords.width / 2;
            var centerY = clockFaceCords.top + clockFaceCords.height / 2;
            var arc = Math.atan(Math.abs(e.clientX - centerX) / Math.abs(e.clientY - centerY)) * 180 / Math.PI;
            var circleAngle = this.countAngleByCords(centerX, centerY, e.clientX, e.clientY, arc);
            var isInnerClockChosen = !!this.innerValues && this.isInnerClockFace(centerX, centerY, e.clientX, e.clientY, ((clockFaceCords.height + clockFaceCords.width) / 4) - this.innerClockFaceSize);
            var index = this.roundAngle(circleAngle);
            index = index < 0 ? 0 : index;
            var value = isInnerClockChosen ? this.innerValues[index % this.innerValues.length] :
                this.outerValues[index % this.outerValues.length];
            this.onChange(value);
            this.selected = true;
        };
        MateTimepickerFace.prototype.onMouseup = function (e) {
            e.preventDefault();
            this.isStarted = false;
            if (this.selected) {
                this.selected = false;
                this.onFinish();
            }
        };
        MateTimepickerFace.prototype.roundAngle = function (angle) {
            return Math.round(angle / this.step);
        };
        MateTimepickerFace.prototype.isInnerClockFace = function (x0, y0, x, y, border) {
            return Math.sqrt(Math.pow(x - x0, 2) + Math.pow(y - y0, 2)) < border;
        };
        MateTimepickerFace.prototype.countAngleByCords = function (x0, y0, x, y, currentAngle) {
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
        };
        MateTimepickerFace.prototype.valueChange = function (add) {
        };
        MateTimepickerFace.prototype.onKeydown = function (event) {
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
        };
        return MateTimepickerFace;
    }());
    MateTimepickerFace.ɵfac = function MateTimepickerFace_Factory(t) { return new (t || MateTimepickerFace)(); };
    MateTimepickerFace.ɵdir = i0.ɵɵdefineDirective({ type: MateTimepickerFace, selectors: [["mate-timepicker-face"]], hostBindings: function MateTimepickerFace_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵlistener("mousedown", function MateTimepickerFace_mousedown_HostBindingHandler($event) { return ctx.onMousedown($event); })("click", function MateTimepickerFace_click_HostBindingHandler($event) { return ctx.onClick($event); })("touchend", function MateTimepickerFace_touchend_HostBindingHandler($event) { return ctx.onTouchend($event.changedTouches[0]); })("mousemove", function MateTimepickerFace_mousemove_HostBindingHandler($event) { return ctx.onMove($event); })("touchmove", function MateTimepickerFace_touchmove_HostBindingHandler($event) { return ctx.onMove($event.changedTouches[0]); })("mouseup", function MateTimepickerFace_mouseup_HostBindingHandler($event) { return ctx.onMouseup($event); })("mouseup", function MateTimepickerFace_mouseup_HostBindingHandler($event) { return ctx.onMouseup($event); }, false, i0.ɵɵresolveDocument)("keydown", function MateTimepickerFace_keydown_HostBindingHandler($event) { return ctx.onKeydown($event); }, false, i0.ɵɵresolveDocument);
            }
        }, outputs: { switchClock: "switchClock", enterPress: "enterPress" } });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(MateTimepickerFace, [{
                type: i0.Directive,
                args: [{ selector: 'mate-timepicker-face' }]
            }], null, { switchClock: [{
                    type: i0.Output
                }], enterPress: [{
                    type: i0.Output
                }], onMousedown: [{
                    type: i0.HostListener,
                    args: ['mousedown', ['$event']]
                }], onClick: [{
                    type: i0.HostListener,
                    args: ['click', ['$event']]
                }], onTouchend: [{
                    type: i0.HostListener,
                    args: ['touchend', ['$event.changedTouches[0]']]
                }], onMove: [{
                    type: i0.HostListener,
                    args: ['mousemove', ['$event']]
                }, {
                    type: i0.HostListener,
                    args: ['touchmove', ['$event.changedTouches[0]']]
                }], onMouseup: [{
                    type: i0.HostListener,
                    args: ['mouseup', ['$event']]
                }, {
                    type: i0.HostListener,
                    args: ['document:mouseup', ['$event']]
                }], onKeydown: [{
                    type: i0.HostListener,
                    args: ['document:keydown', ['$event']]
                }] });
    })();

    var _c0 = ["clockFace"];
    var _c1 = function (a0) { return { transform: a0 }; };
    function MateTimepickerDialogHourComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 8);
            i0.ɵɵelementStart(1, "span", 9);
            i0.ɵɵtext(2);
            i0.ɵɵpipe(3, "number");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var hour_r3 = ctx.$implicit;
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵclassProp("active", hour_r3 == ctx_r1.value);
            i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(8, _c1, "translateX(-50%) rotateZ(" + ctx_r1.step * hour_r3 + "deg)"));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(10, _c1, "rotateZ(" + -ctx_r1.step * hour_r3 + "deg)"));
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(3, 5, hour_r3, "1.0"));
        }
    }
    function MateTimepickerDialogHourComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 10);
            i0.ɵɵelementStart(1, "span", 9);
            i0.ɵɵtext(2);
            i0.ɵɵpipe(3, "number");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var hour_r4 = ctx.$implicit;
            var ctx_r2 = i0.ɵɵnextContext();
            i0.ɵɵclassProp("active", hour_r4 == ctx_r2.value % 24);
            i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(8, _c1, "translateX(-50%) rotateZ(" + ctx_r2.step * (hour_r4 % 12) + "deg)"));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(10, _c1, "rotateZ(" + -ctx_r2.step * (hour_r4 % 12) + "deg)"));
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(3, 5, hour_r4, "2.0"));
        }
    }
    var MateTimepickerDialogHourComponent = /** @class */ (function (_super) {
        __extends(MateTimepickerDialogHourComponent, _super);
        function MateTimepickerDialogHourComponent() {
            var _this = _super.call(this) || this;
            _this.step = 30;
            _this.outerValues = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
            _this.innerValues = [0, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
            _this.change = new i0.EventEmitter();
            _this.finish = new i0.EventEmitter();
            return _this;
        }
        MateTimepickerDialogHourComponent.prototype.ngOnInit = function () {
        };
        MateTimepickerDialogHourComponent.prototype.onChange = function (value) {
            this.value = value;
            this.change.emit(this.value);
        };
        MateTimepickerDialogHourComponent.prototype.valueChange = function (add) {
            add += this.value;
            if (add < 0) {
                add = 23;
            }
            if (add > 23) {
                add = 0;
            }
            this.value = add;
            this.change.emit(this.value);
        };
        MateTimepickerDialogHourComponent.prototype.onFinish = function () {
            this.finish.emit();
        };
        return MateTimepickerDialogHourComponent;
    }(MateTimepickerFace));
    MateTimepickerDialogHourComponent.ɵfac = function MateTimepickerDialogHourComponent_Factory(t) { return new (t || MateTimepickerDialogHourComponent)(); };
    MateTimepickerDialogHourComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MateTimepickerDialogHourComponent, selectors: [["mate-timepicker-dialog-hour"]], viewQuery: function MateTimepickerDialogHourComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵstaticViewQuery(_c0, true);
            }
            if (rf & 2) {
                var _t;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.clockFace = _t.first);
            }
        }, inputs: { value: "value" }, outputs: { change: "change", finish: "finish" }, exportAs: ["mateTimepickerDialogHour"], features: [i0.ɵɵInheritDefinitionFeature], decls: 8, vars: 9, consts: [[1, "mate-timepicker-face", 3, "keydown"], [1, "clock-face", "hour-face"], ["clockFace", ""], [1, "clock-face__container"], ["class", "clock-face__number clock-face__number--outer", 3, "active", "ngStyle", 4, "ngFor", "ngForOf"], [1, "clock-face__inner"], ["class", "clock-face__number clock-face__number--inner", 3, "active", "ngStyle", 4, "ngFor", "ngForOf"], [1, "clock-face__clock-hand", 3, "ngStyle"], [1, "clock-face__number", "clock-face__number--outer", 3, "ngStyle"], [3, "ngStyle"], [1, "clock-face__number", "clock-face__number--inner", 3, "ngStyle"]], template: function MateTimepickerDialogHourComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵlistener("keydown", function MateTimepickerDialogHourComponent_Template_div_keydown_0_listener($event) { return ctx.onKeydown($event); });
                i0.ɵɵelementStart(1, "div", 1, 2);
                i0.ɵɵelementStart(3, "div", 3);
                i0.ɵɵtemplate(4, MateTimepickerDialogHourComponent_div_4_Template, 4, 12, "div", 4);
                i0.ɵɵelementStart(5, "div", 5);
                i0.ɵɵtemplate(6, MateTimepickerDialogHourComponent_div_6_Template, 4, 12, "div", 6);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
                i0.ɵɵelement(7, "span", 7);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(4);
                i0.ɵɵproperty("ngForOf", ctx.outerValues);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngForOf", ctx.innerValues);
                i0.ɵɵadvance(1);
                i0.ɵɵclassProp("outer", ctx.value > 0 && ctx.value <= 12)("inner", ctx.value <= 0 || ctx.value > 12);
                i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(7, _c1, "rotateZ(" + ctx.step * ctx.value + "deg)"));
            }
        }, directives: [i1.NgForOf, i1.NgStyle], pipes: [i1.DecimalPipe], styles: [".clock-face.hour-face[_ngcontent-%COMP%]   .clock-face__clock-hand.outer[_ngcontent-%COMP%]{height:calc(50% - 27px);top:27px}.clock-face.hour-face[_ngcontent-%COMP%]   .clock-face__clock-hand.inner[_ngcontent-%COMP%]{height:calc(50% - 77px);top:77px}"] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(MateTimepickerDialogHourComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'mate-timepicker-dialog-hour',
                        templateUrl: './timepicker-dialog-hour.component.html',
                        styleUrls: ['./timepicker-dialog-hour.component.scss'],
                        exportAs: 'mateTimepickerDialogHour'
                    }]
            }], function () { return []; }, { clockFace: [{
                    type: i0.ViewChild,
                    args: ['clockFace', { static: true }]
                }], value: [{
                    type: i0.Input
                }], change: [{
                    type: i0.Output
                }], finish: [{
                    type: i0.Output
                }] });
    })();

    var _c0$1 = ["clockFace"];
    var _c1$1 = function (a0) { return { transform: a0 }; };
    function MateTimepickerDialogMinuteComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵelementStart(0, "div", 6);
            i0.ɵɵelementStart(1, "span", 7);
            i0.ɵɵtext(2);
            i0.ɵɵpipe(3, "number");
            i0.ɵɵelementEnd();
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var minute_r2 = ctx.$implicit;
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵclassProp("active", minute_r2 == ctx_r1.value % 60);
            i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(8, _c1$1, "translateX(-50%) rotateZ(" + ctx_r1.step * minute_r2 + "deg)"));
            i0.ɵɵadvance(1);
            i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(10, _c1$1, "rotateZ(" + -ctx_r1.step * minute_r2 + "deg)"));
            i0.ɵɵadvance(1);
            i0.ɵɵtextInterpolate(i0.ɵɵpipeBind2(3, 5, minute_r2, "2.0"));
        }
    }
    var MateTimepickerDialogMinuteComponent = /** @class */ (function (_super) {
        __extends(MateTimepickerDialogMinuteComponent, _super);
        function MateTimepickerDialogMinuteComponent() {
            var _this = _super.call(this) || this;
            _this.step = 6;
            _this.values = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];
            _this.outerValues = Array.from(Array(60).keys());
            _this.change = new i0.EventEmitter();
            _this.finish = new i0.EventEmitter();
            return _this;
        }
        MateTimepickerDialogMinuteComponent.prototype.ngOnInit = function () {
        };
        MateTimepickerDialogMinuteComponent.prototype.onChange = function (value) {
            this.value = value;
            this.change.emit(this.value);
        };
        MateTimepickerDialogMinuteComponent.prototype.valueChange = function (add) {
            add += this.value;
            if (add < 0) {
                add = 59;
            }
            if (add > 59) {
                add = 0;
            }
            this.value = add;
            this.change.emit(this.value);
        };
        MateTimepickerDialogMinuteComponent.prototype.onFinish = function () {
            this.finish.emit();
        };
        return MateTimepickerDialogMinuteComponent;
    }(MateTimepickerFace));
    MateTimepickerDialogMinuteComponent.ɵfac = function MateTimepickerDialogMinuteComponent_Factory(t) { return new (t || MateTimepickerDialogMinuteComponent)(); };
    MateTimepickerDialogMinuteComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MateTimepickerDialogMinuteComponent, selectors: [["mate-timepicker-dialog-minute"]], viewQuery: function MateTimepickerDialogMinuteComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵstaticViewQuery(_c0$1, true);
            }
            if (rf & 2) {
                var _t;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.clockFace = _t.first);
            }
        }, inputs: { value: "value" }, outputs: { change: "change", finish: "finish" }, exportAs: ["mateTimepickerDialogMinute"], features: [i0.ɵɵInheritDefinitionFeature], decls: 6, vars: 6, consts: [[1, "mate-timepicker-face", 3, "keydown"], [1, "clock-face", "minute-face"], ["clockFace", ""], [1, "clock-face__container"], ["class", "clock-face__number", 3, "active", "ngStyle", 4, "ngFor", "ngForOf"], [1, "clock-face__clock-hand", 3, "ngStyle"], [1, "clock-face__number", 3, "ngStyle"], [3, "ngStyle"]], template: function MateTimepickerDialogMinuteComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵlistener("keydown", function MateTimepickerDialogMinuteComponent_Template_div_keydown_0_listener($event) { return ctx.onKeydown($event); });
                i0.ɵɵelementStart(1, "div", 1, 2);
                i0.ɵɵelementStart(3, "div", 3);
                i0.ɵɵtemplate(4, MateTimepickerDialogMinuteComponent_div_4_Template, 4, 12, "div", 4);
                i0.ɵɵelementEnd();
                i0.ɵɵelement(5, "span", 5);
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵadvance(4);
                i0.ɵɵproperty("ngForOf", ctx.values);
                i0.ɵɵadvance(1);
                i0.ɵɵclassProp("hand-point", ctx.value % 5 != 0);
                i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(4, _c1$1, "rotateZ(" + ctx.step * ctx.value + "deg)"));
            }
        }, directives: [i1.NgForOf, i1.NgStyle], pipes: [i1.DecimalPipe], styles: [".clock-face.minute-face[_ngcontent-%COMP%]   .clock-face__clock-hand[_ngcontent-%COMP%]{height:calc(50% - 27px);top:27px}.clock-face.minute-face[_ngcontent-%COMP%]   .clock-face__clock-hand.hand-point[_ngcontent-%COMP%]{height:calc(50% - 15px);top:15px}"] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(MateTimepickerDialogMinuteComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'mate-timepicker-dialog-minute',
                        templateUrl: './timepicker-dialog-minute.component.html',
                        styleUrls: ['./timepicker-dialog-minute.component.scss'],
                        exportAs: 'mateTimepickerDialogMinute'
                    }]
            }], function () { return []; }, { clockFace: [{
                    type: i0.ViewChild,
                    args: ['clockFace', { static: true }]
                }], value: [{
                    type: i0.Input
                }], change: [{
                    type: i0.Output
                }], finish: [{
                    type: i0.Output
                }] });
    })();

    function MateTimepickerDialogBodyComponent_mate_timepicker_dialog_hour_0_Template(rf, ctx) {
        if (rf & 1) {
            var _r4_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "mate-timepicker-dialog-hour", 1);
            i0.ɵɵlistener("change", function MateTimepickerDialogBodyComponent_mate_timepicker_dialog_hour_0_Template_mate_timepicker_dialog_hour_change_0_listener($event) { i0.ɵɵrestoreView(_r4_1); var ctx_r3 = i0.ɵɵnextContext(); return ctx_r3.onChange($event); })("switchClock", function MateTimepickerDialogBodyComponent_mate_timepicker_dialog_hour_0_Template_mate_timepicker_dialog_hour_switchClock_0_listener($event) { i0.ɵɵrestoreView(_r4_1); var ctx_r5 = i0.ɵɵnextContext(); return ctx_r5.switchClock.emit($event); })("enterPress", function MateTimepickerDialogBodyComponent_mate_timepicker_dialog_hour_0_Template_mate_timepicker_dialog_hour_enterPress_0_listener() { i0.ɵɵrestoreView(_r4_1); var ctx_r6 = i0.ɵɵnextContext(); return ctx_r6.enterPress.emit(); })("finish", function MateTimepickerDialogBodyComponent_mate_timepicker_dialog_hour_0_Template_mate_timepicker_dialog_hour_finish_0_listener() { i0.ɵɵrestoreView(_r4_1); var ctx_r7 = i0.ɵɵnextContext(); return ctx_r7.finish.emit(); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r0 = i0.ɵɵnextContext();
            i0.ɵɵproperty("value", ctx_r0.value);
        }
    }
    function MateTimepickerDialogBodyComponent_mate_timepicker_dialog_minute_1_Template(rf, ctx) {
        if (rf & 1) {
            var _r9_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "mate-timepicker-dialog-minute", 1);
            i0.ɵɵlistener("change", function MateTimepickerDialogBodyComponent_mate_timepicker_dialog_minute_1_Template_mate_timepicker_dialog_minute_change_0_listener($event) { i0.ɵɵrestoreView(_r9_1); var ctx_r8 = i0.ɵɵnextContext(); return ctx_r8.onChange($event); })("switchClock", function MateTimepickerDialogBodyComponent_mate_timepicker_dialog_minute_1_Template_mate_timepicker_dialog_minute_switchClock_0_listener($event) { i0.ɵɵrestoreView(_r9_1); var ctx_r10 = i0.ɵɵnextContext(); return ctx_r10.switchClock.emit($event); })("enterPress", function MateTimepickerDialogBodyComponent_mate_timepicker_dialog_minute_1_Template_mate_timepicker_dialog_minute_enterPress_0_listener() { i0.ɵɵrestoreView(_r9_1); var ctx_r11 = i0.ɵɵnextContext(); return ctx_r11.enterPress.emit(); })("finish", function MateTimepickerDialogBodyComponent_mate_timepicker_dialog_minute_1_Template_mate_timepicker_dialog_minute_finish_0_listener() { i0.ɵɵrestoreView(_r9_1); var ctx_r12 = i0.ɵɵnextContext(); return ctx_r12.finish.emit(); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r1 = i0.ɵɵnextContext();
            i0.ɵɵproperty("value", ctx_r1.value);
        }
    }
    function MateTimepickerDialogBodyComponent_mate_timepicker_dialog_minute_2_Template(rf, ctx) {
        if (rf & 1) {
            var _r14_1 = i0.ɵɵgetCurrentView();
            i0.ɵɵelementStart(0, "mate-timepicker-dialog-minute", 1);
            i0.ɵɵlistener("change", function MateTimepickerDialogBodyComponent_mate_timepicker_dialog_minute_2_Template_mate_timepicker_dialog_minute_change_0_listener($event) { i0.ɵɵrestoreView(_r14_1); var ctx_r13 = i0.ɵɵnextContext(); return ctx_r13.onChange($event); })("switchClock", function MateTimepickerDialogBodyComponent_mate_timepicker_dialog_minute_2_Template_mate_timepicker_dialog_minute_switchClock_0_listener($event) { i0.ɵɵrestoreView(_r14_1); var ctx_r15 = i0.ɵɵnextContext(); return ctx_r15.switchClock.emit($event); })("enterPress", function MateTimepickerDialogBodyComponent_mate_timepicker_dialog_minute_2_Template_mate_timepicker_dialog_minute_enterPress_0_listener() { i0.ɵɵrestoreView(_r14_1); var ctx_r16 = i0.ɵɵnextContext(); return ctx_r16.enterPress.emit(); })("finish", function MateTimepickerDialogBodyComponent_mate_timepicker_dialog_minute_2_Template_mate_timepicker_dialog_minute_finish_0_listener() { i0.ɵɵrestoreView(_r14_1); var ctx_r17 = i0.ɵɵnextContext(); return ctx_r17.finish.emit(); });
            i0.ɵɵelementEnd();
        }
        if (rf & 2) {
            var ctx_r2 = i0.ɵɵnextContext();
            i0.ɵɵproperty("value", ctx_r2.value);
        }
    }
    var MateTimepickerDialogBodyComponent = /** @class */ (function () {
        function MateTimepickerDialogBodyComponent() {
            this.type = 'hour';
            this.change = new i0.EventEmitter();
            this.switchClock = new i0.EventEmitter();
            this.enterPress = new i0.EventEmitter();
            this.finish = new i0.EventEmitter();
        }
        MateTimepickerDialogBodyComponent.prototype.ngOnInit = function () {
        };
        MateTimepickerDialogBodyComponent.prototype.onChange = function (value) {
            this.value = value;
            this.change.emit({
                type: this.type,
                value: this.value
            });
        };
        return MateTimepickerDialogBodyComponent;
    }());
    MateTimepickerDialogBodyComponent.ɵfac = function MateTimepickerDialogBodyComponent_Factory(t) { return new (t || MateTimepickerDialogBodyComponent)(); };
    MateTimepickerDialogBodyComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MateTimepickerDialogBodyComponent, selectors: [["mate-timepicker-dialog-body"]], hostAttrs: [1, "mate-timepicker-dialog-body"], inputs: { type: "type", value: "value" }, outputs: { change: "change", switchClock: "switchClock", enterPress: "enterPress", finish: "finish" }, exportAs: ["mateTimepickerDialogBody"], decls: 3, vars: 3, consts: [[3, "value", "change", "switchClock", "enterPress", "finish", 4, "ngIf"], [3, "value", "change", "switchClock", "enterPress", "finish"]], template: function MateTimepickerDialogBodyComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵtemplate(0, MateTimepickerDialogBodyComponent_mate_timepicker_dialog_hour_0_Template, 1, 1, "mate-timepicker-dialog-hour", 0);
                i0.ɵɵtemplate(1, MateTimepickerDialogBodyComponent_mate_timepicker_dialog_minute_1_Template, 1, 1, "mate-timepicker-dialog-minute", 0);
                i0.ɵɵtemplate(2, MateTimepickerDialogBodyComponent_mate_timepicker_dialog_minute_2_Template, 1, 1, "mate-timepicker-dialog-minute", 0);
            }
            if (rf & 2) {
                i0.ɵɵproperty("ngIf", ctx.type == "hour");
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.type == "minute");
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("ngIf", ctx.type == "second");
            }
        }, directives: [i1.NgIf, MateTimepickerDialogHourComponent, MateTimepickerDialogMinuteComponent], styles: [".mate-timepicker-dialog-body[_nghost-%COMP%]{display:flex;flex:auto;margin:1rem 0;width:100%}.mate-timepicker-dialog-body[_nghost-%COMP%]   mate-timepicker-dialog-hour[_ngcontent-%COMP%], .mate-timepicker-dialog-body[_nghost-%COMP%]   mate-timepicker-dialog-minute[_ngcontent-%COMP%]{display:block;margin:auto}.mate-timepicker-dialog-body[_nghost-%COMP%]     .mate-timepicker-face{-webkit-user-select:none;user-select:none}.mate-timepicker-dialog-body[_nghost-%COMP%]     .mate-timepicker-face .clock-face{border-radius:50%;box-sizing:border-box;display:flex;height:260px;justify-content:center;margin:auto;position:relative;width:260px}.mate-timepicker-dialog-body[_nghost-%COMP%]     .mate-timepicker-face .clock-face .clock-face__container{height:100%}.mate-timepicker-dialog-body[_nghost-%COMP%]     .mate-timepicker-face .clock-face .clock-face__container .clock-face__number{font-size:14px;height:100%;position:absolute;text-align:center;width:30px;z-index:10}.mate-timepicker-dialog-body[_nghost-%COMP%]     .mate-timepicker-face .clock-face .clock-face__container .clock-face__number span{-webkit-user-select:none;align-items:center;border-radius:50%;display:flex;font-weight:500;height:30px;justify-content:center;margin:auto;user-select:none;width:30px}.mate-timepicker-dialog-body[_nghost-%COMP%]     .mate-timepicker-face .clock-face .clock-face__container .clock-face__inner{border-radius:50%;display:flex;height:calc(100% - 100px);position:absolute;top:50px}.mate-timepicker-dialog-body[_nghost-%COMP%]     .mate-timepicker-face .clock-face .clock-face__container .clock-face__inner .clock-face__number{font-size:12px;width:30px}.mate-timepicker-dialog-body[_nghost-%COMP%]     .mate-timepicker-face .clock-face .clock-face__clock-hand{position:absolute;transform-origin:bottom center;width:2px;z-index:1}.mate-timepicker-dialog-body[_nghost-%COMP%]     .mate-timepicker-face .clock-face .clock-face__clock-hand:after{background-color:inherit;border-radius:50%;bottom:-3px;content:\"\";height:6px;left:-2px;position:absolute;width:6px}.mate-timepicker-dialog-body[_nghost-%COMP%]     .mate-timepicker-face .clock-face .clock-face__clock-hand.hand-point:before{border-radius:50%;border-style:solid;border-width:8px;box-sizing:initial;content:\"\";height:4px;left:calc(50% - 10px);position:absolute;top:-11px;width:4px}"] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(MateTimepickerDialogBodyComponent, [{
                type: i0.Component,
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
                    type: i0.Input
                }], value: [{
                    type: i0.Input
                }], change: [{
                    type: i0.Output
                }], switchClock: [{
                    type: i0.Output
                }], enterPress: [{
                    type: i0.Output
                }], finish: [{
                    type: i0.Output
                }] });
    })();

    var MateTimepickerDialogFooterComponent = /** @class */ (function () {
        function MateTimepickerDialogFooterComponent() {
            this.clickOk = new i0.EventEmitter();
            this.clickCancel = new i0.EventEmitter();
        }
        MateTimepickerDialogFooterComponent.prototype.ngOnInit = function () {
        };
        return MateTimepickerDialogFooterComponent;
    }());
    MateTimepickerDialogFooterComponent.ɵfac = function MateTimepickerDialogFooterComponent_Factory(t) { return new (t || MateTimepickerDialogFooterComponent)(); };
    MateTimepickerDialogFooterComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MateTimepickerDialogFooterComponent, selectors: [["mate-timepicker-dialog-footer"]], hostAttrs: [1, "mate-timepicker-dialog-footer"], outputs: { clickOk: "clickOk", clickCancel: "clickCancel" }, exportAs: ["mateTimepickerDialogFooter"], decls: 5, vars: 0, consts: [[1, "mate-timepicker-actions"], ["mat-raised-button", "", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "click"]], template: function MateTimepickerDialogFooterComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "div", 0);
                i0.ɵɵelementStart(1, "button", 1);
                i0.ɵɵlistener("click", function MateTimepickerDialogFooterComponent_Template_button_click_1_listener() { return ctx.clickCancel.emit(); });
                i0.ɵɵtext(2, "Cancel");
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(3, "button", 2);
                i0.ɵɵlistener("click", function MateTimepickerDialogFooterComponent_Template_button_click_3_listener() { return ctx.clickOk.emit(); });
                i0.ɵɵtext(4, "Ok");
                i0.ɵɵelementEnd();
                i0.ɵɵelementEnd();
            }
        }, directives: [i1$1.MatButton], styles: [".mate-timepicker-dialog-footer[_nghost-%COMP%]{display:block;width:100%}.mate-timepicker-dialog-footer[_nghost-%COMP%]   .mate-timepicker-actions[_ngcontent-%COMP%]{align-content:flex-end;display:flex;justify-content:flex-end;margin-left:auto}.mate-timepicker-dialog-footer[_nghost-%COMP%]   .mate-timepicker-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:not(:first-child){margin-left:.5rem}"] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(MateTimepickerDialogFooterComponent, [{
                type: i0.Component,
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
                    type: i0.Output
                }], clickCancel: [{
                    type: i0.Output
                }] });
    })();

    var MateTimepickerDialogComponent = /** @class */ (function () {
        function MateTimepickerDialogComponent() {
            this.clockActive = 'hour';
            this.valueActive = 0;
            this.second = false;
            this.change = new i0.EventEmitter();
            this.cancel = new i0.EventEmitter();
        }
        Object.defineProperty(MateTimepickerDialogComponent.prototype, "value", {
            get: function () {
                return this._value;
            },
            set: function (value) {
                if (value)
                    this._value = value;
                else if (this.defaultValue)
                    this._value = this.defaultValue.clone();
                else
                    this._value = Duration.now(this.second);
                this.valueActive = this._value.getValue(this.clockActive);
            },
            enumerable: false,
            configurable: true
        });
        MateTimepickerDialogComponent.prototype.ngOnInit = function () {
            if (!this._value)
                this._value = Duration.now(this.second);
            this.valueActive = this._value.getValue(this.clockActive);
        };
        MateTimepickerDialogComponent.prototype.onActive = function (type) {
            this.clockActive = type;
            this.valueActive = this._value.getValue(type);
        };
        MateTimepickerDialogComponent.prototype.onChange = function (value) {
            this._value = this._value.setNew(value.type, value.value);
            this.valueActive = value.value;
        };
        MateTimepickerDialogComponent.prototype.onSwitch = function () {
            if (this.clockActive === 'hour')
                this.onActive('minute');
            else if (this.second && this.clockActive === 'minute')
                this.onActive('second');
        };
        MateTimepickerDialogComponent.prototype.onClockSwitch = function (type) {
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
        };
        MateTimepickerDialogComponent.prototype.onOk = function () {
            this.change.emit(this._value);
        };
        MateTimepickerDialogComponent.prototype.onCancel = function () {
            this.cancel.emit();
        };
        return MateTimepickerDialogComponent;
    }());
    MateTimepickerDialogComponent.ɵfac = function MateTimepickerDialogComponent_Factory(t) { return new (t || MateTimepickerDialogComponent)(); };
    MateTimepickerDialogComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MateTimepickerDialogComponent, selectors: [["mate-timepicker-dialog"]], hostAttrs: [1, "mate-timepicker-dialog"], inputs: { second: "second", defaultValue: "defaultValue", value: "value" }, outputs: { change: "change", cancel: "cancel" }, exportAs: ["mateTimepickerDialog"], decls: 3, vars: 5, consts: [[3, "type", "value", "second", "active"], [3, "value", "type", "change", "switchClock", "enterPress", "finish"], [3, "clickOk", "clickCancel"]], template: function MateTimepickerDialogComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "mate-timepicker-dialog-header", 0);
                i0.ɵɵlistener("active", function MateTimepickerDialogComponent_Template_mate_timepicker_dialog_header_active_0_listener($event) { return ctx.onActive($event); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(1, "mate-timepicker-dialog-body", 1);
                i0.ɵɵlistener("change", function MateTimepickerDialogComponent_Template_mate_timepicker_dialog_body_change_1_listener($event) { return ctx.onChange($event); })("switchClock", function MateTimepickerDialogComponent_Template_mate_timepicker_dialog_body_switchClock_1_listener($event) { return ctx.onClockSwitch($event); })("enterPress", function MateTimepickerDialogComponent_Template_mate_timepicker_dialog_body_enterPress_1_listener() { return ctx.onOk(); })("finish", function MateTimepickerDialogComponent_Template_mate_timepicker_dialog_body_finish_1_listener() { return ctx.onSwitch(); });
                i0.ɵɵelementEnd();
                i0.ɵɵelementStart(2, "mate-timepicker-dialog-footer", 2);
                i0.ɵɵlistener("clickOk", function MateTimepickerDialogComponent_Template_mate_timepicker_dialog_footer_clickOk_2_listener() { return ctx.onOk(); })("clickCancel", function MateTimepickerDialogComponent_Template_mate_timepicker_dialog_footer_clickCancel_2_listener() { return ctx.onCancel(); });
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("type", ctx.clockActive)("value", ctx.value)("second", ctx.second);
                i0.ɵɵadvance(1);
                i0.ɵɵproperty("value", ctx.valueActive)("type", ctx.clockActive);
            }
        }, directives: [MateTimepickerDialogHeaderComponent, MateTimepickerDialogBodyComponent, MateTimepickerDialogFooterComponent], styles: [".mate-timepicker-dialog[_nghost-%COMP%]{display:flex;flex-direction:column;height:420px;padding:8px;width:280px}.mate-timepicker-dialog[_nghost-%COMP%]   .mate-dialog-container[_ngcontent-%COMP%]{overflow:visible}"] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(MateTimepickerDialogComponent, [{
                type: i0.Component,
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
                    type: i0.Input
                }], defaultValue: [{
                    type: i0.Input
                }], value: [{
                    type: i0.Input
                }], change: [{
                    type: i0.Output
                }], cancel: [{
                    type: i0.Output
                }] });
    })();

    var MateTimepickerContentBase = /** @class */ (function () {
        function MateTimepickerContentBase(_elementRef) {
            this._elementRef = _elementRef;
        }
        return MateTimepickerContentBase;
    }());
    var _MateTimepickerContentMixinBase = core.mixinColor(MateTimepickerContentBase);
    var MateTimepickerContentComponent = /** @class */ (function (_super) {
        __extends(MateTimepickerContentComponent, _super);
        function MateTimepickerContentComponent(elementRef) {
            return _super.call(this, elementRef) || this;
        }
        MateTimepickerContentComponent.prototype.ngAfterViewInit = function () {
        };
        return MateTimepickerContentComponent;
    }(_MateTimepickerContentMixinBase));
    MateTimepickerContentComponent.ɵfac = function MateTimepickerContentComponent_Factory(t) { return new (t || MateTimepickerContentComponent)(i0.ɵɵdirectiveInject(i0.ElementRef)); };
    MateTimepickerContentComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MateTimepickerContentComponent, selectors: [["mate-timepicker-content"]], hostAttrs: [1, "mate-timepicker-content"], hostVars: 2, hostBindings: function MateTimepickerContentComponent_HostBindings(rf, ctx) {
            if (rf & 2) {
                i0.ɵɵclassProp("mate-timepicker-content-touch", ctx.timepicker.touchUi);
            }
        }, inputs: { color: "color" }, exportAs: ["mateTimepickerContent"], features: [i0.ɵɵInheritDefinitionFeature], decls: 1, vars: 4, consts: [[3, "id", "defaultValue", "second", "value", "change", "cancel"]], template: function MateTimepickerContentComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵelementStart(0, "mate-timepicker-dialog", 0);
                i0.ɵɵlistener("change", function MateTimepickerContentComponent_Template_mate_timepicker_dialog_change_0_listener($event) { return ctx.timepicker.select($event); })("cancel", function MateTimepickerContentComponent_Template_mate_timepicker_dialog_cancel_0_listener() { return ctx.timepicker.close(); });
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("id", ctx.timepicker.id)("defaultValue", ctx.timepicker == null ? null : ctx.timepicker._timepickerInput == null ? null : ctx.timepicker._timepickerInput.defaultValue)("second", ctx.timepicker.second)("value", ctx.timepicker._selected);
            }
        }, directives: [MateTimepickerDialogComponent], styles: [".mat-badge-content{font-family:Roboto,Helvetica Neue,sans-serif;font-size:12px;font-weight:600}.mat-badge-small .mat-badge-content{font-size:9px}.mat-badge-large .mat-badge-content{font-size:24px}.mat-h1,.mat-headline,.mat-typography h1{font:400 24px/32px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal;margin:0 0 16px}.mat-h2,.mat-title,.mat-typography h2{font:500 20px/32px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal;margin:0 0 16px}.mat-h3,.mat-subheading-2,.mat-typography h3{font:400 16px/28px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal;margin:0 0 16px}.mat-h4,.mat-subheading-1,.mat-typography h4{font:400 15px/24px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal;margin:0 0 16px}.mat-h5,.mat-typography h5{font:400 11.62px/20px Roboto,Helvetica Neue,sans-serif;margin:0 0 12px}.mat-h6,.mat-typography h6{font:400 9.38px/20px Roboto,Helvetica Neue,sans-serif;margin:0 0 12px}.mat-body-2,.mat-body-strong{font:500 14px/24px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-body,.mat-body-1,.mat-typography{font:400 14px/20px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-body-1 p,.mat-body p,.mat-typography p{margin:0 0 12px}.mat-caption,.mat-small{font:400 12px/20px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-display-4,.mat-typography .mat-display-4{font:300 112px/112px Roboto,Helvetica Neue,sans-serif;letter-spacing:-.05em;margin:0 0 56px}.mat-display-3,.mat-typography .mat-display-3{font:400 56px/56px Roboto,Helvetica Neue,sans-serif;letter-spacing:-.02em;margin:0 0 64px}.mat-display-2,.mat-typography .mat-display-2{font:400 45px/48px Roboto,Helvetica Neue,sans-serif;letter-spacing:-.005em;margin:0 0 64px}.mat-display-1,.mat-typography .mat-display-1{font:400 34px/40px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal;margin:0 0 64px}.mat-bottom-sheet-container{font:400 14px/20px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-button,.mat-fab,.mat-flat-button,.mat-icon-button,.mat-mini-fab,.mat-raised-button,.mat-stroked-button{font-family:Roboto,Helvetica Neue,sans-serif;font-size:14px;font-weight:500}.mat-button-toggle,.mat-card{font-family:Roboto,Helvetica Neue,sans-serif}.mat-card-title{font-size:24px;font-weight:500}.mat-card-header .mat-card-title{font-size:20px}.mat-card-content,.mat-card-subtitle{font-size:14px}.mat-checkbox{font-family:Roboto,Helvetica Neue,sans-serif}.mat-checkbox-layout .mat-checkbox-label{line-height:24px}.mat-chip{font-size:14px;font-weight:500}.mat-chip .mat-chip-remove.mat-icon,.mat-chip .mat-chip-trailing-icon.mat-icon{font-size:18px}.mat-table{font-family:Roboto,Helvetica Neue,sans-serif}.mat-header-cell{font-size:12px;font-weight:500}.mat-cell,.mat-footer-cell{font-size:14px}.mat-calendar{font-family:Roboto,Helvetica Neue,sans-serif}.mat-calendar-body{font-size:13px}.mat-calendar-body-label,.mat-calendar-period-button{font-size:14px;font-weight:500}.mat-calendar-table-header th{font-size:11px;font-weight:400}.mat-dialog-title{font:500 20px/32px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-expansion-panel-header{font-family:Roboto,Helvetica Neue,sans-serif;font-size:15px;font-weight:400}.mat-expansion-panel-content{font:400 14px/20px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-form-field{font-family:Roboto,Helvetica Neue,sans-serif;font-size:inherit;font-weight:400;letter-spacing:normal;line-height:1.125}.mat-form-field-wrapper{padding-bottom:1.34375em}.mat-form-field-prefix .mat-icon,.mat-form-field-suffix .mat-icon{font-size:150%;line-height:1.125}.mat-form-field-prefix .mat-icon-button,.mat-form-field-suffix .mat-icon-button{height:1.5em;width:1.5em}.mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field-suffix .mat-icon-button .mat-icon{height:1.125em;line-height:1.125}.mat-form-field-infix{border-top:.84375em solid transparent;padding:.5em 0}.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label,.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label{transform:translateY(-1.34375em) scale(.75);width:133.3333333333%}.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{transform:translateY(-1.34374em) scale(.75);width:133.3333433333%}.mat-form-field-label-wrapper{padding-top:.84375em;top:-.84375em}.mat-form-field-label{top:1.34375em}.mat-form-field-underline{bottom:1.34375em}.mat-form-field-subscript-wrapper{font-size:75%;margin-top:.6666666667em;top:calc(100% - 1.79167em)}.mat-form-field-appearance-legacy .mat-form-field-wrapper{padding-bottom:1.25em}.mat-form-field-appearance-legacy .mat-form-field-infix{padding:.4375em 0}.mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label,.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label{-ms-transform:translateY(-1.28125em) scale(.75);transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.001px);width:133.3333333333%}.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{-ms-transform:translateY(-1.28124em) scale(.75);transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00101px);width:133.3333433333%}.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{-ms-transform:translateY(-1.28123em) scale(.75);transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00102px);width:133.3333533333%}.mat-form-field-appearance-legacy .mat-form-field-label{top:1.28125em}.mat-form-field-appearance-legacy .mat-form-field-underline{bottom:1.25em}.mat-form-field-appearance-legacy .mat-form-field-subscript-wrapper{margin-top:.5416666667em;top:calc(100% - 1.66667em)}@media print{.mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label,.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label{transform:translateY(-1.28122em) scale(.75)}.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{transform:translateY(-1.28121em) scale(.75)}.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{transform:translateY(-1.2812em) scale(.75)}}.mat-form-field-appearance-fill .mat-form-field-infix{padding:.25em 0 .75em}.mat-form-field-appearance-fill .mat-form-field-label{margin-top:-.5em;top:1.09375em}.mat-form-field-appearance-fill.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label,.mat-form-field-appearance-fill.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label{transform:translateY(-.59375em) scale(.75);width:133.3333333333%}.mat-form-field-appearance-fill.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{transform:translateY(-.59374em) scale(.75);width:133.3333433333%}.mat-form-field-appearance-outline .mat-form-field-infix{padding:1em 0}.mat-form-field-appearance-outline .mat-form-field-label{margin-top:-.25em;top:1.84375em}.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label,.mat-form-field-appearance-outline.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label{transform:translateY(-1.59375em) scale(.75);width:133.3333333333%}.mat-form-field-appearance-outline.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{transform:translateY(-1.59374em) scale(.75);width:133.3333433333%}.mat-grid-tile-footer,.mat-grid-tile-header{font-size:14px}.mat-grid-tile-footer .mat-line,.mat-grid-tile-header .mat-line{box-sizing:border-box;display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-grid-tile-footer .mat-line:nth-child(n+2),.mat-grid-tile-header .mat-line:nth-child(n+2){font-size:12px}input.mat-input-element{margin-top:-.0625em}.mat-menu-item{font-family:Roboto,Helvetica Neue,sans-serif;font-size:14px;font-weight:400}.mat-paginator,.mat-paginator-page-size .mat-select-trigger{font-family:Roboto,Helvetica Neue,sans-serif;font-size:12px}.mat-radio-button,.mat-select{font-family:Roboto,Helvetica Neue,sans-serif}.mat-select-trigger{height:1.125em}.mat-slide-toggle-content,.mat-slider-thumb-label-text{font-family:Roboto,Helvetica Neue,sans-serif}.mat-slider-thumb-label-text{font-size:12px;font-weight:500}.mat-stepper-horizontal,.mat-stepper-vertical{font-family:Roboto,Helvetica Neue,sans-serif}.mat-step-label{font-size:14px;font-weight:400}.mat-step-sub-label-error{font-weight:400}.mat-step-label-error{font-size:14px}.mat-step-label-selected{font-size:14px;font-weight:500}.mat-tab-group,.mat-tab-label,.mat-tab-link{font-family:Roboto,Helvetica Neue,sans-serif}.mat-tab-label,.mat-tab-link{font-size:14px;font-weight:500}.mat-toolbar,.mat-toolbar h1,.mat-toolbar h2,.mat-toolbar h3,.mat-toolbar h4,.mat-toolbar h5,.mat-toolbar h6{font:500 20px/32px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal;margin:0}.mat-tooltip{font-family:Roboto,Helvetica Neue,sans-serif;font-size:10px;padding-bottom:6px;padding-top:6px}.mat-tooltip-handset{font-size:14px;padding-bottom:8px;padding-top:8px}.mat-list-item,.mat-list-option{font-family:Roboto,Helvetica Neue,sans-serif}.mat-list-base .mat-list-item{font-size:16px}.mat-list-base .mat-list-item .mat-line{box-sizing:border-box;display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-list-base .mat-list-item .mat-line:nth-child(n+2){font-size:14px}.mat-list-base .mat-list-option{font-size:16px}.mat-list-base .mat-list-option .mat-line{box-sizing:border-box;display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-list-base .mat-list-option .mat-line:nth-child(n+2){font-size:14px}.mat-list-base .mat-subheader{font-family:Roboto,Helvetica Neue,sans-serif;font-size:14px;font-weight:500}.mat-list-base[dense] .mat-list-item{font-size:12px}.mat-list-base[dense] .mat-list-item .mat-line{box-sizing:border-box;display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-list-base[dense] .mat-list-item .mat-line:nth-child(n+2),.mat-list-base[dense] .mat-list-option{font-size:12px}.mat-list-base[dense] .mat-list-option .mat-line{box-sizing:border-box;display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-list-base[dense] .mat-list-option .mat-line:nth-child(n+2){font-size:12px}.mat-list-base[dense] .mat-subheader{font-family:Roboto,Helvetica Neue,sans-serif;font-size:12px;font-weight:500}.mat-option{font-family:Roboto,Helvetica Neue,sans-serif;font-size:16px}.mat-optgroup-label{font:500 14px/24px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-simple-snackbar{font-family:Roboto,Helvetica Neue,sans-serif;font-size:14px}.mat-simple-snackbar-action{font-family:inherit;font-size:inherit;font-weight:500;line-height:1}.mat-tree{font-family:Roboto,Helvetica Neue,sans-serif}.mat-nested-tree-node,.mat-tree-node{font-size:14px;font-weight:400}.mat-ripple{overflow:hidden;position:relative}.mat-ripple:not(:empty){transform:translateZ(0)}.mat-ripple.mat-ripple-unbounded{overflow:visible}.mat-ripple-element{border-radius:50%;pointer-events:none;position:absolute;transform:scale(0);transition:opacity,transform 0ms cubic-bezier(0,0,.2,1)}.cdk-high-contrast-active .mat-ripple-element{display:none}.cdk-visually-hidden{-moz-appearance:none;-webkit-appearance:none;border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;outline:0;overflow:hidden;padding:0;position:absolute;width:1px}.cdk-global-overlay-wrapper,.cdk-overlay-container{height:100%;left:0;pointer-events:none;top:0;width:100%}.cdk-overlay-container{position:fixed;z-index:1000}.cdk-overlay-container:empty{display:none}.cdk-global-overlay-wrapper,.cdk-overlay-pane{display:flex;position:absolute;z-index:1000}.cdk-overlay-pane{box-sizing:border-box;max-height:100%;max-width:100%;pointer-events:auto}.cdk-overlay-backdrop{-webkit-tap-highlight-color:transparent;bottom:0;left:0;opacity:0;pointer-events:auto;position:absolute;right:0;top:0;transition:opacity .4s cubic-bezier(.25,.8,.25,1);z-index:1000}.cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:1}@media screen and (-ms-high-contrast:active){.cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:.6}}.cdk-overlay-dark-backdrop{background:rgba(0,0,0,.32)}.cdk-overlay-transparent-backdrop,.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing{opacity:0}.cdk-overlay-connected-position-bounding-box{display:flex;flex-direction:column;min-height:1px;min-width:1px;position:absolute;z-index:1000}.cdk-global-scrollblock{overflow-y:scroll;position:fixed;width:100%}@keyframes cdk-text-field-autofill-start{\n  /*!*/}@keyframes cdk-text-field-autofill-end{\n  /*!*/}.cdk-text-field-autofill-monitored:-webkit-autofill{animation:cdk-text-field-autofill-start 0s 1ms}.cdk-text-field-autofill-monitored:not(:-webkit-autofill){animation:cdk-text-field-autofill-end 0s 1ms}textarea.cdk-textarea-autosize{resize:none}textarea.cdk-textarea-autosize-measuring{box-sizing:initial!important;height:auto!important;overflow:hidden!important;padding:2px 0!important}textarea.cdk-textarea-autosize-measuring-firefox{box-sizing:initial!important;height:0!important;padding:2px 0!important}.mat-focus-indicator,.mat-mdc-focus-indicator{position:relative}.mate-timepicker-content{border-radius:4px;box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12);display:block}.mate-timepicker-content-touch{display:block;margin:-24px;max-height:80vh;overflow:auto}.mate-timepicker-content-touch .mate-timepicker-dialog{max-height:788px;max-width:750px;min-height:312px;min-width:250px}.mate-timepicker-content{background-color:#fff;color:rgba(0,0,0,.87)}.mate-timepicker-content .mate-timepicker-dialog-header .mate-timepicker-dial .timepicker-dial-time{color:rgba(0,0,0,.54)}.mate-timepicker-content .mate-timepicker-dialog-body .mate-timepicker-face,.mate-timepicker-content .mate-timepicker-dialog-header .mate-timepicker-dial .timepicker-dial-time label.timepicker-dial-time-item.active{color:rgba(0,0,0,.87)}.mate-timepicker-content .mate-timepicker-face .clock-face .clock-face__container .clock-face__number.active span{background:#3f51b5;color:#fff}.mate-timepicker-content .mate-timepicker-face .clock-face .clock-face__clock-hand{background-color:#3f51b5}.mate-timepicker-content .mate-timepicker-face .clock-face .clock-face__clock-hand.hand-point:before{background-color:#fff;border-color:#3f51b5}.mate-timepicker-content.mat-accent .mate-timepicker-face .clock-face .clock-face__container .clock-face__number.active span{background:#ff4081;color:#fff}.mate-timepicker-content.mat-accent .mate-timepicker-face .clock-face .clock-face__clock-hand{background-color:#ff4081}.mate-timepicker-content.mat-accent .mate-timepicker-face .clock-face .clock-face__clock-hand.hand-point:before{background-color:#fff;border-color:#ff4081}.mate-timepicker-content.mat-warn .mate-timepicker-face .clock-face .clock-face__container .clock-face__number.active span{background:#f44336;color:#fff}.mate-timepicker-content.mat-warn .mate-timepicker-face .clock-face .clock-face__clock-hand{background-color:#f44336}.mate-timepicker-content.mat-warn .mate-timepicker-face .clock-face .clock-face__clock-hand.hand-point:before{background-color:#fff;border-color:#f44336}"], encapsulation: 2, data: { animation: [
            // matDatepickerAnimations.transformPanel,
            // matDatepickerAnimations.fadeInCalendar
            ] }, changeDetection: 0 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(MateTimepickerContentComponent, [{
                type: i0.Component,
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
                        encapsulation: i0.ViewEncapsulation.None,
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        inputs: ['color']
                    }]
            }], function () { return [{ type: i0.ElementRef }]; }, null);
    })();

    var MateTimepickerInputEvent = /** @class */ (function () {
        function MateTimepickerInputEvent(target, targetElement) {
            this.target = target;
            this.targetElement = targetElement;
            this.value = this.target.value;
        }
        return MateTimepickerInputEvent;
    }());
    var MateTimepickerInputDirective = /** @class */ (function () {
        function MateTimepickerInputDirective(_decimalPipe, _elementRef, _formField) {
            this._decimalPipe = _decimalPipe;
            this._elementRef = _elementRef;
            this._formField = _formField;
            this._value = Duration.zero();
            this._timepickerSubscription = rxjs.Subscription.EMPTY;
            this._validator = forms.Validators.compose([]);
            this._disabledChange = new i0.EventEmitter();
            this._valueChange = new i0.EventEmitter();
            this.maxLength = 8;
            this.timeChange = new i0.EventEmitter();
            this.timeInput = new i0.EventEmitter();
            this._onTouched = function () {
            };
            this._validatorOnChange = function () {
            };
            this._cvaOnChange = function () {
            };
        }
        Object.defineProperty(MateTimepickerInputDirective.prototype, "mateTimepicker", {
            set: function (value) {
                var _this = this;
                if (!value)
                    return;
                this._timepicker = value;
                this._timepicker._registerInput(this);
                this._timepickerSubscription.unsubscribe();
                this._timepickerSubscription = this._timepicker._selectedChanged.subscribe(function (selected) {
                    _this.value = selected;
                    _this._cvaOnChange(selected);
                    _this._onTouched();
                    _this.timeInput.emit(new MateTimepickerInputEvent(_this, _this._elementRef.nativeElement));
                    _this.timeChange.emit(new MateTimepickerInputEvent(_this, _this._elementRef.nativeElement));
                });
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MateTimepickerInputDirective.prototype, "value", {
            get: function () {
                return this._value;
            },
            set: function (value) {
                var oldDate = this.value;
                value = this._convertValue(value);
                this._value = value;
                this._formatValue(value);
                if (!this.sameTime(oldDate, value))
                    this._valueChange.emit(value);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MateTimepickerInputDirective.prototype, "disabled", {
            get: function () {
                return !!this._disabled;
            },
            set: function (value) {
                var newValue = coercion.coerceBooleanProperty(value);
                var element = this._elementRef.nativeElement;
                if (this._disabled !== newValue) {
                    this._disabled = newValue;
                    this._disabledChange.emit(newValue);
                }
                if (newValue && element.blur)
                    element.blur();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MateTimepickerInputDirective.prototype, "defaultValue", {
            get: function () {
                return this._defaultValue;
            },
            set: function (value) {
                this._defaultValue = this._convertValue(value);
            },
            enumerable: false,
            configurable: true
        });
        MateTimepickerInputDirective.prototype.ngOnDestroy = function () {
            this._valueChange.complete();
            this._disabledChange.complete();
        };
        MateTimepickerInputDirective.prototype._onKeydown = function (event) {
            var isAltDownArrow = event.altKey && event.code === 'ArrowDown' || event['keyCode'] === keycodes.DOWN_ARROW;
            if (this._timepicker && isAltDownArrow && !this._elementRef.nativeElement.readOnly) {
                this._timepicker.open();
                event.preventDefault();
            }
        };
        MateTimepickerInputDirective.prototype._onInput = function (value) {
            var time = this._convertValue(value);
            if (!this.sameTime(this._value, time)) {
                this._value = time;
                this._cvaOnChange(time);
                this._valueChange.emit(time);
                this.timeInput.emit(new MateTimepickerInputEvent(this, this._elementRef.nativeElement));
            }
            else if (time == null)
                this._validatorOnChange();
        };
        MateTimepickerInputDirective.prototype._onChange = function () {
            this.timeChange.emit(new MateTimepickerInputEvent(this, this._elementRef.nativeElement));
        };
        MateTimepickerInputDirective.prototype._onBlur = function () {
            // Reformat the input only if we have a valid value.
            this._formatValue(this.value);
            this._onTouched();
        };
        MateTimepickerInputDirective.prototype._getThemePalette = function () {
            return this._formField ? this._formField.color : undefined;
        };
        MateTimepickerInputDirective.prototype.reformatValue = function () {
            this._formatValue(this.value);
        };
        MateTimepickerInputDirective.prototype.sameTime = function (v1, v2) {
            return TimepickerUtil.isEqualsDeep(v1, v2) || v1 != null && v2 != null && typeof v1.equals === 'function' && v1.equals(v2);
        };
        MateTimepickerInputDirective.prototype._convertValue = function (value) {
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
        };
        MateTimepickerInputDirective.prototype._formatValue = function (value) {
            var timeValue = '';
            if (value instanceof Duration) {
                timeValue = this._decimalPipe.transform(value.hour, '2.0') + ":" + this._decimalPipe.transform(value.minute, '2.0');
                if (this._timepicker.second)
                    timeValue = typeof value.second === 'number' ?
                        timeValue + ":" + this._decimalPipe.transform(value.second, '2.0') : '';
            }
            this._elementRef.nativeElement.value = timeValue;
        };
        MateTimepickerInputDirective.prototype.getPopupConnectionElementRef = function () {
            return this.getConnectedOverlayOrigin();
        };
        MateTimepickerInputDirective.prototype.getConnectedOverlayOrigin = function () {
            return this._formField ? this._formField.getConnectedOverlayOrigin() : this._elementRef;
        };
        MateTimepickerInputDirective.prototype.registerOnChange = function (fn) {
            this._cvaOnChange = fn;
        };
        MateTimepickerInputDirective.prototype.registerOnTouched = function (fn) {
            this._onTouched = fn;
        };
        MateTimepickerInputDirective.prototype.registerOnValidatorChange = function (fn) {
            this._validatorOnChange = fn;
        };
        MateTimepickerInputDirective.prototype.validate = function (control) {
            return this._validator ? this._validator(control) : null;
        };
        MateTimepickerInputDirective.prototype.writeValue = function (obj) {
            this.value = obj;
        };
        return MateTimepickerInputDirective;
    }());
    MateTimepickerInputDirective.ɵfac = function MateTimepickerInputDirective_Factory(t) { return new (t || MateTimepickerInputDirective)(i0.ɵɵdirectiveInject(i1.DecimalPipe), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i2.MatFormField, 8)); };
    MateTimepickerInputDirective.ɵdir = i0.ɵɵdefineDirective({ type: MateTimepickerInputDirective, selectors: [["input", "mateTimepicker", ""]], hostVars: 4, hostBindings: function MateTimepickerInputDirective_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵlistener("keydown", function MateTimepickerInputDirective_keydown_HostBindingHandler($event) { return ctx._onKeydown($event); })("input", function MateTimepickerInputDirective_input_HostBindingHandler($event) { return ctx._onInput($event.target.value); })("change", function MateTimepickerInputDirective_change_HostBindingHandler() { return ctx._onChange(); })("blur", function MateTimepickerInputDirective_blur_HostBindingHandler() { return ctx._onBlur(); });
            }
            if (rf & 2) {
                i0.ɵɵhostProperty("disabled", ctx.disabled)("maxLength", ctx.maxLength);
                i0.ɵɵattribute("aria-haspopup", ctx._timepicker ? "dialog" : null)("aria-owns", (ctx._timepicker == null ? null : ctx._timepicker.opened) && ctx._timepicker.id || null);
            }
        }, inputs: { mateTimepicker: "mateTimepicker", value: "value", disabled: "disabled", defaultValue: "defaultValue" }, outputs: { timeChange: "timeChange", timeInput: "timeInput" }, exportAs: ["mateDatepickerInput"], features: [i0.ɵɵProvidersFeature([
                { provide: input.MAT_INPUT_VALUE_ACCESSOR, useExisting: MateTimepickerInputDirective },
                i1.DecimalPipe
            ])] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(MateTimepickerInputDirective, [{
                type: i0.Directive,
                args: [{
                        selector: 'input[mateTimepicker]',
                        providers: [
                            { provide: input.MAT_INPUT_VALUE_ACCESSOR, useExisting: MateTimepickerInputDirective },
                            i1.DecimalPipe
                        ],
                        host: {
                            '[attr.aria-haspopup]': '_timepicker ? "dialog" : null',
                            '[attr.aria-owns]': '(_timepicker?.opened && _timepicker.id) || null',
                            '[disabled]': 'disabled'
                        },
                        exportAs: 'mateDatepickerInput'
                    }]
            }], function () {
            return [{ type: i1.DecimalPipe }, { type: i0.ElementRef }, { type: i2.MatFormField, decorators: [{
                            type: i0.Optional
                        }] }];
        }, { maxLength: [{
                    type: i0.HostBinding,
                    args: ['maxLength']
                }], mateTimepicker: [{
                    type: i0.Input
                }], value: [{
                    type: i0.Input
                }], disabled: [{
                    type: i0.Input
                }], defaultValue: [{
                    type: i0.Input
                }], timeChange: [{
                    type: i0.Output
                }], timeInput: [{
                    type: i0.Output
                }], _onKeydown: [{
                    type: i0.HostListener,
                    args: ['keydown', ['$event']]
                }], _onInput: [{
                    type: i0.HostListener,
                    args: ['input', ['$event.target.value']]
                }], _onChange: [{
                    type: i0.HostListener,
                    args: ['change']
                }], _onBlur: [{
                    type: i0.HostListener,
                    args: ['blur']
                }] });
    })();

    var MateTimepickerIntlService = /** @class */ (function () {
        function MateTimepickerIntlService() {
            this.changes = new rxjs.Subject();
            this.openTimepickerLabel = 'Open timepicker';
        }
        return MateTimepickerIntlService;
    }());
    MateTimepickerIntlService.ɵfac = function MateTimepickerIntlService_Factory(t) { return new (t || MateTimepickerIntlService)(); };
    MateTimepickerIntlService.ɵprov = i0.ɵɵdefineInjectable({ token: MateTimepickerIntlService, factory: MateTimepickerIntlService.ɵfac, providedIn: 'root' });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(MateTimepickerIntlService, [{
                type: i0.Injectable,
                args: [{
                        providedIn: 'root'
                    }]
            }], function () { return []; }, null);
    })();

    var _c0$2 = ["button"];
    function MateTimepickerToggleComponent__svg_svg_2_Template(rf, ctx) {
        if (rf & 1) {
            i0.ɵɵnamespaceSVG();
            i0.ɵɵelementStart(0, "svg", 3);
            i0.ɵɵelement(1, "path", 4);
            i0.ɵɵelementEnd();
        }
    }
    var _c1$2 = [[["", "mateTimepickerToggleIcon", ""]]];
    var _c2 = ["[mateTimepickerToggleIcon]"];
    var MateTimepickerToggleIconDirective = /** @class */ (function () {
        function MateTimepickerToggleIconDirective() {
        }
        return MateTimepickerToggleIconDirective;
    }());
    MateTimepickerToggleIconDirective.ɵfac = function MateTimepickerToggleIconDirective_Factory(t) { return new (t || MateTimepickerToggleIconDirective)(); };
    MateTimepickerToggleIconDirective.ɵdir = i0.ɵɵdefineDirective({ type: MateTimepickerToggleIconDirective, selectors: [["", "mateTimepickerToggleIcon", ""]] });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(MateTimepickerToggleIconDirective, [{
                type: i0.Directive,
                args: [{
                        selector: '[mateTimepickerToggleIcon]'
                    }]
            }], null, null);
    })();
    var MateTimepickerToggleComponent = /** @class */ (function () {
        function MateTimepickerToggleComponent(_intl, _changeDetectorRef, defaultTabIndex) {
            this._intl = _intl;
            this._changeDetectorRef = _changeDetectorRef;
            this._stateChanges = rxjs.Subscription.EMPTY;
            var parsedTabIndex = Number(defaultTabIndex);
            this.tabIndex = (parsedTabIndex || parsedTabIndex === 0) ? parsedTabIndex : null;
        }
        Object.defineProperty(MateTimepickerToggleComponent.prototype, "disabled", {
            get: function () {
                if (this._disabled === undefined && this.timepicker) {
                    return this.timepicker.disabled;
                }
                return !!this._disabled;
            },
            set: function (value) {
                this._disabled = coercion.coerceBooleanProperty(value);
            },
            enumerable: false,
            configurable: true
        });
        MateTimepickerToggleComponent.prototype.ngOnChanges = function (changes) {
            if (changes['Timepicker']) {
                this._watchStateChanges();
            }
        };
        MateTimepickerToggleComponent.prototype.ngOnDestroy = function () {
            this._stateChanges.unsubscribe();
        };
        MateTimepickerToggleComponent.prototype.ngAfterContentInit = function () {
            this._watchStateChanges();
        };
        MateTimepickerToggleComponent.prototype._open = function (event) {
            if (this.timepicker && !this.disabled) {
                this.timepicker.open();
                event.stopPropagation();
            }
        };
        MateTimepickerToggleComponent.prototype._watchStateChanges = function () {
            var _this = this;
            var TimepickerDisabled = this.timepicker ? this.timepicker._disabledChange : rxjs.of();
            var inputDisabled = this.timepicker && this.timepicker._timepickerInput ?
                this.timepicker._timepickerInput._disabledChange : rxjs.of();
            var TimepickerToggled = this.timepicker ?
                rxjs.merge(this.timepicker.openedStream, this.timepicker.closedStream) :
                rxjs.of();
            this._stateChanges.unsubscribe();
            this._stateChanges = rxjs.merge(this._intl.changes, TimepickerDisabled, inputDisabled, TimepickerToggled).subscribe(function () { return _this._changeDetectorRef.markForCheck(); });
        };
        return MateTimepickerToggleComponent;
    }());
    MateTimepickerToggleComponent.ɵfac = function MateTimepickerToggleComponent_Factory(t) { return new (t || MateTimepickerToggleComponent)(i0.ɵɵdirectiveInject(MateTimepickerIntlService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵinjectAttribute('tabindex')); };
    MateTimepickerToggleComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MateTimepickerToggleComponent, selectors: [["mate-timepicker-toggle"]], contentQueries: function MateTimepickerToggleComponent_ContentQueries(rf, ctx, dirIndex) {
            if (rf & 1) {
                i0.ɵɵcontentQuery(dirIndex, MateTimepickerToggleIconDirective, true);
            }
            if (rf & 2) {
                var _t;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._customIcon = _t.first);
            }
        }, viewQuery: function MateTimepickerToggleComponent_Query(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵviewQuery(_c0$2, true);
            }
            if (rf & 2) {
                var _t;
                i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx._button = _t.first);
            }
        }, hostAttrs: [1, "mate-timepicker-toggle"], hostVars: 7, hostBindings: function MateTimepickerToggleComponent_HostBindings(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵlistener("focus", function MateTimepickerToggleComponent_focus_HostBindingHandler() { return ctx._button.focus(); });
            }
            if (rf & 2) {
                i0.ɵɵattribute("tabindex", ctx.disabled ? null : -1);
                i0.ɵɵclassProp("mate-timepicker-toggle-active", ctx.timepicker && ctx.timepicker.opened)("mat-accent", ctx.timepicker && ctx.timepicker.color === "accent")("mat-warn", ctx.timepicker && ctx.timepicker.color === "warn");
            }
        }, inputs: { timepicker: ["for", "timepicker"], tabIndex: "tabIndex", disabled: "disabled", disableRipple: "disableRipple" }, exportAs: ["matetimepickerToggle"], features: [i0.ɵɵNgOnChangesFeature], ngContentSelectors: _c2, decls: 4, vars: 6, consts: [["mat-icon-button", "", "type", "button", 3, "disabled", "disableRipple", "click"], ["button", ""], ["class", "mate-timepicker-toggle-default-icon", "viewBox", "0 0 24 24", "width", "24px", "height", "24px", "fill", "currentColor", "focusable", "false", 4, "ngIf"], ["viewBox", "0 0 24 24", "width", "24px", "height", "24px", "fill", "currentColor", "focusable", "false", 1, "mate-timepicker-toggle-default-icon"], ["d", "M15.87 15.25l-3.37-2V8.72c0-.4-.32-.72-.72-.72h-.06c-.4 0-.72.32-.72.72v4.72c0 .35.18.68.49.86l3.65 2.19c.34.2.78.1.98-.24.21-.35.1-.8-.25-1zm5.31-10.24L18.1 2.45c-.42-.35-1.05-.3-1.41.13-.35.42-.29 1.05.13 1.41l3.07 2.56c.42.35 1.05.3 1.41-.13.36-.42.3-1.05-.12-1.41zM4.1 6.55l3.07-2.56c.43-.36.49-.99.13-1.41-.35-.43-.98-.48-1.4-.13L2.82 5.01c-.42.36-.48.99-.12 1.41.35.43.98.48 1.4.13zM12 4c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z"]], template: function MateTimepickerToggleComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0.ɵɵprojectionDef(_c1$2);
                i0.ɵɵelementStart(0, "button", 0, 1);
                i0.ɵɵlistener("click", function MateTimepickerToggleComponent_Template_button_click_0_listener($event) { return ctx._open($event); });
                i0.ɵɵtemplate(2, MateTimepickerToggleComponent__svg_svg_2_Template, 2, 0, "svg", 2);
                i0.ɵɵprojection(3);
                i0.ɵɵelementEnd();
            }
            if (rf & 2) {
                i0.ɵɵproperty("disabled", ctx.disabled)("disableRipple", ctx.disableRipple);
                i0.ɵɵattribute("aria-label", ctx._intl.openTimepickerLabel)("aria-haspopup", ctx.timepicker ? "dialog" : null)("tabindex", ctx.disabled ? -1 : ctx.tabIndex);
                i0.ɵɵadvance(2);
                i0.ɵɵproperty("ngIf", !ctx._customIcon);
            }
        }, directives: [i1$1.MatButton, i1.NgIf], styles: [".mat-badge-content{font-family:Roboto,Helvetica Neue,sans-serif;font-size:12px;font-weight:600}.mat-badge-small .mat-badge-content{font-size:9px}.mat-badge-large .mat-badge-content{font-size:24px}.mat-h1,.mat-headline,.mat-typography h1{font:400 24px/32px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal;margin:0 0 16px}.mat-h2,.mat-title,.mat-typography h2{font:500 20px/32px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal;margin:0 0 16px}.mat-h3,.mat-subheading-2,.mat-typography h3{font:400 16px/28px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal;margin:0 0 16px}.mat-h4,.mat-subheading-1,.mat-typography h4{font:400 15px/24px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal;margin:0 0 16px}.mat-h5,.mat-typography h5{font:400 11.62px/20px Roboto,Helvetica Neue,sans-serif;margin:0 0 12px}.mat-h6,.mat-typography h6{font:400 9.38px/20px Roboto,Helvetica Neue,sans-serif;margin:0 0 12px}.mat-body-2,.mat-body-strong{font:500 14px/24px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-body,.mat-body-1,.mat-typography{font:400 14px/20px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-body-1 p,.mat-body p,.mat-typography p{margin:0 0 12px}.mat-caption,.mat-small{font:400 12px/20px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-display-4,.mat-typography .mat-display-4{font:300 112px/112px Roboto,Helvetica Neue,sans-serif;letter-spacing:-.05em;margin:0 0 56px}.mat-display-3,.mat-typography .mat-display-3{font:400 56px/56px Roboto,Helvetica Neue,sans-serif;letter-spacing:-.02em;margin:0 0 64px}.mat-display-2,.mat-typography .mat-display-2{font:400 45px/48px Roboto,Helvetica Neue,sans-serif;letter-spacing:-.005em;margin:0 0 64px}.mat-display-1,.mat-typography .mat-display-1{font:400 34px/40px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal;margin:0 0 64px}.mat-bottom-sheet-container{font:400 14px/20px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-button,.mat-fab,.mat-flat-button,.mat-icon-button,.mat-mini-fab,.mat-raised-button,.mat-stroked-button{font-family:Roboto,Helvetica Neue,sans-serif;font-size:14px;font-weight:500}.mat-button-toggle,.mat-card{font-family:Roboto,Helvetica Neue,sans-serif}.mat-card-title{font-size:24px;font-weight:500}.mat-card-header .mat-card-title{font-size:20px}.mat-card-content,.mat-card-subtitle{font-size:14px}.mat-checkbox{font-family:Roboto,Helvetica Neue,sans-serif}.mat-checkbox-layout .mat-checkbox-label{line-height:24px}.mat-chip{font-size:14px;font-weight:500}.mat-chip .mat-chip-remove.mat-icon,.mat-chip .mat-chip-trailing-icon.mat-icon{font-size:18px}.mat-table{font-family:Roboto,Helvetica Neue,sans-serif}.mat-header-cell{font-size:12px;font-weight:500}.mat-cell,.mat-footer-cell{font-size:14px}.mat-calendar{font-family:Roboto,Helvetica Neue,sans-serif}.mat-calendar-body{font-size:13px}.mat-calendar-body-label,.mat-calendar-period-button{font-size:14px;font-weight:500}.mat-calendar-table-header th{font-size:11px;font-weight:400}.mat-dialog-title{font:500 20px/32px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-expansion-panel-header{font-family:Roboto,Helvetica Neue,sans-serif;font-size:15px;font-weight:400}.mat-expansion-panel-content{font:400 14px/20px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-form-field{font-family:Roboto,Helvetica Neue,sans-serif;font-size:inherit;font-weight:400;letter-spacing:normal;line-height:1.125}.mat-form-field-wrapper{padding-bottom:1.34375em}.mat-form-field-prefix .mat-icon,.mat-form-field-suffix .mat-icon{font-size:150%;line-height:1.125}.mat-form-field-prefix .mat-icon-button,.mat-form-field-suffix .mat-icon-button{height:1.5em;width:1.5em}.mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field-suffix .mat-icon-button .mat-icon{height:1.125em;line-height:1.125}.mat-form-field-infix{border-top:.84375em solid transparent;padding:.5em 0}.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label,.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label{transform:translateY(-1.34375em) scale(.75);width:133.3333333333%}.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{transform:translateY(-1.34374em) scale(.75);width:133.3333433333%}.mat-form-field-label-wrapper{padding-top:.84375em;top:-.84375em}.mat-form-field-label{top:1.34375em}.mat-form-field-underline{bottom:1.34375em}.mat-form-field-subscript-wrapper{font-size:75%;margin-top:.6666666667em;top:calc(100% - 1.79167em)}.mat-form-field-appearance-legacy .mat-form-field-wrapper{padding-bottom:1.25em}.mat-form-field-appearance-legacy .mat-form-field-infix{padding:.4375em 0}.mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label,.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label{-ms-transform:translateY(-1.28125em) scale(.75);transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.001px);width:133.3333333333%}.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{-ms-transform:translateY(-1.28124em) scale(.75);transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00101px);width:133.3333433333%}.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{-ms-transform:translateY(-1.28123em) scale(.75);transform:translateY(-1.28125em) scale(.75) perspective(100px) translateZ(.00102px);width:133.3333533333%}.mat-form-field-appearance-legacy .mat-form-field-label{top:1.28125em}.mat-form-field-appearance-legacy .mat-form-field-underline{bottom:1.25em}.mat-form-field-appearance-legacy .mat-form-field-subscript-wrapper{margin-top:.5416666667em;top:calc(100% - 1.66667em)}@media print{.mat-form-field-appearance-legacy.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label,.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label{transform:translateY(-1.28122em) scale(.75)}.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{transform:translateY(-1.28121em) scale(.75)}.mat-form-field-appearance-legacy.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{transform:translateY(-1.2812em) scale(.75)}}.mat-form-field-appearance-fill .mat-form-field-infix{padding:.25em 0 .75em}.mat-form-field-appearance-fill .mat-form-field-label{margin-top:-.5em;top:1.09375em}.mat-form-field-appearance-fill.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label,.mat-form-field-appearance-fill.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label{transform:translateY(-.59375em) scale(.75);width:133.3333333333%}.mat-form-field-appearance-fill.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{transform:translateY(-.59374em) scale(.75);width:133.3333433333%}.mat-form-field-appearance-outline .mat-form-field-infix{padding:1em 0}.mat-form-field-appearance-outline .mat-form-field-label{margin-top:-.25em;top:1.84375em}.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label,.mat-form-field-appearance-outline.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label{transform:translateY(-1.59375em) scale(.75);width:133.3333333333%}.mat-form-field-appearance-outline.mat-form-field-can-float .mat-input-server[label]:not(:label-shown)+.mat-form-field-label-wrapper .mat-form-field-label{transform:translateY(-1.59374em) scale(.75);width:133.3333433333%}.mat-grid-tile-footer,.mat-grid-tile-header{font-size:14px}.mat-grid-tile-footer .mat-line,.mat-grid-tile-header .mat-line{box-sizing:border-box;display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-grid-tile-footer .mat-line:nth-child(n+2),.mat-grid-tile-header .mat-line:nth-child(n+2){font-size:12px}input.mat-input-element{margin-top:-.0625em}.mat-menu-item{font-family:Roboto,Helvetica Neue,sans-serif;font-size:14px;font-weight:400}.mat-paginator,.mat-paginator-page-size .mat-select-trigger{font-family:Roboto,Helvetica Neue,sans-serif;font-size:12px}.mat-radio-button,.mat-select{font-family:Roboto,Helvetica Neue,sans-serif}.mat-select-trigger{height:1.125em}.mat-slide-toggle-content,.mat-slider-thumb-label-text{font-family:Roboto,Helvetica Neue,sans-serif}.mat-slider-thumb-label-text{font-size:12px;font-weight:500}.mat-stepper-horizontal,.mat-stepper-vertical{font-family:Roboto,Helvetica Neue,sans-serif}.mat-step-label{font-size:14px;font-weight:400}.mat-step-sub-label-error{font-weight:400}.mat-step-label-error{font-size:14px}.mat-step-label-selected{font-size:14px;font-weight:500}.mat-tab-group,.mat-tab-label,.mat-tab-link{font-family:Roboto,Helvetica Neue,sans-serif}.mat-tab-label,.mat-tab-link{font-size:14px;font-weight:500}.mat-toolbar,.mat-toolbar h1,.mat-toolbar h2,.mat-toolbar h3,.mat-toolbar h4,.mat-toolbar h5,.mat-toolbar h6{font:500 20px/32px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal;margin:0}.mat-tooltip{font-family:Roboto,Helvetica Neue,sans-serif;font-size:10px;padding-bottom:6px;padding-top:6px}.mat-tooltip-handset{font-size:14px;padding-bottom:8px;padding-top:8px}.mat-list-item,.mat-list-option{font-family:Roboto,Helvetica Neue,sans-serif}.mat-list-base .mat-list-item{font-size:16px}.mat-list-base .mat-list-item .mat-line{box-sizing:border-box;display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-list-base .mat-list-item .mat-line:nth-child(n+2){font-size:14px}.mat-list-base .mat-list-option{font-size:16px}.mat-list-base .mat-list-option .mat-line{box-sizing:border-box;display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-list-base .mat-list-option .mat-line:nth-child(n+2){font-size:14px}.mat-list-base .mat-subheader{font-family:Roboto,Helvetica Neue,sans-serif;font-size:14px;font-weight:500}.mat-list-base[dense] .mat-list-item{font-size:12px}.mat-list-base[dense] .mat-list-item .mat-line{box-sizing:border-box;display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-list-base[dense] .mat-list-item .mat-line:nth-child(n+2),.mat-list-base[dense] .mat-list-option{font-size:12px}.mat-list-base[dense] .mat-list-option .mat-line{box-sizing:border-box;display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.mat-list-base[dense] .mat-list-option .mat-line:nth-child(n+2){font-size:12px}.mat-list-base[dense] .mat-subheader{font-family:Roboto,Helvetica Neue,sans-serif;font-size:12px;font-weight:500}.mat-option{font-family:Roboto,Helvetica Neue,sans-serif;font-size:16px}.mat-optgroup-label{font:500 14px/24px Roboto,Helvetica Neue,sans-serif;letter-spacing:normal}.mat-simple-snackbar{font-family:Roboto,Helvetica Neue,sans-serif;font-size:14px}.mat-simple-snackbar-action{font-family:inherit;font-size:inherit;font-weight:500;line-height:1}.mat-tree{font-family:Roboto,Helvetica Neue,sans-serif}.mat-nested-tree-node,.mat-tree-node{font-size:14px;font-weight:400}.mat-ripple{overflow:hidden;position:relative}.mat-ripple:not(:empty){transform:translateZ(0)}.mat-ripple.mat-ripple-unbounded{overflow:visible}.mat-ripple-element{border-radius:50%;pointer-events:none;position:absolute;transform:scale(0);transition:opacity,transform 0ms cubic-bezier(0,0,.2,1)}.cdk-high-contrast-active .mat-ripple-element{display:none}.cdk-visually-hidden{-moz-appearance:none;-webkit-appearance:none;border:0;clip:rect(0 0 0 0);height:1px;margin:-1px;outline:0;overflow:hidden;padding:0;position:absolute;width:1px}.cdk-global-overlay-wrapper,.cdk-overlay-container{height:100%;left:0;pointer-events:none;top:0;width:100%}.cdk-overlay-container{position:fixed;z-index:1000}.cdk-overlay-container:empty{display:none}.cdk-global-overlay-wrapper,.cdk-overlay-pane{display:flex;position:absolute;z-index:1000}.cdk-overlay-pane{box-sizing:border-box;max-height:100%;max-width:100%;pointer-events:auto}.cdk-overlay-backdrop{-webkit-tap-highlight-color:transparent;bottom:0;left:0;opacity:0;pointer-events:auto;position:absolute;right:0;top:0;transition:opacity .4s cubic-bezier(.25,.8,.25,1);z-index:1000}.cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:1}@media screen and (-ms-high-contrast:active){.cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:.6}}.cdk-overlay-dark-backdrop{background:rgba(0,0,0,.32)}.cdk-overlay-transparent-backdrop,.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing{opacity:0}.cdk-overlay-connected-position-bounding-box{display:flex;flex-direction:column;min-height:1px;min-width:1px;position:absolute;z-index:1000}.cdk-global-scrollblock{overflow-y:scroll;position:fixed;width:100%}@keyframes cdk-text-field-autofill-start{\n  /*!*/}@keyframes cdk-text-field-autofill-end{\n  /*!*/}.cdk-text-field-autofill-monitored:-webkit-autofill{animation:cdk-text-field-autofill-start 0s 1ms}.cdk-text-field-autofill-monitored:not(:-webkit-autofill){animation:cdk-text-field-autofill-end 0s 1ms}textarea.cdk-textarea-autosize{resize:none}textarea.cdk-textarea-autosize-measuring{box-sizing:initial!important;height:auto!important;overflow:hidden!important;padding:2px 0!important}textarea.cdk-textarea-autosize-measuring-firefox{box-sizing:initial!important;height:0!important;padding:2px 0!important}.mat-focus-indicator,.mat-mdc-focus-indicator{position:relative}:host.mate-timepicker-toggle .mat-icon-button{height:24px;width:24px}.mate-timepicker-toggle{color:rgba(0,0,0,.54)}.mate-timepicker-toggle-active{color:#3f51b5}.mate-timepicker-toggle-active.mat-accent{color:#ff4081}.mate-timepicker-toggle-active.mat-warn{color:#f44336}"], encapsulation: 2, changeDetection: 0 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(MateTimepickerToggleComponent, [{
                type: i0.Component,
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
                        encapsulation: i0.ViewEncapsulation.None,
                        changeDetection: i0.ChangeDetectionStrategy.OnPush
                    }]
            }], function () {
            return [{ type: MateTimepickerIntlService }, { type: i0.ChangeDetectorRef }, { type: undefined, decorators: [{
                            type: i0.Attribute,
                            args: ['tabindex']
                        }] }];
        }, { timepicker: [{
                    type: i0.Input,
                    args: ['for']
                }], tabIndex: [{
                    type: i0.Input
                }], disabled: [{
                    type: i0.Input
                }], disableRipple: [{
                    type: i0.Input
                }], _customIcon: [{
                    type: i0.ContentChild,
                    args: [MateTimepickerToggleIconDirective, { static: false }]
                }], _button: [{
                    type: i0.ViewChild,
                    args: ['button', { static: false }]
                }] });
    })();

    var timepickerUid = 0;
    var MATE_TIMEPICKER_SCROLL_STRATEGY = new i0.InjectionToken('mate-timepicker-scroll-strategy');
    function MAT_TIMEPICKER_SCROLL_STRATEGY_FACTORY(overlay) {
        return function () { return overlay.scrollStrategies.block(); };
    }
    var MATE_TIMEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER = {
        provide: MATE_TIMEPICKER_SCROLL_STRATEGY,
        deps: [i2$1.Overlay],
        useFactory: MAT_TIMEPICKER_SCROLL_STRATEGY_FACTORY
    };
    var MateTimepickerComponent = /** @class */ (function () {
        function MateTimepickerComponent(_dialog, _overlay, _ngZone, _viewContainerRef, scrollStrategy, _dir, _document) {
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
            this._inputSubscription = rxjs.Subscription.EMPTY;
            this.id = "mate-timepicker-" + timepickerUid++;
            this._disabledChange = new rxjs.Subject();
            this._selectedChanged = new rxjs.Subject();
            this.openedStream = new i0.EventEmitter();
            this.closedStream = new i0.EventEmitter();
            this._scrollStrategy = scrollStrategy;
        }
        Object.defineProperty(MateTimepickerComponent.prototype, "_selected", {
            get: function () {
                return this._validSelected;
            },
            set: function (value) {
                this._validSelected = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MateTimepickerComponent.prototype, "touchUi", {
            get: function () {
                return this._touchUi;
            },
            set: function (value) {
                this._touchUi = coercion.coerceBooleanProperty(value);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MateTimepickerComponent.prototype, "opened", {
            get: function () {
                return this._opened;
            },
            set: function (value) {
                value ? this.open() : this.close();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MateTimepickerComponent.prototype, "disabled", {
            get: function () {
                return this._disabled === undefined && this._timepickerInput ?
                    this._timepickerInput.disabled : !!this._disabled;
            },
            set: function (value) {
                var newValue = coercion.coerceBooleanProperty(value);
                if (newValue !== this._disabled) {
                    this._disabled = newValue;
                    this._disabledChange.next(newValue);
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MateTimepickerComponent.prototype, "color", {
            get: function () {
                return this._color || (this._timepickerInput ? this._timepickerInput._getThemePalette() : undefined);
            },
            set: function (value) {
                this._color = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(MateTimepickerComponent.prototype, "second", {
            get: function () {
                return this._second;
            },
            set: function (value) {
                var oldValue = this._second;
                this._second = value;
                if (oldValue !== value) {
                    this._timepickerInput.reformatValue();
                }
            },
            enumerable: false,
            configurable: true
        });
        MateTimepickerComponent.prototype.ngOnInit = function () {
        };
        MateTimepickerComponent.prototype.ngOnDestroy = function () {
        };
        MateTimepickerComponent.prototype.select = function (time) {
            // let oldValue = this._selected;
            this._selected = time;
            // if (!this._dateAdapter.sameDate(oldValue, this._selected)) {
            this._selectedChanged.next(time);
            // }
            this.close();
        };
        MateTimepickerComponent.prototype._registerInput = function (input) {
            var _this = this;
            if (this._timepickerInput) {
                throw Error('A MatDatepicker can only be associated with a single input.');
            }
            this._timepickerInput = input;
            this._inputSubscription = this._timepickerInput._valueChange
                .subscribe(function (value) { return _this._selected = value; });
        };
        MateTimepickerComponent.prototype.open = function () {
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
        };
        MateTimepickerComponent.prototype.close = function () {
            var _this = this;
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
            var completeClose = function () {
                if (_this._opened) {
                    _this._opened = false;
                    _this.closedStream.emit();
                    _this._focusedElementBeforeOpen = null;
                }
            };
            if (this._focusedElementBeforeOpen && typeof this._focusedElementBeforeOpen.focus === 'function') {
                this._focusedElementBeforeOpen.focus();
                setTimeout(completeClose);
            }
            else {
                completeClose();
            }
        };
        MateTimepickerComponent.prototype._openAsDialog = function () {
            var _this = this;
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
            this._dialogRef.afterClosed().subscribe(function () { return _this.close(); });
            this._dialogRef.componentInstance.timepicker = this;
            this._setColor();
        };
        MateTimepickerComponent.prototype._openAsPopup = function () {
            var _this = this;
            if (!this._timepickerPortal) {
                this._timepickerPortal = new portal.ComponentPortal(MateTimepickerContentComponent, this._viewContainerRef);
            }
            if (!this._popupRef) {
                this._createPopup();
            }
            if (!this._popupRef.hasAttached()) {
                this._popupComponentRef = this._popupRef.attach(this._timepickerPortal);
                this._popupComponentRef.instance.timepicker = this;
                this._setColor();
                this._ngZone.onStable.asObservable().pipe(operators.take(1)).subscribe(function () {
                    _this._popupRef.updatePosition();
                });
            }
        };
        MateTimepickerComponent.prototype._createPopup = function () {
            var _this = this;
            var overlayConfig = new i2$1.OverlayConfig({
                positionStrategy: this._createPopupPositionStrategy(),
                hasBackdrop: true,
                backdropClass: 'mate-overlay-transparent-backdrop',
                direction: this._dir,
                scrollStrategy: this._scrollStrategy(),
                panelClass: 'mate-timepicker-popup'
            });
            this._popupRef = this._overlay.create(overlayConfig);
            this._popupRef.overlayElement.setAttribute('role', 'dialog');
            rxjs.merge(this._popupRef.backdropClick(), this._popupRef.detachments(), this._popupRef.keydownEvents().pipe(operators.filter(function (event) {
                return event.code === 'Escape' || (_this._timepickerInput && event.altKey && event.code === 'ArrowUp');
            }))).subscribe(function (event) {
                if (event) {
                    event.preventDefault();
                }
                _this.close();
            });
        };
        MateTimepickerComponent.prototype._createPopupPositionStrategy = function () {
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
        };
        MateTimepickerComponent.prototype._setColor = function () {
            var color = this.color;
            if (this._popupComponentRef) {
                this._popupComponentRef.instance.color = color;
            }
            if (this._dialogRef) {
                this._dialogRef.componentInstance.color = color;
            }
        };
        return MateTimepickerComponent;
    }());
    MateTimepickerComponent.ɵfac = function MateTimepickerComponent_Factory(t) { return new (t || MateTimepickerComponent)(i0.ɵɵdirectiveInject(i1$2.MatDialog), i0.ɵɵdirectiveInject(i2$1.Overlay), i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(MATE_TIMEPICKER_SCROLL_STRATEGY), i0.ɵɵdirectiveInject(i3.Directionality, 8), i0.ɵɵdirectiveInject(i1.DOCUMENT, 8)); };
    MateTimepickerComponent.ɵcmp = i0.ɵɵdefineComponent({ type: MateTimepickerComponent, selectors: [["mate-timepicker"]], inputs: { touchUi: "touchUi", opened: "opened", disabled: "disabled", color: "color", second: "second" }, outputs: { openedStream: "opened", closedStream: "closed" }, exportAs: ["mateTimepicker"], decls: 0, vars: 0, template: function MateTimepickerComponent_Template(rf, ctx) { }, encapsulation: 2, changeDetection: 0 });
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(MateTimepickerComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'mate-timepicker',
                        template: '',
                        exportAs: 'mateTimepicker',
                        changeDetection: i0.ChangeDetectionStrategy.OnPush,
                        encapsulation: i0.ViewEncapsulation.None
                    }]
            }], function () {
            return [{ type: i1$2.MatDialog }, { type: i2$1.Overlay }, { type: i0.NgZone }, { type: i0.ViewContainerRef }, { type: undefined, decorators: [{
                            type: i0.Inject,
                            args: [MATE_TIMEPICKER_SCROLL_STRATEGY]
                        }] }, { type: i3.Directionality, decorators: [{
                            type: i0.Optional
                        }] }, { type: undefined, decorators: [{
                            type: i0.Optional
                        }, {
                            type: i0.Inject,
                            args: [i1.DOCUMENT]
                        }] }];
        }, { touchUi: [{
                    type: i0.Input
                }], opened: [{
                    type: i0.Input
                }], disabled: [{
                    type: i0.Input
                }], color: [{
                    type: i0.Input
                }], second: [{
                    type: i0.Input
                }], openedStream: [{
                    type: i0.Output,
                    args: ['opened']
                }], closedStream: [{
                    type: i0.Output,
                    args: ['closed']
                }] });
    })();

    var MateTimepickerModule = /** @class */ (function () {
        function MateTimepickerModule() {
        }
        return MateTimepickerModule;
    }());
    MateTimepickerModule.ɵmod = i0.ɵɵdefineNgModule({ type: MateTimepickerModule });
    MateTimepickerModule.ɵinj = i0.ɵɵdefineInjector({ factory: function MateTimepickerModule_Factory(t) { return new (t || MateTimepickerModule)(); }, providers: [
            MateTimepickerIntlService,
            MATE_TIMEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER
        ], imports: [[
                i1.CommonModule,
                i1$1.MatButtonModule,
                i1$2.MatDialogModule,
                i2$1.OverlayModule,
                a11y.A11yModule,
                portal.PortalModule
            ]] });
    (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(MateTimepickerModule, { declarations: [MateTimepickerFace,
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
                MateTimepickerDialogMinuteComponent], imports: [i1.CommonModule,
                i1$1.MatButtonModule,
                i1$2.MatDialogModule,
                i2$1.OverlayModule,
                a11y.A11yModule,
                portal.PortalModule], exports: [MateTimepickerComponent,
                MateTimepickerContentComponent,
                MateTimepickerToggleComponent,
                MateTimepickerToggleIconDirective,
                MateTimepickerInputDirective,
                MateTimepickerDialogComponent,
                MateTimepickerDialogBodyComponent,
                MateTimepickerDialogHeaderComponent,
                MateTimepickerDialogFooterComponent] });
    })();
    /*@__PURE__*/ (function () {
        i0.ɵsetClassMetadata(MateTimepickerModule, [{
                type: i0.NgModule,
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
                            i1.CommonModule,
                            i1$1.MatButtonModule,
                            i1$2.MatDialogModule,
                            i2$1.OverlayModule,
                            a11y.A11yModule,
                            portal.PortalModule
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
            }], null, null);
    })();

    /*
     * Public API Surface of timepicker
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.MATE_TIMEPICKER_SCROLL_STRATEGY = MATE_TIMEPICKER_SCROLL_STRATEGY;
    exports.MATE_TIMEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER = MATE_TIMEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER;
    exports.MAT_TIMEPICKER_SCROLL_STRATEGY_FACTORY = MAT_TIMEPICKER_SCROLL_STRATEGY_FACTORY;
    exports.MateTimepickerComponent = MateTimepickerComponent;
    exports.MateTimepickerContentComponent = MateTimepickerContentComponent;
    exports.MateTimepickerDialogBodyComponent = MateTimepickerDialogBodyComponent;
    exports.MateTimepickerDialogComponent = MateTimepickerDialogComponent;
    exports.MateTimepickerDialogFooterComponent = MateTimepickerDialogFooterComponent;
    exports.MateTimepickerDialogHeaderComponent = MateTimepickerDialogHeaderComponent;
    exports.MateTimepickerDialogHourComponent = MateTimepickerDialogHourComponent;
    exports.MateTimepickerDialogMinuteComponent = MateTimepickerDialogMinuteComponent;
    exports.MateTimepickerFace = MateTimepickerFace;
    exports.MateTimepickerInputDirective = MateTimepickerInputDirective;
    exports.MateTimepickerInputEvent = MateTimepickerInputEvent;
    exports.MateTimepickerModule = MateTimepickerModule;
    exports.MateTimepickerToggleComponent = MateTimepickerToggleComponent;
    exports.MateTimepickerToggleIconDirective = MateTimepickerToggleIconDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=material-extra-timepicker.umd.js.map
