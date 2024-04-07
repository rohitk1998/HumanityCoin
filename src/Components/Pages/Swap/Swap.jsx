import React, { useState } from "react";
import "./swap.scss";
import { Select, Button, Drawer } from "antd";
import CommonDrawer from "../../Common/CommonDrawer";
export default function Swap() {
  const { Option } = Select;
  function handleChange(value) {
    console.log(`Selected: ${value}`);
  }

  return (
    <div className="swap">
      <div className="swapCenter">
        <h2 className="swapheading">Swap anytime, anywhere.</h2>
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
            // onClick={showDrawer}
          >
            Connect Wallet
          </Button>
        </div>
      </div>
    </div>
  )
}