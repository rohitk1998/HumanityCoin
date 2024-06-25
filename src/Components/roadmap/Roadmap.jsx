import React from "react";
import roadmap from "../Assets/Images/roadmap.png";
import "./Roadmap.scss";
import { RoadOne, RoadFour } from "../Assets/Svg/Svg";
export default function Roadmap() {
  const roadmapData = [
    {
      icon: (
        <span className="roadOne">
          <RoadOne />
        </span>
      ),
      title: "Dec 2, 2023  - Dec 31, 2024 ",
      description: "Pre-sale phase on the launch pad sites",
    },
    {
      icon: (
        <span className="roadOne">
          <RoadOne />
        </span>
      ),
      title: "From January 1, 2025 ",
      description: "Public sale on DEXs and CEXs",
    },
    {
      icon: (
        <span className="roadOne">
          {" "}
          <RoadOne />
        </span>
      ),

      title: "From September 2025",
      description: (
        <span className="fromDate">
          Design and launch of the decentralized exchange platform
          <h3>HUMANEXT</h3>
        </span>
      ),
    },
    {
      icon: (
        <span className="roadOne">
          <RoadFour />
        </span>
      ),
      title: <span className="grayMonth">From September 2025</span>,
      description: (
        <span className="listingItem">
          Design and launch of the Humanity ecosystem
          <ul>
            <li>Blockchain = Humanity Smart Chain (HSC)</li>
            <li>Exchange - HUMANEXT</li>
            <li>Neo-bank</li>
            <li>Market</li>
          </ul>
        </span>
      ),
    },
  ];
  return (
    <div className="roadmap">
      <h2>Roadmap</h2>
      <p className="roadtext">
        Constitution of the <span>PARADISIAT</span> community throughout the
        world
      </p>
      <div className="roadmapinner">
        <div className="container">
          <img src={roadmap} alt="imgs" />
        </div>
      </div>
      <div className="resRoadMap">
        {roadmapData.map((item, index) => (
          <div className="resRoadMap_one borderMap" key={index}>
            <div className="dashedborder">
              {item.icon}
              <div className="dashedborder_inner borderMapDot"></div>
            </div>
            <div className="resRoadMap_one_inner">
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
