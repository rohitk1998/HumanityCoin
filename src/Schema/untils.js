/* eslint-disable */
import * as yup from "yup";
import { changePasswordFields } from "../staticObjects";

export const emailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

export const password = (isNew) =>
  yup
    .string()
    .required(isNew ? "Please enter new password" : "Password is required")
    .matches(
      passwordRegex,
      "Password must be a minimum of 8 characters including number, upper, lower and one special character"
    );

export const passwordForLogin = () =>
  yup
    .string()
    .required("Password is required");
export const captcha = yup.string().required("Captcha is required");
export const email = yup
  .string()
  .transform((value, originalValue) => (typeof originalValue === 'string' ? originalValue.trim() : originalValue))
  .matches(emailRegex, "Please enter valid email")
  .required("Email is required");

export const otp = yup
  .string()
  .required("OTP is required")
  .matches(/^[0-9]+$/, "Must be only digits")
  .max(5, "Max OTP limit should be 5 digits.");

export const otpCode = yup
  .string()
  .required("Code is required")
  .matches(/^[0-9]+$/, "Must be only digits")
  .max(6, "Max code limit should be 6 digits.");
