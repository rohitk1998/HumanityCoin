export const retailFieldName = {
  piNationality: "piNationality",
  piFirstName: "piFirstName",
  piLastName: "piLastName",
  piDob: "piDob",
  piGender: "piGender",
  piIdNumber: "piIdNumber",
  piCivilNumber1: "piCivilNumber1",
  piCivilNumber2: "piCivilNumber2",
  piCivilNumber3: "piCivilNumber3",

  prCountry: "prCountry",
  prProvinceOrCity: "prProvinceOrCity",
  prSumOrDistrict: "prSumOrDistrict",
  prBagOrKhoroo: "prBagOrKhoroo",
  prStreet: "prStreet",
  prRegion: "prRegion",
  prApartment: "prApartment",
  prAddressDetails: "prAddressDetails",
  isAddressSame: "isAddressSame",

  craCountry: "craCountry",
  craProvinceOrCity: "craProvinceOrCity",
  craSumOrDistrict: "craSumOrDistrict",
  craBagOrKhoroo: "craBagOrKhoroo",
  craStreet: "craStreet",
  craRegion: "craRegion",
  craApartment: "craApartment",
  craAddressDetails: "craAddressDetails",
};

const {
  piNationality,
  piFirstName,
  piLastName,
  piDob,
  piGender,
  piIdNumber,
  piCivilNumber,

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

export const defCraField = {
  [craCountry]: "",
  [craProvinceOrCity]: "",
  [craSumOrDistrict]: "",
  [craBagOrKhoroo]: "",
  [craStreet]: "",
  [craRegion]: "",
  [craApartment]: "",
  [craAddressDetails]: "",
};

export const retailDefaultVal = {
  [piNationality]: null,
  [piFirstName]: "",
  [piLastName]: "",
  [piDob]: undefined,
  [piGender]: null,
  [piIdNumber]: "",
  [piCivilNumber]: "",

  [prCountry]: "",
  [prProvinceOrCity]: "",
  [prSumOrDistrict]: "",
  [prBagOrKhoroo]: "",
  [prStreet]: "",
  [prRegion]: "",
  [prApartment]: "",
  [prAddressDetails]: "",
  [isAddressSame]: false,
  ...defCraField,
};

export const genderArr = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
];

export const cyrillicLetters = [

  { value: "А", label: "А" },
  { value: "Б", label: "Б" },
  { value: "В", label: "В" },
  { value: "Г", label: "Г" },
  { value: "Д", label: "Д" },
  { value: "Е", label: "Е" },
  { value: "Ё", label: "Ё" },
  { value: "Ж", label: "Ж" },
  { value: "З", label: "З" },
  { value: "И", label: "И" },
  { value: "Й", label: "Й" },
  { value: "К", label: "К" },
  { value: "Л", label: "Л" },
  { value: "М", label: "М" },
  { value: "Н", label: "Н" },
  { value: "О", label: "О" },
  { value: "Ө", label: "Ө" },
  { value: "П", label: "П" },
  { value: "Р", label: "Р" },
  { value: "С", label: "С" },
  { value: "Т", label: "Т" },
  { value: "У", label: "У" },
  { value: "Ү", label: "Ү" },
  { value: "Ф", label: "Ф" },
  { value: "Х", label: "Х" },
  { value: "Ц", label: "Ц" },
  { value: "Ч", label: "Ч" },
  { value: "Ш", label: "Ш" },
  { value: "Щ", label: "Щ" },
  { value: "Ъ", label: "Ъ" },
  { value: "Ы", label: "Ы" },
  { value: "Ь", label: "Ь" },
  { value: "Э", label: "Э" },
  { value: "Ю", label: "Ю" },
  { value: "Я", label: "Я" },
];

export const retailFieldNameStep2 = {
  isUnemployed: "isUnemployed",
  empWorkplace: "empWorkplace",
  empAreasOfActivity: "empAreasOfActivity",
  empPosition: "empPosition",
  empAddressOfOrganisation: "empAddressOfOrganisation",
  empContactNumber: "empContactNumber",

  isAccountOnBehalf: "isAccountOnBehalf",
  behalfFirstName: "behalfFirstName",
  behalfLastName: "behalfLastName",
  behalfDob: "behalfDob",
  behalfIdNumber: "behalfIdNumber",
  behalfCivilNumber: "behalfCivilNumber",
  behalfContactNumber: "behalfContactNumber",

  isPoliticalPerson: "isPoliticalPerson",
  poliPrevOrganisation: "poliPrevOrganisation",
  poliPrevPosition: "poliPrevPosition",

  isPoliticalRelatives: "isPoliticalRelatives",
  poliRelFirstName: "poliRelFirstName",
  poliRelLastName: "poliRelLastName",
  poliRelOrganisationName: "poliRelOrganisationName",
  poliRelPosition: "poliRelPosition",

  isPoliticalAssociates: "isPoliticalAssociates",
  poliAssoFirstName: "poliAssoFirstName",
  poliAssoLastName: "poliAssoLastName",
  poliAssoOrganisationName: "poliAssoOrganisationName",
  poliAssoPosition: "poliAssoPosition",
};

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

export const defEmpField = {
  [empWorkplace]: "",
  [empAreasOfActivity]: "",
  [empPosition]: "",
  [empAddressOfOrganisation]: "",
  [empContactNumber]: "",
};

export const defBehalfField = {
  [behalfFirstName]: "",
  [behalfLastName]: "",
  [behalfDob]: undefined,
  [behalfIdNumber]: "",
  [behalfCivilNumber]: "",
  [behalfContactNumber]: "",
};

export const defPoliField = {
  [poliPrevOrganisation]: "",
  [poliPrevPosition]: "",
};

export const defPoliRelativeField = {
  [poliRelFirstName]: "",
  [poliRelLastName]: "",
  [poliRelOrganisationName]: "",
  [poliRelPosition]: "",
};

export const defPoliAssociateField = {
  [poliAssoFirstName]: "",
  [poliAssoLastName]: "",
  [poliAssoOrganisationName]: "",
  [poliAssoPosition]: "",
};

export const retailStep2DefaultVal = {
  [isUnemployed]: false,
  ...defEmpField,
  [isAccountOnBehalf]: false,
  ...defBehalfField,
  [isPoliticalPerson]: false,
  ...defPoliField,
  [isPoliticalRelatives]: false,
  ...defPoliRelativeField,
  [isPoliticalAssociates]: false,
  ...defPoliAssociateField,
};

export const documentTypeArr = [
  { value: "Identity Card", label: "Identity Card" },
  { value: "Passport", label: "Passport" },
  // { value: "Driver license", label: "Driving Licence" },
  // { value: "Voter ID", label: "Voter ID Card" },
];
export const retailStep3DefaultVal = {
  documentType: documentTypeArr[0].value,
  frontUrl: "",
  frontFile: "",
  backUrl: "",
  backFile: "",
  selfieUrl: "",
  selfieFile: "",
};

export const corporateFieldNameStep1 = {
  orgNameOfOrganisation: "orgNameOfOrganisation",
  orgAreaOfActivity: "orgAreaOfActivity",
  orgStateRegistrationNumber: "orgStateRegistrationNumber",
  orgIDNumber: "orgIDNumber",
  orgContactNumber: "orgContactNumber",

  isLegalEntity: "isLegalEntity",
  legalOrganisationName: "legalOrganisationName",
  legalAreaOfActivity: "legalAreaOfActivity",
  legalStateRegistrationNumber: "legalStateRegistrationNumber",
  legalRegisterNumber: "legalRegisterNumber",
  legalContactPhoneNumber: "legalContactPhoneNumber",

  isHolderPoli: "isHolderPoli",
  holderPoliFirstName: "holderPoliFirstName",
  holderPoliLastName: "holderPoliLastName",
  holderPoliPosition: "holderPoliPosition",

  isHolderPoliRela: "isHolderPoliRela",
  holderRelaFirstName: "holderRelaFirstName",
  holderRelaLastName: "holderRelaLastName",
  holderRelaPosition: "holderRelaPosition",

  isHolderAsso: "isHolderAsso",
  holderAssoFirstName: "holderAssoFirstName",
  holderAssoLastName: "holderAssoLastName",
  holderAssoPosition: "holderAssoPosition",
};

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

export const defOrgField = {
  [orgNameOfOrganisation]: "",
  [orgAreaOfActivity]: "",
  [orgStateRegistrationNumber]: "",
  [orgIDNumber]: "",
  [orgContactNumber]: "",
};

export const deflegalfField = {
  [legalOrganisationName]: "",
  [legalAreaOfActivity]: "",
  [legalStateRegistrationNumber]: "",
  [legalRegisterNumber]: "",
  [legalContactPhoneNumber]: "",
};

export const defHolderPoliField = {
  [holderPoliFirstName]: "",
  [holderPoliLastName]: "",
  [holderPoliPosition]: "",
};

export const defHolderPoliRelaField = {
  [holderRelaFirstName]: "",
  [holderRelaLastName]: "",
  [holderRelaPosition]: "",
};

export const defHolderPoliAssoField = {
  [holderAssoFirstName]: "",
  [holderAssoLastName]: "",
  [holderAssoPosition]: "",
};

export const corporateStep1DefaultVal = {
  ...defOrgField,
  [isLegalEntity]: false,
  ...deflegalfField,
  [isHolderPoli]: false,
  ...defHolderPoliField,
  [isHolderPoliRela]: false,
  ...defHolderPoliRelaField,
  [isHolderAsso]: false,
  ...defHolderPoliAssoField,
};

export const corporateFieldNameStep2 = {
  praCountry: "praCountry",
  praProvince: "praProvince",
  praDistrict: "praDistrict",
  praKhorro: "praKhorro",
  praApartment: "praApartment",
  praDoor: "praDoor",
};

const {
  praCountry,
  praProvince,
  praDistrict,
  praKhorro,
  praApartment,
  praDoor,
} = corporateFieldNameStep2;

export const corporateStep2DefaultVal = {
  [praCountry]: "",
  [praProvince]: "",
  [praDistrict]: "",
  [praKhorro]: "",
  [praApartment]: "",
  [praDoor]: "",
};

export const documentTypes = {
  front: "Front",
  back: "Back",
  selfie: "selfie",
  officialDoc: "officialDoc",
  stateDoc: "stateDoc",
  companyDoc: "companyDoc",
};
