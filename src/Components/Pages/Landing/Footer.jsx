import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/Images/logo.svg";
import {
  FacebookGrp,
  InstaGrp,
  LinkedInGrp,
  NextArrow
} from "../../Assets/Svg/Svg.jsx";
import { SOCIAL_LINK } from "../../../utils/constant.js";
import { RiTwitterXFill } from "react-icons/ri";
import { BsDiscord } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";



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
          <RiTwitterXFill color="white" style={{width:"38px",height:"38px",background:"rgb(36, 36, 36)",borderRadius:"20px",padding:"7px"}} />
          </div>
          <div className="socialLink" onClick={()=>  navigateTo(SOCIAL_LINK.LINKEDIN)}>
          <LinkedInGrp />
          </div>
          <div className="socialLink" onClick={()=>  navigateTo(SOCIAL_LINK.DISCORD)}>
          <BsDiscord color="white" style={{width:"38px",height:"38px",background:"rgb(36, 36, 36)",borderRadius:"20px",padding:"7px"}} />
          </div>
          <div className="socialLink" onClick={()=>  navigateTo(SOCIAL_LINK.YOUTUBE)}>
          <FaYoutube color="white" style={{width:"38px",height:"38px",background:"rgb(36, 36, 36)",borderRadius:"20px",padding:"7px"}} />
          </div>
        </div>
        <div className="footerBottomRight">
          <Link to="/term&condition" >
            Terms & Condition
          </Link>
          {/* <Link to="/term&condition">
            Privacy Policy
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default Footer;
