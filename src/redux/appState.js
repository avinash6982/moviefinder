import { createSlice } from "@reduxjs/toolkit";

export const appStateSlice = createSlice({
  name: "appState",
  initialState: {
    offline: false,
  },
  reducers: {
    toggleOffline: (state, action) => {
      state.offline = action.payload;
    },
  },
});

export const { toggleOffline } = appStateSlice.actions;

export default appStateSlice.reducer;
