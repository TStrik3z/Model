import { TestBed } from '@angular/core/testing';

import { ArraylistserviceService } from './arraylistservice.service';

describe('ArraylistserviceService', () => {
  let service: ArraylistserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArraylistserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
