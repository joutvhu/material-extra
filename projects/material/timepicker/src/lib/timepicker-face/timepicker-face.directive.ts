import {Directive, ElementRef, EventEmitter, HostListener, Output} from '@angular/core';

@Directive({selector: 'mate-timepicker-face'})
export class MateTimepickerFace {
    private moved: boolean;
    private selected: boolean;
    private isStarted: boolean;

    public step: number;
    public outerValues: number[];
    public innerValues?: number[];
    public clockFace: ElementRef;
    public innerClockFaceSize = 40;

    @Output()
    public switchClock = new EventEmitter<string>();

    @Output()
    public enterPress = new EventEmitter<void>();

    onChange(value: number) {
    }

    onFinish() {
    }

    @HostListener('mousedown', ['$event'])
    onMousedown(e: MouseEvent | TouchEvent): void {
        e.preventDefault();
        this.moved = false;
        this.selected = false;
        this.isStarted = true;
    }

    @HostListener('click', ['$event'])
    onClick(e: MouseEvent): void {
        e.preventDefault();
        this.selectTime(e);
        this.isStarted = false;
        this.selected = false;
        this.onFinish();
    }

    @HostListener('touchend', ['$event.changedTouches[0]'])
    onTouchend(e: Touch): void {
        this.selectTime(e);
        if (this.moved) {
            this.isStarted = false;
            this.moved = false;
            this.selected = false;
            this.onFinish();
        }
    }

    @HostListener('mousemove', ['$event'])
    @HostListener('touchmove', ['$event.changedTouches[0]'])
    onMove(e: MouseEvent | Touch): void {
        this.moved = true;
        this.selectTime(e);
    }

    selectTime(e: MouseEvent | Touch): void {
        if (!this.isStarted && (e instanceof MouseEvent && e.type !== 'click')) {
            return;
        }
        const clockFaceCords = this.clockFace.nativeElement.getBoundingClientRect();

        const centerX = clockFaceCords.left + clockFaceCords.width / 2;
        const centerY = clockFaceCords.top + clockFaceCords.height / 2;
        const arc = Math.atan(Math.abs(e.clientX - centerX) / Math.abs(e.clientY - centerY)) * 180 / Math.PI;
        const circleAngle = this.countAngleByCords(centerX, centerY, e.clientX, e.clientY, arc);
        const isInnerClockChosen = !!this.innerValues && this.isInnerClockFace(centerX, centerY, e.clientX, e.clientY,
            ((clockFaceCords.height + clockFaceCords.width) / 4) - this.innerClockFaceSize);
        let index = this.roundAngle(circleAngle);
        index = index < 0 ? 0 : index;

        const value = isInnerClockChosen ? this.innerValues[index % this.innerValues.length] :
            this.outerValues[index % this.outerValues.length];
        this.onChange(value);
        this.selected = true;
    }

    @HostListener('mouseup', ['$event'])
    @HostListener('document:mouseup', ['$event'])
    onMouseup(e: MouseEvent | TouchEvent): void {
        e.preventDefault();
        this.isStarted = false;
        if (this.selected) {
            this.selected = false;
            this.onFinish();
        }
    }

    private roundAngle(angle: number): number {
        return Math.round(angle / this.step);
    }

    private isInnerClockFace(x0: number, y0: number, x: number, y: number, border: number): boolean {
        return Math.sqrt(Math.pow(x - x0, 2) + Math.pow(y - y0, 2)) < border;
    }

    private countAngleByCords(x0: number, y0: number, x: number, y: number, currentAngle: number): number {
        if (y > y0 && x >= x0) {
            return 180 - currentAngle;
        } else if (y > y0 && x < x0) {
            return 180 + currentAngle;
        } else if (y < y0 && x < x0) {
            return 360 - currentAngle;
        } else {// I quarter
            return currentAngle;
        }
    }

    valueChange(add: number) {
    }

    @HostListener('document:keydown', ['$event'])
    onKeydown(event: KeyboardEvent) {
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
