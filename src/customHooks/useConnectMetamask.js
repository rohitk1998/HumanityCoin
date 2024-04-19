import { useEffect, useState } from 'react';
import MigratorAndFeeDistributorAbi from '../abi/MigratorAndFeeDistributor.json';
import HumanityCoinABIs from '../abi/HumanityCoin.json';
import RouterABIs from '../abi/Router.json';
import FactoryABI from '../abi/Factory.json';

const MigratorAndFeeDistributorABI = MigratorAndFeeDistributorAbi.abi;

const HumanityCoinABI = HumanityCoinABIs.abi;

const Router = RouterABIs.abi;

const Factory = FactoryABI.abi;

const contractAddress = '0xfb7B2834e60cEFa405B4FaaaF7eA53dCD8502dfB';

// const humanityCoinContractAddress =
//   '0xd1A1fb1f2793692ce3FedDb3c52BA8Ec28DF06B3';
const humanityCoinContractAddress =
  '0xd1A1fb1f2793692ce3FedDb3c52BA8Ec28DF06B3';

const routerAddress = '0x27666673fBEff1F2cdbF43bB9161C4e632A67d5f';

const uniswapFactoryAddress = '0xB660dfc03C3387Bffc8F57dE88C697EbAbBD8D7C';

// // Token addresses
const tokenA = '0x2F1412b1003c353FcB95e9657135993f768FE7dA';
const tokenB = '0xd1A1fb1f2793692ce3FedDb3c52BA8Ec28DF06B3';

const ethers = require('ethers');
const { Web3Provider } = require('@ethersproject/providers');

export const useConnectMetamask = () => {
  const { ethereum } = window;

  const [contractInstance, setContractInstance] = useState(null);
  const [humanityCoinContractInstance, setHumanityCoinContractInstance] =
    useState(null);
  const [tokenAContractInstance, setTokenAContractInstance] = useState(null);
  const [routerContractInstance, setRouterContractInstance] = useState(null);
  const [tokenBContractInstance, setTokenBContractInstance] = useState(null);
  const [factoryContractInstance, setFactoryContractInstance] = useState(null);

  const connect = async () => {
    console.log('CONNECT FUNCTION IS WORKING');
    if (ethereum) {
      try {
        const web3Instance = new Web3Provider(ethereum);
        const signer = web3Instance.getSigner();

        const newContractInstance = new ethers.Contract(
          contractAddress,
          MigratorAndFeeDistributorABI,
          signer
        );
        setContractInstance(newContractInstance);

        const HumanityCoinContractInstance = new ethers.Contract(
          humanityCoinContractAddress,
          HumanityCoinABI,
          signer
        );
        setHumanityCoinContractInstance(HumanityCoinContractInstance);

        const tokenAContractInstance = new ethers.Contract(
          tokenA,
          HumanityCoinABI,
          signer
        );
        setTokenAContractInstance(tokenAContractInstance);

        const routerContract = new ethers.Contract(
          routerAddress,
          Router,
          signer
        );

        setRouterContractInstance(routerContract);

        const tokenBContractInstance = new ethers.Contract(
          tokenB,
          HumanityCoinABI,
          signer
        );
        setTokenBContractInstance(tokenBContractInstance);

        const factoryContractInstance = new ethers.Contract(
          uniswapFactoryAddress,
          Factory,
          signer
        );

        setFactoryContractInstance(factoryContractInstance);
      } catch (error) {
        console.error('Connection error:', error);
      }
    } else {
      console.log(
        'Ethereum object not found, make sure you have a web3 provider.'
      );
    }
  };

  useEffect(() => {
    connect();
  }, []);

  return {
    contractInstance: contractInstance,
    humanityCoinContractInstance: humanityCoinContractInstance,
    tokenAContractInstance: tokenAContractInstance,
    routerInstance: routerContractInstance,
    tokenBContractInstance: tokenBContractInstance,
    factoryContractInstance: factoryContractInstance,
  };
};
