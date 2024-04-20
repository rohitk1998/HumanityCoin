import { Modal, message } from "antd";
import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { ButtonCustom } from "../../Ui/button/ButtonCustom";
import { changePassSchemas, password } from "../../../Schema/settings";
import CommonRenderFields from "../../Ui/commonRenderFields";
import { changePasswordFields, fieldType } from "../../../staticObjects";
import Custom_input from "../../Ui/customInput/Custom_input";
import useCountdownSeconds from "../../../customHooks/useCountdownSeconds";
import CustomError from "../../Ui/customError";
import { changePassword, getOtpCode } from "../../../redux/services/setting";
import "./modal.scss";

const ChangePassword = (props) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [otpClicked, setOtpClicked] = useState(0);
  const [seconds, secondsFun] = useCountdownSeconds(60);
  const [resendStatus, setResendStatus] = useState(false);
  const { existing, confirmpass, changepass, otpField } = changePasswordFields;
  const { passwordInput } = fieldType;
  const { open, onCancel } = props;
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(changePassSchemas),
  });

  useEffect(() => {
    if (!seconds) {
      setResendStatus(false);
    }
  }, [seconds]);

  const sendOtp = async () => {
    setResendStatus(true);
    let res = await dispatch(getOtpCode({ otpClicked }));

    if (res.payload.status) {
      secondsFun();
      setTimeout(() => {
        setOtpClicked(otpClicked + 1);
      }, 1000);
    } else {
      setResendStatus(false);
    }
  };
  const onSubmit = async (data) => {
    if (!otpClicked) {
      message.error(t("getCodeFirst"));
      return;
    }

    const { changepass, confirmpass, existing, otpField } = data;
    const sendData = {
      old_password: existing,
      new_password: changepass,
      confirm_password: confirmpass,
      verification_code: otpField,
    };
    if (data) {
      let res = await dispatch(changePassword(sendData));
      if (res.payload.status) {
        onCancel(false);
      }
    }
  };

  const commanProp = { errors, control };

  return (
    <div>
      <Modal
        className="customModalStyle googleAuthModal"
        title={
          <div className="">
            <h5>{t("change")}</h5>
          </div>
        }
        centered
        open={open}
        onCancel={onCancel}
        footer={null}
      >
        <div className="description innerModelSec">
          <div className="barcodeContnt">
            <p className={"note"}>{t("reset_password.description")}</p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="changePassClass">
                <div className="">
                  <CommonRenderFields
                    {...commanProp}
                    name={existing}
                    placeholder={"Please enter old password"}
                    label={"Old Password *"}
                    type={passwordInput}
                  />
                </div>

                <div className="" style={{ marginTop: 12 }}>
                  <CommonRenderFields
                    {...commanProp}
                    name={changepass}
                    placeholder={"Please enter new password"}
                    label={"New Password *"}
                    type={passwordInput}
                  />
                </div>

                <div className="" style={{ marginTop: 12 }}>
                  <CommonRenderFields
                    {...commanProp}
                    name={confirmpass}
                    placeholder={"Please enter confirm password"}
                    label={"Confirm Password *"}
                    type={passwordInput}
                  />
                </div>
                <div className={`input_righttext passPadding pdFromLeft`}>
                  <label>Enter email OTP *</label>
                  <Controller
                    name={otpField}
                    control={control}
                    render={({ field }) => {
                      return (
                        <Custom_input
                          {...field}
                          placeholder="Please enter email OTP"
                          onlycurrency={`${
                            otpClicked
                              ? seconds
                                ? `${seconds} Seconds`
                                : `Resend OTP`
                              : "Get Code"
                          }`}
                          rightTextClass={
                            resendStatus && !seconds ? "otp_clicked" : ""
                          }
                          {...(!resendStatus && {
                            rightTextClick: () => {
                              sendOtp();
                            },
                          })}
                        />
                      );
                    }}
                  />
                  <CustomError errors={errors} name={otpField} />
                </div>
              </div>
              <ButtonCustom label="Change" htmlType="submit" anchortype />
            </form>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ChangePassword;
