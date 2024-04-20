import React from "react";
import { Radio } from "antd";
const CustomRadio = (props) => {
  const { value, onChange } = props;

  return (
    <div className="radiobtn">
      <Radio.Group onChange={onChange} value={value}>
        <Radio value={true}>Yes</Radio>
        <Radio value={false}>No</Radio>
      </Radio.Group>
    </div>
  );
};
export default CustomRadio;
