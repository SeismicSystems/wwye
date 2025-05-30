/*
 * Take out a loan on-chain, with both your lender and amount shielded.
 */
import { AbiFunction } from 'viem'

import {
  displayPlaintextTx,
  displayShieldedTx,
  mockContract,
} from '../lib/util.js'

const ABI_FUNC = {
  name: 'borrow',
  type: 'function',
  stateMutability: 'payable',
  inputs: [
    {
      type: 'saddress',
      name: 'lender',
    },
    {
      type: 'suint256',
      name: 'amount',
    },
  ],
  outputs: [],
}

const MOCK_LENDER = '0xa5cc3c03994DB5b0d9A5eEdD10CabaB0813678AC'
const MOCK_AMOUNT = 1000

;(async () => {
  const contract = await mockContract(ABI_FUNC as AbiFunction)
  const { plaintextTx, shieldedTx } = await contract.dwrite.borrow([
    MOCK_LENDER,
    MOCK_AMOUNT,
  ])

  console.log()
  displayPlaintextTx(plaintextTx, ABI_FUNC as AbiFunction)
  displayShieldedTx(shieldedTx)
})()
