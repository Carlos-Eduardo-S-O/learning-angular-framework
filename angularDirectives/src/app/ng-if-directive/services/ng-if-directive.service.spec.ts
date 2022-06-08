import { TestBed } from '@angular/core/testing';

import { NgIfDirectiveService } from './ng-if-directive.service';

describe('NgIfDirectiveService', () => {
  let service: NgIfDirectiveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgIfDirectiveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
