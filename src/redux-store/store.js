import { configureStore } from "@reduxjs/toolkit";
import { pageTitleReducer } from "./pageTitleSlice"; // ✅ named import

export const store = configureStore({
  reducer: {
    pageTitle: pageTitleReducer,
  },
});
