import React, { useEffect, useState } from 'react';
import './migrate.scss';
import { Button } from 'antd';
import { addZeroToDecimalinput, regex } from '../../../helpers/regex';
import { useSelector } from 'react-redux';
import { useWeb3Modal } from '@web3modal/wagmi/react';

export default function Migrate() {
  const { isConnected } = useSelector((state) => state.app);
  const { open } = useWeb3Modal();
  const [amount, setAmount] = useState(null);
  const [isFormValid, setIsFormValid] = useState(true);

  const HandleInputchange = (event) => {
    let isValid = true;
    console.log('handle input change', event.target.value);
    let inputVal = addZeroToDecimalinput(event.target.value);
    if (inputVal === '' || regex(10).test(inputVal)) {
      setAmount(inputVal);
    }
    if (inputVal === '') {
      isValid = false;
    }
    setIsFormValid(isValid);
  };

  const handleMigrateToken = () => {
    console.log('MIGRATE TOKENS');
  };

  useEffect(() => {
    return () => {
      setAmount('');
      setIsFormValid(true);
    };
  }, []);

  return (
    <div className="migrate">
      <div className="migrateCenter">
        <h2 className="migrateHeading">
          Out with the Old HMN, In with the New HMN
        </h2>
        <div className="migrateForm">
          <input
            className="migrateInput"
            type="text"
            id="input3"
            placeholder="Enter Amount"
            value={amount}
            onChange={(event) => {
              HandleInputchange(event);
            }}
          />
          <Button
            style={{
              backgroundColor: 'rgb(49, 28, 49) ',
              color: 'rgb(252, 114, 255)',
            }}
            block
            className="connectbtn"
            onClick={() => {
              if (isConnected && isFormValid) {
                handleMigrateToken();
              } else if (isConnected && !isFormValid) {
                console.log('NOTHING TO DO');
              } else {
                open();
              }
            }}
          >
            {isConnected && isFormValid
              ? 'Migrate'
              : isConnected && !isFormValid
              ? 'Enter Amount To Migrate'
              : 'Connect Wallet'}
          </Button>
        </div>
      </div>
      <div className='migrateContext'>
        <p>
        We are excited to announce a new feature that lets you leverage your existing HMN tokens! As we move forward, we've introduced new HMN tokens with enhanced functionality. To ensure a smooth transition, we're offering you the chance to easily exchange your old HMN tokens for the new ones. This gives you the freedom to continue utilizing your HMN holdings and be part of the exciting future we are building. Don't miss this opportunity to upgrade your HMN experience!
        </p>
      </div>
    </div>
  );
}
