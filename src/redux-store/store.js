import { configureStore } from "@reduxjs/toolkit";
import { pageTitleReducer } from "./store-redux-componets/pageTitleSlice"; // ✅ named import
import searchReducer from "./store-redux-componets/searchSlice";
import  menuListReducer   from "./menuListItmes"


export const store = configureStore({
  reducer: {
    pageTitle: pageTitleReducer,
     menuSearch: searchReducer,
     ListReducermenu: menuListReducer ,
  },
});
