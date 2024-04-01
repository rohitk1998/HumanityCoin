import * as yup from "yup";
import { downloadDateName } from "../staticObjects";
const { startDate, endDate } = downloadDateName;

export const startEndDateSchema = yup.object().shape({
  [startDate]: yup.date().required("Start date is required"),
  [endDate]: yup
    .date()
    .required("End date is required")
    .test(
      "is-greater-or-equal",
      "End date must be greater than or equal to the start date",
      function (endDateNew) {
        const startDateNew = this.parent[startDate];
        return endDateNew >= startDateNew;
      }
    ),
});
