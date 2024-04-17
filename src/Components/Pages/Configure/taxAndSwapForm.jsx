import { useEffect, useState } from 'react';
import { useConnectMetamask } from '../../../customHooks/useConnectMetamask';
import { useSelector } from 'react-redux';
import { useWeb3Modal } from '@web3modal/wagmi/react';

export default function TaxAndSwapForm() {
  const { open } = useWeb3Modal();
  const { contractInstance } = useConnectMetamask();
  const { isConnected } = useSelector((state) => state?.app);
  const [configureAddress, setConfigureAddress] = useState({
    _swapTrigger: '',
    _purchaseTax: '',
    _salesTax: '',
  });
  const [isFormValid, setIsFormValid] = useState(true);
  const [validationError, setValidationError] = useState('');
  const [isEdit, setIsEdit] = useState(false);

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
          '(Number(_swapTrigger) * 1000000 )',
          Number(_swapTrigger) * 1000000
        );
        const tx = await contractInstance?.configureTaxAndSwap(
          3000,
          3000,
          4000
        );
        console.log('tx', tx);
        const receipt = tx.hash;
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

      const _swapTrigger = await contractInstance?.swapTriggerPercentage();

      const _purchaseTax = await contractInstance?.purchaseTaxPercentage();
      const _salesTax = await contractInstance?.salesTaxPercentage();

      configureAddress['_swapTrigger'] = (
        Number(_swapTrigger) / 1000000
      ).toString();

      configureAddress['_purchaseTax'] = (
        Number(_purchaseTax) / 1000000
      ).toString();

      configureAddress['_salesTax'] = (Number(_salesTax) / 1000000).toString();

      console.log('configureAddress', configureAddress);

      setConfigureAddress(configureAddress);
    }
  };

  return (
    <>
      <div className="containerAdLiq">
        <div className="addLiqbottomSec">
          <div className="leftdata">
            <h4>Configure Swap Purchase Sales Settings</h4>
            <p>Configure your swap amount, purchase amount, sales amount</p>
          </div>
        </div>
        <br/>
        <hr/>
        <div className="addLiqbottomSec">
          <div className="leftdata">
            <h4>Configure Amount</h4>
            <p>Enter three amount to configure Swap Tax, Purchase Tax,Sales Tax</p>
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
                  placeholder="Enter amount"
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
                  placeholder="Enter amount"
                  value={configureAddress?._purchaseTax}
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
                  placeholder="Enter amount"
                  value={configureAddress?._salesTax}
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
    </>
  );
}
