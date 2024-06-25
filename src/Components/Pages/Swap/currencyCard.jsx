import { useCurrencyBalance } from '../../../customHooks/currencyList/useCurrencyBalance';
import './currencyList.scss';

export default function CurrencyCard({ currency , idx  }) {

    // const balance =  useCurrencyBalance();

    // console.log('balance',balance);
  return (
    <div className="token-card">
      <img src={currency.logoURI} width={25} height={25} />
      <p key={idx}>{currency.symbol}</p>
    </div>
  );
}
