import { TestBed } from '@angular/core/testing';

import { DlScheduleService } from './dl-schedule.service';

describe('DlScheduleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DlScheduleService = TestBed.get(DlScheduleService);
    expect(service).toBeTruthy();
  });
});
