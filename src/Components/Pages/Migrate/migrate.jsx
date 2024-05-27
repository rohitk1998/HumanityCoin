import React, { useEffect, useState } from 'react';
import './migrate.scss';
import { Button } from 'antd';
import { addZeroToDecimalinput, regex } from '../../../helpers/regex';
import { useSelector } from 'react-redux';
import { useWeb3Modal } from '@web3modal/wagmi/react';
import { useConnectMetamask } from '../../../customHooks/useConnectMetamask';


export default function Migrate() {
  const { isConnected } = useSelector((state) => state.app);
  const { open } = useWeb3Modal();
  const { contractInstance , tokenAContractInstance } = useConnectMetamask();
  const [oldAmount, setOldAmount] = useState('');
  const [newAmount, setNewAmount] = useState('0.00');
  const [isFormValid, setIsFormValid] = useState(true);

  const HandleInputchange = (event) => {
    let isValid = true;
    let inputVal = addZeroToDecimalinput(event.target.value);
    if(inputVal == '0' || inputVal == ''){
      setOldAmount('');
      isValid = false;
      setNewAmount('0.00');
    }
    else if (regex(10).test(inputVal)) {
      setOldAmount(inputVal);
      const newTokenAmount = (900000000 * parseFloat(inputVal)) / 1000000000000;
      setNewAmount(newTokenAmount.toFixed(4)); // Round to 4 decimal places
    }
    setIsFormValid(isValid);
  };

  const handleMigrateToken = async () => {
    try {
      const migrateContractAddress = contractInstance.target;
      console.log('oldAmount',oldAmount , (Number(oldAmount) * Number(1000000000000000000)).toString(),tokenAContractInstance);
      const txAprrove = await tokenAContractInstance.approve(
        migrateContractAddress,
        (Number(oldAmount) * Number(1000000000000000000)).toString(),
        { gasLimit: '2000000' }
      );
      console.log('txAprrove',txAprrove);
      const tx = await contractInstance.migrate((Number(oldAmount) * Number(1000000000000000000)).toString(), { gasLimit: '2000000' });
      // await tx.wait(); // Wait for the transaction to be mined
      console.log('Transaction hash:', tx.hash);
      // You can perform further actions after migration
    } catch (error) {
      console.log('Error migrating tokens:', error.message);
      // Handle error, display message to user, etc.
    }
  };

  const formatBalance = async ()=>{
    if(tokenAContractInstance !== null){
      const _oldTokenBalance = await tokenAContractInstance.balanceOf('0x511c4d2B9FFF5431dd1Bc2Af336C74431c1668ba')
      console.log('_oldTokenBalance',(Number(_oldTokenBalance) / 1000000000000000000).toString());
    }
  }

  useEffect(() => {
    return () => {
      setOldAmount('');
      setNewAmount('0.00');
      setIsFormValid(false);
    };
  }, []);


  useEffect(()=> {
   if(tokenAContractInstance !== null ){
   console.log('tokenAContractInstance',tokenAContractInstance);
    formatBalance();
   }
  },[tokenAContractInstance])

  return (
    <div className="migrate">
      <div className="migrateCenter">
        <h2 className="migrateHeading">
          Out with the Old HMN, In with the New HMN
        </h2>
        <div className="youpay">
          <div className="payItems">
            <div className="amountpay">
              <label className='migrateLabel'>Old HMN Token</label>
              <input
                className="migrateInput"
                value={oldAmount}
                onChange={HandleInputchange}
                placeholder="0"
              />
            </div>
            <div className="amountpay" style={{ marginTop: '5px' }}>
              <label className='migrateLabel'>New HMN Token</label>
              <input
                className="migrateInput"
                value={newAmount}
                placeholder="0.00"
                readOnly
              />
            </div>
          </div>
          {(
        <div className="centered-button">
          {isConnected && isFormValid ? (
            <button onClick={handleMigrateToken}>Send Transaction</button>
          ) : isConnected && !isFormValid ? (
            <button onClick={handleMigrateToken}></button>
          ) : (
            <button
              onClick={() => {
                open();
              }}
            >
              Connect Wallet
            </button>
          )}
        </div>
      )}
        </div>
      </div>
      <div className="migrateContext">
        <p>
          We are excited to announce a new feature that lets you leverage your
          existing HMN tokens! As we move forward, we've introduced new HMN
          tokens with enhanced functionality. To ensure a smooth transition,
          we're offering you the chance to easily exchange your old HMN tokens
          for the new ones. This gives you the freedom to continue utilizing
          your HMN holdings and be part of the exciting future we are building.
          Don't miss this opportunity to upgrade your HMN experience!
        </p>
      </div>
    </div>
  );
}