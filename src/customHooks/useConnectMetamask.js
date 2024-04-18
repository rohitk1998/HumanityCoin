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
        // Connect to the Ethereum network using ethers.js
        const web3Instance = new Web3Provider(ethereum);
        const signer = web3Instance.getSigner();

        // etherjs intance to intract with the contract
        const newContractInstance = new ethers.Contract(
          contractAddress,
          MigratorAndFeeDistributorABI,
          signer
        );
        setContractInstance(newContractInstance);

        // humanity coin contract instance
        const HumanityCoinContractInstance = new ethers.Contract(
          humanityCoinContractAddress,
          HumanityCoinABI,
          signer
        );
        // console.log('HUMANITY CONTRACT ', HumanityCoinContractInstance);
        setHumanityCoinContractInstance(HumanityCoinContractInstance);

        const tokenAContractInstance = new ethers.Contract(
          tokenA,
          HumanityCoinABI,
          signer
        );
        // console.log('TOKEN A CONTRACT ', tokenAContractInstance);
        setTokenAContractInstance(tokenAContractInstance);

        // Create a contract instance
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
        console.log('TOKEN B CONTRACT ', tokenBContractInstance);
        setTokenBContractInstance(tokenBContractInstance);

        const factoryContractInstance = new ethers.Contract(
          uniswapFactoryAddress,
          Factory,
          signer
        );

        setFactoryContractInstance(factoryContractInstance);

        // Define the configureTaxAndSwap function
        // const configureTaxAndSwap = async () => {
        //   try {
        //     // Assuming configureTaxAndSwap is a transaction and not a call
        //     const tx = await newContractInstance.configureTaxAndSwap(3000, 3000, 4000);
        //     const receipt = await tx.hash
        //     console.log('configureTaxAndSwap transaction receipt:', receipt);
        //   } catch (error) {
        //     console.error('Error sending configureTaxAndSwap transaction:', error);
        //   }
        // };

        // Call the configureTaxAndSwap function
        // await configureTaxAndSwap();

        // Define the swapTriggerPercentage function
        const getSwapTriggerPercentage = async () => {
          try {
            // Assuming swapTriggerPercentage is a call and not a transaction
            const result = await newContractInstance.swapTriggerPercentage();
            console.log('swapTriggerPercentage:', Number(result));
          } catch (error) {
            console.error('Error calling swapTriggerPercentage:', error);
          }
        };

        // Call the swapTriggerPercentage function
        // await getSwapTriggerPercentage();

        const getPurchaseTaxPercentage = async () => {
          try {
            // Assuming swapTriggerPercentage is a call and not a transaction
            const result = await newContractInstance.purchaseTaxPercentage();
            console.log('purchaseTaxPercentage:', Number(result));
          } catch (error) {
            console.error('Error calling purchaseTaxPercentage:', error);
          }
        };

        // Call the swapTriggerPercentage function
        // await getPurchaseTaxPercentage();

        const getSalesTaxPercentage = async () => {
          try {
            // Assuming swapTriggerPercentage is a call and not a transaction
            const result = await newContractInstance.salesTaxPercentage();
            console.log('salesTaxPercentage:', Number(result));
          } catch (error) {
            console.error('Error calling salesTaxPercentage', error);
          }
        };

        // Call the swapTriggerPercentage function
        // await getSalesTaxPercentage();

        // Define the configureAddresses function
        const configureAddresses = async () => {
          try {
            // Assuming configureAddresses is a transaction and not a call
            const tx = await newContractInstance.configureAddresses(
              '0x166C8C7Add5Fd70bbd1Eaf1E811f362CA726470A',
              '0x18ad99E72501baaEa6d6170ee02F451B158DCE68',
              '0xe3242844a25CB909db3f4eBb99Bd6BFBA2f61B94'
            );
            const receipt = await tx.wait();
            console.log('configureAddresses transaction receipt:', receipt);
          } catch (error) {
            console.error(
              'Error sending configureAddresses transaction:',
              error
            );
          }
        };

        // Call the configureAddresses function
        // await configureAddresses();

        // Define the swapTriggerPercentage function
        const getSwapTrigger = async () => {
          try {
            // Assuming swapTriggerPercentage is a call and not a transaction
            const result = await newContractInstance.swapTrigger();
            console.log('swapTrigger:', result);
          } catch (error) {
            console.error('Error calling swapTrigger:', error);
          }
        };

        // Call the swapTriggerPercentage function
        // await getSwapTrigger();

        const getPurchaseTax = async () => {
          try {
            // Assuming swapTriggerPercentage is a call and not a transaction
            const result = await newContractInstance.purchaseTax();
            console.log('purchaseTax:', result);
          } catch (error) {
            console.error('Error calling purchaseTax:', error);
          }
        };

        // Call the swapTriggerPercentage function
        // await getPurchaseTax();

        const getSalesTax = async () => {
          try {
            // Assuming swapTriggerPercentage is a call and not a transaction
            const result = await newContractInstance.salesTax();
            console.log('salesTax:', result);
          } catch (error) {
            console.error('Error calling salesTax', error);
          }
        };

        // Call the swapTriggerPercentage function
        // await getSalesTax();
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
