import React from "react";
import { NoRecodImage } from "../Storeimgaes/ExportSvgs";
export const NoRecord = (props) => {
  return (
    <div className="noRecordFound">
      <span>
        <NoRecodImage />
      </span>
      <p> {props.text ?? "No Record Found"}</p>
    </div>
  );
};
