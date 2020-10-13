import {animate, state, style, transition, trigger} from '@angular/animations';
import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {DEFAULTS, LOADERS, Size} from './spinner.enum';

@Component({
    selector: 'mate-spinner',
    template: `
        <div [@fadeIn]="'in'" class="mate-spinner">
            <div *ngIf="!template" [class]="spinnerClass" [style.color]="color">
                <div *ngFor="let index of divArray"></div>
            </div>
            <div *ngIf="template" [innerHTML]="template"></div>
        </div>
    `,
    styleUrls: ['./spinner.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
        trigger('fadeIn', [
            state('in', style({opacity: 1})),
            transition(':enter', [
                style({opacity: 0}),
                animate(300)
            ]),
            transition(':leave',
                animate(200, style({opacity: 0})))
        ])
    ]
})
export class MateSpinnerComponent {
    private _type: string;
    private _color: ThemePalette | string;
    public divCount: number;
    public divArray: number[];

    @Input() size: Size;
    @Input() template: string;

    @Input()
    public set type(value: string) {
        if (value == null || typeof LOADERS[value] !== 'number')
            value = DEFAULTS.SPINNER_TYPE;
        this._type = value;
        this.divCount = typeof LOADERS[this._type] === 'number' ? LOADERS[this._type] : 0;
        this.divArray = Array(this.divCount).fill(0).map((x, i) => i);
    }

    public get type(): string {
        return this._type;
    }

    @Input()
    public set color(value: ThemePalette | string) {
        this._color = value;
    }

    public get color(): ThemePalette | string {
        if (typeof this._color === 'string' && !['primary', 'accent', 'warn'].includes(this._color))
            return this._color;
        return null;
    }

    public get spinnerClass(): string {
        const sizeClass = ['mate-progress-spinner'];
        if (['primary', 'accent', 'warn'].includes(this._color))
            sizeClass.push(`mat-${this._color}`);
        sizeClass.push('spinner-' + this.type);
        switch (this.size.toLowerCase()) {
            case 'small':
                sizeClass.push('spinner-sm');
                break;
            case 'medium':
                sizeClass.push('spinner-2x');
                break;
            case 'large':
                sizeClass.push('spinner-3x');
                break;
            default:
                break;
        }
        return sizeClass.join(' ');
    }

    constructor() {
        this._type = DEFAULTS.SPINNER_TYPE;
        this.size = 'large';
        this.template = null;
    }
}
