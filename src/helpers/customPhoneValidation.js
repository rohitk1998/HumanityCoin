export const customPhoneValidation = (data) => {
    let isValidated = true;
  const { areaCode, valid } = data;
  let error = "";
  if (areaCode === null) {
    error = "Phone number is required";
    isValidated = false;
  } else if (!valid) {
    error = "Please enter valid phone number";
    isValidated = false;
  }
  return { isValid: isValidated, error: error };
};

export const concatePhoneNo = (currentPhone) => {
  const { areaCode, countryCode, phoneNumber } = currentPhone;
  return `${countryCode}${areaCode}${phoneNumber}`;
};
