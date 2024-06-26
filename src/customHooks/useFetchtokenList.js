import { useEffect, useState } from 'react';
import UNISWAP_DEFAULT_LIST from '@uniswap/default-token-list';

const useFetchTokenList = () => {
  const [list, setList] = useState(undefined);

  useEffect(() => {
    setList(UNISWAP_DEFAULT_LIST.tokens);
  }, []);

  return [list];
};


export default useFetchTokenList