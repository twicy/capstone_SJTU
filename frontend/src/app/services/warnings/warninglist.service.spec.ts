import { TestBed } from '@angular/core/testing';

import { WarninglistService } from './warninglist.service';



describe('WarninglistService', () => {
  let service: WarninglistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WarninglistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
