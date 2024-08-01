"use client";

import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { ProductSlice } from "./features/productSlice";
import { CategorySlice } from "./features/categorySlice";

const rootReducer = combineReducers({
  ProductReducer: ProductSlice.reducer,
  CategoryReducer: CategorySlice.reducer,
});

export const store = configureStore({ reducer: rootReducer });
export type IRootState = ReturnType<typeof rootReducer>;
export type AppThunkDispatch = typeof store.dispatch; 
