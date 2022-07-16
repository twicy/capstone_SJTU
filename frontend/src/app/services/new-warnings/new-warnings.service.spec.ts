import { TestBed } from '@angular/core/testing';

import { NewWarningsService } from './new-warnings.service';

describe('NewWarningsService', () => {
  let service: NewWarningsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewWarningsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
