"use client";

import styles from "../page.module.css";
import { useEffect } from "react";
import { StocksList } from "@repo/common/config";
import { useAppDispatch, useAppSelector } from "../../lib/hooks/redux-hooks";
import { useLocalStorage } from "../../lib/hooks/useStorage";
import { setStockName, updateStock } from "../../lib/store/stockPriceSlice";
export const dynamic = 'force-dynamic'
export default function StockPriceList() {
  const stockPrice = useAppSelector((state) => state.stockPrice.stockPrice);
  const stockPriceName = useAppSelector((state) => state.stockPrice.name);
  const dispatch = useAppDispatch();
  const { setItem } = useLocalStorage("name");

  useEffect(() => {
    setItem(stockPriceName);
  }, [stockPriceName]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const interval = setInterval(() => {
      async function fetchData(signal: AbortSignal) {
        const res = await fetch(
          `http://localhost:3001/stocks/list/${stockPriceName}`,
          {
            method: "GET",
            signal: signal,
          }
        );

        if (!signal.aborted && res.ok) {
          const data = await res.json();
          dispatch(updateStock(data.result));
        }
      }

      fetchData(signal);
    }, 1000);

    return () => {
      controller.abort("aborted on unmount");
      clearInterval(interval);
      dispatch(updateStock([]));
    };
  }, [stockPriceName]);

  return (
    <main className={styles.main}>
      <div className={styles.heading}>
        <h1>Latest stock price of :</h1>
        <section className={styles.dropdownSec}>
          <span className={styles.stockPriceCta}>{stockPriceName}</span>
          <div className={styles.dropdownContent}>
            {StocksList.map((e) => (
              <span onClick={() => dispatch(setStockName(e))}>{e}</span>
            ))}
          </div>
        </section>
      </div>
      <div>
        <div className={styles.tbl_header}>
          <table>
            <thead>
              <th>Sr. No.</th>
              <th>name</th>
              <th>price (in usd)</th>
              <th>timestamp</th>
            </thead>
          </table>
        </div>
        <div className={styles.tbl_content}>
          {stockPrice.length <= 0 ? (
            <h1>Loading...</h1>
          ) : (
            <table>
              <tbody>
                {stockPrice.map((stock, index) => {
                  return (
                    <tr key={stock.id}>
                      <td>{index + 1}</td>
                      <td>{stock.name}</td>
                      <td>{stock.price}</td>
                      <td>{stock.created_at}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </main>
  );
}
