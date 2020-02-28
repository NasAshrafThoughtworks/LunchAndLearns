import {BUSINESS, PERSONAL} from '../constants'
import {createLender} from '../amountLender'


describe("max amount lendable is", () => {
  const person = 'someone'
  const withBankAccountApiThatReturns = ({
    name = person,
    salary = 100,
    accountType = PERSONAL
   } = {}) => ({
    async getBankAccountDetailsFor(person) {
      return new Promise((resolve, reject) => {
        resolve({
          name,
          salary,
          accountType
        })
      })
    }
  })

  test("double salary if personal account", async () => {
    const salary = 300
    const lender = createLender(withBankAccountApiThatReturns({
      salary,
      accountType: PERSONAL
    }))
    const amountLent = await lender.maxLendAmountFor(person)

    expect(amountLent).toBe(salary * 2)
  })

  test("triple salary if business account", async () => {
    const salary = 400
    const lender = createLender(withBankAccountApiThatReturns({
      salary,
      accountType: BUSINESS
    }))
    const amountLent = await lender.maxLendAmountFor(person)

    expect(amountLent).toBe(salary * 3)
  })

})