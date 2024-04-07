import React, { useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space, Button } from "antd";
import { Link, useNavigate } from "react-router-dom";
import "./pool.scss"

function Pool() {
  const navigate = useNavigate();
    // const [poolVersion,setPoolVersion] = useState('v3');
  const items = [
    {
      label: <Link to={`/app/pool/v2`}>v2 pools</Link>,
      key: "0",
    }
  ];
  return (
      <div className="pool">
       <div className="poolCenter">
       <div className="position">
          <div className="positionLeft">
            <h3>Positions</h3>
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
          <div className="positionRight">
            <Dropdown
              className="positionDropRight"
              menu={{
                items,
              }}
              trigger={["click"]}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  More
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
            <Button className="newPositionBtn" style={{ width: 156 }} onClick={()=> {
              navigate('/app/add')
            }}>
              + New position
            </Button>
          </div>
        </div>
        <div className="liquidySec">
          <img src="" alt="imgs" />
          <p>Your active V3 liquidity positions will appear here.</p>
          <Button className="connectBtn" style={{ width: 300, marginTop: "20px" }}>
            Connect a wallet
          </Button>
        </div>
        <div className="learnAboutCommon">
          <div className="left">
            <p>Learn about providing liquidy </p>
            <p>Check out our v3 LP walkthrough and migration guides.</p>
          </div>
          <div className="right">
            <p>Top pools </p>
            <p>Explore Uniswap Analytics.</p>
          </div>
        </div>
       </div>
      </div>
  );
}

export default Pool;