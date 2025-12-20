import { createSlice } from "@reduxjs/toolkit";

const pageBoadyClass = createSlice({
  name: "pageTitle",
  initialState: {
   
    bodyClassName:`bx-${title}-layout-root`
  },
  reducers: {
    setPageBodyClass: (state, action) => {
      state.bodyClassName = action.payload;
    },
    
  },
});

export const { setPageTitle, setPageBodyClass } = pageBoadyClass.actions;
export default pageBoadyClass.reducer;
