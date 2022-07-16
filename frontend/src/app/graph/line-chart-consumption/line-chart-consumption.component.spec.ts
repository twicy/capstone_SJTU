import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineChartConsumptionComponent } from './line-chart-consumption.component';

describe('LineChartConsumptionComponent', () => {
  let component: LineChartConsumptionComponent;
  let fixture: ComponentFixture<LineChartConsumptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineChartConsumptionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LineChartConsumptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
