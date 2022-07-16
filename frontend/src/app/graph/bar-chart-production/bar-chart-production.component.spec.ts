import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarChartProductionComponent } from './bar-chart-production.component';

describe('BarChartProductionComponent', () => {
  let component: BarChartProductionComponent;
  let fixture: ComponentFixture<BarChartProductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarChartProductionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarChartProductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
