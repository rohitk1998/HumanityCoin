import { useEffect, useState } from 'react';
import { useConnectMetamask } from '../../../customHooks/useConnectMetamask';
import { useSelector } from 'react-redux';
import { useWeb3Modal } from '@web3modal/wagmi/react';

export default function AddTokenToMigrateReseve({ isSelected }) {
  const { open } = useWeb3Modal();
  const { contractInstance, humanityCoinContractInstance } =
    useConnectMetamask();
  const { isConnected } = useSelector((state) => state.app);
  const [addToken, setAddToken] = useState({
    amount: '',
  });
  const [isFormValid, setIsFormValid] = useState(true);
  const [validationError, setValidationError] = useState('');
  const [isEdit, setIsEdit] = useState(false);
  const [isSuccess, setSuccess] = useState(false);
  const [txnHash, setHash] = useState(false);

  const handleInputChange = (event) => {
    console.log('event', event.target.value);
    addToken[event.target.id] = event.target.value;
    setAddToken({ ...addToken });
  };

  async function approveHumanityCoin() {
    try {
      const migrateContractAddress = contractInstance.target;
      console.log('migrateContractAddress', migrateContractAddress, humanityCoinContractInstance);
      // Approve pair contract to spend LP tokens
    //   const txMint = await humanityCoinContractInstance.mint(
    //     '0x511c4d2B9FFF5431dd1Bc2Af336C74431c1668ba',
    //     '10000000000000000000000',
    //     { gasLimit: '2000000' }
    //   );
    //   console.log('txMint',txMint);
      const txApprove = await humanityCoinContractInstance?.approve(
        migrateContractAddress,
        '10000000000000000000000',
        { gasLimit: '2000000' }
      );
      console.log('txApprove',txApprove);
    //   console.log('MIGRATE contract approved for spending Humanity Coins.');
    } catch (error) {
      console.error('Error approving pair contract:', error);
    }
  }

  const handleSubmit = async () => {
    const { amount } = addToken;
    let receipt;
    if (amount === '') {
      setIsFormValid(false);
      setValidationError('Enter Amount');
    } else {
      setIsFormValid(true);
      try {
        console.log('DATA ON SUBMISSION', addToken , '100000000000000000000'.length);
        // await approveHumanityCoin();
        const tx = await contractInstance?.addTokensToMigrationReserve('100000000000000000000', {
          gasLimit: '2000000',
        });
        console.log('tx', tx);
        if (tx !== null && tx !== undefined) {
          receipt = tx.hash;
          console.log('migrate transaction receipt:', receipt);
          if (receipt) {
            setHash(receipt);
            setSuccess(true);
          }
        }

        // console.log(
        //   'Add token to migrate reserve transaction receipt:',
        //   receipt
        // );
      } catch (error) {
        console.log('error in configuring addresses', error);
      }
    }
  };

  useEffect(() => {
    setFormData();
    return () => {
      setAddToken({
        amount: '',
      });
      setIsEdit(false);
      setValidationError('');
      setIsFormValid(true);
    };
  }, [contractInstance]);

  useEffect(() => {
    console.log('humanityCoinContractInstance', humanityCoinContractInstance);
  }, [humanityCoinContractInstance]);

  const setFormData = async () => {
    if (contractInstance !== null && contractInstance !== 'null') {
      console.log('contractInstance', contractInstance);

      const amount = await contractInstance.migrationReserve();

      addToken['amount'] = amount.toString();

      console.log('addToken', addToken);

      setAddToken(addToken);
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
        <label htmlFor="amount">Migrate Reserve Amount</label>
        <input
          type="text"
          id="amount"
          placeholder="Enter amount"
          value={addToken.amount}
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
