import React, { useState, useEffect } from "react";
import { Table } from "antd";
import "./Explore.scss";
import fetch from 'node-fetch'; // Import node-fetch
import Moralis from 'moralis';

const jsonData = [
  {
      "ticker": "USDC",
      "img": "https://cdn.moralis.io/eth/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.png",
      "name": "USD Coin",
      "address": "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",
      "decimals": 6
  },
  {
      "ticker": "LINK",
      "img": "https://cdn.moralis.io/eth/0x514910771af9ca656af840dff83e8264ecf986ca.png",
      "name": "Chainlink",
      "address": "0x514910771af9ca656af840dff83e8264ecf986ca",
      "decimals": 18
  },
  {
      "ticker": "USDT",
      "img": "https://cdn.moralis.io/eth/0xdac17f958d2ee523a2206206994597c13d831ec7.png",
      "name": "Tether USD",
      "address": "0xdac17f958d2ee523a2206206994597c13d831ec7",
      "decimals": 6
  },
  {
      "ticker": "GUSD",
      "img": "https://cdn.moralis.io/eth/0x056fd409e1d7a124bd7017459dfea2f387b6d5cd.png",
      "name": "Gemini USD",
      "address": "0x056Fd409E1d7A124BD7017459dFEa2F387b6d5Cd",
      "decimals": 2
  },
  {
      "ticker": "DAI",
      "img": "https://cdn.moralis.io/eth/0x6b175474e89094c44da98b954eedeac495271d0f.png",
      "name": "Dai Stablecoin",
      "address": "0x6b175474e89094c44da98b954eedeac495271d0f",
      "decimals": 18
  },
  {
      "ticker": "WETH",
      "img": "https://cdn.moralis.io/eth/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2.png",
      "name": "Wrapped Ethereum",
      "address": "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2",
      "decimals": 18
  },
  {
      "ticker": "WBTC",
      "img": "https://cdn.moralis.io/eth/0x2260fac5e5542a773aa44fbcfedf7c193bc2c599.png",
      "name": "Wrapped Bitcoin",
      "address": "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",
      "decimals": 8
  },
  {
      "ticker": "MATIC",
      "img": "https://cdn.moralis.io/eth/0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0.png",
      "name": "Matic Token",
      "address": "0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0",
      "decimals": 18
  },
  {
      "ticker": "UNI",
      "img": "https://cdn.moralis.io/eth/0x1f9840a85d5af5bf1d1762f925bdaddc4201f984.png",
      "name": "Uniswap",
      "address": "0x1f9840a85d5af5bf1d1762f925bdaddc4201f984",
      "decimals": 18
  },
  {
      "ticker": "CRV",
      "img": "https://cdn.moralis.io/eth/0xd533a949740bb3306d119cc777fa900ba034cd52.png",
      "name": "Curve DAO Token",
      "address": "0xd533a949740bb3306d119cc777fa900ba034cd52",
      "decimals": 18
  },
  {
      "ticker": "MKR",
      "img": "https://cdn.moralis.io/eth/0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2.png",
      "name": "Maker",
      "address": "0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2",
      "decimals": 18
  },
  {
      "ticker": "SHIB",
      "img": "https://cdn.moralis.io/eth/0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce.png",
      "name": "Shiba Inu",
      "address": "0x95ad61b0a150d79219dcf64e1e6cc01f0b64c4ce",
      "decimals": 18
  },
  {
      "ticker": "AAVE",
      "img": "https://cdn.moralis.io/eth/0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9.png",
      "name": "AAVE",
      "address": "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9",
      "decimals": 18
  }


]







const ExpTokenTable = () => {
    const [tokenData, setTokenData] = useState([]);

    useEffect(() => {
        fetchLivePrices();
    }, []);

    const fetchLivePrices = async () => {
        try {
            const options = {
                method: 'POST',
                headers: {
                    accept: 'application/json',
                    'content-type': 'application/json',
                    'X-API-Key': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJub25jZSI6ImI5NmZjNWRlLWY4MTAtNGYxNi1hNDYyLTFkOWRmNmZkNzU2YiIsIm9yZ0lkIjoiMzgxOTcyIiwidXNlcklkIjoiMzkyNDg2IiwidHlwZSI6IlBST0pFQ1QiLCJ0eXBlSWQiOiI2NTQ3YzBlMy0zNzRlLTRmOWMtOTFkNS00Mzg4NmU2YTBiMTciLCJpYXQiOjE3MTM4ODkyMzMsImV4cCI6NDg2OTY0OTIzM30.ip3q7OFGjMZp6Cq4GGBji4Do-i75de6PJsoTisKKmd4' // Replace with your Moralis API key
                },
                body: JSON.stringify({
                    "tokens": jsonData.map(item => ({ "token_address": item.address }))
                })
            };

            const response = await fetch('https://deep-index.moralis.io/api/v2.2/erc20/prices?chain=eth&include=percent_change', options);
            const data = await response.json();

            console.log('Live Prices Response:', data);

            // Update token data with live prices
  
            const updatedData = jsonData.map((item, index) => ({
                ...item,
                price: data[index]?.usdPrice || "-",
                hourChange: data[index]?.priceChange1h || "-",
                dayChange: data[index]?.['24hrPercentChange'] || "-",
                fdv:data[index]?.priceChange1h || "-",
                volume: data[index]?.priceChange1h || "-",
            }));

            setTokenData(updatedData);
        } catch (error) {
            console.error('Error fetching live prices:', error);
        }
    };

    const columns = [
        {
            title: "#",
            dataIndex: "hash",
            key: "hash",
        },
        {
            title: "Token Name",
            dataIndex: "tokenName",
            key: "tokenName",
            render: (text, record) => (
                <p className="hashdata">
                   <img src={record.img} alt="Token" style={{ width: "55px", height: "55px" }} />
                    {record.name} 
                </p>
            ),
        },
        {
            title: "Price (USD)",
            dataIndex: "price",
            key: "price",
            render: (text, record) => (
              <p className="hashdata">
                 {console.log(record)}
                  {record.price}
              </p>
          ),
            

        },
        {
            title: "1 Hour Change",
            dataIndex: "hourChange",
            key: "hourChange",
            render: (text, record) => (
              <p className="hashdata">
                 {console.log(record)}
                  {record.hourChange} 
              </p>
        ),
        },
        {
            title: "1 Day Change",
            dataIndex: "dayChange",
            key: "dayChange",
            render: (text, record) => (
              <p className="hashdata">
                 {console.log(record)}
                  {record.dayChange} 
              </p>
        ),
      },
        {
            title: "FDV",
            dataIndex: "fdv",
            key: "fdv",
        },
        {
            title: "Volume",
            dataIndex: "volume",
            key: "volume",
        },
       
    ];

    const mappedData = tokenData.map((item, index) => ({
        key: `${index}`,
        hash: index + 1,
        img: item.img,
        name: item.name,
        ticker: item.ticker,
        price: item.price,
        hourChange: item.hourChange,
        dayChange: item.dayChange,
        fdv: item.fdv,
        volume: item.volume,
        status: item.status,
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
