import * as yup from "yup";
import { addBeneficiaryName } from "../staticObjects";
import { otpCode } from "./untils";
const { addressLabel, address, code } = addBeneficiaryName;

export const addBeneficiarySchema = yup.object().shape({
  [addressLabel]: yup
    .string()
    .required("Address label is required")
    .min(4, "Please enter at least 4 characters")
    .max(30, "Maximum 30 characters are allowed"),
  [address]: yup.string().required("Address is required"),
  [code]: otpCode,
});
