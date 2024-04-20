import React from "react";
import { Link } from "react-router-dom";
import { StoreImages } from "../../Storeimgaes/StoreImages";
import style from "./style.module.scss";
import { Row, Col } from "antd";
import Footer from "./Footer";
import Header from "./Header";
import { useTranslation } from "react-i18next";
import uparrow from "../../Assets/Images/uparrows.svg";
import arrow from "../../Assets/Images/arrow.svg";
import unigrant from "../../Assets/Images/unigrants.png";
import humanityTitle from "../../Assets/Images/humanityTitle.svg";


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
              <Row className={style.euroMultiCurrency__Everything}>
                <Col
                  lg={24}
                  className={style.euroMultiCurrency__Everything__left}
                >
                  <p className={style.uniswap}>
                    {" "}
                    <span>
                      {/* <img src={humanityTitle} width={200} height={100} /> */}
                      HUMANITY
                       COIN</span>
                  </p>
                  <p>
                    Swap, earn, and build on the leading decentralized crypto
                    trading protocol.
                  </p>
                  {/* <div className={style.socialIcons}>
                    <Link to="#" className={style.getStarted}>
                      <img src={twitter} alt="twitter" />
                    </Link>
                    <Link to="#" className={style.getStarted}>
                      <img src={twitter} alt="twitter" />
                    </Link>
                    <Link to="#" className={style.getStarted}>
                      <img src={twitter} alt="twitter" />
                    </Link>
                  </div> */}
                </Col>
              </Row>
            </div>
          </div>
        </section>
        <div className={style.alltimetrade}>
          <h2>
            $1.8T+<p>Trade Volume</p>
          </h2>
          <h2>
            224M+<p>All Time Trades</p>
          </h2>
          <h2>
            300+<p>Integrations</p>
          </h2>
          <h2>
            4,400+<p>Community Delegates</p>
          </h2>
        </div>
        <section>
          <div className={style.unswapEcosystem}>
            <div className="container">
              <Row className={style.unswapEcosystem__growing} gutter={[0, 30]}>
                <Col
                  lg={12}
                  xs={24}
                  className={style.unswapEcosystem__growing__left}
                >
                  <Link>
                    UNISWAP ECOSYSTEM{" "}
                    <img src={arrow} alt="arrow" className="rightArrow" />
                  </Link>
                  <h2>A growing network of DeFi Apps.</h2>
                  <p>
                    Developers, traders, and liquidity providers participate
                    together in a financial marketplace that is open and
                    accessible to all.
                  </p>
                </Col>
                <Col
                  lg={12}
                  xs={24}
                  className={style.unswapEcosystem__growing__right}
                >
                  <h2>300+</h2>
                  <p>Integrations</p>
                  {/* <Link>
                    Explore all<span> ↗</span>
                  </Link> */}
                  {/* <img
                    src={trustMobileNew}
                    className={style.fundADDImg}
                    alt="img"
                  /> */}
                </Col>
              </Row>
            </div>
          </div>
        </section>
        <section>
          <div className={style.funding}>
            <div className="container">
              <Link className={style.developers}>
                Developers{" "}
                <img src={arrow} alt="arrow" className="rightArrow" />{" "}
              </Link>
              <Row className={style.funding__data} gutter={[35, 30]}>
                <Col lg={16} xs={24} className={style.funding__data__left}>
                  <div className={style.documentation}>
                    <h2>Superpowers for DeFi developers.</h2>
                    <p>
                      Build Defi apps and tools on the largest crypto project on
                      Ethereum. Get started with quick start guides, protocol
                      documentation, a Javascript SDK, and fully open source
                      code.
                    </p>
                    <Link>
                      Documentation
                      <span>
                        {" "}
                        <img src={uparrow} alt="imgs" />
                      </span>
                    </Link>
                  </div>
                  <div className={style.whitepaper}>
                    <div className={style.whitepaper__left}>
                      <Link>
                        {" "}
                        V3 Whitepaper
                        <span>
                          {" "}
                          <img src={uparrow} alt="imgs" />
                        </span>
                      </Link>
                    </div>
                    <div className={style.whitepaper__right}>
                      <Link>
                        {" "}
                        Github
                        <span>
                          <img src={uparrow} alt="imgs" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </Col>
                <Col lg={8} xs={24} className={style.funding__data__right}>
                  <div className={style.applyFunding}>
                    <img src={unigrant} alt="unigrant" />
                    <h4>Apply for funding from the Uniswap Grants Program </h4>
                    <p>
                      Get paid to build the future of finance. Uniswap
                      Governance offers grant funding for people building apps,
                      tools, and activities on the Uniswap Protocol.
                    </p>
                    <Link>
                      Learn More
                      <span>
                        {" "}
                        <img src={uparrow} alt="imgs" />
                      </span>
                    </Link>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </section>
        <section>
          <div className={style.protocol}>
            <div className="container">
              <Link className={style.developers}>
                PROTOCOL GOVERNANCE{" "}
                <img src={arrow} alt="arrow" className="rightArrow" />
              </Link>
              <Row className={style.protocol__data} gutter={[30, 30]}>
                <Col lg={13} xs={24} className={style.protocol__data__left}>
                  <div className={style.documentation}>
                    <h2>Governed by the community.</h2>
                    <p>
                      The Uniswap Protocol is managed by a global community of
                      UNI token holders and delegates
                    </p>
                    <Link>
                      Read More
                      <span>
                        {" "}
                        <img src={uparrow} alt="imgs" />
                      </span>
                    </Link>
                  </div>
                </Col>
                <Col lg={11} xs={24} className={style.protocol__data__right}>
                  <div className={style.governaceFunding}>
                    <div className={style.governaceFunding__data}>
                      <h2>
                        {" "}
                        Governance Forum
                        <span>
                          {" "}
                          <img src={uparrow} alt="imgs" />
                        </span>
                      </h2>
                      <p>
                        Participate by proposing upgrades and discussing the
                        future of the protocol with the Uniswap community.
                      </p>
                    </div>
                    <div className={style.governaceFunding__data}>
                      <h2>
                        {" "}
                        Sybil
                        <span>
                          {" "}
                          <img src={uparrow} alt="imgs" />
                        </span>
                      </h2>
                      <p>
                        Vote on offchain proposals with the Snapshot interface.
                        Votes are weighted by the number of UNI delegates.
                      </p>
                    </div>
                    <div className={style.governaceFunding__data}>
                      <h2>
                        {" "}
                        Governance Portal
                        <span>
                          {" "}
                          <img src={uparrow} alt="imgs" />
                        </span>
                      </h2>
                      <p>
                        Vote on official Uniswap governance proposals and view
                        past proposals.
                      </p>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
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
