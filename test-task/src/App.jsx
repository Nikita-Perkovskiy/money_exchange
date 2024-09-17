import React, { useEffect, useState } from "react";
import { getExchange } from "./api/getExchange";
import { styles } from "./App.styled";
import {
  EUR_CURRENCY,
  UAH_CURRENCY,
  USD_CURRENCY,
} from "./constants/constants.js";

export const App = () => {
  const [uAHexchangeRates, setUAhExchangeRates] = useState(null);
  const [uSDexchangeRates, setUSdExchangeRates] = useState(null);
  const [eURexchangeRates, setEUrExchangeRates] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const exchangeUAHdate = await getExchange(
        //   UAH_CURRENCY,
        //   `${USD_CURRENCY},${EUR_CURRENCY}`
        // );
        // const exchangeUSDdate = await getExchange(
        //   USD_CURRENCY,
        //   `${UAH_CURRENCY},${EUR_CURRENCY}`
        // );
        // const exchangeEURdate = await getExchange(
        //   EUR_CURRENCY,
        //   `${USD_CURRENCY},${UAH_CURRENCY}`
        // );
        // setUAhExchangeRates({ ...exchangeUAHdate.rates });
        // setUSdExchangeRates({ ...exchangeUSDdate.rates });
        // setEUrExchangeRates({ ...exchangeEURdate.rates });
        setUAhExchangeRates({ ...{ USD: 0.024106, EUR: 0.021686 } });
        setUSdExchangeRates({ ...{ UAH: 41.483904, EUR: 0.89875 } });
        setEUrExchangeRates({ ...{ USD: 1.112657, UAH: 46.157336 } });
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  console.log("uAHexchangeRates:", uAHexchangeRates);
  console.log("uSDexchangeRates:", uSDexchangeRates);
  console.log("eURexchangeRates:", eURexchangeRates);

  return (
    <main style={styles.mainWrapper}>
      <header style={styles.headerWrapper}>
        <h2 style={styles.baseTitle}>Exchange rates:</h2>
        <p style={styles.baseTitle}>USD: {uAHexchangeRates?.USD} UAH</p>
        <p style={styles.baseTitle}>EUR: {uAHexchangeRates?.EUR} UAH</p>
      </header>
    </main>
  );
};
