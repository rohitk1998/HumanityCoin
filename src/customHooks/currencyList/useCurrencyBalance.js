// import { Currency, CurrencyAmount, ETHER, JSBI, Token, TokenAmount } from '@uniswap/sdk'
// import { useMemo } from 'react'
// import ERC20_INTERFACE from '../../abi/erc20'
// // import { useAllTokens } from '../../hooks/Tokens'
// // import { useActiveWeb3React } from '../../hooks'
// import { useMulticallContract } from '../../customHooks/currencyList/useContract'
// import { isAddress } from '../../helpers/currencyList/getContract'
// // import { useSingleContractMultipleData, useMultipleContractSingleData } from '../multicall/hooks'

// /**
//  * Returns a map of the given addresses to their eventually consistent ETH balances.
//  */
// export function useETHBalances(
//   uncheckedAddresses
// ) {
//   const multicallContract = useMulticallContract()

//   const addresses = useMemo(
//     () =>
//       uncheckedAddresses
//         ? uncheckedAddresses
//           .map(isAddress)
//           .filter((a) => a !== false)
//           .sort()
//         : [],
//     [uncheckedAddresses]
//   )

//   const results = useSingleContractMultipleData(
//     multicallContract,
//     'getEthBalance',
//     addresses.map(address => [address])
//   )

//   return useMemo(
//     () =>
//       addresses.reduce((memo, address, i) => {
//         const value = results?.[i]?.result?.[0]
//         if (value) memo[address] = CurrencyAmount.ether(JSBI.BigInt(value.toString()))
//         return memo
//       }, {}),
//     [addresses, results]
//   )
// }

// /**
//  * Returns a map of token addresses to their eventually consistent token balances for a single account.
//  */
// export function useTokenBalancesWithLoadingIndicator(
//   address,
//   tokens
// ) {
//   const validatedTokens= useMemo(
//     () => tokens?.filter((t) => isAddress(t?.address) !== false) ?? [],
//     [tokens]
//   )

//   const validatedTokenAddresses = useMemo(() => validatedTokens.map(vt => vt.address), [validatedTokens])

//   console.log('validatedTokenAddresses',validatedTokenAddresses, 'address',address);
  

//   const balances = useMultipleContractSingleData(validatedTokenAddresses, ERC20_INTERFACE, 'balanceOf', [address])

//   console.log('FETCHING BALANCE OF EACH TOKEN :', balances);


//   const anyLoading = useMemo(() => balances.some(callState => callState.loading), [balances])

//   return [
//     useMemo(
//       () =>
//         address && validatedTokens.length > 0
//           ? validatedTokens.reduce((memo, token, i) => {
//             const value = balances?.[i]?.result?.[0]
//             const amount = value ? JSBI.BigInt(value.toString()) : undefined
//             if (amount) {
//               memo[token.address] = new TokenAmount(token, amount)
//             }
//             return memo
//           }, {})
//           : {},
//       [address, validatedTokens, balances]
//     ),
//     anyLoading
//   ]
// }

// export function useTokenBalances(
//   address,
//   tokens
// ) {
//   console.log('useTokenBalancesWithLoadingIndicator(address, tokens)[0]',useTokenBalancesWithLoadingIndicator(address, tokens)[0]);
  
//   return useTokenBalancesWithLoadingIndicator(address, tokens)[0]
// }

// // get the balance for a single token/account combo
// export function useTokenBalance(account, token){
//   const tokenBalances = useTokenBalances(account, [token])
//   if (!token) return undefined
//   return tokenBalances[token.address]
// }

// export function useCurrencyBalances(
//   account,
//   currencies
// ){
//   const tokens = useMemo(() => currencies?.filter((currency) => currency instanceof Token) ?? [], [
//     currencies
//   ])
//   console.log('tokens',tokens);
  
//   const tokenBalances = useTokenBalances(account, tokens)
//   const containsETH= useMemo(() => currencies?.some(currency => currency === ETHER) ?? false, [currencies])
//   const ethBalance = useETHBalances(containsETH ? [account] : [])

//   return useMemo(
//     () =>
//       currencies?.map(currency => {
//         if (!account || !currency) return undefined
//         if (currency instanceof Token) return tokenBalances[currency.address]
//         if (currency === ETHER) return ethBalance[account]
//         return undefined
//       }) ?? [],
//     [account, currencies, ethBalance, tokenBalances]
//   )
// }

// export function useCurrencyBalance(account, currency){
//   console.log('account', account , 'currency' , currency  );
//   console.log('fetching balance',useCurrencyBalances(account, [currency]));
  
//   return useCurrencyBalances(account, [currency])[0]
// }

// // // mimics useAllBalances
// // export function useAllTokenBalances(){
// //   const { account } = useActiveWeb3React()
// //   const allTokens = useAllTokens()
// //   const allTokensArray = useMemo(() => Object.values(allTokens ?? {}), [allTokens])
// //   const balances = useTokenBalances(account ?? undefined, allTokensArray)
// //   return balances ?? {}
// // }
