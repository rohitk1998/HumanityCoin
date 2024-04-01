import { DatePicker } from "antd";
import React from "react";
import "./DatePickerCustom.scss";

function DatePickerCustom(props) {
  const { RangePicker } = DatePicker;
  const {
    datepickerSimple,
    datepickerSimpleStyle,
    datepickerAdvance,
    datepickerAdvanceStyle,
    datepickerTime,
    className,
    label,
    onChange,
    labelcustom,
    value,
    disabledDate,
    defaultValueDate,
    allowClear = true,
  } = props;
  return (
    <>
      {label ? <label className={`label ${labelcustom}`}>{label}</label> : null}
      {datepickerSimple && (
        <DatePicker
          labeL
          className={` customDatePicker ${
            datepickerSimpleStyle && "datepickerSimple"
          } ${className} `}
          placeholder="YY-MM-DD"
          disabledDate={
            disabledDate ? disabledDate : (d) => !d || d.isAfter(new Date())
          }
          type="date"
          onChange={onChange}
          inputReadOnly
          value={value}
          defaultValue={defaultValueDate}
          allowClear={allowClear}
        />
      )}
      {datepickerAdvance && (
        <RangePicker
          className={` customDatePicker  ${
            datepickerAdvanceStyle && "datepickerAdvance"
          } $`}
        />
      )}
      {datepickerTime && (
        <RangePicker
          showTime
          className={` customDatePicker $ ${
            datepickerTime && "datepickerTime"
          }`}
        />
      )}
    </>
  );
}

export default DatePickerCustom;
