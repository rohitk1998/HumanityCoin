export const priceTableDataIndex = {
  name: "name",
  price: "price",
  graph: "graph",
  change24h: "change24h",
  marketCap: "marketCap",
  action: "action",
};

export const portTableDataIndex = {
  coin: "coin",
  name: "name",
  totalBal: "totalBal",
  availableBal: "availableBal",
  inOrder: "inOrder",
  action: "action",
};

export const portFutureTableDataIndex = {
  symbol: "symbol",
  size: "size",
  entryPrice: "entryPrice",
  markPrice: "markPrice",
  unrealizedPNL: "unrealizedPNL",
  actionF: "actionF",
};

export const portFutureAssetDataIndex = {
  assets: "Assets",
  walletBalance: "walletBalance",
  futAssetUnrealizedPNL: "futAssetUnrealizedPNL",
  marginBalance: "marginBalance",
  availForTransfer: "availForTransfer",
  actionAsset: "actionAsset",
};

export const earnTableDataIndex = {
  coin: "coin",
  price: "price",
  percentage: "Percentage",
  stakedAmount: "stakedAmount",
  totalDuration: "totalDuration",
  durationLeft: "durationLeft",
  earnings: "earnings",
  state:"state",
  action: "action",
};
export const addressTableIndex = {
  AddressLable: "AddressLable",
  Coin: "Coin",
  Address: "Address",
  Network: "Network",
  Action: "Action",
};

export const assetTableDataIndex = {
  asset: "asset",
  balance: "balance",
  action: "action",
};

export const transHistoryTableDataIndex = {
  date: "date",
  txid: "txid",
  spend: "spend",
  youBuy: "youBuy",
  fee: "fee",
  order: "order",
  payment: "payment",
  status: "status",
  action: "action",
};

export const settingOrdersTableDataIndex = {
  datetime: "datetime",
  pair: "pair",
  type: "type",
  side: "side",
  average: "average",
  price: `price`,
  filled: `filled`,
  remainingAmt: `remainingAmt`,
  total: "total",
  status: "status",
};

export const futureOrderHistoryOuterColumns = [
  {
    title: "Time",
    dataIndex: "datetime",
    key: "datetime",
  },
  {
    title: "Symbol",
    dataIndex: "pair",
    key: "pair",
  },
  {
    title: "Type",
    dataIndex: "type",
    key: "type",
  },
  {
    title: "Side",
    dataIndex: "side",
    key: "side",
  },
  {
    title: "Average",
    dataIndex: "average",
    key: "average",
  },
  {
    title: `Price`,
    dataIndex: `price`,
    key: `price`,
  },
  {
    title: `Executed`,
    dataIndex: `executed`,
    key: `executed`,
  },
  {
    title: "Amount",
    dataIndex: "total",
    key: "total",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
];

export const futureOrderHistoryInnerColumns = [
  {
    title: "Time",
    dataIndex: "time",
    key: "time",
  },
  {
    title: "Trading Price",
    dataIndex: "tradingPrice",
    key: "tradingPrice",
  },
  {
    title: "Executed",
    key: "executed",
    dataIndex: "executed",
  },
  {
    title: "Fee",
    dataIndex: "fee",
    key: "fee",
  },
  {
    title: "Role",
    dataIndex: "role",
    key: "role",
  },
  {
    title: "PNL",
    dataIndex: "pnl",
    key: "pnl",
  },
  {
    title: "Total",
    dataIndex: "total",
    key: "total",
  },
];
