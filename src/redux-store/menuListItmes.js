import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, doc, getDoc ,  getDocs } from "firebase/firestore";

import { db , } from "../assets/firebase/firebase";
import { FOOD_MENU_DATA } from "../api-data/manulist-data/manu-list-data";




export const fetchMenuList = createAsyncThunk(
  "menuLists/fetchMenuList",
  async () => {
    try {
      const snapshot = await getDocs(collection(db, "foodManeList"));

      if (snapshot.empty) return FOOD_MENU_DATA;

      // 🔥 FLATTEN itemsMenuList from all documents
      const allItems = snapshot.docs.flatMap(doc => {
        const data = doc.data();
        return data.itemsMenuList || [];
      });

      return allItems.length ? allItems : FOOD_MENU_DATA;

    } catch (error) {
      console.error("Firestore fetch error:", error);
      return FOOD_MENU_DATA;
    }
  }
);


const menuListItems = createSlice({
  name: "menuLists",
  initialState: {
    itemsMenuList: [],
    loading: false,
    search: "",
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
        state.itemsMenuList = FOOD_MENU_DATA;
      });
  },
});

export const { setSearch } = menuListItems.actions;
export default menuListItems.reducer;
