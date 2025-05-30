/*
 * Pay rent on-chain, with both your landlord and rent amount shielded.
 */
import { AbiFunction } from "viem";

import { displayPlaintextTx, displayShieldedTx, mockContract } from "../lib/util.js";

const ABI_FUNC = {
  name: "rent",
  type: "function",
  stateMutability: "nonpayable",
  inputs: [
    {
      type: "saddress",
      name: "landlord",
    },
    {
      type: "suint256",
      name: "amount",
    },
  ],
  outputs: [],
};

const MOCK_LANDLORD = "0xa5cc3c03994DB5b0d9A5eEdD10CabaB0813678AC";
const MOCK_AMOUNT = 1000;

(async () => {
  const contract = await mockContract(ABI_FUNC as AbiFunction);
  const { plaintextTx, shieldedTx } = await contract.dwrite.rent([
    MOCK_LANDLORD,
    MOCK_AMOUNT,
  ]);

  console.log();
  displayPlaintextTx(plaintextTx, ABI_FUNC as AbiFunction);
  displayShieldedTx(shieldedTx);
})();
