import { sideColor } from "../staticObjects";

const { sell, buy, wait, done, reject, pending, cancel } = sideColor;

export const orderSideColor = (status) => {
  let orderStatus = status.toLowerCase();
  switch (orderStatus) {
    case "sell": {
      return sell;
    }
    case "buy": {
      return buy;
    }
    case "wait": {
      return wait;
    }
    case "pending": {
      return pending;
    }
    case "done": {
      return done;
    }
    case "cancel": {
      return cancel;
    }
    case "reject": {
      return reject;
    }
    default: {
      return "";
    }
  }
};

export const checkOrderState = (state) => {
  switch (state) {
    case "wait": {
      return "New";
    }
    case "pending": {
      return "Pending";
    }
    case "done": {
      return "Done";
    }
    case "cancel": {
      return "Cancelled";
    }
    case "reject": {
      return "Rejected";
    }
    default: {
      return "New";
    }
  }
};
