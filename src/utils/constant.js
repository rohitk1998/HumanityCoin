import EthereumMainnet from "../Components/Assets/Images/ethereum.svg"
import BNBMainnet from "../Components/Assets/Images/bnbIcon.svg"
import LOGO from "../Components/Assets/Images/logo.png"


export const NetworkContextName = 'NETWORK'



export const rootName = '/';
export const appRootName = '/app';

export const logoIcon = LOGO ; 


export const SOCIAL_LINK = {
    FACEBOOK : 'https://www.fb.me/hmncrypto' , 
    TWITTER : 'https://x.com/Humanityhmn' , 
    INSTAGRAM : 'https://instagram.com/humanity_hmn?igshid=NGVhN2U2NjQ0Yg==' , 
    TELEGRAM : 'https://www.linkedin.com/humanityhmn' , 
    LINKEDIN : 'https://t.me./HMNtoken'
}


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
    name : 'Sepolia Testnet' , 
    key : 'Ethereum' , 
    value : '11155111',
    image : EthereumMainnet, 
    chainId : '11155111',
    rpcUrl : 'https://rpc.sepolia.org',
    explorerLink : 'https://sepolia.etherscan.io',
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

export const TRANSACTION_STATUS = {
  IN_PROGRESS : 'Transaction in progress . . .',
  PENDING : 'Pending . . .',
  SENDING : 'Sending . . .',
  WAITING_FOR_APPROVAL : 'Waiting for Approval . . .',
  APPROVED : 'Transaction Approved',
  COMPLETED : 'Transaction Completed',
  SUCCESSFUL: 'Transaction Successful',
  INITIATED:'Initiating Transaction . . .',
  CANCELLED:'Transaction Cancelled',
  NONE:'NONE',
  FAILED:'Transaction Failed',
  INITIATED_APPROVAL_PROCESS: 'Initiating Approval . . .',
}

export const FAQ = [
  {
    id: 1,
    question: "What is the Humanity Token?",
    answer: "The Humanity Token ($HMN) is a human-centered cryptocurrency, aiming to improve living conditions, promote sustainable development and ensure better social cohesion through blockchain technology."
  },
  {
    id: 2,
    question: "What is the main objective of the Humanity project?",
    answer: "The Humanity Project aims to use technology and cryptography to create solutions that protect data privacy and people's rights, while contributing to social, economic and environmental progress."
  },
  {
    id: 3,
    question: "How does Humanity Token differ from other cryptocurrencies?",
    answer: "Unlike many other cryptocurrencies, the Humanity Token places humans at the center of its actions. It is not just a digital currency, but a global project aimed at improving people's lives and promoting inclusion and sustainable development."
  },
  {
    id: 4,
    question: "What is the initial distribution of Humanity Token?",
    answer: "- Maximum bid: 900,000,000 HMN (100%)\n- Public sales: HMN 495,000,000 (55%)\n- Team: 135,000,000 HMN (15%)\n- Development: 90,000,000 HMN (10%)\n- Marketing: 90,000,000 HMN (10%)\n- Address of Liquidity and reserves: 90,000,000 HMN (10%)"
  },
  {
    id: 5,
    question: "When and where can I buy Humanity Token?",
    answer: "- Pre-sale phase: December 2, 2023 to December 31, 2024 on the launch pad sites.\n- Public sale: From January 1, 2025 on DEXs (decentralized exchanges) and CEXs (centralized exchanges)."
  },
  {
    id: 6,
    question: "What are the next steps in the project?",
    answer: "- September 2025: Design and launch of the decentralized exchange platform “HUMANEXT”.\n- December 2025: Launch of the Humanity ecosystem including the blockchain (Smart Chain of Humanity), a neo-bank, and a market."
  },
  {
    id: 7,
    question: "What is HUMANEXT?",
    answer: "HUMANEXT is a decentralized exchange platform planned for September 2025, which will be an integral part of the Humanity ecosystem."
  },
  {
    id: 8,
    question: "How does the project contribute to digital inclusion?",
    answer: "The Humanity Project works to eliminate the digital divide by ensuring that the benefits of technology and science are accessible to all, particularly in disadvantaged regions of the world."
  },
  {
    id: 9,
    question: "How can I follow project updates and news?",
    answer: "You can follow our communication channels:\n- Facebook\n- Twitter\n- Discord\n- Telegram\n- Instagram\n- YouTube\n- Blog\n- Medium\nYou can also subscribe to our newsletter via email for the latest news and updates."
  },
  {
    id: 10,
    question: "Who is behind the Humanity project?",
    answer: "The Humanity Project is made up of people committed to using technology to solve society's most pressing problems and promoting a more equitable world for all."
  },
  {
    id: 11,
    question: "How can I participate in the Humanity community?",
    answer: "Join our PARADISIAT community, participate in our social media discussions, attend our events and engage with other members to contribute to our mission."
  },
  {
    id: 12,
    question: "What is the Humanity Smart Chain (HSC)?",
    answer: "The Humanity Smart Chain (HSC) is a blockchain dedicated to the Humanity Project, planned for December 2025, to ensure the security and transparency of transactions and data."
  }
];
