import {getBankAccountDetailsFor} from './api/bankAccountApi'
import {PERSONAL} from './constants'

export const maxLendAmountFor = async person => {
  const accountDetails = await getBankAccountDetailsFor(person)

  if(accountDetails.accountType === PERSONAL)
    return 2 * accountDetails.salary
  else
    return 3 * accountDetails.salary
}