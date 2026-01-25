// features/menu/menuSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../assets/firebase/firebase";
import { FOOD_MENU_DATA } from "../api-data/manulist-data/manu-list-data";

// Upload each menu item as a separate document
export const fetchMenuList = createAsyncThunk(
  "menu/fetchMenuList",
  async (_, { rejectWithValue }) => {
    try {
      const menuCollection = collection(db, "foodManeList");

      for (const item of FOOD_MENU_DATA) {
        await addDoc(menuCollection, item);
      }

      return "All menu items uploaded successfully!";
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


const menuSlice = createSlice({
  name: "menu",
  initialState: {
    loading: false,
    successMessage: "",
    errorMessage: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMenuList.pending, (state) => {
        state.loading = true;
        state.successMessage = "";
        state.errorMessage = "";
      })
      .addCase(fetchMenuList.fulfilled, (state, action) => {
        state.loading = false;
        state.successMessage = action.payload;
      })
      .addCase(fetchMenuList.rejected, (state, action) => {
        state.loading = false;
        state.errorMessage = action.payload;
      });
  },
});

export default menuSlice.reducer;
