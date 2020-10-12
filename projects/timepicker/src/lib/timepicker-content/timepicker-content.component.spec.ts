import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimepickerContentComponent } from './timepicker-content.component';

describe('TimepickerContentComponent', () => {
  let component: TimepickerContentComponent;
  let fixture: ComponentFixture<TimepickerContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimepickerContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimepickerContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
