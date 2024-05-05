import React, { useState, useEffect } from "react";
import { Table } from "antd";
import "./Explore.scss";
import fetch from "node-fetch"; // Import node-fetch

const tokenImagesArray = [
  {
    name: "Bitcoin",
    image_link: "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
  },
  {
    name: "Ethereum",
    image_link: "https://s2.coinmarketcap.com/static/img/coins/64x64/1027.png",
  },
  {
    name: "Tether USDt",
    image_link: "https://s2.coinmarketcap.com/static/img/coins/64x64/825.png",
  },
  {
    name: "BNB",
    image_link: "https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png",
  },
  {
    name: "Solana",
    image_link: "https://s2.coinmarketcap.com/static/img/coins/64x64/5426.png",
  },
  {
    name: "USDC",
    image_link: "https://s2.coinmarketcap.com/static/img/coins/64x64/3408.png",
  },
  {
    name: "XRP",
    image_link: "https://s2.coinmarketcap.com/static/img/coins/64x64/52.png",
  },
  {
    name: "Dogecoin",
    image_link: "https://s2.coinmarketcap.com/static/img/coins/64x64/74.png",
  },
  {
    name: "Toncoin",
    image_link: "https://s2.coinmarketcap.com/static/img/coins/64x64/2642.png",
  },
  {
    name: "Cardano",
    image_link: "https://s2.coinmarketcap.com/static/img/coins/64x64/2010.png",
  },
  {
    name: "Shiba Inu",
    image_link: "https://s2.coinmarketcap.com/static/img/coins/64x64/5994.png",
  },
  {
    name: "Avalanche",
    image_link: "https://s2.coinmarketcap.com/static/img/coins/64x64/5805.png",
  },
  {
    name: "TRON",
    image_link: "https://s2.coinmarketcap.com/static/img/coins/64x64/1958.png",
  },
  {
    name: "Polkadot",
    image_link: "https://s2.coinmarketcap.com/static/img/coins/64x64/6636.png",
  },
  {
    name: "Bitcoin Cash",
    image_link: "https://s2.coinmarketcap.com/static/img/coins/64x64/1831.png",
  },
  {
    name: "Chainlink",
    image_link: "https://s2.coinmarketcap.com/static/img/coins/64x64/1975.png",
  },
  {
    name: "NEAR Protocol",
    image_link: "https://s2.coinmarketcap.com/static/img/coins/64x64/6535.png",
  },
  {
    name: "Polygon",
    image_link: "https://s2.coinmarketcap.com/static/img/coins/64x64/3890.png",
  },
  {
    name: "Litecoin",
    image_link: "https://s2.coinmarketcap.com/static/img/coins/64x64/2.png",
  },
  {
    name: "Internet Computer",
    image_link: "https://s2.coinmarketcap.com/static/img/coins/64x64/8916.png",
  },

  {
    name: "UNUS SED LEO",
    image_link: "https://s2.coinmarketcap.com/static/img/coins/64x64/3957.png",
  },
  {
    name: "Dai",
    image_link: "https://s2.coinmarketcap.com/static/img/coins/64x64/4943.png",
  },
  {
    name: "Uniswap",
    image_link: "https://s2.coinmarketcap.com/static/img/coins/64x64/7083.png",
  },
  {
    name: "Ethereum Classic",
    image_link: "https://s2.coinmarketcap.com/static/img/coins/64x64/1321.png",
  },
  {
    name: "Aptos",
    image_link: "https://s2.coinmarketcap.com/static/img/coins/64x64/4642.png",
  },
  {
    name: "Hedera",
    image_link: "https://s2.coinmarketcap.com/static/img/coins/64x64/21794.png",
  },
  {
    name: "First Digital USD",
    image_link: "https://s2.coinmarketcap.com/static/img/coins/64x64/26081.png",
  },
  {
    name: "Render",
    image_link: "https://s2.coinmarketcap.com/static/img/coins/64x64/5690.png",
  },
  {
    name: "Cosmos",
    image_link: "https://s2.coinmarketcap.com/static/img/coins/64x64/3794.png",
  },
  {
    name: "Cronos",
    image_link: "https://s2.coinmarketcap.com/static/img/coins/64x64/3635.png",
  },
  {
    name: "Pepe",
    image_link: "https://s2.coinmarketcap.com/static/img/coins/64x64/24478.png",
  },
  {
    name: "Mantle",
    image_link: "https://s2.coinmarketcap.com/static/img/coins/64x64/27075.png",
  },
  {
    name: "Filecoin",
    image_link: "https://s2.coinmarketcap.com/static/img/coins/64x64/2280.png",
  },
  {
    name: "Stacks",
    image_link: "https://s2.coinmarketcap.com/static/img/coins/64x64/4847.png",
  },
  {
    name: "Immutable",
    image_link: "https://s2.coinmarketcap.com/static/img/coins/64x64/10603.png",
  },
  {
    name: "dogwifhat",
    image_link: "https://s2.coinmarketcap.com/static/img/coins/64x64/28752.png",
  },
  {
    name: "Stellar",
    image_link: "https://s2.coinmarketcap.com/static/img/coins/64x64/512.png",
  },
  {
    name: "Bittensor",
    image_link: "https://s2.coinmarketcap.com/static/img/coins/64x64/22974.png",
  },
  {
    name: "OKB",
    image_link: "https://s2.coinmarketcap.com/static/img/coins/64x64/3897.png",
  },
  {
    name: "Optimism",
    image_link: "https://s2.coinmarketcap.com/static/img/coins/64x64/11840.png",
  },
  {
    name: "Arbitrum",
    image_link: "https://s2.coinmarketcap.com/static/img/coins/64x64/11841.png",
  },
  {
    name: "The Graph",
    image_link: "https://s2.coinmarketcap.com/static/img/coins/64x64/6719.png",
  },
  {
    name: "VeChain",
    image_link: "https://s2.coinmarketcap.com/static/img/coins/64x64/3077.png",
  },
  {
    name: "Maker",
    image_link: "https://s2.coinmarketcap.com/static/img/coins/64x64/1518.png",
  },
  {
    name: "Arweave",
    image_link: "https://s2.coinmarketcap.com/static/img/coins/64x64/5632.png",
  },
  {
    name: "Sui",
    image_link: "https://s2.coinmarketcap.com/static/img/coins/64x64/20947.png",
  },
  {
    name: "Kaspa",
    image_link: "https://s2.coinmarketcap.com/static/img/coins/64x64/20396.png",
  },
  {
    name: "Monero",
    image_link: "https://s2.coinmarketcap.com/static/img/coins/64x64/328.png",
  },
  {
    name: "Injective",
    image_link: "https://s2.coinmarketcap.com/static/img/coins/64x64/7226.png",
  },
  {
    name: "Theta Network",
    image_link: "https://s2.coinmarketcap.com/static/img/coins/64x64/2416.png",
  },
];
// Convert the array to an object
const tokenImages = tokenImagesArray.reduce((acc, token) => {
  acc[token.name] = token.image_link;
  return acc;
}, {});

console.log(tokenImages);

const ExpTokenTable = () => {
  const [tokenData, setTokenData] = useState([]);
  const apikey = "2ad9f937-58a4-458b-8613-72a2dc7350ef";

  useEffect(() => {
    const fetchData = () => {
      if (!apikey) {
        console.error("API key is undefined. Cannot fetch data.");
        return;
      }

      fetch(
        `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?CMC_PRO_API_KEY=${apikey}`
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to fetch data from CoinMarketCap API");
          }
          return response.json();
        })
        .then((data) => {
          console.log(data); // Log the raw data from the API
          const sortedCryptos = data.data.sort((a, b) => {
            const aMarketCap =
              a.quote && a.quote.USD ? a.quote.USD.market_cap : 0;
            const bMarketCap =
              b.quote && b.quote.USD ? b.quote.USD.market_cap : 0;
            return bMarketCap - aMarketCap;
          });
          const topN = 50;
          const topCryptos = sortedCryptos.slice(0, topN);
          setTokenData(topCryptos);
          console.log(topCryptos); // Log the sorted and sliced data
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    };

    fetchData();
    //     const interval = setInterval(fetchData, 2000); // Call every 5 seconds
    //   return () => clearInterval(interval); // Cleanup
  }, [apikey]); // Depend on apikey to re-fetch if it changes

  const columns = [
    {
      title: "#",
      dataIndex: "hash",
      key: "hash",
    },
    {
      title: "Token Name",
      dataIndex: "name",
      key: "name",
      render: (text, record) => (
        <p className="hashdata">
          <img
            src={tokenImages[record.name] || "default_image_path.png"}
            alt="Token"
            style={{ width: "55px", height: "55px" }}
          />
          {record.name}
        </p>
      ),
    },
    {
      title: "Price ",
      dataIndex: "price",
      key: "price",
      render: (text, record) => (
        <p className="hashdata">${record.price.toFixed(3)}</p>
      ),
    },
    {
      title: "1h %",
      dataIndex: "hourChange",
      key: "hourChange",
      render: (text, record) => {
        const changeClass =
          record.hourChange >= 0 ? "positive-change" : "negative-change";
        return (
          <p className={`hashdata ${changeClass}`}>
            {record.hourChange.toFixed(2)}%
          </p>
        );
      },
    },
    {
      title: "24 %",
      dataIndex: "dayChange",
      key: "dayChange",
      render: (text, record) => {
        const changeClass =
          record.dayChange >= 0 ? "positive-change" : "negative-change";
        return (
          <p className={`hashdata ${changeClass}`}>
            {record.dayChange.toFixed(2)}%
          </p>
        );
      },
    },
    {
      title: "FDMC",
      dataIndex: "fdv",
      key: "fdv",
      render: (text, record) => (
        <p className="hashdata">${(record.fdv / 1000000000).toFixed(2)}B</p>
      ),
    },
    {
      title: "Volume(24h)",
      dataIndex: "volume",
      key: "volume",
      render: (text, record) => (
        <p className="hashdata">${(record.volume / 1000000).toFixed(2)}M</p>
      ),
    },
    {
      title: "Market Cap",
      dataIndex: "market_cap",
      key: "market_cap",
      render: (text, record) => (
        <p className="hashdata">${(record.market_cap / 1000000).toFixed(2)}M</p>
      ),
    },
    {
      title: "Circulating Supply",
      dataIndex: "circulating_supply ",
      key: "circulating_supply ",
      render: (text, record) => (
        <p className="hashdata">
          ${(record.circulating_supply / 1000000).toFixed(2)}M
        </p>
      ),
    },
  ];

  const mappedData = tokenData.map((item, index) => ({
    key: `${index}`,
    hash: index + 1,
    img: item.logo, // Assuming 'logo' is the correct property for the image URL
    name: item.name,
    ticker: item.symbol, // Assuming 'symbol' is the correct property for the ticker
    price: item.quote.USD.price, // Accessing price from the 'quote' object
    hourChange: item.quote.USD.percent_change_1h, // Assuming you want the 1-hour percentage change
    dayChange: item.quote.USD.percent_change_24h, // Assuming you want the 24-hour percentage change
    fdv: item.quote.USD.fully_diluted_market_cap, // Assuming 'circulating_supply' is what you mean by 'FDV'
    market_cap: item.quote.USD.market_cap,
    circulating_supply: item.circulating_supply,
    volume: item.quote.USD.volume_24h, // Assuming you want the 24-hour trading volume
    status: item.status, // Assuming 'status' is a valid property
  }));

  return (
    <Table
      columns={columns}
      dataSource={mappedData}
      pagination={false}
      className="commontable"
    />
  );
};

export default ExpTokenTable;
