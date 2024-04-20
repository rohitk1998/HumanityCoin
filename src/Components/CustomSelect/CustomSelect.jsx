import { Select } from "antd";
import React from "react";

function CustomSelect() {
  const handleChange = (value) => {};

  return (
    <>
      <div className="custom_Select">
        <Select
          defaultValue="Today"
          onChange={handleChange}
          autoFocus={false}
          options={[
            {
              label: "Today",
              options: [
                {
                  label: "Jack",
                  value: "jack",
                },
                {
                  label: "Lucy",
                  value: "lucy",
                },
              ],
            },
            {
              label: "Engineer",
              options: [
                {
                  label: "yiminghe",
                  value: "Yiminghe",
                },
              ],
            },
          ]}
        />
      </div>
    </>
  );
}

export default CustomSelect;
