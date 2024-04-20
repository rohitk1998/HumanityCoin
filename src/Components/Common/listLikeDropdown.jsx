import React, { useEffect, useState } from "react";
import { Row, Col } from "antd";
import { CheckOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";
import HeadComman from "./HeadComman.jsx";
import Custom_input from "../Ui/customInput/Custom_input.jsx";
import { depositWithdrawDropdownType } from "../../staticObjects/index.jsx";
import {
  CheckPrecision,
  capitalize,
  convertNetworkName,
  filterCurrWithNetwork,
  lowercase,
  toOptionalFixed,
  uppercase,
} from "../../helpers/index.js";
import style from "./../Pages/CustomTabs/style.module.scss";
import { NoRecord } from "../NoRecord/index.jsx";

const ListLikeDropdown = (props) => {
  const { balanceList, currenciesList } = useSelector(
    (state) => state.commonApiData
  );
  const [query, setQuery] = useState("");
  const {
    onClick,
    type,
    balanceObj,
    cbFun,
    allNetwork,
    currentNetwork,
    isTransfer,
  } = props;
  const { asset, network } = depositWithdrawDropdownType;

  const activeCheck = () => (
    <span style={{ paddingLeft: 14 }}>
      <CheckOutlined style={{ color: "#00a79e" }} />
    </span>
  );

  const usdVal = (usdVal, currencyBal) => {
    return (Number(currencyBal) * Number(usdVal)).toFixed(2);
  };

  const splitKey = (key) => {
    return key?.split("-")[0];
  };

  const isActive = (text) => {
    if (type === asset) {
      return text === balanceObj?.currency;
    } else if (type === network) {
      return text === splitKey(currentNetwork?.blockchain_key);
    }
  };

  const testVal = (val) => lowercase(val)?.includes(lowercase(query));

  const searchAndRender = (listArr) => {
    if (query) {
      let filterData = listArr?.filter((data) => {
        let { currency_name, currency, blockchain_key } = data;
        return (
          testVal(currency_name) ||
          testVal(currency) ||
          testVal(splitKey(blockchain_key))
        );
      });
      return filterData;
    }
    return listArr;
  };

  const netWorkList = searchAndRender(allNetwork);
  const assetList = searchAndRender(
    isTransfer
      ? balanceList
      : filterCurrWithNetwork(currenciesList, balanceList)
  );

  return (
    <div className={`${style.Asset} `}>
      {/* <HeadComman
        title={
          type === asset ? (
            <>{isTransfer ? "Select Coin" : "Select Asset"}</>
          ) : (
            "Select Network"
          )
        }
        onClick={onClick}
      /> */}
      <div className={style.Asset_body}>
        <div className={style.Asset_body_search}>
          <Custom_input
            placeholder="Search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>
        <div className={style.Asset_body_scrollitem}>
          {type === asset ? (
            assetList.length > 0 ? (
              assetList?.map((item, idx) => {
                if (item?.currency_type !== "coin") return;
                return (
                  <Row
                    key={idx}
                    className={`${style.Asset_body_list} ${isActive(item.currency) && style.active
                      } curserPointer`}
                    onClick={() => {
                      cbFun(item, asset);
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
                            {uppercase(item?.currency)}
                            <br />
                            <span className={style.shortName}>
                              {capitalize(item?.currency_name)}
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
                            title={toOptionalFixed(
                              item.balance,
                              CheckPrecision(currenciesList, item?.currency)
                            )}
                          >
                            {toOptionalFixed(
                              item.balance,
                              CheckPrecision(currenciesList, item?.currency)
                            )}{" "}
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
            )
          ) : netWorkList.length > 0 ? (
            netWorkList?.map((item, idx) => {
              return (
                <Row
                  key={idx}
                  className={`${style.Asset_body_list} ${isActive(splitKey(item?.blockchain_key)) && style.active
                    } curserPointer`}
                  onClick={() => {
                    cbFun(item, network);
                    onClick();
                  }}
                >
                  <Col>
                    <div className={style.Asset_body_list_imgSec}>
                      <h6>
                        <span>
                          {item?.blockchain_key &&
                            convertNetworkName(uppercase(splitKey(item?.blockchain_key)))}
                        </span>
                      </h6>
                    </div>
                  </Col>
                  <Col>
                    <div className={style.Asset_body_list_check}>
                      {isActive(splitKey(item?.blockchain_key)) &&
                        activeCheck()}
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

export default ListLikeDropdown;
