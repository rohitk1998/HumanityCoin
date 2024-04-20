import { lowercase, uppercase } from ".";

export const currencyDropObj = (currencylist, allCurr = true) => {
  let arr = allCurr ? [{ label: "ALL CURRENCIES", value: "" }] : [];
  currencylist.length > 0 &&
    currencylist
      .filter((data) => data.type === "coin")
      .map((items) => {
        let data = { label: uppercase(items.id), value: lowercase(items.id) };
        arr.push(data);
      });
  return arr;
};

export const staticCurrencyDropObj = (currencylist, allCurr = true) => {
  let arr = allCurr ? [{ label: "ALL CURRENCIES", value: "" }] : [];
  currencylist.length > 0 &&
    currencylist
      .filter((data) => data.id === "usdt" || data.id === "mnt")
      .map((items) => {
        let data = { label: uppercase(items.id), value: lowercase(items.id) };
        arr.push(data);
      });
  return arr;
};
