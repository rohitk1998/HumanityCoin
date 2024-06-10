import React, { useEffect, useState } from 'react';
import './migrate.scss';
import { Button } from 'antd';
import { addZeroToDecimalinput, regex } from '../../../helpers/regex';
import { useSelector } from 'react-redux';
import { useWeb3Modal } from '@web3modal/wagmi/react';
import { useConnectMetamask } from '../../../customHooks/useConnectMetamask';
import { useTransactionResult } from '../../../customHooks/useTransactionResult';
import { WalletIcon } from '../../Assets/Svg/Svg.jsx';
import { useStatus } from '../../../customHooks/useStatus.js';
import { TRANSACTION_STATUS } from '../../../utils/constant.js';

export default function Migrate() {
  const { isConnected } = useSelector((state) => state.app);
  const { open } = useWeb3Modal();
  const { contractInstance, tokenAContractInstance , tokenBContractInstance } = useConnectMetamask();
  const { isCompleted, setTxnHash, setIsCompleted } = useTransactionResult();
  const { transactionStatus, updateTransactionStatus } = useStatus();
  const [isApproved,setIsApproved] = useState(false);

  const [oldAmount, setOldAmount] = useState('');
  const [newAmount, setNewAmount] = useState('0.00');
  const [isFormValid, setIsFormValid] = useState(true);
  const [balance, setBalance] = useState(undefined);
  const [balance1, setBalance1] = useState(undefined);

  const HandleInputchange = (event) => {
    let isValid = true;
    let inputVal = addZeroToDecimalinput(event.target.value);
    if (inputVal == '0' || inputVal == '') {
      setOldAmount('');
      isValid = false;
      setNewAmount('0.00');
    } else if (regex(10).test(inputVal)) {
      isValid = true;
      setOldAmount(inputVal);
      const newTokenAmount = (900000000 * parseFloat(inputVal)) / 1000000000000;
      setNewAmount(newTokenAmount.toFixed(4)); // Round to 4 decimal places
    }
    setIsFormValid(isValid);
  };

  const handleMigrateToken = async () => {
    try {
      if (oldAmount == '' || Number(oldAmount) == 0) {
        setIsFormValid(false);
      } else {
        updateTransactionStatus(TRANSACTION_STATUS.INITIATED_APPROVAL_PROCESS)
        const migrateContractAddress = contractInstance.target;
        console.log(
          'oldAmount',
          oldAmount,
          (Number(oldAmount) * Number(1000000000000000000)).toString(),
          tokenAContractInstance
        );
        const txResult = await tokenAContractInstance.approve(
          migrateContractAddress,
          (Number(oldAmount) * Number(1000000000000000000)).toString(),
          { gasLimit: '2000000' }
        );
        console.log('hash', txResult.hash);
        if (txResult.hash) {
          updateTransactionStatus(TRANSACTION_STATUS.WAITING_FOR_APPROVAL)
          console.log('txResult.hash', txResult.hash);
          setTimeout(() => setTxnHash(txResult.hash), 20000);
        }
      }
      // You can perform further actions after migration
    } catch (error) {
      updateTransactionStatus(TRANSACTION_STATUS.FAILED)
      console.log('Error migrating tokens:', error.message);
      // Handle error, display message to user, etc.
    }
  };

  useEffect(() => {
    if (isCompleted == 'success' && !isApproved) {
      setIsApproved(true)
      updateTransactionStatus(TRANSACTION_STATUS.APPROVED)
      setTimeout(()=>  migrateToken(), 2000)
    }
    if(isCompleted == 'success' && isApproved){
      setIsApproved(false)
      updateTransactionStatus(TRANSACTION_STATUS.SUCCESSFUL)
      formatBalance();
    }
    if(isCompleted == 'failed'){
      updateTransactionStatus(TRANSACTION_STATUS.FAILED)
    }
    setTimeout(()=>{
      setIsCompleted('none');
    },3000)
  }, [isCompleted]);

  const migrateToken = async () => {
    try {
      updateTransactionStatus(TRANSACTION_STATUS.SENDING)
      if (isCompleted == 'success') {
        console.log('done approval', isCompleted);
        const tx = await contractInstance.migrate(
          (Number(oldAmount) * Number(1000000000000000000)).toString(),
          { gasLimit: '2000000' }
        );
        console.log('transaction on migration', tx.hash);
          if (tx.hash) {
            updateTransactionStatus(TRANSACTION_STATUS.IN_PROGRESS)
            console.log('hash', tx.hash);
            setTimeout(() => setTxnHash(tx.hash), 20000);
          }
        else{
          updateTransactionStatus(TRANSACTION_STATUS.FAILED)
        }
      }
    } catch (error) {
      updateTransactionStatus(TRANSACTION_STATUS.CANCELLED)
      console.log('error', error);
    }
  };

  useEffect(() => {
    return () => {
      setOldAmount('');
      setNewAmount('0.00');
      setIsFormValid(false);
    };
  }, []);

  useEffect(() => {
    if (tokenAContractInstance !== null) {
      console.log('tokenAContractInstance', tokenAContractInstance);
      formatBalance();
      updateTransactionStatus(TRANSACTION_STATUS.NONE)
    }
  }, [tokenAContractInstance,isConnected,balance,tokenBContractInstance]);


  const formatBalance = async () => {
      const _oldTokenBalance = await tokenAContractInstance.balanceOf(
        '0x511c4d2B9FFF5431dd1Bc2Af336C74431c1668ba'
      );
      const _newTokenBalance = await tokenBContractInstance.balanceOf(
        '0x511c4d2B9FFF5431dd1Bc2Af336C74431c1668ba'
      );
      console.log(
        '_oldTokenBalance',
        (Number(_oldTokenBalance) / 1000000000000000000).toString()
      );
      const balance = (
        Number(_oldTokenBalance) / 1000000000000000000
      ).toString();
      const balance1 = (
        Number(_newTokenBalance) / 1000000000000000000
      ).toString();
      setBalance(balance);
      setBalance1(balance1);
  };


  useEffect(()=> {
    if([TRANSACTION_STATUS.CANCELLED,TRANSACTION_STATUS.COMPLETED,TRANSACTION_STATUS.FAILED,TRANSACTION_STATUS.SUCCESSFUL].includes(transactionStatus)){
      setTimeout(()=>{
        updateTransactionStatus(TRANSACTION_STATUS.NONE)
      },2000)
    }
  },[transactionStatus])

  return (
    <div className="migrate">
      <div className="migrateCenter">
        <h2 className="migrateHeading">
          Out with the Old HMN, In with the New HMN
        </h2>
        <div className="youpay">
          <div className="payItems">
            <div className="amountpay0">
              <div className="inputBox">
                <label className="migrateLabel">Old Token</label>
                <input
                  className="migrateInput"
                  value={oldAmount}
                  onChange={HandleInputchange}
                  placeholder="0.00"
                />
              </div>
              <div className="walletBox">
                <WalletIcon />
                <p>{balance !== undefined ? Number(balance).toFixed(5) : '0'}</p>
              </div>
            </div>
            {/* <div className="amountpay" style={{ marginTop: '5px' }}>
              <label className="migrateLabel">New HMN Token</label>
              <input
                className="migrateInput"
                value={newAmount}
                placeholder="0.00"
                readOnly
              />
            </div> */}
            <div className="amountpay0" style={{ marginTop: '5px' }}>
              <div className="inputBox">
                <label className="migrateLabel">New Token</label>
                <input
                  className="migrateInput"
                  value={newAmount}
                  placeholder="0.00"
                readOnly
                />
              </div>
              <div className="walletBox">
                <WalletIcon />
                <p>{balance1 !== undefined ? Number(balance1).toFixed(5) : '0'}</p>
              </div>
            </div>
          </div>
          {
            <div className="centered-button">
              {isConnected && isFormValid ? (
                <button onClick={handleMigrateToken} disabled={transactionStatus !== TRANSACTION_STATUS.NONE}>{
                  transactionStatus !== TRANSACTION_STATUS.NONE ? transactionStatus : 'Send Transaction'
                }</button>
              ) : isConnected && !isFormValid ? (
                <button onClick={handleMigrateToken} disabled={!isFormValid}>
                  {!isFormValid && 'Enter Amount'}
                </button>
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

          }
          {/* <div>
           <p style={{color:"white"}}> {transactionStatus}</p>
          </div> */}
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
