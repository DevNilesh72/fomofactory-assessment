import { createSlice } from '@reduxjs/toolkit'
import { stockPriceDTO } from "@repo/common/config"

export type StockPriceState = {
  name: string;
  stockPrice: stockPriceDTO[];
};

const initialState: StockPriceState = {
  name: 'bitcoin',
  stockPrice: [],
};

export const stockPriceSlice = createSlice({
  name: 'stockPrice',
  initialState,
  reducers: {
    setStockName: (state, { payload }) => {
      state.name = payload;
    },
    updateStock: (state, { payload }) => {
      state.stockPrice = [payload, ...state.stockPrice]
    }
  },
})

// Action creators are generated for each case reducer function
export const { setStockName, updateStock } = stockPriceSlice.actions

export default stockPriceSlice.reducer;