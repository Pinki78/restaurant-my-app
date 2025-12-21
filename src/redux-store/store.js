import { configureStore } from "@reduxjs/toolkit";
import { pageTitleReducer } from "./store-redux-componets/pageTitleSlice"; // ✅ named import

export const store = configureStore({
  reducer: {
    pageTitle: pageTitleReducer,
  },
});
