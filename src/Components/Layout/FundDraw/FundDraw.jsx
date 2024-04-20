import React, { useEffect, useState } from "react";
import { Button, Drawer } from "antd";
import { Link } from "react-router-dom";
import { StoreImages } from "../../Storeimgaes/StoreImages";
import { useTranslation } from "react-i18next";

const FundDraw = () => {
  const { t } = useTranslation();
  const { CryptoDeposite, ArrowRightGreen, BankDesposite } = StoreImages;
  const [open, setOpen] = useState(false);
  useEffect(() => {
    setOpen(false);
  }, []);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button className="btn_custom" type="primary" onClick={showDrawer}>
        Deposit
      </Button>
      <Drawer
        className="fund-Draw"
        title={t("Fund.head")}
        width="534px"
        onClose={onClose}
        open={open}
      >
        <ul className="deposite-link-draw" style={{ padding: "unset" }}>
          <li onClick={() => setOpen(false)}>
            <Link to="/cryoto_deposit">
              <h6>{t("Fund.subheading1")}</h6>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div
                  className="Deposite-link"
                  style={{ display: "inline-flex", gap: "15px" }}
                >
                  <img width={65} src={CryptoDeposite} alt="icon" />
                  <h5>
                    {t("Fund.subheadingtitle1")}
                    <br />
                    <span>{t("Fund.detail1")}</span>
                  </h5>
                </div>
                <img src={ArrowRightGreen} alt="icon" />
              </div>
            </Link>
          </li>
          <li onClick={() => setOpen(false)}>
            <Link to="/bank_deposit">
              <h6>{t("Fund.subheading2")}</h6>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div
                  className="Deposite-link"
                  style={{ display: "inline-flex", gap: "10px" }}
                >
                  <img width={65} src={BankDesposite} alt="icon" />
                  <h5>
                    {t("Fund.subheadingtitle2")}
                    <br />
                    <span>{t("Fund.detail2")}</span>
                  </h5>
                </div>
                <img src={ArrowRightGreen} alt="icon" />
              </div>
            </Link>
          </li>
        </ul>
      </Drawer>
    </>
  );
};

export default FundDraw;
