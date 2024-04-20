export const calculatePrice = (obj) => {
  const {
    enteredPrice,
    bestObj: { bestBid = [], bestAsk = [] },
    from,
    type,
    mPrice = 0,
  } = obj;

  let finalPrice = 0;

  let bestAskPrice = +bestAsk[0] || 0;
  let bestBidPrice = +bestBid[0] || 0;
  let enterPrice = +enteredPrice || 0;

  if (from === "limit" && enterPrice === 0) {
    return finalPrice;
  }

  if (from === "limit") {
    if (type === "buy") {
      finalPrice = enterPrice;
    } else if (type === "sell") {
      if (enterPrice < bestBidPrice) {
        finalPrice = mPrice;
      } else {
        finalPrice = enterPrice;
      }
    }
  } else if (from === "market") {
    if (type === "buy") {
      finalPrice = bestAskPrice + bestAskPrice * 0.0005; // 0.05% is from document
    } else if (type === "sell") {
      finalPrice = bestBidPrice;
    }
  }
  return finalPrice;
};

export const calculateLosses = (obj) => {
  const { type, noContract = 0, mPrice = 0, oPrice = 0 } = obj;

  let secVal = type === "buy" ? +mPrice - +oPrice : +oPrice - +mPrice;
  let minVal = Math.min(0, secVal);

  let callLoss = +noContract * Math.abs(minVal);
  return callLoss;
};

// 2. If there is a long position opened

export const costForShortIfPostionOpen = (obj) => {
  const {
    openedSize = 0,
    mPrice = 0,
    valOfShortPosition = 0,
    leverage = 1,
    currentInitialMarginOfOpenedLongPosition = 0,
    enteredOrBidPrice = 0,
    contSize = 0,
  } = obj;

  // notional value = opened position size * mark price
  let notionalVal = +openedSize * +mPrice;

  // Initial Margin = [Max (notional value of current opened long position, value of short position - notional value of current open long position) / Leverage ] - Current Initial margin of opened long position

  let initialMargin =
    Math.max(notionalVal, valOfShortPosition - notionalVal) / leverage -
    currentInitialMarginOfOpenedLongPosition;

  // Open loss = [Mark Price - (Entered Price or Current Bid Price)] * [Contract size - Contract size of opened long position]

  let openLoss = (mPrice - enteredOrBidPrice) * (contSize - openedSize);

  // a. Cost for short = Initial Margin + Open Loss

  let finalCost = +openLoss > 0 ? initialMargin + openLoss : initialMargin;

  return finalCost;
};

// 4. If there is a short position opened

export const costForLongIfPostionOpen = (obj) => {
  const {
    openedSize = 0,
    mPrice = 0,
    valOfLongPosition = 0,
    leverage = 1,
    currentInitialMarginOfOpenedShortPosition = 0,
    enteredOrBidPrice = 0,
    contSize = 0,
  } = obj;

  // notional value = opened position size * mark price
  let notionalVal = +openedSize * +mPrice;
  // Initial Margin = [Max (notional value of current opened long position, value of short position - notional value of current open long position) / Leverage ] - Current Initial margin of opened long position
  let maxVal = Math.max(notionalVal, valOfLongPosition - notionalVal);
  let initialMargin =
    maxVal / leverage - currentInitialMarginOfOpenedShortPosition;

  console.log("noonasdf", notionalVal, valOfLongPosition, maxVal);
  // Open loss = [Mark Price - (Entered Price or Current Bid Price)] * [Contract size - Contract size of opened long position]

  let openLoss = (enteredOrBidPrice - mPrice) * (contSize - openedSize);

  // a. Cost for short = Initial Margin + Open Loss

  let finalCost = +openLoss > 0 ? initialMargin + openLoss : initialMargin;

  return finalCost;
};
