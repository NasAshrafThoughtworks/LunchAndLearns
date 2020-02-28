import {PERSONAL} from './constants'

export const createLender = accountApi => ({
  async maxLendAmountFor(person) {
    const accountDetails = await accountApi.getBankAccountDetailsFor(person)

    if(accountDetails.accountType === PERSONAL)
      return 2 * accountDetails.salary
    else
      return 3 * accountDetails.salary
  }
})

