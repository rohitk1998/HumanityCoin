import React, { useState } from 'react';
import { Drawer } from 'antd';
import { Link as RouterLink } from 'react-router-dom';
import style from './style.module.scss';
import { rootName, appRootName, logoIcon } from '../../../utils/constant';
import { publicRouteObj } from '../../../staticObjects';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { StoreImages } from '../../Storeimgaes/StoreImages';
import logo from '../../Assets/Images/logo.svg';
import btn from '../../Assets/Images/button.svg';
const launchAppButtonStyle = {
  minWidth: '150px',
  padding: '5px',
  height: '40px',
  backgroundColor: 'rgba(226, 128, 1, 0.808)',
  color: 'white',
  borderRadius: '20px',
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
  fontWeight: '600',
  cursor: 'pointer',
  border: 'none',
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
  const handleScroll = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
      <header className={` ${color ? 'bg-white' : ''} siteHeader`}>
        <div className="headerdata">
          <div className={style.header}>
            <img
              src={logoIcon}
              width={75}
              height={75}
              className="responsiveLogo"
            />
            <img src={logo} alt="logo" className="webLogo" />

            <div className={style.header_rightSideFlex}>
              <div className={`${style.header_links} ${style.navbarfull}`}>
                <RouterLink to="/" onClick={(e) => handleScroll(e, 'aboutus')}>
                  About us
                </RouterLink>
                <RouterLink to="/" onClick={(e) => handleScroll(e, 'roadmap')}>
                  Roadmap
                </RouterLink>
                <RouterLink
                  to="/"
                  onClick={(e) => handleScroll(e, 'tokenmics')}
                >
                  Tokenomics
                </RouterLink>
                <RouterLink to="/" onClick={(e) => handleScroll(e, 'faq')}>
                  FAQs
                </RouterLink>
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
                    <RouterLink to="/" onClick={(e) => handleScroll(e, 'aboutus')}>
                  About us
                </RouterLink>
                <RouterLink to="/" onClick={(e) => handleScroll(e, 'roadmap')}>
                  Roadmap
                </RouterLink>
                <RouterLink
                  to="/"
                  onClick={(e) => handleScroll(e, 'tokenmics')}
                >
                  Tokenomics
                </RouterLink>
                <RouterLink to="/" onClick={(e) => handleScroll(e, 'faq')}>
                  FAQs
                </RouterLink>
                      <button
                        onClick={() => {
                          window.open(
                            `${appRootName}/${publicRouteObj.swap}`,
                            '_blank'
                          );
                        }}
                      >
                        Trade Now
                      </button>
                    </div>
                  </Drawer>
                </div>
              </div>
            </div>
            <button
            onClick={() => {
              window.open(`${appRootName}/${publicRouteObj.swap}`, '_blank');
            }}
            className='tradeNowBtn'
          >
           Trade Now
          </button>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header;
