import { Component, Input } from '@angular/core';

@Component({
  selector: 'exchange-rate',
  templateUrl: './exchange-rate.component.html',
  styleUrls: ['./exchange-rate.component.scss']
})
export class ExchangeRateComponent {

  @Input() exchangeRate: string | undefined;
}
