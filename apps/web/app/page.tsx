"use client";

import styles from "./page.module.css";
import { useAppDispatch, useAppSelector } from "../lib/hooks";
import { useEffect } from "react";
import { updateStock } from "../lib/store/stockPriceSlice";

export default function Home() {
  const stockPrice = useAppSelector((state) => state.stockPrice.stockPrice);
  const dispatch = useAppDispatch();

  useEffect(() => {
    let interval = setInterval(() => {
      dispatch(
        updateStock({
          id: Math.floor(Math.random() * 10),
          name: "abc",
          price: Math.random(),
        })
      );
    }, 2000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Stock price</h1>
        <table>
          <tbody>
            {stockPrice.map((stock) => {
              return (
                <tr>
                  <td>{stock.id}</td>
                  <td>{stock.name}</td>
                  <td>{stock.price}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </main>
    </div>
  );
}
