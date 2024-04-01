import { StoreImages } from "../../Storeimgaes/StoreImages.jsx";
import style from "./style.module.scss";
import { Tabs } from "antd";
import InputCustom from "../input/InputCustom.jsx";
import MaketComp from "./MaketComp.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { uppercase, getCloneData, findCurrency } from "../../../helpers";
import { useNavigate } from "react-router-dom";
import {
  resetKlineData,
  setExchangeState,
} from "../../../redux/feature/exchange/exchanges.slice.js";
import { NoRecord } from "../../NoRecord/index.jsx";

function makeCopyOf(data) {
  return getCloneData(data);
}

const MarketDrawer = (props) => {
  const { isMarketDrawer, onCancel } = props;
  const { searchIcon } = StoreImages;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [marketList, setMarketsList] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [tabs, setTabs] = useState([]);
  const [selectedTab, setSelectedTab] = useState("All");
  const [isFlag, setFlag] = useState(true);

  const marketTickers = useSelector((state) => state?.exchange?.marketTickers);
  const markets = useSelector((state) => state?.exchange?.marketList);
  const currentMarketId = useSelector(
    (state) => state?.exchange?.currentMarketId
  );

  const { currenciesList: currencies, currencyDetails } = useSelector(
    (state) => state?.commonApiData
  );

  useEffect(() => {
    if (isFlag && markets?.length !== 0) {
      fillMarketData();
    }
    if (isMarketDrawer === false) {
      setSearchInput("");
    }
  }, [
    markets,
    currencies,
    marketTickers,
    selectedTab,
    searchInput,
    currencyDetails,
    isFlag,
    isMarketDrawer,
  ]);

  function fillMarketData() {
    let tempMarketArr = [];
    let tempMarketTickers = [];
    let tempMarketTickersArr = [];
    let tempCurrencies = [];
    let tempCurrencyDetails = [];

    for (let key in marketTickers) {
      if (marketTickers[key]?.ticker !== undefined) {
        let ticker = marketTickers[key]?.ticker;
        tempMarketTickers.push({ id: key, ...ticker });
      } else {
        tempMarketTickers.push({ id: key, ...marketTickers[key] });
      }
    }
    tempCurrencyDetails = makeCopyOf(currencyDetails);
    tempMarketArr = makeCopyOf(markets);
    tempMarketTickersArr = makeCopyOf(tempMarketTickers);
    tempCurrencies = makeCopyOf(currencies);
    tempMarketArr?.map((record) => {
      let newTickers = tempMarketTickersArr.filter(
        (item) => item?.id === record?.id
      );
      let newCurrencies = tempCurrencies.filter(
        (item) => item?.id === record?.base_unit
      );
      record.graph = newCurrencies[0]?.quote ? newCurrencies[0]?.quote : {};
      record.active = record?.id === currentMarketId ? true : false;
      record.icon_url = newCurrencies[0]?.icon_url
        ? newCurrencies[0]?.icon_url
        : "";
      record.name = newTickers[0]?.name ? newTickers[0]?.name : "";
      record.price_change_percent = newTickers[0]?.price_change_percent
        ? newTickers[0]?.price_change_percent
        : "0.00%";
      record.total_volume_base_currency = newTickers[0]
        ?.total_volume_base_currency
        ? newTickers[0]?.total_volume_base_currency
        : "";
      record.avg_price = newTickers[0]?.avg_price
        ? newTickers[0]?.avg_price
        : "";
    });
    handleTabGeneration(tempCurrencies, tempMarketArr);
    if (searchInput?.length > 0) {
      handleMarketSearch(tempMarketArr);
    }
    if (searchInput?.length === 0) {
      setMarketsList(tempMarketArr);
    }
    if (searchInput?.length === 0 && selectedTab !== "All") {
      handleTabSelection(tempMarketArr);
    }
  }

  function updateActiveItem(id) {
    let tempMarketArr = makeCopyOf(marketList);
    tempMarketArr.map((item) => {
      if (item?.id == id) {
        item.active = true;
      } else {
        item.active = false;
      }
    });
    setMarketsList(tempMarketArr);
  }

  function handleMarketSearch(marketData) {
    let filteredData = [];
    let unfilteredMarket = [];
    let search_text = searchInput.toLowerCase();
    unfilteredMarket = marketData?.filter(
      (item) => item?.quote_unit === selectedTab
    );
    filteredData =
      selectedTab !== "All"
        ? unfilteredMarket?.filter(
            (item) =>
              item?.quote_unit?.includes(search_text) ||
              item?.base_unit?.includes(search_text) ||
              (item?.name).toLowerCase()?.includes(search_text)
          )
        : marketData?.filter(
            (item) =>
              item?.quote_unit?.includes(search_text) ||
              item?.base_unit?.includes(search_text) ||
              (item?.name).toLowerCase()?.includes(search_text)
          );
    setMarketsList(filteredData);
  }

  function handleTabGeneration(currencies, markets) {
    let marketTabs = currencies.filter((currency) => {
      return markets.some((market) => market.quote_unit === currency.id);
    });
    setTabs(marketTabs);
  }

  function handleTabSelection(marketData) {
    let filteredMarketList = marketData?.filter(
      (item) => item?.quote_unit === selectedTab
    );
    setMarketsList(filteredMarketList);
  }

  const { TabPane } = Tabs;

  const SearchInput = () => {
    return (
      <InputCustom
        basicinput={+true}
        input_custum
        inputSearch
        searchvalue={searchInput}
        inputPlaceHolder="Search"
        handleOnChange={(e) => {
          setSearchInput(e.target.value);
          setFlag(true);
        }}
        searchImg={<img src={searchIcon} />}
      />
    );
  };

  return (
    <div className={style.marketdrop}>
      <div className={style.marketdropInnerdrop}>
        {SearchInput()}
        <div className={`${style.tabsDrawer} tabsDrawer`}>
          <Tabs>
            <TabPane
              tab={
                <p
                  onClick={() => {
                    setSelectedTab("All");
                    setFlag(true);
                    setSearchInput("");
                  }}
                >
                  All
                </p>
              }
              key="ALL"
            >
              <p className={`${style.marketTitle} marketTitle`}>
                Crypto Markets
              </p>
              {marketList?.length !== 0 ? (
                marketList?.map((market, index) => (
                  <MaketComp
                    key={index}
                    onHandleClick={() => {
                      dispatch(resetKlineData());
                      updateActiveItem(market?.id);
                      navigate(`/advanceTrading/${market?.id}`);
                      onCancel();
                    }}
                    item={market}
                    color={
                      findCurrency(currencies, market?.base_unit)?.color ??
                      "#014cec"
                    }
                  />
                ))
              ) : (
                <NoRecord />
              )}
            </TabPane>

            {tabs?.map((tab, index) => (
              <TabPane
                tabKey={uppercase(tab?.id)}
                tab={
                  <p
                    onClick={() => {
                      setSelectedTab(tab?.id);
                      setFlag(true);
                      setSearchInput("");
                    }}
                  >
                    {uppercase(tab?.id)}
                  </p>
                }
                key={index}
              >
                {marketList?.length !== 0 ? (
                  marketList?.map((market, index) => {
                    return (
                      <MaketComp
                        key={index}
                        onHandleClick={() => {
                          dispatch(resetKlineData());
                          updateActiveItem(market?.id);
                          navigate(`/advanceTrading/${market?.id}`);
                          onCancel();
                        }}
                        item={market}
                        color={
                          findCurrency(currencies, market?.base_unit)?.color ??
                          "#014cec"
                        }
                      />
                    );
                  })
                ) : (
                  <NoRecord />
                )}
              </TabPane>
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  );
};
export default MarketDrawer;
