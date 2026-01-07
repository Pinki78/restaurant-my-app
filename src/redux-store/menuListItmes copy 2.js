

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { FOOD_MENU_DATA } from "../api-data/manulist-data/manu-list-data";
// export const fetchMenuList = createAsyncThunk(
//   "menu/fetchMenuList",
//   async () => {
//     const res = await axios.get("api-data/manulist-data/manu-list-data.js");
//     return res.data;
//   }
// );




export const fetchMenuList  = createAsyncThunk (
  "menuLists/fetchMenuList",
  async () => {
    //  const res = await axios.get(FOOD_MENU_DATA);
     return FOOD_MENU_DATA;
   }
)


const menuListItmes = createSlice({
  name: "menuLists",
  initialState: {
    itemsMenuList: [],
    loading: false,

  // // 🔍 search
  //   search: "",


  },
  reducers: {

    setSearch(state, action) {
      state.search = action.payload;
    },

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMenuList.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMenuList.fulfilled, (state, action) => {
        state.loading = false;
        state.itemsMenuList = action.payload;
      })
      .addCase(fetchMenuList.rejected, (state) => {
        state.loading = false;
      });
  },
});
// export const { setSearch } = menuListSlice.actions;
export default menuListItmes.reducer;
