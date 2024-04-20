import style from "./style.module.scss";
import { StoreImages } from "../../Storeimgaes/StoreImages";
import { Row, Col } from "antd";
import { useTranslation } from "react-i18next";

function Service() {
  const { mobileApp, swapping, coin, cardExchange, aiTrading, staking } =
    StoreImages;
  const { t } = useTranslation();
  const data = [
    {
      id: 1,
      img: coin,
      title: <>{t("landing.coinhubEcosystem.tradingPlatform.title")}</>,
      define: <>{t("landing.coinhubEcosystem.tradingPlatform.detail")}</>,
    },

    {
      id: 2,
      img: aiTrading,
      title: <>{t("landing.coinhubEcosystem.Chbtoken.title")}</>,
      define: <>{t("landing.coinhubEcosystem.Chbtoken.detail")}</>,
    },

    {
      id: 3,
      img: mobileApp,
      title: <>{t("landing.coinhubEcosystem.launchpad.title")}</>,
      define: <>{t("landing.coinhubEcosystem.launchpad.detail")}</>,
    },
  ];

  const dataSec = [
    {
      id: 4,
      img: swapping,
      title: <>{t("landing.coinhubEcosystem.businessPartners.title")}</>,
      define: <>{t("landing.coinhubEcosystem.businessPartners.detail")}</>,
    },

    {
      id: 5,
      img: cardExchange,
      title: <>{t("landing.coinhubEcosystem.supportCenter.title")}</>,
      define: <>{t("landing.coinhubEcosystem.supportCenter.detail")}</>,
    },

    {
      id: 6,
      img: staking,
      title: <>{t("landing.coinhubEcosystem.community.title")}</>,
      define: <>{t("landing.coinhubEcosystem.community.detail")}</>,
    },
  ];
  return (
    <>
      <Row gutter={22}>
        {data.map((user, i) => (
          <Col xs={24} sm={12} lg={8} className={style.mb24} key={i}>
            <div
              className={`${style.ecoCard}    ${
                i % 2 === 1 ? "isEven" : "isOdd"
              }`}
            >
              <div style={{ width: "110px", height: "100px", margin: "auto" }}>
                <img src={user.img} alt="icon" />
              </div>
              <h4>{user.title} </h4>
              <p>{user.define}</p>
            </div>
          </Col>
        ))}
        {dataSec.map((user, i) => (
          <Col xs={24} sm={12} lg={8} className={style.mb24} key={i}>
            <div
              className={`${style.ecoCard} ${i.className}  ${
                i % 2 === 1 ? "isEven" : "isOdd"
              }`}
            >
              <div style={{ width: "110px", height: "100px", margin: "auto" }}>
                <img src={user.img} alt="icon" />
              </div>
              <h4>{user.title} </h4>
              <p>{user.define}</p>
            </div>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Service;
