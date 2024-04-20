import React from "react";
import { useTranslation } from "react-i18next";
import { ErrorMessage } from "@hookform/error-message";
function CustomError(props) {
  const { t } = useTranslation();
  const { errors, name } = props;
  return (
    <ErrorMessage
      errors={errors}
      name={name}
      render={({ message }) => <span className="errorCls">{t(message)}</span>}
    />
  );
}

export default CustomError;
