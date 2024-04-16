import React, { useState } from "react";
import "./swap.scss";
import { Select, Button } from "antd";
import Send from "./Send";
export default function Swap() {
  const [selectedTab,setSelectedTab] = useState(1);
  const { Option } = Select;
  function handleChange(value) {
    console.log(`Selected: ${value}`);
  }

  return (
    <div className="swap">
      <div className="swapCenter">
        <h2 className="swapheading">Swap anytime, anywhere.</h2>
        <div className="swapTab">
          <button className={selectedTab == 1 ? 'active' : ''} onClick={()=> { setSelectedTab(1) }}>Swap</button>
          <button className={selectedTab == 2 ? 'active' : ''} onClick={()=> { setSelectedTab(2) }}>Send</button>
        </div>
        {
          selectedTab == 1 ? 

          <div className="youpay">
          <div className="payItems">
            <div className="amountpay">
              <p>
                You Pay<span>0</span>
              </p>
              <Select
                defaultValue="Option 1"
                style={{ width: 130 }}
                onChange={handleChange}
              >
                <Option value="Option 1">Ethereum</Option>
                <Option value="Option 2">Arbitrum</Option>
                <Option value="Option 3">Optimism</Option>
              </Select>
            </div>
            <div className="amountpay" style={{ marginTop: "5px" }}>
              <p>
                You Pay<span>0</span>
              </p>
              <Select
                defaultValue="Option_0"
                style={{ width: 'fit-content' , minWidth:'130px'}}
                onChange={handleChange}
              >
                <Option value="Option_0">Select Token</Option>
                <Option value="Option 1">Ethereum</Option>
                <Option value="Option 2">Arbitrum</Option>
                <Option value="Option 3">Optimism</Option>
              </Select>
            </div>
          </div>
          <Button
            style={{
              backgroundColor: "rgb(49, 28, 49) ",
              color: "rgb(252, 114, 255)",
            }}
            block
            className="connectbtn"
          >
            Connect Wallet
          </Button>
        </div>

        :

        <Send/>
        }
      </div>
    </div>
  )
}