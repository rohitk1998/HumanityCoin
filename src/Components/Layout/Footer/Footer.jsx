import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer">
      <p className="footer__text">
        &copy; {new Date().getFullYear()} CoinHub | All rights reserved.
      </p>
    </div>
  );
}

export default Footer;
