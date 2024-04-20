import React, { useState } from "react";
import { Row, Col } from "antd";
import { CheckOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import HeadComman from "./HeadComman.jsx";
import Custom_input from "../Ui/customInput/Custom_input.jsx";
import {
  CheckPrecision,
  exponentialToDecimalConvert,
  lowercase,
  toOptionalFixed,
  uppercase,
} from "../../helpers/index.js";
import style from "./../Pages/CustomTabs/style.module.scss";
import { NoRecord } from "../NoRecord/index.jsx";

const ConvertListLikeDropdown = (props) => {
  const { balanceList, currenciesList } = useSelector(
    (state) => state.commonApiData
  );
  const [query, setQuery] = useState("");
  const { onClick, type, cbFun, currObj } = props;

  const activeCheck = () => (
    <span style={{ paddingLeft: 14 }}>
      <CheckOutlined style={{ color: "#00a79e" }} />
    </span>
  );

  const usdVal = (usdVal, currencyBal) => {
    return (Number(currencyBal) * Number(usdVal)).toFixed(2);
  };

  const currencyVal = (bal, curr) => {
    return exponentialToDecimalConvert(
      toOptionalFixed(bal, CheckPrecision(currenciesList, curr))
    );
  };

  const isActive = (text) => {
    return text === currObj?.currency;
  };

  const testVal = (val) => lowercase(val)?.includes(lowercase(query));

  const searchAndRender = (listArr) => {
    if (query) {
      let filterData = listArr?.filter((data) => {
        let { currency_name, currency } = data;
        return testVal(currency_name) || testVal(currency);
      });
      return filterData;
    }
    return listArr;
  };

  const listing = searchAndRender(balanceList);

  return (
    <div className={`${style.Asset}`}>
      <HeadComman title={"Select Asset"} onClick={onClick} />
      <div className={`${style.Asset_body}`}>
        <div className={style.Asset_body_search}>
          <Custom_input
            placeholder="Search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>
        <div className={style.Asset_body_scrollitem}>
          {listing?.length > 0 ? (
            listing?.map((item, idx) => {
              if (item?.currency_type !== "coin") return;
              return (
                <Row
                  key={idx}
                  className={`${style.Asset_body_list} ${
                    isActive(item.currency) && style.active
                  } curserPointer`}
                  onClick={() => {
                    cbFun(item, type);
                    onClick();
                  }}
                >
                  <Col>
                    <div className={style.Asset_body_list_imgSec}>
                      <h6>
                        <span>
                          <img src={item?.currency_icon} alt="image" />
                        </span>
                        <span>
                          {item?.currency_name}
                          <br />
                          <span className={style.shortName}>
                            {uppercase(item?.currency)}
                          </span>
                        </span>
                      </h6>
                    </div>
                  </Col>
                  <Col>
                    <div className={style.Asset_body_list_check}>
                      <p className="assetInner">
                        <span
                          className="dataAssets"
                          title={currencyVal(item.balance, item?.currency)}
                        >
                          {currencyVal(item.balance, item?.currency)}
                        </span>
                        {uppercase(item?.currency)}
                        <br />
                        <span
                          className="dataAssets dataassetSpan"
                          title={usdVal(item.currency_usdt, item.balance)}
                        >
                          ${usdVal(item.currency_usdt, item.balance)}
                        </span>
                      </p>
                      {isActive(item.currency) && activeCheck()}
                    </div>
                  </Col>
                </Row>
              );
            })
          ) : (
            <NoRecord />
          )}
        </div>
      </div>
    </div>
  );
};

export default ConvertListLikeDropdown;
