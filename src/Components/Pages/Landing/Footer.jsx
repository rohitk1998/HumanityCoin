import React from "react";
import { Link } from "react-router-dom";
import { StoreImages } from "../../Storeimgaes/StoreImages";
// import youtubeIcon from ".";

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
                  to="https://www.fb.me/hmncrypto"
                  target="_blank"
                >
                  <img src={fb} alt="img" />
                </Link>
                <Link to="https://x.com/Humanityhmn" target="_blank">
                  <img src={twitter} alt="img" />
                </Link>
                <Link
                  to="https://instagram.com/humanity_hmn?igshid=NGVhN2U2NjQ0Yg=="
                  target="_blank"
                >
                  <img src={insta} alt="img" />
                </Link>
                <Link
                  to="https://www.linkedin.com/humanityhmn"
                  target="_blank"
                >
                  <img src={linkedIn} alt="img" />
                </Link>
                <Link to="https://t.me./HMNtoken" target="_blank">
                  <img src={telegram} alt="img" />
                </Link>
                {/* <Link to="https://t.me./HMNtoken" target="_blank">
                  <img src={youtubeIcon} alt="youtube"/>
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
