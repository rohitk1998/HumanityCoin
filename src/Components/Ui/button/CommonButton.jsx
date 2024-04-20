import React from "react";
import { Button } from "antd";
import "./CommonButtonStyle.scss";

const CommonButton = (props) => {
  const {
    leftIcon,
    onClick,
    icon,
    classicon,
    htmlType,
    disabled,
    transparent,
    btnType,
    grayBtn,
  } = props;

  return (
    <Button
      {...props}
      htmlType={btnType}
      disabled={disabled}
      type="primary"
      className={`btn_custom ${props.className ? props.className : ""} ${
        props.transparent ? "transparent" : ""
      } ${props.themeColor ? "themeColor" : ""} ${
        props.commonbtn ? "commonbtn" : ""
      } ${props.buystakebtn ? "buystakebtn" : ""} ${
        props.graybutton ? "graybutton" : ""
      }
      ${props.yearbtn ? "yearbtn" : ""} ${
        props.depositwdbtn ? "depositwdbtn" : ""
      }  ${grayBtn ? "grayBtn" : ""}`}
      onClick={onClick}
      {...(htmlType && { htmlType: htmlType })}
    >
      {leftIcon && <span className="leftIcon">{leftIcon}</span>}
      {props.title}
    </Button>
  );
};

export default CommonButton;
