export const preciseData = (data, precision = 2) => {
  return data ? Number(data).toFixed(precision) : data;
};
