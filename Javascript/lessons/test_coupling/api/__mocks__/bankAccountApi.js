import {BUSINESS, PERSONAL} from '../../constants'

export const personalAccount = {
  name: 'personal',
  salary: 100,
  accountType: PERSONAL
}

export const businessAccount = {
  name: 'business',
  salary: 200,
  accountType: BUSINESS
}

const accounts = {
  [personalAccount.name]: personalAccount,
  [businessAccount.name]: businessAccount
}

export async function getBankAccountDetailsFor(person) {
  return new Promise((resolve, reject) => {
    resolve(accounts[person])
  })
}