import React, { useEffect, useState } from 'react';
import './V2Pool.scss';
import btc from '../../Assets/Images/btc.svg';
import eth from '../../Assets/Images/ethereumcoin.svg';
import { useWeb3Modal } from '@web3modal/wagmi/react';
import { useConnectMetamask } from '../../../customHooks/useConnectMetamask.js';
import { useSelector } from 'react-redux';

export const CreatePair = () => {
  const { isConnected } = useSelector((state) => state.app);
  const { open } = useWeb3Modal();
  const { factoryContractInstance } = useConnectMetamask();

  const [tokenAddress1, setTokenAddress1] = useState('');
  const [tokenAddress2, setTokenAddress2] = useState('');
  const [isFormValid, setIsFormValid] = useState(true);
  const [validationError, setValidationError] = useState('');
  const [isSuccess, setSuccess] = useState(false);
  const [isError, setIsError] = useState('');
  const [txnHash, setHash] = useState(false);

  const createPair = async () => {
    console.log('create a pair', factoryContractInstance);
    try {
      const result = await factoryContractInstance.createPair(
        tokenAddress1,
        tokenAddress2
      );
      console.log('result', result);
      setSuccess(true);
      setHash(result.hash);
    } catch (error) {
      console.log('ERROR WHILE ADDING LIQUIDITY:', error.toString().split(' '));
      const errorArr = error.toString().split(' ');
      console.log('errorArr', errorArr);
      if (errorArr.includes('PAIR_EXISTS",')) {
        console.log('yes');
        setIsError('Pair already exists');
      }
    }
  };

  const handleFormValidation = () => {
    if (tokenAddress1 == '' || tokenAddress2 == '') {
      setValidationError('Enter Address');
      setIsFormValid(false);
    } else {
      setValidationError('');
      setIsFormValid(true);
      createPair();
    }
  };

  const HandleInputchange = (value, stateFn) => {
    let isValid = true;
    if (value !== '') {
      stateFn(value);
    }
    if (value === '') {
      isValid = false;
    }
    setIsFormValid(isValid);
  };

  if (isSuccess) {
    setTimeout(() => {
      setSuccess(false);
    }, 4000);
  }

  if (!isSuccess && isError !== '') {
    setTimeout(() => {
      setIsError('');
    }, 4000);
  }

  return (
    <div className="AddLeqSec">
      <div className="addLiq">
        <div className="containerAdLiq">
          <div className="createNewPool">
            <div>
              <h3>Create Pair</h3>
              <p>Get token pairs from your bucket list.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="addLiqbottomSec">
        <div className="leftdata">
          <h4>Token Address</h4>
          <p>Enter Address to get a pair</p>
        </div>
        <div className="right">
          {!isSuccess && isError !== '' ? (
            <div className="infoBox">
              <p style={{ color: 'red' }}>{isError}</p>
            </div>
          ) : isSuccess ? (
            <>
              <div className="infoBoxSuccess">
                <p>
                  Successfully initiated transaction
                </p>
                <p>{txnHash}</p>
              </div>
            </>
          ) : (
            <>
              <div className="addressDiv">
                <div className="ethsecond">
                  <input
                    value={tokenAddress1}
                    onChange={(event) => {
                      HandleInputchange(event.target.value, setTokenAddress1);
                    }}
                    placeholder="Enter address"
                  />
                </div>
              </div>
              <div className="addressDiv">
                <div className="ethsecond">
                  <input
                    value={tokenAddress2}
                    onChange={(event) => {
                      HandleInputchange(event.target.value, setTokenAddress2);
                    }}
                    placeholder="Enter address"
                  />
                </div>
              </div>
              {
                <div className="centered-button">
                  {isConnected && isFormValid ? (
                    <button onClick={handleFormValidation}>
                      Send Transaction
                    </button>
                  ) : isConnected && !isFormValid ? (
                    <button onClick={handleFormValidation}>
                      {validationError}
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
            </>
          )}
        </div>
      </div>
    </div>
  );
};
