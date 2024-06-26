import { getAddress } from '@ethersproject/address'
import { AddressZero } from '@ethersproject/constants'




export function isAddress(value) {
    try {
      return getAddress(value)
    } catch {
      return false
    }
  }

export function getContract(address, ABI, library, account) {
    if (!isAddress(address) || address === AddressZero) {
      throw Error(`Invalid 'address' parameter '${address}'.`)
    }
}