import { TestBed } from '@angular/core/testing';

import { ProductionConsumptionService } from './production-consumption.service';

describe('ProductionConsumptionService', () => {
  let service: ProductionConsumptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductionConsumptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
