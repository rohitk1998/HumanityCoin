import { useEffect, useState } from 'react';
import { useConnectMetamask } from '../../../customHooks/useConnectMetamask';
import { useSelector } from 'react-redux';
import { useWeb3Modal } from '@web3modal/wagmi/react';

export default function HMNTokenAddress({ isSelected }) {
  const { open } = useWeb3Modal();
  const { contractInstance } = useConnectMetamask();
  const { isConnected } = useSelector((state) => state.app);
  const [HMN_Token, setHMN_Token] = useState({
    _newHMNToken: '',
    _oldHMNToken: '',
  });
  const [isFormValid, setIsFormValid] = useState(true);
  const [validationError, setValidationError] = useState('');
  const [isEdit, setIsEdit] = useState(false);
  const [isSuccess, setSuccess] = useState(false);
  const [txnHash, setHash] = useState(false);

  const handleInputChange = (event) => {
    console.log('event', event.target.value);
    HMN_Token[event.target.id] = event.target.value;
    setHMN_Token({ ...HMN_Token });
  };

  const handleSubmit = async () => {
    const { _newHMNToken, _oldHMNToken } = HMN_Token;

    if (_newHMNToken === '' || _oldHMNToken === '') {
      setIsFormValid(false);
      setValidationError('Enter Address');
    } else {
      setIsFormValid(true);
      try {
        console.log(
          'DATA ON SUBMISSION',
          HMN_Token
        );
        const tx = await contractInstance.setHMNTokensAddresses(HMN_Token._newHMNToken , HMN_Token._oldHMNToken , {
          gasLimit: '2000000',
        });
        console.log('TRASACTION ON SET HMN TOKEN', tx);
        const receipt = await tx.hash;
        if(receipt){
          setHash(receipt)
          setSuccess(true);
        }
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
        _newHMNToken: '',
        _oldHMNToken: '',
      });
      setIsEdit(false);
      setValidationError('');
      setIsFormValid(true);
    };
  }, [contractInstance]);

  const setFormData = async () => {
    if (contractInstance !== null && contractInstance !== 'null') {
      console.log('contractInstance', contractInstance);

      const _newHMNToken = await contractInstance.newHMNToken();

      const _oldHMNToken = await contractInstance.oldHMNToken();

      HMN_Token['_newHMNToken'] = _newHMNToken

      HMN_Token['_oldHMNToken'] = _oldHMNToken

      console.log('HMN_Token', HMN_Token);

      setHMN_Token(HMN_Token);
    }
  };


  if (isSuccess) {
    setTimeout(() => {
      setSuccess(false);
    }, 3000);
    return (
      <div className="form-container">
        <div className='success-box'>
        <p>
          Successfully initiated the transaction !!
        </p>
        <button onClick={()=>{
          window.open(`https://sepolia.etherscan.io/tx/${txnHash}` , '_blank')
        }}>
        {txnHash.slice(0,40)}
        </button>
        </div>
      </div>
    );
  }

  return (
    <div className="containerAdLiq">
    <div className="addLiqbottomSec">
      <div className="leftdata">
        <h4>Change Token Address</h4>
        <p>Here change your old HMN to New One.</p>
      </div>
    </div>
    <br/>
        <hr/>
    <div className="addLiqbottomSec">
      <div className="leftdata">
        <h4>Enter Address To Change</h4>
        <p>Enter the new address and old address to change.</p>
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
        <label htmlFor="_newHMNToken">Old HMN Token</label>
        <input
          type="text"
          id="_newHMNToken"
          placeholder="address"
          value={HMN_Token._newHMNToken}
          onChange={(event) => {
            handleInputChange(event);
          }}
          disabled={!isEdit}
        />
      </div>
      <div className="input-row">
        <label htmlFor="_oldHMNToken">New HMN Token</label>
        <input
          type="text"
          id="_oldHMNToken"
          placeholder="address"
          value={HMN_Token._oldHMNToken}
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
