const { useState, useEffect } = require('react');
const Web3 = require('web3');
const ethers = require('ethers');
const { Web3Provider } = require('@ethersproject/providers');

const { ethereum } = window;

const provider = new ethers.JsonRpcProvider(
  'https://rpc.sepolia.org'
);

export const useTransactionResult = () => {
  const [transactionResult, setTransactionResult] = useState(false);
  const [txnHash, setTxnHash] = useState(undefined);

  const fetchResult = async () => {
    try {
      if (ethereum && txnHash) {
        // Get the number of confirmations
        console.log('provider',provider , txnHash);
        const txReceipt = await provider.getTransactionReceipt(txnHash.toString());
        console.log('txReceipt',txReceipt);
        const isSuccessful = txReceipt.status;
        console.log('isSuccessful:', isSuccessful);
        
            if (isSuccessful) {
              console.log('Transaction succeeded');
              setTransactionResult(true)
            } else {
              console.log('Transaction failed');
              setTransactionResult(false);
            }
            setTxnHash(undefined);
      }
    } catch (error) {
      console.log('Error while finding txn reciept:',error);
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
    setIsCompleted:setTransactionResult,
    setTxnHash: setTxnHash,
  };
};