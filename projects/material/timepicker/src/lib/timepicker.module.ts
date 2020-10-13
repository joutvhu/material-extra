import {A11yModule} from '@angular/cdk/a11y';
import {OverlayModule} from '@angular/cdk/overlay';
import {PortalModule} from '@angular/cdk/portal';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';

import {MateTimepickerContentComponent} from './timepicker-content/timepicker-content.component';
import {MateTimepickerDialogBodyComponent} from './timepicker-dialog-body/timepicker-dialog-body.component';
import {MateTimepickerDialogFooterComponent} from './timepicker-dialog-footer/timepicker-dialog-footer.component';
import {MateTimepickerDialogHeaderComponent} from './timepicker-dialog-header/timepicker-dialog-header.component';
import {MateTimepickerDialogHourComponent} from './timepicker-dialog-hour/timepicker-dialog-hour.component';
import {MateTimepickerDialogMinuteComponent} from './timepicker-dialog-minute/timepicker-dialog-minute.component';
import {MateTimepickerDialogComponent} from './timepicker-dialog/timepicker-dialog.component';
import {MateTimepickerFace} from './timepicker-face/timepicker-face.directive';
import {MateTimepickerInputDirective} from './timepicker-input.directive';
import {MateTimepickerIntlService} from './timepicker-intl.service';
import {MateTimepickerToggleComponent, MateTimepickerToggleIconDirective} from './timepicker-toggle/timepicker-toggle.component';
import {MATE_TIMEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER, MateTimepickerComponent} from './timepicker/timepicker.component';

@NgModule({
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
})
export class MateTimepickerModule {
}
