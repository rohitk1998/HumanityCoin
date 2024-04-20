export const formatNumber = (number) => {
  const formatter = new Intl.NumberFormat("en", { notation: "compact" });
  return formatter.format(number);
};
