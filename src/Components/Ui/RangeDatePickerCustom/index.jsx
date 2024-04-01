import { DatePicker } from "antd";
import React, { useState } from "react";
import "./index.scss";
import moment from "moment";
const { RangePicker } = DatePicker;

function RangeDatePickerCustom(props) {
  const [dates, setDates] = useState(null);
  const disabledDate = (current) => {
    if (!dates) {
      return current.isAfter();
    }
    const tooLate = dates[0] && current.diff(dates[0], "months") >= 1;
    const tooEarly = dates[1] && dates[1].diff(current, "months") >= 1;
    return !!tooEarly || !!tooLate || current.isAfter();
  };
  const onOpenChange = (open) => {
    if (open) {
      setDates([null, null]);
    } else {
      setDates(null);
    }
  };
  const defaultStartDate = moment().subtract(1, "months");
  return (
    <RangePicker
      placeholder={["From", "To"]}
      className="cstmRangeDatePicker"
      value={dates || props.value}
      disabledDate={disabledDate}
      onCalendarChange={(val) => {
        setDates(val);
      }}
      onChange={(val) => {
        if (val) {
          props.getDate(val);
        }
      }}
      onOpenChange={onOpenChange}
      changeOnBlur
      defaultPickerValue={[defaultStartDate, moment()]}
    />
  );
}

export default RangeDatePickerCustom;
