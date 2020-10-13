import {NgModule} from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MateTimepickerModule} from 'timepicker';
import {AppComponent} from './app.component';
import {MateSpinnerModule} from 'spinner';

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
