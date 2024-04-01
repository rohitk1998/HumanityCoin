export const publicRouteObj = {
  swap:'swap'
};

// Sidebar obj
export const sidebarRouteObj = {
  swap: "swap"
};

const {
  home,
  port,
  swap,
  advTrade,
  earn,
  p2p,
  coinListing,
  referral,
  listedCoins
} = sidebarRouteObj;

export const defaultActiveSidebarObj = {
  [home]: ["1", "home", "homeIcon"],
  [port]: ["2", "port", "portIcon"],
  [advTrade]: ["3", "advTrade", "advTradeIcon"],
  [earn]: ["4", "earn", "earnIcon"],
  [referral]: ["5", "referral", "referralIcon"],
};

export const routeExists = [
  home,
  port,
  swap,
  advTrade,
  earn,
  p2p,
  coinListing,
  listedCoins,
  referral,
];

export const primaryRoutes = {
  verification: "verification",
  verificationCode: "verificationCode",
  overview: "overview",
  setting: "setting",
  deviceManagement: "device-management",
  accountActivity: "account-activity",
  order: "order",
  landing: "landing",
  notfication: "notfication",
  viewAll: "view-all",
  viewHistory: "view-history",
  intro: "intro/:id",
  introWithoutId: "intro",
  rewardViewAll: "reward_view_all",
  referralViewAll: "referral_view_all",
  kycRetail: "kycRetail",
  kycCorporate: "kycCorporate",
  convertMNG: "convertMNT",
  convertHistory: "convertHistory",
  authLanding: "authLanding",
  logout: "logout",
  cryoto_deposit: "cryoto_deposit",
  bank_deposit: "bank_deposit",
  fTransaferHistory: "future_transferHistory",
  launchpadViewAll: "launchpadViewAll",
  launchpadDetail: "launchpadDetail",
  launchpadHistory: "launchpadHistory",
  chbtoken: "chbtoken",
  ourSubscription: "ourSubscription",
  newDeatil: "newDeatil",
  swap:'swap'
};

const {
  setting,
  order,
  addressManagement,
  viewAll,
  viewHistory,
  referralViewAll,
  rewardViewAll,
  introWithoutId,
  intro,
  kycRetail,
  kycCorporate,
  fTransaferHistory,
} = primaryRoutes;

export const headerHeadingObj = {
  [swap]: "Swap"
};

export const rangerRoutes = [advTrade, port];
export const coinListRoutes = [coinListing, introWithoutId, intro, listedCoins];
