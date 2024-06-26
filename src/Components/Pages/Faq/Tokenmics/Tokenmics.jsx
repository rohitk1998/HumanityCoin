import React from "react";
import "./Tokenmics.scss";
import tokenmicsImg from "../../../Assets/Images/Frame.png";
import { One, Two, Three, Four, Five } from "../../../Assets/Svg/Svg";
function Tokenomics() {
  const coinData = [
    { id: 1, name: "Name", value: "Humanity Coin" },
    { id: 2, name: "$HMN", value: "Symbol " },
    { id: 3, name: "18", value: "Decimal " },
  ];
  const roadmapData = [
    {
      icon: (
        <span className="smallOne">
          <One />
        </span>
      ),
      title: "90,000,000 HMN ",
      description: "Team",
    },
    {
      icon: (
        <span className="smallOne">
          <Two />
        </span>
      ),
      title: "135,000,000 HMN ",
      description: "Private sale",
    },
    {
      icon: (
        <span className="smallOne">
          {" "}
          <Three />
        </span>
      ),

      title: "225,000,000 HMN ",
      description: "Ecosystem",
    },
    {
      icon:<span className="smallOne"><Four/></span>,
      title: "90,000,000",
      description: "Reserve",
    },
    {
      icon:<span className="smallOne"><Five/></span>,
      title: "HMN 360,000,000",
      description: "Public sales",
    },
  ];
  return (
    <div className="tokenomics">
      <div className="container">
        <h2>Tokenomics</h2>
        <div className="tokenomics_inner">
          <div className="tokenomics_inner_left">
            <div className="top">
              {coinData.map((coin, index) => (
                <div className="top_inner" key={index}>
                  <h3> {coin.value}</h3>
                  <p>{coin.name}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="tokenomics_inner_right">
            <h3>
              <span> 900,000,000 HMN </span>(100%)
            </h3>
            <p>Maximum offer</p>
          </div>
        </div>
        <div className="centerImages">
          <div className="innerImages">
            <div className="firstText">
              <p>Public sales</p>
              <h4>HMN 360,000,000</h4>
            </div>
            <div className="secondText">
              <p>Reserve</p>
              <h4>90,000,000</h4>
            </div>
            <div className="thirdText">
              <p>Team</p>
              <h4>90,000,000 HMN </h4>
            </div>
            <div className="fourthText">
              <p>Private sale</p>
              <h4>135,000,000 HMN </h4>
            </div>
            <div className="fifthText">
              <p>Ecosystem</p>
              <h4>225,000,000 HMN </h4>
            </div>
            <img
              src={tokenmicsImg}
              alt="tokenmics"
              style={{ borderRadius: "50%" }}
            />
          </div>
        </div>
        <div className="restokenMics">
          {roadmapData.map((item, index) => (
            <div className="restokenMics_one borderMap" key={index}>
              <div className="dashedborder">
                {item.icon}
                <div className="dashedborder_inner borderMapDot"></div>
              </div>
              <div className="restokenMics_one_inner">
                <p>{item.description}</p>
                <h4>{item.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tokenomics;
