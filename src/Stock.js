import React, { useEffect, useState } from "react";
import axios from 'axios';

const Stock = () => {
  let [stockChart_X_value, setStockChart_X_value] = useState([]);
  let [stockChart_Y_value, setStockChart_Y_value] = useState([]);

  let stockChart_X_value_function =[];
  let stockChart_Y_value_function =[];

  // 🍀env 파일은 node와 연결할때만 사용가능함 (react 단독으로 불가능)
  const API_KEY = "HGJWFG4N8AQ66ICD";
  let StockSymbol = "SPY";
  let API_Call = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${StockSymbol}&outputsize=compact&apikey=${API_KEY}`;

  console.log(API_Call)


  useEffect(() => {
    const fetchItems = async () => {
        const result = await axios(API_Call);
  
        console.log(result.data);
 
        for (let key in result.data['Time Series (Daily)']) {
            stockChart_X_value_function.push(key);
            stockChart_Y_value_function.push(result.data['Time Series (Daily)'][key]['4. close']);
        }
        console.log(stockChart_X_value_function)
        console.log(stockChart_Y_value_function)
        setStockChart_X_value( stockChart_X_value_function);
        setStockChart_Y_value( stockChart_Y_value_function);
        
    };        
    fetchItems();
}, [])


    console.log(stockChart_X_value)
    console.log(stockChart_Y_value)

  
  return (
    <div>
      <h1>Stock market</h1>
      {/* <div>{stockChart_X_value}</div> */}
      {/* <div>{stockChart_Y_value}</div> */}




    </div>
  );
};

export default Stock;
