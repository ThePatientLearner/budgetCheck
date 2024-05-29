import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TopeGastosService {

  topeGastos: number = 750;

  constructor() { 
  }
    actualizarTope(nuevoTope: number) {
      this.topeGastos = nuevoTope;
      localStorage.setItem('topeGastos', nuevoTope.toString()); // Guardar en el navegador
    }

    obtenerTope(): number {
      const topeGuardado = localStorage.getItem('topeGastos');
      if (topeGuardado) {
        this.topeGastos = parseInt(topeGuardado, 10);
      }
      return this.topeGastos;
    }
  
}
