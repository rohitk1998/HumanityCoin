export const isObjHasValue = (obj) => {
  return obj !== undefined && obj !== null && JSON.stringify(obj) !== "{}";
};
