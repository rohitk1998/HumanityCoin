export const regex = (precision = 2, before = 10) => {
  return new RegExp('^\\d{0,' + before + '}(\\.\\d{0,' + precision + '})?$');
};

export const addZeroToDecimalinput = (input) => {
  if (input !== '' && input[0] === '.') {
    input = '0' + input;
  }
  return input ;
};
export const numericWithoutDecimalRegex = () => {
  return /^(?!0)[1-9]\d{0,10}$|^10000000000$/;
};
