import style from "./style.module.scss";
import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { loginActiveScreen } from "../../../staticObjects";

function LoginCard({ currentActive, activeScreen, children, outerText }) {
  const { t } = useTranslation();
  return (
    <div className={style.loginEmail}>
      <div className={style.loginEmail__outerline}>
        <div className={style.loginEmail__outerline__main}>{children}</div>
        {currentActive !== loginActiveScreen.phoneOrEmail && (
          <Link
            to="#"
            onClick={(e) => {
              e.preventDefault();
              activeScreen(loginActiveScreen.phoneOrEmail);
            }}
          >
            {t("login.cancel_signing_in")}
          </Link>
        )}
      </div>
    </div>
  );
}

export default LoginCard;
