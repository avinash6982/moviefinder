import { createSlice } from "@reduxjs/toolkit";

export const discoverSlice = createSlice({
  name: "discover",
  initialState: {
    items: [],
  },
  reducers: {
    //Add items to discover, show when app is offline
    updateDiscover: (state, action) => {
      state.items = [...state.items, action.payload];
    },
  },
});

export const { updateDiscover } = discoverSlice.actions;

export default discoverSlice.reducer;
