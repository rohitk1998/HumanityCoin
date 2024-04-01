import React, { useEffect, useMemo, useState } from "react";
import style from "./style.module.scss";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import {
  formatingTime,
  preciseData,
  truncateData,
  uppercase,
} from "../../../helpers";
import {
  typeOfTradeObj,
  upDownPriceColor,
} from "../../../staticObjects/index.jsx";
import { Grid } from "antd";
import { thousandDigit } from "../../../helpers/thousand_digit.js";

function Lastprice(props) {
  const { t } = useTranslation();
  const {
    currentMarket,
    marketTickers,
    baseCurrency: baseCurr,
    kline,
    mMarketTickers,
  } = useSelector((state) => state?.exchange);
  const { tradingType } = useSelector((state) => state.commonApiData);

  const [lastPriceChanged, setLastPriceChanged] = useState("positive");
  const [prevVal, setPrevVal] = useState("");

  const priceFixed = currentMarket ? currentMarket.price_precision : 0;
  const quote_unit = currentMarket && currentMarket.quote_unit;
  const base_unit = currentMarket && currentMarket.base_unit;

  const defaultTicker = {
    low: 0,
    last: 0,
    high: 0,
    total_volume: 0,
    openInt: 0,
    price_change_percent: "0.00%",
    total_volume_base_currency: 0,
  };

  const defaultMTicker = {
    funding_rate: 0,
    index_price: 0,
    m_price: 0,
    nx_funding_time: 0,
  };

  const isFuture = typeOfTradeObj.future === tradingType;

  const { useBreakpoint } = Grid;
  const { md } = useBreakpoint();

  const getTickerValue = (value) => {
    return currentMarket &&
      marketTickers[currentMarket?.id]?.ticker !== undefined
      ? (marketTickers[currentMarket?.id]?.ticker || defaultTicker)[value]
      : (marketTickers[currentMarket?.id] || defaultTicker)[value];
  };

  const getMTickerValue = (value) => {
    return currentMarket ? mMarketTickers[value] : defaultMTicker[value];
  };

  useEffect(() => {
    let change = "";
    if (currentMarket !== undefined) {
      let currLastVal =
        kline?.last?.close !== undefined
          ? kline?.last?.close
          : marketTickers[currentMarket?.id]?.last;
      if (currLastVal < prevVal) {
        change = "negative";
        setLastPriceChanged("negative");
      } else if (currLastVal > prevVal) {
        change = "positive";
        setLastPriceChanged("positive");
      } else {
        change = "stable";
        setLastPriceChanged("stable");
      }
      if (currLastVal !== prevVal) {
        let lstVal = (marketTickers[currentMarket.id] || defaultTicker)["last"];
        let perVal = (marketTickers[currentMarket.id] || defaultTicker)[
          "price_change_percent"
        ];
        props.getBalance({
          last: lstVal,
          price_change_percent: perVal,
        });
      }
      setPrevVal(currLastVal);
    }
  }, [marketTickers]);

  useEffect(() => {
    props.getChangeType(lastPriceChanged);
  }, [lastPriceChanged]);

  const last =
    kline && kline?.last?.close !== undefined
      ? truncateData(kline?.last?.close, priceFixed)
      : getTickerValue("last");
  const low = getTickerValue("low");
  const high = getTickerValue("high");
  const total_volume_base_currency = getTickerValue(
    "total_volume_base_currency"
  );
  const total_volume = getTickerValue("total_volume");
  const openInt = getTickerValue("open_interest");
  const open = getTickerValue("open");
  const price_change_percent = getTickerValue("price_change_percent");
  const isPositive = currentMarket && /\+/.test(price_change_percent);

  const markPrice = getMTickerValue("m_price");
  const indexPrice = getMTickerValue("index_price");
  const fundingRate = getMTickerValue("funding_rate");

  const { up, down } = upDownPriceColor;

  const formattedTime = useMemo(() => {
    if (isFuture) {
      const targetTime = mMarketTickers?.nx_funding_time;
      const currentTime = Math.floor(Date.now() / 1000);
      const timeDifference = targetTime - currentTime;
      return formatingTime(timeDifference < 0 ? 0 : timeDifference);
    }
  }, [isFuture, mMarketTickers]);

  // console.log(formattedTime);

  return (
    <div className={style.priceVolume}>
      <ul>
        {md && (
          <>
            {isFuture ? (
              <li>
                <h4>
                  <strong>
                    {currentMarket && uppercase(currentMarket.base_unit)}/
                    {currentMarket && uppercase(currentMarket.quote_unit)}
                  </strong>
                </h4>
                <p>Perpetual</p>
              </li>
            ) : (
              <li>
                <p>{baseCurr && baseCurr?.name}</p>
                <h4>
                  <strong>
                    {currentMarket && uppercase(currentMarket.base_unit)}/
                    {currentMarket && uppercase(currentMarket.quote_unit)}
                  </strong>
                </h4>
              </li>
            )}
          </>
        )}
        {!isFuture && (
          <li>
            <p>{t("table.last_price")}</p>
            <h4
              style={{
                color:
                  lastPriceChanged == "positive"
                    ? up
                    : lastPriceChanged == "negative"
                    ? down
                    : "",
              }}
            >
              <strong>{thousandDigit(preciseData(last, priceFixed))}</strong>
            </h4>
          </li>
        )}

        {isFuture && (
          <>
            <li>
              <p>Mark</p>
              <h4>
                <strong>{thousandDigit(preciseData(markPrice, priceFixed))}</strong>
              </h4>
            </li>
            <li>
              <p>Index</p>
              <h4>
                <strong>{thousandDigit(preciseData(indexPrice, priceFixed))}</strong>
              </h4>
            </li>
            <li>
              <p>Funding/Countdown</p>
              <h4>
                <strong>
                  {thousandDigit(preciseData(fundingRate, priceFixed))} / {formattedTime}
                </strong>
              </h4>
            </li>
          </>
        )}

        <li>
          <p>24h {t("table.change")}</p>
          <h4 style={{ color: isPositive ? up : down }}>
            <strong>{`${thousandDigit(truncateData(
              preciseData(last, priceFixed) - preciseData(open, priceFixed)
                ? preciseData(last, priceFixed) - preciseData(open, priceFixed)
                : "0.00",
              priceFixed
            ))} ${
              price_change_percent ? `(${price_change_percent})` : "0.00%"
            }`}</strong>
          </h4>
        </li>

        {md && (
          <li>
            <p>24h {t("table.high")}</p>
            <h4>
              <strong>{thousandDigit(truncateData(high, priceFixed))}</strong>
            </h4>
          </li>
        )}

        {md && (
          <li>
            <p>24h {t("table.low")}</p>
            <h4>
              <strong>{thousandDigit(truncateData(low, priceFixed))}</strong>
            </h4>
          </li>
        )}

        <li>
          <p>24h {t("table.volume")}{uppercase(base_unit)}</p>
          <h4>
            <strong>
              { (truncateData(parseFloat(total_volume_base_currency), priceFixed))}{" "}
            </strong>
          </h4>
        </li>

        {md && (
          <li>
            <p>24h {t("table.volume")} {uppercase(quote_unit)}</p>
            <h4>
              <strong>
                {thousandDigit(truncateData(parseFloat(total_volume), priceFixed))}
              </strong>{" "}
            </h4>
          </li>
        )}

        {md && (
          <>
            {isFuture && (
              <li>
                <p>Open Interest ({uppercase(quote_unit)})</p>
                <h4>
                  <strong>
                    {thousandDigit(truncateData(parseFloat(openInt), priceFixed))}
                  </strong>{" "}
                </h4>
              </li>
            )}
          </>
        )}
      </ul>
    </div>
  );
}

export default Lastprice;
