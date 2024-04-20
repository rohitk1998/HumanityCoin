import React from "react";
import { Input, message } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { useRef } from "react";
import "./Inputstyle.scss";
import { useState } from "react";
import { copytoClipBoard } from "../../../helpers";
function InputCustom(props) {
  const {
    eyeIcon,
    passwordinput,
    basicinput,
    currency,
    inputInnerTxt,
    innertxt,
    placeholder,
    inputInnerLargeTxt,
    innerTxtImg,
    innerImg,
    searchImg,
    inputSearch,
    label,
    labelcustom,
    InputCustomStyle,
    fillbg,
    inputsearch_ryt,
    searchimgryt,
    searchclick,
    handleOnChange,
    searchvalue,
    name,
    max,
    onKeyDown,
    onClick,
    referral,
    referral_img_ryt,
    readOnly,
    register,
    inputDisabled,
    inputPlaceHolder,
    ...rest
  } = props;

  const inputRef = useRef(null);

  const handleCopyClick = () => {
    const inputValue = inputRef.current.input.defaultValue;
    copytoClipBoard(inputValue);
  };

  return (
    <div className="inputLayout ">
      {basicinput ? (
        <>
          {label ? (
            <label className={`label ${labelcustom}`}>{label}</label>
          ) : null}
          <Input
            autoComplete="off"
            onChange={handleOnChange}
            value={searchvalue}
            name={name}
            ref={inputRef}
            className={`input_custum ${inputInnerTxt ? "inputInnerTxt" : ""}${
              inputInnerLargeTxt ? "inputInnerLargeTxt" : ""
            }${
              inputSearch ? "inputSearch" : ""
            } ${InputCustomStyle} ${fillbg} ${
              innertxt ? "innerTxtInput" : ""
            }  ${currency ? "currencyInput" : ""} ${
              inputsearch_ryt ? "inputsearch_ryt" : ""
            }
            ${referral ? "referralInput" : ""} ${
              referral_img_ryt ? "referral_img_ryt" : ""
            }
            `}
            {...rest}
            maxLength={max}
            onKeyDown={onKeyDown}
            readOnly={readOnly}
            disabled={inputDisabled}
            placeholder={inputPlaceHolder}
          />
        </>
      ) : null}

      {innertxt ? <span className="innerTxt">{innertxt}</span> : null}
      {currency ? <span className="currency">{currency}</span> : null}

      {innerTxtImg ? (
        <span className="innerTxtImg">
          {innerTxtImg}
          {innerImg}{" "}
        </span>
      ) : null}

      {searchImg ? <span className="searchImg">{searchImg}</span> : null}
      {/* {searchImg ? <img src={searchImg} alt="icon" /> : null} */}

      {searchimgryt ? (
        <span onClick={() => onClick()} className="searchimgryt">
          {searchimgryt}
        </span>
      ) : null}

      {referral_img_ryt ? (
        <>
          <span onClick={handleCopyClick} className="referralimgryt">
            {referral_img_ryt}
          </span>
          <span className="copydataIcon"></span>
        </>
      ) : null}

      {passwordinput ? (
        <>
          {label ? <label className="label">{label}</label> : null}
          <Input.Password
            autoComplete={"new-password"}
            placeholder={placeholder}
            className={`input_custum ${eyeIcon ? "eyeIcon" : ""}`}
            {...rest}
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
          />
        </>
      ) : null}
    </div>
  );
}

export default InputCustom;
