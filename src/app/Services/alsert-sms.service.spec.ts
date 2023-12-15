import { TestBed } from '@angular/core/testing';

import { AlsertSmsService } from './alsert-sms.service';

describe('AlsertSmsService', () => {
  let service: AlsertSmsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlsertSmsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
