import { useEffect, useState } from 'react';
import { useConnectMetamask } from '../../../customHooks/useConnectMetamask';
import { useSelector } from 'react-redux';
import { useWeb3Modal } from '@web3modal/wagmi/react';

export default function HMNTokenAddress({ isSelected }) {
  const { open } = useWeb3Modal();
  const { contractInstance } = useConnectMetamask();
  const { isConnected } = useSelector((state) => state.app);
  const [HMN_Token, setHMN_Token] = useState({
    oldTokenAddress: '',
    newTokenAddress: '',
  });
  const [isFormValid, setIsFormValid] = useState(true);
  const [validationError, setValidationError] = useState('');
  const [isEdit, setIsEdit] = useState(false);

  const handleInputChange = (event) => {
    console.log('event', event.target.value);
    HMN_Token[event.target.id] = event.target.value;
    setHMN_Token({ ...HMN_Token });
  };

  const handleSubmit = async () => {
    const { oldTokenAddress, newTokenAddress } = HMN_Token;

    if (oldTokenAddress === '' || newTokenAddress === '') {
      setIsFormValid(false);
      setValidationError('Enter Address');
    } else {
      setIsFormValid(true);
      try {
        console.log(
          'DATA ON SUBMISSION',
          HMN_Token
        );
        const tx = await contractInstance.setHMNTokensAddresses('' , '');
        console.log('tx', tx);
        const receipt = await tx.hash();
        console.log('set HMN token address transaction receipt:', receipt);
      } catch (error) {
        console.log('error in configuring addresses', error);
      }
    }
  };

  useEffect(() => {
    setFormData();
    return () => {
      setHMN_Token({
        oldTokenAddress: '',
        newTokenAddress: '',
      });
      setIsEdit(false);
      setValidationError('');
      setIsFormValid(true);
    };
  }, [contractInstance]);

  const setFormData = async () => {
    if (contractInstance !== null && contractInstance !== 'null') {
      console.log('contractInstance', contractInstance);

      const oldTokenAddress = await contractInstance.oldHMNToken();

      const newTokenAddress = await contractInstance.newHMNToken();

      HMN_Token['oldTokenAddress'] = oldTokenAddress

      HMN_Token['newTokenAddress'] = newTokenAddress

      console.log('HMN_Token', HMN_Token);

      setHMN_Token(HMN_Token);
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
        <label htmlFor="oldTokenAddress">Old HMN Token</label>
        <input
          type="text"
          id="oldTokenAddress"
          placeholder="address"
          value={HMN_Token.oldTokenAddress}
          onChange={(event) => {
            handleInputChange(event);
          }}
          disabled={!isEdit}
        />
      </div>
      <div className="input-row">
        <label htmlFor="newTokenAddress">New HMN Token</label>
        <input
          type="text"
          id="newTokenAddress"
          placeholder="address"
          value={HMN_Token.newTokenAddress}
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
  );
}
