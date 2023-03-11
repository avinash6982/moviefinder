import { createSlice } from "@reduxjs/toolkit";

export const myListSlice = createSlice({
  name: "myList",
  initialState: {
    items: [],
  },
  reducers: {
    addToList: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromList: (state, action) => {
      state.items = state.items.filter(
        (item) => item["1. symbol"] !== action.payload
      );
    },
  },
});

export const { addToList, removeFromList } = myListSlice.actions;

export default myListSlice.reducer;
