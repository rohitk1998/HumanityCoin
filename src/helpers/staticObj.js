export const confirmModalVal = {
  amount: "",
  apy: "",
  id: "",
  duration: "",
  name: "",
  earn: "",
  curId: "",
};

export const convertNetworkName = (val) => {
  const networkNames = {
    "ETH": "ERC20",
    "TRX": "TRC20",
    "BSC": "BEP20"
  };
  return val && networkNames[val] ? networkNames[val] : val;
};
