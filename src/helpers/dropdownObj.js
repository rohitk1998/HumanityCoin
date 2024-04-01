export const createPairList = (marketPairList) => {
  let list = [];
  list =
    marketPairList?.length > 0 &&
    marketPairList?.map((val, idx) => {
      return { label: val.name, value: val.id };
    });
  // return [{ label: "All PAIR", value: "" }, ...list];
  return [...list];
};
