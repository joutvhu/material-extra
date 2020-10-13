import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MateTimepickerDialogBodyComponent} from './timepicker-dialog-body.component';

describe('MateTimepickerDialogBodyComponent', () => {
    let component: MateTimepickerDialogBodyComponent;
    let fixture: ComponentFixture<MateTimepickerDialogBodyComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [MateTimepickerDialogBodyComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MateTimepickerDialogBodyComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
