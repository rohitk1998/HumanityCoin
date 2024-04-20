import React from "react";
import style from "./style.module.scss";
import { formatNumber, preciseData, uppercase } from "../../../helpers";
import { LineGraph } from "../../Common/LineGraph";
import { relevantProps } from "../../../staticObjects";

function MaketComp({ item, onHandleClick, color }) {
  const priceFixed = item?.price_precision || 4;
  const getChartData = (data) => {
    const priceData = [];
    for (const prop in data?.graph) {
      if (relevantProps.includes(prop)) {
        priceData.push(data?.graph[prop]);
      }
    }
    return priceData;
  };

  return (
    <div
      className={`${style.marketcomp} marketcomp`}
      onClick={onHandleClick}
      style={{
        border: item?.active === true ? "1px solid #1dcb85" : "",
        cursor: "pointer",
      }}
    >
      <ul>
        <li>
          <img
            src={item?.icon_url ? item?.icon_url : ""}
            width={30}
            height={30}
          />
          <div className="">
            <h3>
              {item?.name
                ? item?.name
                : `${uppercase(item?.base_unit)} / ${uppercase(
                    item?.quote_unit
                  )}`}
            </h3>
            {/* <p>{uppercase(item?.base_unit)}</p> */}
          </div>
        </li>
        <li>
          <LineGraph chartData={getChartData(item)} color={color} />
        </li>
        <li>
          <h3>
            {item?.total_volume_base_currency
              ? formatNumber(
                  preciseData(
                    parseFloat(item?.total_volume_base_currency),
                    priceFixed
                  )
                )
              : "0.00"}{" "}
            {item?.base_unit ? uppercase(item?.base_unit) : "-"}
          </h3>
          <p>24h Volume</p>
        </li>
        <li>
          <h3>
            {item?.avg_price !== undefined
              ? preciseData(parseFloat(item?.avg_price), priceFixed)
              : "0.00"}
          </h3>
          <p>
            {item?.price_change_percent !== undefined
              ? item?.price_change_percent
              : "0%"}
          </p>
        </li>
      </ul>
    </div>
  );
}

export default MaketComp;
