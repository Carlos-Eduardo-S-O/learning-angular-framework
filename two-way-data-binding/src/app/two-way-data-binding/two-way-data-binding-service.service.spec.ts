import { TestBed } from '@angular/core/testing';

import { TwoWayDataBindingServiceService } from './two-way-data-binding-service.service';

describe('TwoWayDataBindingServiceService', () => {
  let service: TwoWayDataBindingServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TwoWayDataBindingServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
