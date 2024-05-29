
import { Component, OnInit } from '@angular/core';
import { StockDataService } from '../stock-data.service';


@Component({
  selector: 'app-stockprices',
  standalone: true,
  imports: [],
  templateUrl: './stockprices.component.html',
  styleUrl: './stockprices.component.css'
})
export class StockpricesComponent implements OnInit {
  stockPrices: any = {};
  

  constructor(private stockDataService: StockDataService) {}

  ngOnInit(): void {
    this.loadStockPrices();
  }

  loadStockPrices(): void {
    const symbols = ['JD', 'TSLA', 'GBTC', 'GLD', 'EURUSD', 'SPY', 'QQQ', 'NVDA', 'AAPL'];
    
    symbols.forEach(symbol => {
      this.stockDataService.getStockPrice(symbol).subscribe(data => {
        console.log(data); // Agregar esta línea para verificar los datos recibidos
        this.stockPrices[symbol] = data;
      });
    });
  }
  
}
