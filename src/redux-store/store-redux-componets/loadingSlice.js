// store/loadingSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  pageLoading: false,
};

const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.pageLoading = action.payload;
    },
  },
});

export const { setLoading } = loadingSlice.actions;
export default loadingSlice.reducer;
