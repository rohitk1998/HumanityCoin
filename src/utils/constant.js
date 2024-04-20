import EthereumMainnet from "../Components/Assets/Images/ethereum.svg"
import BNBMainnet from "../Components/Assets/Images/bnbIcon.svg"
import LOGO from "../Components/Assets/Images/logo.png"


export const rootName = '/';
export const appRootName = '/app';

export const logoIcon = LOGO ; 


export const CHAIN_LIST = [
  {
    name : 'Ethereum Mainnet' , 
    key : 'Ethereum' , 
    value : '1',
    image : EthereumMainnet, 
    chainId : '1',
    rpcUrl : 'https://mainnet.infura.io/v3/',
    explorerLink : 'https://etherscan.io',
    currencySymbol : 'ETH'
  },
  {
    name : 'BNB Smart Chain' , 
    key : 'Binance' , 
    value : '56',
    image : BNBMainnet, 
    chainId : '56',
    rpcUrl : 'https://rpc.ankr.com/bsc',
    explorerLink : 'https://bscscan.com',
    currencySymbol : 'BNB'
  }
]


export const APP_NAVBAR_MENU = [
  {
    path: '/app/swap',
    name: 'Swap',
  },
  {
    path: '/app/explore',
    name: 'Explore',
  },
  {
    path: '/app/migrate',
    name: 'Migrate',
  },
  {
    path: '/app/pool/v2',
    name: 'Pool',
  }
];
