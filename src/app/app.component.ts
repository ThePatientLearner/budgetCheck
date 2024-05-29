import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeadNavComponent } from './head-nav/head-nav.component';
import { Main } from './classes/main';
import { OpcionesMenuComponent } from './opciones-menu/opciones-menu.component';
import { ExpendituresComponent } from './expenditures/expenditures.component';
import { MainService } from './classes/main.service';
import { HttpClient } from '@angular/common/http';
import { StockpricesComponent } from './stockprices/stockprices.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeadNavComponent,OpcionesMenuComponent,ExpendituresComponent,StockpricesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'budgetCheck';
 

}

