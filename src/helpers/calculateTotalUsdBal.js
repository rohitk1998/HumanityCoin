import { totalUSDType } from "../staticObjects";

// Parameters need to pass in sequence
export const calculateTotalUsdBal = (
  balanceList,
  type = totalUSDType.all,
  usingPriceList = false,
  priceList = {},
  precision = 2
) => {
  let totalUsdBls = 0;
  for (const data of balanceList) {
    const balance = Number(data.balance);
    const locked = Number(data.locked);
    const escrow_balance = Number(data.escrow_balance);
    const p2p_balance = Number(data.p2p_balance);
    const usdtValue = Number(
      usingPriceList ? priceList[data.currency] : data.currency_usdt
    );
    const inOrderVal = locked + escrow_balance;

    let totalValue = 0;
    if (type === totalUSDType.all) {
      totalValue = (balance + p2p_balance + inOrderVal) * usdtValue;
    } else if (type === totalUSDType.spot) {
      totalValue = (balance + locked) * usdtValue;
    } else if (type === totalUSDType.funding) {
      totalValue = (p2p_balance + escrow_balance) * usdtValue;
    }
    totalUsdBls += totalValue;
  }
  return totalUsdBls.toFixed(precision);
};


export const calculateTotalUsdBalNew = (
  balanceList,
  type = totalUSDType.all,
  usingPriceList = false,
  priceList = {},
  precision = 2
) => {
  let totalUsdBls = 0;
  for (const data of balanceList) {
    const balance = Number(data.balance);


    const usdtValue = Number(
      usingPriceList ? priceList[data.currency] : data.currency_usdt
    );

    let totalValue = Number(balance * usdtValue)

    totalUsdBls += totalValue;
    console.log(balanceList, "balanceList >>>")
    console.log(totalValue, totalUsdBls, "balance >>>")
  }
  return totalUsdBls.toFixed(precision);
};
