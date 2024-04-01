export const phoneNoLastEncoded = (phone, digit, prefix) => {
  return phone ? `${prefix}${phone?.slice(-`${digit}`)}` : "";
};

export const emailEncoded = (email, showChar, suffix) => {
  let splited = email.split("@");
  let firstChar = splited[0].slice(0, showChar);
  return `${firstChar}${suffix}@${splited[1]}`;
};
