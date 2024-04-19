import React, { useEffect, useState } from 'react';
import './swap.scss';
import { addZeroToDecimalinput, regex } from '../../../helpers/regex';
import { useSelector } from 'react-redux';
import { useWeb3Modal } from '@web3modal/wagmi/react';
import { useConnectMetamask } from '../../../customHooks/useConnectMetamask';
import { setAmountPrecision } from '../../../helpers/setAmountPrecision';
export default function Send() {
  const { isConnected, account } = useSelector((state) => state.app);
  const { open } = useWeb3Modal();
  const { humanityCoinContractInstance } = useConnectMetamask();
  const [hmnAmount, setFiatAmount] = useState('');
  const [balance, setBalance] = useState('');
  const [addressToPay, setAmountToPay] = useState('');
  const [isFormValid, setIsFormValid] = useState(true);
  const [validationError, setValidationError] = useState('');
  const [isSuccess, setSuccess] = useState(false);
  const [txnHash, setHash] = useState(false);

  const handleFiatAmountInput = (event) => {
    let isValid = true;
    let inputVal = addZeroToDecimalinput(event.target.value);
    if (inputVal === '' || regex(10).test(inputVal)) {
      setFiatAmount(inputVal);
    }
    if (inputVal === '') {
      isValid = false;
    }
    setIsFormValid(isValid);
  };

  function handleAddressToPay(e) {
    console.log('address to pay : ', e.target.value);
    setAmountToPay(e.target.value);
  }

  const handleSubmit = async () => {
    if (hmnAmount === '' || addressToPay === '') {
      setIsFormValid(true);
      setValidationError('Enter amount to send');
    } else {
      try {
        const tx = await humanityCoinContractInstance.transfer(
          addressToPay,
          (Number(hmnAmount) * Number(1000000000000000000)).toString(),
          { gasLimit: '2000000' }
        );
        if (tx) {
          console.log('tx hash', tx.hash);
          setHash(tx.hash);
          setSuccess(true);
        }
      } catch (error) {
        console.log('Error', error);
      }
    }
  };

  useEffect(() => {
    balOfHMN();
  }, [humanityCoinContractInstance]);

  const balOfHMN = async () => {
    if (humanityCoinContractInstance !== null) {
      const hmnBal = await humanityCoinContractInstance?.balanceOf(account);
      console.log('hmnBal', hmnBal);
      const formattedBal = setAmountPrecision(hmnBal);
      setBalance(formattedBal);
    }
  };

  console.log('balance', balance);

  if (isSuccess) {
    setTimeout(() => {
      setSuccess(false);
    }, 3000);

    return (
      <div className="sendPay">
        <div className="success-box">
          <p>Successfully initiated the transaction !!</p>
          <button
            onClick={() => {
              window.open(
                `https://sepolia.etherscan.io/tx/${txnHash}`,
                '_blank'
              );
            }}
          >
            {txnHash.slice(0, 40)}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="sendPay">
      <div className="payItems">
        <div className="amountpay">
          <p>You Transfer</p>
          <div className="fiatInputContainer">
            <h1>HMN</h1>
            <input
              value={hmnAmount}
              onChange={handleFiatAmountInput}
              placeholder="0"
            />
          </div>
          <div className="cryptoValueToSend">
            <h6>Balance : {balance !== '' ? balance : '0.00'} HMN</h6>
          </div>
          <input
            className="addressInput"
            value={addressToPay}
            onChange={handleAddressToPay}
            placeholder="Enter Address To Send"
          />
        </div>
      </div>
      {isConnected && isFormValid ? (
        <button onClick={handleSubmit}>Send HMN</button>
      ) : isConnected && !isFormValid ? (
        <button onClick={handleSubmit}></button>
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
  );
}
