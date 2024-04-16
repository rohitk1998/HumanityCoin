import React from "react";
import { Link } from "react-router-dom";
import { StoreImages } from "../../Storeimgaes/StoreImages";
import "./Footer.scss"
const Footer = () => {
  const { insta, fb, telegram, twitter, linkedIn } = StoreImages;
  return (
    <>
      <div className='footerKazix'>
        <div className='copyRight'>
          <div className="container">
            <div className='inner'>
              <p>
                &copy; {new Date().getFullYear()} Humanity Coin | All rights reserved.
              </p>
              <div className='links'>
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
