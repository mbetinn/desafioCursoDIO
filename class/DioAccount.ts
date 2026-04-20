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

  setName = (name: string): void => {
    this.name = name
    console.log('Nome alterado com sucesso!')
  }

  getName = (): string => {
    return this.name
  }

  setBalance = (balance: number): void => {
    this.balance = balance
  }

  getBalance = (): number => {
    return this.balance
  }

  deposit = (): void => {
    if(this.validateStatus()){
      console.log('Voce depositou')
    }
  }

  withdraw = (): void => {
    if(this.withdraw <= this.getBalance){
      if(this.validateStatus()){
        this.balance
      }
    }
    this.balance
    console.log('Voce sacou!')
  }

  validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida/Saque indisponível')
  }
}