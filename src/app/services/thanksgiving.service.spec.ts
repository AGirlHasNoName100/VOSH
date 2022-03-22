import { TestBed } from '@angular/core/testing';

import { ThanksgivingService } from './thanksgiving.service';

describe('ThanksgivingService', () => {
  let service: ThanksgivingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThanksgivingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
