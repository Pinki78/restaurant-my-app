import { useState, useMemo } from "react";
import { useSelector } from "react-redux";

import { FOOD_MENU_DATA } from "../../api-data/manulist-data/manu-list-data";

import { createSlice, fetchBaseQuery } from "@reduxjs/toolkit";

// const ProductSearchComponent = () =>{
//       const [filter, setFilter] = useState('');
// }

const SearchComponent = createSlice({
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

// const [filterMenuSearch, setFilterMenuSearch] = useState("");
// const allJobs = useSelector((state) => state.jobs);
// const filteredJobs = useMemo(() =>
//   allJobs.filter((job) => job.startsWith(filter), [filter])
// );

export const { setFilterSearch, clearFilterSearch } = SearchComponent.actions;
export default SearchComponent.reducer;