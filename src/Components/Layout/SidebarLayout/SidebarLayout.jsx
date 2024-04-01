import React, { useEffect, useState } from "react";
import { ReactComponent as LogoMob } from "../../Assets/Images/LogoMob.svg";
import { ReactComponent as SidebarToggleIcon } from "../../Assets/Images/SidebarToggleIcon.svg";
import { Grid, Layout, Menu } from "antd";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { rootName } from "../../../utils/constant";
import { getUrlPart } from "../../../helpers";
import { StoreImages } from "../../Storeimgaes/StoreImages";
import {
  Homeicon,
  Portfolio,
  AdvanceTrading,
  Earn,
  ReferralIconNew,
} from "../../Storeimgaes/ExportSvgs";
import {
  routeExists,
  defaultActiveSidebarObj,
  sidebarRouteObj,
  primaryRoutes,
  typeOfTradeObj,
} from "../../../staticObjects";
import "./SidebarLayout.scss";
import { useDispatch, useSelector } from "react-redux";
import { setTradingType } from "../../../redux/feature";

function SidebarLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { useBreakpoint } = Grid;
  const { md } = useBreakpoint();
  const { Sider } = Layout;
  const { logo } = StoreImages;
  const { tradingType } = useSelector((state) => state.commonApiData);
  const initActive = defaultActiveSidebarObj[sidebarRouteObj.home];

  const [defaultActive, setDefaultActive] = useState(initActive[0]);
  const [active, setActive] = useState(initActive[1]);
  const [activeIcon, setActiveIcon] = useState(initActive[2]);
  const [collapsed, setCollapesed] = useState(false);

  const urlMarket = getUrlPart(1, location.pathname);

  useEffect(() => {
    if (urlMarket && routeExists.includes(urlMarket)) {
      let defaultTemp = defaultActiveSidebarObj[urlMarket];
      setDefaultActive(defaultTemp[0]);
      setActive(defaultTemp[1]);
      setActiveIcon(defaultTemp[2]);
    }
    if (urlMarket && !routeExists.includes(urlMarket)) {
      setDefaultActive("");
      setActive("");
      setActiveIcon("");
    }
    if (!urlMarket) {
      setDefaultActive(initActive[0]);
      setActive(initActive[1]);
      setActiveIcon(initActive[2]);
    }
  }, [location.pathname]);

  const iconColor = (text) => {
    let arr = [text, `${text}Icon`];
    let check = arr.includes(active) || arr.includes(activeIcon);
    return check ? "#00A79E" : "#000000";
  };

  const returnObj = (text) => {
    if (`${text}Icon` === activeIcon) return;
    return {
      title: !md && "",
      onMouseEnter: () => setActive(text),
      onMouseLeave: () => setActive(""),
      onClick: () => {
        setActiveIcon(`${text}Icon`);
        navigate(`${rootName}${sidebarRouteObj[text]}`);
      },
    };
  };

  const { authLanding } = primaryRoutes;

  const LogoSection = () => {
    return (
      <div className="logo">
        {collapsed || !md ? (
          <Link to={`${rootName}${authLanding}`}>
            <LogoMob />
          </Link>
        ) : (
          <img
            src={logo}
            alt=""
            style={{ width: "130px" }}
            onClick={() => navigate(`${rootName}${authLanding}`)}
          />
        )}
        {md && (
          <span onClick={() => setCollapesed(!collapsed)}>
            <SidebarToggleIcon
              cursor={"pointer"}
              className={`${collapsed ? "rotateIcon" : ""}`}
              width={13}
              height={13}
            />
          </span>
        )}
      </div>
    );
  };

  const tradeTypeReturn = (type) => {
    return (
      <div
        className={`${"innerContact"}`}
        onClick={() => {
          dispatch(setTradingType(type));
          localStorage.setItem("tradeType", type);
        }}
      >
        <ul>
          <li className={tradingType === type ? "active" : ""}>
            {t(`sidebar.${type}`)}
          </li>
        </ul>
      </div>
    );
  };

  return (
    <Sider collapsed={(!md && true) || (md && collapsed)}>
      <LogoSection />
      <Menu
        className={collapsed === true ? "collapsed" : ""}
        theme="dark"
        mode="inline"
        defaultSelectedKeys={[defaultActive]}
        selectedKeys={[defaultActive]}
        items={[
          {
            key: "1",
            icon: (
              <span>
                <Homeicon fill={iconColor("home")} />
              </span>
            ),
            label: <span>{t("sidebar.home")}</span>,
            ...returnObj("home"),
          },
          {
            key: "2",
            icon: (
              <span>
                <Portfolio fill={iconColor("port")} />
              </span>
            ),
            label: <span>{t("sidebar.portfolio")}</span>,
            ...returnObj("port"),
          },
          {
            key: "3",
            icon: (
              <span>
                <AdvanceTrading fill={iconColor("advTrade")} />
              </span>
            ),
            label: <span>{t("sidebar.advanceTrading")}</span>,
            ...returnObj("advTrade"),
          },
          ...(defaultActiveSidebarObj[sidebarRouteObj.advTrade][2] ===
          activeIcon
            ? [
                {
                  label: (
                    <div className="tradingInner">
                      {tradeTypeReturn(typeOfTradeObj.spot)}
                      {/*{tradeTypeReturn(typeOfTradeObj.margin)}*/}
                      {/*{tradeTypeReturn(typeOfTradeObj.future)}*/}
                    </div>
                  ),
                },
              ]
            : []),
          {
            key: "4",
            icon: (
              <span>
                <Earn fill={iconColor("earn")} />
              </span>
            ),
            label: <span>{t("sidebar.earn")}</span>,
            ...returnObj("earn"),
          },
          md && {
            key: "5",
            icon: (
              <span>
                <ReferralIconNew fill={iconColor("referral")} />
              </span>
            ),
            label: <span>{t("sidebar.referral")}</span>,
            ...returnObj("referral"),
          },
        ]}
      />
    </Sider>
  );
}

export default SidebarLayout;
