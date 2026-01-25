import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, doc, getDoc ,  getDocs } from "firebase/firestore";

import { db , } from "../assets/firebase/firebase";
import { FOOD_MENU_DATA } from "../api-data/manulist-data/manu-list-data";




// Async thunk: fetch from Firebase, fallback to static data
// export const fetchMenuList = createAsyncThunk(
//   "menuLists/fetchMenuList",
//   async () => {
//     try {
//       const querySnapshot = await getDocs(collection(db, "foodManeList"));
//       const menuData = [];
//       querySnapshot.forEach((doc) => {
//         menuData.push({ id: doc.id, ...doc.data() });
//       });

//       // If Firebase is empty, fallback to static FOOD_MENU_DATA
//       return menuData.length ? menuData : FOOD_MENU_DATA;
//     } catch (error) {
//       console.error("Error fetching menu from Firebase:", error);
//       return FOOD_MENU_DATA; // fallback if Firebase fails
//     }
//   }
// );

export const fetchMenuList = createAsyncThunk(
  "menuLists/fetchMenuList",
  async () => {
    try {
      const docRef = doc(db, "foodManeList", "menuDoc");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        return docSnap.data().itemsMenuList || FOOD_MENU_DATA;
      }

      return FOOD_MENU_DATA;
    } catch (error) {
      console.error("Error fetching menu from Firebase:", error);
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
        state.itemsMenuList = FOOD_MENU_DATA; // fallback on error
      });
  },
});

export const { setSearch } = menuListItems.actions;
export default menuListItems.reducer;
