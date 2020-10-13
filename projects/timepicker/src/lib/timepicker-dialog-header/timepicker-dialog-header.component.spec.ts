import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MateTimepickerDialogHeaderComponent} from './timepicker-dialog-header.component';

describe('MateTimepickerDialogHeaderComponent', () => {
    let component: MateTimepickerDialogHeaderComponent;
    let fixture: ComponentFixture<MateTimepickerDialogHeaderComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [MateTimepickerDialogHeaderComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MateTimepickerDialogHeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
