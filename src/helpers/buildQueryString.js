export const buildQueryString = (action) =>
  Object.entries(action)
    .filter((w) => w[1] !== "")
    .map((k) => `${k[0]}=${encodeURIComponent(k[1])}`)
    .join("&");

export const uniqify = (itemsArray) => {
  var uniqueItems = [...new Set(itemsArray)];
  return uniqueItems;
};
