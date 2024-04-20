import { useEffect, useState } from 'react';
import { useConnectMetamask } from '../../../customHooks/useConnectMetamask';
import { useSelector } from 'react-redux';
import { useWeb3Modal } from '@web3modal/wagmi/react';

export default function ConfigureAddressForm({ isSelected }) {
  const { open } = useWeb3Modal();
  const { contractInstance } = useConnectMetamask();
  const { isConnected } = useSelector((state) => state.app);
  const [configureAddress, setConfigureAddress] = useState({
    _swapTrigger: '',
    _purchaseTax: '',
    _salesTax: '',
  });
  const [isFormValid, setIsFormValid] = useState(true);
  const [validationError, setValidationError] = useState('');
  const [isEdit, setIsEdit] = useState(false);
  const [isSuccess, setSuccess] = useState(false);
  const [txnHash, setHash] = useState(false);

  const handleInputChange = (event) => {
    console.log('event', event.target.value);
    configureAddress[event.target.id] = event.target.value;
    setConfigureAddress({ ...configureAddress });
  };

  const handleSubmit = async () => {
    const { _swapTrigger, _salesTax, _purchaseTax } = configureAddress;

    if (_swapTrigger === '' || _salesTax === '' || _purchaseTax === '') {
      setIsFormValid(false);
      setValidationError('Enter Address');
    } else {
      setIsFormValid(true);
      try {
        console.log(
          'DATA ON SUBMISSION',
          configureAddress,
          'await contractInstance.swapTrigger()',
          await contractInstance.swapTrigger()
        );
        const tx = await contractInstance.configureAddresses(
          _swapTrigger,
          _purchaseTax,
          _salesTax
        );
        console.log('tx', tx);
        const receipt = tx?.hash;
        if (receipt) {
          setHash(receipt);
          setSuccess(true);
        }
        console.log('configureAddresses transaction receipt:', receipt);
      } catch (error) {
        console.log('error in configuring addresses', error);
      }
    }
  };

  useEffect(() => {
    setFormData();
    return () => {
      setConfigureAddress({
        _swapTrigger: '',
        _purchaseTax: '',
        _salesTax: '',
      });
      setIsEdit(false);
      setValidationError('');
      setIsFormValid(true);
    };
  }, [contractInstance]);

  const setFormData = async () => {
    if (contractInstance !== null && contractInstance !== 'null') {
      console.log('contractInstance', contractInstance);

      const _swapTrigger = await contractInstance.swapTrigger();

      const _purchaseTax = await contractInstance.purchaseTax();
      const _salesTax = await contractInstance.salesTax();

      configureAddress['_swapTrigger'] = _swapTrigger;

      configureAddress['_purchaseTax'] = _purchaseTax;

      configureAddress['_salesTax'] = _salesTax;

      console.log('configureAddress', configureAddress);

      setConfigureAddress(configureAddress);
    }
  };

  if (isSuccess) {
    setTimeout(() => {
      setSuccess(false);
    }, 3000);
    return (
      <div className="form-container">
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
    <div className="containerAdLiq">
      <div className="addLiqbottomSec">
        <div className="leftdata">
          <h4>Configure Swap Purchase Sales Settings</h4>
          <p>Configure your swap, purchase, sales tax addresses</p>
        </div>
      </div>
      <br />
      <hr />
      <div className="addLiqbottomSec">
        <div className="leftdata">
          <h4>Configure Address</h4>
          <p>
            Enter three address to configure Swap Tax, Purchase Tax,Sales Tax
          </p>
        </div>
        <div className="right">
          <div className="form-container">
            {!isEdit ? (
              <div className="editContainer">
                <button
                  onClick={() => {
                    setIsEdit(true);
                  }}
                >
                  edit
                </button>
              </div>
            ) : (
              <div className="editContainer">
                <button
                  onClick={() => {
                    setIsEdit(false);
                  }}
                >
                  cancel
                </button>
              </div>
            )}
            <div className="input-row">
              <label htmlFor="_swapTrigger">Swap Trigger</label>
              <input
                type="text"
                id="_swapTrigger"
                placeholder="address"
                value={configureAddress._swapTrigger}
                onChange={(event) => {
                  handleInputChange(event);
                }}
                disabled={!isEdit}
              />
            </div>
            <div className="input-row">
              <label htmlFor="_purchaseTax">Purchase Tax</label>
              <input
                type="text"
                id="_purchaseTax"
                placeholder="address"
                value={configureAddress._purchaseTax}
                onChange={(event) => {
                  handleInputChange(event);
                }}
                disabled={!isEdit}
              />
            </div>
            <div className="input-row">
              <label htmlFor="_salesTax">Sales Tax</label>
              <input
                type="text"
                id="_salesTax"
                placeholder="address"
                value={configureAddress._salesTax}
                onChange={(event) => {
                  handleInputChange(event);
                }}
                disabled={!isEdit}
              />
            </div>
            {isEdit && (
              <div className="centered-button">
                {isConnected && isFormValid ? (
                  <button onClick={handleSubmit}>Send Transaction</button>
                ) : isConnected && !isFormValid ? (
                  <button onClick={handleSubmit}>{validationError}</button>
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
      </div>
    </div>
  );
}
