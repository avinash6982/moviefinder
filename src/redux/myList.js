import { createSlice } from "@reduxjs/toolkit";

export const myListSlice = createSlice({
  name: "myList",
  initialState: {
    items: [],
    itemIds: [],
  },
  reducers: {
    addToList: (state, action) => {
      let newList = [...state.items, action.payload];
      state.items = newList;
      state.itemIds = newList.map((listItem) => listItem.id);
    },
    removeFromList: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      state.itemIds = state.itemIds.filter((item) => item !== action.payload);
    },
  },
});

export const { addToList, removeFromList } = myListSlice.actions;

export default myListSlice.reducer;
