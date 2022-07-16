import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineChartProductionComponent } from './line-chart-production.component';

describe('LineChartProductionComponent', () => {
  let component: LineChartProductionComponent;
  let fixture: ComponentFixture<LineChartProductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineChartProductionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LineChartProductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
