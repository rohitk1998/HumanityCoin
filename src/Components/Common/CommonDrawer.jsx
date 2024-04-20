import React from "react";
import "./CommonDrawer.scss";
import metamask from "../Assets/Images/metamask.svg";
function CommonDrawer() {
  const walletsData = [
    { name: "Uniswap Wallet", imgSrc: metamask },
    { name: "Meta Mask", imgSrc: metamask },
    { name: "Wallet Connect", imgSrc: metamask },
    { name: "Coinbase Wallet", imgSrc: metamask },
  ];
  return (
    <div className="commonDrawer">
      <ul>
        {walletsData.map((wallet, index) => (
          <li key={index}>
            <img src={wallet.imgSrc} alt="meta" width={30} /> {wallet.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CommonDrawer;