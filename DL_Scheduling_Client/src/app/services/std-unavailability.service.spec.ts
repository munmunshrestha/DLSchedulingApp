import { TestBed } from '@angular/core/testing';

import { StdUnavailabilityService } from './std-unavailability.service';

describe('StdUnavailabilityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StdUnavailabilityService = TestBed.get(StdUnavailabilityService);
    expect(service).toBeTruthy();
  });
});
