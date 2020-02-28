import axios from 'axios'
import {BUSINESS, PERSONAL} from '../constants'

export async function getBankAccountDetailsFor(person) {
  const response = await axios.get(`https://banksUnited/${person}`)

  return {
    name: person,
    salary: response.data.wage,
    accountType: response.data.type == 'p' ? PERSONAL : BUSINESS
  }
}