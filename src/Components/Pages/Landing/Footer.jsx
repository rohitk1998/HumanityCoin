import React from "react";
import { Link } from "react-router-dom";
import style from "./style.module.scss";
import { StoreImages } from "../../Storeimgaes/StoreImages";
const Footer = () => {
  const { insta, fb, telegram, twitter, linkedIn } = StoreImages;
  return (
    <>
      <div className={style.footerKazix}>
        <div className={style.copyRight}>
          <div className="container">
            <div className={style.copyRight__inner}>
              <p>
                &copy; {new Date().getFullYear()} Humanity Coin | All rights reserved.
              </p>
              <div className={style.copyRight__inner_links}>
                <Link
                  to="https://www.facebook.com/Coinhub.Mongolia/"
                  target="_blank"
                >
                  <img src={fb} alt="img" />
                </Link>
                <Link to="https://twitter.com/CoinhubMongolia" target="_blank">
                  <img src={twitter} alt="img" />
                </Link>
                <Link
                  to="https://www.instagram.com/coinhub.mongolia/"
                  target="_blank"
                >
                  <img src={insta} alt="img" />
                </Link>
                <Link
                  to="https://www.linkedin.com/company/coinhub-mongolia/"
                  target="_blank"
                >
                  <img src={linkedIn} alt="img" />
                </Link>
                <Link to="https://t.me/coinhub_CHB_owners" target="_blank">
                  <img src={telegram} alt="img" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
