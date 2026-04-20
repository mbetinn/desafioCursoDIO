import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (amount: number): void => {
    if(this.validateStatus()){
      const currentBalance = this.getBalance()
      this.setBalance(currentBalance + amount)
      console.log(`Você pegou um empréstimo de ${amount}`)
    }
  }
}