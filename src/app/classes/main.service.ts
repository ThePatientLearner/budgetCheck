// main.service.ts
import { Injectable } from '@angular/core';
import { Main } from './main';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  dailyBudget() {
    return Math.trunc(this.budget / 31);
  }
  mainInstance: Main = new Main();

  private actualDate: Date = new Date();
  private initialBalance: number;
  public balanceColor: string;
  private budget: number = 750;


  constructor() {
    const storedBalance = localStorage.getItem('initialBalance');
    this.initialBalance = storedBalance ? parseFloat(storedBalance) : this.budget;
    if (this.initialBalance == this.budget) {

      alert("Budget started");
    }

    this.balanceColor = this.initialBalance < 0 ? 'red' : 'green'; // esto cambiará a rojo
  }



  getMainInstance(): Main {
    return this.mainInstance;
  }

  public getBudget() {
    return this.budget;
  }

  public setBalance(newBalance: number) {
    this.initialBalance = newBalance;
  }

  public changeBalance(newChangeStr: string) {
    if (newChangeStr.trim() === "") {
      // No hagas nada si la cadena está vacía
      return;
    }

    let newChange = parseFloat(newChangeStr);
    let newBalance = this.initialBalance;
    newBalance -= newChange;
    if (newBalance < 0) {
      alert("Has rebasado tu presupuesto");
      this.balanceColor = 'red';
    }
    this.initialBalance = newBalance;
    this.saveState();
  }

  private saveState() {
    localStorage.setItem('initialBalance', this.initialBalance.toString());
  }

  

  public getInitialBalance() {
    return this.initialBalance;
  }

  public getDate() {
    return this.actualDate;
  }


  public resetBudget() {
    this.initialBalance = this.budget;
    this.saveState();
  }

  public dayBudget() {
    const dailyBudget = this.budget / 31;
    return Math.trunc(dailyBudget);
  }


  public setBudget(newBudget: string) {
    if (newBudget.trim() === "") {
      // No hagas nada si la cadena está vacía
      return;
    }

    let newChange = parseFloat(newBudget);
    this.budget = newChange;

  }
}
