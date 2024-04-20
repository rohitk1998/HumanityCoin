import React from "react";
import { Input } from "antd";
import "./Custom_input.scss";
function Custom_input(props) {
  const {
    label,
    placeholder,
    outpages_select,
    imgcontent,
    btcimges,
    currency,
    onlycurrency,
    onlyCurrencyStyle,
    onChange,
    name,
    value,
    marginTopNone,
    max,
    disable,
    type,
    rightTextClick,
    children,
    icon,
    iconfirst,
    rightTextClass,
    height,
    readOnly,
    customClass
  } = props;
  return (
    <>
      <div  className={`input_textimg ${customClass ? customClass : ""}`}>
        {label ? <label className="label">{label}</label> : null}
        <Input
          style={{height: height && height}}
          disabled={disable}
          type={type}
          readOnly={readOnly}
          maxLength={max}
          value={value}
          name={name}
          placeholder={placeholder}
          onChange={(e) => onChange(e)}
          className={`input_amount ${
            outpages_select ? "outpages_select" : ""
          } ${imgcontent ? "paddingRight" : ""} ${
            onlyCurrencyStyle ? "onlyCurrency" : ""
          } ${marginTopNone ? "marginTopNone" : ""} `}
          // ${customClass ? customClass : ""}
        />
        {imgcontent ? (
          <span className="input_imgcontent">
            <img src={btcimges} alt="images" />
            <p>{currency}</p>
          </span>
        ) : null}
        {icon ? (
          <span className="input_imgcontent">
            <img src={iconfirst} alt="images" />
          </span>
        ) : null}
        {onlycurrency ? (
          <span className="input_imgcontent" onClick={rightTextClick}>
            <p className={rightTextClass}>{onlycurrency}</p>
          </span>
        ) : null}
        {children}
      </div>
    </>
  );
}

export default Custom_input;
