import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MateTimepickerIntlService {
    readonly changes: Subject<void> = new Subject<void>();

    openTimepickerLabel = 'Open timepicker';

    constructor() {
    }
}
