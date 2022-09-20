import { Component } from '@angular/core';
import { Currency } from './app.module';
import { CurrencyExchangeService } from './currency-exchange.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CurrencyConverter';
  exchangeRate: string;
  exchangeRateDate: Date;

  sourceToBeConverted: number;
  resultConverted: number | undefined;
  currencySource: Currency;
  currencyResult: Currency ;

  constructor(private currencyExchangeService: CurrencyExchangeService) {
    this.sourceToBeConverted = 1;
    this.currencySource = 'EUR';
    this.currencyResult = 'USD';

    this.exchangeRate = this.currencyExchangeService.exchangeRateSubject.value.currencyRate.toFixed(2);
    this.exchangeRateDate = this.currencyExchangeService.exchangeRateSubject.value.date;
  }
  ngOnInit() {
   this.currencyExchangeService.exchangeRateSubject.subscribe(currencyChangeRate => {
     this.exchangeRate = currencyChangeRate.currencyRate.toFixed(2);
     this.exchangeRateDate = currencyChangeRate.date;
     this.resultConverted = this.currencyExchangeService.convert(this.sourceToBeConverted, this.currencySource, this.currencyResult);
   })
  }
}
