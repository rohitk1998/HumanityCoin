export function isLevel3(user_level) {
  return user_level === 3;
}

export const isKycInit = (labels, level) => {
  let isInit = false;
  let finded = labels?.find((val) => val.key === "document");
  if (finded) {
    if (["rejected", "initiated"].includes(finded?.value)) {
      isInit = false;
    } else {
      isInit = true;
    }
  }
  return isLevel3(level) || isInit ? true : false;
};

export const getLabel = (labels, key) => {
  let isInit = false;
  let finded = labels?.find((val) => val.key === key);
  return finded;
};
