import { typeOfTradeObj } from "../staticObjects";

export const p2p = {
  apiVersion: "p2p",
};

export const p2pWithHeader = {
  apiVersion: "p2p",
  withHeaders: true,
};

export const peatio = {
  apiVersion: "peatio",
};

export const peatioWithHeader = {
  apiVersion: "peatio",
  withHeaders: true,
};

export const future = {
  apiVersion: "future",
};

export const futureWithHeader = {
  apiVersion: "future",
  withHeaders: true,
};

export const invest = {
  apiVersion: "invest",
};
export const demoSite = {
  apiVersion: "demoSite",
};

export const investWithHeader = {
  apiVersion: "invest",
  withHeaders: true,
};

export const barong = {
  apiVersion: "barong",
};

export const getConfig = (type, withHead = false) => {
  const isFuture = type !== undefined && type === typeOfTradeObj.future;
  return isFuture
    ? withHead
      ? futureWithHeader
      : future
    : withHead
    ? peatioWithHeader
    : peatio;
};
export const barongWithHeader = {
  apiVersion: "barong",
  withHeaders: true,
};
