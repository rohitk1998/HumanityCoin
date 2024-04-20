import React, { useState } from "react";
import PhoneInput from "antd-phone-input/legacy";

function CustomPhoneNoInput(props) {
  const { enableSearch, value, onChange, label, onPressEnter } = props;
  const [stopFirstRender, setFirstRender] = useState(false);
  return (
    <div>
      {label && <label className={`label`}>{label}</label>}
      <PhoneInput
        enableSearch={enableSearch ? enableSearch : false}
        value={value}
        onChange={(obj) => {
          if (stopFirstRender) {
            if (obj === "+") {
              onChange("");
            } else {
              onChange(obj);
            }
          } else {
            setFirstRender(true);
          }
        }}
        //   excludeCountries={["us", "ca", "uk"]}
        preferredCountries={["in", "ae"]}
        onPressEnter={onPressEnter}
      />
    </div>
  );
}

export default CustomPhoneNoInput;
