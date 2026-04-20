import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { BonusAccount } from './class/BonusAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log(peopleAccount)
peopleAccount.deposit()
peopleAccount.withdraw()

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit()
companyAccount.withdraw()
companyAccount.getLoan()   

const bonusAccount: BonusAccount = new BonusAccount('Matheus', 60)
bonusAccount.deposit()
bonusAccount.withdraw()