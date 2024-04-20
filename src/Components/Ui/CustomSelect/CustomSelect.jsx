import React from "react";
import { Select } from "antd";
import "./CustomSelect.scss";

function CustomSelect(props) {
  const {
    labelValue,
    bordernone,
    outpages_select,
    innerPagesSelect,
    innerTxtField,
    label,
    labelcustom,
    fillbg,
    CustomSelectStyle,
    paddingLeft,
    placeholder,
    drop_data,
    className,
    onChange,
    value,
    option_select,
    outerClassAdd,
    isDisabled,
    isSearch,
    defaultValue,
  } = props;

  const { Option } = Select; 
  return (
    <div className={`SelectOuter ${outerClassAdd}`}>
      {label ? <label className={`label ${labelcustom}`}>{label}</label> : null}
      <Select
        className={`customSelect ${outpages_select ? "outpages_select" : ""} ${
          option_select ? "option_select" : ""
        } ${innerPagesSelect ? "innerPagesSelect" : ""} ${
          fillbg && "fillBg"
        } ${CustomSelectStyle} ${paddingLeft && "paddingLeft"} ${
          bordernone && "bordernone"
        } ${className}`}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        disabled={isDisabled}
        showSearch={isSearch ? isSearch : false}
        defaultValue={defaultValue}
        getPopupContainer={trigger => trigger.parentNode}
      >
        {drop_data?.map((data) => (
          <Option value={data.value} key={data.value}>
            {data.label}
          </Option>
        ))}
      </Select>
      {innerTxtField ? (
        <span className="innerTxtField">{innerTxtField}</span>
      ) : null}
      {labelValue ? <span className="lablvalu">{labelValue}</span> : null}
    </div>
  );
}

export default CustomSelect;
