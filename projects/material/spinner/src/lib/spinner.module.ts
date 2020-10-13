import {NgModule} from '@angular/core';
import {MateSpinnerComponent} from './spinner.component';
import {CommonModule} from '@angular/common';

@NgModule({
    declarations: [MateSpinnerComponent],
    imports: [CommonModule],
    exports: [MateSpinnerComponent]
})
export class MateSpinnerModule {
}
