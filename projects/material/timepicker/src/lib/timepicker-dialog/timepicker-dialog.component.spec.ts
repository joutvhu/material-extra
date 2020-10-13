import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MateTimepickerDialogComponent} from './timepicker-dialog.component';

describe('MateTimepickerDialogComponent', () => {
    let component: MateTimepickerDialogComponent;
    let fixture: ComponentFixture<MateTimepickerDialogComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [MateTimepickerDialogComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MateTimepickerDialogComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
