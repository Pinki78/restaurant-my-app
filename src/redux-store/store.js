import { configureStore } from "@reduxjs/toolkit"
import { pageTitleReducer } from "./store-redux-componets/pageTitleSlice" // ✅ named import
import searchReducer from "./store-redux-componets/searchSlice"
import  menuListReducer   from "./menuListItmes"
import TestimonialListReducer   from "./store-redux-componets/testimonialListStort"

import BlogsListReducer   from "./store-redux-componets/blogListStort"

import TeamReducer from "./store-redux-componets/teamSlice"

import faqListStort from './store-redux-componets/faqListStort'
import cartStort from './store-redux-componets/cartSlice'
import contactStort from './store-redux-componets/contactStort'
import bookingFormStort from './store-redux-componets/bookingFormStort'
import loadingSlice from "./store-redux-componets/loadingSlice";

export const store = configureStore({
  reducer: {
    pageTitle: pageTitleReducer,
     SearchList: searchReducer,
     ListReducermenu: menuListReducer ,
     TestimonialReducermenu:TestimonialListReducer,
     BlogsReducermenu:BlogsListReducer,
     TeamReducerStore:TeamReducer,
     FaqReducerStore:faqListStort,
     CartReducerStore:cartStort,
     contactReducer:contactStort ,
     bookingReducer:bookingFormStort ,
     loadingReducer:loadingSlice,
  },
});
