import React, { useEffect, useState } from "react";
import { StoreImages } from "../../Storeimgaes/StoreImages.jsx";
import style from "./style.module.scss";
import { Dropdown, Menu } from "antd";
import MarketDrawer from "./MarketDrawer.jsx";
import { useSelector } from "react-redux";
import { uppercase, getCloneData } from "../../../helpers";

function SelectMarket() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState("");

  const currentMarket = useSelector((state) => state?.exchange?.currentMarket);
  const currencies = useSelector(
    (state) => state?.commonApiData?.currenciesList
  );

  const quoteUnit = currentMarket && currentMarket?.quote_unit;
  const baseUnit = currentMarket && currentMarket?.base_unit;

  const { downarrowDark } = StoreImages;

  useEffect(() => {
    if (currencies !== undefined) {
      let tempCurrencies = getCloneData(currencies);
      if (tempCurrencies !== undefined) {
        let updateArr = tempCurrencies?.filter(
          (item) => item?.id?.toLowerCase() === baseUnit?.toLowerCase()
        );
        if (updateArr)
          setCurrentImg(updateArr[0]?.icon_url);
      }
    }
  }, [currencies, currentMarket]);

  return (
    <div className={style.selectMarket}>
      {currentMarket && currentImg && (
        <Dropdown
          overlayClassName="customMarketDropdown"
          trigger={["click"]}
          visible={isOpen}
          onVisibleChange={setIsOpen}
          overlay={
            <Menu>
              <Menu.Item>
                {isOpen && (
                  <MarketDrawer
                    isMarketDrawer={isOpen}
                    onCancel={() => setIsOpen(false)}
                  />
                )}
              </Menu.Item>
            </Menu>
          }
        >
          <div
            className={`${style.selectMarket__select} curserPointer`}
            style={{ width: "100%" }}
          >
            <div className={style.selectMarket__currency}>
              {currentImg && (
                <img width={30} height={30} src={`${currentImg}`} />
              )}
              <p>
                {uppercase(baseUnit)}-{uppercase(quoteUnit)}
              </p>
            </div>
            <img src={downarrowDark} alt="dropdown arrow" />
          </div>
        </Dropdown>
      )}
    </div>
  );
}

export default SelectMarket;
