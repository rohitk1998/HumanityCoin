import { useEffect, useState } from 'react';
import MigratorAndFeeDistributorAbi from '../abi/MigratorAndFeeDistributor.json';
import HumanityCoinABIs from '../abi/HumanityCoin.json';
import RouterABIs from '../abi/Router.json';
import FactoryABI from '../abi/Factory.json';

const MigratorAndFeeDistributorABI = MigratorAndFeeDistributorAbi.abi;

const HumanityCoinABI = HumanityCoinABIs.abi;

const Router = RouterABIs.abi;

const Factory = FactoryABI.abi;

// vivek addresses
// const contractAddress = '0xfb7B2834e60cEFa405B4FaaaF7eA53dCD8502dfB';
// const humanityCoinContractAddress ='0xd1A1fb1f2793692ce3FedDb3c52BA8Ec28DF06B3';
// const routerAddress = '0x27666673fBEff1F2cdbF43bB9161C4e632A67d5f';
// const uniswapFactoryAddress = '0xB660dfc03C3387Bffc8F57dE88C697EbAbBD8D7C';
// const tokenA = '0x2F1412b1003c353FcB95e9657135993f768FE7dA';
// const tokenB = '0xd1A1fb1f2793692ce3FedDb3c52BA8Ec28DF06B3';

//mine addresses
// const contractAddress = '0xe3F4D10D1FC71fC4FD93534E0991bD79C63C8C1E';
// const humanityCoinContractAddress ='0x63F7ef35cBB61390C3eD12D66CF3DF8E0A8f3F2e';
// const routerAddress = '0x2704b2c3F0AF48EF36cB26B622E16A2436Fc595f';
// const uniswapFactoryAddress = '0xfd46f5068eF9e74150Ea2653f64D64cB029Fa8E7';
// const tokenA = '0x17102168C2Fc61A0b66D22A2Ab30d38c975218cb';
// const tokenB = '0x63F7ef35cBB61390C3eD12D66CF3DF8E0A8f3F2e';

//ravi addresses
const contractAddress = '0x2b3F91d87D1d173206cB5B96763Cc76F868B63d0';
const humanityCoinContractAddress ='0x712EE3f1792b6C841b049c35f46B2A49367Bf9E6';
const routerAddress = '0xc4124f18D6cAfC6cE4D4A5c414216D6D3B28f0a6';
const uniswapFactoryAddress = '0xF5e0eAfC58a167A25C15eb300c160c055e3761EF';
const tokenA = '0xEeA46983aA351759202a5F5f502Df3399e7fd9A1';
const tokenB = '0x712EE3f1792b6C841b049c35f46B2A49367Bf9E6';

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
