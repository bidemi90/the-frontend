import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isFetchingadmin: false,
  admindata: [],
  isFeatchingadminfailed: null,
};

export const alladmindata = createSlice({
  name: "admin",
  initialState,
  reducers: {
    featchingadmin: (state) => {
      state.isFetchingadmin = true;
      state.admindata = [];
      state.isFeatchingadminfailed = null;
    },
    featchingadminSuccessful: (state, action) => {
      state.isFetchingadmin = false;
      state.admindata = action.payload;
      state.isFeatchingadminfailed = null;
    },
    featchingadminfailed: (state, action) => {
      state.isFetchingadmin = false;
      state.admindata = [];
      state.isFeatchingadminfailed = action.payload;
    },
  },
});

export default alladmindata.reducer;
export const { featchingadmin, featchingadminSuccessful, featchingadminfailed } =
alladmindata.actions;
