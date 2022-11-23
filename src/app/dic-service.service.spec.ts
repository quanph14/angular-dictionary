import { TestBed } from '@angular/core/testing';

import { DicServiceService } from './dic-service.service';

describe('DicServiceService', () => {
  let service: DicServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DicServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
