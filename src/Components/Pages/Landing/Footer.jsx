import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/Images/logo.svg";
import {
  FacebookGrp,
  InstaGrp,
  LinkedInGrp,
  NextArrow,
  TwitterGrp,
} from "../../Assets/Svg/Svg.jsx";
import { SOCIAL_LINK } from "../../../utils/constant.js";

import "./Footer.scss";
const Footer = () => {

  const navigateTo = (url)=>{
    window.open(url, '_blank')
  }
  return (
    <div className="footer">
      <div className="footerTop">
        <div className="footerTopLeft">
          <img src={logo} alt="logo" />
        </div>
        <div className="footerTopRight">
          <div className="input-container">
            <input
              type="text"
              placeholder="Your Email ID"
              className="input-field"
            />
            <span className="icon">
              <NextArrow />
            </span>
          </div>
        </div>
      </div>
      <div className="footerBottom">
        <div className="footerBottomLeft">
          <div className="socialLink" onClick={()=>  navigateTo(SOCIAL_LINK.FACEBOOK)}>
          <FacebookGrp />
          </div>
          <div className="socialLink" onClick={()=>  navigateTo(SOCIAL_LINK.INSTAGRAM)}>
          <InstaGrp />
          </div>
          <div className="socialLink" onClick={()=>  navigateTo(SOCIAL_LINK.TWITTER)}>
          <TwitterGrp />
          </div>
          <div className="socialLink" onClick={()=>  navigateTo(SOCIAL_LINK.LINKEDIN)}>
          <LinkedInGrp />
          </div>
        </div>
        <div className="footerBottomRight">
          <Link to="#" target="_blank">
            Terms & Condition
          </Link>
          <Link to="#" target="_blank">
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
