import React, { forwardRef } from "react";
import { Controller } from "react-hook-form";
import { fieldType } from "../../../staticObjects";
import CheckboxCustom from "../checkbox/CheckboxCustom";
import CustomError from "../customError";
import Custom_input from "../customInput/Custom_input";
import InputCustom from "../input/InputCustom";
import DatePickerCustom from "../DatePickerCustom/DatePickerCustom";
import "./index.scss";
import { CloudflareCaptcha } from "../../CloudflareCaptcha";
import CustomSelect from "../CustomSelect/CustomSelect";
import CustomRadio from "../CustomRadio/CustomRadio";
import moment from "moment";

const CommonRenderFields = forwardRef((props, refProp) => {
  const {
    name,
    placeholder,
    label,
    type,
    control,
    errors,
    checkboxTxt,
    readOnly,
    onChange,
    isSearch,
    dropOption,
    fromWhere,
    disabledDate,
    defaultValue,
    defaultValueDate
  } = props;
  const {
    passwordInput,
    concentInput,
    captchaInput,
    dateInput,
    selectInput,
    radioInput,
  } = fieldType;

  return (
    <div className="controlHeight">
      <Controller
        name={name}
        control={control}
        render={({ field }) => {
          return type === passwordInput ? (
            <InputCustom
              {...field}
              label={label}
              placeholder={placeholder}
              passwordinput={+true}
            />
          ) : type === captchaInput ? (
            <div className="captcha">
              {/* <CloudflareCaptcha {...field} /> */}
            </div>
          ) : type === dateInput ? (
            <DatePickerCustom
              {...field}
              className="date_piker"
              datepickerSimple
              label={label ?? "Date of Birth * "}
              picker="date"
              disabledDate={disabledDate}
              defaultValueDate={defaultValueDate}
              {...(fromWhere === "kyc" && {
                value: field.value ? moment(field.value) : undefined,
              })}
            />
          ) : type === concentInput ? (
            <CheckboxCustom {...field} checkboxTxt={checkboxTxt} />
          ) : type === selectInput ? (
            <CustomSelect
              {...field}
              label={label}
              placeholder={placeholder}
              isSearch={isSearch ? isSearch : false}
              drop_data={dropOption}
              defaultValue={defaultValue}
              defaultValueDate={defaultValueDate}
            />
          ) : type === radioInput ? (
            <CustomRadio {...field} />
          ) : (
            <Custom_input
              type={type}
              onChange={onChange}
              {...field}
              label={label}
              placeholder={placeholder}
              readOnly={readOnly}
            />
          );
        }}
      />
      <CustomError errors={errors} name={name} />
    </div>
  );
});

export default CommonRenderFields;
