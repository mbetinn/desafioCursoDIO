import { DioAccount } from "./DioAccount"

export class BonusAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  deposit = (amount: number): void => {
    if(this.validateStatus()){
      const total = amount + 10
      this.setBalance(this.getBalance() + total)
      console.log(`Depósito de ${amount} com bônus de 10. Total: ${total}`)
    }
  }
}