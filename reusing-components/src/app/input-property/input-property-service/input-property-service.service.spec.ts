import { TestBed } from '@angular/core/testing';

import { InputPropertyService } from './input-property-service.service';

describe('InputPropertyServiceService', () => {
  let service: InputPropertyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InputPropertyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
