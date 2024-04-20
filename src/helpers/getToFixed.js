export const getToFixed = (num) => {
  return parseFloat(Number(num)?.toFixed(8));
};

export const getToFixedFiat = (num, curr) => {
  return parseFloat(Number(num)?.toFixed(curr === "crypto" ? 8 : 2));
};

export const showTwoDigits = (num) => {
  return Math.floor(num * 100) / 100;
};
export const getTwoFixed = (num) => {
  return parseFloat(Number(num)?.toFixed(2));
};

export const toOptionalFixed = (num, digits) => {
  return Number.parseFloat(Number(num).toFixed(digits));
};

export const formatNumber = (num) => {
  if (num >= 1000000000) {
    return (num / 1000000000).toFixed(1) + "b";
  }
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + "m";
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + "k";
  }
  return num.toString();
};
export const truncateFun = (num, fixed) => {
  fixed = fixed || 0;
  fixed = Math.pow(10, fixed);
  return Math.floor(num * fixed) / fixed;
};