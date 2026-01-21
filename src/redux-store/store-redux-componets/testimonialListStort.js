import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { TestimonialData } from "../../api-data/testimonial-data/testimonial-data";

export const fetchTestimonial  = createAsyncThunk (
  "clientList/fetchTestimonial",
  async () => {
    //  const res = await axios.get(FOOD_MENU_DATA);
     return TestimonialData;
   }
)

const testimonialListItmes = createSlice({
  name: "clientList",
  initialState: {
    testimonialDataList: [],
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTestimonial.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTestimonial.fulfilled, (state, action) => {
        state.loading = false;
        state.testimonialDataList = action.payload;
      })
      .addCase(fetchTestimonial.rejected, (state) => {
        state.loading = false;
      });
  },
});


export default testimonialListItmes.reducer;