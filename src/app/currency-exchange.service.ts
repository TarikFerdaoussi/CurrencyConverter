import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Currency } from './app.module';

@Injectable({
  providedIn: 'root'
})
export class CurrencyExchangeService {
  
  exchangeRateSubject = new BehaviorSubject({
    currencyRate: 1.1,
    date: new Date()
  });

  constructor() {
    setInterval(() =>{  
      let exchangeRateCalculation: number; 
        exchangeRateCalculation = Math.floor((Math.random()*100)+1)%2 === 0? this.exchangeRateSubject.value.currencyRate+0.05: this.exchangeRateSubject.value.currencyRate-0.05;
        this.exchangeRateSubject.next({currencyRate: exchangeRateCalculation, date: new Date()});
      
   }, 3000);
  }

  convert =(source: number, currencySource: Currency, currencyResult: Currency ) => {
    
    if(currencySource === 'EUR' && currencyResult === 'USD') {
      return source*this.exchangeRateSubject.value.currencyRate;
    } 
    if(currencySource === 'USD' && currencyResult === 'EUR') {
      return source / this.exchangeRateSubject.value.currencyRate;
    }
    return source
  }
}
