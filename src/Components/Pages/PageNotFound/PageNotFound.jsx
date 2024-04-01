import { Empty } from "antd";
import React from "react";
import "./PageNotFound.scss";
import { useNavigate } from "react-router-dom";
import { rootName } from "../../../utils/constant";
import { useTranslation } from "react-i18next";
import CommonButton from "../../Ui/button/CommonButton";
function PageNotFound() {
  const navigate = useNavigate();
  const { t } = useTranslation();
  return (
    <div className="pagenotfound">
      <Empty
        description={
          <>
            <span>Page Not Found</span>
            <br />
            <br />
            <CommonButton
              title={t("buttons.goToHome")}
              onClick={() => navigate(rootName)}
            />
          </>
        }
      />
    </div>
  );
}

export default PageNotFound;
