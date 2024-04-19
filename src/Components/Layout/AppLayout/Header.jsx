import { useEffect, useState } from 'react';
import { Link as RouterLink,useNavigate } from 'react-router-dom';
import { APP_NAVBAR_MENU, CHAIN_LIST, logoIcon } from '../../../utils/constant';
import { useWeb3Modal } from '@web3modal/wagmi/react';
import { useAccount } from 'wagmi';
import { setAccount, setIsConnected } from '../../../redux/slice/app.slice';
import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { Select, Button, Drawer } from 'antd';
// import swapicon from "../../Assets/Images/horsepink.png";
import './Header.scss';
import { Menu, Input } from 'antd';
import { rootName, appRootName } from '../../../utils/constant';
import { publicRouteObj } from '../../../staticObjects';
import swapicon from "../../Assets/Images/uniswap.svg";
import { SearchOutlined } from '@ant-design/icons';
import { StoreImages } from '../../Storeimgaes/StoreImages';
// import { useConnectMetamask } from '../../../customHooks/useConnectMetamask';
// import applestore from "../../Assets/Images/applestore.svg";
// import playstore from "../../Assets/Images/playstor.svg";


const connectAppButtonStyle = {
  minWidth: '150px',
  padding: '10px',
  height: '40px',
  backgroundColor: 'white',
  border: 'none',
  color: 'grey',
  borderRadius: '23px',
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
  fontWeight: '500',
  cursor: 'pointer',
};

export default function AppHeader() {
  const { Option } = Select;
  const { Search } = Input;

  const dispatch = useDispatch();
  const { open } = useWeb3Modal();

  const { address, isConnected } = useAccount();
  const [ selectedChain, setSelectedChain ] = useState(CHAIN_LIST[0]);

  const { account, isConnected: isWalletConnected } = useSelector(
    (state) => state.app
  );

  async function switchNetwork() {
    // Check if MetaMask is installed and connected
    if (window.ethereum) {
      try {
        // Request to switch network
        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: '0x1' }], // Mainnet
        });
      } catch (error) {
        // Handle errors
        console.error('Error switching network:', error);
      }
    } else {
      // MetaMask not detected
      console.error('MetaMask is not installed');
    }
  }

  async function handleChange(value) {
    console.log(`Selected: ${value}`);
     CHAIN_LIST.map((item)=> {
      if(value === item.chainId){
        setSelectedChain(item)
      }
     })
  }

  const onSearch = (value) => {
    console.log(value);
    // Implement your search logic here
  };

  useEffect(() => {
    dispatch(setIsConnected(isConnected));
    dispatch(setAccount(address));
  }, [isConnected]);
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const { ToggleIcon } = StoreImages;
  const menu = (
    <Menu>
      <div>
        <Menu.Item key="1">App</Menu.Item>
        <Menu.Item key="2">Vote</Menu.Item>
        <Menu.Item key="3">Option</Menu.Item>
        <Menu.Item key="1">Company</Menu.Item>
        <Menu.Item key="2">Careers</Menu.Item>
        <Menu.Item key="3">Blog</Menu.Item>
        <Menu.Item key="1">Protocol</Menu.Item>
        <Menu.Item key="2">Governance</Menu.Item>
        <Menu.Item key="3">Need Helps?</Menu.Item>
        <Menu.Item key="1">Contact us</Menu.Item>
        <Menu.Item key="2">Help Center</Menu.Item>
      </div>
    </Menu>
  );

  return (
    <>
      <div className="swapHeader">
        <div>
          <div className="">
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: '30px',
                color: '#747373',
              }}
            >
              <img src={logoIcon} width={95} height={95} className='uniswapIcons' />
              {APP_NAVBAR_MENU.map((menuItem) => {
                return (
                  <div>
                    <RouterLink
                      style={{
                        backgroundColor: 'transparent',
                        color: '#c8c0c0',
                        fontWeight: '500',
                      }}
                      to={menuItem.path}
                    >
                      {menuItem.name}
                    </RouterLink>
                  </div>
                );
              })}
              <div>
                <RouterLink
                  style={{
                    backgroundColor: 'transparent',
                    color: '#c8c0c0',
                    fontWeight: '500',
                  }}
                  to={'/app/configure'}
                >
                  Configure
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
        <div className="resSearch">
          <Search
            placeholder="Search tokens and NFT collections"
            onSearch={onSearch}
            prefix={<SearchOutlined />}
          />
        </div>
        <div className="rightsec">
          <div>
            <Select
              value={selectedChain}
              style={{ minWidth: 120 , width:'100%' }}
              onChange={handleChange}
            >
           {
            CHAIN_LIST.map((option)=> (
              <Option value={option.chainId}>{option.key}</Option>
            ))
           }
            </Select>
          </div>
          <Button
            style={{
              background: 'rgb(19, 19, 19)',
              borderRadius: '20px',
              color: '#fff',
              display: 'flex',
              gap: '4px',
              alignItems: 'center',
              padding: '8px 35px',
              fontSize: '16px',
              height: '40px',
              border: ' 1px solid #716C6C',
            }}
          >
          </Button>
          <Button
            onClick={() => {
              open();
            }}
            className="connectBtn"
          >
            {isWalletConnected ? account?.slice(0, 14) + '...' : 'Connect App'}
          </Button>
        </div>
      </div>
      <div>
        <div className='resHeader'>
        <img src={logoIcon} width={120} height={120} className='uniswapIcons' />
          <div className="resSearch">
          <Search
            placeholder="Search tokens and NFT collections"
            onSearch={onSearch}
            prefix={<SearchOutlined />}
          />
          </div>
          <img
            src={ToggleIcon}
            alt="toggleIcon"
            onClick={() => {
              setVisible(true);
            }}
          />

          <Drawer
            className="drawerLanding"
            title={
              <a
                onClick={(e) => {
                  e.preventDefault();
                  navigate(appRootName);
                }}
              >
                <h2 className="logo-white">Humanity Coin</h2>
              </a>
            }
            placement="top"
            visible={visible}
            onClose={() => {
              setVisible(false);
            }}
          >
            <div>
              <RouterLink to={`${appRootName}${publicRouteObj.swap}`}>
               Swap
              </RouterLink>
              <RouterLink to={`${appRootName}${publicRouteObj.explorer}`}>
                Explore
              </RouterLink>
              <RouterLink to={`${appRootName}${publicRouteObj.migrate}`}>
                Migrate
              </RouterLink>
              <RouterLink to={`${appRootName}${publicRouteObj.pool}`}>
                Pool
              </RouterLink>
              <RouterLink to={`${appRootName}${publicRouteObj.configure}`}>
                Configure
              </RouterLink>
            </div>
          </Drawer>
        </div>
      </div>
    </>
  );
}
