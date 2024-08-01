"use client";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Product, Products } from "../types";
import { get } from "../service";

export interface internalInitialStateType {
  [x: number]: Product[];
  selectedProduct:Product | null
}

const internalInitialState :internalInitialStateType = {
  selectedProduct: null
};

export const fetchProducts = createAsyncThunk(
  "fetchProducts",
  async (categoryId: number) => {
    const data = await get<Products>("products", `/${categoryId}`);
    return { key: categoryId, value: data };
  }
);

export const ProductSlice = createSlice({
  name: "product-slice",
  initialState: internalInitialState,
  reducers: {
    selectProduct:(state,action) => {
      return {...state, selectedProduct: action.payload}
    },
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchProducts.fulfilled,
      (state, action) => {
        return {
            ...state,
          [action.payload.key]: action.payload.value.product,
          
        };
      }
    );
  },
});

export const { selectProduct } = ProductSlice.actions;
