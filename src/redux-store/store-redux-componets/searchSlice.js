import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "itemsSearchList",
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

export const { setFilterSearch, clearFilterSearch } = searchSlice.actions;
export default searchSlice.reducer;
