import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { FOOD_MENU_DATA } from "../api-data/manulist-data/manu-list-data";

export const fetchMenuList = createAsyncThunk(
  "menuLists/fetchMenuList",
  async () => {
    return FOOD_MENU_DATA;
  }
);

const menuListItems = createSlice({
  name: "menuLists",
  initialState: {
    itemsMenuList: [],
    loading: false,

    // 🔹 filters
    search: "",
    maxPrice: "",
    service: "",
    offerOnly: false,

    // ⭐ rating
    minRating: 0,
  },

  // ✅ ADD REDUCERS
  reducers: {
    setSearch(state, action) {
      state.search = action.payload;
    },
    setMaxPrice(state, action) {
      state.maxPrice = action.payload;
    },
    setService(state, action) {
      state.service = action.payload;
    },
    setOfferOnly(state, action) {
      state.offerOnly = action.payload;
    },
    setMinRating(state, action) {
      state.minRating = action.payload;
    },
    resetFilters(state) {
      state.search = "";
      state.maxPrice = "";
      state.service = "";
      state.offerOnly = false;
      state.minRating = 0;
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

// ✅ EXPORT ACTIONS
export const {
  setSearch,
  setMaxPrice,
  setService,
  setOfferOnly,
  setMinRating,
  resetFilters,
} = menuListItems.actions;

export default menuListItems.reducer;
