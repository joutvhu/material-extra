import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MateTimepickerDialogMinuteComponent} from './timepicker-dialog-minute.component';

describe('MateTimepickerDialogMinuteComponent', () => {
    let component: MateTimepickerDialogMinuteComponent;
    let fixture: ComponentFixture<MateTimepickerDialogMinuteComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [MateTimepickerDialogMinuteComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MateTimepickerDialogMinuteComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
