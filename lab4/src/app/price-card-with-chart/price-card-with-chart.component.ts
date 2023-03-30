import { Component, Input } from '@angular/core';

@Component({
  selector: 'lab4-price-card-with-chart',
  templateUrl: './price-card-with-chart.component.html',
  styleUrls: ['./price-card-with-chart.component.scss']
})
export class PriceCardWithChartComponent {
    @Input() title!: string;
    @Input() amount!: string;
    @Input() color!: string;
    @Input() chart!: string;
    
}
