import * as yup from "yup";
import { loginFieldName } from "../staticObjects";
import {
  captcha,
  email,
  otp,
  otpCode,
  password,
  passwordForLogin,
} from "./untils";

export const loginWithEmailSchema = yup.object().shape({
  [loginFieldName.email]: email,
  [loginFieldName.password]: passwordForLogin(),
  // [loginFieldName.captchaResponse]: captcha,
});

export const loginWithoutEmailSchema = yup.object().shape({
  [loginFieldName.password]: passwordForLogin(),
  // [loginFieldName.captchaResponse]: captcha,
});

export const otpSchema = yup.object().shape({
  otp: otp,
});

export const otpCodeSchema = yup.object().shape({
  code: otpCode,
});

export const twoFactorOtp = yup.object().shape({
  otp: yup
    .string()
    .required("2FA is required")
    .min(6, "2FA code should be minimum of 6 digits"),
});
