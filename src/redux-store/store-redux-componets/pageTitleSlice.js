import { createSlice } from "@reduxjs/toolkit";


const pageTitleSlice = createSlice({
  name: "pageTitle",
  initialState: {
    title: "Home",
  },
  reducers: {
    setPageTitle: (state, action) => {
      state.title = action.payload;
    },
  },
});

// const pageBodyClassSlice = createSlice({
//   name: "pageClass",
//   initialState: {
//     bodyClassName: "bx-home-layout-root",
//   },
//   reducers: {
//     setPageBodyClass: (state, action) => {
//       state.bodyClassName = action.payload;
//     },
//   },
// });

export const { setPageTitle } = pageTitleSlice.actions;
// export const { setPageBodyClass } = pageBodyClassSlice.actions;

// ✅ EXPORT REDUCERS (for store)
export const pageTitleReducer = pageTitleSlice.reducer;
// export const pageBodyClassReducer = pageBodyClassSlice.reducer;
