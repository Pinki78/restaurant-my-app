import { useState, useMemo } from "react";
import { useSelector } from "react-redux";

import { FOOD_MENU_DATA } from "../../api-data/manulist-data/manu-list-data";

import { createSlice, fetchBaseQuery } from "@reduxjs/toolkit";


const searchSlice = createSlice({
  name: "menuSearch",
  initialState: {
    filterSearch: "",
  },
  reducers: {
    setFilterSearch: (state, action) => {
      state.filterSearch = action.payload;
    },
    clearFilterSearch: (state) => {
      state.filterSearch = "";
    },
  },
});

// Export actions
export const { setFilterSearch, clearFilterSearch } = searchSlice.actions;

// Export reducer
export default searchSlice.reducer;