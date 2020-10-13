import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MateTimepickerDialogFooterComponent} from './timepicker-dialog-footer.component';

describe('MateTimepickerDialogFooterComponent', () => {
    let component: MateTimepickerDialogFooterComponent;
    let fixture: ComponentFixture<MateTimepickerDialogFooterComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [MateTimepickerDialogFooterComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MateTimepickerDialogFooterComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
