import { configureStore } from "@reduxjs/toolkit";
import { pageTitleReducer } from "./store-redux-componets/pageTitleSlice"; // ✅ named import
import menuSearchReducer from "./store-redux-componets/menuSearch";

export const store = configureStore({
  reducer: {
    pageTitle: pageTitleReducer,
     menuSearch: menuSearchReducer,
  },
});
