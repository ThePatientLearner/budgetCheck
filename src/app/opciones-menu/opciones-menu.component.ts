import { Component } from '@angular/core';
import { Main } from '../classes/main';
import { MainService } from '../classes/main.service';

@Component({
  selector: 'app-opciones-menu',
  standalone: true,
  imports: [],
  templateUrl: './opciones-menu.component.html',
  styleUrl: './opciones-menu.component.css'
})
export class OpcionesMenuComponent {
  main :MainService = new MainService();
  mainInstance :any;
}
