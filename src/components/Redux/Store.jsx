import { configureStore } from "@reduxjs/toolkit";

import alluserdata from "./alluserdata";
import alladmindata from "./alladmindata";

export const Store = configureStore({
  reducer: {
    alluserdata,
    alladmindata,
  },
});
