// main.service.ts
import { Injectable } from '@angular/core';
import { Main } from './main';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  mainInstance: Main = new Main();

  constructor() { }

  getMainInstance(): Main {
    return this.mainInstance;
  }
}
