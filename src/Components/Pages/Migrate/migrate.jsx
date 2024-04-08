import React, { useEffect, useState } from 'react';
import './migrate.scss';
import { Button } from 'antd';
import { addZeroToDecimalinput, regex } from '../../../helpers/regex';
import { useSelector } from 'react-redux';
import { useWeb3Modal } from '@web3modal/wagmi/react';

export default function Migrate() {
  const { isConnected } = useSelector((state) => state.app);
  const { open } = useWeb3Modal();
  const [oldAmount, setOldAmount] = useState(null);
  const [newAmount, setNewAmount] = useState(null);
  const [isFormValid, setIsFormValid] = useState(true);

  const HandleInputchange = (event) => {
    let isValid = true;
    console.log('handle input change', event.target.value);
    let inputVal = addZeroToDecimalinput(event.target.value);
    if (inputVal === '' || regex(10).test(inputVal)) {
      setOldAmount(inputVal);
      // Calculate new amount based on the formula
      const newTokenAmount = (900000000 * parseFloat(inputVal)) / 1000000000000;
      setNewAmount(newTokenAmount.toFixed(4)); // Round to 2 decimal places
    }
    if (inputVal === '') {
      isValid = false;
    }
    setIsFormValid(isValid);
  };

  const handleMigrateToken = () => {
    console.log('MIGRATE TOKENS');
    // Here you can perform further actions related to migrating tokens
  };

  useEffect(() => {
    return () => {
      setOldAmount('');
      setNewAmount('');
      setIsFormValid(true);
    };
  }, []);

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
          <Button
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
