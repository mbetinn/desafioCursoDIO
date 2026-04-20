// import { BonusAccount } from "./BonusAccount"
// import { CompanyAccount } from "./CompanyAccount"
// import { PeopleAccount } from "./PeopleAccount"

export abstract class DioAccount {
  private name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true
  value: number = 0


  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  // setValue = (value: number): void => {
  //   this.value = value
  // }

  // getValue = (): number => {
  //   return this.value
  // }

  // setName = (name: string): void => {
  //   this.name = name
  //   console.log('Nome alterado com sucesso!')
  // }

  // getName = (): string => {
  //   return this.name
  // }

  getBalance = (): number => this.balance
  setBalance = (amount: number): void => { this.balance = amount }


  deposit = (amount: number): void => {
    if(this.validateStatus()){
      const newBalance = this.getBalance() + amount;
      this.setBalance(newBalance);
      console.log(`Você depositou ${amount}. Saldo atual: ${this.balance}`);
    }
  }

  withdraw = (amount: number): void => {
    if(this.validateStatus() && this.balance >= amount){
    this.balance -= amount;
    console.log(`Você sacou ${amount}. Saldo atual: ${this.balance}`);
    }else{
      throw new Error('Saldo insuficiente');
    }
  }

  validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida/Saque indisponível')
  }
}