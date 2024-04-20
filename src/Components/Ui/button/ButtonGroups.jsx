import React, { useState } from "react";

function ButtonGroups({ handleTabChange, activeTab }) {
  return (
    <div className="buySellTabs">
      <button
        onClick={()=>{
          if(activeTab == "sell"){
            handleTabChange()
          }
          
        }}
        className={`buySellTabs__btns ${
          activeTab === "buy" && "buySellTabs__btns--active"
        }`}
      >
        Buy
      </button>
      <button
        onClick={()=>{
          if(activeTab == "buy"){
            handleTabChange()
          }
        }}
        style={{backgroundColor: activeTab == "sell"  ? "#d50303" : ""}}
        className={`buySellTabs__btns   ${
          activeTab === "sell" && "buySellTabs__btns--active sellRed"
        }`}
      >
        Sell
      </button>
    </div>
  );
}

export default ButtonGroups;
