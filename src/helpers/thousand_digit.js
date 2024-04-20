export const thousandDigit = (nums, precision) => {
  const options = {
    minimumFractionDigits: precision,
    maximumFractionDigits: precision,
  };
  const formatted = Number(nums).toLocaleString("en", options);
  const trimmed = formatted;
  return trimmed;
};
