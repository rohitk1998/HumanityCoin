import React from "react";
import style from "./style.module.scss";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { calculateTotalUsdBal,calculateTotalUsdBalNew } from "../../helpers";
import { totalUSDType } from "../../staticObjects";
import { thousandDigit } from "../../helpers/thousand_digit";

function MyBalance() {
  const { t } = useTranslation();
  const { balanceList } = useSelector((state) => state.commonApiData);
  return (
    <div className={`${style.mybalance} `}>
      <h2>{t("home.my_balance")}</h2>
      <h4>${thousandDigit(calculateTotalUsdBalNew(balanceList, totalUSDType.all))} </h4>
    </div>
  );
}

export default MyBalance;
