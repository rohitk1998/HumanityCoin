import * as yup from "yup";
import { createAccountFieldName, signupVerifyIdentity } from "../staticObjects";
import { captcha, email, password } from "./untils";
const {
  firstName,
  lastName,
  email: emailFieldName,
  password: passwordFieldName,
  confirmPassword,
  captchaResponse,
  concent,
  referal,
} = createAccountFieldName;
const {
  firstName: first_Name,
  lastName: last_Name,
  question1,
  dateOfBirth,
  question2,
  employmentStatus,
  panNumber,
  panName,
  streetAddress,
  locality,
  stateInput,
  pinCode,
} = signupVerifyIdentity;

export const createAccountSchema = yup.object().shape(
  {
    // [firstName]: yup
    //   .string()
    //   .trim()
    //   .required("First Name is required")
    //   .max(25, "Maximum 25 characters allowed")
    //   .matches(/^[a-zA-Z]+$/, "Only alphabets are allowed"),
    // [lastName]: yup
    //   .string()
    //   .trim()
    //   .required("Last Name is required")
    //   .max(25, "Maximum 25 characters allowed")
    //   .matches(/^[a-zA-Z]+$/, "Only alphabets are allowed"),
    [emailFieldName]: email,
    [passwordFieldName]: password(),
    // [confirmPassword]: yup
    //   .string()
    //   .required("Confirm Password is required")
    //   .oneOf([yup.ref("password"), null], "Confirm Passwords must match"),
    [referal]: yup.string().when([referal], (val, schema) => {
      if (val[0]?.length > 0) {
        return yup
          .string()
          .max(25, "Maximum 25 characters allowed")
          .matches(/^[a-zA-Z0-9]*$/, "Only alphabets and digits are allowed");
      } else {
        return yup.string().notRequired();
      }
    }),
    // [captchaResponse]: captcha,
  },
  [[referal, referal]]
);

export const verifyIdentitySchema = yup.object().shape({
  [first_Name]: yup
    .string()
    .required("First Name is required")
    .matches(/^[a-zA-Z]+$/, "only alphabets are allowed"),
  [last_Name]: yup
    .string()
    .required("Last Name is required")
    .matches(/^[a-zA-Z]+$/, "only alphabets are allowed"),
  [question1]: yup.string().required("Requried"),
  // [dateOfBirth]: yup
  //   .number()
  //   .nullable()
  //   .required("DOB is required")
  //   .max(new Date(), "DOB cannot be in the future")
  //   .min(new Date("1900-01-01"), "DOB cannot be before 1900"),
  [question2]: yup.string().required("Requried"),
  [employmentStatus]: yup.string().required("Employment status is required"),
  [panNumber]: yup
    .string()
    .required("PAN number is required")
    .matches(/^[A-Z]{5}[0-9]{4}[A-Z]$/, "Invalid PAN number format"),
  [panName]: yup.string().required("PAN name is required"),
  [streetAddress]: yup.string().required("Street address is required"),
  [locality]: yup.string().required("Locality is required"),
  [pinCode]: yup
    .string()
    .required("PIN code is required")
    .matches(/^\d{6}$/, "Invalid PIN code format"),
  [stateInput]: yup.string().required("State is required"),
});
