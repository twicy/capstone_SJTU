import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarChartConsumptionComponent } from './bar-chart-consumption.component';

describe('BarChartConsumptionComponent', () => {
  let component: BarChartConsumptionComponent;
  let fixture: ComponentFixture<BarChartConsumptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarChartConsumptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarChartConsumptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
