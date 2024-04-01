export const filterCurrWithNetwork = (currencyList, balanceList) => {
  let filterArr = [];
  if (currencyList && balanceList) {
    balanceList?.map((val) => {
      currencyList?.map((item) => {
        if (item?.id === val?.currency && item?.networks.length > 0) {
          filterArr.push(val);
        }
      });
    });
  }
  return filterArr;
};
