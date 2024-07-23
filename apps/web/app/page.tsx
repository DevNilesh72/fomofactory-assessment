import styles from "./page.module.css";
// import StockPriceList from "./__component/stockPrice";
// import dynamic from 'next/dynamic'
 
// const StoreProvider = dynamic(() => import('../lib/store/StoreProvider'), { loading: () => <p>Loading...</p>,ssr: false })

export default function Home() {
  return (
    <div className={styles.page}>
      {/* <StoreProvider>
        <StockPriceList />
      </StoreProvider> */}
      Hii
    </div>
  );
}
