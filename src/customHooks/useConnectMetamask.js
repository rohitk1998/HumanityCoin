import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import Web3 from 'web3';
import MigratorAndFeeDistributorAbi from '../abi/MigratorAndFeeDistributor.json';

const MigratorAndFeeDistributorABI = MigratorAndFeeDistributorAbi.abi;

export const useConnectMetamask = () => {
  const { ethereum } = window;
  const [ethInstance, setEthInstance] = useState(null);
  const [contractInstance, setContractInstance] = useState(null);
  const [account, setAccount] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [isEthInstanceActive, setIsEthInstanceActive] = useState(false);

  useEffect(() => {
    if (isEthInstanceActive) {
      connect();
    } else if (!isEthInstanceActive) {
      disconnect();
    }
  }, [isEthInstanceActive]);

  const connect = async () => {
    if (ethereum) {
      try {
        const provider = new ethers.BrowserProvider(ethereum);
        const web3Instance = new Web3(window.web3.currentProvider);
        const chainId = await ethereum?.networkVersion;
        console.log('ETH PROVIDER', provider, 'CHAIN ID', chainId);

        const signer = await provider.getSigner();

        const contractInstance = new web3Instance.eth.Contract(
          MigratorAndFeeDistributorABI,
          '0x97B537Cc74cb6C00bd7de77fC8f26E2E2E6ca7A9'
        );

        console.log('contractInstance', contractInstance);

        console.log(await contractInstance.swapTriggerPercentage());

        setContractInstance(contractInstance);
        setEthInstance({
          provider: provider,
          signer: signer,
        });

        const walletAddress = await signer.getAddress();
        setAccount(walletAddress);
      } catch (err) {
        setErrorMessage('Connection failed. Please try again.');
        console.error('Connection error:', err);
      }
    } else {
      alert('Please install metamask');
    }
  };

  const disconnect = async () => {
    setIsEthInstanceActive(false);
    setEthInstance(null);
    setAccount(null);
    setErrorMessage('');
  };

  return [
    ethInstance,
    account,
    errorMessage,
    setIsEthInstanceActive,
    isEthInstanceActive,
    disconnect,
    contractInstance,
  ];
};
