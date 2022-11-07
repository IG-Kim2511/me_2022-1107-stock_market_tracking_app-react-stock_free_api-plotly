import React, { useState } from "react";

const Stock = () => {
  let [stockChart_X_value, setStockChart_X_value] = useState([]);
  let [stockChart_Y_value, setStockChart_Y_value] = useState([]);

  // 🍀env 파일은 node와 연결할때만 사용가능함 (react 단독으로 불가능)
  const API_KEY = "HGJWFG4N8AQ66ICD";
  let StockSymbol = "SPY";
  let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${StockSymbol}&outputsize=compact&apikey=${API_KEY}`;

  console.log(API_Call)



  return (
    <div>
      <h1>Stock market</h1>
    </div>
  );
};

export default Stock;
