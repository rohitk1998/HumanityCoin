import React from "react";
import ExpTokenTable from "./ExpTokenTable";
import { Tabs, Select, Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
// import TransTable from "./TransTable";
// import PoolTabTable from "./PoolTabTable.jsx";
import "./Explore.scss"
function Explore() {
  const onChange = (key) => {
    console.log(key);
  };
  const items = [
    {
      key: "1",
      label: "Tokens",
      children: <ExpTokenTable />,
    },
    // {
    //   key: "2",
    //   label: "Pools",
    //   children: <PoolTabTable />,
    // },
    // {
    //   key: "3",
    //   label: "Transactions",
    //   children: <TransTable />,
    // },
  ];
  const { Option } = Select;
  function handleChange(value) {
    console.log(`Selected: ${value}`);
  }
  const operations = (
    <div className="extraContent">
      <Select
        defaultValue="Option 1"
        style={{ width: 130 }}
        onChange={handleChange}
      >
        <Option value="Option 1">Ethereum</Option>
        <Option value="Option 2">Arbitrum</Option>
        <Option value="Option 3">Optimism</Option>
      </Select>
      <Select
        defaultValue="Option 1"
        style={{ width: 130 }}
        onChange={handleChange}
      >
        <Option value="Option 1">1H volume</Option>
        <Option value="Option 2">1D volume</Option>
        <Option value="Option 3">1W volume</Option>
      </Select>
      <div className="inputSearch">
        <Input
          placeholder="Search"
          suffix={<SearchOutlined style={{ color: "#1890ff" }} />}
        />
      </div>
    </div>
  );
  return (
    <div style={{ width:"100%" , height:"100%" , minHeight:"100vh",backgroundColor:"black" }}>
      <div className="container">
        <Tabs
          tabBarExtraContent={operations}
          defaultActiveKey="1"
          items={items}
          onChange={onChange}
          className="whiteTabs"
        />
      </div>
    </div>
  );
}

export default Explore;