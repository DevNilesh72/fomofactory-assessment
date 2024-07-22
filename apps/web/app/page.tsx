"use client";

import styles from "./page.module.css";
import { useAppDispatch, useAppSelector } from "../lib/hooks/redux-hooks";
import { useEffect } from "react";
import { setStockName, updateStock } from "../lib/store/stockPriceSlice";
import { useLocalStorage } from "../lib/hooks/useStorage";

export default function Home() {
  const stockPrice = useAppSelector((state) => state.stockPrice.stockPrice);
  const stockPriceName = useAppSelector((state) => state.stockPrice.name);
  const dispatch = useAppDispatch();
  const { setItem } = useLocalStorage('name');

  const stocks = [
    "Bitoin",
    "Ethereum",
    "Tether",
    "BNB",
    "Solana"
  ]

  useEffect(() => {
    setItem(stockPriceName)
  }, [stockPriceName])

  // useEffect(() => {
  //   let interval = setInterval(() => {
  //     dispatch(
  //       updateStock({
  //         id: Math.floor(Math.random() * 10),
  //         name: "abc",
  //         price: Math.random(),
  //       })
  //     );
  //   }, 2000);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Stock price</h1>
        <select value={stockPriceName} onChange={(e) => dispatch(setStockName(e.target.value))}>
          {stocks.map(e => <option>{e}</option>)}
        </select>
        <p>{stockPriceName}</p>
        <table>
          <tbody>
            {stockPrice.map((stock) => {
              return (
                <tr>
                  <td>{stock.id}</td>
                  <td>{stock.name}</td>
                  <td>{stock.price}</td>
                  <td>{stock.timestamp}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </main>
    </div>
  );
}
