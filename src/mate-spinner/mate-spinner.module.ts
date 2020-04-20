import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MateSpinnerComponent} from './mate-spinner/mate-spinner.component';

@NgModule({
    declarations: [MateSpinnerComponent],
    imports: [CommonModule],
    exports: [MateSpinnerComponent]
})
export class MateSpinnerModule {
}
