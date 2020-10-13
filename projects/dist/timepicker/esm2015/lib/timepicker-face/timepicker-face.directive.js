import { Directive, EventEmitter, HostListener, Output } from '@angular/core';
import * as i0 from "@angular/core";
export class MateTimepickerFace {
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
MateTimepickerFace.ɵdir = i0.ɵɵdefineDirective({ type: MateTimepickerFace, selectors: [["mate-timepicker-face"]], hostBindings: function MateTimepickerFace_HostBindings(rf, ctx) { if (rf & 1) {
        i0.ɵɵlistener("mousedown", function MateTimepickerFace_mousedown_HostBindingHandler($event) { return ctx.onMousedown($event); })("click", function MateTimepickerFace_click_HostBindingHandler($event) { return ctx.onClick($event); })("touchend", function MateTimepickerFace_touchend_HostBindingHandler($event) { return ctx.onTouchend($event.changedTouches[0]); })("mousemove", function MateTimepickerFace_mousemove_HostBindingHandler($event) { return ctx.onMove($event); })("touchmove", function MateTimepickerFace_touchmove_HostBindingHandler($event) { return ctx.onMove($event.changedTouches[0]); })("mouseup", function MateTimepickerFace_mouseup_HostBindingHandler($event) { return ctx.onMouseup($event); })("mouseup", function MateTimepickerFace_mouseup_HostBindingHandler($event) { return ctx.onMouseup($event); }, false, i0.ɵɵresolveDocument)("keydown", function MateTimepickerFace_keydown_HostBindingHandler($event) { return ctx.onKeydown($event); }, false, i0.ɵɵresolveDocument);
    } }, outputs: { switchClock: "switchClock", enterPress: "enterPress" } });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(MateTimepickerFace, [{
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXBpY2tlci1mYWNlLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJEOi9Eb2N1bWVudC9MaWJyYXJ5L0FuZ3VsYXIvbWF0ZXJpYWwtZXh0cmEvcHJvamVjdHMvbWF0ZXJpYWwvdGltZXBpY2tlci9zcmMvIiwic291cmNlcyI6WyJsaWIvdGltZXBpY2tlci1mYWNlL3RpbWVwaWNrZXItZmFjZS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFNBQVMsRUFBYyxZQUFZLEVBQUUsWUFBWSxFQUFFLE1BQU0sRUFBQyxNQUFNLGVBQWUsQ0FBQzs7QUFHeEYsTUFBTSxPQUFPLGtCQUFrQjtJQUQvQjtRQVVXLHVCQUFrQixHQUFHLEVBQUUsQ0FBQztRQUd4QixnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFHekMsZUFBVSxHQUFHLElBQUksWUFBWSxFQUFRLENBQUM7S0FpSWhEO0lBL0hHLFFBQVEsQ0FBQyxLQUFhO0lBQ3RCLENBQUM7SUFFRCxRQUFRO0lBQ1IsQ0FBQztJQUdELFdBQVcsQ0FBQyxDQUEwQjtRQUNsQyxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7SUFDMUIsQ0FBQztJQUdELE9BQU8sQ0FBQyxDQUFhO1FBQ2pCLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNwQixDQUFDO0lBR0QsVUFBVSxDQUFDLENBQVE7UUFDZixJQUFJLENBQUMs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QUUsQ0FBQywwQkFBMEIsQ0FBQztZQWF0RCxNQUFNO2tCQUZMLFlBQVk7bUJBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDOztrQkFDcEMsWUFBWTttQkFBQyxXQUFXLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztZQTZCdkQsU0FBUztrQkFGUixZQUFZO21CQUFDLFNBQVMsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7a0JBQ2xDLFlBQVk7bUJBQUMsa0JBQWtCLEVBQUUsQ0FBQyxRQUFRLENBQUM7WUFrQzVDLFNBQVM7a0JBRFIsWUFBWTttQkFBQyxrQkFBa0IsRUFBRSxDQUFDLFFBQVEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RGlyZWN0aXZlLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciwgT3V0cHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBEaXJlY3RpdmUoe3NlbGVjdG9yOiAnbWF0ZS10aW1lcGlja2VyLWZhY2UnfSlcclxuZXhwb3J0IGNsYXNzIE1hdGVUaW1lcGlja2VyRmFjZSB7XHJcbiAgICBwcml2YXRlIG1vdmVkOiBib29sZWFuO1xyXG4gICAgcHJpdmF0ZSBzZWxlY3RlZDogYm9vbGVhbjtcclxuICAgIHByaXZhdGUgaXNTdGFydGVkOiBib29sZWFuO1xyXG5cclxuICAgIHB1YmxpYyBzdGVwOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgb3V0ZXJWYWx1ZXM6IG51bWJlcltdO1xyXG4gICAgcHVibGljIGlubmVyVmFsdWVzPzogbnVtYmVyW107XHJcbiAgICBwdWJsaWMgY2xvY2tGYWNlOiBFbGVtZW50UmVmO1xyXG4gICAgcHVibGljIGlubmVyQ2xvY2tGYWNlU2l6ZSA9IDQwO1xyXG5cclxuICAgIEBPdXRwdXQoKVxyXG4gICAgcHVibGljIHN3aXRjaENsb2NrID0gbmV3IEV2ZW50RW1pdHRlcjxzdHJpbmc+KCk7XHJcblxyXG4gICAgQE91dHB1dCgpXHJcbiAgICBwdWJsaWMgZW50ZXJQcmVzcyA9IG5ldyBFdmVudEVtaXR0ZXI8dm9pZD4oKTtcclxuXHJcbiAgICBvbkNoYW5nZSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICB9XHJcblxyXG4gICAgb25GaW5pc2goKSB7XHJcbiAgICB9XHJcblxyXG4gICAgQEhvc3RMaXN0ZW5lcignbW91c2Vkb3duJywgWyckZXZlbnQnXSlcclxuICAgIG9uTW91c2Vkb3duKGU6IE1vdXNlRXZlbnQgfCBUb3VjaEV2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHRoaXMubW92ZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pc1N0YXJ0ZWQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIEBIb3N0TGlzdGVuZXIoJ2NsaWNrJywgWyckZXZlbnQnXSlcclxuICAgIG9uQ2xpY2soZTogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB0aGlzLnNlbGVjdFRpbWUoZSk7XHJcbiAgICAgICAgdGhpcy5pc1N0YXJ0ZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5vbkZpbmlzaCgpO1xyXG4gICAgfVxyXG5cclxuICAgIEBIb3N0TGlzdGVuZXIoJ3RvdWNoZW5kJywgWyckZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0nXSlcclxuICAgIG9uVG91Y2hlbmQoZTogVG91Y2gpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNlbGVjdFRpbWUoZSk7XHJcbiAgICAgICAgaWYgKHRoaXMubW92ZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5pc1N0YXJ0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5tb3ZlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMub25GaW5pc2goKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgQEhvc3RMaXN0ZW5lcignbW91c2Vtb3ZlJywgWyckZXZlbnQnXSlcclxuICAgIEBIb3N0TGlzdGVuZXIoJ3RvdWNobW92ZScsIFsnJGV2ZW50LmNoYW5nZWRUb3VjaGVzWzBdJ10pXHJcbiAgICBvbk1vdmUoZTogTW91c2VFdmVudCB8IFRvdWNoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5tb3ZlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RUaW1lKGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHNlbGVjdFRpbWUoZTogTW91c2VFdmVudCB8IFRvdWNoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzU3RhcnRlZCAmJiAoZSBpbnN0YW5jZW9mIE1vdXNlRXZlbnQgJiYgZS50eXBlICE9PSAnY2xpY2snKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGNsb2NrRmFjZUNvcmRzID0gdGhpcy5jbG9ja0ZhY2UubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuXHJcbiAgICAgICAgY29uc3QgY2VudGVyWCA9IGNsb2NrRmFjZUNvcmRzLmxlZnQgKyBjbG9ja0ZhY2VDb3Jkcy53aWR0aCAvIDI7XHJcbiAgICAgICAgY29uc3QgY2VudGVyWSA9IGNsb2NrRmFjZUNvcmRzLnRvcCArIGNsb2NrRmFjZUNvcmRzLmhlaWdodCAvIDI7XHJcbiAgICAgICAgY29uc3QgYXJjID0gTWF0aC5hdGFuKE1hdGguYWJzKGUuY2xpZW50WCAtIGNlbnRlclgpIC8gTWF0aC5hYnMoZS5jbGllbnRZIC0gY2VudGVyWSkpICogMTgwIC8gTWF0aC5QSTtcclxuICAgICAgICBjb25zdCBjaXJjbGVBbmdsZSA9IHRoaXMuY291bnRBbmdsZUJ5Q29yZHMoY2VudGVyWCwgY2VudGVyWSwgZS5jbGllbnRYLCBlLmNsaWVudFksIGFyYyk7XHJcbiAgICAgICAgY29uc3QgaXNJbm5lckNsb2NrQ2hvc2VuID0gISF0aGlzLmlubmVyVmFsdWVzICYmIHRoaXMuaXNJbm5lckNsb2NrRmFjZShjZW50ZXJYLCBjZW50ZXJZLCBlLmNsaWVudFgsIGUuY2xpZW50WSxcclxuICAgICAgICAgICAgKChjbG9ja0ZhY2VDb3Jkcy5oZWlnaHQgKyBjbG9ja0ZhY2VDb3Jkcy53aWR0aCkgLyA0KSAtIHRoaXMuaW5uZXJDbG9ja0ZhY2VTaXplKTtcclxuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLnJvdW5kQW5nbGUoY2lyY2xlQW5nbGUpO1xyXG4gICAgICAgIGluZGV4ID0gaW5kZXggPCAwID8gMCA6IGluZGV4O1xyXG5cclxuICAgICAgICBjb25zdCB2YWx1ZSA9IGlzSW5uZXJDbG9ja0Nob3NlbiA/IHRoaXMuaW5uZXJWYWx1ZXNbaW5kZXggJSB0aGlzLmlubmVyVmFsdWVzLmxlbmd0aF0gOlxyXG4gICAgICAgICAgICB0aGlzLm91dGVyVmFsdWVzW2luZGV4ICUgdGhpcy5vdXRlclZhbHVlcy5sZW5ndGhdO1xyXG4gICAgICAgIHRoaXMub25DaGFuZ2UodmFsdWUpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIEBIb3N0TGlzdGVuZXIoJ21vdXNldXAnLCBbJyRldmVudCddKVxyXG4gICAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6bW91c2V1cCcsIFsnJGV2ZW50J10pXHJcbiAgICBvbk1vdXNldXAoZTogTW91c2VFdmVudCB8IFRvdWNoRXZlbnQpOiB2b2lkIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdGhpcy5pc1N0YXJ0ZWQgPSBmYWxzZTtcclxuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMub25GaW5pc2goKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByb3VuZEFuZ2xlKGFuZ2xlOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKGFuZ2xlIC8gdGhpcy5zdGVwKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGlzSW5uZXJDbG9ja0ZhY2UoeDA6IG51bWJlciwgeTA6IG51bWJlciwgeDogbnVtYmVyLCB5OiBudW1iZXIsIGJvcmRlcjogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyh4IC0geDAsIDIpICsgTWF0aC5wb3coeSAtIHkwLCAyKSkgPCBib3JkZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjb3VudEFuZ2xlQnlDb3Jkcyh4MDogbnVtYmVyLCB5MDogbnVtYmVyLCB4OiBudW1iZXIsIHk6IG51bWJlciwgY3VycmVudEFuZ2xlOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgICAgIGlmICh5ID4geTAgJiYgeCA+PSB4MCkge1xyXG4gICAgICAgICAgICByZXR1cm4gMTgwIC0gY3VycmVudEFuZ2xlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoeSA+IHkwICYmIHggPCB4MCkge1xyXG4gICAgICAgICAgICByZXR1cm4gMTgwICsgY3VycmVudEFuZ2xlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoeSA8IHkwICYmIHggPCB4MCkge1xyXG4gICAgICAgICAgICByZXR1cm4gMzYwIC0gY3VycmVudEFuZ2xlO1xyXG4gICAgICAgIH0gZWxzZSB7Ly8gSSBxdWFydGVyXHJcbiAgICAgICAgICAgIHJldHVybiBjdXJyZW50QW5nbGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHZhbHVlQ2hhbmdlKGFkZDogbnVtYmVyKSB7XHJcbiAgICB9XHJcblxyXG4gICAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6a2V5ZG93bicsIFsnJGV2ZW50J10pXHJcbiAgICBvbktleWRvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcclxuICAgICAgICBzd2l0Y2ggKGV2ZW50LmNvZGUpIHtcclxuICAgICAgICAgICAgY2FzZSAnQXJyb3dMZWZ0JzpcclxuICAgICAgICAgICAgICAgIHRoaXMuc3dpdGNoQ2xvY2suZW1pdCgnbGVmdCcpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICBjYXNlICdBcnJvd1JpZ2h0JzpcclxuICAgICAgICAgICAgICAgIHRoaXMuc3dpdGNoQ2xvY2suZW1pdCgncmlnaHQnKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgY2FzZSAnUGFnZVVwJzpcclxuICAgICAgICAgICAgY2FzZSAnQXJyb3dVcCc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlQ2hhbmdlKDEpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICBjYXNlICdQYWdlRG93bic6XHJcbiAgICAgICAgICAgIGNhc2UgJ0Fycm93RG93bic6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZhbHVlQ2hhbmdlKC0xKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgY2FzZSAnSG9tZSc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN3aXRjaENsb2NrLmVtaXQoJ3N0YXJ0Jyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIGNhc2UgJ0VuZCc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN3aXRjaENsb2NrLmVtaXQoJ2VuZCcpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICBjYXNlICdFbnRlcic6XHJcbiAgICAgICAgICAgIGNhc2UgJ1NwYWNlJzpcclxuICAgICAgICAgICAgICAgIHRoaXMuZW50ZXJQcmVzcy5lbWl0KCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==