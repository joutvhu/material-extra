import { TestBed } from '@angular/core/testing';

import { TimepickerService } from './timepicker.service';

describe('TimepickerService', () => {
  let service: TimepickerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimepickerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
