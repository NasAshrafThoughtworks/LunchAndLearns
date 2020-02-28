import {maxLendAmountFor} from '../amountLender'
import {businessAccount, personalAccount} from '../api/__mocks__/bankAccountApi'
jest.mock('../api/bankAccountApi.js');

describe("max amount lendable is", () => {

  test("double salary if personal account", async () => {
    const amountLent = await maxLendAmountFor(personalAccount.name)

    expect(amountLent).toBe(personalAccount.salary * 2)
  })

  test("triple salary if business account", async () => {
    const amountLent = await maxLendAmountFor(businessAccount.name)

    expect(amountLent).toBe(businessAccount.salary * 3)
  })
})