import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { BonusAccount } from './class/BonusAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
peopleAccount.deposit(100)
peopleAccount.withdraw(50)

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(1000)
companyAccount.getLoan(500)

const bonusAccount: BonusAccount = new BonusAccount('Matheus', 60)
bonusAccount.deposit(100)