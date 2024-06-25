import { useSelector } from 'react-redux';

const { useState, useEffect } = require('react');
const Web3 = require('web3');
const ethers = require('ethers');
const { Web3Provider } = require('@ethersproject/providers');

const { ethereum } = window;

const txResult = ['success', 'failed', 'none'];

export const useTransactionResult = () => {
  const { isConnected } = useSelector((state)=> state.app)
  const [transactionResult, setTransactionResult] = useState(txResult[2]);
  const [txnHash, setTxnHash] = useState(undefined);

  const fetchResult = async () => {
    try {
      if (ethereum && txnHash && isConnected ) {
        const provider = new ethers.JsonRpcProvider('https://rpc.sepolia.org');
        // Get the number of confirmations
        console.log('provider', provider, txnHash);
        const txReceipt = await provider.getTransactionReceipt(
          txnHash.toString()
        );
        console.log('txReceipt', txReceipt);
        const isSuccessful = txReceipt.status;
        console.log('isSuccessful:', isSuccessful);

        if (isSuccessful) {
          console.log('Transaction succeeded');
          setTransactionResult(txResult[0]);
        } else {
          console.log('Transaction failed');
          setTransactionResult(txResult[1]);
        }
        setTxnHash(undefined);
      }
    } catch (error) {
      console.log('Error while finding txn reciept:', error);
      console.log('Transaction failed');
      setTransactionResult(txResult[1]);
    }
  };

  useEffect(() => {
    if (txnHash) {
      console.log('txnHash', txnHash);
      fetchResult();
    }
  }, [txnHash]);

  return {
    isCompleted: transactionResult,
    setIsCompleted: setTransactionResult,
    setTxnHash: setTxnHash,
  };
};
