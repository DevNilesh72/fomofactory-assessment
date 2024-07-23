'use client'
import { useRef } from 'react'
import { Provider } from 'react-redux'
import { useLocalStorage } from "../hooks/useStorage";
import { AppStore, makeStore } from "./store";
import { setStockName } from "./stockPriceSlice";

export default function StoreProvider({
  children
}: {
  children: React.ReactNode
}) {
  const { getItem } = useLocalStorage('name');
  const storeRef = useRef<AppStore>()
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore()
    storeRef.current.dispatch(setStockName(getItem()))
  }

  return <Provider store={storeRef.current}>{children}</Provider>
}