import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarChartWarningsComponent } from './bar-chart-warnings.component';

describe('BarChartWarningsComponent', () => {
  let component: BarChartWarningsComponent;
  let fixture: ComponentFixture<BarChartWarningsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarChartWarningsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarChartWarningsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
