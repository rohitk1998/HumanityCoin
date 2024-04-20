import { capitalize } from "../helpers";

export const loginActiveScreen = {
  phoneOrEmail: "phoneOrEmail",
  verificationOtp: "verificationOtp",
  verification2FA: "verification2FA",
  device: "device",
};

export const kxRightObj = {
  rewards: "rewards",
  topMovers: "topMovers",
};

export const openCloseDivs = {
  convert: "convert",
  coin: "coin",
  pay: "pay",
};

export const settingTabsKey = {
  profile: "profile",
  security: "security",
  transaction: "transaction",
  notification: "notification",
  announcement: "announcement",
};

export const settingHisotryTabsKey = {
  buy: "buy",
  sell: "sell",
  convert: "convert",
  send: "send",
  receive: "receive",
  orders: "orders",
  trades: "trades",
  transfer: "transfer",
};

export const buySellConvertTabsKey = {
  buy: "buy",
  sell: "sell",
  convert: "convert",
};

export const portfolioTabsKey = {
  overview: "overview",
  spot: "spot",
  funding: "funding",
  margin: "margin",
  future: "future",
};

export const portfolioOverviewSubTabsKey = {
  wallet: "wallet",
  coin: "coin",
};

export const totalUSDType = {
  all: "all",
  spot: "spot",
  funding: "funding",
};

export const coinDetailTabs = {
  overview: "overview",
  primaryBalance: "primaryBalance",
};

export const loginTabsKey = {
  email: "email",
  phone: "phone",
};

export const loginFieldName = {
  email: "email",
  password: "password",
  captchaResponse: "captchaResponse",
};

export const fieldType = {
  normalInput: "normalInput",
  passwordInput: "pass",
  concentInput: "concent",
  captchaInput: "captcha",
  dateInput: "dateInput",
  selectInput: "selectInput",
  radioInput: "radioInput",
};

export const createAccountFieldName = {
  firstName: "firstName",
  lastName: "lastName",
  email: "email",
  password: "password",
  confirmPassword: "confirmPassword",
  captchaResponse: "captchaResponse",
  concent: "concent",
  referal: "referal",
};

export const initPhone = {
  areaCode: null,
  countryCode: 976,
  isoCode: "mn",
  phoneNumber: null,
  valid: false,
};
export const signupVerifyIdentity = {
  firstName: "firstName",
  lastName: "lastName",
  question1: "question1",
  dateOfBirth: "dateOfBirth",
  question2: "question2",
  employmentStatus: "employmentStatus",
  panNumber: "panNumber",
  panName: "panName",
  streetAddress: "streetAddress",
  locality: "locality",
  stateInput: "stateInput",
  pinCode: "pinCode",
};
const {
  firstName,
  stateInput,
  lastName,
  question1,
  dateOfBirth,
  question2,
  employmentStatus,
  panNumber,
  panName,
  streetAddress,
  locality,
  pinCode,
} = signupVerifyIdentity;

export const defaultSignupVerifyIdentity = {
  [firstName]: " ",
  [lastName]: " ",
  [question1]: "",
  [dateOfBirth]: "",
  [question2]: "",
  [employmentStatus]: "",
  [panNumber]: "",
  [panName]: "",
  [streetAddress]: "",
  [locality]: "",
  [stateInput]: "",
  [pinCode]: "",
};

export const sendReceiveType = {
  deposit: "Receive",
  withdraw: "Send",
  transfer: "Transfer",
};

export const depositWithdrawDropdownType = {
  asset: "asset",
  network: "network",
  transfer: "transfers",
};

export const convertType = {
  from: "from",
  to: "to",
};

export const relevantProps = [
  "percent_change_1h",
  "percent_change_24h",
  "percent_change_7d",
  "percent_change_30d",
  "percent_change_60d",
  "percent_change_90d",
];

export const graphDurationTimeObj = [
  { label: "1H", value: "hour_data", key: "percent_change_1h" },
  { label: "1D", value: "day_data", key: "percent_change_24h" },
  { label: "1W", value: "week_data", key: "percent_change_7d" },
  // { label: "1M", value: "month_data", key: "percent_change_30d" },
  // { label: "1Y", value: "year_data", key: "percent_change_90d" },
];

export const upDownPriceColor = { up: "#12b764", down: "#cf304a" };

export const addBeneficiaryName = {
  addressLabel: "addressLabel",
  address: "address",
  code: "code",
};

export const changePasswordFields = {
  existing: "existing",
  changepass: "changepass",
  confirmpass: "confirmpass",
  otpField: "otpField",
};

export const forgotPasswordFields = {
  email: "email",
  captchaResponse: "captchaResponse",
  code: "code",
};

export const referalTabsKey = {
  overview: "overview",
  rewards: "rewards",
  referal: "referal",
};

export const referalType = {
  member: "Member",
  bonus: "Bonus",
  trade: "Trade",
};

export const listingAgreementForm = {
  title: "title",
  signature: "signature",
};

export const AssetForm = {
  network: { name: "network", label: "Network" },
  coin_name: { name: "coin_name", label: "Coin Name" },
  contract_address: { name: "contract_address", label: "Contract Address" },
  symbol: { name: "symbol", label: "Symbol" },
  explorer_link: { name: "explorer_link", label: "Explorer Link" },
  issue_price: { name: "issue_price", label: "Issue Price" },
  maximum_supply: { name: "maximum_supply", label: "Maximum Supply" },
  coin_icon: { name: "coin_icon", label: "Coin Icon" },
};

export const complianceForm = {
  company_name: { name: "company_name", label: "Company Name" },
  company_address: { name: "company_address", label: "Company Address" },
  whitepaper_link: { name: "whitepaper_link", label: "White Paper Link" },
  website_link: { name: "website_link", label: "Website Link" },
};

export const ordersType = {
  fullOrder: "Full",
  partialOrder: "Partial",
  newOrder: "New",
};

export const sideColor = {
  sell: "#b42420",
  buy: "#389694",
  wait: "#bac265",
  pending: "#bac265",
  done: "green",
  cancel: "red",
  reject: "red",
};

export const TradesTableDataIndex = {
  date: "Date",
  pair: "Pair",
  side: "Side",
  price: "Price",
  amount: "Amount",
  total: "Total",
  fee: "Fee",
};

export const ConvertTableDataIndex = {
  date: "Date",
  you_swap: "You Give",
  you_get: "You Get",
  status: "Status",
};

export const ListedCoinsDataIndex = {
  listed_coins: "listed_coins",
  total_supply: "total_supply",
  submit_date: "submit_date",
  action: "action",
};

export const coinListingSubmissionState = {
  pending: "pending",
  submitted: "submitted",
};

export const coinListingSubmissionStatus = {
  active: "active",
};

export const sendFilterOpt = [
  { label: "All", value: "" },
  { label: "Confirming", value: "confirming" },
  { label: "Succeed", value: "succeed" },
  { label: "Processing", value: "processing" },
  { label: "Rejected", value: "rejected" },
  { label: "Failed", value: "failed" },
  { label: "Canceled", value: "canceled" },
  { label: "Accepted", value: "accepted" },
];

export const receiveFilterOpt = [
  { label: "All", value: "" },
  { label: "Collected", value: "collected" },
  { label: "Submitted", value: "submitted" },
  { label: "Canceled", value: "canceled" },
  { label: "Rejected", value: "rejected" },
];

export const convertFilterOpt = [
  { label: "All", value: "" },
  { label: "Pending", value: "pending" },
  { label: "Collected", value: "collected" },
  { label: "Cancelled", value: "canceled" },
  { label: "Rejected", value: "rejected" },
];

export const orderFilterOpt = [
  { label: "All", value: "" },
  { label: "Pending", value: "pending" },
  { label: "New", value: "wait" },
  { label: "Done", value: "done" },
  { label: "Cancelled", value: "cancel" },
  { label: "Rejected", value: "reject" },
];

export const assetformValMessage = {
  uploadSize: "Please upload an icon less than or equal to 500KB",
  uploadType: "Please upload a file type of JPEG, PNG, JPG",
  uploadRequired: "Upload an icon",
  selectRequired: "Please select a network",
  maxSupplyRange: "Max supply should be between 1 to 10000000000",
  maxSupplyRequired: "Max supply is required",
  issuePriceRange:
    "Issue price should be greater than 0 and less than or equal to 10000",
  issuePriceRequired: "Issue price is required",
};

export const downloadDateName = {
  startDate: "startDate",
  endDate: "endDate",
};

export const exportObj = [
  // { label: "PDF", value: "pdf" },
  { label: "Excel", value: "xlsx" },
  { label: "CSV", value: "csv" },
];

const { buy, sell, convert, send, receive, orders, trades } =
  settingHisotryTabsKey;

export const exportTypeObj = [
  {
    label: capitalize(buy),
    value: buy,
  },
  {
    label: capitalize(sell),
    value: sell,
  },
  {
    label: capitalize(convert),
    value: convert,
  },
  {
    label: capitalize(send),
    value: send,
  },
  {
    label: capitalize(receive),
    value: receive,
  },
  {
    label: capitalize(orders),
    value: orders,
  },
  {
    label: capitalize(trades),
    value: trades,
  },
];

export const sendExportType = {
  [buy]: "buy",
  [sell]: "send",
  [convert]: "swap",
  [send]: "withdraw",
  [receive]: "deposit",
  [orders]: "order",
  [trades]: "trade",
};

export const exchangeOrdersTabs = {
  openOrder: "Open Orders",
  allOrder: "All Orders",
  tradeHistory: "Trade History",
  position: "Position",
  orderHistory: "Order History",
  transactionHistory: "Transaction History",
};

export const typeOfUsers = {
  retail: "retail",
  corporate: "corporate",
};

export const notiOpt = {
  read: "read",
  del: "delete",
  readAll: "readAll",
  readOne: "readOne",
  deleteAll: "deleteAll",
  deleteOne: "deleteOne",
};

export const notifiableType = {
  deposit: "Deposit",
  withdraw: "Withdraw",
  order: "Order",
  kyc: "Kyc",
  deposits: "Deposits",
  withdraws: "Withdraws",
};

export const notifiableState = {
  accepted: "accepted",
  rejected: "rejected",
  succeed: "succeed",
  failed: "failed",
  done: "done",
  initiated: "initiated",
  under_review: "under_review",
  verified: "verified",
  collected: "collected",
};

export const notiStreams = {
  Order: "Order",
  Withdraw: "Withdraw",
  Deposit: "Deposit",
  Member: "Member",
  Announcement: "Announcement",
};

export const typeOfTradeObj = {
  spot: "spot",
  margin: "margin",
  future: "future",
};

export const marginMode = {
  cross: "Cross",
  isolated: "Isolated",
};

export const marginModeCap = {
  crossed: "CROSSED",
  isolated: "ISOLATED",
};

export const staticPeriod = {
  day: "1Day",
  week: "1Week",
  month: "1Month",
  months: "3Months",
};

export const addBankObj = {
  chooseAccount: "chooseAccount",
  accountNo: "accountNo",
  accountName: "accountName",
};
const { chooseAccount, accountNo, accountName } = addBankObj;

export const addBankObjDefault = {
  [chooseAccount]: "",
  [accountNo]: "",
  [accountName]: "",
};
export const bankList = [
  { value: "golomt", label: "Golomt Bank" },
  { value: "tdb", label: "Trade and Development Bank" },
  { value: "khan", label: "Khan Bank" },
];
