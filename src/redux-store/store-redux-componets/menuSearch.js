import { useState, useMemo } from "react";
import { useSelector } from "react-redux";

import { FOOD_MENU_DATA } from "../../api-data/ManulistData/manu-list-data";

import { createSlice, fetchBaseQuery } from "@reduxjs/toolkit";

// const ProductSearchComponent = () =>{
//       const [filter, setFilter] = useState('');
// }

const ProductSearchComponent = createSlice({
  name: "menuSearch",
  initialState: {
    filter: "",
  },

  reducers: {
    setFilter: (state, action) => {
        state.filter = action.payload;
    },
    clearFilter: (state) => {
      state.filter = "";
    },
  },
});

const [filterMenuSearch, setFilterMenuSearch] = useState("");
const allJobs = useSelector((state) => state.jobs);
const filteredJobs = useMemo(() =>
  allJobs.filter((job) => job.startsWith(filter), [filter])
);


export const { setFilter, clearFilter } = ProductSearchComponent.actions;
export default ProductSearchComponent.reducer;