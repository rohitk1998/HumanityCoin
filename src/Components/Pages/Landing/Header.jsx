import React, { useState } from 'react';
import { Drawer } from 'antd';
import { Link as RouterLink } from 'react-router-dom';
import style from './style.module.scss';
import { rootName, appRootName } from '../../../utils/constant';
import { publicRouteObj } from '../../../staticObjects';
import { useNavigate } from 'react-router-dom';
import { StoreImages } from '../../Storeimgaes/StoreImages';
import Logo from '../../Assets/Images/uniswap.svg';

const launchAppButtonStyle = {
  minWidth: '150px',
  padding: '5px',
  height: '40px',
  backgroundColor: '#169E93',
  color: 'white',
  borderRadius: '20px',
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
  fontWeight: '600',
  cursor: 'pointer',
  border:"none"
};

const Header = () => {
  const { ToggleIcon } = StoreImages;

  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  const [color, setColor] = useState(false);

  const colorChange = () => {
    if (window.scrollY >= 50) {
      setColor(true);
    } else setColor(false);
  };

  window.addEventListener('scroll', colorChange);

  const handleDrawerStateChange = (visible) => {
    const body = document.body;

    if (visible) {
      body.classList.add('drawer-open');
    } else {
      body.classList.remove('drawer-open');
    }
  };

  return (
    <>
      <header className={` ${color ? 'bg-white' : ''} siteHeader`}>
        <div className={style.header}>
          <a
            onClick={(e) => {
              e.preventDefault();
              navigate(appRootName);
            }}
          >
            <h2 className="logo-white">
              <img
                src={Logo}
                alt="logo"
                style={{
                  width: 34,
                  height: 34,
                  filter: 'grayscale(1) invert(1)',
                }}
              />
            </h2>
          </a>
          <div className={style.header_rightSideFlex}>
            <div className={`${style.header_links} ${style.navbarfull}`}>
              <RouterLink to={`${rootName}${publicRouteObj.ecosystem}`}>
                Ecosystem
              </RouterLink>
              <RouterLink to={`${rootName}${publicRouteObj.community}`}>
                Community
              </RouterLink>
              <RouterLink to={`${rootName}${publicRouteObj.faq}`}>
                FAQ's
              </RouterLink>
              <button
                style={launchAppButtonStyle}
                onClick={() => {
                  window.open(
                    `${appRootName}/${publicRouteObj.swap}`,
                    '_blank'
                  );
                }}
              >
                Launch App
              </button>
            </div>
            <div className={style.responsiveSidebar}>
              <div>
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
                  afterVisibleChange={handleDrawerStateChange}
                >
                  <div className={style.sidebarHeader}>
                    <RouterLink to={`${rootName}${publicRouteObj.ecosystem}`}>
                      Ecosystem
                    </RouterLink>
                    <RouterLink to={`${rootName}${publicRouteObj.community}`}>
                      Community
                    </RouterLink>
                    <RouterLink to={`${rootName}${publicRouteObj.faq}`}>
                      FAQ's
                    </RouterLink>
                    <RouterLink
                      to={`${appRootName}/${publicRouteObj.swap}`}
                      target="_blank"
                    >
                      Launch App
                    </RouterLink>
                  </div>
                </Drawer>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
