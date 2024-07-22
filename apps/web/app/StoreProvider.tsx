'use client'
import { useRef } from 'react'
import { Provider } from 'react-redux'
import { makeStore, AppStore } from '../lib/store/store'
import { setStockName } from "../lib/store/stockPriceSlice"
import { useLocalStorage } from "../lib/hooks/useStorage"

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