import React, { useEffect, useMemo } from "react";
import { DepthChart } from "pennant";
import "pennant/dist/style.css";
import "./style.scss";
import { NoRecord } from "../NoRecord";
const DepthChartComponent = (props) => {
  const { asks, bids } = props.orderBook;
  const sellData = useMemo(() => {
    return asks?.length > 0
      ? asks?.map((val) => ({
          price: +val[0],
          volume: +val[1],
        }))
      : [];
  }, [asks]);

  const buyData = useMemo(() => {
    return bids?.length > 0
      ? bids?.map((val) => ({
          price: +val[0],
          volume: +val[1],
        }))
      : [];
  }, [bids]);

  const AAPL_data = {
    buy: buyData,
    sell: sellData,
  };

  return (
    <>
      <div className="depthContainer">
        <div className="container">
          <DepthChart
            data={AAPL_data}
            theme={"light"}
            notEnoughDataText={
              <>
                <NoRecord />
              </>
            }
          />
        </div>
      </div>
    </>
  );
};

export default DepthChartComponent;
