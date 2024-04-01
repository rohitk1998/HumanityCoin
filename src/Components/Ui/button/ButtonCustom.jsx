import { Button } from "antd";
import React, { Children } from "react";
import "./ButtonCustomStyle.scss";

export const ButtonCustom = (props) => {
  const {
    searchTo,
    garyBtn,
    lightBtn,
    whitebackRed,
    lessPadding,
    leftIcon,
    label,
    transparent,
    onlyIcon,
    rightIcon,
    medium,
    large,
    custmgren,
    black,
    customClass,
    lytgaryBtn,
    notstylebtn,
    yelloborderbgnone,
    orderBtn,
    greenbtn,
    lytgarydffr,
    onClick,
    disabled,
    anchortype,
    redbtn,
    style,
    htmlType,
    centericon,
    title,
    ClassName,
  } = props;
  return (
    <Button
      style={style}
      className={`btnCustom  ${ClassName} ${garyBtn ? "garyBtn" : ""}${
        transparent ? "transparent" : ""
      }${lytgaryBtn ? "lytgaryBtn" : ""} ${lytgarydffr ? "lytgarydffr" : ""}${
        lightBtn ? "lightBtn" : ""
      }${whitebackRed ? "whitebackRed" : ""}${
        anchortype ? "anchortype" : ""
      }  ${custmgren ? "custmgren" : ""} ${orderBtn ? "orderBtn" : ""}
       ${lessPadding ? "lessPadding" : ""} ${medium ? "medium" : ""}${
        black ? "black" : ""
      } ${large ? "large" : ""} ${customClass} ${greenbtn ? "greenbtn" : ""}
      ${redbtn ? "redbtn" : ""}${notstylebtn ? "notstylebtn" : ""}${
        yelloborderbgnone ? "yelloborderbgnone" : ""
      }`}
      onClick={onClick}
      disabled={disabled}
      htmlType={htmlType && htmlType}
      title={title ? title : ""}
    >
      {leftIcon && <span className="leftIcon">{leftIcon}</span>}
      {label && label}
      {onlyIcon && <span className="onlyIcon">{onlyIcon}</span>}
      {searchTo && <img className="rightIcon" src={searchTo} alt="img" />}
    </Button>
  );
};
