import { configureStore } from '@reduxjs/toolkit';
import ShopCluesReducer from './ShopCluesSlice'

export const store = configureStore({
  reducer: {
    shopClues:ShopCluesReducer,
  },
})