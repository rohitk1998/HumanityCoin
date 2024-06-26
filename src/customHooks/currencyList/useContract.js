import { useMemo } from 'react'
import { MULTICALL_ABI, MULTICALL_NETWORKS } from '../../abi/multicall/index'
import { useActiveWeb3React } from '../useActiveWeb3React'
import { getContract } from '../../helpers/currencyList/getContract'




function useContract(address, ABI ,withSignerIfPossible = true ){
    const { library, account } = useActiveWeb3React()
  
    return useMemo(() => {
      if (!address || !ABI || !library) return null
      try {
        return getContract(address, ABI, library, withSignerIfPossible && account ? account : undefined)
      } catch (error) {
        console.error('Failed to get contract', error)
        return null
      }
    }, [address, ABI, library, withSignerIfPossible, account])
  }



export function useMulticallContract() {
    const { chainId } = useActiveWeb3React()
    return useContract(chainId && MULTICALL_NETWORKS[chainId], MULTICALL_ABI, false)
  }