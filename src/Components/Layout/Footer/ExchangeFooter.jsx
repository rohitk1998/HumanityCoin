import React from "react";
import style from "../../../index.scss";
function ExchangeFooter() {
  return (
    <div className={`${style.trade} exchangeFooter`}>
      <p>
        &copy; {new Date().getFullYear()} CoinHub | All rights reserved.
      </p>
    </div>
  );
}

export default ExchangeFooter;
