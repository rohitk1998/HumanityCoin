export const defaultConfig = {
  title: "Coinhub Exchange",
  baseUrl: "https://stage-exchange.coinhub.mn",
  api: {
    authUrl: "https://stage-exchange.coinhub.mn/api/v2/barong",
    tradeUrl: "https://stage-exchange.coinhub.mn/api/v2/peatio",
    futureUrl: "https://stage-exchange.coinhub.mn/api/v2/future",
    p2pUrl: "https://stage-exchange.coinhub.mn/api/v2/p2p",
    invetsUrl: "https://stage-exchange.coinhub.mn/api/v2/invest",
    applogicUrl: "https://stage-exchange.coinhub.mn/api/v2/applogic",
    rangerUrl: "wss://stage-exchange.coinhub.mn/api/v2/ranger",
    aliasUrl: "https://alias.evo.com/api",
    jumioUrl: "https://lon.netverify.com/api",
    demoUrl: "https://stage-demo.coinhub.mn",

  },
  captcha: {
    captchaType: "recaptcha",
    siteKey: "0x4AAAAAAALxnBfBggcvfNnq",
  },
  cloudCaptcha: {
    captchaType: "turnstile",
    siteKey: "0x4AAAAAAALxnBfBggcvfNnq",
  },
  withCredentials: true,
  usdt_value: 1,
  staticCoin: "USDT",
  staticPre: 2,
};

export const Frontend = {
  config: defaultConfig,
};

window.env = window.env || defaultConfig;
Frontend.config = { ...window.env };

Frontend.config.captcha = Frontend.config.captcha || defaultConfig.captcha;
Frontend.config.cloudCaptcha =
  Frontend.config.cloudCaptcha || defaultConfig.cloudCaptcha;

export const baseUrl = () => Frontend.config.baseUrl;
export const demoUrl = () => Frontend.config.api.demoUrl;
export const applogicUrl = () => Frontend.config.api.applogicUrl;
export const authUrl = () => Frontend.config.api.authUrl;
export const tradeUrl = () => Frontend.config.api.tradeUrl;
export const futureUrl = () => Frontend.config.api.futureUrl;
export const invetsUrl = () => Frontend.config.api.invetsUrl;
export const withCredentials = () => Frontend.config.withCredentials;
export const p2pUrl = () => Frontend.config.api.p2pUrl;
export const rangerUrl = () => Frontend.config.api.rangerUrl;
export const siteKey = () => Frontend.config.captcha.siteKey;
export const captchaType = () => Frontend.config.captcha.captchaType;
export const cloudCaptchaSiteKey = () => Frontend.config.cloudCaptcha.siteKey;
export const cloudCaptchaCaptchaType = () =>
  Frontend.config.cloudCaptcha.captchaType;
export const usdtValue = () => Frontend.config.usdt_value;
export const staticObj = () => {
  return {
    staticCoin: Frontend.config.staticCoin,
    staticPre: Frontend.config.staticPre,
  };
};
