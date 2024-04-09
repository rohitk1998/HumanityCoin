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
  const [validationError, setValidationError] = useState(true);
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
          'await contractInstance.swapTrigger()',
          await contractInstance.swapTrigger()
        );
        const tx = await contractInstance.configureAddresses(
          _swapTrigger,
          _purchaseTax,
          _salesTax
        );
        console.log('tx', tx);
        const receipt = await tx.hash();
        console.log('configureAddresses transaction receipt:', receipt);
      } catch (error) {
        console.log('error in configuring addresses', error);
        // alert('error');/
      }
    }
  };

  useEffect(() => {
    if (contractInstance !== null) {
      setFormData();
    }
  }, [contractInstance]);

  useEffect(() => {
    console.log(configureAddress._swapTrigger);
  }, [configureAddress._swapTrigger]);

  const setFormData = async () => {
    if (contractInstance !== null) {
      console.log('contractInstance', contractInstance);
      const result = await contractInstance.swapTrigger();
      console.log('result', result);
      setConfigureAddress({
        _swapTrigger: await contractInstance.swapTrigger(),
        _purchaseTax: await contractInstance.purchaseTax(),
        _salesTax: await contractInstance.salesTax(),
      });
    }
  };

  return (
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
          disabled={true}
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
  );
}
