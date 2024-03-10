import { Component } from '@angular/core';
import { Main } from '../classes/main';


@Component({
  selector: 'app-expenditures',
  standalone: true,
  imports: [],
  templateUrl: './expenditures.component.html',
  styleUrl: './expenditures.component.css'
})
export class ExpendituresComponent {
  
    main : Main = new Main();
}




