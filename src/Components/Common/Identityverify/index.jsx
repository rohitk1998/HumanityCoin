import React from "react";
import style from "./style.module.scss";
import CommonButton from "../../Ui/button/CommonButton";
import { InfoCircleOutlined } from "@ant-design/icons";
import { Trans, useTranslation } from "react-i18next";
import Kyc from "../../Assets/Images/kyc.png";
import { primaryRoutes } from "../../../staticObjects";
import { rootName } from "../../../utils/constant";
import { useNavigate } from "react-router-dom";
function Identityverify({ cbOnClick, title }) {
  const { t } = useTranslation();
  const geturl = window.location.pathname;
  const navigate = useNavigate();

  const goSettingpage = () => {
    cbOnClick();
    navigate(`${rootName}${primaryRoutes.setting}`);
  };

  return (
    <div className={`${style.profileKycSec} ${style.profileKycmodal}`}>
      <img src={Kyc} />
      <h4> Please complete your KYC</h4>
      <p>
        Please take a moment to verify some additional information to complete
        your account
      </p>
      <CommonButton
        title={
          geturl === "/setting"
            ? title ?? "Start Your KYC"
            : "Go To Setting page"
        }
        onClick={geturl === "/setting" ? cbOnClick : goSettingpage}
      />
    </div>
  );
}
export default Identityverify;
