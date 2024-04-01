import React from "react";
import { Checkbox } from "antd";
import "./Checkboxstyle.scss";
function CheckboxCustom(props) {
  const { checkboxTxt, checkbox, customClass, name, onChange } = props;
  return (
    <div>
      <Checkbox
        name={name}
        onChange={onChange}
        className={`checkboxCustom ${checkbox ? "checkbox" : ""
          } ${customClass}`}
        {...props}
      >
        {checkboxTxt ? (
          <span className="checkboxTxt">{checkboxTxt}</span>
        ) : null}
      </Checkbox>
    </div>
  );
}

export default CheckboxCustom;
