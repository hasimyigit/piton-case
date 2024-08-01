"use client";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Categories, Category } from "../types";
import { get } from "../service";

export interface internalInitialStateType {
  categories: Category[] | undefined;
}

const internalInitialState = {
  categories: [],
};

export const fetchCategories = createAsyncThunk("fetchCategories", () =>{
return get<Categories>("categories")
});

export const CategorySlice = createSlice({
  name: "category-slice",
  initialState: internalInitialState,
  reducers: {
    reset: () => internalInitialState,
  },
  extraReducers: (builder) => {
    builder.addCase(
      fetchCategories.fulfilled,
      (state: internalInitialStateType, action) => {
        state.categories = action.payload.category as Category[];
      }
    );
  },
});

export const { reset } = CategorySlice.actions;
