// src/app/stock-data.service.ts
// src/app/stock-data.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StockDataService {
  
  private apiKey: string = 'cpbo68pr01qqbq2ac28gcpbo68pr01qqbq2ac290'; // Reemplaza con tu clave de API
  private baseUrl: string = 'https://finnhub.io/api/v1';

  constructor(private http: HttpClient) {}

  getStockPrice(symbol: string): Observable<any> {
    const url = `${this.baseUrl}/quote?symbol=${symbol}&token=${this.apiKey}`;
    return this.http.get<any>(url);
  }
}



