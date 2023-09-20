// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   isFetchinguser: false,
//   alluserdata: [],
//   isFeatchinguserfailed: null,
// };

// export const userdata = createSlice({
//   name: "user",
//   initialState,
//   reducers: {
//     featchinguser: (state) => {
//       state.isFetchinguser = true;
//       state.alluserdata = [];
//       state.isFeatchinguserfailed = null;
//     },
//     featchinguserSuccessful: (state, action) => {
//       state.isFetchinguser = false;
//       state.alluserdata = action.payload;
//       state.isFeatchinguserfailed = null;
//     },
//     featchinguserfailed: (state, action) => {
//       state.isFetchinguser = false;
//       state.alluserdata = [];
//       state.isFeatchinguserfailed = action.payload;
//     },
//   },
// });

// export default userdata.reducer;
// export const { featchinguser, featchinguserSuccessful, featchinguserfailed } =
//   userdata.actions;
