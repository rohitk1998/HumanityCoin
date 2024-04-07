import React from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space, Button } from "antd";
import "./LiquidyProvider.scss";
import { Link } from "react-router-dom";
function LiquidyProvider() {
  const items = [
    {
      label: <Link to={`/app/pool`}>v2 pools</Link>,
      key: "0",
    }
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
          <h3>Your V2 liquidity</h3>
          <Dropdown
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
          </Dropdown>
        </div>
        <div className="right">
          <Button className="transBtn">Create a pair</Button>
          <Button className="menuBtn">Import pool</Button>
          <Button className="menuBtn">Add V2 liquidity</Button>
        </div>
      </div>
      <div className="connectYourLiq">
        Connect to a wallet to view your liquidity.
      </div>
     </div>
    </div>
  );
}

export default LiquidyProvider;