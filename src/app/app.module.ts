import {NgModule} from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MateSpinnerModule} from '@material-extra/spinner';
import {MateTimepickerModule} from '@material-extra/timepicker';
import {AppComponent} from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        MatInputModule,
        MatFormFieldModule,
        MateSpinnerModule,
        MateTimepickerModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
