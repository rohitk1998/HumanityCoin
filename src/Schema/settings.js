/* eslint-disable */
import * as yup from "yup";
import {
  addBankObj,
  changePasswordFields,
  corporateFieldNameStep1,
  corporateFieldNameStep2,
  forgotPasswordFields,
  retailFieldName,
  retailFieldNameStep2,
} from "../staticObjects";
import { captcha, email, otp, otpCode, password } from "./untils";

const { email: forgotEmail, captchaResponse, code } = forgotPasswordFields;
const { confirmpass, existing, changepass, otpField } = changePasswordFields;
const { chooseAccount, accountNo, accountName } = addBankObj;

export const confirmPass = yup
  .string()
  .required("Please enter confirm password")
  .oneOf([yup.ref("changepass"), null], "Confirm password should be same");

export const forgotPassSchemas = yup.object().shape({
  [forgotEmail]: email,
  [code]: otpCode,
  // [captchaResponse]: captcha,
});

export const createPassSchemas = yup.object().shape({
  [changepass]: password(true),
  [confirmpass]: confirmPass,
});

export const changePassSchemas = yup.object().shape({
  [existing]: yup.string().required("Please enter old password"),
  [changepass]: password(true),
  [confirmpass]: confirmPass,
  [otpField]: otp,
});

const {
  piNationality,
  piFirstName,
  piLastName,
  piDob,
  piGender,
  piIdNumber,
  piCivilNumber1,
  piCivilNumber2,
  piCivilNumber3,
  prCountry,
  prProvinceOrCity,
  prSumOrDistrict,
  prBagOrKhoroo,
  prStreet,
  prRegion,
  prApartment,
  prAddressDetails,
  isAddressSame,
  craCountry,
  craProvinceOrCity,
  craSumOrDistrict,
  craBagOrKhoroo,
  craStreet,
  craRegion,
  craApartment,
  craAddressDetails,
} = retailFieldName;

const onlyValidated = (txt, maxLen = 50) => {
  return yup
    .string()
    .required(txt)
    .max(maxLen, `Maximum ${maxLen} characters are allowed`);
};

const commonForString = (txt, field, bool, maxLen = 50) => {
  return yup.string().when(field, {
    is: bool,
    then: (schema) =>
      schema
        .required(txt)
        .max(maxLen, `Maximum ${maxLen} characters are allowed`),
  });
};

const commonForNumber = (txt, field, bool, maxLen = 12, type) => {
  return yup.string().when(field, {
    is: bool,
    then: (schema) =>
      schema
        .required(txt)
        .max(maxLen, `Maximum ${maxLen} digits are allowed`)
        .matches(/^[0-9]+$/, "Must be only digits"),
  });
};

export const addBankSchema = yup.object().shape({
  [chooseAccount]: onlyValidated("Bank Account is required"),
  [accountNo]: yup
    .string()
    .matches(/^[0-9]+$/, "Account Number should only contain numbers")
    .max(25, "Maximum 12 characters allowed")
    .required("Account Number is required"),
  [accountName]: yup
    .string()
    .trim()
    .required("Account Name is required")
    .max(25, "Maximum 25 characters allowed")
    .matches(/^[a-zA-Z ]+$/, "Only alphabets are allowed"),
});
export const retailKycFirstSchema = yup.object().shape({
  [piNationality]: onlyValidated("Nationality is required"),
  [piFirstName]: yup
    .string()
    .trim()
    .required("First Name is required")
    .max(25, "Maximum 25 characters allowed")
    .matches(/^[a-zA-Z]+$/, "Only alphabets are allowed"),
  [piLastName]: yup
    .string()
    .trim()
    .required("Last Name is required")
    .max(25, "Maximum 25 characters allowed")
    .matches(/^[a-zA-Z]+$/, "Only alphabets are allowed"),
  [piDob]: yup.date().required("Date of birth is required"),
  [piGender]: onlyValidated("Gender is required"),
  [piIdNumber]: yup
    .string()
    // .required("Civil ID is required")
    .matches(/^[0-9\s]*$/, "Must be only digits")
    .max(12, `Maximum 12 digits are allowed`),
  [piCivilNumber1]: onlyValidated("Cyrillic letters is required"),
  [piCivilNumber2]: onlyValidated("Cyrillic letters is required"),
  [piCivilNumber3]: yup
    .string()
    .required("State registration number is required")
    .matches(/^[0-9]+$/, "Must be only digits")
    .max(8, `Maximum 8 digits are allowed`),

  [prCountry]: onlyValidated("Country is required"),
  [prProvinceOrCity]: onlyValidated("Province or City is required"),
  [prSumOrDistrict]: onlyValidated("Sum or District is required"),
  [prBagOrKhoroo]: onlyValidated("Bag or Khoroo is required"),
  [prStreet]: onlyValidated("Street is required"),
  // [prRegion]: onlyValidated("Region is required"),
  [prApartment]: onlyValidated("Apartment is required"),
  [prAddressDetails]: onlyValidated("Address details is required"),

  [craCountry]: commonForString(
    "Current address is required",
    isAddressSame,
    false
  ),
  [craProvinceOrCity]: commonForString(
    "Province or City is required",
    isAddressSame,
    false
  ),
  [craSumOrDistrict]: commonForString(
    "Sum or District is required",
    isAddressSame,
    false
  ),
  [craBagOrKhoroo]: commonForString(
    "Bag or Khoroo is required",
    isAddressSame,
    false
  ),
  [craStreet]: commonForString("Street is required", isAddressSame, false),
  [craRegion]: commonForString("Region is required", isAddressSame, false),
  [craApartment]: commonForString(
    "Apartment is required",
    isAddressSame,
    false
  ),
  [craAddressDetails]: commonForString(
    "Address details is required",
    isAddressSame,
    false
  ),
});

const {
  isUnemployed,
  empWorkplace,
  empAreasOfActivity,
  empPosition,
  empAddressOfOrganisation,
  empContactNumber,
  isAccountOnBehalf,
  behalfFirstName,
  behalfLastName,
  behalfDob,
  behalfIdNumber,
  behalfCivilNumber,
  behalfContactNumber,
  isPoliticalPerson,
  poliPrevOrganisation,
  poliPrevPosition,
  isPoliticalRelatives,
  poliRelFirstName,
  poliRelLastName,
  poliRelOrganisationName,
  poliRelPosition,
  isPoliticalAssociates,
  poliAssoFirstName,
  poliAssoLastName,
  poliAssoOrganisationName,
  poliAssoPosition,
} = retailFieldNameStep2;

const commonForContact = (txt, field, bool, maxLen = 12) => {
  return yup.string().when(field, {
    is: bool,
    then: (schema) =>
      schema
        .required(txt)
        .matches(/^[0-9]+$/, "Must be only digits")
        .max(12, `Maximum ${maxLen} digits are allowed`),
  });
};

export const retailKycSecondSchema = yup.object().shape({
  [empWorkplace]: commonForString(
    "Name of the workplace is required",
    isUnemployed,
    false
  ),
  [empAreasOfActivity]: commonForString(
    "Areas of activity is required",
    isUnemployed,
    false
  ),
  [empPosition]: commonForString("Position is required", isUnemployed, false),
  [empAddressOfOrganisation]: commonForString(
    "Address of the organisation is required",
    isUnemployed,
    false
  ),
  [empContactNumber]: commonForContact(
    "Contact number is required",
    isUnemployed,
    false
  ),

  [behalfFirstName]: commonForString(
    "First name is required",
    isAccountOnBehalf,
    true
  ),
  [behalfLastName]: commonForString(
    "Last name is required",
    isAccountOnBehalf,
    true
  ),
  [behalfDob]: yup.date().when("isAccountOnBehalf", {
    is: (bo) => bo === true,
    then: (schema) => schema.required("Date of birth is required"),
    otherwise: (schema) => schema.notRequired(),
  }),

  [behalfIdNumber]: commonForContact(
    "ID number is required",
    isAccountOnBehalf,
    true
  ),

  // [behalfIdNumber]: yup
  //   .string()
  //   .when(isAccountOnBehalf, {
  //     is: isAccountOnBehalf,
  //     then: yup.string().required("ID number is required"),
  //     otherwise: yup.string()
  //   })
  //   .matches(/^[0-9]+$/, "Must be only digits")
  //   .max(12, "Maximum 12 digits are allowed"),

  // [behalfCivilNumber]: commonForString(
  //   "Civil registration number is required",
  //   isAccountOnBehalf,
  //   true
  // ),
  [behalfContactNumber]: commonForContact(
    "Contact number is required",
    isAccountOnBehalf,
    true
  ),

  [poliPrevOrganisation]: commonForString(
    "Previous organisation is required",
    isPoliticalPerson,
    true
  ),
  [poliPrevPosition]: commonForString(
    "current position is required",
    isPoliticalPerson,
    true
  ),

  [poliRelFirstName]: commonForString(
    "First name is required",
    isPoliticalRelatives,
    true
  ),
  [poliRelLastName]: commonForString(
    "Last name is required",
    isPoliticalRelatives,
    true
  ),
  [poliRelOrganisationName]: commonForString(
    "Organisation name is required",
    isPoliticalRelatives,
    true
  ),
  [poliRelPosition]: commonForString(
    "Position is required",
    isPoliticalRelatives,
    true
  ),

  [poliAssoFirstName]: commonForString(
    "First name is required",
    isPoliticalAssociates,
    true
  ),
  [poliAssoLastName]: commonForString(
    "Last name is required",
    isPoliticalAssociates,
    true
  ),
  [poliAssoOrganisationName]: commonForString(
    "Organisation name is required",
    isPoliticalAssociates,
    true
  ),
  [poliAssoPosition]: commonForString(
    "Position is required",
    isPoliticalAssociates,
    true
  ),
});

const {
  orgNameOfOrganisation,
  orgAreaOfActivity,
  orgStateRegistrationNumber,
  orgIDNumber,
  orgContactNumber,
  isLegalEntity,
  legalOrganisationName,
  legalAreaOfActivity,
  legalStateRegistrationNumber,
  legalRegisterNumber,
  legalContactPhoneNumber,
  isHolderPoli,
  holderPoliFirstName,
  holderPoliLastName,
  holderPoliPosition,
  isHolderPoliRela,
  holderRelaFirstName,
  holderRelaLastName,
  holderRelaPosition,
  isHolderAsso,
  holderAssoFirstName,
  holderAssoLastName,
  holderAssoPosition,
} = corporateFieldNameStep1;

export const corporateKycFirstSchema = yup.object().shape({
  [orgNameOfOrganisation]: onlyValidated("Name of organisation is required"),
  [orgAreaOfActivity]: onlyValidated("Area of activity is required"),
  [orgStateRegistrationNumber]: yup
    .string()
    .required("State registration Id is required")
    .matches(/^[0-9]+$/, "Must be only digits")
    .max(7, `Maximum 7 digits are allowed`),

  // [orgIDNumber]: onlyValidated("ID number is required"),
  [orgContactNumber]: yup
    .string()
    .required("Contact number is required")
    .matches(/^[0-9]+$/, "Must be only digits")
    .max(12, `Maximum 12 digits are allowed`),

  [legalOrganisationName]: commonForString(
    "Organisation name is required",
    isLegalEntity,
    true
  ),
  [legalAreaOfActivity]: commonForString(
    "Area of activity is required",
    isLegalEntity,
    true
  ),
  [legalStateRegistrationNumber]: commonForNumber(
    "State registration number is required",
    isLegalEntity,
    true,
    50
  ),
  [legalRegisterNumber]: commonForNumber(
    "Register number is required",
    isLegalEntity,
    true,
    7
  ),

  [legalContactPhoneNumber]: commonForContact(
    "Contact number is required",
    isLegalEntity,
    true
  ),

  [holderPoliFirstName]: commonForString(
    "First name is required",
    isHolderPoli,
    true
  ),
  [holderPoliLastName]: commonForString(
    "Last name is required",
    isHolderPoli,
    true
  ),
  [holderPoliPosition]: commonForString(
    "Position is required",
    isHolderPoli,
    true
  ),

  [holderRelaFirstName]: commonForString(
    "First name is required",
    isHolderPoliRela,
    true
  ),
  [holderRelaLastName]: commonForString(
    "Last name is required",
    isHolderPoliRela,
    true
  ),
  [holderRelaPosition]: commonForString(
    "Position is required",
    isHolderPoliRela,
    true
  ),

  [holderAssoFirstName]: commonForString(
    "First name is required",
    isHolderAsso,
    true
  ),
  [holderAssoLastName]: commonForString(
    "Last name is required",
    isHolderAsso,
    true
  ),
  [holderAssoPosition]: commonForString(
    "Position is required",
    isHolderAsso,
    true
  ),
});

const {
  praCountry,
  praProvince,
  praDistrict,
  praKhorro,
  praApartment,
  praDoor,
} = corporateFieldNameStep2;

export const corporateKycSecondSchema = yup.object().shape({
  [praCountry]: onlyValidated("Country is required"),
  [praProvince]: onlyValidated("Province, City is required"),
  [praDistrict]: onlyValidated("District is required"),
  [praKhorro]: onlyValidated("Khoroo is required"),
  [praApartment]: onlyValidated("Apartment is required"),
  [praDoor]: onlyValidated("Door is required"),
});
