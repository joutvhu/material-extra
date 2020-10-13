import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MateTimepickerToggleComponent} from './timepicker-toggle.component';

describe('MateTimepickerToggleComponent', () => {
    let component: MateTimepickerToggleComponent;
    let fixture: ComponentFixture<MateTimepickerToggleComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [MateTimepickerToggleComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MateTimepickerToggleComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
