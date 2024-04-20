export const publicRouteObj = {
  community : 'community',
  faq:'faq',
  ecosystem:'ecosystem',
  swap:'swap',
  migrate:'migrate',
  explorer:'explore',
  configure:'configure',
  pool:'pool',
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
  swap:'swap',
  configure:'configure',
  pool:'pool',
  v2pool : '/pool/v2',
  addLiquidity:'add',
  community : 'community',
  faq:'faq',
  ecosystem : 'ecosystem' , 
  migrate:'migrate',
  explorer:'explore'
};

const {
  introWithoutId,
  intro
} = primaryRoutes;

export const headerHeadingObj = {
  [swap]: "Swap"
};

export const rangerRoutes = [advTrade, port];
export const coinListRoutes = [coinListing, introWithoutId, intro, listedCoins];
