import React from "react";
import "./Ecosystem.scss";
import info from "../../Assets/Images/Info.svg";
import pine from "../../Assets/Images/Pine Finance.jpeg";
import reflexer from "../../Assets/Images/Reflexer.jpeg";
import augur from "../../Assets/Images/Augur.png";
import shafeshift from "../../Assets/Images/Shapeshift.jpeg";
import aave from "../../Assets/Images/Aave.svg";
import digifox from "../../Assets/Images/Digifox.jpeg";
import lixir from "../../Assets/Images/Lixir .jpeg";
import rari from "../../Assets/Images/Rari Capital.png";
import parsecfinance from "../../Assets/Images/Parsec Finance.jpeg";
import thegraph from "../../Assets/Images/The Graph.svg";
import monolith from "../../Assets/Images/Monolith.jpeg";
import burner from "../../Assets/Images/Burner Wallet.png";
import { Row, Col , Input } from "antd";

function Ecosystem() {
  const data = [
    {
      id: 1,
      img: pine,
      rightContent: "Dapp",
      title: "Pine Finance",
      detail: "Limit orders for Uniswap Protocol",
    },
    {
      id: 2,
      img: augur,
      rightContent: "Dapp",
      title: "Augur",
      detail: "Information market",
    },
    {
      id: 3,
      img: reflexer,
      rightContent: "Dapp",
      title: "Reflexer",
      detail: "Liquidation Protected Loans.",
    },
    {
      id: 4,
      img: info,
      rightContent: "Dapp",
      title: "MakerDAO",
      detail: "Decentralized credit facility",
    },
    {
      id: 5,
      img: burner,
      rightContent: "Dapp",
      title: "Burner Wallet",
      detail: "An instant web wallet to send crypto with a simple UX.",
    },
    {
      id: 6,
      img: aave,
      rightContent: "Dapp",
      title: "Aave",
      detail: "Earn interest by depositing and borrowing assets. ",
    },
    {
      id: 7,
      img: info,
      rightContent: "Dapp",
      title: "Nexus Mutual",
      detail: "DeFi Insurance.",
    },
    {
      id: 8,
      img: shafeshift,
      rightContent: "Aggregator",
      title: "Shapeshift",
      detail: "Decentralized exchange aggregator. ",
    },
    {
      id: 9,
      img: rari,
      rightContent: "Dapp",
      title: "Rari Capital",
      detail: "Lending, borrowing & yield for DeFi",
    },
    {
      id: 10,
      img: digifox,
      rightContent: "Wallet",
      title: "Digifox",
      detail: "Finance for everyone ",
    },
    {
      id: 11,
      img: monolith,
      rightContent: "Wallet",
      title: "Monolith",
      detail: " Decentralized crypto wallet.",
    },
    {
      id: 12,
      img: thegraph,
      rightContent: "Tool",
      title: "The Graph",
      detail: "Protocol for network queries and open APIs. ",
    },
    {
      id: 13,
      img: lixir,
      rightContent: "Dapp",
      title: "Lixir",
      detail: "Active liquidity provision solution for Uniswap v3 ",
    },
    {
      id: 14,
      img: info,
      rightContent: "Dapp",
      title: "Furucombo",
      detail: "User-generated composable DeFi investment strategies. ",
    },
    {
      id: 15,
      img: info,
      rightContent: "Tool",
      title: "Unbound Finance",
      detail: "Uniswap v3 LP strategy tool.",
    },
    {
      id: 16,
      img: info,
      rightContent: "Dapp",
      title: "Ondo Finance",
      detail: "Tranched yield products for DeFi",
    },
    {
      id: 17,
      img: parsecfinance,
      rightContent: "Tool",
      title: "Parsec Finance",
      detail: "Advance DeFi interface ",
    },
];
return (
    <div className="ecosystem">
    <div className="container">
      <div className="exPloreTop">
        <div className="explore" style={{padding:'20px'}}>
          <h3>Explore the HUMANITY Ecosystem</h3>
          <p>
            Swap, earn, vote, and more with hundreds of DeFi apps,
            integrations, and tools built on the Uniswap Protocol.
          </p>
        </div>
        <p className="browseEco" style={{paddingTop:'30px'}}>
          Browse and search projects built on the HUMANITY Protocol. *
          <span>
            Building something cool with HUMANITY? <a>Submit</a> your project.
          </span>
        </p>
      </div>
      <div className="inputeco">
        <Input placeholder="⌘/ Search" />
      </div>
      <Row gutter={[25, 20]}>
        {data?.map((user, id) => (
          <Col xs={24} sm={12} lg={6} key={id}>
            <div className="globalSecInner">
              <div className="imgDiv">
                <img src={user.img} alt="img" />
                <div>
                  <span>{user.rightContent}</span>
                </div>
              </div>
              <h4 style={{ color: "#fff" }}>{user.title}</h4>
              <p>{user.detail}</p>
            </div>
          </Col>
        ))}
      </Row>
      <div className="innerContent">
        * Information about applications, services, and websites that are not
        developed, controlled, or tested by Humanity Labs is provided without
        recommendation or endorsement. Humanity Labs assumes no responsibility
        with regard to the selection, performance, security, accuracy, or use
        of third-party offerings. For more information on each project, please
        contact the developer.
      </div>
    </div>
  </div>
);
}

export default Ecosystem;