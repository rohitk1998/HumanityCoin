import React, { useState } from 'react';
import { Button } from 'antd';
import './LiquidyProvider.scss';
import { Link } from 'react-router-dom';
import { LiquidityForm } from "./LiquidityForm.jsx"
import { GetPair } from './GetPair.jsx';

function LiquidyProvider() {
  const [isFormActive, setIsFormActive] = useState(false);
  const [selectedForm,setSelectedForm] = useState(1);

  const items = [
    {
      label: <Link to={`/app/pool`}>v2 pools</Link>,
      key: '0',
    },
  ];

  

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
            <Button className="transBtn"
            
            onClick={() => {
              if (selectedForm === 2 ) {
                setSelectedForm(1);
              }
            }}


            >Get Pair</Button>
          {/* <Button className="menuBtn">Import pool</Button> */}
            <Button
              className="menuBtn"
              onClick={() => {
                if (selectedForm === 1 ) {
                  setSelectedForm(2);
                }
              }}
            >
              Add V2 liquidity
            </Button>
          </div>
        </div>
        {/* <div className="connectYourLiq">
          Connect to a wallet to view your liquidity.
        </div> */}
        {selectedForm === 2  ? <LiquidityForm /> : <GetPair/>}
        {/* <LiquidityForm />  */}
      </div>
    </div>
  );
}

export default LiquidyProvider;
