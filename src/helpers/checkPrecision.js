export const CheckPrecision = (list, val) => {
  if (list.length > 0) {
    const getPrecision = list.filter((items) => items.id === val);

    return getPrecision[0]?.precision;
  }
};
