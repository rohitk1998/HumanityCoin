export const multiple0BeforeDecimal = (val) => {
  if (val?.indexOf(".") === 0) {
    return (val = `0${val}`);
  } else if (val?.includes(".")) {
    let beforeDecimal = val?.split(".")[0];
    let afterDecimal = val?.split(".")[1];
    return `${Number(beforeDecimal)}.${afterDecimal}`;
  } else if (val.length > 1 && Number(val) === 0) {
    return "0";
  } else if (val === "") {
    return val;
  } else {
    return `${Number(val)}`;
  }
};
