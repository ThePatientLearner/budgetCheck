import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeadNavComponent } from './head-nav/head-nav.component';
import { Main } from './classes/main';
import { OpcionesMenuComponent } from './opciones-menu/opciones-menu.component';
import { ExpendituresComponent } from './expenditures/expenditures.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HeadNavComponent,OpcionesMenuComponent,ExpendituresComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'budgetCheck';
 

  
}

