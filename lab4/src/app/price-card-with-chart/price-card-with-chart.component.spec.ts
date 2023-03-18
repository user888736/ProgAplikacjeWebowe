import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceCardWithChartComponent } from './price-card-with-chart.component';

describe('PriceCardWithChartComponent', () => {
  let component: PriceCardWithChartComponent;
  let fixture: ComponentFixture<PriceCardWithChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriceCardWithChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PriceCardWithChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
