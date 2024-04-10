import { useEffect, useState } from 'react';
import MigratorAndFeeDistributorAbi from "../abi/MigratorAndFeeDistributor.json"
import HumanityCoinABIs from "../abi/HumanityCoin.json"

const MigratorAndFeeDistributorABI = MigratorAndFeeDistributorAbi.abi

const HumanityCoinABI = HumanityCoinABIs.abi

const ethers = require("ethers");
const { Web3Provider } = require('@ethersproject/providers');

export const useConnectMetamask = () => {
  const { ethereum } = window;
  const [ethInstance, setEthInstance] = useState(null);
  const [contractInstance, setContractInstance] = useState(null);
  const [humanityCoinContractInstance, setHumanityCoinContractInstance] = useState(null);
  const [tokenAContractInstance, setTokenAContractInstance] = useState(null);
  const [account, setAccount] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [isEthInstanceActive, setIsEthInstanceActive] = useState(false);
  // let platformWallet;
  // let recipient;
  // let investor1;
  // let investor2;


const connect = async () => {
  console.log('CONNECT FUNCTION IS WORKING' , Web3Provider);
  if (window.ethereum) {
    try {
      // Connect to the Ethereum network using ethers.js
      const web3Instance = new Web3Provider(window.ethereum);
      // const provider = new ethers.BrowserProvider(window.ethereum);


      // Get the signer from the provider
      const signer = web3Instance.getSigner();
      const signerAddress = await signer.getAddress();
      console.log("Signer address", signerAddress);

      // const web3Provider = new Web3Provider(window.ethereum);

      // const provider = new ethers.providers.Web3Provider(web3Provider);

      // Get the signer from the provider
      // console.log('chain list',await provider.getChains());

      // await provider.send("wallet_getEthereumChain")
      // .then((chainId) => {
      //   // Use chainId to determine the chain details
      //   console.log("Connected to chain with ID:", chainId);
      //   // You can use chainId to fetch chain details from your own mapping or a third-party service
      // })
      // .catch((error) => {
      //   console.error("Error fetching chain list:", error);
      // });

      // Define the contract address
      const contractAddress = '0x2b3F91d87D1d173206cB5B96763Cc76F868B63d0';

      const humanityCoinContractAddress = '0x712EE3f1792b6C841b049c35f46B2A49367Bf9E6'

      const tokenAContractAddress = '0xEeA46983aA351759202a5F5f502Df3399e7fd9A1'

      // Assuming `MigratorAndFeeDistributorABI` contains the ABI for your contract
      // Create an instance of the contract with ethers.js
      const newContractInstance = new ethers.Contract(contractAddress, MigratorAndFeeDistributorABI , signer);
      setContractInstance(newContractInstance)
      const HumanityCoinContractInstance = new ethers.Contract(humanityCoinContractAddress, HumanityCoinABI, signer)
      console.log('HUMANITY CONTRACT ',HumanityCoinContractInstance);
      setHumanityCoinContractInstance(HumanityCoinContractInstance)

      const tokenAContractInstance = new ethers.Contract(tokenAContractAddress, HumanityCoinABI, signer)
      console.log('TOKEN A CONTRACT ',tokenAContractInstance);
      setTokenAContractInstance(tokenAContractInstance)

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
          const tx = await newContractInstance.configureAddresses("0x166C8C7Add5Fd70bbd1Eaf1E811f362CA726470A", "0x18ad99E72501baaEa6d6170ee02F451B158DCE68", "0xe3242844a25CB909db3f4eBb99Bd6BFBA2f61B94");
          const receipt = await tx.wait();
          console.log('configureAddresses transaction receipt:', receipt);
        } catch (error) {
          console.error('Error sending configureAddresses transaction:', error);
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
    console.log('Ethereum object not found, make sure you have a web3 provider.');
  }
};


useEffect(()=>{
  connect();
},[])

  return {
    contractInstance : contractInstance , 
    humanityCoinContractInstance : humanityCoinContractInstance , 
    tokenAContractInstance : tokenAContractInstance
  }
};
























