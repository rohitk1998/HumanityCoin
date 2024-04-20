import moment from "moment";
import { staticPeriod } from "../staticObjects";

export function formatingTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  const formattedHours = String(hours).padStart(2, "0");
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(remainingSeconds).padStart(2, "0");

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

export const convertBackDate = (periodVal) => {
  let tempPeriod = periodVal;
  let from_date = "";
  let to_date = moment().format("YYYY-MM-DD");
  let threeMonthsAgo = moment().subtract(3, "months");
  let oneMonthAgo = moment().subtract(1, "months");
  let oneDayAgo = moment().subtract(1, "days");
  let oneWeekAgo = moment().subtract(1, "weeks");

  if (tempPeriod === staticPeriod.day) {
    from_date = oneDayAgo.format("YYYY-MM-DD");
  } else if (tempPeriod === staticPeriod.week) {
    from_date = oneWeekAgo.format("YYYY-MM-DD");
  } else if (tempPeriod === staticPeriod.month) {
    from_date = oneMonthAgo.format("YYYY-MM-DD");
  } else if (tempPeriod === staticPeriod.months) {
    from_date = threeMonthsAgo.format("YYYY-MM-DD");
  }
  return { from_date: from_date, to_date: to_date };
};
