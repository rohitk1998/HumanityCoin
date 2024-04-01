import React from 'react';
import style from './style.module.scss';
import metamask from "../../Assets/Images/metamask.svg"
import trust from "../../Assets/Images/trust.png"
import safepal from "../../Assets/Images/safepal.jpeg"
import { useConnectMetamask } from '../../../hooks/useConnectMetamask';


const WALLETS = [
  {
    name: 'Metamask',
    icon: metamask,
  },
  {
    name: 'Safepal',
    icon: safepal,
  },
  {
    name: 'Trust',
    icon: trust,
  },
];
function Metamodal(
  {
    setShowMeta
  }
) {

  const [
    ethInstance,
    account,
    errorMessage,
    setIsEthInstanceActive,
    isEthInstanceActive
  ] = useConnectMetamask();


  // console.log('account',account);

  return (
    <div className={style.connectwallet}>
      <div className={style.header}>
        <h2>Connect Wallet</h2>
      </div>
      <div className={style.content}>
        {WALLETS.map((wallet) => {
          return (
            <div className={style.card} onClick={()=> {
              setIsEthInstanceActive(!isEthInstanceActive)
              setShowMeta(false)
              console.log('account in modal',account);
            }}>
              <img src={wallet.icon} width={50} height={50} />
              <p>{wallet.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Metamodal;
