import React, { useEffect, useState } from 'react';
import { Button } from 'antd';
import './LiquidyProvider.scss';
import Select from 'react-select';
import btc from '../../Assets/Images/btc.svg';
import { WalletIcon } from '../../Assets/Svg/Svg.jsx';
import eth from '../../Assets/Images/ethereumcoin.svg';
import { useWeb3Modal } from '@web3modal/wagmi/react';
import { useConnectMetamask } from '../../../customHooks/useConnectMetamask.js';
import { useSelector } from 'react-redux';
import { addZeroToDecimalinput, regex } from '../../../helpers/regex.js';

export const LiquidityForm = () => {
  const [selectedOption1, setSelectedOption1] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);
  const { isConnected } = useSelector((state) => state.app);
  const { open } = useWeb3Modal();
  const { tokenAContractInstance, routerInstance, tokenBContractInstance } =
    useConnectMetamask();

  const [amountTokenA, setAmountTokenA] = useState('');
  const [amountTokenB, setAmountTokenB] = useState('');
  const [isFormValid, setIsFormValid] = useState(true);
  const [validationError, setValidationError] = useState('');
  const [isSuccess, setSuccess] = useState(false);
  const [txnHash, setHash] = useState(false);

  const options = [
    {
      value: 'tokenA',
      label: (
        <p className="selectIcon">
          <img src={btc} alt="imgs" />
          Token A
        </p>
      ),
    },
    {
      value: 'tokenB',
      label: (
        <p className="selectIcon">
          <img src={eth} alt="imgs" />
          Token B
        </p>
      ),
    },
  ];

  useEffect(() => {
    setSelectedOption1(options[0]);
    setSelectedOption2(options[1]);
  }, []);

  const handleAddLiquidity = async () => {
    console.log('add liquidity ');
    const tokenA = tokenAContractInstance.target;
    const tokenB = tokenBContractInstance.target;
    console.log('tokenA', tokenA, 'tokenB', tokenB);
    const amountADesired = (
      Number(amountTokenA) * Number(1000000000000000000)
    ).toString();
    const amountBDesired = (
      Number(amountTokenA) * Number(1000000000000000000)
    ).toString();
    const router = routerInstance;
    const routerAddress = routerInstance.target;
    const amountAMin = '0';
    const amountBMin = '0';
    const to = '0x511c4d2B9FFF5431dd1Bc2Af336C74431c1668ba';
    const deadline = Math.floor(Date.now() / 1000) + 20 * 60;

    try {
      const isApprovedTokenA = await tokenAContractInstance.approve(
        routerAddress,
        amountADesired
      );
      console.log('contract approved for spending.', isApprovedTokenA);
      if (isApprovedTokenA) {
        const isApprovedTokenB = await tokenBContractInstance.approve(
          routerAddress,
          amountBDesired
        );
        if (isApprovedTokenB) {
          const tx = await router.addLiquidity(
            tokenA,
            tokenB,
            amountADesired,
            amountBDesired,
            amountAMin,
            amountBMin,
            to,
            deadline,
            { gasLimit: '2000000' }
          );
          console.log('Transaction hash:', tx.hash);
          if (tx.hash) {
            setSuccess(true);
          }
        }
      } else {
        console.log('Failed To Approve Txn');
        throw new Error('Failed To Approve Txn');
      }
    } catch (error) {
      console.error('ERROR WHILE ADDING LIQUIDITY:', error);
    }
  };

  const handleFormValidation = () => {
    if (amountTokenA == '' || amountTokenB == '') {
      setValidationError('Enter Amount');
      setIsFormValid(false);
    } else {
      setValidationError('');
      setIsFormValid(true);
      handleAddLiquidity();
    }
  };

  const HandleInputchange = (value, stateFn) => {
    let isValid = true;
    let inputVal = addZeroToDecimalinput(value);
    if (inputVal === '' || regex(8).test(inputVal)) {
      stateFn(inputVal);
    }
    if (inputVal === '') {
      isValid = false;
    }
    setIsFormValid(isValid);
  };

  const handleOption1Change = (value) => {
    if (value.value === selectedOption2.value) {
      setSelectedOption2(selectedOption1);
      setSelectedOption1(value);
    } else {
      setSelectedOption1(value);
    }
  };

  const handleOption2Change = (value) => {
    if (value.value === selectedOption1.value) {
      setSelectedOption1(selectedOption2);
      setSelectedOption2(value);
    } else {
      setSelectedOption2(value);
    }
  };

  return (
    <div className="AddLeqSec">
      <div className="addLiq">
      <div className="containerAdLiq">
          <div className="createNewPool">
            {/* <img src={backicon} alt="imgs" /> */}
            <div>
              <h3>Add Liquidity</h3>
              <p>Add liquidity to create pools.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="containerAdLiq">
        {/* <div className="addLiqbottomSec">
          <div className="leftdata">
            <h4>Network</h4>
            <p>Select the network you would like to provide liquidity on.</p>
          </div>
          <div className="rightdata">
            <div className="topSelect selectItm">
              <Select
                value={selectedOption1}
                onChange={setSelectedOption1}
                options={options}
              />
            </div>
          </div>
        </div> */}
        <div className="addLiqbottomSec">
          <div className="leftdata">
            <h4>Tokens</h4>
            <p>Which token pair would you like to add liquidity to.</p>
          </div>
          <div className="right">
            <div className="topSelect" style={{ display: 'flex', gap: '20px' }}>
              <Select
                value={selectedOption1}
                onChange={(value) => {
                  handleOption1Change(value);
                }}
                options={options}
              />
              <Select
                value={selectedOption2}
                onChange={(value) => handleOption2Change(value)}
                options={options}
              />
            </div>
          </div>
        </div>
        <div className="addLiqbottomSec">
          <div className="leftdata">
            <h4>Deposit</h4>
            <p>Select the amount of tokens you want to deposit</p>
          </div>
          <div className="right">
            <div className="ethDiv">
              <div className="ethfirst">
                <h4>0.0</h4>
                <Select
                  value={selectedOption1}
                  onChange={(value) => {
                    handleOption1Change(value);
                  }}
                  options={options}
                />
              </div>
              <div className="ethsecond">
                <input
                  value={amountTokenA}
                  onChange={(event) => {
                    HandleInputchange(event.target.value, setAmountTokenA);
                  }}
                  placeholder="Enter amount"
                />
                <h4>
                  <WalletIcon />
                  0.<span>00</span>
                </h4>
              </div>
            </div>
            <div className="ethDiv">
              <div className="ethfirst">
                <h4>0.0</h4>
                <Select
                  value={selectedOption2}
                  onChange={(value) => handleOption2Change(value)}
                  options={options}
                />
              </div>
              <div className="ethsecond">
                <input
                  value={amountTokenB}
                  onChange={(event) => {
                    HandleInputchange(event.target.value, setAmountTokenB);
                  }}
                  placeholder="Enter amount"
                />
                <h4>
                  <WalletIcon />
                  0.<span>00</span>
                </h4>
              </div>
            </div>
            <Button type="dark" className="plusBtn">
              +
            </Button>
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
          </div>
        </div>
      </div>
    </div>
  );
};
