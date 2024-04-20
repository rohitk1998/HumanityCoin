import * as yup from "yup";
import { listingAgreementForm, AssetForm, complianceForm } from "../staticObjects";

const getRequiredValidation = (field) => {
  return yup.string().required(`${field} is required`);
};

const httpsLink =
  /^((http[s]?|ftp):\/)?\/?([^:\/\s]+)((\/\w+)*\/)([\w\-\.]+[^#?\s]+)?(.*)(#[\w\-]+)?$/;

const lengthAndNonDecimal =
  /^\b([1-9]|[1-9][0-9]|[1-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9][0-9]|1000000000)\b$/;

const minMaxLengthValidation = (min, max, field) => {
  let regex = /^[A-Za-z]+$/;
  return yup
    .string()
    .required(`${field} is required`)
    .matches(regex, `${field} should not include numbers,special characters`)
    .min(min, `${field} length should be between ${min} and ${max} characters`)
    .max(max, `${field} length should be between ${min} and ${max} characters`);
};

const httpsUrlValidation = (field) => {
  return yup
    .string()
    .required(`${field} is required`)
    .matches(httpsLink, `Please enter a secure ${field}`);
};

const maxSupplyValidation = (field) => {
  let regex = /^[0]|[1-9][0-9]*$/;
  let regex1 = /^(?!0+$)[a-zA-Z0-9]+$/;
  return yup
    .string()
    .required(`${field} is required`)
    .matches(regex1, `${field} should be greater than 0`)
    .matches(
      regex,
      `${field} should not include any alphabets,special characters`
    )
    .max(11, `${field} length should be less than or equal to 10000000000`);
};

const issuePriceValidation = (field) => {
  let regex = /^[0]|[1-9][0-9]*$/;
  let regex1 = /^(?!0+$)[a-zA-Z0-9]+$/;
  return yup
    .string()
    .required(`${field} is required`)
    .matches(regex1, `${field} should be greater than 0`)
    .matches(
      regex,
      `${field} should not include any alphabets,special characters`
    )
    .max(5, `${field} should be less than or equal to 10000`);
};

const onlyAlphabetsAndPeriodString = (field) => {
  const regex = /^[A-Za-z. ]+$/;
  return yup.string()
  .required(`${field} is required`)
  .matches(regex,"Company name should not include special characters,numbers.")
};

export const listAgreementValidation = yup.object().shape({
  [listingAgreementForm.title]: minMaxLengthValidation(3, 30, "Title"),
  [listingAgreementForm.signature]: minMaxLengthValidation(3, 30, "Signature"),
});

export const assetFormValidation = yup.object().shape({
  [AssetForm.coin_name.name]: minMaxLengthValidation(3, 30, "Coin Name"),
  [AssetForm.symbol.name]: minMaxLengthValidation(1, 3, "Symbol"),
  [AssetForm.contract_address.name]: getRequiredValidation("Contract Address"),
  [AssetForm.explorer_link.name]: httpsUrlValidation("Explorer Link"),
});

export const complianceFormValidation = yup.object().shape({
  [complianceForm.company_name.name]: onlyAlphabetsAndPeriodString("Company Name"),
  [complianceForm.company_address.name]:
    getRequiredValidation("Company Address"),
  [complianceForm.whitepaper_link.name]: httpsUrlValidation("White Paper link"),
  [complianceForm.website_link.name]: httpsUrlValidation("Website link"),
});
