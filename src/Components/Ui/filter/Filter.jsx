import React, { useEffect, useState } from "react";
import { Row, Col } from "antd";
import CommonButton from "../button/CommonButton.jsx";
import CustomSelect from "../../Ui/CustomSelect/CustomSelect";
import { useDispatch, useSelector } from "react-redux";
import { createPairList, currencyDropObj } from "../../../helpers";
import {
  convertFilterOpt,
  orderFilterOpt,
  receiveFilterOpt,
  sendFilterOpt,
  settingHisotryTabsKey,
} from "../../../staticObjects/primary.jsx";
import {
  getConvertHistory,
  getDepositHistory,
  getWithdrawHistory,
} from "../../../redux/services/transHistories.js";
import {
  getBalanceHistory,
  getOrderHistory,
  getTrades,
} from "../../../redux/services";
import { viewForTrans } from "../../../redux/feature/index.js";

function Filter(props) {
  const dispatch = useDispatch();
  const { currenciesList, currentMarketId } = useSelector(
    (state) => state.commonApiData
  );
  const { marketPairList } = useSelector((state) => state.transactionHistories);
  const [selectCurrency, setSelectCurrency] = useState("");
  const [selectPair, setSelectPair] = useState("");
  const [filterStatus, setFilterStatus] = useState("");

  const { buy, sell, convert, send, receive, orders, trades, transfer } =
    settingHisotryTabsKey;
  const { currentTab, cbFun } = props;

  const onloadSelectPair = () => {
    if (!marketPairList.length) return;
    const pairList = createPairList(marketPairList);
    let pair = currentMarketId ? currentMarketId : pairList[0].value;
    return { pair, zerothIndexPair: pairList[0].value };
  };

  useEffect(() => {
    setSelectPair(onloadSelectPair().pair);
  }, [marketPairList]);

  const isShowStatus = [convert, send, receive, orders].includes(currentTab);
  const isShowCurrency = [send, receive, transfer].includes(currentTab);
  const isShowPair = [orders, trades].includes(currentTab);

  const filterFun = (clicked = "filter") => {
    const init = { limit: 10, page: 1 };
    const isState =
      isShowStatus && filterStatus.length > 0 ? { state: filterStatus } : {};
    const isCurrency =
      isShowCurrency && selectCurrency
        ? {
            [currentTab === transfer ? "currency_id" : "currency"]:
              selectCurrency,
          }
        : {};
    const isMarket = isShowPair && selectPair ? { market: selectPair } : {};
    const sendData =
      clicked === "filter"
        ? {
            ...init,
            ...isState,
            ...isCurrency,
            ...isMarket,
          }
        : {
            ...init,
            ...(isShowPair && { market: onloadSelectPair().zerothIndexPair }),
          };

    cbFun({ ...sendData });
    switch (currentTab) {
      case buy:
        break;
      case sell:
        break;
      case convert:
        dispatch(getConvertHistory({ ...sendData }));
        break;
      case send:
        dispatch(getWithdrawHistory({ ...sendData }));
        break;
      case receive:
        dispatch(getDepositHistory({ ...sendData }));
        break;
      case orders:
        dispatch(
          getOrderHistory({
            ...sendData,
            callFrom: "setting",
            orderBy: "desc",
          })
        );
        break;
      case trades:
        dispatch(getTrades({ ...sendData }));
        break;
      case transfer:
        dispatch(
          getBalanceHistory({
            ...sendData,
            reference_type: "Account",
          })
        );
        break;
      default:
    }
  };

  const resetStates = () => {
    setSelectCurrency("");
    setFilterStatus("");
    setSelectPair(onloadSelectPair().zerothIndexPair);
    dispatch(viewForTrans({ clickViewFrom: "", marketId: "" }));
  };

  const optionObj = () => {
    if (currentTab === convert) return convertFilterOpt;
    if (currentTab === send) return sendFilterOpt;
    if (currentTab === receive) return receiveFilterOpt;
    if (currentTab === orders) return orderFilterOpt;
  };

  return (
    <>
      <div className="filtrspacing">
        <Row gutter={21}>
          <Col lg={20} md={14} xs={24}>
            <Row gutter={21}>
              {isShowCurrency && (
                <Col lg={4} md={12} xs={24}>
                  <CustomSelect
                    placeholder="All Currency"
                    label="Select Currency"
                    drop_data={currencyDropObj(currenciesList)}
                    onChange={(currency) => setSelectCurrency(currency)}
                    value={selectCurrency}
                  />
                </Col>
              )}
              {isShowStatus && (
                <Col lg={4} md={12} xs={24}>
                  <CustomSelect
                    placeholder="All Status"
                    label="Status"
                    drop_data={optionObj()}
                    onChange={(val) => setFilterStatus(val)}
                    value={filterStatus}
                  />
                </Col>
              )}

              {isShowPair && (
                <Col lg={4} md={12} xs={24}>
                  <CustomSelect
                    placeholder="All Pair"
                    label="Pair"
                    drop_data={createPairList(marketPairList)}
                    onChange={(val) => setSelectPair(val)}
                    value={selectPair}
                  />
                </Col>
              )}
            </Row>
          </Col>
          <Col lg={4} md={10} xs={24}>
            <div className="mb24 centerbutns">
              <CommonButton
                title="Search"
                className="btn"
                onClick={() => filterFun("filter")}
              />
              <CommonButton
                title="Reset"
                className="btn"
                onClick={() => {
                  resetStates();
                  filterFun("reset");
                }}
              />
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Filter;
