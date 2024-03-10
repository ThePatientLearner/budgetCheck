export class Main {
    private actualDate: Date = new Date();
  private initialBalance: number;
  public balanceColor : string;

    constructor(){
        const storedBalance = localStorage.getItem('initialBalance');
      this.initialBalance = storedBalance ? parseFloat(storedBalance) : 1000;
      if(this.initialBalance == 1000){
        alert("Budget started");
      }

      this.balanceColor = this.initialBalance < 0 ? 'red': 'green'; // esto cambiará a rojo
    }

    public setBalance(newBalance: number){
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
    

    public getInitialBalance(){
      return this.initialBalance;
    }

    public getDate(){
      return this.actualDate;
    }


    public resetBudget(){
        this.initialBalance = 750;
        this.saveState();
    }
} 
