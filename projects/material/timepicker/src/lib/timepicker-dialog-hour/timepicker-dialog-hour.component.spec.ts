import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MateTimepickerDialogHourComponent} from './timepicker-dialog-hour.component';

describe('MateTimepickerDialogHourComponent', () => {
    let component: MateTimepickerDialogHourComponent;
    let fixture: ComponentFixture<MateTimepickerDialogHourComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [MateTimepickerDialogHourComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MateTimepickerDialogHourComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
