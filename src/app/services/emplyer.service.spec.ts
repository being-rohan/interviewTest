import { TestBed } from '@angular/core/testing';

import { EmplyerService } from './emplyer.service';

describe('EmplyerService', () => {
  let service: EmplyerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmplyerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
