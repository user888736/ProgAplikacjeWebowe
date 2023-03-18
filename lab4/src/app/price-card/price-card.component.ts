import { Component, Input } from '@angular/core';

@Component({
  selector: 'lab4-price-card',
  templateUrl: './price-card.component.html',
  styleUrls: ['./price-card.component.scss']
})
export class PriceCardComponent {
  @Input() amount!: string;
  @Input() title!: string;
  @Input() icon!: string;
  @Input() name!: string;
  @Input() color!: string;
}
