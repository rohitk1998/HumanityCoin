import React, { useState } from 'react';
import { Button } from 'antd';
import './LiquidyProvider.scss';
import { Link } from 'react-router-dom';
import backicon from '../../Assets/Images/back-Arrow.svg';
import Select from 'react-select';
import btc from '../../Assets/Images/btc.svg';
import { WalletIcon } from '../../Assets/Svg/Svg.jsx';
import eth from '../../Assets/Images/ethereumcoin.svg';

const options = [
  {
    value: 'btc',
    label: (
      <p className="selectIcon">
        <img src={btc} alt="imgs" />
        ETH
      </p>
    ),
  },
  {
    value: 'eth',
    label: (
      <p className="selectIcon">
        <img src={eth} alt="imgs" />
        ETH
      </p>
    ),
  },
];

function LiquidyProvider() {
  const [isFormActive, setIsFormActive] = useState(false);

  const items = [
    {
      label: <Link to={`/app/pool`}>v2 pools</Link>,
      key: '0',
    },
  ];

  const LiquidityForm = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    return (
      <div className="AddLeqSec">
        <div className="addLiq">
          <div className="containerAdLiq">
            <div className="createNewPool">
              {/* <img src={backicon} alt="imgs" /> */}
              <div>
                <h3>Add Liquidity</h3>
                <p>
                  Create a new pool or create a liquidity position on an
                  existing pool.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="containerAdLiq">
          <div className="addLiqbottomSec">
            <div className="leftdata">
              <h4>Network</h4>
              <p>Select the network you would like to provide liquidity on.</p>
            </div>
            <div className="rightdata">
              <div className="topSelect selectItm">
                <Select
                  defaultValue={selectedOption}
                  onChange={setSelectedOption}
                  options={options}
                />
              </div>
            </div>
          </div>
          <div className="addLiqbottomSec">
            <div className="leftdata">
              <h4>Tokens</h4>
              <p>Which token pair would you like to add liquidity to.</p>
            </div>
            <div className="right">
              <div
                className="topSelect"
                style={{ display: 'flex', gap: '20px' }}
              >
                <Select
                  defaultValue={selectedOption}
                  onChange={setSelectedOption}
                  options={options}
                />
                <Select
                  defaultValue={selectedOption}
                  onChange={setSelectedOption}
                  options={options}
                />
              </div>
            </div>
          </div>
          <div className="addLiqbottomSec">
            <div className="leftdata">
              <h4>Deposit</h4>
              <p>Select the amount of tokens you want to deposit</p>
            </div>
            <div className="right">
              <div className="ethDiv">
                <div className="ethfirst">
                  <h4>0.0</h4>
                  <Select
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                  />
                </div>
                <div className="ethsecond">
                  <h4>
                    $0.<span>00</span>
                  </h4>
                  <h4>
                    <WalletIcon />
                    0.<span>00</span>
                  </h4>
                </div>
              </div>
              <div className="ethDiv">
                <div className="ethfirst">
                  <h4>0.0</h4>
                  <Select
                    defaultValue={selectedOption}
                    onChange={setSelectedOption}
                    options={options}
                  />
                </div>
                <div className="ethsecond">
                  <h4>
                    $0.<span>00</span>
                  </h4>
                  <h4>
                    <WalletIcon />
                    0.<span>00</span>
                  </h4>
                </div>
              </div>
              <Button type="dark" className="plusBtn">
                +
              </Button>
              <Button
                className="pinkbtn"
                style={{ width: '100%', marginTop: '20px' }}
              >
                Connect Wallet
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="liquidyDiv">
      <div className="liquidityCenter">
        <div className="liquidBanner">
          <h4>Liquidity provider rewards</h4>
          <p>
            Liquidity providers earn a 0.3% fee on all trades proportional to
            their share of the pool. Fees are added to the pool, accrue in real
            time and can be claimed by withdrawing your liquidity.
          </p>
          <Link to="">Read more about providing liquidity</Link>
        </div>
        <div className="createPairSec">
          <div className="left">
            {/* <h3>Your V2 liquidity</h3> */}
            {/* <Dropdown
            className="positionDrop"
            menu={{
              items,
            }}
            trigger={["click"]}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                v3
                <DownOutlined />
              </Space>
            </a>
          </Dropdown> */}
          </div>
          <div className="right">
            {/* <Button className="transBtn">Create a pair</Button>
          <Button className="menuBtn">Import pool</Button> */}
            <Button
              className="menuBtn"
              onClick={() => {
                if (isFormActive) {
                  setIsFormActive(false);
                } else {
                  setIsFormActive(true);
                }
              }}
            >
              {isFormActive ? 'Cancel' : 'Add V2 liquidity'}{' '}
            </Button>
          </div>
        </div>
        <div className="connectYourLiq">
          Connect to a wallet to view your liquidity.
        </div>
        {isFormActive ? <LiquidityForm /> : null}
      </div>
    </div>
  );
}

export default LiquidyProvider;
