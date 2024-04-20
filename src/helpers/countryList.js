import countryList from "react-select-country-list";
export const countryOption = (value) => {
  return countryList()
    .getData()
    ?.map((val, id) => {
      return { label: val.label, value: val.label, key: val.value };
    });
};

export const findCountry = (term) => {
  return countryOption()?.find((val, id) => {
    return val.label === term;
  });
};
