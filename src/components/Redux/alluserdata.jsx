import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isFetchinguser: false,
  userdata: [],
  isFeatchinguserfailed: null,
};

export const alluserdata = createSlice({
  name: "user",
  initialState,
  reducers: {
    featchinguser: (state) => {
      state.isFetchinguser = true;
      state.userdata = [];
      state.isFeatchinguserfailed = null;
    },
    featchinguserSuccessful: (state, action) => {
      state.isFetchinguser = false;
      state.userdata = action.payload;
      state.isFeatchinguserfailed = null;
    },
    featchinguserfailed: (state, action) => {
      state.isFetchinguser = false;
      state.userdata = [];
      state.isFeatchinguserfailed = action.payload;
    },
  },
});

export default alluserdata.reducer;
export const { featchinguser, featchinguserSuccessful, featchinguserfailed } =
alluserdata.actions;
