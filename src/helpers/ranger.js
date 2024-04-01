import { notiStreams, typeOfTradeObj } from "../staticObjects";

export const periodsMapString = {
  1: "1m",
  5: "5m",
  15: "15m",
  30: "30m",
  60: "1h",
  120: "2h",
  240: "4h",
  360: "6h",
  720: "12h",
  1440: "1d",
  4320: "3d",
  10080: "1w",
};

export const generateSocketURI = (baseUrl, s) =>
  `${baseUrl}/?stream=${s.sort().join("&stream=")}`;

const { Order, Withdraw, Deposit, Member, Announcement } = notiStreams;

export const streamsBuilder = (
  marketId,
  period = "15m",
  tradeType = typeOfTradeObj.spot
) => {
  const isFuture = tradeType === typeOfTradeObj.future;
  const commonForFuture = [
    `global.f_tickers`,
    `f_order`,
    `f_trade`,
    "balance_update",
    "positions",
  ];
  const commonForOther = [`global.tickers`, `order`, `trade`];
  const kline = isFuture
    ? streamsBuilderKlineFuture(marketId, period)
    : streamsBuilderKline(marketId, period);
  const finalOpt = isFuture ? commonForFuture : commonForOther;

  if (marketId !== "") {
    return [
      ...finalOpt,
      kline,
      `${isFuture ? "f_" : ""}${marketId}.trades`,
      `${isFuture ? "f_" : ""}${marketId}.update`,
      ...(isFuture ? [`f_${marketId}.mp`] : []),
      "gateway.deposit",
    ];
  }
  return [...finalOpt, Order, Withdraw, Deposit, Member, Announcement];
};

export const streamsBuilderKline = (marketId, period) => {
  return `${marketId}.kline-${period}`;
};
export const streamsBuilderKlineFuture = (marketId, period) => {
  return `f_${marketId}.kline-${period}`;
};

export const periodMinutesToString = (period) => periodsMapString[period];

export const klineArrayToObject = (el) => {
  const [time, open, high, low, close, volume] = el.map((e) => {
    switch (typeof e) {
      case "number":
        return e;

      case "string":
        return Number.parseFloat(e);

      default:
        throw new Error(`unexpected type ${typeof e} in kline: ${el}`);
    }
  });

  return {
    time: time * 1e3,
    open,
    high,
    isBarClosed: false,
    isLastBar: true,
    low,
    close,
    volume,
  };
};
