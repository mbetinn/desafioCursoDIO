import { DioAccount } from "./DioAccount"

export class BonusAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  deposit = (): void => {
    if(this.validateStatus()){ 
      const newBalance = this.getBalance() + 10
      this.setBalance(newBalance)
      console.log('O valor foi depositado com bônus de 10 reais.')
    }
  }
}