import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MateTimepickerComponent} from './timepicker.component';

describe('MateTimepickerComponent', () => {
    let component: MateTimepickerComponent;
    let fixture: ComponentFixture<MateTimepickerComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [MateTimepickerComponent]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MateTimepickerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
