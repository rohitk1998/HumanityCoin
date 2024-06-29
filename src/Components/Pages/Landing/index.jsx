import React from "react";
import { Link } from "react-router-dom";
import { StoreImages } from "../../Storeimgaes/StoreImages";
import style from "./style.module.scss";
import Faq from "../Faq/Faq.jsx";
import { Row, Col } from "antd";
import globe from "../../Assets/Images/globe.png";
import hero from "../../Assets/Images/Herosection-vid.mp4";
import bubbleGif from "../../Assets/Images/bubble-animation.mp4";
import Footer from "./Footer";
import Header from "./Header";
import { useTranslation } from "react-i18next";
import aboutbg from "../../Assets/Images/block.mp4";
import aboutTop from "../../Assets/Images/abouttopsec.mp4";
import Tokenmics from "../Faq/Tokenmics/Tokenmics";
import video from "../../Assets/Images/Second section.mp4";
import Roadmap from "../../roadmap/Roadmap";
import { appRootName } from "../../../utils/constant.js";
import { publicRouteObj } from "../../../staticObjects/routing.jsx";

const Main = () => {
  const { t } = useTranslation();
  const { trustMobileNew } = StoreImages;
  return (
    <>
      <div className={style.euroCurrency}>
        <Header />
        <section>
          <div className={style.euroMultiCurrency}>
            <div className="container">
              <Row
                className={style.euroMultiCurrency__Everything}
                gutter={[20, 30]}
              >
                <Col
                  lg={12}
                  sm={24}
                  className={style.euroMultiCurrency__Everything__left}
                >
                  <h2>
                    To Make <span>the World a Better Place!</span>
                  </h2>
                  <p>Investing in human development, every day</p>
                  <button
                    onClick={() => {
                      window.open(
                        `${appRootName}/${publicRouteObj.swap}`,
                        "_blank"
                      );
                    }}
                  >
                    Connect Wallet
                  </button>
                </Col>
                <Col
                  lg={12}
                  sm={24}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <video
                    src={hero}
                    muted
                    autoPlay
                    loop
                    playsInline
                    controls={false}
                  />
                </Col>
              </Row>
            </div>
          </div>
        </section>
        <section className={style.secondSec}>
          <div className={style.futureHumaity}>
            <video
              src={video}
              muted
              autoPlay
              loop
              playsInline
              controls={false}
            />
            <div className={style.heading}>
              <h2>The future of humanity with Humanty Coin</h2>
            </div>
          </div>
        </section>
        <section className={style.aboutTopSec}>
          <div className={style.aboutTop}>
            <video
              src={aboutTop}
              muted
              autoPlay
              loop
              playsInline
              controls={false}
            />
          </div>
        </section>
        <section id="aboutus">
          <div className={style.aboutUs}>
            <h2> About Us!</h2>
            <p>
              Humanity Coin uses technology to solve pressing social, economic
              and environmental problems, including improving access to
              education, health and clean water, among others, in disadvantaged
              regions of the world. Digital inclusion and bridging the digital
              divide are also key objectives. In short, Humanity Coin is
              dedicated to using technology and science to positively transform
              the world and make it better, more pleasant to live in…
            </p>
            <video
              src={aboutbg}
              muted
              autoPlay
              loop
              playsInline
              controls={false}
            />
          </div>
        </section>
        <section id="tokenmics">
          <Tokenmics />
        </section>
        <section id="roadmap">
          <Roadmap />
        </section>
        <section>
          <div className={style.globecontainer}>
            <video
              style={{
                minWidth: "200px",
                width: "100%",
                maxWidth: "500px",
                minHeight: "200px",
                height: "100%",
                maxHeight: "500px",
                display: "block",
              }}
              src={bubbleGif}
              muted
              autoPlay
              loop
              playsInline
              controls={false}
            />
          </div>
        </section>
        <section id="faq">
          <div className={style.faq}>
            <Faq />
          </div>
        </section>
        <div className={style.linearBg}></div>
        <div className="footerNew">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Main;
