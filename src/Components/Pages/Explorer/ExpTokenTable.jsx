import React from "react";
import Bitcoin from "../../Assets/Images/bit-coin.svg";
import ethereum from "../../Assets/Images/ethereumcoin.svg";
import eth from "../../Assets/Images/ethereumcoin.svg";
import tether from "../../Assets/Images/usdtcomb.png";
import arrow from "../../Assets/Images/usdtcomb.png"
// import { Greengraph, Redgraph } from "../../Assets/Svg/Svg.jsx";
import { Table } from "antd";
import "./Explore.scss";
const columns = [
  {
    title: "#",
    dataIndex: "hash",
    key: "hash",
  },
  {
    title: "Token name",
    dataIndex: "tokenName",
    key: "tokenName",
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "1 hour",
    dataIndex: "hour",
    key: "hour",
  },
  {
    title: "1 day ",
    dataIndex: "day",
    key: "day",
  },
  {
    title: "FDV ",
    dataIndex: "fdv",
    key: "fdv",
  },
  {
    title:  <spaan className="arrowdata"><img src={arrow}alt="arrow"/>Volume</spaan>,
    dataIndex: "volume",
    key: "volume",
  },
  {
    title: "",
    dataIndex: "status",
    key: "status",
  },
];

const data = [
  {
    key: "1",
    hash: 1,
    tokenName: (
      <p className="hashdata">
        <img src={eth} alt="imgs" style={{ width:"55px",height:"55px" }} />
        Ethereum
        <span>ETH</span>
      </p>
    ),
    price: '$3,624.25',
    hour: <span className="green">3.00%</span>,
    day: <span className="red">0.00%</span>,
    fdv:"$10.8B",
    volume: '$1.5B',
    status: (
      <span className="success">
        {/* <Greengraph /> */}
      </span>
    ),
  },
  {
    key: "2",
    hash: 2,
    tokenName: (
      <p className="hashdata">
        <img src={Bitcoin} alt="imgs" style={{ width:"55px",height:"55px" }}  />
        Bitcoin
        <span>BTC</span>
      </p>
    ),
    price:'$1.00',
    hour: <span className="green">0.27%</span>,
    day: <span className="green">0.27%</span>,
    fdv:"$10.8B",
    volume: "$106.9B",
    status: (
      <span className="success">
        {/* <Redgraph /> */}
      </span>
    ),
  },
  {
    key: "3",
    hash: 3,
    tokenName: (
      <p className="hashdata">
        <img src={tether} alt="imgs"  style={{ width:"55px",height:"55px" }} />
        Tether USD <span>USDT</span>
        <span>ETH</span>
      </p>
    ),
    price:'$1.00',
    hour: <span className="green">0.27%</span>,
    day: <span className="red">0.00%</span>,
    fdv:"$10.8B",
    volume: "$70.4M",
    status: (
      <span className="success">
        {/* <Redgraph /> */}
      </span>
    ),
  },
];
const ExpTokenTable = () => {
  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={false}
      className="commontable"
    />
  );
};

export default ExpTokenTable;