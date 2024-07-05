import Web3 from 'web3';
import { ethers } from 'ethers';
import { Pair } from '@uniswap/v2-sdk';
import {
  Token,
  Fetcher,
  Route,
  Trade,
  TokenAmount,
  TradeType,
  Percent,
} from '@uniswap/sdk';

const WETH = '0xa6Ce7798eEB24cD9A0bAE74d4F42227D4839CbaF';
const UNI_ROUTER = '0x5D75711788Ec1Bd2454BC91Fb73ED614f77c66E6';
const UNI_FACTORY = '0x473323812902Bcf1fE49fcE168f0b25591D1B3dC';
const CHAIN_ID = 11155111;

class Uniswap {
  web3Provider = null;
  WETH = null;
  chainId = CHAIN_ID;
  rpcUrl = null;
  routerAddress = null;

  constructor() {
    this.web3Provider = new ethers.providers.JsonRpcProvider(
      process.env.REACT_APP_ETH_RPC_URL
    );
    this.WETH = WETH;
    this.rpcUrl = process.env.REACT_APP_ETH_RPC_URL;
    this.routerAddress = UNI_ROUTER;
  }

  async getQuoteAndRoute(fromToken, toToken, amount, walletAddress) {
    const FROM_TOKEN = new Token(
      this.chainId,
      fromToken.tokenAddress,
      fromToken.decimals
    );
    const TO_TOKEN = new Token(
      this.chainId,
      toToken.tokenAddress,
      toToken.decimals
    );

    const pair = await Fetcher.fetchPairData(
      FROM_TOKEN,
      TO_TOKEN,
      this.web3Provider
    ); //creating instances of a pair
    const route = new Route([pair], TO_TOKEN); // a fully specified path from input token to output token
    let amountIn = ethers.utils.parseEther(amount.toString()); //helper function to convert ETH to Wei
    amountIn = amountIn.toString();

    const slippageTolerance = new Percent(slippage, '10000'); // 50 bips, or 0.50% - Slippage tolerance

    const trade = new Trade( //information necessary to create a swap transaction.
      route,
      new TokenAmount(TO_TOKEN, amountIn),
      TradeType.EXACT_INPUT
    );

    const amountOutMin = trade.minimumAmountOut(slippageTolerance).raw; // needs to be converted to e.g. hex
    const amountOutMinHex = ethers.BigNumber.from(
      amountOutMin.toString()
    ).toHexString();
    const path = [TO_TOKEN.address, FROM_TOKEN.address]; //An array of token addresses
    const to = walletAddress; // should be a checksummed recipient address
    const deadline = Math.floor(Date.now() / 1000) + 60 * 20; // 20 minutes from the current Unix time
    const value = trade.inputAmount.raw;
    const valueHex = await ethers.BigNumber.from(
      value.toString()
    ).toHexString(); //convert to hex string

    return {
      amountOutMinHex,
      path,
      to,
      deadline,
      valueHex,
    };
  }

  async generateRawTxnForEthToTokens(
    fromToken,
    toToken,
    amount,
    walletAddress,
    slippage
  ) {
    const quote = await this.getQuoteAndRoute(
      fromToken,
      toToken,
      amount,
      walletAddress,
      slippage
    );

    const abi = [
      'function swapExactETHForTokens(uint amountOutMin, address[] calldata path, address to, uint deadline) external payable returns (uint[] memory amounts)',
    ];

    const contract = new ethers.Contract(
      this.routerAddress,
      abi,
      this.web3Provider
    );

    const tx = await contract.populateTransaction.swapExactETHForTokens(
      quote.amountOutMinHex,
      quote.path,
      quote.to,
      quote.deadline,
      { value: quote.valueHex }
    );

    return tx;
  }

  async generateRawTransactionForTokensToEth(
    fromToken,
    toToken,
    amount,
    walletAddress,
    slippage
  ) {
    const quote = await this.getQuoteAndRoute(
      fromToken,
      toToken,
      amount,
      walletAddress,
      slippage
    );

    const abi = [
      'function swapExactTokensForETH(uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline) external returns (uint[] memory amounts)',
    ];

    const contract = new ethers.Contract(
      this.routerAddress,
      abi,
      this.web3Provider
    );

    const tx = await contract.populateTransaction.swapExactTokensForETH(
      quote.valueHex,
      quote.amountOutMinHex,
      quote.path,
      quote.to,
      quote.deadline
    );

    return tx;
  }

  async generateRawTransactionForTokenToTokens(
    fromToken,
    toToken,
    amount,
    walletAddress,
    slippage
  ) {
    const quote = await this.getQuoteAndRoute(
      fromToken,
      toToken,
      amount,
      walletAddress,
      slippage
    );

    const abi = [
      'function swapExactTokensForTokens(uint amountIn, uint amountOutMin, address[] calldata path, address to, uint deadline) external returns (uint[] memory amounts)',
    ];

    const contract = new ethers.Contract(
      this.routerAddress,
      abi,
      this.web3Provider
    );

    const tx = await contract.populateTransaction.swapExactTokensForTokens(
      quote.valueHex,
      quote.amountOutMinHex,
      quote.path,
      quote.to,
      quote.deadline
    );

    return tx;
  }

  async checkTransactionStatus(txHash) {
    const tx = await this.web3Provider.getTransaction(txHash);
    return tx;
  }

  async addLiquidity(tokenA, tokenB, amountA, amountB, walletAddress) {
    const tokenAInstance = new Token(
      this.chainId,
      tokenA.tokenAddress,
      tokenA.decimals
    );
    const tokenBInstance = new Token(
      this.chainId,
      tokenB.tokenAddress,
      tokenB.decimals
    );

    const pair = await Fetcher.fetchPairData(
      tokenAInstance,
      tokenBInstance,
      this.web3Provider
    );

    const route = new Route([pair], tokenAInstance);

    const slippageTolerance = new Percent(50, '10000');

    const trade = new Trade(
      route,
      new TokenAmount(tokenAInstance, amountA),
      TradeType.EXACT_INPUT
    );

    const amountBMin = trade.minimumAmountOut(slippageTolerance).raw;

    const amountAMin = ethers.BigNumber.from(
      trade.inputAmount.raw.toString()
    ).toHexString();
    const amountBMinHex = ethers.BigNumber.from(
      amountBMin.toString()
    ).toHexString();

    const path = [tokenAInstance.address, tokenBInstance.address];
    const to = walletAddress;
    const deadline = Math.floor(Date.now() / 1000) + 60 * 20;
    const value = trade.inputAmount.raw;
    const valueHex = ethers.BigNumber.from(value.toString()).toHexString();

    const abi = [
      'function addLiquidity(address tokenA, address tokenB, uint amountADesired, uint amountBDesired, uint amountAMin, uint amountBMin, address to, uint deadline) external payable returns (uint amountA, uint amountB, uint liquidity)',
    ];

    const contract = new ethers.Contract(
      this.routerAddress,
      abi,
      this.web3Provider
    );

    const tx = await contract.populateTransaction.addLiquidity(
      tokenAInstance.address,
      tokenBInstance.address,
      amountA,
      amountB,
      amountAMin,
      amountBMinHex,
      to,
      deadline,
      { value: valueHex }
    );

    return tx;
  }

  async removeLiquidity(tokenA, tokenB, liquidity, walletAddress) {
    const tokenAInstance = new Token(
      this.chainId,
      tokenA.tokenAddress,
      tokenA.decimals
    );
    const tokenBInstance = new Token(
      this.chainId,
      tokenB.tokenAddress,
      tokenB.decimals
    );

    const pair = await Fetcher.fetchPairData(
      tokenAInstance,
      tokenBInstance,
      this.web3Provider
    );

    const route = new Route([pair], tokenAInstance);

    const slippageTolerance = new Percent(50, '10000');

    const trade = new Trade(
      route,
      new TokenAmount(tokenAInstance, liquidity),
      TradeType.EXACT_INPUT
    );

    const amountAMin = trade.minimumAmountOut(slippageTolerance).raw;
    const amountAMinHex = ethers.BigNumber.from(
      amountAMin.toString()
    ).toHexString();

    const path = [tokenAInstance.address, tokenBInstance.address];
    const to = walletAddress;
    const deadline = Math.floor(Date.now() / 1000) + 60 * 20;

    const abi = [
      'function removeLiquidity(address tokenA, address tokenB, uint liquidity, uint amountAMin, uint amountBMin, address to, uint deadline) external returns (uint amountA, uint amountB)',
    ];

    const contract = new ethers.Contract(
      this.routerAddress,
      abi,
      this.web3Provider
    );

    const tx = await contract.populateTransaction.removeLiquidity(
      tokenAInstance.address,
      tokenBInstance.address,
      liquidity,
      amountAMinHex,
      0,
      to,
      deadline
    );

    return tx;
  }

  async fetchUserLiquidity(walletAddress) {
    const abi = [
      'function balanceOf(address owner) external view returns (uint)',
    ];

    const contract = new ethers.Contract(
      this.routerAddress,
      abi,
      this.web3Provider
    );

    const balance = await contract.balanceOf(walletAddress);

    return balance;
  }
}
