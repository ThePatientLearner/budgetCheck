import { Component } from '@angular/core';
import { Main } from '../classes/main';
import { MainService } from '../classes/main.service';


@Component({
  selector: 'app-expenditures',
  standalone: true,
  imports: [],
  templateUrl: './expenditures.component.html',
  styleUrl: './expenditures.component.css'
})
export class ExpendituresComponent {
  
    main : MainService = new MainService();
mainInstance: any;
}




