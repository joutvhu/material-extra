import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MateSpinnerComponent} from './spinner.component';

@NgModule({
    declarations: [MateSpinnerComponent],
    imports: [CommonModule],
    exports: [MateSpinnerComponent]
})
export class MateSpinnerModule {
}
