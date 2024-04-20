import { Input } from "antd";
import React from "react";
import ArrowDown from "../../Assets/Images/dropicon.svg";
import "./InputSelect.scss";

function InputSelect(props) {
  const {
    basicinput,
    labelcustom,
    label,
    placeholder,
    inputInnerTxt,
    value,
    innertxt,
  } = props;
  return (
    <div className="inputSelect ">
      {basicinput ? (
        <>
          {label ? (
            <label className={`label ${labelcustom}`}>{label}</label>
          ) : null}
          <Input
            className={`input_custum ${inputInnerTxt ? "inputInnerTxt" : ""}
             `}
            {...props}
            value={value}
            placeholder={placeholder}
          />
        </>
      ) : null}
      {innertxt ? (
        <span className="innerTxt">
          {innertxt} <ArrowDown />{" "}
        </span>
      ) : null}
    </div>
  );
}

export default InputSelect;
