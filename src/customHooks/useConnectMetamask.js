import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import Web3 from 'web3';
import MigratorAndFeeDistributorAbi from '../abi/MigratorAndFeeDistributor.json';

const MigratorAndFeeDistributorABI = MigratorAndFeeDistributorAbi.abi;
const contractAddress = '0xe3F4D10D1FC71fC4FD93534E0991bD79C63C8C1E';

export const useConnectMetamask = () => {
  const { ethereum } = window;
  const [ethInstance, setEthInstance] = useState(null);
  const [contractInstance, setContractInstance] = useState(null);
  const [account, setAccount] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');


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
          contractAddress
        );

        console.log('contractInstance', contractInstance);

        console.log(await contractInstance.methods.addTokensToMigrationReserve(10).call());

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


  useEffect(()=>{
    connect();
  },[])

  const disconnect = async () => {
    setEthInstance(null);
    setAccount(null);
    setErrorMessage('');
  };

  return [
    ethInstance,
    account,
    errorMessage,
    disconnect,
    contractInstance,
  ];
};
