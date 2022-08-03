import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiLineChartWarningComponent } from './multi-line-chart-warning.component';

describe('MultiLineChartWarningComponent', () => {
  let component: MultiLineChartWarningComponent;
  let fixture: ComponentFixture<MultiLineChartWarningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiLineChartWarningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MultiLineChartWarningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
