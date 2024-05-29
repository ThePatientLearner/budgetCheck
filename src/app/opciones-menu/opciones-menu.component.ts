import { Component, OnInit } from '@angular/core';
import { Main } from '../classes/main';
import { MainService } from '../classes/main.service';
import { TopeGastosService } from '../gastos-service/tope-gastos.service';


@Component({
  selector: 'app-opciones-menu',
  standalone: true,
  imports: [],
  templateUrl: './opciones-menu.component.html',
  styleUrl: './opciones-menu.component.css'
})
export class OpcionesMenuComponent implements OnInit {
  main :MainService = new MainService();
  mainInstance :any;
  topeActual: number = 750;

  constructor(private topeGastosService: TopeGastosService) { }

  ngOnInit() {
    this.topeActual = this.topeGastosService.obtenerTope();
  }
}
