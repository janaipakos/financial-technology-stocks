import { Inject } from 'angular2/angular2';
import { Http } from 'angular2/http';

let stocks: Array<string> = ['AAPL', 'GOOG', 'FB', 'AMZN', 'TWTR'];

export interface StockInterface {
  symbol: string;
  lastTradePriceOnly: number;
  change: number;
  changeInPercent: number;
}

export class StocksService {
  http: Http;
  constructor(@Inject(Http) Http) {
      this.http = Http;
  }

  get() {
    return stocks;
  }

  add(stock) {
    stocks.push(stock);
    return this.get();
  }

  remove(stock) {
    stocks.splice(stocks.indexOf(stock), 1);
    return this.get();
  }

  load(symbols) {
    if (symbols) {
      return this.http.get('https://angular2-in-action-api.herokuapp.com/stocks/snapshot?symbols=' + symbols.join())
        // .toRx()
        .map(res => res.json());
    }
  }
}
