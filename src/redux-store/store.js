import { configureStore } from "@reduxjs/toolkit";
import { pageTitleReducer } from "./store-redux-componets/pageTitleSlice"; // ✅ named import
import searchReducer from "./store-redux-componets/searchSlice";
import  menuListReducer   from "./menuListItmes"
import TestimonialListReducer   from "./store-redux-componets/testimonialListStort"

import BlogsListReducer   from "./store-redux-componets/blogListStort"


export const store = configureStore({
  reducer: {
    pageTitle: pageTitleReducer,
     SearchList: searchReducer,
     ListReducermenu: menuListReducer ,
     TestimonialReducermenu:TestimonialListReducer,
     BlogsReducermenu:BlogsListReducer
  },
});
